// state.js
// Load, validate and save settings in localStorage. Nothing read from storage or from an import is
// trusted: it is copied field by field into a fresh object through the checks in sanitize.js.
// Unknown fields are dropped. Wrong types fall back to defaults. This file never throws on bad data.

import {
  COLOR_KEYS, LAYOUT_IDS, SKIN_IDS, AVATAR_IDS, ENGINE_IDS, BG_MODES, ART_MODES, FIT_MODES, LIMITS,
  isPlainObject, own, newMap, isId, clampNumber, safeBool, oneOf,
  safeText, safeKey, safeLinkUrl, safeImageUrl, safeColor, safeFont, safeSearchTemplate,
} from "./sanitize.js";

export const STORAGE_KEY = "startpage-themes:v1";
export const STATE_VERSION = 1;

const BASE_COLORS = Object.freeze({
  bg: "#111111", surface: "#1a1a1a", border: "#2e2e2e", text: "#eeeeee",
  muted: "#999999", accent: "#7aa2f7", accentText: "#111111",
});
const BASE_FONT = "system-ui, sans-serif";

const SAMPLE_GROUPS = Object.freeze([
  { title: "Dev", links: [
    { label: "GitHub", url: "https://github.com", key: "g" },
    { label: "Stack Overflow", url: "https://stackoverflow.com", key: "s" },
    { label: "MDN", url: "https://developer.mozilla.org", key: "m" },
  ] },
  { title: "Media", links: [
    { label: "YouTube", url: "https://youtube.com", key: "y" },
    { label: "Reddit", url: "https://reddit.com", key: "r" },
    { label: "Twitch", url: "https://twitch.tv", key: "t" },
  ] },
  { title: "Tools", links: [
    { label: "Gmail", url: "https://mail.google.com", key: "e" },
    { label: "Drive", url: "https://drive.google.com", key: "d" },
    { label: "Claude", url: "https://claude.ai", key: "c" },
  ] },
]);

// ---------- themes ----------

/** Build a clean theme from anything. Returns null when the input is not an object at all. */
export function sanitizeTheme(raw) {
  if (!isPlainObject(raw)) return null;
  const rawColors = isPlainObject(raw.colors) ? raw.colors : {};
  const rawBg = isPlainObject(raw.bg) ? raw.bg : {};
  const rawArt = isPlainObject(raw.art) ? raw.art : {};

  const colors = {};
  for (const k of COLOR_KEYS) colors[k] = safeColor(own(rawColors, k) ? rawColors[k] : undefined, BASE_COLORS[k]);

  return {
    name: safeText(raw.name, LIMITS.name, "Untitled theme"),
    layout: oneOf(raw.layout, LAYOUT_IDS, "cards"),
    skin: oneOf(raw.skin, SKIN_IDS, ""),
    fx: { crt: safeBool(isPlainObject(raw.fx) ? raw.fx.crt : undefined, false) },
    placeholder: safeText(raw.placeholder, LIMITS.placeholder, ""),
    font: safeFont(raw.font, BASE_FONT),
    radius: Math.round(clampNumber(raw.radius, 0, 999, 12)),
    colors,
    bg: {
      mode: oneOf(rawBg.mode, BG_MODES, "off"),
      src: safeImageUrl(rawBg.src),
      fit: oneOf(rawBg.fit, FIT_MODES, "cover"),
      overlay: clampNumber(rawBg.overlay, 0, 1, 0.45),
    },
    art: {
      mode: oneOf(rawArt.mode, ART_MODES, "mascot"),
      mascot: oneOf(rawArt.mascot, AVATAR_IDS, "drop"),
      src: safeImageUrl(rawArt.src),
      size: Math.round(clampNumber(rawArt.size, 40, 320, 120)),
    },
  };
}

// ---------- cards and links ----------

export function sanitizeGroups(raw) {
  if (!Array.isArray(raw)) return null;
  const groups = [];
  let total = 0;
  for (const g of raw.slice(0, LIMITS.groups)) {
    if (!isPlainObject(g)) continue;
    const title = safeText(g.title, LIMITS.title);
    if (!title) continue;
    const links = [];
    if (Array.isArray(g.links)) {
      for (const l of g.links.slice(0, LIMITS.linksPerGroup)) {
        if (total >= LIMITS.linksTotal) break;
        if (!isPlainObject(l)) continue;
        const label = safeText(l.label, LIMITS.title);
        const url = safeLinkUrl(l.url);
        if (!label || !url) continue;
        links.push({ label, url, key: safeKey(l.key) });
        total++;
      }
    }
    groups.push({ title, links });
  }
  return groups;
}

// ---------- the whole saved state ----------

export function defaultState() {
  return {
    version: STATE_VERSION,
    themeKey: "ryomen",
    customThemes: newMap(),
    groups: sanitizeGroups(SAMPLE_GROUPS),
    general: { name: "", engine: "google", customSearch: "", hour24: true, shortcuts: true },
  };
}

export function sanitizeState(raw) {
  const out = defaultState();
  if (!isPlainObject(raw)) return out;

  if (isId(raw.themeKey)) out.themeKey = raw.themeKey;

  if (isPlainObject(raw.customThemes)) {
    let n = 0;
    for (const key of Object.keys(raw.customThemes)) {
      if (n >= LIMITS.themes) break;
      if (!isId(key)) continue;
      const t = sanitizeTheme(raw.customThemes[key]);
      if (t) { out.customThemes[key] = t; n++; }
    }
  }

  const groups = sanitizeGroups(raw.groups);
  if (groups) out.groups = groups;           // an empty list is allowed: the person deleted every card

  if (isPlainObject(raw.general)) {
    const g = raw.general;
    out.general = {
      name: safeText(g.name, LIMITS.name),
      engine: oneOf(g.engine, ENGINE_IDS, "google"),
      customSearch: safeSearchTemplate(g.customSearch),
      hour24: safeBool(g.hour24, true),
      shortcuts: safeBool(g.shortcuts, true),
    };
  }
  return out;
}

// ---------- storage ----------

/**
 * status: "new"         nothing saved yet
 *         "ok"          loaded and checked
 *         "recovered"   saved data was unreadable or too large, defaults are used (nothing is overwritten until you change something)
 *         "unavailable" the browser refused access to storage; the page works but cannot remember settings
 */
export function loadState(storage) {
  let text;
  try {
    // reading localStorage itself can throw when a browser blocks site data, so it is read inside the try
    text = (storage ?? globalThis.localStorage).getItem(STORAGE_KEY);
  } catch {
    return { state: defaultState(), status: "unavailable" };
  }
  if (text == null) return { state: defaultState(), status: "new" };
  if (typeof text !== "string" || text.length > LIMITS.stored) return { state: defaultState(), status: "recovered" };
  try {
    return { state: sanitizeState(JSON.parse(text)), status: "ok" };
  } catch {
    return { state: defaultState(), status: "recovered" };
  }
}

/** Saves a cleaned copy (never the object you pass in). Returns true on success. */
export function saveState(state, storage) {
  try {
    (storage ?? globalThis.localStorage).setItem(STORAGE_KEY, JSON.stringify(sanitizeState(state)));
    return true;
  } catch {
    return false;
  }
}

// ---------- imports ----------

/** Pasted theme JSON. Returns { theme } or { error } with a message you can show as is. */
export function parseImportedTheme(text) {
  if (typeof text !== "string" || !text.trim()) return { error: "Paste a theme first." };
  if (text.length > LIMITS.importText) return { error: "That is too large to import." };
  let raw;
  try { raw = JSON.parse(text); } catch { return { error: "That is not valid JSON." }; }
  if (!isPlainObject(raw) || !safeText(raw.name, LIMITS.name)) return { error: "A theme needs a name." };
  return { theme: sanitizeTheme(raw) };
}

/** Pasted "everything" backup. Returns { state } or { error }. */
export function parseImportedState(text) {
  if (typeof text !== "string" || !text.trim()) return { error: "Paste a backup first." };
  if (text.length > LIMITS.importText) return { error: "That is too large to import." };
  let raw;
  try { raw = JSON.parse(text); } catch { return { error: "That is not valid JSON." }; }
  if (!isPlainObject(raw)) return { error: "That is not a backup." };
  return { state: sanitizeState(raw) };
}