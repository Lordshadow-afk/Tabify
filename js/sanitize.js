// sanitize.js
// Every check on untrusted input lives here and nowhere else.
//
// "Untrusted" means anything a person can type, paste, import or upload: link addresses, card names,
// colors, fonts, image addresses, search addresses, imported JSON, and whatever is sitting in storage
// (storage can be edited by hand or by another script on the same origin).
//
// Rules this file enforces:
//   - Links and images can only point to http(s) addresses (images may also be our own "idb:" refs).
//   - Text is plain text. It is stripped of control and direction-changing characters and length-limited.
//   - Colors are exactly #rrggbb. Fonts are a short safe character set. Numbers are clamped.
//   - Every function returns a safe value or a fallback. None of them throw on bad input.

export const COLOR_KEYS = ["bg", "surface", "border", "text", "muted", "accent", "accentText"];
export const LAYOUT_IDS = ["accordion", "minimal", "cards"];
export const AVATAR_IDS = ["drop", "cat", "bot", "ghost", "sprout", "sun", "jelly", "planet", "crt", "heart", "hound", "specter",
  "tangerine", "stargazers", "sakura", "rigby", "seal", "skeleton", "lamplight"];
export const SKIN_IDS = ["", "retro", "classical", "ink", "poster"];
export const ENGINE_IDS = ["google", "duckduckgo", "brave", "bing", "ecosia", "youtube", "github", "custom"];
export const BG_MODES = ["off", "sample", "custom"];
export const ART_MODES = ["mascot", "custom", "none"];
export const FIT_MODES = ["cover", "contain"];

export const LIMITS = Object.freeze({
  url: 2048,            // characters in one address
  dataUrl: 12_000_000,  // characters in an imported data: image (about 9 MB of image)
  name: 40,             // theme name, your name
  placeholder: 80,      // the text inside the empty search bar
  title: 60,            // card title, link label
  font: 200,
  groups: 40,           // cards
  linksPerGroup: 60,
  linksTotal: 500,
  themes: 30,           // custom themes
  stored: 5_000_000,    // characters read back from storage
  importText: 13_000_000,
  uploadBytes: 30 * 1024 * 1024,
  shareLink: 8000,      // characters in a personal link we create
  shareIn: 24_000,      // characters of a personal link we are willing to read
  shareJson: 64_000,    // bytes a personal link may expand to (stops "zip bombs")
});

// ---------- small helpers ----------

export function isPlainObject(v) {
  if (v === null || typeof v !== "object" || Array.isArray(v)) return false;
  const proto = Object.getPrototypeOf(v);
  return proto === Object.prototype || proto === null;
}

/** Own-property check, so "constructor" or "toString" in imported JSON can never be mistaken for data. */
export function own(obj, key) {
  return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
}

/** An object with no prototype, for maps keyed by names we did not choose. */
export function newMap() {
  return Object.create(null);
}

/** Ids for themes: lowercase letters, digits and hyphens only. */
export function isId(v) {
  return typeof v === "string" && /^[a-z0-9-]{1,40}$/.test(v);
}

export function clampNumber(v, min, max, fallback) {
  if (typeof v === "string" && v.trim() === "") return fallback;
  if (typeof v !== "number" && typeof v !== "string") return fallback;
  const n = Number(v);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

export function safeBool(v, fallback) {
  return typeof v === "boolean" ? v : fallback;
}

export function oneOf(v, allowed, fallback) {
  return typeof v === "string" && allowed.includes(v) ? v : fallback;
}

// ---------- text ----------

// control characters, zero-width characters and left-to-right / right-to-left overrides
const INVISIBLE = /[\u0000-\u001f\u007f-\u009f\u200b-\u200f\u2028\u2029\u202a-\u202e\u2060-\u2064\u2066-\u2069\ufeff]/g;

/** Plain text for names, titles and labels. Output is only ever shown with textContent, never as HTML. */
export function safeText(v, max, fallback = "") {
  if (typeof v !== "string") return fallback;
  const cleaned = v.replace(INVISIBLE, " ").replace(/\s+/g, " ").trim();
  if (!cleaned) return fallback;
  return Array.from(cleaned).slice(0, max).join("");
}

/** One shortcut key: a single letter or digit, lowercase. "/" is reserved for focusing search. */
export function safeKey(v) {
  if (typeof v !== "string") return "";
  const k = v.trim().toLowerCase();
  return /^[a-z0-9]$/.test(k) ? k : "";
}

// ---------- addresses ----------

// whitespace, control characters and direction overrides are never valid inside an address
const BAD_URL_CHAR = /[\u0000-\x20\u007f-\u009f\u2028\u2029\u200b-\u200f\u202a-\u202e\u2060-\u2064\u2066-\u2069\ufeff]/;

// "javascript:1" looks like host:port to the check below, so names that are really schemes are refused as hosts
const SCHEME_NAMES = new Set(["javascript", "data", "vbscript", "file", "blob", "about", "chrome", "mailto", "tel", "sms",
  "intent", "view-source", "moz-extension", "chrome-extension", "ftp", "ws", "wss"]);

/** Returns a URL object for a safe http(s) address, or null. Adds https:// when no scheme was typed. */
function parseHttp(raw) {
  if (typeof raw !== "string") return null;
  let s = raw.trim();
  if (!s || s.length > LIMITS.url || BAD_URL_CHAR.test(s)) return null;

  // "name:" counts as a scheme unless it is a port like "localhost:3000"
  const hasScheme = /^[a-z][a-z0-9+.-]*:(?!\d+(?:[/?#]|$))/i.test(s);
  if (hasScheme) {
    if (!/^https?:\/\/[a-z0-9[]/i.test(s)) return null;   // javascript:, data:, file:, mailto:, https:\\ ...
  } else {
    if (s.startsWith("//")) s = s.slice(2);
    if (!/^[a-z0-9[]/i.test(s)) return null;                // "/path", "?x", ".." and similar are not addresses
    s = "https://" + s;
  }

  let u;
  try { u = new URL(s); } catch { return null; }
  if (u.protocol !== "http:" && u.protocol !== "https:") return null;
  if (u.username || u.password) return null;                // user:pass@host looks real but goes elsewhere
  if (!u.hostname || SCHEME_NAMES.has(u.hostname)) return null;
  return u;
}

/** A link address you can safely put in an <a href>. Empty string when it is not safe. */
export function safeLinkUrl(raw) {
  const u = parseHttp(raw);
  return u ? u.href : "";
}

/**
 * An image or GIF source. Allowed: an http(s) address, our own "idb:<id>" reference to an upload,
 * or (only inside imported theme files) a base64 png/jpeg/gif/webp/avif data address.
 * SVG data addresses are not accepted.
 */
export function safeImageUrl(raw) {
  if (typeof raw !== "string") return "";
  const s = raw.trim();
  if (!s) return "";
  if (/^idb:[a-z0-9]{4,40}$/.test(s)) return s;
  if (s.slice(0, 5).toLowerCase() === "data:") {
    if (s.length > LIMITS.dataUrl) return "";
    return /^data:image\/(?:png|jpeg|gif|webp|avif);base64,[A-Za-z0-9+/]+={0,2}$/.test(s) ? s : "";
  }
  return safeLinkUrl(s);
}

/** Wrap an already-safe address for use in CSS, escaping anything that could end the string early. */
export function cssUrl(safeUrl) {
  const escaped = String(safeUrl).replace(/[\\"\n\r\f()]/g, (c) => "\\" + c.charCodeAt(0).toString(16) + " ");
  return 'url("' + escaped + '")';
}

/**
 * A custom search address. Must start with http:// or https://, contain {q} exactly once, and the
 * {q} may not sit in the host part, so what you search for can never change which site is contacted.
 */
export function safeSearchTemplate(raw) {
  if (typeof raw !== "string") return "";
  const s = raw.trim();
  if (!/^https?:\/\//i.test(s)) return "";
  if (s.split("{q}").length !== 2) return "";
  if (/[{}]/.test(s.replace("{q}", ""))) return "";
  const probe = "zqzqz";
  const u = parseHttp(s.replace("{q}", probe));
  if (!u) return "";
  if (u.hostname.includes(probe) || u.port.includes(probe)) return "";
  if (!(u.pathname + u.search + u.hash).includes(probe)) return "";
  return s;
}

// ---------- look and feel ----------

export function safeColor(v, fallback) {
  return typeof v === "string" && /^#[0-9a-fA-F]{6}$/.test(v.trim()) ? v.trim().toLowerCase() : fallback;
}

/**
 * A CSS font-family list: letters, digits, spaces, commas, dots, hyphens, underscores and quotes only,
 * with balanced quotes. No parentheses, semicolons, braces, slashes or backslashes, so it cannot
 * carry url(), a second declaration or a comment.
 */
export function safeFont(v, fallback) {
  if (typeof v !== "string") return fallback;
  const s = v.trim().replace(/\s+/g, " ");
  if (!s || s.length > LIMITS.font) return fallback;
  if (!/^[A-Za-z0-9 ,'"._-]+$/.test(s)) return fallback;
  if ((s.match(/"/g) || []).length % 2 !== 0) return fallback;
  if ((s.match(/'/g) || []).length % 2 !== 0) return fallback;
  return s;
}