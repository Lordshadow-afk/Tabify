// render.js
// Puts a theme on the page: colors and sizes as CSS variables (style.setProperty is allowed by the
// content-security policy), layout and box style as data attributes, mascot as inline SVG, background and
// own images through the image checks. Also the clock and greeting. DOM is built with textContent only.

import { COLOR_KEYS, safeImageUrl, cssUrl } from "./sanitize.js";
import { mountAvatar } from "./avatars.js";

export const DEFAULT_PLACEHOLDER = "Search or type a URL…";

/** Only an address that passed safeImageUrl, and that the page can actually load, is ever used. */
function usable(src, resolve) {
  const ok = safeImageUrl(src);
  if (!ok) return "";
  return ok.startsWith("idb:") ? (resolve ? resolve(ok) || "" : "") : ok;
}

export function applyTheme(els, theme, { resolve } = {}) {
  const root = els.root, s = root.style;
  for (const k of COLOR_KEYS) s.setProperty("--" + k, theme.colors[k]);
  s.setProperty("--font", theme.font);
  s.setProperty("--radius", theme.radius + "px");
  s.setProperty("--art", theme.art.size + "px");
  s.setProperty("--overlay", String(theme.bg.overlay));
  root.dataset.layout = theme.layout;
  root.dataset.skin = theme.skin;
  root.classList.toggle("fx-crt", !!theme.fx.crt);
  els.input.placeholder = theme.placeholder || DEFAULT_PLACEHOLDER;

  // background
  const bgSrc = theme.bg.mode === "custom" ? usable(theme.bg.src, resolve) : "";
  els.bg.classList.toggle("on", theme.bg.mode === "sample" || !!bgSrc);
  els.bg.classList.toggle("sample", theme.bg.mode === "sample");
  els.bg.classList.toggle("custom", !!bgSrc);
  els.bgImg.style.backgroundImage = bgSrc ? cssUrl(bgSrc) : "none";
  els.bgImg.style.backgroundSize = theme.bg.fit;

  // art
  const art = els.art;
  art.textContent = "";
  if (theme.art.mode === "mascot") mountAvatar(art, theme.art.mascot);
  else if (theme.art.mode === "custom") {
    const src = usable(theme.art.src, resolve);
    if (src) {
      const im = document.createElement("img");
      im.alt = ""; im.referrerPolicy = "no-referrer"; im.src = src;
      art.append(im);
    }
  }
  retype(els.greeting, theme.skin);
}

/** Typewriter reveal for the greeting in the retro box style; restarts on every theme change. */
export function retype(greeting, skin) {
  greeting.classList.remove("type");
  void greeting.offsetWidth;
  if (skin === "retro" && !matchMedia("(prefers-reduced-motion: reduce)").matches) greeting.classList.add("type");
}

export function greetingText(date, name) {
  const h = date.getHours();
  const part = h < 5 ? "Up late" : h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
  return part + (name ? ", " + name : "") + " · " + date.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" });
}

export function tickClock(els, general) {
  const d = new Date();
  els.clock.textContent = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: !general.hour24 });
  els.greeting.textContent = greetingText(d, general.name);
}

let toastTimer;
export function say(el, text) {
  el.textContent = text;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 1800);
}