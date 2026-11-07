// avatars/sakura.js: the cherry blossom tree. Each flower is "x y rotation size color".
const FLOWERS = {
  "sk-a": [
    "68.7 12.9 58 0.9 #ffb0c4",
    "66.1 19.7 7 0.7 #ffc2d1",
    "58.6 10.8 36 0.9 #ffb0c4",
    "55.7 6 45 0.7 #ffb0c4",
    "63.7 21.9 16 0.6 #ffd9e3",
    "59 9.8 10 1.1 #ffb0c4",
    "67 25.1 55 0.7 #ff9fb8",
    "67.6 12.8 48 0.8 #ffd9e3",
    "68.2 16.7 29 0.6 #ff9fb8",
    "80 18.9 0 0.7 #ffd9e3",
    "69.8 25.5 16 0.9 #ffd9e3",
    "54.2 9.3 58 0.9 #ffc2d1",
    "75.7 11.2 50 1 #ffb0c4",
    "54.3 20.5 24 0.9 #ffc2d1",
    "69.2 20.4 6 0.6 #ffd9e3",
    "73.3 23.9 3 0.8 #ffd9e3",
    "69.1 20.5 44 0.8 #ffd9e3",
    "47.9 12.6 59 0.6 #ffb0c4",
    "47.8 18.9 33 0.6 #ffd9e3",
    "41.9 19.4 67 0.8 #ff9fb8",
    "48.2 26.2 11 1.1 #ffd9e3",
    "56.3 11.7 45 0.8 #ff9fb8",
    "62.2 8.6 28 1 #ffd9e3",
    "45.2 10.5 30 1 #ff9fb8",
    "67.9 7.8 45 0.7 #ffb0c4",
    "57.4 5.2 33 1 #ffb0c4",
    "65.9 27.5 46 0.7 #ffd9e3",
    "66.2 20 26 0.8 #ffd9e3",
    "38.3 19.4 61 0.9 #ffc2d1",
    "70.9 13.9 49 0.9 #ffc2d1",
    "63.8 7 55 0.8 #ff9fb8",
    "63.1 10.7 59 1 #ffb0c4",
    "42.6 25.3 16 0.9 #ff9fb8",
    "76.7 19.7 60 0.8 #ff9fb8",
    "52.8 11.6 2 0.9 #ff9fb8",
    "81.6 19.1 55 0.9 #ff9fb8",
    "69.7 17.5 32 1 #ffc2d1",
    "63.6 27 33 1 #ffd9e3",
    "40.7 14.7 58 0.6 #ffd9e3",
    "49.6 8 68 0.8 #ff9fb8",
    "69.1 25.6 0 1 #ff9fb8",
    "61.4 13 71 0.6 #ffc2d1",
    "76.8 22.1 13 0.8 #ffb0c4",
    "63.9 15.9 12 0.7 #ffc2d1",
    "33.5 21.7 56 1 #ffc2d1",
    "37.7 29.9 35 0.9 #ff9fb8",
    "34.2 23.9 66 0.8 #ff9fb8",
    "53.7 15.9 57 0.7 #ff9fb8",
    "47.2 24.4 30 0.8 #ffc2d1",
    "38.2 23.8 19 0.7 #ffc2d1",
    "54.4 19.3 17 0.8 #ffd9e3",
    "50.4 21.1 62 1.1 #ffb0c4",
    "50 28.3 65 0.7 #ffb0c4",
    "36.5 25.3 46 0.7 #ffc2d1",
    "54.3 22.8 49 0.8 #ffc2d1",
    "38.6 28.2 14 0.8 #ffc2d1",
    "56.4 21.3 10 1.1 #ffc2d1",
    "43.7 23.8 16 1 #ffd9e3",
    "49.5 14.5 51 0.9 #ffd9e3",
    "51.9 29 11 0.9 #ffd9e3",
    "41.7 29.9 34 0.7 #ffc2d1",
    "54.3 19.3 28 1 #ffc2d1",
    "55.9 25.4 70 0.8 #ffd9e3",
    "32.4 26.3 67 0.9 #ffc2d1",
    "40.6 13.6 6 1.1 #ffd9e3",
    "49.7 29.9 37 0.9 #ff9fb8",
    "33.2 24.5 32 0.7 #ffc2d1",
    "45.8 22.3 65 0.8 #ff9fb8",
    "62.7 23.5 63 0.6 #ffb0c4",
    "63.5 19.3 27 1.1 #ffd9e3",
    "87.3 21.4 51 1 #ff9fb8",
    "93.8 21.3 9 1 #ffc2d1",
    "67.4 15.3 10 0.8 #ffc2d1",
    "73 16.7 31 0.8 #ffd9e3",
    "76.8 20 57 0.7 #ffd9e3",
    "87.7 22.1 31 0.7 #ffd9e3",
    "92.7 24 0 0.7 #ff9fb8",
    "75.6 24.5 31 0.7 #ff9fb8",
    "76.9 22 18 0.7 #ffc2d1",
    "75.4 23.2 29 0.6 #ffd9e3",
    "91.5 27 49 1 #ff9fb8",
    "79.2 13.5 18 0.8 #ffd9e3",
    "92.1 24.5 64 1 #ffb0c4",
    "85.4 27.6 29 0.8 #ffc2d1",
    "80.8 23 48 0.9 #ffc2d1",
    "84.1 15.6 62 0.9 #ff9fb8",
    "77.1 28.7 67 0.6 #ffc2d1",
    "90.6 25.5 33 0.7 #ffc2d1",
    "79.3 30.7 63 0.7 #ffb0c4",
    "80.5 19.7 5 1.1 #ffd9e3",
    "68.5 16.6 42 0.6 #ff9fb8",
    "77.7 30.6 1 0.7 #ff9fb8",
    "66.9 22.8 27 1.1 #ffc2d1",
    "74.1 17.2 59 0.8 #ffb0c4",
    "72.6 22.7 39 1 #ff9fb8",
    "93.3 20.7 9 0.6 #ffb0c4",
    "65 28.9 49 0.8 #ffd9e3",
    "62.9 43.5 18 0.7 #ffc2d1",
    "59.9 31.9 14 0.7 #ffd9e3",
    "58.3 32.3 50 1 #ffb0c4",
    "60.7 36.1 51 0.8 #ffb0c4",
    "58.6 38.8 15 0.7 #ffd9e3",
    "60.3 35.7 15 1 #ffb0c4",
    "64.9 34.7 32 0.6 #ffd9e3",
    "54.8 39.6 46 1.1 #ffc2d1",
    "69.3 32.9 13 1 #ffd9e3",
    "69.3 38.1 31 0.9 #ff9fb8",
    "67.8 35 54 0.7 #ffd9e3",
    "68.1 31.2 10 0.9 #ff9fb8",
    "69.8 38.1 36 0.8 #ff9fb8",
    "48.6 36.7 60 0.9 #ff9fb8",
    "54.5 38.2 51 0.7 #ffd9e3",
    "56.3 32.4 15 0.9 #ffb0c4",
    "62.4 38.8 70 0.7 #ffb0c4",
  ],
  "sk-b": [
    "30.9 43.4 54 1.1 #ffb0c4",
    "32.5 37.4 71 0.6 #ffd9e3",
    "34.6 36.6 2 0.7 #ff9fb8",
    "28 27.6 48 0.8 #ff9fb8",
    "26.2 42.6 16 0.8 #ffd9e3",
    "23.5 27.3 11 1 #ff9fb8",
    "27 38.9 55 0.8 #ffb0c4",
    "42.1 31.4 16 1 #ffc2d1",
    "41.2 35.7 62 1 #ffb0c4",
    "38 34 57 1.1 #ffb0c4",
    "28.1 37.3 58 0.6 #ffc2d1",
    "40.1 38.5 29 0.6 #ff9fb8",
    "25.2 33.2 32 0.9 #ff9fb8",
    "17.6 32.8 9 1 #ffc2d1",
    "23.2 43.2 28 0.7 #ffd9e3",
    "28.1 33.7 35 0.8 #ffb0c4",
    "40.4 32 67 1 #ffb0c4",
    "28.8 38.9 7 1.1 #ffd9e3",
    "39.2 35 10 0.9 #ffb0c4",
    "27.4 42.2 63 1.1 #ff9fb8",
    "37.1 35.2 25 0.8 #ffb0c4",
    "36.6 34.2 26 1 #ffc2d1",
    "20.8 34.1 29 1 #ff9fb8",
    "20 35.1 63 1 #ffc2d1",
    "16.3 28 18 0.8 #ffc2d1",
    "31.3 32.9 53 0.6 #ff9fb8",
    "31.7 34.8 14 0.8 #ffd9e3",
    "43.4 33.8 67 0.7 #ff9fb8",
    "20 44.8 47 0.9 #ffb0c4",
    "26.6 45.6 35 0.6 #ffc2d1",
    "25.7 48.2 48 1 #ff9fb8",
    "14.4 51 11 1 #ffb0c4",
    "26.6 47.5 24 0.8 #ffb0c4",
    "16.2 51.4 31 0.8 #ffb0c4",
    "23.3 40.3 59 0.6 #ffc2d1",
    "28.9 48.6 43 0.7 #ffc2d1",
    "16.2 49.1 33 1.1 #ffc2d1",
    "19.8 40.2 0 1.1 #ffd9e3",
    "18.6 40.7 3 1 #ffc2d1",
    "21.5 44 49 0.9 #ffb0c4",
    "22.4 39.5 63 1 #ff9fb8",
    "23.7 51.7 30 1 #ff9fb8",
    "11.6 63 65 0.7 #ffc2d1",
    "16.5 64.9 4 0.7 #ffc2d1",
    "7.4 60.5 13 0.6 #ffb0c4",
    "18.6 59.8 53 0.6 #ffc2d1",
    "6.4 60 17 0.8 #ff9fb8",
    "7.9 62.4 37 0.9 #ffc2d1",
    "12.2 64.3 25 0.8 #ffd9e3",
    "10.4 61 24 0.7 #ffd9e3",
    "11.4 63.4 12 1.1 #ff9fb8",
    "8.9 55.1 29 0.6 #ffb0c4",
    "18.6 55.2 29 0.6 #ffd9e3",
    "44.9 41.8 9 1.1 #ff9fb8",
    "36.2 44 0 0.8 #ffd9e3",
    "47.5 42.9 4 0.9 #ff9fb8",
    "39.7 41.7 4 0.7 #ffd9e3",
    "36.1 37.2 41 0.7 #ffc2d1",
    "37.4 42 26 0.9 #ffc2d1",
    "48.2 40.8 12 0.8 #ffb0c4",
    "44.1 35.3 20 0.6 #ffc2d1",
    "38.2 41.9 53 1.1 #ffd9e3",
    "46.8 39 53 0.9 #ffd9e3",
  ],
  "sk-c": [
    "77.5 41.1 25 1.1 #ffd9e3",
    "83.1 40.4 20 1.1 #ffb0c4",
    "77.5 40.6 58 0.8 #ffd9e3",
    "92.9 32.1 50 0.6 #ff9fb8",
    "104 40.6 18 0.8 #ff9fb8",
    "87.8 39.6 13 0.6 #ffc2d1",
    "80.4 42.4 38 1 #ff9fb8",
    "104.2 43.6 40 1.1 #ffb0c4",
    "108.4 39.5 28 0.8 #ff9fb8",
    "81.8 30.1 23 0.7 #ffb0c4",
    "88.6 35.1 49 1.1 #ff9fb8",
    "87.6 39.3 5 1.1 #ff9fb8",
    "104.3 29.3 15 0.9 #ffd9e3",
    "82.6 40.7 53 1 #ffd9e3",
    "88.8 41.1 57 0.8 #ffd9e3",
    "84.4 35.9 59 0.6 #ffb0c4",
    "93.5 45.6 22 1 #ffb0c4",
    "96.2 29.5 55 0.6 #ffd9e3",
    "81.3 43.4 5 0.8 #ffc2d1",
    "88.6 33.6 6 1 #ffc2d1",
    "92.2 25.6 3 0.9 #ff9fb8",
    "103.2 27.4 24 1 #ffc2d1",
    "103.5 43.6 28 0.7 #ff9fb8",
    "101.8 38.6 41 1 #ff9fb8",
    "99.5 32.5 32 1 #ff9fb8",
    "74.7 35.9 64 0.7 #ffd9e3",
    "92.9 42.7 20 0.7 #ffb0c4",
    "85.8 31.6 21 0.7 #ffb0c4",
    "94.4 30.5 46 1 #ffc2d1",
    "103.8 34.4 32 0.8 #ffc2d1",
    "106.3 35.6 33 0.8 #ffd9e3",
    "84.2 40.7 10 0.6 #ffd9e3",
    "84.9 37.6 37 1 #ffc2d1",
    "95.8 31 0 0.9 #ffd9e3",
    "91.8 30.8 53 0.7 #ffb0c4",
    "75 35.2 5 0.6 #ff9fb8",
    "108.5 46 66 0.7 #ffc2d1",
    "105.3 48.6 26 0.9 #ff9fb8",
    "102.5 50.7 31 0.6 #ffc2d1",
    "106.4 41.5 34 0.6 #ff9fb8",
    "104.2 48.1 56 0.6 #ffd9e3",
    "102.8 43 0 0.8 #ff9fb8",
    "114.3 47.4 20 0.8 #ff9fb8",
    "115.4 48.2 18 0.6 #ff9fb8",
    "102.5 48.6 22 0.9 #ffb0c4",
    "105.7 45.9 68 0.9 #ffb0c4",
    "116.3 46.3 10 1 #ffb0c4",
    "107.7 41.3 33 0.7 #ffc2d1",
    "74.3 51.8 6 0.7 #ffd9e3",
    "73 56.7 37 0.8 #ffd9e3",
    "65.4 43.1 21 0.7 #ffc2d1",
    "73.6 54.4 41 1 #ff9fb8",
    "77.1 55.2 68 0.9 #ffb0c4",
    "61.4 51.6 55 0.9 #ffc2d1",
    "80.5 48.8 50 1 #ff9fb8",
    "71.2 48.3 4 1.1 #ff9fb8",
    "78.5 50.5 18 1.1 #ffd9e3",
    "73.3 48.5 8 0.6 #ffc2d1",
    "73.7 47.7 25 0.9 #ffd9e3",
    "79.2 42.6 49 1 #ffc2d1",
    "79 52.5 11 0.6 #ffc2d1",
    "79.1 43.6 16 0.7 #ffc2d1",
    "84 54.5 43 0.7 #ffd9e3",
    "72.2 50.6 6 0.7 #ffd9e3",
    "72.2 44.7 36 0.7 #ffb0c4",
    "72.2 48.9 66 0.8 #ffb0c4",
    "75.2 44.8 11 0.9 #ff9fb8",
    "67.3 47.8 36 0.8 #ff9fb8",
    "75.1 41.1 12 0.6 #ffb0c4",
    "61.5 50.4 44 0.7 #ffb0c4",
    "83.7 48.3 36 0.9 #ff9fb8",
    "79.4 42 14 0.7 #ff9fb8",
  ],
  "sk-d": [
    "104.1 77.7 41 0.8 #ffc2d1",
    "92.1 83.5 54 0.8 #ffc2d1",
    "97.2 79.3 54 0.7 #ffd9e3",
    "101.8 77.1 58 0.8 #ff9fb8",
    "101.4 83.9 44 0.9 #ffc2d1",
    "89.7 77.5 70 1 #ffb0c4",
    "95.8 77.1 29 0.8 #ffd9e3",
    "100.8 83.4 64 1 #ff9fb8",
    "98 83.6 19 0.9 #ff9fb8",
    "104.4 79.1 20 0.9 #ffd9e3",
    "96.8 86.8 21 0.7 #ffc2d1",
    "99.1 79.5 38 0.8 #ff9fb8",
    "95.3 75.4 35 0.7 #ffc2d1",
    "97.7 84.2 55 0.6 #ffb0c4",
    "93.5 75.4 2 0.9 #ffb0c4",
    "100.9 84.2 55 0.8 #ff9fb8",
    "93.7 74.9 29 0.9 #ff9fb8",
    "92.6 74.9 33 0.8 #ffd9e3",
    "85.4 66.2 20 0.8 #ffb0c4",
    "88 73.2 66 0.8 #ffb0c4",
    "82.8 61.1 1 0.7 #ffd9e3",
    "81.6 71.6 32 1.1 #ffc2d1",
    "83.4 67.1 66 1 #ff9fb8",
    "81.6 74 60 0.8 #ff9fb8",
    "78.4 67.5 52 1 #ffd9e3",
    "87.6 62.6 50 1.1 #ff9fb8",
    "76.5 67.3 7 1 #ffd9e3",
    "87.9 72.9 53 0.6 #ffc2d1",
    "96.2 64.8 13 0.9 #ffd9e3",
    "89.7 74.8 50 1.1 #ff9fb8",
    "83.3 68.8 24 1.1 #ffc2d1",
    "79.2 69.2 45 0.7 #ff9fb8",
    "82.5 61.7 59 1 #ffb0c4",
    "98.5 67.8 45 0.9 #ffb0c4",
    "89.2 64.2 54 0.9 #ffd9e3",
    "84.4 63 45 1 #ffd9e3",
    "74.2 65.8 10 0.8 #ffb0c4",
    "70.8 58.5 7 1.1 #ffb0c4",
    "80.5 64.7 67 0.7 #ff9fb8",
    "77.9 57.1 26 0.6 #ffc2d1",
    "81.7 60.3 18 0.7 #ffc2d1",
    "76.6 59.6 26 0.8 #ff9fb8",
    "81.3 58.5 70 0.6 #ffc2d1",
    "76.2 55.8 67 0.7 #ff9fb8",
    "82.1 65 71 0.9 #ffc2d1",
    "78.8 65.1 63 1 #ffb0c4",
    "67.5 60.3 31 1 #ffb0c4",
    "66.7 62.1 20 1 #ffc2d1",
    "110.2 69.1 59 0.9 #ffd9e3",
    "105.3 74.3 23 1.1 #ffc2d1",
    "104.9 69 42 0.6 #ffc2d1",
    "108.7 70.6 4 0.8 #ff9fb8",
    "108.9 75.1 46 0.6 #ffc2d1",
    "105.1 75.7 36 0.9 #ff9fb8",
    "104.4 73.3 37 0.9 #ffd9e3",
    "105.4 74.8 64 0.7 #ffd9e3",
  ]
};

function flowers(cls) {
  return FLOWERS[cls].map((f) => {
    const [x, y, r, s, c] = f.split(" ");
    return `<use href="#skFl" transform="translate(${x} ${y}) rotate(${r}) scale(${s})" fill="${c}"/>`;
  }).join("\n");
}

export const SAKURA = {
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
${flowers("sk-a")}
</g>
<g class="an sk-sway sk-b">
${flowers("sk-b")}
</g>
<g class="an sk-sway sk-c">
${flowers("sk-c")}
</g>
<g class="an sk-sway sk-d">
${flowers("sk-d")}
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
};