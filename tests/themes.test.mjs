import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { BUILT_IN, THEME_ORDER, ART_LABELS, ART_NOTES } from "../js/themes.js";
import { AVATARS } from "../js/avatars.js";
import { AVATAR_IDS } from "../js/sanitize.js";
import { sanitizeTheme } from "../js/state.js";

test("every built-in theme survives the same checks as an import", () => {
  assert.equal(THEME_ORDER.length, 9);
  for (const k of THEME_ORDER) {
    const t = sanitizeTheme(BUILT_IN[k]);
    assert.equal(t.name, BUILT_IN[k].name, k);
    for (const f of ["layout", "skin", "font", "radius", "placeholder"]) assert.deepEqual(t[f], BUILT_IN[k][f], k + "." + f);
    assert.deepEqual(t.colors, BUILT_IN[k].colors, k + " colors");
    assert.equal(t.art.mascot, BUILT_IN[k].art.mascot, k + " mascot");
  }
});

test("every mascot id has art, a label and a note", () => {
  assert.deepEqual(Object.keys(AVATARS).sort(), [...AVATAR_IDS].sort());
  for (const id of AVATAR_IDS) { assert.ok(ART_LABELS[id], id); assert.ok(ART_NOTES[id], id); }
});

test("mascots carry nothing active", () => {
  for (const [id, svg] of Object.entries(AVATARS)) {
    assert.ok(svg.startsWith("<svg "), id);
    assert.ok(!/<script|<style|<image|<foreignObject|<a[ >]|\son\w+\s*=|\sstyle\s*=|javascript:|data:|https?:/i.test(svg), id + " has something it should not");
    for (const m of svg.matchAll(/\shref="([^"]*)"/g)) assert.match(m[1], /^#[A-Za-z0-9_-]+$/, id);
  }
});

test("stylesheets use no inline-only tricks and no outside addresses", () => {
  for (const f of ["base", "layouts", "avatars", "settings"]) {
    const css = readFileSync(new URL(`../css/${f}.css`, import.meta.url), "utf8");
    assert.ok(!/@import|expression\(|https?:\/\//i.test(css.replace(/url\("data:image\/svg\+xml,[^"]*"\)/g, "")), f);
    for (const m of css.matchAll(/url\(([^)]*)\)/g)) assert.match(m[1], /^["']?data:image\/svg\+xml,/, f + " url " + m[1].slice(0, 30));
  }
});