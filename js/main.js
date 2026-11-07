// main.js
// Entry point. Loads saved settings, applies a personal link if the address has one, draws the page,
// and wires search, shortcuts and the Customize button. Settings code loads only when it is needed.

import { own } from "./sanitize.js";
import { loadState, saveState } from "./state.js";
import { BUILT_IN, BASE_THEME_KEY } from "./themes.js";
import { unpackShare } from "./share.js";
import { applyTheme, tickClock, say as toast } from "./render.js";
import { renderGroups, buildShortcuts, initShortcuts } from "./links.js";
import { initSearch } from "./search.js";
import { sanitizeTheme } from "./state.js";
import * as media from "./media.js";

// A page that sits in someone else's frame could be used for click-tricking. A <meta> policy cannot forbid
// framing (frame-ancestors only works as an HTTP header), so the page refuses to show itself when framed.
if (window.top !== window.self) {
  document.documentElement.textContent = "";
  throw new Error("This page does not run inside a frame.");
}

const $ = (id) => document.getElementById(id);
const els = {
  root: $("sp"), bg: $("sp-bg"), bgImg: $("sp-bg-img"), art: $("sp-art"), clock: $("sp-clock"),
  greeting: $("sp-greeting"), input: $("sp-q"), groups: $("sp-groups"), toast: $("sp-toast"),
  fab: $("sp-fab"), panel: $("sp-panel"),
};

const loaded = loadState();
let state = loaded.state;
let storageOk = loaded.status !== "unavailable";
let openIndex = 0;
let shortcuts = Object.create(null);
let search;

/** The theme to show: a saved custom one, a built-in one, or the base theme. */
export function currentTheme(s = state) {
  if (own(s.customThemes, s.themeKey)) return s.customThemes[s.themeKey];
  return sanitizeTheme(own(BUILT_IN, s.themeKey) ? BUILT_IN[s.themeKey] : BUILT_IN[BASE_THEME_KEY]);
}

function say(text) { toast(els.toast, text); }
function go(url) { location.assign(url); }

function render() {
  applyTheme(els, currentTheme(), { resolve: app.resolveImage });
  renderGroups(els.groups, state.groups, { layout: currentTheme().layout, openIndex, onToggle: (i) => { openIndex = i; render(); } });
  shortcuts = buildShortcuts(state.groups);
  tickClock(els, state.general);
  search?.refresh();
}

/** The small set of things other modules (settings, media) may use. */
export const app = {
  els, say, go,
  getState: () => state,
  getTheme: () => currentTheme(),
  /** Replace the state (it is re-checked on save) and redraw. Returns false when storage refused the save. */
  commit(next) {
    state = next;
    render();
    app.onCommit?.();
    if (!storageOk) return false;
    storageOk = saveState(state);
    return storageOk;
  },
  storageOk: () => storageOk,
  /** Turns "idb:<id>" references into loadable addresses. media.js replaces this when uploads exist. */
  resolveImage: (ref) => media.resolve(ref),
  render,
};

search = initSearch(
  { form: $("sp-search"), input: els.input, button: $("sp-engine"), menu: $("sp-engmenu") },
  {
    getGeneral: () => state.general,
    setEngine: (id) => { app.commit({ ...state, general: { ...state.general, engine: id } }); },
    openCustomSettings: () => openSettings("general"),
    go, say,
  },
);

initShortcuts({
  getGeneral: () => state.general,
  getShortcuts: () => shortcuts,
  panelOpen: () => els.panel.classList.contains("open"),
  focusSearch: () => els.input.focus(),
  go,
});

async function openSettings(tab) {
  try {
    const mod = await import("./settings.js");
    if (typeof mod.openSettings === "function") mod.openSettings(app, tab);
    else say("Customize is not available yet");
  } catch { say("Could not open Customize"); }
}
els.fab.addEventListener("click", () => openSettings());

setInterval(() => tickClock(els, state.general), 5000);

// ---------- a personal link in the address ----------

function banner(text, buttons) {
  const bar = document.createElement("div");
  bar.className = "sp-banner"; bar.setAttribute("role", "status");
  const p = document.createElement("span"); p.textContent = text;
  bar.append(p);
  for (const [label, fn] of buttons) {
    const b = document.createElement("button");
    b.type = "button"; b.textContent = label;
    b.addEventListener("click", () => { bar.remove(); fn(); });
    bar.append(b);
  }
  els.root.append(bar);
}

async function applyLink() {
  const out = await unpackShare(location.hash);
  if (out.none) return;
  if (out.error) { banner("This personal link could not be read: " + out.error, [["Dismiss", () => {}]]); return; }

  const key = "from-link";
  const linked = { ...state, themeKey: key, customThemes: Object.assign(Object.create(null), state.customThemes, { [key]: out.theme }), groups: out.groups, general: out.general };

  if (loaded.status === "new" && storageOk) {         // nothing saved here yet: this is a restore
    app.commit(linked);
    say("Settings restored from your link");
    return;
  }
  const before = state;
  state = linked; render();                           // shown, not saved
  if (!storageOk) { banner("Showing settings from this link (this browser cannot save them).", [["OK", () => {}]]); return; }
  banner("Showing settings from this link.", [
    ["Keep these", () => { app.commit(linked); say("Kept"); }],
    ["Use my saved ones", () => { state = before; render(); }],
  ]);
}

render();
// uploaded images load from IndexedDB, then the page is drawn again with them
media.preload(media.idsIn([...Object.values(state.customThemes)])).then((missing) => { render(); if (missing) say("Some uploaded images are missing from this browser"); });
if (loaded.status === "recovered") say("Saved settings could not be read; showing defaults");
applyLink();