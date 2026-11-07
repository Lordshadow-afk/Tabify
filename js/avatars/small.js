// avatars/small.js: the ten small mascots
// Our own constants (never user input): no scripts, handlers, styles or outside references. Animated by css/avatars.css.

export const SMALL = {
  heart: `<svg viewBox="0 0 120 120" role="img" aria-label="Pixel heart" shape-rendering="crispEdges">
<g class="an heart-body">
<g fill="#ff2a2a">
<rect x="25" y="22" width="20" height="10"/>
<rect x="75" y="22" width="20" height="10"/>
<rect x="15" y="32" width="40" height="10"/>
<rect x="65" y="32" width="40" height="10"/>
<rect x="15" y="42" width="90" height="10"/>
<rect x="15" y="52" width="90" height="10"/>
<rect x="25" y="62" width="70" height="10"/>
<rect x="35" y="72" width="50" height="10"/>
<rect x="45" y="82" width="30" height="10"/>
<rect x="55" y="92" width="10" height="10"/>
</g>
<rect class="an glint-px" x="25" y="32" width="10" height="10" fill="#ffffff"/>
</g>
</svg>`,

  drop: `<svg viewBox="0 0 120 120" role="img" aria-label="Drop mascot">
<g class="an drop-body">
<path d="M60 10 C60 10 22 56 22 80 a38 38 0 0 0 76 0 C98 56 60 10 60 10 Z" fill="var(--accent)" stroke="var(--text)" stroke-opacity=".25" stroke-width="2"/>
<path d="M40 74 C40 62 46 54 54 46" fill="none" stroke="var(--accentText)" stroke-opacity=".5" stroke-width="5" stroke-linecap="round"/>
<ellipse class="an eye" cx="48" cy="82" rx="5" ry="6.5" fill="var(--accentText)"/>
<ellipse class="an eye" cx="72" cy="82" rx="5" ry="6.5" fill="var(--accentText)"/>
<path d="M53 95 Q60 101 67 95" fill="none" stroke="var(--accentText)" stroke-width="3" stroke-linecap="round"/>
<circle cx="38" cy="92" r="4" fill="var(--accentText)" fill-opacity=".18"/>
<circle cx="82" cy="92" r="4" fill="var(--accentText)" fill-opacity=".18"/>
</g>
</svg>`,

  cat: `<svg viewBox="0 0 120 120" role="img" aria-label="Sleepy cat mascot">
<g class="an cat-body">
<g fill="var(--surface)" stroke="var(--text)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
<path d="M24 56 L28 20 L52 40 Z"/>
<path d="M96 56 L92 20 L68 40 Z"/>
<ellipse cx="60" cy="70" rx="40" ry="34"/>
</g>
<path d="M33 38 L36 28 L44 36 Z" fill="var(--accent)" opacity=".55"/>
<path d="M87 38 L84 28 L76 36 Z" fill="var(--accent)" opacity=".55"/>
<g fill="none" stroke="var(--text)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
<path d="M40 68 Q46 74 52 68"/>
<path d="M68 68 Q74 74 80 68"/>
<path d="M56 79 L64 79 L60 84 Z" fill="var(--accent)"/>
<path d="M60 84 Q55 90 50 86"/>
<path d="M60 84 Q65 90 70 86"/>
<path d="M24 78 L10 74 M24 84 L10 86 M96 78 L110 74 M96 84 L110 86" stroke-width="2"/>
</g>
</g>
<text class="an zz" x="98" y="30" font-size="14" fill="var(--muted)" font-family="serif" font-style="italic">z</text>
<text class="an zz zz2" x="104" y="20" font-size="11" fill="var(--muted)" font-family="serif" font-style="italic">z</text>
</svg>`,

  bot: `<svg viewBox="0 0 120 120" role="img" aria-label="Pixel bot mascot" shape-rendering="crispEdges">
<g class="an bot-body">
<rect x="56" y="8" width="8" height="16" fill="var(--text)"/>
<rect class="an ant" x="50" y="2" width="20" height="8" fill="var(--accent)"/>
<rect x="22" y="24" width="76" height="62" fill="var(--surface)" stroke="var(--text)" stroke-width="4"/>
<rect class="an bot-eye" x="38" y="42" width="14" height="14" fill="var(--accent)"/>
<rect class="an bot-eye" x="68" y="42" width="14" height="14" fill="var(--accent)"/>
<rect x="40" y="68" width="8" height="6" fill="var(--text)"/>
<rect x="48" y="72" width="24" height="6" fill="var(--text)"/>
<rect x="72" y="68" width="8" height="6" fill="var(--text)"/>
<rect x="12" y="44" width="10" height="20" fill="var(--text)"/>
<rect x="98" y="44" width="10" height="20" fill="var(--text)"/>
<rect x="38" y="90" width="12" height="16" fill="var(--text)"/>
<rect x="70" y="90" width="12" height="16" fill="var(--text)"/>
</g>
</svg>`,

  ghost: `<svg viewBox="0 0 120 120" role="img" aria-label="Ghost mascot">
<ellipse class="an ghost-shadow" cx="60" cy="112" rx="24" ry="4" fill="var(--text)"/>
<g class="an ghost-float">
<ellipse class="an arm-l" cx="25" cy="76" rx="9" ry="5" fill="var(--text)"/>
<ellipse class="an arm-r" cx="95" cy="76" rx="9" ry="5" fill="var(--text)"/>
<path d="M30 60 a30 30 0 0 1 60 0 V100 l-10 -8 l-10 8 l-10 -8 l-10 8 l-10 -8 l-10 8 Z" fill="var(--text)" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
<g class="an ghost-eyes">
<ellipse cx="50" cy="60" rx="5" ry="7" fill="var(--bg)"/>
<ellipse cx="70" cy="60" rx="5" ry="7" fill="var(--bg)"/>
</g>
<ellipse cx="41" cy="74" rx="5" ry="3" fill="var(--accent)" opacity=".55"/>
<ellipse cx="79" cy="74" rx="5" ry="3" fill="var(--accent)" opacity=".55"/>
<path d="M55 75 Q60 80 65 75" fill="none" stroke="var(--bg)" stroke-width="3" stroke-linecap="round"/>
</g>
</svg>`,

  sprout: `<svg viewBox="0 0 120 120" role="img" aria-label="Sprout mascot">
<g class="an sway">
<path d="M60 84 C60 70 60 58 60 44" fill="none" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
<path class="an leaf-l" d="M60 66 C38 66 28 52 30 38 C50 38 60 50 60 66 Z" fill="var(--accent)"/>
<path class="an leaf-r" d="M60 56 C82 56 94 42 92 26 C72 26 60 40 60 56 Z" fill="var(--accent)"/>
</g>
<path d="M34 84 H86 L80 114 H40 Z" fill="var(--surface)" stroke="var(--text)" stroke-opacity=".6" stroke-width="3" stroke-linejoin="round"/>
<circle cx="51" cy="97" r="3" fill="var(--text)"/>
<circle cx="69" cy="97" r="3" fill="var(--text)"/>
<path d="M54 104 Q60 109 66 104" fill="none" stroke="var(--text)" stroke-width="2.5" stroke-linecap="round"/>
</svg>`,

  sun: `<svg viewBox="0 0 120 120" role="img" aria-label="Sun mascot">
<g class="an sun-rays" stroke="var(--accent)" stroke-width="5" stroke-linecap="round">
<g>
<line x1="60" y1="6" x2="60" y2="18"/>
<line x1="60" y1="6" x2="60" y2="18" transform="rotate(30 60 60)"/>
<line x1="60" y1="6" x2="60" y2="18" transform="rotate(60 60 60)"/>
<line x1="60" y1="6" x2="60" y2="18" transform="rotate(90 60 60)"/>
<line x1="60" y1="6" x2="60" y2="18" transform="rotate(120 60 60)"/>
<line x1="60" y1="6" x2="60" y2="18" transform="rotate(150 60 60)"/>
<line x1="60" y1="6" x2="60" y2="18" transform="rotate(180 60 60)"/>
<line x1="60" y1="6" x2="60" y2="18" transform="rotate(210 60 60)"/>
<line x1="60" y1="6" x2="60" y2="18" transform="rotate(240 60 60)"/>
<line x1="60" y1="6" x2="60" y2="18" transform="rotate(270 60 60)"/>
<line x1="60" y1="6" x2="60" y2="18" transform="rotate(300 60 60)"/>
<line x1="60" y1="6" x2="60" y2="18" transform="rotate(330 60 60)"/>
</g>
</g>
<g class="an sun-core">
<circle cx="60" cy="60" r="31" fill="var(--accent)"/>
<rect x="38" y="50" width="18" height="13" rx="4" fill="var(--bg)"/>
<rect x="64" y="50" width="18" height="13" rx="4" fill="var(--bg)"/>
<path d="M56 55 H64" stroke="var(--bg)" stroke-width="3"/>
<rect class="an glint" x="41" y="51" width="3" height="11" rx="1.5" fill="var(--text)"/>
<path d="M49 74 Q60 84 71 74" fill="none" stroke="var(--bg)" stroke-width="3.5" stroke-linecap="round"/>
</g>
</svg>`,

  jelly: `<svg viewBox="0 0 120 120" role="img" aria-label="Jellyfish mascot">
<g class="an jelly">
<path class="an tent dlym_2" d="M40 68 q-5 9 0 18 t0 18" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" opacity=".8"/>
<path class="an tent dlym_7" d="M53 70 q-5 9 0 18 t0 22" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" opacity=".8"/>
<path class="an tent dlym1_1" d="M67 70 q5 9 0 18 t0 22" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" opacity=".8"/>
<path class="an tent dlym1_5" d="M80 68 q5 9 0 18 t0 18" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" opacity=".8"/>
<g class="an bell">
<path d="M28 66 C28 30 92 30 92 66 C92 70 86 72 82 70 C76 74 66 70 60 72 C54 70 44 74 38 70 C34 72 28 70 28 66 Z" fill="var(--accent)" stroke="var(--text)" stroke-opacity=".3" stroke-width="2"/>
<circle cx="49" cy="55" r="4" fill="var(--accentText)"/>
<circle cx="71" cy="55" r="4" fill="var(--accentText)"/>
<path d="M54 63 Q60 68 66 63" fill="none" stroke="var(--accentText)" stroke-width="3" stroke-linecap="round"/>
<ellipse cx="42" cy="44" rx="7" ry="3" fill="var(--text)" opacity=".35" transform="rotate(-25 42 44)"/>
</g>
</g>
</svg>`,

  planet: `<svg viewBox="0 0 120 120" role="img" aria-label="Planet mascot">
<g fill="var(--text)">
<path class="an star" d="M14 22 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z"/>
<path class="an star dlym_8" d="M104 98 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5 Z"/>
<path class="an star dlym1_4" d="M100 16 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5 Z"/>
</g>
<g transform="rotate(-20 60 60)">
<ellipse cx="60" cy="60" rx="48" ry="13" fill="none" stroke="var(--text)" stroke-opacity=".45" stroke-width="4"/>
</g>
<circle cx="60" cy="60" r="27" fill="var(--accent)"/>
<ellipse cx="46" cy="72" rx="6" ry="3" fill="var(--accentText)" opacity=".18"/>
<ellipse cx="74" cy="48" rx="5" ry="2.5" fill="var(--accentText)" opacity=".18"/>
<circle cx="51" cy="57" r="3.5" fill="var(--accentText)"/>
<circle cx="69" cy="57" r="3.5" fill="var(--accentText)"/>
<path d="M54 67 Q60 72 66 67" fill="none" stroke="var(--accentText)" stroke-width="3" stroke-linecap="round"/>
<g transform="rotate(-20 60 60)">
<path d="M12 60 A48 13 0 0 0 108 60" fill="none" stroke="var(--text)" stroke-width="4" stroke-linecap="round"/>
<circle r="6" fill="var(--text)" stroke="var(--accent)" stroke-width="2">
<animateMotion dur="7s" repeatCount="indefinite" path="M60 14 a46 17 0 1 1 0 34 a46 17 0 1 1 0 -34"/>
</circle>
</g>
</svg>`,

  crt: `<svg viewBox="0 0 120 120" role="img" aria-label="Retro monitor mascot">
<rect x="16" y="20" width="88" height="66" rx="8" fill="var(--surface)" stroke="var(--text)" stroke-width="4"/>
<rect x="24" y="28" width="72" height="50" rx="3" fill="var(--bg)"/>
<g class="an screen">
<rect x="42" y="40" width="9" height="9" fill="var(--accent)"/>
<rect x="69" y="40" width="9" height="9" fill="var(--accent)"/>
<text x="44" y="70" font-family="monospace" font-size="17" font-weight="700" fill="var(--accent)">&gt;</text>
<rect class="an cursor" x="58" y="66" width="11" height="4" fill="var(--accent)"/>
</g>
<clipPath id="crtclip">
<rect x="24" y="28" width="72" height="50" rx="3"/>
</clipPath>
<g clip-path="url(#crtclip)">
<rect class="an scan" x="24" y="28" width="72" height="5" fill="var(--accent)" opacity=".28"/>
</g>
<rect x="50" y="86" width="20" height="8" fill="var(--text)"/>
<rect x="38" y="94" width="44" height="7" rx="2" fill="var(--text)"/>
<circle cx="92" cy="81" r="2" fill="var(--accent)"/>
</svg>`,
};