import { test } from "node:test";
import assert from "node:assert/strict";
import { deflateRawSync } from "node:zlib";
import { packShare, unpackShare } from "../js/share.js";
import { defaultState } from "../js/state.js";

const BASE = "https://example.github.io/startpage/";
const d = defaultState();
const b64 = (buf) => Buffer.from(buf).toString("base64url");

test("a personal link round-trips and stays small", async () => {
  const theme = { name: "Rigby", layout: "minimal", skin: "", placeholder: "Nap first. Search later.", colors: { accent: "#ec6c8f" }, art: { mode: "mascot", mascot: "rigby", size: 160 } };
  const { link, tooLong, length } = await packShare({ theme, groups: d.groups, general: { ...d.general, name: "Sam", engine: "duckduckgo" } }, BASE);
  assert.equal(tooLong, false); assert.ok(length < 2000, "link is " + length);
  const out = await unpackShare(new URL(link).hash);
  assert.equal(out.theme.name, "Rigby"); assert.equal(out.theme.art.mascot, "rigby"); assert.equal(out.theme.colors.accent, "#ec6c8f");
  assert.equal(out.theme.placeholder, "Nap first. Search later.");
  assert.equal(out.general.name, "Sam"); assert.equal(out.general.engine, "duckduckgo");
  assert.equal(out.groups.length, d.groups.length);
});

test("uploaded images never travel in a link", async () => {
  const theme = { name: "T", bg: { mode: "custom", src: "idb:abc123" }, art: { mode: "custom", src: "data:image/gif;base64,R0lGODlhAQABAAAAACw=" } };
  const { link } = await packShare({ theme, groups: [], general: d.general }, BASE);
  const out = await unpackShare(new URL(link).hash);
  assert.equal(out.theme.bg.src, ""); assert.equal(out.theme.bg.mode, "off");
  assert.equal(out.theme.art.src, ""); assert.equal(out.theme.art.mode, "mascot");
});

test("no link, and junk links", async () => {
  assert.deepEqual(await unpackShare(""), { none: true });
  assert.deepEqual(await unpackShare("#other"), { none: true });
  for (const h of ["#c=", "#c=z.", "#c=q.AAAA", "#c=z.@@@@", "#c=z.AAAA", "#c=r.AAAA", "#c=" + "z.".padEnd(30_000, "A")])
    assert.ok((await unpackShare(h)).error, "should reject " + h.slice(0, 20));
});

test("a compression bomb is refused", async () => {
  const bomb = deflateRawSync(Buffer.alloc(12_000_000, 97));        // 12 MB of "a", about 12 KB packed
  assert.ok(bomb.length < 17_000);
  const out = await unpackShare("#c=z." + b64(bomb));
  assert.match(out.error, /too large|damaged/);
});

test("hostile content inside a valid link is cleaned", async () => {
  const evil = { v: 1, theme: { name: "x", layout: "<x>", skin: "evil", colors: { bg: "red" }, art: { mascot: "__proto__", src: "javascript:1" }, bg: { src: "javascript:1", mode: "custom" } },
    groups: [{ title: "T", links: [{ label: "a", url: "javascript:alert(1)", key: "zz" }, { label: "ok", url: "https://example.com", key: "O" }] }],
    general: { engine: "__proto__", customSearch: "https://evil/?q=" } };
  const out = await unpackShare("#c=r." + b64(JSON.stringify(evil)));
  assert.equal(out.theme.layout, "cards"); assert.equal(out.theme.skin ?? "", ""); assert.equal(out.theme.colors.bg, "#111111");
  assert.equal(out.theme.art.mascot, "drop"); assert.equal(out.theme.art.src, ""); assert.equal(out.theme.bg.src, "");
  assert.deepEqual(out.groups[0].links, [{ label: "ok", url: "https://example.com/", key: "o" }]);
  assert.equal(out.general.engine, "google"); assert.equal(out.general.customSearch, "");
  assert.equal((await unpackShare("#c=r." + b64('{"v":2,"theme":{}}'))).error, "That link is not from this page.");
});