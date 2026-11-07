// links.js
// Draws the cards of links and handles one-key shortcuts. Every label and address was already checked by
// sanitize.js, and is still only ever set through textContent / the href property, never as HTML.

import { safeLinkUrl } from "./sanitize.js";

/** key -> address, first link wins. Null-prototype so a key like "constructor" can never matter. */
export function buildShortcuts(groups) {
  const map = Object.create(null);
  for (const g of groups) for (const l of g.links) if (l.key && !map[l.key]) map[l.key] = l.url;
  return map;
}

/**
 * opts: { layout, openIndex, onToggle(index) }
 * In the accordion and minimal layouts one card is "open" (tap/click to change); in cards all are shown.
 */
export function renderGroups(container, groups, opts) {
  container.textContent = "";
  if (!groups.length) {
    const p = document.createElement("p");
    p.className = "empty-groups";
    p.textContent = "No cards yet. Open Customize, then Links, to add one.";
    container.append(p);
    return;
  }
  groups.forEach((g, i) => {
    const box = document.createElement("div");
    box.className = "group" + (i === opts.openIndex && opts.layout !== "cards" ? " open" : "");
    const h = document.createElement("h3");
    h.className = "group__title"; h.textContent = g.title;
    const links = document.createElement("div");
    links.className = "group__links";
    for (const l of g.links) {
      const href = safeLinkUrl(l.url);
      if (!href) continue;
      const a = document.createElement("a");
      a.href = href; a.rel = "noopener noreferrer";
      const label = document.createElement("span"); label.textContent = l.label;
      a.append(label);
      if (l.key) { const k = document.createElement("kbd"); k.textContent = l.key; a.append(k); }
      links.append(a);
    }
    box.append(h, links);
    box.addEventListener("click", (e) => {
      if (opts.layout === "cards" || e.target.closest("a")) return;
      opts.onToggle(opts.openIndex === i ? -1 : i);
    });
    container.append(box);
  });
}

function typing(el) {
  return !!el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT" || el.isContentEditable);
}

/** "/" focuses search; a link's key opens it. Ignored while typing, with modifiers, or when switched off. */
export function initShortcuts(ctx) {
  document.addEventListener("keydown", (e) => {
    if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey || e.isComposing) return;
    if (typing(e.target) || ctx.panelOpen()) return;
    if (e.key === "/") { e.preventDefault(); ctx.focusSearch(); return; }
    const g = ctx.getGeneral();
    if (!g.shortcuts) return;
    const url = ctx.getShortcuts()[e.key.toLowerCase()];
    if (url && e.key.length === 1) { e.preventDefault(); ctx.go(url); }
  });
}