// settings.js
// The Customize page. Loaded only when the Customize button is pressed. Every change goes through the same
// checks as an import (state.js / sanitize.js) before it is saved or shown. All text is set with textContent.

import { COLOR_KEYS, LIMITS, own, newMap, safeLinkUrl, safeText, safeKey, isId } from "./sanitize.js";
import { sanitizeTheme, sanitizeGroups, parseImportedTheme } from "./state.js";
import { BUILT_IN, THEME_ORDER, BASE_THEME_KEY, COLOR_LABELS, LAYOUT_LABELS, ART_LABELS, ART_NOTES } from "./themes.js";
import { ENGINES, searchUrl, customIsValid } from "./search.js";
import { buildSharePayload, packShare } from "./share.js";
import { buildBackup, parseBackup } from "./backup.js";
import * as media from "./media.js";
import { retype } from "./render.js";

const $ = (id) => document.getElementById(id);
const SKINS = { "": "Soft", retro: "Retro RPG", classical: "Classical Greek", ink: "Manga ink", poster: "Halftone poster" };
const BG_LABELS = { off: "Plain color", sample: "Sample animation", custom: "My image / GIF" };
const FIT_LABELS = { cover: "Fill screen", contain: "Show whole image" };

let app, wired = false, keepTimer;
const srcErr = { art: "", bg: "" };

// ---------- reading and changing the current theme ----------

const clone = (o) => structuredClone(o);
const theme = () => app.getTheme();

/** Change the current theme. A built-in theme is copied first, so the original is never altered. */
function editTheme(mutate) {
  const s = app.getState();
  const t = clone(theme());
  mutate(t);
  let key = s.themeKey;
  if (!own(s.customThemes, key)) key = key + "-mine";
  const customThemes = Object.assign(newMap(), s.customThemes, { [key]: sanitizeTheme(t) });
  app.commit({ ...s, themeKey: key, customThemes });
  tidyUploads();
  sync();
}

function editGeneral(patch) {
  const s = app.getState();
  app.commit({ ...s, general: { ...s.general, ...patch } });
  sync();
}

function tidyUploads() {
  const s = app.getState();
  media.collect(media.idsIn([...Object.values(s.customThemes)]));
}

function pickTheme(key) {
  const s = app.getState();
  if (!own(s.customThemes, key) && !own(BUILT_IN, key)) return;
  app.commit({ ...s, themeKey: key });
  retype(app.els.greeting, theme().skin);
  sync();
}

// ---------- small builders ----------

function seg(el, options, active, onPick) {
  el.textContent = "";
  for (const [k, label] of Object.entries(options)) {
    const b = document.createElement("button");
    b.type = "button"; b.textContent = label; b.setAttribute("aria-pressed", String(k === active));
    b.addEventListener("click", () => onPick(k));
    el.append(b);
  }
}

function setIfIdle(input, value) { if (document.activeElement !== input) input.value = value; }
function lum(hex) {
  const n = parseInt(hex.slice(1), 16);
  return (0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)) / 255;
}

// ---------- the panel ----------

function setPanel(open) {
  const panel = app.els.panel;
  panel.classList.toggle("open", open);
  panel.setAttribute("aria-hidden", String(!open));
  app.els.fab.setAttribute("aria-expanded", String(open));
  (open ? $("sp-close") : app.els.fab).focus();
}

function selectTab(name) {
  for (const b of document.querySelectorAll(".sp-tabs button")) b.setAttribute("aria-selected", String(b.dataset.ptab === name));
  for (const t of document.querySelectorAll(".ptab")) t.classList.toggle("active", t.dataset.ptab === name);
}

export function openSettings(a, tab) {
  app = a;
  if (!wired) { wire(); wired = true; }
  syncLinksText();
  sync();
  setPanel(true);
  if (tab) selectTab(tab);
}

// ---------- links text ----------

function linksToText(groups) {
  return groups.map((g) => [g.title, ...g.links.map((l) => l.label + " | " + l.url + (l.key ? " | " + l.key : ""))].join("\n")).join("\n\n");
}

function parseLinks(text) {
  const raw = [], warns = [], seen = new Map();
  for (const block of text.split(/\n\s*\n/)) {
    const lines = block.split("\n").map((x) => x.trim()).filter(Boolean);
    if (!lines.length) continue;
    const links = [];
    for (const line of lines.slice(1)) {
      const p = line.split("|").map((x) => x.trim());
      const label = safeText(p[0], LIMITS.title);
      if (p.length < 2 || !label || !p[1]) { warns.push("Skipped “" + line.slice(0, 24) + "”: needs Label | address"); continue; }
      if (!safeLinkUrl(p[1])) { warns.push("Skipped “" + label + "”: that address is not allowed (use http or https)"); continue; }
      const key = safeKey((p[2] || "").charAt(0));
      if (key && seen.has(key)) warns.push("Key “" + key + "” is used twice (" + seen.get(key) + " and " + label + "); the first one wins");
      else if (key) seen.set(key, label);
      links.push({ label, url: p[1], key });
    }
    raw.push({ title: lines[0], links });
  }
  if (raw.length > LIMITS.groups) warns.push("Only the first " + LIMITS.groups + " cards are kept");
  return { groups: sanitizeGroups(raw) || [], warns };
}

function syncLinksText() { $("links-text").value = linksToText(app.getState().groups); linksStatus([]); }

function linksStatus(warns) {
  const g = app.getState().groups, n = g.length, count = g.reduce((a, x) => a + x.links.length, 0);
  const el = $("links-status");
  el.classList.toggle("warn", warns.length > 0);
  el.textContent = warns.length ? warns[0] + (warns.length > 1 ? "  (+" + (warns.length - 1) + " more)" : "")
    : n + (n === 1 ? " card, " : " cards, ") + count + (count === 1 ? " link" : " links") + ". Changes show on the page as you type.";
}

// ---------- keep my settings safe ----------

function keepSay(msg) { $("k-note").textContent = msg; }

function scheduleKeep() { clearTimeout(keepTimer); keepTimer = setTimeout(updateKeepLink, 250); }

async function updateKeepLink() {
  if (!app.els.panel.classList.contains("open")) return;
  const s = app.getState();
  const base = location.href.split("#")[0];
  const { link, length, tooLong } = await packShare({ theme: theme(), groups: s.groups, general: s.general }, base);
  $("k-link").value = link;
  $("k-size").textContent = tooLong ? "Too long for a link (" + (length / 1000).toFixed(1) + " KB). Shorten your links or use the backup file."
    : (length / 1000).toFixed(1) + " KB of about " + LIMITS.shareLink / 1000 + " KB";
  $("k-size").classList.toggle("err", tooLong);
}

async function downloadBackup() {
  try {
    const s = app.getState(), files = new Map();
    for (const id of media.idsIn(Object.values(s.customThemes))) {
      const f = await media.getBytes(id).catch(() => null);
      if (f) files.set(id, f.bytes);
    }
    const text = buildBackup({ ...s, customThemes: s.customThemes }, files);
    const url = URL.createObjectURL(new Blob([text], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url; a.download = "startpage-backup.json";
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    keepSay("Saved startpage-backup.json" + (files.size ? " with " + files.size + " image" + (files.size > 1 ? "s" : "") : "") + ".");
  } catch { keepSay("This browser would not start the download."); }
}

async function restoreBackup(file) {
  if (!file) return;
  const out = parseBackup(await file.text().catch(() => ""));
  if (out.error) { keepSay(out.error); return; }
  let stored = 0;
  for (const [id, bytes] of out.files) { try { await media.putBytes(id, bytes, "restored image"); stored++; } catch { out.skipped++; } }
  app.commit(out.state);
  syncLinksText(); sync();
  keepSay("Backup restored: " + theme().name + ", " + out.state.groups.length + " cards" + (stored ? ", " + stored + " image" + (stored > 1 ? "s" : "") : "")
    + (out.skipped ? ". " + out.skipped + " image" + (out.skipped > 1 ? "s were" : " was") + " skipped." : "."));
}

async function protect() {
  try {
    if (!navigator.storage?.persist) throw new Error("none");
    keepSay(await navigator.storage.persist()
      ? "Done. Your browser will keep this page's storage through automatic clean-ups."
      : "The browser said no. Your link and backup file still protect you.");
  } catch { keepSay("This browser does not support that. Your link and backup file still protect you."); }
}

// ---------- own images ----------

function wireSource(k) {
  const setMode = (t) => { if (k === "art") t.art.mode = "custom"; else t.bg.mode = "custom"; };
  const target = (t) => (k === "art" ? t.art : t.bg);

  $(k + "-url").addEventListener("input", (e) => {
    const v = e.target.value.trim();
    if (v && !(/^https?:\/\//i.test(v) && safeLinkUrl(v))) { srcErr[k] = "Use an address that starts with https://"; sync(); return; }
    srcErr[k] = "";
    editTheme((t) => { target(t).src = v ? safeLinkUrl(v) : ""; if (v) setMode(t); });
  });

  $(k + "-file").addEventListener("change", async (e) => {
    const f = e.target.files[0];
    e.target.value = "";
    if (!f) return;
    try {
      const id = await media.putFile(f);
      srcErr[k] = "";
      editTheme((t) => { target(t).src = "idb:" + id; setMode(t); });
    } catch (err) { srcErr[k] = err.message; sync(); }
  });

  $(k + "-clear").addEventListener("click", () => { srcErr[k] = ""; editTheme((t) => { target(t).src = ""; }); });
}

// ---------- themes: copy, add, delete ----------

function themeSlug(name, taken) {
  const base = (name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 28) || "theme");
  let key = base, i = 2;
  while (own(BUILT_IN, key) || taken(key)) key = base + "-" + i++;
  return key;
}

function tStatus(msg, bad) { const el = $("t-status"); el.textContent = msg; el.classList.toggle("warn", !!bad); }

// ---------- sync: show the current state in every control ----------

function sync() {
  const s = app.getState(), t = theme(), g = s.general;

  // theme list
  const sel = $("c-theme");
  sel.textContent = "";
  for (const k of THEME_ORDER) { if (own(s.customThemes, k)) continue; const o = document.createElement("option"); o.value = k; o.textContent = BUILT_IN[k].name; sel.append(o); }
  for (const k of Object.keys(s.customThemes)) { const o = document.createElement("option"); o.value = k; o.textContent = s.customThemes[k].name + (k.endsWith("-mine") ? " (edited)" : ""); sel.append(o); }
  sel.value = s.themeKey;
  $("t-delete").hidden = !own(s.customThemes, s.themeKey);

  seg($("c-layout"), LAYOUT_LABELS, t.layout, (k) => { editTheme((x) => { x.layout = k; }); });
  seg($("c-skin"), SKINS, t.skin, (k) => { editTheme((x) => { x.skin = k; }); retype(app.els.greeting, k); });
  seg($("c-art"), ART_LABELS, t.art.mode === "mascot" ? t.art.mascot : t.art.mode, (k) => {
    editTheme((x) => { if (k === "custom" || k === "none") x.art.mode = k; else { x.art.mode = "mascot"; x.art.mascot = k; } });
  });
  seg($("c-bg"), BG_LABELS, t.bg.mode, (k) => { editTheme((x) => { x.bg.mode = k; }); });
  seg($("c-fit"), FIT_LABELS, t.bg.fit, (k) => { editTheme((x) => { x.bg.fit = k; }); });
  $("art-note").textContent = ART_NOTES[t.art.mode === "mascot" ? t.art.mascot : t.art.mode] || "";

  $("r-art").value = t.art.size; $("v-art").textContent = t.art.size + "px";
  const ov = Math.round(t.bg.overlay * 100);
  $("r-ov").value = ov; $("v-ov").textContent = ov + "%";
  $("r-rad").value = Math.min(t.radius, 28); $("v-rad").textContent = t.radius + "px";
  $("fx-crt").checked = !!t.fx.crt;
  setIfIdle($("r-ph"), t.placeholder);
  for (const k of COLOR_KEYS) $("col-" + k).value = t.colors[k];

  $("art-custom").hidden = t.art.mode !== "custom";
  $("bg-custom").hidden = t.bg.mode !== "custom";
  for (const [k, o] of [["art", t.art], ["bg", t.bg]]) {
    const isUpload = o.src.startsWith("idb:");
    setIfIdle($(k + "-url"), isUpload ? "" : o.src);
    const note = $(k + "-src-note");
    note.classList.toggle("err", !!srcErr[k] || (isUpload && !media.resolve(o.src)));
    note.textContent = srcErr[k]
      || (isUpload ? (media.resolve(o.src) ? "Using your file: " + (media.nameOf(o.src) || "image") : "Your uploaded file is missing from this browser. Upload it again, or restore a backup.")
      : o.src ? "Using the address above." : "Nothing added yet. Paste an address or upload a file. It stays in your browser.");
  }

  // general
  $("g-engine").value = g.engine;
  $("g-custom-wrap").hidden = g.engine !== "custom";
  setIfIdle($("g-custom"), g.customSearch);
  $("g-engine-preview").textContent = g.engine === "custom" && !customIsValid(g)
    ? "Use an http or https address that contains {q}, with {q} not in the site name. Until then, Google is used."
    : "Searching “cats” opens: " + searchUrl(g, "cats");
  setIfIdle($("g-name"), g.name);
  $("g-24h").checked = g.hour24;
  $("g-keys").checked = g.shortcuts;
  if (!app.storageOk()) keepSay("This browser is not saving settings here. Use your personal link or a backup file.");
  scheduleKeep();
}

// ---------- one-time wiring ----------

function wire() {
  $("sp-close").addEventListener("click", () => setPanel(false));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && app.els.panel.classList.contains("open")) setPanel(false); });
  for (const b of document.querySelectorAll(".sp-tabs button")) b.addEventListener("click", () => selectTab(b.dataset.ptab));

  // theme tab
  $("c-theme").addEventListener("change", (e) => pickTheme(e.target.value));
  $("r-rad").addEventListener("input", (e) => editTheme((t) => { t.radius = +e.target.value; }));
  $("r-art").addEventListener("input", (e) => editTheme((t) => { t.art.size = +e.target.value; }));
  $("r-ov").addEventListener("input", (e) => editTheme((t) => { t.bg.overlay = +e.target.value / 100; }));
  $("r-ph").addEventListener("input", (e) => editTheme((t) => { t.placeholder = e.target.value.slice(0, LIMITS.placeholder); }));
  $("fx-crt").addEventListener("change", (e) => editTheme((t) => { t.fx.crt = e.target.checked; }));

  const box = $("c-colors");
  for (const k of COLOR_KEYS) {
    const lab = document.createElement("label");
    const inp = document.createElement("input");
    inp.type = "color"; inp.id = "col-" + k; inp.setAttribute("aria-label", COLOR_LABELS[k]);
    inp.addEventListener("input", () => editTheme((t) => {
      t.colors[k] = inp.value;
      if (k === "accent") t.colors.accentText = lum(inp.value) > 0.55 ? "#101010" : "#ffffff";
    }));
    lab.append(inp, document.createTextNode(COLOR_LABELS[k]));
    box.append(lab);
  }

  $("reset").addEventListener("click", () => {
    const s = app.getState();
    const base = s.themeKey.endsWith("-mine") ? s.themeKey.slice(0, -5) : s.themeKey;
    if (!own(BUILT_IN, base)) { tStatus("This is your own theme; there is no original to go back to.", true); return; }
    const customThemes = Object.assign(newMap(), s.customThemes);
    delete customThemes[s.themeKey];
    app.commit({ ...s, themeKey: base, customThemes });
    tidyUploads(); retype(app.els.greeting, theme().skin); sync();
  });

  $("t-copy").addEventListener("click", async () => {
    const json = JSON.stringify(buildSharePayload({ theme: theme(), groups: [], general: app.getState().general }).theme, null, 2);
    try { await navigator.clipboard.writeText(json); tStatus("Theme copied. Uploaded images are left out."); }
    catch { $("t-import").value = json; tStatus("Copy it from the box below."); }
  });

  $("t-add").addEventListener("click", () => {
    const out = parseImportedTheme($("t-import").value);
    if (out.error) { tStatus(out.error, true); return; }
    const s = app.getState();
    if (Object.keys(s.customThemes).length >= LIMITS.themes) { tStatus("You already have " + LIMITS.themes + " custom themes. Delete one first.", true); return; }
    const key = themeSlug(out.theme.name, (k) => own(s.customThemes, k));
    if (!isId(key)) { tStatus("Could not name that theme.", true); return; }
    app.commit({ ...s, themeKey: key, customThemes: Object.assign(newMap(), s.customThemes, { [key]: out.theme }) });
    $("t-import").value = ""; tStatus("Added “" + out.theme.name + "”.");
    retype(app.els.greeting, theme().skin); sync();
  });

  $("t-delete").addEventListener("click", () => {
    const s = app.getState();
    if (!own(s.customThemes, s.themeKey)) return;
    const customThemes = Object.assign(newMap(), s.customThemes);
    delete customThemes[s.themeKey];
    const base = s.themeKey.endsWith("-mine") && own(BUILT_IN, s.themeKey.slice(0, -5)) ? s.themeKey.slice(0, -5) : BASE_THEME_KEY;
    app.commit({ ...s, themeKey: base, customThemes });
    tidyUploads(); tStatus("Theme deleted."); sync();
  });

  // art and background
  wireSource("art"); wireSource("bg");

  // links
  $("links-text").addEventListener("input", (e) => {
    const r = parseLinks(e.target.value);
    app.commit({ ...app.getState(), groups: r.groups });
    linksStatus(r.warns); scheduleKeep();
  });
  $("links-add").addEventListener("click", () => {
    const t = $("links-text"), now = t.value.replace(/\s+$/, "");
    t.value = (now ? now + "\n\n" : "") + "New card\nExample | example.com";
    t.dispatchEvent(new Event("input", { bubbles: true }));
    t.focus(); t.scrollTop = t.scrollHeight;
    const start = t.value.lastIndexOf("New card");
    t.setSelectionRange(start, start + 8);
  });
  $("links-reset").addEventListener("click", () => {
    app.commit({ ...app.getState(), groups: sanitizeGroups(DEFAULT_LINKS) });
    syncLinksText(); sync();
  });

  // general
  for (const [k, v] of Object.entries(ENGINES)) { const o = document.createElement("option"); o.value = k; o.textContent = v[0]; $("g-engine").append(o); }
  $("g-engine").addEventListener("change", (e) => editGeneral({ engine: e.target.value }));
  $("g-custom").addEventListener("input", (e) => editGeneral({ customSearch: e.target.value.trim() }));
  $("g-name").addEventListener("input", (e) => editGeneral({ name: safeText(e.target.value, LIMITS.name) }));
  $("g-24h").addEventListener("change", (e) => editGeneral({ hour24: e.target.checked }));
  $("g-keys").addEventListener("change", (e) => editGeneral({ shortcuts: e.target.checked }));

  // keep my settings safe
  $("k-copy").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText($("k-link").value); keepSay("Link copied. Paste it into New Tab Override's address field, or bookmark it."); }
    catch { $("k-link").focus(); $("k-link").select(); keepSay("Press Ctrl+C (Cmd+C on Mac) to copy the selected link."); }
  });
  $("k-dl").addEventListener("click", downloadBackup);
  $("k-file").addEventListener("change", (e) => { const f = e.target.files[0]; e.target.value = ""; restoreBackup(f); });
  $("k-persist").addEventListener("click", protect);
}

const DEFAULT_LINKS = [
  { title: "Dev", links: [{ label: "GitHub", url: "https://github.com", key: "g" }, { label: "Stack Overflow", url: "https://stackoverflow.com", key: "s" }, { label: "MDN", url: "https://developer.mozilla.org", key: "m" }] },
  { title: "Media", links: [{ label: "YouTube", url: "https://youtube.com", key: "y" }, { label: "Reddit", url: "https://reddit.com", key: "r" }, { label: "Twitch", url: "https://twitch.tv", key: "t" }] },
  { title: "Tools", links: [{ label: "Gmail", url: "https://mail.google.com", key: "e" }, { label: "Drive", url: "https://drive.google.com", key: "d" }, { label: "Claude", url: "https://claude.ai", key: "c" }] },
];