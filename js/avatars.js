// avatars.js
// The built-in mascots, drawn as inline SVG. These are our own constants (never user input), contain no
// scripts, event handlers, styles or outside references, and are animated by css/avatars.css.

export const AVATARS = Object.freeze({
  lamplight: `<svg viewBox="0 0 120 120" role="img" aria-label="Silhouette of a person and a cat sitting under a streetlamp at night">
<defs>
<linearGradient id="lmCone" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#fff08a"/>
<stop offset="1" stop-color="#ffd52e" stop-opacity=".92"/>
</linearGradient>
<clipPath id="lmClip">
<rect width="120" height="120"/>
</clipPath>
</defs>
<rect width="120" height="120" fill="#1f4fd0"/>
<rect y="74" width="120" height="14" fill="#3a68e0" opacity=".55"/>
<rect y="86" width="120" height="34" fill="#1a3ca6"/>
<rect y="86" width="120" height="2" fill="#2b55c4"/>
<g transform="translate(12 12)">
<circle class="an twk tw1" r="1" fill="#dfe8ff"/>
</g>
<g transform="translate(28 22)">
<circle class="an twk tw2" r="0.8" fill="#dfe8ff"/>
</g>
<g transform="translate(86 10)">
<circle class="an twk tw3" r="1" fill="#dfe8ff"/>
</g>
<g transform="translate(108 30)">
<circle class="an twk tw1" r="0.8" fill="#dfe8ff"/>
</g>
<g transform="translate(20 44)">
<circle class="an twk tw2" r="0.7" fill="#dfe8ff"/>
</g>
<g transform="translate(104 56)">
<circle class="an twk tw3" r="0.8" fill="#dfe8ff"/>
</g>
<g transform="translate(40 8)">
<circle class="an twk tw2" r="0.7" fill="#dfe8ff"/>
</g>
<g transform="translate(74 36)">
<circle class="an twk tw1" r="0.6" fill="#dfe8ff"/>
</g>
<g transform="translate(8 62)">
<circle class="an twk tw3" r="0.7" fill="#dfe8ff"/>
</g>
<path d="M100 99 L120 101 L120 104 L100 103 Z" fill="#102a7a" opacity=".8"/>
<g class="an lm-light">
<path d="M57 19 L67 19 L94 99 L30 99 Z" fill="url(#lmCone)"/>
<ellipse cx="62" cy="99" rx="32" ry="5" fill="#ffdf62" opacity=".55"/>
</g>
<g fill="#14204d">
<rect x="96" y="22" width="4.4" height="80" rx="1.2"/>
<path d="M98 26 C98 11 84 7 65 13" fill="none" stroke="#14204d" stroke-width="3.2" stroke-linecap="round"/>
<path d="M50 14 Q62 8 74 14 L71 19 L53 19 Z"/>
<rect x="95" y="99" width="6.4" height="4" rx="1"/>
</g>
<ellipse cx="62" cy="19" rx="7" ry="2" fill="#fff6c0"/>
<g transform="translate(55 28)">
<g class="an lm-moth m1">
<ellipse class="an lm-wing" cx="-1.3" cy="0" rx="1.6" ry=".9" fill="#fff6c0"/>
<ellipse class="an lm-wing" cx="1.3" cy="0" rx="1.6" ry=".9" fill="#fff6c0"/>
</g>
</g>
<g transform="translate(70 34)">
<g class="an lm-moth m2">
<ellipse class="an lm-wing" cx="-1.3" cy="0" rx="1.6" ry=".9" fill="#fff6c0"/>
<ellipse class="an lm-wing" cx="1.3" cy="0" rx="1.6" ry=".9" fill="#fff6c0"/>
</g>
</g>
<g transform="translate(62 44)">
<g class="an lm-moth m3">
<ellipse class="an lm-wing" cx="-1.3" cy="0" rx="1.6" ry=".9" fill="#fff6c0"/>
<ellipse class="an lm-wing" cx="1.3" cy="0" rx="1.6" ry=".9" fill="#fff6c0"/>
</g>
</g>
<g class="an lm-fig" fill="#0d1a45">
<circle cx="49" cy="80" r="4.6"/>
<path d="M44 97 C42 89 43 84 48.5 84 C54 84 56 87 56 91 C56 93 55 95 55 97 Z"/>
<path d="M51 96 L62 88 L65 91 L62 97 L51 99 Z"/>
<path d="M52 86 L61 89" fill="none" stroke="#0d1a45" stroke-width="3" stroke-linecap="round"/>
<ellipse cx="55" cy="99.5" rx="14" ry="2" opacity=".5"/>
</g>
<g fill="#0d1a45">
<ellipse cx="76" cy="96" rx="6.5" ry="3.8"/>
<circle cx="82" cy="91.5" r="3.3"/>
<path d="M79.6 89.6 L80.2 85.6 L82.8 88.8 Z M82.6 88.6 L85.4 85.6 L85.6 90 Z"/>
<g class="an lm-tail">
<path d="M70 97 C62 98 62 89 66 88.5" fill="none" stroke="#0d1a45" stroke-width="2.4" stroke-linecap="round"/>
</g>
<ellipse cx="73" cy="99.5" rx="9" ry="1.6" opacity=".5"/>
</g>
<g fill="#ffd84a">
<circle cx="81.2" cy="91.2" r=".55"/>
<circle cx="83.4" cy="91.2" r=".55"/>
</g>
</svg>`,

  skeleton: `<svg viewBox="0 0 40 40" role="img" aria-label="Pixel-art skeleton sitting on a grassy hill holding a sunflower" shape-rendering="crispEdges">
<g>
<path fill="#3f8fdc" d="M0 0h40v1h-40zM0 1h22v1h-22zM23 1h17v1h-17zM0 2h19v1h-19zM26 2h14v1h-14zM0 3h18v1h-18zM29 3h11v1h-11zM0 4h14v1h-14zM15 4h2v1h-2zM28 4h12v1h-12zM0 5h11v1h-11zM29 5h11v1h-11zM0 6h10v1h-10zM29 6h2v1h-2zM33 6h7v1h-7zM0 7h9v1h-9zM30 7h10v1h-10zM1 8h1v1h-1zM3 8h1v1h-1zM5 8h1v1h-1zM7 8h1v1h-1zM33 8h1v1h-1zM35 8h1v1h-1zM37 8h1v1h-1zM39 8h1v1h-1z"/>
<path fill="#5aa8ea" d="M0 8h1v1h-1zM2 8h1v1h-1zM4 8h1v1h-1zM6 8h1v1h-1zM34 8h1v1h-1zM36 8h1v1h-1zM38 8h1v1h-1zM0 9h8v1h-8zM34 9h6v1h-6zM0 10h8v1h-8zM35 10h5v1h-5zM0 11h7v1h-7zM35 11h5v1h-5zM0 12h6v1h-6zM37 12h3v1h-3zM0 13h5v1h-5zM36 13h4v1h-4zM0 14h5v1h-5zM35 14h5v1h-5zM0 15h5v1h-5zM36 15h4v1h-4zM0 16h4v1h-4zM37 16h3v1h-3zM0 17h1v1h-1zM2 17h1v1h-1zM4 17h1v1h-1zM38 17h1v1h-1z"/>
<path fill="#76bdf0" d="M1 17h1v1h-1zM3 17h1v1h-1zM37 17h1v1h-1zM39 17h1v1h-1zM0 18h5v1h-5zM38 18h2v1h-2zM0 19h5v1h-5zM27 19h2v1h-2zM37 19h3v1h-3zM0 20h6v1h-6zM27 20h3v1h-3zM37 20h3v1h-3zM0 21h9v1h-9zM26 21h5v1h-5zM36 21h4v1h-4zM0 22h10v1h-10zM24 22h9v1h-9zM34 22h6v1h-6zM0 23h9v1h-9zM22 23h18v1h-18zM0 24h9v1h-9zM23 24h17v1h-17zM0 25h3v1h-3zM4 25h5v1h-5zM23 25h17v1h-17zM7 26h1v1h-1zM25 26h1v1h-1zM27 26h1v1h-1zM29 26h1v1h-1zM31 26h1v1h-1zM33 26h1v1h-1zM35 26h1v1h-1zM37 26h1v1h-1zM39 26h1v1h-1z"/>
<path fill="#8ccdf3" d="M6 26h1v1h-1zM24 26h1v1h-1zM26 26h1v1h-1zM28 26h1v1h-1zM30 26h1v1h-1zM32 26h1v1h-1zM34 26h1v1h-1zM36 26h1v1h-1zM38 26h1v1h-1zM25 27h15v1h-15zM28 28h12v1h-12zM29 29h11v1h-11zM29 30h11v1h-11zM30 31h1v1h-1zM32 31h8v1h-8zM36 32h1v1h-1zM38 32h2v1h-2z"/>
</g>
<g class="an px-cloud">
<path fill="#ffffff" d="M22 1h1v1h-1zM19 2h7v1h-7zM18 3h9v1h-9zM14 4h1v1h-1zM17 4h11v1h-11zM11 5h18v1h-18zM10 6h19v1h-19zM9 7h21v1h-21zM8 8h25v1h-25zM8 9h3v1h-3zM14 9h20v1h-20zM8 10h2v1h-2zM15 10h7v1h-7zM23 10h12v1h-12zM7 11h2v1h-2zM16 11h5v1h-5zM24 11h11v1h-11zM6 12h2v1h-2zM17 12h3v1h-3zM25 12h10v1h-10zM5 13h2v1h-2zM18 13h3v1h-3zM24 13h12v1h-12zM5 14h2v1h-2zM18 14h4v1h-4zM23 14h12v1h-12zM5 15h2v1h-2zM18 15h4v1h-4zM23 15h1v1h-1zM25 15h11v1h-11zM4 16h4v1h-4zM18 16h4v1h-4zM24 16h5v1h-5zM30 16h7v1h-7zM5 17h4v1h-4zM19 17h2v1h-2zM23 17h5v1h-5zM30 17h7v1h-7zM6 18h1v1h-1zM8 18h1v1h-1zM20 18h1v1h-1zM24 18h1v1h-1zM26 18h1v1h-1zM29 18h9v1h-9zM19 19h1v1h-1zM23 19h1v1h-1zM25 19h1v1h-1zM30 19h7v1h-7zM30 20h1v1h-1zM32 20h1v1h-1zM34 20h1v1h-1zM36 20h1v1h-1z"/>
<path fill="#d4e9f8" d="M29 16h1v1h-1zM28 17h2v1h-2zM5 18h1v1h-1zM7 18h1v1h-1zM9 18h1v1h-1zM19 18h1v1h-1zM21 18h1v1h-1zM23 18h1v1h-1zM25 18h1v1h-1zM27 18h2v1h-2zM5 19h5v1h-5zM20 19h1v1h-1zM24 19h1v1h-1zM26 19h1v1h-1zM29 19h1v1h-1zM6 20h4v1h-4zM18 20h2v1h-2zM24 20h3v1h-3zM31 20h1v1h-1zM33 20h1v1h-1zM35 20h1v1h-1zM17 21h2v1h-2zM24 21h2v1h-2zM31 21h5v1h-5zM23 22h1v1h-1zM33 22h1v1h-1z"/>
</g>
<g>
<path fill="#3f9c35" d="M3 25h1v1h-1zM5 26h1v1h-1zM0 28h1v1h-1zM7 28h1v1h-1zM5 29h1v1h-1zM3 30h1v1h-1zM10 30h1v1h-1zM17 30h1v1h-1zM1 31h1v1h-1zM8 31h1v1h-1zM15 31h1v1h-1zM31 31h1v1h-1zM6 32h1v1h-1zM13 32h1v1h-1zM20 32h1v1h-1zM27 32h1v1h-1zM35 32h1v1h-1zM37 32h1v1h-1zM4 33h1v1h-1zM11 33h1v1h-1zM18 33h1v1h-1zM25 33h1v1h-1zM2 34h1v1h-1zM9 34h1v1h-1zM16 34h1v1h-1zM23 34h1v1h-1zM30 34h1v1h-1zM37 34h1v1h-1zM0 35h1v1h-1zM7 35h1v1h-1zM14 35h1v1h-1zM21 35h1v1h-1zM28 35h1v1h-1zM35 35h1v1h-1zM5 36h1v1h-1zM12 36h1v1h-1zM19 36h1v1h-1zM26 36h1v1h-1zM33 36h1v1h-1zM3 37h1v1h-1zM10 37h1v1h-1zM17 37h1v1h-1zM24 37h1v1h-1zM31 37h1v1h-1zM38 37h1v1h-1zM1 38h1v1h-1zM8 38h1v1h-1zM15 38h1v1h-1zM22 38h1v1h-1zM29 38h1v1h-1zM36 38h1v1h-1zM6 39h1v1h-1zM13 39h1v1h-1zM20 39h1v1h-1zM27 39h1v1h-1zM34 39h1v1h-1z"/>
<path fill="#8bdc5c" d="M0 26h5v1h-5zM5 27h3v1h-3zM20 30h3v1h-3zM28 31h2v1h-2zM30 32h5v1h-5zM35 33h5v1h-5z"/>
<path fill="#6ccb4a" d="M0 27h1v1h-1zM2 27h1v1h-1zM4 27h1v1h-1zM6 28h1v1h-1zM8 28h1v1h-1zM16 30h1v1h-1zM18 30h1v1h-1zM20 31h1v1h-1zM22 31h1v1h-1zM26 32h1v1h-1zM28 32h1v1h-1zM32 33h1v1h-1zM34 33h1v1h-1zM36 34h1v1h-1zM38 34h1v1h-1z"/>
<path fill="#53b543" d="M1 27h1v1h-1zM3 27h1v1h-1zM1 28h5v1h-5zM0 29h5v1h-5zM6 29h4v1h-4zM0 30h3v1h-3zM4 30h6v1h-6zM11 30h5v1h-5zM19 30h1v1h-1zM0 31h1v1h-1zM2 31h4v1h-4zM7 31h1v1h-1zM9 31h6v1h-6zM16 31h4v1h-4zM21 31h1v1h-1zM23 31h1v1h-1zM0 32h6v1h-6zM7 32h6v1h-6zM14 32h6v1h-6zM21 32h5v1h-5zM29 32h1v1h-1zM0 33h4v1h-4zM5 33h6v1h-6zM12 33h6v1h-6zM19 33h6v1h-6zM26 33h4v1h-4zM31 33h1v1h-1zM33 33h1v1h-1zM0 34h2v1h-2zM3 34h6v1h-6zM10 34h4v1h-4zM15 34h1v1h-1zM17 34h6v1h-6zM24 34h6v1h-6zM31 34h5v1h-5zM39 34h1v1h-1zM1 35h1v1h-1zM3 35h4v1h-4zM8 35h6v1h-6zM15 35h6v1h-6zM22 35h6v1h-6zM29 35h6v1h-6zM36 35h4v1h-4zM0 36h5v1h-5zM6 36h6v1h-6zM13 36h6v1h-6zM20 36h4v1h-4zM25 36h1v1h-1zM27 36h6v1h-6zM35 36h5v1h-5zM0 37h3v1h-3zM4 37h6v1h-6zM11 37h6v1h-6zM18 37h6v1h-6zM25 37h6v1h-6zM32 37h6v1h-6zM39 37h1v1h-1zM0 38h1v1h-1zM2 38h6v1h-6zM9 38h6v1h-6zM16 38h6v1h-6zM23 38h6v1h-6zM30 38h6v1h-6zM37 38h3v1h-3zM0 39h6v1h-6zM7 39h6v1h-6zM14 39h6v1h-6zM21 39h6v1h-6zM28 39h6v1h-6zM35 39h5v1h-5z"/>
<path fill="#ffffff" d="M6 31h1v1h-1zM30 33h1v1h-1zM14 34h1v1h-1z"/>
<path fill="#ffd43b" d="M2 35h1v1h-1zM24 36h1v1h-1z"/>
<path fill="#ff5a6e" d="M34 36h1v1h-1z"/>
</g>
<g>
<path fill="#4b3a2e" d="M10 19h1v1h-1zM12 19h1v1h-1zM21 19h1v1h-1zM10 20h1v1h-1zM12 20h4v1h-4zM20 20h1v1h-1zM23 20h1v1h-1zM9 21h1v1h-1zM16 21h1v1h-1zM19 21h2v1h-2zM23 21h1v1h-1zM10 22h1v1h-1zM12 22h1v1h-1zM16 22h3v1h-3zM21 22h2v1h-2zM9 23h1v1h-1zM19 23h3v1h-3zM9 24h1v1h-1zM11 24h4v1h-4zM18 24h1v1h-1zM22 24h1v1h-1zM9 25h1v1h-1zM15 25h1v1h-1zM17 25h2v1h-2zM22 25h1v1h-1zM8 26h1v1h-1zM23 26h1v1h-1zM8 27h1v1h-1zM20 27h1v1h-1zM24 27h1v1h-1zM9 28h1v1h-1zM25 28h3v1h-3zM10 29h13v1h-13zM28 29h1v1h-1zM23 30h1v1h-1zM28 30h1v1h-1zM24 31h4v1h-4z"/>
<path fill="#cbb996" d="M11 19h1v1h-1zM22 20h1v1h-1zM10 21h1v1h-1zM12 21h1v1h-1zM15 21h1v1h-1zM21 21h2v1h-2zM19 22h2v1h-2zM11 23h4v1h-4zM18 23h1v1h-1zM10 24h1v1h-1zM15 24h1v1h-1zM17 24h1v1h-1zM21 25h1v1h-1zM20 26h1v1h-1zM22 26h1v1h-1zM9 27h1v1h-1zM19 27h1v1h-1zM23 27h1v1h-1zM10 28h13v1h-13zM24 28h1v1h-1zM23 29h1v1h-1zM27 29h1v1h-1zM24 30h4v1h-4z"/>
<path fill="#efe4cc" d="M11 20h1v1h-1zM21 20h1v1h-1zM11 21h1v1h-1zM13 21h2v1h-2zM11 22h1v1h-1zM13 22h3v1h-3zM10 23h1v1h-1zM15 23h3v1h-3zM16 24h1v1h-1zM19 24h3v1h-3zM10 25h5v1h-5zM16 25h1v1h-1zM19 25h2v1h-2zM9 26h11v1h-11zM21 26h1v1h-1zM10 27h9v1h-9zM21 27h2v1h-2zM23 28h1v1h-1zM24 29h3v1h-3z"/>
</g>
<g class="an px-head">
<path fill="#4b3a2e" d="M11 9h3v1h-3zM10 10h1v1h-1zM14 10h1v1h-1zM9 11h1v1h-1zM15 11h1v1h-1zM8 12h1v1h-1zM16 12h1v1h-1zM7 13h1v1h-1zM17 13h1v1h-1zM7 14h1v1h-1zM17 14h1v1h-1zM7 15h1v1h-1zM17 15h1v1h-1zM8 16h1v1h-1zM9 17h1v1h-1zM18 17h1v1h-1zM10 18h1v1h-1zM18 18h1v1h-1zM18 19h1v1h-1zM16 20h2v1h-2z"/>
<path fill="#efe4cc" d="M11 10h3v1h-3zM10 11h5v1h-5zM9 12h7v1h-7zM8 13h6v1h-6zM16 13h1v1h-1zM8 14h6v1h-6zM9 15h7v1h-7zM10 16h6v1h-6zM11 17h2v1h-2zM14 17h3v1h-3zM11 18h1v1h-1z"/>
<path fill="#2b2020" d="M14 13h2v1h-2zM14 14h2v1h-2zM17 16h1v1h-1zM14 18h1v1h-1zM16 18h1v1h-1z"/>
<path fill="#cbb996" d="M16 14h1v1h-1zM8 15h1v1h-1zM16 15h1v1h-1zM9 16h1v1h-1zM16 16h1v1h-1zM10 17h1v1h-1zM13 17h1v1h-1zM17 17h1v1h-1zM12 18h1v1h-1zM13 19h5v1h-5z"/>
<path fill="#ffffff" d="M13 18h1v1h-1zM15 18h1v1h-1zM17 18h1v1h-1z"/>
</g>
<g class="an px-flower">
<path fill="#ffd43b" d="M22 10h1v1h-1zM20 12h1v1h-1zM24 12h1v1h-1zM22 14h1v1h-1z"/>
<path fill="#c9791f" d="M21 11h1v1h-1zM23 11h1v1h-1zM21 13h1v1h-1zM23 13h1v1h-1z"/>
<path fill="#8a4b1b" d="M22 11h1v1h-1zM21 12h1v1h-1zM23 12h1v1h-1zM22 13h1v1h-1z"/>
<path fill="#5a2e0d" d="M22 12h1v1h-1z"/>
<path fill="#3f9c35" d="M22 15h1v1h-1zM22 16h1v1h-1zM22 17h1v1h-1zM22 18h1v1h-1zM22 19h1v1h-1z"/>
<path fill="#53b543" d="M24 15h1v1h-1zM23 16h1v1h-1zM21 17h1v1h-1z"/>
</g>
<g class="an px-pet px-p1">
<path fill="#ff8fa3" d="M31 6h2v1h-2z"/>
</g>
<g class="an px-pet px-p2">
<path fill="#7ed957" d="M35 12h2v1h-2z"/>
</g>
<g class="an px-pet px-p3">
<path fill="#ffffff" d="M27 3h2v1h-2z"/>
</g>
</svg>`,

  seal: `<svg viewBox="0 0 120 120" role="img" aria-label="Sleepy seal yawning, drawn with printed dots">
<defs>
<pattern id="sdot" width="3.6" height="3.6" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
<circle cx="1.8" cy="1.8" r="1.05" fill="var(--bg)"/>
</pattern>
<radialGradient id="sfade" cx=".5" cy=".5" r=".5">
<stop offset=".4" stop-color="#fff" stop-opacity="0"/>
<stop offset="1" stop-color="#fff"/>
</radialGradient>
<mask id="sedge" maskContentUnits="objectBoundingBox">
<rect width="1" height="1" fill="url(#sfade)"/>
</mask>
</defs>
<g class="an seal-body">
<g class="an seal-fll">
<ellipse cx="13" cy="94" rx="15" ry="7.5" transform="rotate(-28 13 94)" fill="var(--bg)"/>
</g>
<g class="an seal-flr">
<ellipse cx="107" cy="94" rx="15" ry="7.5" transform="rotate(28 107 94)" fill="var(--bg)"/>
</g>
<ellipse cx="60" cy="84" rx="52" ry="36" fill="var(--bg)"/>
<ellipse cx="60" cy="93" rx="37" ry="26" fill="var(--surface)"/>
<ellipse cx="60" cy="93" rx="37" ry="26" fill="url(#sdot)" mask="url(#sedge)"/>
<ellipse cx="60" cy="48" rx="35" ry="30" fill="var(--bg)"/>
<ellipse cx="60" cy="56" rx="25" ry="21" fill="var(--surface)"/>
<ellipse cx="60" cy="56" rx="25" ry="21" fill="url(#sdot)" mask="url(#sedge)"/>
<g fill="none" stroke="var(--surface)" stroke-width="3.6" stroke-linecap="round">
<path d="M38 40 Q46 34 54 40"/>
<path d="M66 40 Q74 34 82 40"/>
</g>
<path d="M54 50 Q60 45 66 50 Q64 57 60 57 Q56 57 54 50 Z" fill="var(--bg)"/>
<path d="M60 57 L60 60" stroke="var(--bg)" stroke-width="2" stroke-linecap="round"/>
<g class="an seal-yawn">
<ellipse cx="60" cy="68" rx="11" ry="9" fill="#6b2f45"/>
<ellipse cx="60" cy="72" rx="7" ry="4" fill="var(--accent)"/>
<path d="M51.5 62 L54 68 L57 62 Z M63 62 L66 68 L68.5 62 Z" fill="#fff"/>
</g>
<g fill="var(--bg)">
<circle cx="48" cy="55" r="1"/>
<circle cx="52" cy="58" r="1"/>
<circle cx="72" cy="55" r="1"/>
<circle cx="68" cy="58" r="1"/>
</g>
<g class="an rg-wl" fill="none" stroke="var(--bg)" stroke-width="1.7" stroke-linecap="round">
<path d="M38 58 L22 53"/>
<path d="M37 61 L20 61"/>
<path d="M38 64 L23 70"/>
</g>
<g class="an rg-wr" fill="none" stroke="var(--bg)" stroke-width="1.7" stroke-linecap="round">
<path d="M82 58 L98 53"/>
<path d="M83 61 L100 61"/>
<path d="M82 64 L97 70"/>
</g>
</g>


<text class="an zz" x="96" y="26" font-size="15" fill="var(--bg)" font-family="serif" font-style="italic" font-weight="700">Z</text>
<text class="an zz zz2" x="103" y="14" font-size="11" fill="var(--bg)" font-family="serif" font-style="italic" font-weight="700">z</text>
</svg>`,

  rigby: `<svg viewBox="0 0 120 120" role="img" aria-label="Sleepy grey tabby cat">
<g class="an cat-body">
<g class="an rg-tail">
<path d="M88 106 C106 108 112 90 103 80" fill="none" stroke="var(--text)" stroke-width="9" stroke-linecap="round"/>
<path d="M88 106 C106 108 112 90 103 80" fill="none" stroke="#a9afbb" stroke-width="5" stroke-linecap="round"/>
<path d="M105 86 C102 82 103 80 103 80" fill="none" stroke="#656c7c" stroke-width="5" stroke-linecap="round"/>
</g>
<ellipse cx="60" cy="102" rx="33" ry="17" fill="#a9afbb" stroke="var(--text)" stroke-width="3"/>
<ellipse cx="60" cy="106" rx="14" ry="10" fill="#f6efe6"/>
<g class="an rg-earl">
<path d="M24 56 L27 18 L53 39 Z" fill="#a9afbb" stroke="var(--text)" stroke-width="3" stroke-linejoin="round"/>
<path d="M30 44 L31 28 L43 38 Z" fill="#e9a3b2"/>
</g>
<g class="an rg-earr">
<path d="M96 56 L93 18 L67 39 Z" fill="#a9afbb" stroke="var(--text)" stroke-width="3" stroke-linejoin="round"/>
<path d="M90 44 L89 28 L77 38 Z" fill="#e9a3b2"/>
</g>
<ellipse cx="60" cy="68" rx="40" ry="33" fill="#a9afbb" stroke="var(--text)" stroke-width="3"/>
<g fill="none" stroke="#656c7c" stroke-width="3" stroke-linecap="round">
<path d="M60 36 L60 47"/>
<path d="M50 37 L52 46"/>
<path d="M70 37 L68 46"/>
<path d="M21 64 L30 66"/>
<path d="M22 73 L31 73"/>
<path d="M99 64 L90 66"/>
<path d="M98 73 L89 73"/>
</g>
<ellipse cx="60" cy="82" rx="17" ry="12" fill="#f6efe6"/>
<ellipse cx="40" cy="82" rx="10" ry="7" fill="#f6efe6"/>
<ellipse cx="80" cy="82" rx="10" ry="7" fill="#f6efe6"/>
<ellipse cx="32" cy="77" rx="5" ry="3" fill="#ff9db4" opacity=".5"/>
<ellipse cx="88" cy="77" rx="5" ry="3" fill="#ff9db4" opacity=".5"/>
<g fill="none" stroke="var(--text)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
<path d="M38 66 Q45 74 52 66"/>
<path d="M68 66 Q75 74 82 66"/>
<path d="M55 77 L65 77 L60 82.5 Z" fill="#e8788f" stroke-width="2.2"/>
<path d="M60 82.5 Q55 89 49 85"/>
<path d="M60 82.5 Q65 89 71 85"/>
</g>
<g class="an rg-wl" fill="none" stroke="#6b7385" stroke-width="1.2" stroke-linecap="round">
<path d="M26 76 Q16 73 5 72"/>
<path d="M26 82 Q16 82 5 85"/>
<path d="M26 88 Q16 91 5 98"/>
</g>
<g class="an rg-wr" fill="none" stroke="#6b7385" stroke-width="1.2" stroke-linecap="round">
<path d="M94 76 Q104 73 115 72"/>
<path d="M94 82 Q104 82 115 85"/>
<path d="M94 88 Q104 91 115 98"/>
</g>
<g stroke="var(--text)" stroke-width="3">
<ellipse cx="45" cy="109" rx="9.5" ry="6.5" fill="#f6efe6"/>
<ellipse cx="75" cy="109" rx="9.5" ry="6.5" fill="#f6efe6"/>
</g>
<g stroke="#b8a99a" stroke-width="1.4" stroke-linecap="round">
<path d="M42 106 L42 110"/>
<path d="M48 106 L48 110"/>
<path d="M72 106 L72 110"/>
<path d="M78 106 L78 110"/>
</g>
</g>
<text class="an zz" x="100" y="30" font-size="14" fill="var(--muted)" font-family="serif" font-style="italic">z</text>
<text class="an zz zz2" x="106" y="20" font-size="11" fill="var(--muted)" font-family="serif" font-style="italic">z</text>
</svg>`,

  sakura: `<svg viewBox="0 0 120 120" role="img" aria-label="Twisted cherry blossom tree growing from a rocky ledge, petals drifting down">
<defs>
<g id="skFl">
<circle cx="0" cy="-1.5" r="1.35"/>
<circle cx="1.45" cy="-.45" r="1.35"/>
<circle cx="0.9" cy="1.2" r="1.35"/>
<circle cx="-0.9" cy="1.2" r="1.35"/>
<circle cx="-1.45" cy="-.45" r="1.35"/>
<circle cx="0" cy="0" r=".55" fill="#e8527a"/>
</g>
</defs>
<g transform="translate(0 -22)">
<ellipse cx="62" cy="40" rx="58" ry="40" fill="#ffc2d1" opacity=".2"/>
<g fill="#ffc2d1" opacity=".3">
<ellipse cx="60" cy="18" rx="25" ry="16"/>
<ellipse cx="44" cy="22" rx="17" ry="12"/>
<ellipse cx="78" cy="22" rx="19" ry="13"/>
<ellipse cx="60" cy="36" rx="15" ry="11"/>
<ellipse cx="28" cy="34" rx="19" ry="13"/>
<ellipse cx="20" cy="46" rx="13" ry="10"/>
<ellipse cx="14" cy="60" rx="12" ry="9"/>
<ellipse cx="42" cy="40" rx="12" ry="9"/>
<ellipse cx="92" cy="36" rx="21" ry="14"/>
<ellipse cx="108" cy="46" rx="12" ry="10"/>
<ellipse cx="74" cy="50" rx="17" ry="12"/>
<ellipse cx="96" cy="80" rx="13" ry="10"/>
<ellipse cx="88" cy="68" rx="15" ry="11"/>
<ellipse cx="74" cy="62" rx="13" ry="10"/>
<ellipse cx="108" cy="72" rx="9" ry="8"/>
</g>
<g stroke-linejoin="round" stroke="#2e1a14" stroke-width="1.5">
<path d="M-16 128 L-12 104 L-4 96 L8 94 L20 98 L34 103 L52 108 L70 114 L90 121 L76 126 L56 124 L40 129 L20 127 L2 131 Z" fill="#8b6b5a"/>
<path d="M-12 104 L-4 96 L8 94 L20 98 L34 103 L52 108 L46 111 L30 108 L14 103 L-2 101 Z" fill="#b99c8d"/>
<path d="M-2 101 L14 103 L30 108 L46 111 L52 108 L70 114 L90 121 L76 126 L56 124 L40 129 L20 127 L2 131 L-16 128 L-12 106 Z" fill="#7a5a4a"/>
</g>
<g fill="none" stroke="#2e1a14" stroke-width="1.1" stroke-linecap="round" opacity=".75">
<path d="M10 105 L14 116"/>
<path d="M26 111 L30 122"/>
<path d="M44 114 L47 123"/>
<path d="M-6 106 L-3 114"/>
<path d="M18 107 L20 114"/>
<path d="M60 118 L62 123"/>
</g>
<g fill="none" stroke="#d8c0b2" stroke-width="1" stroke-linecap="round" opacity=".7">
<path d="M-2 98 L12 100"/>
<path d="M24 101 L36 105"/>
</g>
<g fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M28 102 C32 96 30 90 34 84" stroke="#2e1a14" stroke-width="13.8"/>
<path d="M34 84 C38 78 32 74 38 69" stroke="#2e1a14" stroke-width="11.8"/>
<path d="M38 69 C44 64 50 66 50 58" stroke="#2e1a14" stroke-width="9.8"/>
<path d="M50 58 C50 52 44 50 46 44" stroke="#2e1a14" stroke-width="8"/>
<path d="M46 44 C47 40 50 38 52 34" stroke="#2e1a14" stroke-width="6.4"/>
<path d="M28 102 C20 100 14 98 8 94" stroke="#2e1a14" stroke-width="6.8"/>
<path d="M30 103 C40 104 48 106 56 110" stroke="#2e1a14" stroke-width="6.8"/>
<path d="M26 100 C22 104 18 106 12 106" stroke="#2e1a14" stroke-width="5.4"/>
<path d="M28 102 C32 96 30 90 34 84" stroke="#6b4636" stroke-width="12"/>
<path d="M34 84 C38 78 32 74 38 69" stroke="#6b4636" stroke-width="10"/>
<path d="M38 69 C44 64 50 66 50 58" stroke="#6b4636" stroke-width="8"/>
<path d="M50 58 C50 52 44 50 46 44" stroke="#6b4636" stroke-width="6.2"/>
<path d="M46 44 C47 40 50 38 52 34" stroke="#6b4636" stroke-width="4.6"/>
<path d="M28 102 C20 100 14 98 8 94" stroke="#6b4636" stroke-width="5"/>
<path d="M30 103 C40 104 48 106 56 110" stroke="#6b4636" stroke-width="5"/>
<path d="M26 100 C22 104 18 106 12 106" stroke="#6b4636" stroke-width="3.6"/>
</g>
<g fill="none" stroke-linecap="round">
<g stroke="#2e1a14" stroke-opacity=".6" stroke-width=".9">
<path d="M30 99 C33 93 31 88 34 83"/>
<path d="M36 82 C38 77 34 74 38 70"/>
<path d="M41 67 C46 64 48 64 49 60"/>
<path d="M26 97 C27 94 26 92 28 90"/>
<path d="M33 90 C35 88 34 86 35 84"/>
</g>
<g stroke="#a47860" stroke-opacity=".6" stroke-width=".8">
<path d="M35 98 C37 93 36 89 38 85"/>
<path d="M40 77 C41 73 39 71 42 68"/>
<path d="M47 62 C49 60 49 58 49 56"/>
</g>
</g>
<g fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M50 62 C58 58 68 58 78 52" stroke="#2e1a14" stroke-width="5.4"/>
<path d="M66 57 C72 54 76 56 84 56" stroke="#2e1a14" stroke-width="3.8"/>
<path d="M74 54 C78 48 84 46 90 44" stroke="#2e1a14" stroke-width="3.8"/>
<path d="M46 46 C40 40 30 40 22 34" stroke="#2e1a14" stroke-width="4.8"/>
<path d="M34 41 C30 36 28 30 26 26" stroke="#2e1a14" stroke-width="3.6"/>
<path d="M52 36 C54 28 58 22 64 16" stroke="#2e1a14" stroke-width="4.8"/>
<path d="M58 24 C64 24 70 20 76 20" stroke="#2e1a14" stroke-width="3.6"/>
<path d="M60 20 C56 14 52 12 48 12" stroke="#2e1a14" stroke-width="3.6"/>
<path d="M50 60 C62 64 74 62 84 68 C90 72 96 78 100 86" stroke="#2e1a14" stroke-width="4.8"/>
<path d="M84 68 C90 66 98 68 104 72" stroke="#2e1a14" stroke-width="3.6"/>
<path d="M38 70 C28 66 20 66 12 60" stroke="#2e1a14" stroke-width="4.4"/>
<path d="M22 66 C18 70 14 72 10 70" stroke="#2e1a14" stroke-width="3.4"/>
<path d="M50 62 C58 58 68 58 78 52" stroke="#4a2e24" stroke-width="3.6"/>
<path d="M66 57 C72 54 76 56 84 56" stroke="#4a2e24" stroke-width="2"/>
<path d="M74 54 C78 48 84 46 90 44" stroke="#4a2e24" stroke-width="2"/>
<path d="M46 46 C40 40 30 40 22 34" stroke="#4a2e24" stroke-width="3"/>
<path d="M34 41 C30 36 28 30 26 26" stroke="#4a2e24" stroke-width="1.8"/>
<path d="M52 36 C54 28 58 22 64 16" stroke="#4a2e24" stroke-width="3"/>
<path d="M58 24 C64 24 70 20 76 20" stroke="#4a2e24" stroke-width="1.8"/>
<path d="M60 20 C56 14 52 12 48 12" stroke="#4a2e24" stroke-width="1.8"/>
<path d="M50 60 C62 64 74 62 84 68 C90 72 96 78 100 86" stroke="#4a2e24" stroke-width="3"/>
<path d="M84 68 C90 66 98 68 104 72" stroke="#4a2e24" stroke-width="1.8"/>
<path d="M38 70 C28 66 20 66 12 60" stroke="#4a2e24" stroke-width="2.6"/>
<path d="M22 66 C18 70 14 72 10 70" stroke="#4a2e24" stroke-width="1.6"/>
</g>
<g class="an sk-sway sk-a">
<use href="#skFl" transform="translate(68.7 12.9) rotate(58) scale(0.9)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(66.1 19.7) rotate(7) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(58.6 10.8) rotate(36) scale(0.9)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(55.7 6) rotate(45) scale(0.7)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(63.7 21.9) rotate(16) scale(0.6)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(59 9.8) rotate(10) scale(1.1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(67 25.1) rotate(55) scale(0.7)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(67.6 12.8) rotate(48) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(68.2 16.7) rotate(29) scale(0.6)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(80 18.9) rotate(0) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(69.8 25.5) rotate(16) scale(0.9)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(54.2 9.3) rotate(58) scale(0.9)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(75.7 11.2) rotate(50) scale(1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(54.3 20.5) rotate(24) scale(0.9)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(69.2 20.4) rotate(6) scale(0.6)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(73.3 23.9) rotate(3) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(69.1 20.5) rotate(44) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(47.9 12.6) rotate(59) scale(0.6)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(47.8 18.9) rotate(33) scale(0.6)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(41.9 19.4) rotate(67) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(48.2 26.2) rotate(11) scale(1.1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(56.3 11.7) rotate(45) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(62.2 8.6) rotate(28) scale(1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(45.2 10.5) rotate(30) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(67.9 7.8) rotate(45) scale(0.7)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(57.4 5.2) rotate(33) scale(1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(65.9 27.5) rotate(46) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(66.2 20) rotate(26) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(38.3 19.4) rotate(61) scale(0.9)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(70.9 13.9) rotate(49) scale(0.9)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(63.8 7) rotate(55) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(63.1 10.7) rotate(59) scale(1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(42.6 25.3) rotate(16) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(76.7 19.7) rotate(60) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(52.8 11.6) rotate(2) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(81.6 19.1) rotate(55) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(69.7 17.5) rotate(32) scale(1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(63.6 27) rotate(33) scale(1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(40.7 14.7) rotate(58) scale(0.6)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(49.6 8) rotate(68) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(69.1 25.6) rotate(0) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(61.4 13) rotate(71) scale(0.6)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(76.8 22.1) rotate(13) scale(0.8)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(63.9 15.9) rotate(12) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(33.5 21.7) rotate(56) scale(1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(37.7 29.9) rotate(35) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(34.2 23.9) rotate(66) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(53.7 15.9) rotate(57) scale(0.7)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(47.2 24.4) rotate(30) scale(0.8)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(38.2 23.8) rotate(19) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(54.4 19.3) rotate(17) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(50.4 21.1) rotate(62) scale(1.1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(50 28.3) rotate(65) scale(0.7)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(36.5 25.3) rotate(46) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(54.3 22.8) rotate(49) scale(0.8)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(38.6 28.2) rotate(14) scale(0.8)" fill="#ffc2d1"/>


<use href="#skFl" transform="translate(56.4 21.3) rotate(10) scale(1.1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(43.7 23.8) rotate(16) scale(1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(49.5 14.5) rotate(51) scale(0.9)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(51.9 29) rotate(11) scale(0.9)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(41.7 29.9) rotate(34) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(54.3 19.3) rotate(28) scale(1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(55.9 25.4) rotate(70) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(32.4 26.3) rotate(67) scale(0.9)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(40.6 13.6) rotate(6) scale(1.1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(49.7 29.9) rotate(37) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(33.2 24.5) rotate(32) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(45.8 22.3) rotate(65) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(62.7 23.5) rotate(63) scale(0.6)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(63.5 19.3) rotate(27) scale(1.1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(87.3 21.4) rotate(51) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(93.8 21.3) rotate(9) scale(1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(67.4 15.3) rotate(10) scale(0.8)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(73 16.7) rotate(31) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(76.8 20) rotate(57) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(87.7 22.1) rotate(31) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(92.7 24) rotate(0) scale(0.7)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(75.6 24.5) rotate(31) scale(0.7)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(76.9 22) rotate(18) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(75.4 23.2) rotate(29) scale(0.6)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(91.5 27) rotate(49) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(79.2 13.5) rotate(18) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(92.1 24.5) rotate(64) scale(1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(85.4 27.6) rotate(29) scale(0.8)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(80.8 23) rotate(48) scale(0.9)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(84.1 15.6) rotate(62) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(77.1 28.7) rotate(67) scale(0.6)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(90.6 25.5) rotate(33) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(79.3 30.7) rotate(63) scale(0.7)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(80.5 19.7) rotate(5) scale(1.1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(68.5 16.6) rotate(42) scale(0.6)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(77.7 30.6) rotate(1) scale(0.7)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(66.9 22.8) rotate(27) scale(1.1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(74.1 17.2) rotate(59) scale(0.8)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(72.6 22.7) rotate(39) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(93.3 20.7) rotate(9) scale(0.6)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(65 28.9) rotate(49) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(62.9 43.5) rotate(18) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(59.9 31.9) rotate(14) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(58.3 32.3) rotate(50) scale(1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(60.7 36.1) rotate(51) scale(0.8)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(58.6 38.8) rotate(15) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(60.3 35.7) rotate(15) scale(1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(64.9 34.7) rotate(32) scale(0.6)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(54.8 39.6) rotate(46) scale(1.1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(69.3 32.9) rotate(13) scale(1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(69.3 38.1) rotate(31) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(67.8 35) rotate(54) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(68.1 31.2) rotate(10) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(69.8 38.1) rotate(36) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(48.6 36.7) rotate(60) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(54.5 38.2) rotate(51) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(56.3 32.4) rotate(15) scale(0.9)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(62.4 38.8) rotate(70) scale(0.7)" fill="#ffb0c4"/>
</g>
<g class="an sk-sway sk-b">
<use href="#skFl" transform="translate(30.9 43.4) rotate(54) scale(1.1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(32.5 37.4) rotate(71) scale(0.6)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(34.6 36.6) rotate(2) scale(0.7)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(28 27.6) rotate(48) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(26.2 42.6) rotate(16) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(23.5 27.3) rotate(11) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(27 38.9) rotate(55) scale(0.8)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(42.1 31.4) rotate(16) scale(1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(41.2 35.7) rotate(62) scale(1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(38 34) rotate(57) scale(1.1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(28.1 37.3) rotate(58) scale(0.6)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(40.1 38.5) rotate(29) scale(0.6)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(25.2 33.2) rotate(32) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(17.6 32.8) rotate(9) scale(1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(23.2 43.2) rotate(28) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(28.1 33.7) rotate(35) scale(0.8)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(40.4 32) rotate(67) scale(1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(28.8 38.9) rotate(7) scale(1.1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(39.2 35) rotate(10) scale(0.9)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(27.4 42.2) rotate(63) scale(1.1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(37.1 35.2) rotate(25) scale(0.8)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(36.6 34.2) rotate(26) scale(1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(20.8 34.1) rotate(29) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(20 35.1) rotate(63) scale(1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(16.3 28) rotate(18) scale(0.8)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(31.3 32.9) rotate(53) scale(0.6)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(31.7 34.8) rotate(14) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(43.4 33.8) rotate(67) scale(0.7)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(20 44.8) rotate(47) scale(0.9)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(26.6 45.6) rotate(35) scale(0.6)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(25.7 48.2) rotate(48) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(14.4 51) rotate(11) scale(1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(26.6 47.5) rotate(24) scale(0.8)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(16.2 51.4) rotate(31) scale(0.8)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(23.3 40.3) rotate(59) scale(0.6)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(28.9 48.6) rotate(43) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(16.2 49.1) rotate(33) scale(1.1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(19.8 40.2) rotate(0) scale(1.1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(18.6 40.7) rotate(3) scale(1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(21.5 44) rotate(49) scale(0.9)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(22.4 39.5) rotate(63) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(23.7 51.7) rotate(30) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(11.6 63) rotate(65) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(16.5 64.9) rotate(4) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(7.4 60.5) rotate(13) scale(0.6)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(18.6 59.8) rotate(53) scale(0.6)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(6.4 60) rotate(17) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(7.9 62.4) rotate(37) scale(0.9)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(12.2 64.3) rotate(25) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(10.4 61) rotate(24) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(11.4 63.4) rotate(12) scale(1.1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(8.9 55.1) rotate(29) scale(0.6)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(18.6 55.2) rotate(29) scale(0.6)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(44.9 41.8) rotate(9) scale(1.1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(36.2 44) rotate(0) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(47.5 42.9) rotate(4) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(39.7 41.7) rotate(4) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(36.1 37.2) rotate(41) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(37.4 42) rotate(26) scale(0.9)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(48.2 40.8) rotate(12) scale(0.8)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(44.1 35.3) rotate(20) scale(0.6)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(38.2 41.9) rotate(53) scale(1.1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(46.8 39) rotate(53) scale(0.9)" fill="#ffd9e3"/>
</g>
<g class="an sk-sway sk-c">
<use href="#skFl" transform="translate(77.5 41.1) rotate(25) scale(1.1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(83.1 40.4) rotate(20) scale(1.1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(77.5 40.6) rotate(58) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(92.9 32.1) rotate(50) scale(0.6)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(104 40.6) rotate(18) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(87.8 39.6) rotate(13) scale(0.6)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(80.4 42.4) rotate(38) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(104.2 43.6) rotate(40) scale(1.1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(108.4 39.5) rotate(28) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(81.8 30.1) rotate(23) scale(0.7)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(88.6 35.1) rotate(49) scale(1.1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(87.6 39.3) rotate(5) scale(1.1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(104.3 29.3) rotate(15) scale(0.9)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(82.6 40.7) rotate(53) scale(1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(88.8 41.1) rotate(57) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(84.4 35.9) rotate(59) scale(0.6)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(93.5 45.6) rotate(22) scale(1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(96.2 29.5) rotate(55) scale(0.6)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(81.3 43.4) rotate(5) scale(0.8)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(88.6 33.6) rotate(6) scale(1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(92.2 25.6) rotate(3) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(103.2 27.4) rotate(24) scale(1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(103.5 43.6) rotate(28) scale(0.7)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(101.8 38.6) rotate(41) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(99.5 32.5) rotate(32) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(74.7 35.9) rotate(64) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(92.9 42.7) rotate(20) scale(0.7)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(85.8 31.6) rotate(21) scale(0.7)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(94.4 30.5) rotate(46) scale(1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(103.8 34.4) rotate(32) scale(0.8)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(106.3 35.6) rotate(33) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(84.2 40.7) rotate(10) scale(0.6)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(84.9 37.6) rotate(37) scale(1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(95.8 31) rotate(0) scale(0.9)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(91.8 30.8) rotate(53) scale(0.7)" fill="#ffb0c4"/>


<use href="#skFl" transform="translate(75 35.2) rotate(5) scale(0.6)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(108.5 46) rotate(66) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(105.3 48.6) rotate(26) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(102.5 50.7) rotate(31) scale(0.6)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(106.4 41.5) rotate(34) scale(0.6)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(104.2 48.1) rotate(56) scale(0.6)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(102.8 43) rotate(0) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(114.3 47.4) rotate(20) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(115.4 48.2) rotate(18) scale(0.6)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(102.5 48.6) rotate(22) scale(0.9)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(105.7 45.9) rotate(68) scale(0.9)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(116.3 46.3) rotate(10) scale(1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(107.7 41.3) rotate(33) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(74.3 51.8) rotate(6) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(73 56.7) rotate(37) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(65.4 43.1) rotate(21) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(73.6 54.4) rotate(41) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(77.1 55.2) rotate(68) scale(0.9)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(61.4 51.6) rotate(55) scale(0.9)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(80.5 48.8) rotate(50) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(71.2 48.3) rotate(4) scale(1.1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(78.5 50.5) rotate(18) scale(1.1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(73.3 48.5) rotate(8) scale(0.6)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(73.7 47.7) rotate(25) scale(0.9)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(79.2 42.6) rotate(49) scale(1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(79 52.5) rotate(11) scale(0.6)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(79.1 43.6) rotate(16) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(84 54.5) rotate(43) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(72.2 50.6) rotate(6) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(72.2 44.7) rotate(36) scale(0.7)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(72.2 48.9) rotate(66) scale(0.8)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(75.2 44.8) rotate(11) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(67.3 47.8) rotate(36) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(75.1 41.1) rotate(12) scale(0.6)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(61.5 50.4) rotate(44) scale(0.7)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(83.7 48.3) rotate(36) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(79.4 42) rotate(14) scale(0.7)" fill="#ff9fb8"/>
</g>
<g class="an sk-sway sk-d">
<use href="#skFl" transform="translate(104.1 77.7) rotate(41) scale(0.8)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(92.1 83.5) rotate(54) scale(0.8)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(97.2 79.3) rotate(54) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(101.8 77.1) rotate(58) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(101.4 83.9) rotate(44) scale(0.9)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(89.7 77.5) rotate(70) scale(1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(95.8 77.1) rotate(29) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(100.8 83.4) rotate(64) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(98 83.6) rotate(19) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(104.4 79.1) rotate(20) scale(0.9)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(96.8 86.8) rotate(21) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(99.1 79.5) rotate(38) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(95.3 75.4) rotate(35) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(97.7 84.2) rotate(55) scale(0.6)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(93.5 75.4) rotate(2) scale(0.9)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(100.9 84.2) rotate(55) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(93.7 74.9) rotate(29) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(92.6 74.9) rotate(33) scale(0.8)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(85.4 66.2) rotate(20) scale(0.8)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(88 73.2) rotate(66) scale(0.8)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(82.8 61.1) rotate(1) scale(0.7)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(81.6 71.6) rotate(32) scale(1.1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(83.4 67.1) rotate(66) scale(1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(81.6 74) rotate(60) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(78.4 67.5) rotate(52) scale(1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(87.6 62.6) rotate(50) scale(1.1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(76.5 67.3) rotate(7) scale(1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(87.9 72.9) rotate(53) scale(0.6)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(96.2 64.8) rotate(13) scale(0.9)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(89.7 74.8) rotate(50) scale(1.1)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(83.3 68.8) rotate(24) scale(1.1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(79.2 69.2) rotate(45) scale(0.7)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(82.5 61.7) rotate(59) scale(1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(98.5 67.8) rotate(45) scale(0.9)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(89.2 64.2) rotate(54) scale(0.9)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(84.4 63) rotate(45) scale(1)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(74.2 65.8) rotate(10) scale(0.8)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(70.8 58.5) rotate(7) scale(1.1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(80.5 64.7) rotate(67) scale(0.7)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(77.9 57.1) rotate(26) scale(0.6)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(81.7 60.3) rotate(18) scale(0.7)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(76.6 59.6) rotate(26) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(81.3 58.5) rotate(70) scale(0.6)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(76.2 55.8) rotate(67) scale(0.7)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(82.1 65) rotate(71) scale(0.9)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(78.8 65.1) rotate(63) scale(1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(67.5 60.3) rotate(31) scale(1)" fill="#ffb0c4"/>
<use href="#skFl" transform="translate(66.7 62.1) rotate(20) scale(1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(110.2 69.1) rotate(59) scale(0.9)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(105.3 74.3) rotate(23) scale(1.1)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(104.9 69) rotate(42) scale(0.6)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(108.7 70.6) rotate(4) scale(0.8)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(108.9 75.1) rotate(46) scale(0.6)" fill="#ffc2d1"/>
<use href="#skFl" transform="translate(105.1 75.7) rotate(36) scale(0.9)" fill="#ff9fb8"/>
<use href="#skFl" transform="translate(104.4 73.3) rotate(37) scale(0.9)" fill="#ffd9e3"/>
<use href="#skFl" transform="translate(105.4 74.8) rotate(64) scale(0.7)" fill="#ffd9e3"/>
</g>
<circle class="an bloom bl1" cx="53.8" cy="10.7" r=".7" fill="#e8527a"/>
<circle class="an bloom bl2" cx="47.4" cy="15.8" r=".7" fill="#e8527a"/>
<circle class="an bloom bl3" cx="78.9" cy="19.9" r=".7" fill="#e8527a"/>
<circle class="an bloom bl1" cx="51.5" cy="36.1" r=".7" fill="#e8527a"/>
<circle class="an bloom bl2" cx="16.2" cy="32.9" r=".7" fill="#e8527a"/>
<circle class="an bloom bl3" cx="13.1" cy="41.4" r=".7" fill="#e8527a"/>
<circle class="an bloom bl1" cx="12.9" cy="63.1" r=".7" fill="#e8527a"/>
<circle class="an bloom bl2" cx="36.6" cy="37.3" r=".7" fill="#e8527a"/>
<circle class="an bloom bl3" cx="95.7" cy="43.9" r=".7" fill="#e8527a"/>
<circle class="an bloom bl1" cx="109.1" cy="44.8" r=".7" fill="#e8527a"/>
<circle class="an bloom bl2" cx="84.7" cy="43.5" r=".7" fill="#e8527a"/>
<circle class="an bloom bl3" cx="101.7" cy="77.6" r=".7" fill="#e8527a"/>
<circle class="an bloom bl1" cx="81.2" cy="63.1" r=".7" fill="#e8527a"/>
<circle class="an bloom bl2" cx="70.9" cy="65.5" r=".7" fill="#e8527a"/>
<circle class="an bloom bl3" cx="104.9" cy="72.7" r=".7" fill="#e8527a"/>
<circle class="an bloom bl1" cx="64.9" cy="15.3" r=".7" fill="#e8527a"/>
<circle class="an bloom bl2" cx="45.1" cy="15.7" r=".7" fill="#e8527a"/>
<circle class="an bloom bl3" cx="66.7" cy="17.3" r=".7" fill="#e8527a"/>
<circle class="an bloom bl1" cx="63.5" cy="35.1" r=".7" fill="#e8527a"/>
<circle class="an bloom bl2" cx="23.2" cy="35.4" r=".7" fill="#e8527a"/>
<circle class="an bloom bl3" cx="19.3" cy="43.8" r=".7" fill="#e8527a"/>
<circle class="an bloom bl1" cx="18.2" cy="61.9" r=".7" fill="#e8527a"/>
<circle class="an bloom bl2" cx="38.3" cy="40.7" r=".7" fill="#e8527a"/>
<circle class="an bloom bl3" cx="92.7" cy="42.6" r=".7" fill="#e8527a"/>
<circle class="an bloom bl1" cx="111.3" cy="43.6" r=".7" fill="#e8527a"/>
<circle class="an bloom bl2" cx="84.8" cy="44.5" r=".7" fill="#e8527a"/>
<circle class="an bloom bl3" cx="94.7" cy="82.9" r=".7" fill="#e8527a"/>
<circle class="an bloom bl1" cx="81.3" cy="67.9" r=".7" fill="#e8527a"/>
<circle class="an bloom bl2" cx="66.6" cy="63.9" r=".7" fill="#e8527a"/>
<circle class="an bloom bl3" cx="110.5" cy="72.6" r=".7" fill="#e8527a"/>
<ellipse cx="62" cy="116" rx="2.3" ry="1.2" fill="#ffb0c4" stroke="#e8809c" stroke-width=".4" transform="rotate(15 62 116)"/>
<ellipse cx="70" cy="113" rx="2.3" ry="1.2" fill="#ffb0c4" stroke="#e8809c" stroke-width=".4" transform="rotate(-20 70 113)"/>
<ellipse cx="78" cy="117" rx="2.3" ry="1.2" fill="#ffb0c4" stroke="#e8809c" stroke-width=".4" transform="rotate(25 78 117)"/>
<ellipse cx="88" cy="115" rx="2.3" ry="1.2" fill="#ffb0c4" stroke="#e8809c" stroke-width=".4" transform="rotate(-10 88 115)"/>
<ellipse cx="96" cy="118" rx="2.3" ry="1.2" fill="#ffb0c4" stroke="#e8809c" stroke-width=".4" transform="rotate(30 96 118)"/>
<ellipse cx="104" cy="116" rx="2.3" ry="1.2" fill="#ffb0c4" stroke="#e8809c" stroke-width=".4" transform="rotate(-25 104 116)"/>
<ellipse cx="112" cy="118" rx="2.3" ry="1.2" fill="#ffb0c4" stroke="#e8809c" stroke-width=".4" transform="rotate(10 112 118)"/>
<ellipse cx="56" cy="112" rx="2.3" ry="1.2" fill="#ffb0c4" stroke="#e8809c" stroke-width=".4" transform="rotate(20 56 112)"/>
<ellipse cx="100" cy="111" rx="2.3" ry="1.2" fill="#ffb0c4" stroke="#e8809c" stroke-width=".4" transform="rotate(-5 100 111)"/>
<ellipse cx="84" cy="119" rx="2.3" ry="1.2" fill="#ffb0c4" stroke="#e8809c" stroke-width=".4" transform="rotate(0 84 119)"/>
<ellipse cx="26" cy="100" rx="2.3" ry="1.2" fill="#ffb0c4" stroke="#e8809c" stroke-width=".4" transform="rotate(15 26 100)"/>
<ellipse cx="38" cy="104" rx="2.3" ry="1.2" fill="#ffb0c4" stroke="#e8809c" stroke-width=".4" transform="rotate(-15 38 104)"/>
<ellipse cx="46" cy="107" rx="2.3" ry="1.2" fill="#ffb0c4" stroke="#e8809c" stroke-width=".4" transform="rotate(20 46 107)"/>
<g transform="translate(70 56)">
<g class="an petal pt1">
<path d="M0 -2.6 C2.4 -2.6 3 1 0 3 C-3 1 -2.4 -2.6 0 -2.6 Z" fill="#ffb0c4" stroke="#e8809c" stroke-width=".5"/>
</g>
</g>
<g transform="translate(82 62)">
<g class="an petal pt2">
<path d="M0 -2.6 C2.4 -2.6 3 1 0 3 C-3 1 -2.4 -2.6 0 -2.6 Z" fill="#ffb0c4" stroke="#e8809c" stroke-width=".5"/>
</g>
</g>
<g transform="translate(94 70)">
<g class="an petal pt3">
<path d="M0 -2.6 C2.4 -2.6 3 1 0 3 C-3 1 -2.4 -2.6 0 -2.6 Z" fill="#ffb0c4" stroke="#e8809c" stroke-width=".5"/>
</g>
</g>
<g transform="translate(60 50)">
<g class="an petal pt4">
<path d="M0 -2.6 C2.4 -2.6 3 1 0 3 C-3 1 -2.4 -2.6 0 -2.6 Z" fill="#ffb0c4" stroke="#e8809c" stroke-width=".5"/>
</g>
</g>
<g transform="translate(100 78)">
<g class="an petal pt5">
<path d="M0 -2.6 C2.4 -2.6 3 1 0 3 C-3 1 -2.4 -2.6 0 -2.6 Z" fill="#ffb0c4" stroke="#e8809c" stroke-width=".5"/>
</g>
</g>
<g transform="translate(48 46)">
<g class="an petal pt6">
<path d="M0 -2.6 C2.4 -2.6 3 1 0 3 C-3 1 -2.4 -2.6 0 -2.6 Z" fill="#ffb0c4" stroke="#e8809c" stroke-width=".5"/>
</g>
</g>
<g transform="translate(88 56)">
<g class="an petal pt7">
<path d="M0 -2.6 C2.4 -2.6 3 1 0 3 C-3 1 -2.4 -2.6 0 -2.6 Z" fill="#ffb0c4" stroke="#e8809c" stroke-width=".5"/>
</g>
</g>
<g transform="translate(76 70)">
<g class="an petal pt8">
<path d="M0 -2.6 C2.4 -2.6 3 1 0 3 C-3 1 -2.4 -2.6 0 -2.6 Z" fill="#ffb0c4" stroke="#e8809c" stroke-width=".5"/>
</g>
</g>
<g transform="translate(104 64)">
<g class="an petal pt9">
<path d="M0 -2.6 C2.4 -2.6 3 1 0 3 C-3 1 -2.4 -2.6 0 -2.6 Z" fill="#ffb0c4" stroke="#e8809c" stroke-width=".5"/>
</g>
</g>
<g transform="translate(56 58)">
<g class="an petal pt10">


<path d="M0 -2.6 C2.4 -2.6 3 1 0 3 C-3 1 -2.4 -2.6 0 -2.6 Z" fill="#ffb0c4" stroke="#e8809c" stroke-width=".5"/>
</g>
</g>
</g>
</svg>`,

  stargazers: `<svg viewBox="0 0 120 120" role="img" aria-label="Two cats sitting close together, looking at the stars">
<defs>
<linearGradient id="sgSky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#2a3580"/>
<stop offset=".62" stop-color="#7a6bb4"/>
<stop offset="1" stop-color="#f5a06a"/>
</linearGradient>
<clipPath id="sgClip">
<circle cx="60" cy="60" r="52"/>
</clipPath>
</defs>
<circle cx="60" cy="60" r="52" fill="url(#sgSky)"/>
<g clip-path="url(#sgClip)">
<g transform="translate(26 28) scale(1)">
<g class="an twk tw1">
<path d="M0 -5 L1.2 -1.2 L5 0 L1.2 1.2 L0 5 L-1.2 1.2 L-5 0 L-1.2 -1.2 Z" fill="#ffe9a8"/>
</g>
</g>
<g transform="translate(94 24) scale(0.8)">
<g class="an twk tw2">
<path d="M0 -5 L1.2 -1.2 L5 0 L1.2 1.2 L0 5 L-1.2 1.2 L-5 0 L-1.2 -1.2 Z" fill="#ffe9a8"/>
</g>
</g>
<g transform="translate(40 46) scale(0.6)">
<g class="an twk tw3">
<path d="M0 -5 L1.2 -1.2 L5 0 L1.2 1.2 L0 5 L-1.2 1.2 L-5 0 L-1.2 -1.2 Z" fill="#ffe9a8"/>
</g>
</g>
<g transform="translate(80 50) scale(0.7)">
<g class="an twk tw1">
<path d="M0 -5 L1.2 -1.2 L5 0 L1.2 1.2 L0 5 L-1.2 1.2 L-5 0 L-1.2 -1.2 Z" fill="#ffe9a8"/>
</g>
</g>
<g transform="translate(60 20) scale(0.7)">
<g class="an twk tw2">
<path d="M0 -5 L1.2 -1.2 L5 0 L1.2 1.2 L0 5 L-1.2 1.2 L-5 0 L-1.2 -1.2 Z" fill="#ffe9a8"/>
</g>
</g>
<circle cx="14" cy="50" r="1" fill="#ffe9a8" opacity=".8"/>
<circle cx="104" cy="44" r="1" fill="#ffe9a8" opacity=".8"/>
<circle cx="72" cy="36" r="1" fill="#fff" opacity=".7"/>
<circle cx="48" cy="30" r="1" fill="#fff" opacity=".7"/>
<path d="M96 30 A12 12 0 1 0 103 51 A9.5 9.5 0 1 1 96 30 Z" fill="#ffe9a8" opacity=".95"/>
<g transform="translate(70 12)">
<g class="an shoot">
<path d="M0 0 L-14 -5" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".8"/>
<circle r="1.8" fill="#fff"/>
</g>
</g>
<ellipse cx="60" cy="118" rx="74" ry="32" fill="#202a55"/>
</g>
<g transform="translate(46 86) scale(1.12)">
<g class="an sg-body sgb1">
<g transform="scale(-1 1)">
<g class="an sg-tail">
<path d="M9 -3 C23 -1 25 -16 17 -23" stroke="var(--text)" stroke-width="8" stroke-linecap="round" fill="none"/>
<path d="M9 -3 C23 -1 25 -16 17 -23" stroke="#fff1d6" stroke-width="4.4" stroke-linecap="round" fill="none"/>
</g>
</g>
<path d="M-10.5 0 C-15 -10 -11 -25 0 -26 C11 -25 15 -10 10.5 0 Z" fill="#fff1d6" stroke="var(--text)" stroke-width="2.4" stroke-linejoin="round"/>
<path d="M-5 0 C-7 -8 -4 -15 0 -16" fill="none" stroke="var(--text)" stroke-opacity=".18" stroke-width="3" stroke-linecap="round"/>
<g transform="translate(0 -31) rotate(9)">
<g class="an sg-head sgh1">
<path d="M-8.4 -4 L-7.6 -15 L-1.2 -8.4 Z" fill="#fff1d6" stroke="var(--text)" stroke-width="2.2" stroke-linejoin="round"/>
<path d="M8.4 -4 L7.6 -15 L1.2 -8.4 Z" fill="#fff1d6" stroke="var(--text)" stroke-width="2.2" stroke-linejoin="round"/>
<path d="M-6.8 -6.4 L-6.4 -11.6 L-3.2 -8 Z M6.8 -6.4 L6.4 -11.6 L3.2 -8 Z" fill="#ff9aa8"/>
<ellipse cx="0" cy="0" rx="10" ry="9" fill="#fff1d6" stroke="var(--text)" stroke-width="2.4"/>
<g class="an sg-eye">
<ellipse cx="-3.6" cy="-3.1" rx="1.6" ry="2.2" fill="var(--text)"/>
<ellipse cx="3.6" cy="-3.1" rx="1.6" ry="2.2" fill="var(--text)"/>
<circle cx="-3.1" cy="-3.9" r=".7" fill="#fff"/>
<circle cx="4.1" cy="-3.9" r=".7" fill="#fff"/>
</g>
<path d="M-1.3 2 L1.3 2 L0 3.4 Z" fill="#ff9aa8"/>
<path d="M-3 4.6 Q0 6.4 3 4.6" fill="none" stroke="var(--text)" stroke-width="1.1" stroke-linecap="round"/>
</g>
</g>
</g>
</g>
<g transform="translate(71 88) scale(1)">
<g class="an sg-body sgb2">
<g transform="scale(1 1)">
<g class="an sg-tail">
<path d="M9 -3 C23 -1 25 -16 17 -23" stroke="var(--text)" stroke-width="8" stroke-linecap="round" fill="none"/>
<path d="M9 -3 C23 -1 25 -16 17 -23" stroke="var(--accent)" stroke-width="4.4" stroke-linecap="round" fill="none"/>
</g>
</g>
<path d="M-10.5 0 C-15 -10 -11 -25 0 -26 C11 -25 15 -10 10.5 0 Z" fill="var(--accent)" stroke="var(--text)" stroke-width="2.4" stroke-linejoin="round"/>
<path d="M-5 0 C-7 -8 -4 -15 0 -16" fill="none" stroke="var(--text)" stroke-opacity=".18" stroke-width="3" stroke-linecap="round"/>
<g transform="translate(0 -31) rotate(-9)">
<g class="an sg-head sgh2">
<path d="M-8.4 -4 L-7.6 -15 L-1.2 -8.4 Z" fill="var(--accent)" stroke="var(--text)" stroke-width="2.2" stroke-linejoin="round"/>
<path d="M8.4 -4 L7.6 -15 L1.2 -8.4 Z" fill="var(--accent)" stroke="var(--text)" stroke-width="2.2" stroke-linejoin="round"/>
<path d="M-6.8 -6.4 L-6.4 -11.6 L-3.2 -8 Z M6.8 -6.4 L6.4 -11.6 L3.2 -8 Z" fill="#ff9aa8"/>
<ellipse cx="0" cy="0" rx="10" ry="9" fill="var(--accent)" stroke="var(--text)" stroke-width="2.4"/>
<g class="an sg-eye">
<ellipse cx="-3.6" cy="-3.1" rx="1.6" ry="2.2" fill="var(--text)"/>
<ellipse cx="3.6" cy="-3.1" rx="1.6" ry="2.2" fill="var(--text)"/>
<circle cx="-3.1" cy="-3.9" r=".7" fill="#fff"/>
<circle cx="4.1" cy="-3.9" r=".7" fill="#fff"/>
</g>
<path d="M-1.3 2 L1.3 2 L0 3.4 Z" fill="#ff9aa8"/>
<path d="M-3 4.6 Q0 6.4 3 4.6" fill="none" stroke="var(--text)" stroke-width="1.1" stroke-linecap="round"/>
</g>
</g>
</g>
</g>
<g transform="translate(59 44)">
<path class="an sg-heart" d="M0 3 C-5 -2 -2 -6 0 -3 C2 -6 5 -2 0 3 Z" fill="#ff5f7a" stroke="var(--text)" stroke-width="1" stroke-linejoin="round"/>
</g>
<circle cx="60" cy="60" r="52" fill="none" stroke="var(--text)" stroke-width="3"/>
</svg>`,

  tangerine: `<svg viewBox="0 0 120 120" role="img" aria-label="Tangerine mascot smiling and crying at the same time">
<ellipse class="an tang-shadow" cx="60" cy="110" rx="26" ry="4" fill="var(--text)" opacity=".18"/>
<g class="an tang-body">
<ellipse cx="60" cy="68" rx="41" ry="37" fill="var(--accent)" stroke="var(--text)" stroke-width="3"/>
<path d="M30 56 C33 42 44 34 56 33" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="5" stroke-linecap="round"/>
<path d="M60 32 L61 24" stroke="var(--text)" stroke-width="3.4" stroke-linecap="round"/>
<g class="an tleaf">
<path d="M61 27 C72 12 92 15 96 27 C84 38 68 36 61 27 Z" fill="#5b9a3c" stroke="var(--text)" stroke-width="2.6" stroke-linejoin="round"/>
<path d="M66 27 C76 24 84 24 91 26" fill="none" stroke="var(--text)" stroke-width="1.4" stroke-linecap="round" opacity=".5"/>
</g>
<ellipse class="an blush" cx="35" cy="77" rx="7" ry="4" fill="#ff5f7a" opacity=".5"/>
<ellipse class="an blush" cx="85" cy="77" rx="7" ry="4" fill="#ff5f7a" opacity=".5"/>
<path d="M37 65 Q44 55 51 65" fill="none" stroke="var(--text)" stroke-width="3.6" stroke-linecap="round"/>
<g class="an sad-eye">
<ellipse cx="76" cy="65" rx="3.6" ry="4.4" fill="var(--text)"/>
<circle cx="77.2" cy="63.6" r="1.2" fill="#fff"/>
</g>
<path d="M67 55 L84 59.5" stroke="var(--text)" stroke-width="3" stroke-linecap="round"/>
<path d="M45 79 Q52 90 60 84 T76 90" fill="none" stroke="var(--text)" stroke-width="3.4" stroke-linecap="round"/>
<path class="an tear" d="M80 71 C80 71 74.6 77.6 74.6 81 A5.4 5.4 0 0 0 85.4 81 C85.4 77.6 80 71 80 71 Z" fill="#7db4e6" stroke="var(--text)" stroke-width="1.6" stroke-linejoin="round"/>
</g>
<path class="an heart-float" d="M20 38 C14 30 4 36 10 45 L20 55 L30 45 C36 36 26 30 20 38 Z" transform="translate(0 -4) scale(.8)" fill="#ff5f7a" stroke="var(--text)" stroke-width="2.2" stroke-linejoin="round"/>
</svg>`,

  specter: `<svg viewBox="0 0 120 120" role="img" aria-label="Two-faced specter mascot">
<g class="an spec-body">
<circle class="an aura" cx="60" cy="50" r="42" fill="var(--accent)" opacity=".16"/>
<g class="an focus-lines" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" opacity=".5">
<line x1="107" y1="50" x2="117" y2="50"/>
<line x1="100.7" y1="73.5" x2="109.4" y2="78.5"/>
<line x1="83.5" y1="90.7" x2="88.5" y2="99.4"/>
<line x1="60" y1="97" x2="60" y2="107"/>
<line x1="36.5" y1="90.7" x2="31.5" y2="99.4"/>
<line x1="19.3" y1="73.5" x2="10.6" y2="78.5"/>
<line x1="13" y1="50" x2="3" y2="50"/>
<line x1="19.3" y1="26.5" x2="10.6" y2="21.5"/>
<line x1="36.5" y1="9.3" x2="31.5" y2="0.6"/>
<line x1="60" y1="3" x2="60" y2="-7"/>
<line x1="83.5" y1="9.3" x2="88.5" y2="0.6"/>
<line x1="100.7" y1="26.5" x2="109.4" y2="21.5"/>
</g>
<path class="an wisp" d="M38 80 C36 96 46 100 46 114 C52 106 54 110 56 118 C60 108 66 108 68 118 C72 106 78 100 82 80 Z" fill="var(--surface)" stroke="var(--text)" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M50 92 L48 100 M60 94 L60 106 M70 92 L72 100" stroke="var(--text)" stroke-width="1.5" opacity=".5" stroke-linecap="round"/>
<path d="M26 84 L16 108 M94 84 L104 108" stroke="var(--text)" stroke-width="3" stroke-linecap="round"/>
<path d="M21 86 L31 82 M89 82 L99 86" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
<path d="M34 62 Q60 50 86 62 L80 88 Q60 94 40 88 Z" fill="var(--surface)" stroke="var(--text)" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M52 58 L60 70 L68 58" fill="none" stroke="var(--text)" stroke-width="2" stroke-linejoin="round"/>
<rect x="40" y="81" width="40" height="6" fill="var(--accent)" stroke="var(--bg)" stroke-width="1.5"/>
<g class="an arm-ul">
<path d="M38 62 Q20 54 14 34" fill="none" stroke="var(--text)" stroke-width="10" stroke-linecap="round"/>
<path d="M38 62 Q20 54 14 34" fill="none" stroke="var(--surface)" stroke-width="7" stroke-linecap="round"/>
<circle cx="14" cy="34" r="4.4" fill="var(--text)" stroke="var(--bg)" stroke-width="1.6"/>
</g>
<g class="an arm-ur">
<path d="M82 62 Q100 54 106 34" fill="none" stroke="var(--text)" stroke-width="10" stroke-linecap="round"/>
<path d="M82 62 Q100 54 106 34" fill="none" stroke="var(--surface)" stroke-width="7" stroke-linecap="round"/>
<circle cx="106" cy="34" r="4.4" fill="var(--text)" stroke="var(--bg)" stroke-width="1.6"/>
</g>
<g class="an arm-ll">
<path d="M38 74 Q28 80 26 84" fill="none" stroke="var(--text)" stroke-width="9" stroke-linecap="round"/>
<path d="M38 74 Q28 80 26 84" fill="none" stroke="var(--surface)" stroke-width="6" stroke-linecap="round"/>
<circle cx="26" cy="84" r="4.4" fill="var(--text)" stroke="var(--bg)" stroke-width="1.6"/>
</g>
<g class="an arm-lr">
<path d="M82 74 Q92 80 94 84" fill="none" stroke="var(--text)" stroke-width="9" stroke-linecap="round"/>
<path d="M82 74 Q92 80 94 84" fill="none" stroke="var(--surface)" stroke-width="6" stroke-linecap="round"/>
<circle cx="94" cy="84" r="4.4" fill="var(--text)" stroke="var(--bg)" stroke-width="1.6"/>
</g>
<path d="M14 34 L14 4" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>
<path d="M14 4 L10 11 M14 4 L18 11" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" fill="none"/>
<path d="M100 10 Q122 34 100 58" fill="none" stroke="var(--text)" stroke-width="2.6" stroke-linecap="round"/>
<path d="M100 10 L100 58" stroke="var(--muted)" stroke-width="1"/>
<g class="an janus">
<path d="M60 20 L50 22 L44 30 L39 37 L45 39 L45 44 L49 50 L60 52 Z" fill="var(--text)" stroke="var(--bg)" stroke-width="2" stroke-linejoin="round"/>
<path class="an eye-sk-l" d="M45 31 L52 29 L54 32 L47 33 Z" fill="var(--accent)"/>
<path d="M43 27 L54 29.5" stroke="var(--bg)" stroke-width="2.6" stroke-linecap="round"/>
<path d="M42 44.5 L50 45.5 M45 44.5 L46 47.5" stroke="var(--bg)" stroke-width="1.6" stroke-linecap="round" fill="none"/>
<path d="M49 36 L53 38 M49 39 L52 40.5" stroke="var(--bg)" stroke-width="1.2" opacity=".6" stroke-linecap="round"/>
<path d="M60 20 L70 22 L76 30 L81 37 L75 39 L75 44 L71 50 L60 52 Z" fill="var(--text)" stroke="var(--bg)" stroke-width="2" stroke-linejoin="round"/>
<path class="an eye-sk-r" d="M75 31 L68 29 L66 32 L73 33 Z" fill="var(--accent)"/>
<path d="M77 27 L66 29.5" stroke="var(--bg)" stroke-width="2.6" stroke-linecap="round"/>
<path d="M78 44.5 L70 45.5 M75 44.5 L74 47.5" stroke="var(--bg)" stroke-width="1.6" stroke-linecap="round" fill="none"/>
<path d="M71 36 L67 38 M71 39 L68 40.5" stroke="var(--bg)" stroke-width="1.2" opacity=".6" stroke-linecap="round"/>
<path d="M60 20 L60 52" stroke="var(--bg)" stroke-width="2"/>
<path d="M43 29 Q44 9 60 9 Q76 9 77 29 Q70 19 60 19 Q50 19 43 29 Z" fill="var(--bg)" stroke="var(--text)" stroke-width="2.2" stroke-linejoin="round"/>
<circle cx="60" cy="6" r="5" fill="var(--bg)" stroke="var(--text)" stroke-width="2"/>
<rect x="56.5" y="10" width="7" height="2.6" fill="var(--accent)"/>
</g>
<ellipse class="an flame" cx="8" cy="72" rx="2.6" ry="4.2" fill="var(--accent)"/>
<ellipse class="an flame f2" cx="112" cy="66" rx="2.6" ry="4.2" fill="var(--accent)"/>
</g>
</svg>`,

  hound: `<svg viewBox="0 0 120 120" role="img" aria-label="Three-headed hound on one shared collar: one snarling, one stern, one goofy">
<g class="an hound-body">
<rect x="9.0" y="48" width="26" height="56" rx="9" fill="var(--accent)" stroke="var(--bg)" stroke-width="2.5"/>
<path d="M12.0 60 L32.0 60" stroke="var(--bg)" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
<path d="M12.0 67 L32.0 67" stroke="var(--bg)" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
<path d="M12.0 74 L32.0 74" stroke="var(--bg)" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
<path d="M12.0 81 L32.0 81" stroke="var(--bg)" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
<path d="M12.0 88 L32.0 88" stroke="var(--bg)" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
<path d="M12.0 95 L32.0 95" stroke="var(--bg)" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
<rect x="47.0" y="38" width="26" height="66" rx="9" fill="var(--accent)" stroke="var(--bg)" stroke-width="2.5"/>
<path d="M50.0 50 L70.0 50" stroke="var(--bg)" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
<path d="M50.0 57 L70.0 57" stroke="var(--bg)" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
<path d="M50.0 64 L70.0 64" stroke="var(--bg)" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>
<path d="M50.0 71 L70.0 71" stroke="var(--bg)" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>



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
</svg>`
});

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

