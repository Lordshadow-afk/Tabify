// share.js
// The "personal link": your whole setup packed into the part of a web address after "#".
// Set that address as your New Tab Override page (or bookmark it) and your settings come back
// after the browser's site data is cleared, because the extension or bookmark stores the address,
// not this page. The part after "#" is never sent to any server.
//
// Reading a link is reading untrusted input, so everything goes through the same checks as
// imports (state.js), and the packed data may not expand past LIMITS.shareJson bytes.
//
// Format:  #c=z.<base64url of deflate-raw JSON>     (or  #c=r.<base64url of plain JSON>  when the
//                                                    browser cannot compress)

import { LIMITS, isPlainObject } from "./sanitize.js";
import { sanitizeTheme, sanitizeGroups, sanitizeState, defaultState } from "./state.js";

const PREFIX = "#c=";
const VERSION = 1;

// ---------- base64url ----------

function toB64url(bytes) {
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromB64url(text) {
  if (!/^[A-Za-z0-9_-]*$/.test(text)) return null;
  const b64 = text.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (text.length % 4)) % 4);
  try {
    const bin = atob(b64);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  } catch { return null; }
}

// ---------- what goes into a link ----------

/** Uploaded files live only in this browser (idb: / blob: references), so they cannot travel in a link. */
function withoutLocalImages(theme) {
  const t = sanitizeTheme(theme) || sanitizeTheme({ name: "Theme" });
  const local = (s) => s.startsWith("idb:") || s.startsWith("data:");
  if (local(t.bg.src)) { t.bg.src = ""; if (t.bg.mode === "custom") t.bg.mode = "off"; }
  if (local(t.art.src)) { t.art.src = ""; if (t.art.mode === "custom") t.art.mode = "mascot"; }
  return t;
}

/** The plain object that is packed: the active theme (resolved), cards and general settings. */
export function buildSharePayload({ theme, groups, general }) {
  const s = sanitizeState({ groups, general });
  return { v: VERSION, theme: withoutLocalImages(theme), groups: s.groups, general: s.general };
}

// ---------- pack ----------

/** Returns { link, length, tooLong }. `base` is the page address without any "#". */
export async function packShare(input, base) {
  const json = new TextEncoder().encode(JSON.stringify(buildSharePayload(input)));
  let tag = "r", bytes = json;
  if (typeof CompressionStream === "function") {
    const stream = new Blob([json]).stream().pipeThrough(new CompressionStream("deflate-raw"));
    bytes = new Uint8Array(await new Response(stream).arrayBuffer());
    tag = "z";
  }
  const link = String(base).split("#")[0] + PREFIX + tag + "." + toB64url(bytes);
  return { link, length: link.length, tooLong: link.length > LIMITS.shareLink };
}

// ---------- unpack ----------

/** Read at most `max` bytes out of a decompressing stream; give up (null) when there is more. */
async function inflateLimited(bytes, max) {
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  const reader = stream.getReader();
  const chunks = [];
  let total = 0;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.length;
      if (total > max) { await reader.cancel(); return null; }
      chunks.push(value);
    }
  } catch { return null; }
  const out = new Uint8Array(total);
  let at = 0;
  for (const c of chunks) { out.set(c, at); at += c.length; }
  return out;
}

/**
 * `hash` is location.hash. Returns { none: true } when there is no personal link, { error } when there
 * is one we cannot use, or { theme, groups, general } already cleaned by the same rules as imports.
 */
export async function unpackShare(hash) {
  if (typeof hash !== "string" || !hash.startsWith(PREFIX)) return { none: true };
  if (hash.length > LIMITS.shareIn) return { error: "That link is too long to be one of ours." };
  const body = hash.slice(PREFIX.length);
  const tag = body.slice(0, 2), data = fromB64url(body.slice(2));
  if ((tag !== "z." && tag !== "r.") || !data) return { error: "That link is damaged." };

  let bytes = data;
  if (tag === "z.") {
    if (typeof DecompressionStream !== "function") return { error: "This browser cannot open compressed links." };
    bytes = await inflateLimited(data, LIMITS.shareJson);
    if (!bytes) return { error: "That link is damaged or far too large." };
  } else if (bytes.length > LIMITS.shareJson) return { error: "That link is far too large." };

  let raw;
  try { raw = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes)); } catch { return { error: "That link is damaged." }; }
  if (!isPlainObject(raw) || raw.v !== VERSION || !isPlainObject(raw.theme)) return { error: "That link is not from this page." };

  const theme = withoutLocalImages(raw.theme);
  const groups = sanitizeGroups(raw.groups) || defaultState().groups;
  const general = sanitizeState({ general: raw.general }).general;
  return { theme, groups, general };
}

// re-exported so callers need only this file for the link format
export const SHARE_PREFIX = PREFIX;