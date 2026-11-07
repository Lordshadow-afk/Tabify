import { test } from "node:test";
import assert from "node:assert/strict";
import { searchUrl, resolveQuery, looksLikeUrl, engineLabel, templateFor } from "../js/search.js";
import { buildShortcuts } from "../js/links.js";

const g = (o = {}) => ({ engine: "google", customSearch: "", ...o });

test("search addresses encode what you type", () => {
  assert.equal(searchUrl(g(), "cats & dogs/?#"), "https://www.google.com/search?q=cats%20%26%20dogs%2F%3F%23");
  assert.equal(searchUrl(g({ engine: "duckduckgo" }), "a"), "https://duckduckgo.com/?q=a");
});

test("custom engine falls back to Google unless safe", () => {
  assert.equal(templateFor(g({ engine: "custom", customSearch: "https://kagi.com/search?q={q}" })), "https://kagi.com/search?q={q}");
  for (const bad of ["", "javascript:{q}", "https://{q}.evil.com/", "https://evil.com/"])
    assert.equal(templateFor(g({ engine: "custom", customSearch: bad })), "https://www.google.com/search?q={q}");
  assert.equal(templateFor(g({ engine: "__proto__" })), "https://www.google.com/search?q={q}");
  assert.equal(engineLabel(g({ engine: "custom", customSearch: "https://www.kagi.com/s?q={q}" })), "kagi.com");
  assert.equal(engineLabel(g({ engine: "custom" })), "google");
});

test("typed text: address or search, never a script", () => {
  assert.equal(looksLikeUrl("example.com/a"), true);
  assert.equal(looksLikeUrl("two words.com"), false);
  assert.equal(resolveQuery(g(), "example.com"), "https://example.com/");
  assert.equal(resolveQuery(g(), "  "), "");
  assert.ok(resolveQuery(g(), "javascript:alert(1)").startsWith("https://www.google.com/search?q=javascript"));
  assert.ok(resolveQuery(g(), "data:text/html,x").startsWith("https://www.google.com/search?q="));
});

test("shortcuts: first link wins, odd keys are plain data", () => {
  const m = buildShortcuts([{ title: "a", links: [{ label: "x", url: "https://a.com/", key: "g" }, { label: "y", url: "https://b.com/", key: "g" }, { label: "z", url: "https://c.com/", key: "" }] }]);
  assert.equal(m.g, "https://a.com/");
  assert.equal(m.constructor, undefined);
  assert.equal(m.toString, undefined);
});