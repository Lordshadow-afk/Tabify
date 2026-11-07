import { test } from "node:test";
import assert from "node:assert/strict";
import { sniffImage, idsIn } from "../js/media.js";
import { buildBackup, parseBackup } from "../js/backup.js";
import { defaultState } from "../js/state.js";

const PNG = Uint8Array.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 0]);
const b64 = (u8) => Buffer.from(u8).toString("base64");

test("an upload is judged by its bytes, never by its name or type", () => {
  assert.equal(sniffImage(PNG), "image/png");
  assert.equal(sniffImage(Uint8Array.from([0xff, 0xd8, 0xff, 0xe0])), "image/jpeg");
  assert.equal(sniffImage(Buffer.from("GIF89a....")), "image/gif");
  assert.equal(sniffImage(Buffer.from("RIFF....WEBPVP8 ")), "image/webp");
  assert.equal(sniffImage(Buffer.from("\0\0\0\x1cftypavif....")), "image/avif");
  for (const bad of ["<svg xmlns='http://www.w3.org/2000/svg' onload='alert(1)'/>", "<html><script>1</script>", "%PDF-1.4", "", "GIF", "\x89PNG"])
    assert.equal(sniffImage(Buffer.from(bad)), "", JSON.stringify(bad));
});

test("references are found in every theme", () => {
  assert.deepEqual([...idsIn([{ bg: { src: "idb:abcd1234" }, art: { src: "https://x.com/a.png" } }, { art: { src: "idb:ffff0000" } }, {}])].sort(), ["abcd1234", "ffff0000"]);
  assert.equal(idsIn([{ bg: { src: "idb:../x" }, art: { src: "javascript:1" } }]).size, 0);
});

test("a backup round-trips with its images", () => {
  const s = defaultState();
  const text = buildBackup(s, new Map([["abcd1234", PNG], ["bad00000", Buffer.from("<svg/>")]]));
  const out = parseBackup(text);
  assert.equal(out.error, undefined);
  assert.deepEqual([...out.files.keys()], ["abcd1234"]);
  assert.equal(out.state.groups.length, s.groups.length);
});

test("hostile backups are cleaned or refused", () => {
  const wrap = (o) => JSON.stringify({ format: "startpage-backup", version: 1, ...o });
  for (const bad of ["", "{x", "[]", "{}", JSON.stringify({ format: "other", version: 1, state: {} }), wrap({ version: 2, state: {} }), wrap({ state: [] }), "x".repeat(60_000_001)])
    assert.ok(parseBackup(bad).error, String(bad).slice(0, 30));
  const out = parseBackup(wrap({
    state: { themeKey: "__proto__", groups: [{ title: "T", links: [{ label: "x", url: "javascript:1" }] }] },
    uploads: { "../x": "data:image/png;base64," + b64(PNG), aaaa1111: "data:image/svg+xml;base64," + b64(Buffer.from("<svg/>")), bbbb2222: "data:image/png;base64," + b64(Buffer.from("<svg/>")),
      cccc3333: "data:image/png;base64,@@@@", dddd4444: "data:image/png;base64," + b64(PNG) },
  }));
  assert.deepEqual([...out.files.keys()], ["dddd4444"]);
  assert.equal(out.skipped, 4);
  assert.equal(out.state.themeKey, "ryomen");
  assert.deepEqual(out.state.groups[0].links, []);
  assert.equal(({}).polluted, undefined);
});