import { test } from "node:test";
import assert from "node:assert/strict";
import * as z from "../js/sanitize.js";

const blocked = (fn, list) => list.forEach((v) => assert.equal(fn(v), "", "should block " + String(v).slice(0, 40)));

test("link addresses", () => {
  blocked(z.safeLinkUrl, ["javascript:alert(1)", "JaVaScRiPt:alert(1)", "java\tscript:alert(1)", "javascript:1", "data:text/html,<script>1</script>", "vbscript:x",
    "file:///etc/passwd", "mailto:a@b.c", "chrome://settings", "https://user:pw@evil.com", "https:\\\\evil.com", "/relative", "?q=1", "..", "https://",
    "http://exa mple.com", "https://a.com/‮evil", "", "   ", null, 5, {}, "https://" + "a".repeat(3000)]);
  assert.equal(z.safeLinkUrl("example.com"), "https://example.com/");
  assert.equal(z.safeLinkUrl("https://example.com/a?b=1#c"), "https://example.com/a?b=1#c");
  assert.equal(z.safeLinkUrl("//example.com/x"), "https://example.com/x");
  assert.equal(z.safeLinkUrl("localhost:3000/app"), "https://localhost:3000/app");
  assert.equal(z.safeLinkUrl("http://192.168.1.1/"), "http://192.168.1.1/");
});

test("image addresses", () => {
  blocked(z.safeImageUrl, ["javascript:1", "data:image/svg+xml;base64,PHN2Zz4=", "data:text/html;base64,AAAA", "data:image/png;base64,AA AA", "blob:https://x/y", "idb:../x", "idb:AB", "file:///x.png"]);
  assert.equal(z.safeImageUrl("idb:abc123"), "idb:abc123");
  assert.equal(z.safeImageUrl("https://x.com/a.gif"), "https://x.com/a.gif");
  assert.equal(z.safeImageUrl("data:image/gif;base64,R0lGODlhAQABAAAAACw="), "data:image/gif;base64,R0lGODlhAQABAAAAACw=");
});

test("css url escaping", () => {
  assert.equal(z.cssUrl('https://a.com/x"); background:url(https://evil'), 'url("https://a.com/x\\22 \\29 ; background:url\\28 https://evil")');
});

test("search templates", () => {
  blocked(z.safeSearchTemplate, ["https://evil.com/?q=", "https://{q}.evil.com/", "https://a.com:{q}/", "https://a.com/{q}{q}", "javascript:{q}", "ftp://a.com/{q}",
    "https://a.com/{x}?q={q}", "https://u:p@a.com/?q={q}", "//a.com/?q={q}", "https://a.com@{q}/"]);
  assert.equal(z.safeSearchTemplate("https://kagi.com/search?q={q}"), "https://kagi.com/search?q={q}");
  assert.equal(z.safeSearchTemplate("https://a.com/s/{q}"), "https://a.com/s/{q}");
});

test("colors, fonts, numbers, text, keys", () => {
  assert.equal(z.safeColor("#AABBCC", "#000000"), "#aabbcc");
  ["red", "#fff", "#ggg000", "url(x)", "#aabbcc;x", 5, null, "#aabbccdd"].forEach((v) => assert.equal(z.safeColor(v, "#000000"), "#000000"));
  assert.equal(z.safeFont('ui-monospace, "JetBrains Mono", Menlo', "x"), 'ui-monospace, "JetBrains Mono", Menlo');
  ["a; background:url(//evil)", "a} body{display:none", "url(x)", "a\\b", "a/*", '"unbalanced', "<b>", "x".repeat(300)].forEach((v) => assert.equal(z.safeFont(v, "F"), "F"));
  assert.deepEqual([z.clampNumber(999, 0, 28, 5), z.clampNumber("abc", 0, 28, 5), z.clampNumber(NaN, 0, 28, 5), z.clampNumber(-3, 0, 28, 5), z.clampNumber("", 0, 28, 5), z.clampNumber([], 0, 28, 5), z.clampNumber(true, 0, 28, 5)], [28, 5, 5, 0, 5, 5, 5]);
  assert.equal(z.safeText("  hi‮\u0000  there\n\n", 40), "hi there");
  assert.equal(z.safeText("x".repeat(100), 10), "x".repeat(10));
  assert.deepEqual(["G", "gg", "/", " ", 5, "é"].map(z.safeKey), ["g", "", "", "", "", ""]);
});