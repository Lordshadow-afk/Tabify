// search.js
// Which address a search goes to. The engine list is fixed here; a custom engine must pass safeSearchTemplate.
// Nothing typed is ever put in a page as HTML, and typed text is always encoded before it joins an address.

import { safeSearchTemplate, safeLinkUrl, ENGINE_IDS } from "./sanitize.js";

export const ENGINES = Object.freeze({
  google: ["Google", "https://www.google.com/search?q={q}"],
  duckduckgo: ["DuckDuckGo", "https://duckduckgo.com/?q={q}"],
  brave: ["Brave", "https://search.brave.com/search?q={q}"],
  bing: ["Bing", "https://www.bing.com/search?q={q}"],
  ecosia: ["Ecosia", "https://www.ecosia.org/search?q={q}"],
  youtube: ["YouTube", "https://www.youtube.com/results?search_query={q}"],
  github: ["GitHub", "https://github.com/search?q={q}"],
  custom: ["Custom address…", ""],
});

/** The address template in use: the chosen engine, or Google when the custom one is missing or unsafe. */
export function templateFor(general) {
  if (general.engine === "custom") return safeSearchTemplate(general.customSearch) || ENGINES.google[1];
  return ENGINE_IDS.includes(general.engine) && ENGINES[general.engine][1] ? ENGINES[general.engine][1] : ENGINES.google[1];
}

export function customIsValid(general) {
  return !!safeSearchTemplate(general.customSearch);
}

/** The address a search for q opens. */
export function searchUrl(general, q) {
  return templateFor(general).replace("{q}", encodeURIComponent(q));
}

/** Short name shown on the engine button. */
export function engineLabel(general) {
  if (general.engine === "custom" && customIsValid(general)) return hostOf(general.customSearch) || "custom";
  // an unusable custom address searches with Google, so say so
  return (general.engine === "custom" ? ENGINES.google : ENGINES[general.engine])[0].toLowerCase();
}

export function hostOf(template) {
  try { return new URL(template.replace("{q}", "x")).hostname.replace(/^www\./, ""); } catch { return ""; }
}

/** "example.com/page" or "https://example.com" is an address to open; anything with spaces is a search. */
export function looksLikeUrl(q) {
  return !/\s/.test(q) && /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(:\d+)?(\/\S*)?$/i.test(q);
}

/** Where pressing Enter should go: the typed address (if safe) or a search. Never an empty string for non-empty input. */
export function resolveQuery(general, raw) {
  const q = String(raw ?? "").trim();
  if (!q) return "";
  if (looksLikeUrl(q)) { const u = safeLinkUrl(q); if (u) return u; }
  return searchUrl(general, q);
}

/**
 * Wires the search box and the engine menu.
 *   ctx.getGeneral()          current general settings
 *   ctx.setEngine(id)         called when the person picks an engine (should save and re-render)
 *   ctx.openCustomSettings()  called when "Custom" is picked but has no valid address yet
 *   ctx.go(url)               navigate
 *   ctx.say(text)             small notice
 */
export function initSearch(els, ctx) {
  const { form, input, button, menu } = els;

  function closeMenu(refocus) {
    menu.hidden = true; button.setAttribute("aria-expanded", "false");
    if (refocus) button.focus();
  }

  function buildMenu() {
    const g = ctx.getGeneral();
    menu.textContent = "";
    for (const id of Object.keys(ENGINES)) {
      const b = document.createElement("button");
      b.type = "button"; b.setAttribute("role", "option");
      let label = ENGINES[id][0];
      if (id === "custom") {
        const sep = document.createElement("div"); sep.className = "engine-sep"; menu.append(sep);
        label = customIsValid(g) ? "Custom: " + (hostOf(g.customSearch) || "address") : "Add a custom address…";
      }
      b.textContent = label;
      b.setAttribute("aria-selected", String(id === g.engine));
      b.addEventListener("click", () => {
        if (id === "custom" && !customIsValid(ctx.getGeneral())) { closeMenu(false); ctx.openCustomSettings(); return; }
        ctx.setEngine(id); closeMenu(true);
      });
      menu.append(b);
    }
  }

  function refresh() {
    button.textContent = engineLabel(ctx.getGeneral());
    buildMenu();
  }

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = menu.hidden;
    menu.hidden = !open; button.setAttribute("aria-expanded", String(open));
    if (open) (menu.querySelector('[aria-selected="true"]') || menu.querySelector("button"))?.focus();
  });

  form.addEventListener("keydown", (e) => {
    if (menu.hidden) return;
    if (e.key === "Escape") { e.stopPropagation(); closeMenu(true); return; }
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      const items = [...menu.querySelectorAll("button")], i = items.indexOf(document.activeElement);
      if (i === -1 && e.target !== button) return;
      e.preventDefault();
      items[(i + (e.key === "ArrowDown" ? 1 : items.length - 1)) % items.length].focus();
    }
  });

  document.addEventListener("click", (e) => { if (!menu.hidden && !form.contains(e.target)) closeMenu(false); });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = resolveQuery(ctx.getGeneral(), input.value);
    if (!url) { ctx.say("Type something to search"); return; }
    ctx.go(url);
  });

  refresh();
  return { refresh, focus: () => input.focus() };
}