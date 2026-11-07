// media.js
// Your own images and GIFs. Uploaded files are stored in this browser (IndexedDB) and shown through blob:
// addresses; themes refer to them as "idb:<id>". Nothing is uploaded anywhere.
//
// An upload is accepted only if its first bytes say it is a png, jpeg, gif, webp or avif image (the file's
// name and the browser's guess are not trusted), and only up to LIMITS.uploadBytes. SVG is never accepted,
// because an SVG can carry scripts.

import { LIMITS, safeText } from "./sanitize.js";

const DB_NAME = "startpage-themes";
const STORE = "files";

// ---------- what a file really is ----------

/** Looks at the first bytes. Returns "image/png" and friends, or "" for anything else. */
export function sniffImage(bytes) {
  const b = bytes;
  const at = (i, s) => s.split("").every((c, j) => b[i + j] === c.charCodeAt(0));
  if (b.length >= 8 && b[0] === 0x89 && at(1, "PNG") && b[4] === 0x0d && b[5] === 0x0a && b[6] === 0x1a && b[7] === 0x0a) return "image/png";
  if (b.length >= 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return "image/jpeg";
  if (b.length >= 6 && (at(0, "GIF87a") || at(0, "GIF89a"))) return "image/gif";
  if (b.length >= 12 && at(0, "RIFF") && at(8, "WEBP")) return "image/webp";
  if (b.length >= 12 && at(4, "ftyp") && (at(8, "avif") || at(8, "avis"))) return "image/avif";
  return "";
}

export function newId() {
  const a = new Uint8Array(8);
  crypto.getRandomValues(a);
  return [...a].map((x) => x.toString(16).padStart(2, "0")).join("");
}

/** Every "idb:<id>" a theme list refers to. */
export function idsIn(themes) {
  const out = new Set();
  for (const t of themes) for (const src of [t?.bg?.src, t?.art?.src]) {
    const m = typeof src === "string" && /^idb:([a-z0-9]{4,40})$/.exec(src);
    if (m) out.add(m[1]);
  }
  return out;
}

// ---------- IndexedDB ----------

let dbPromise;
function db() {
  dbPromise ??= new Promise((resolve, reject) => {
    if (!globalThis.indexedDB) { reject(new Error("no storage")); return; }
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE, { keyPath: "id" });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
    req.onblocked = () => reject(new Error("blocked"));
  });
  return dbPromise;
}

async function run(mode, fn) {
  const d = await db();
  return new Promise((resolve, reject) => {
    const t = d.transaction(STORE, mode);
    const req = fn(t.objectStore(STORE));
    t.oncomplete = () => resolve(req?.result);
    t.onerror = t.onabort = () => reject(t.error);
  });
}

const urls = new Map();     // id -> blob: address, for this page load
const names = new Map();    // id -> file name

/** The loadable address for "idb:<id>", or "" if it is not loaded (yet, or any more). */
export function resolve(ref) {
  const m = /^idb:([a-z0-9]{4,40})$/.exec(ref || "");
  return (m && urls.get(m[1])) || "";
}

export function nameOf(ref) {
  const m = /^idb:([a-z0-9]{4,40})$/.exec(ref || "");
  return (m && names.get(m[1])) || "";
}

function remember(rec) {
  if (urls.has(rec.id)) URL.revokeObjectURL(urls.get(rec.id));
  urls.set(rec.id, URL.createObjectURL(rec.blob));
  names.set(rec.id, rec.name);
}

/** Loads the files a theme list needs. Returns how many are missing. Never throws. */
export async function preload(ids) {
  let missing = 0;
  for (const id of ids) {
    try {
      const rec = await run("readonly", (s) => s.get(id));
      if (rec && rec.blob instanceof Blob && sniffImage(new Uint8Array(await rec.blob.slice(0, 16).arrayBuffer()))) remember(rec);
      else missing++;
    } catch { missing++; }
  }
  return missing;
}

/** Stores bytes under an id (used by upload and backup restore). Throws a message you can show. */
export async function putBytes(id, bytes, name) {
  const mime = sniffImage(bytes);
  if (!mime) throw new Error("That is not a png, jpeg, gif, webp or avif image.");
  if (bytes.length > LIMITS.uploadBytes) throw new Error("That file is over 30 MB. Use a smaller one.");
  const rec = { id, name: safeText(name, 60, "image"), blob: new Blob([bytes], { type: mime }) };
  try { await run("readwrite", (s) => s.put(rec)); }
  catch { throw new Error("This browser would not store the file (private window or no space)."); }
  remember(rec);
  return id;
}

export async function putFile(file) {
  if (!file || file.size > LIMITS.uploadBytes) throw new Error("That file is over 30 MB. Use a smaller one.");
  const bytes = new Uint8Array(await file.arrayBuffer());
  return putBytes(newId(), bytes, file.name);
}

export async function getBytes(id) {
  const rec = await run("readonly", (s) => s.get(id));
  return rec && rec.blob ? { bytes: new Uint8Array(await rec.blob.arrayBuffer()), name: rec.name } : null;
}

/** Removes stored files that no theme refers to any more. */
export async function collect(keep) {
  try {
    const all = await run("readonly", (s) => s.getAllKeys());
    for (const id of all) {
      if (keep.has(id)) continue;
      await run("readwrite", (s) => s.delete(id));
      if (urls.has(id)) { URL.revokeObjectURL(urls.get(id)); urls.delete(id); names.delete(id); }
    }
  } catch { /* nothing to clean, or storage unavailable */ }
}