// avatars/cats.js: lamplight, skeleton, seal, rigby
// Our own constants (never user input): no scripts, handlers, styles or outside references. Animated by css/avatars.css.

export const CATS = {
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
};