// backup.js
// The backup file: your settings plus the images you uploaded. Reading one is reading untrusted input, so the
// settings go through sanitizeState() and every image is checked by its bytes, size and count before it is kept.
//
// Format: { "format": "startpage-backup", "version": 1, "state": {...}, "uploads": { "<id>": "data:image/...;base64,..." } }

import { LIMITS, isPlainObject, newMap, own } from "./sanitize.js";
import { sanitizeState } from "./state.js";
import { sniffImage } from "./media.js";

export const BACKUP_FORMAT = "startpage-backup";
export const MAX_BACKUP_CHARS = 60_000_000;
const MAX_UPLOADS = 40;

function toBase64(bytes) {
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}

function fromBase64(text) {
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(text)) return null;
  try {
    const bin = atob(text);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  } catch { return null; }
}

/** files: Map id -> Uint8Array */
export function buildBackup(state, files) {
  const uploads = {};
  for (const [id, bytes] of files) {
    const mime = sniffImage(bytes);
    if (mime) uploads[id] = "data:" + mime + ";base64," + toBase64(bytes);
  }
  return JSON.stringify({ format: BACKUP_FORMAT, version: 1, state, uploads }, null, 2);
}

/** Returns { state, files: Map id -> Uint8Array, skipped } or { error }. */
export function parseBackup(text) {
  if (typeof text !== "string" || !text.trim()) return { error: "That file is empty." };
  if (text.length > MAX_BACKUP_CHARS) return { error: "That file is too large to be a backup." };
  let raw;
  try { raw = JSON.parse(text); } catch { return { error: "That is not a backup from this page." }; }
  if (!isPlainObject(raw) || raw.format !== BACKUP_FORMAT || raw.version !== 1 || !isPlainObject(raw.state))
    return { error: "That is not a backup from this page." };

  const files = newMap();
  let skipped = 0;
  if (isPlainObject(raw.uploads)) {
    for (const id of Object.keys(raw.uploads).slice(0, MAX_UPLOADS)) {
      const m = /^data:image\/(?:png|jpeg|gif|webp|avif);base64,([A-Za-z0-9+/]+={0,2})$/.exec(String(raw.uploads[id]));
      const bytes = /^[a-z0-9]{4,40}$/.test(id) && m && m[1].length <= Math.ceil(LIMITS.uploadBytes * 4 / 3) + 8 ? fromBase64(m[1]) : null;
      if (bytes && bytes.length <= LIMITS.uploadBytes && sniffImage(bytes)) files[id] = bytes; else skipped++;
    }
  }
  return { state: sanitizeState(raw.state), files: new Map(Object.keys(files).map((k) => [k, files[k]])), skipped, has: (id) => own(files, id) };
}