// avatars.js
// The built-in mascots, drawn as inline SVG. They live in js/avatars/*.js. These are our own constants
// (never user input), contain no scripts, event handlers, styles or outside references, and are
// animated by css/avatars.css.

import { CATS } from "./avatars/cats.js";
import { SAKURA } from "./avatars/sakura.js";
import { BIG } from "./avatars/big.js";
import { SMALL } from "./avatars/small.js";

export const AVATARS = Object.freeze({ ...CATS, ...SAKURA, ...BIG, ...SMALL });

/** Draws a built-in mascot into `el`. Returns false for an unknown id. */
export function mountAvatar(el, id) {
  const svg = Object.prototype.hasOwnProperty.call(AVATARS, id) ? AVATARS[id] : "";
  el.textContent = "";
  if (!svg) return false;
  const tpl = document.createElement("template");
  tpl.innerHTML = svg;
  el.append(tpl.content);
  return true;
}