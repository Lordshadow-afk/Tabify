// themes.js
// The built-in themes and the labels used by the Customize page. Pure data: no code runs here.
// Every theme still goes through sanitizeTheme() before it is shown, like a theme a person imported.

export const BASE_THEME_KEY = "ryomen";

export const BUILT_IN = Object.freeze({
  "ryomen": {
    "name": "Ryōmen",
    "note": "accordion",
    "layout": "accordion",
    "skin": "ink",
    "fx": {
      "crt": false
    },
    "placeholder": "Hey, Brat. Be sure to savor this.",
    "font": "\"Arial Narrow\", \"Helvetica Neue\", Arial, sans-serif",
    "radius": 0,
    "colors": {
      "bg": "#08080a",
      "surface": "#101014",
      "border": "#f2efe9",
      "text": "#f2efe9",
      "muted": "#9b968c",
      "accent": "#e11d2e",
      "accentText": "#ffffff"
    },
    "bg": {
      "mode": "off",
      "src": "",
      "fit": "cover",
      "overlay": 0.45
    },
    "art": {
      "mode": "mascot",
      "mascot": "specter",
      "src": "",
      "size": 130
    }
  },
  "rigby": {
    "name": "Rigby",
    "note": "minimal",
    "layout": "minimal",
    "placeholder": "Nap first. Search later.",
    "font": "ui-rounded, \"SF Pro Rounded\", \"Nunito\", \"Quicksand\", \"Segoe UI\", system-ui, sans-serif",
    "radius": 999,
    "colors": {
      "bg": "#e6eaf3",
      "surface": "#f8f9fd",
      "border": "#c8d0e3",
      "text": "#272c40",
      "muted": "#6c7691",
      "accent": "#ec6c8f",
      "accentText": "#2b0e19"
    },
    "bg": {
      "mode": "off",
      "src": "",
      "fit": "cover",
      "overlay": 0.6
    },
    "art": {
      "mode": "mascot",
      "mascot": "rigby",
      "src": "",
      "size": 160
    },
    "skin": "",
    "fx": {
      "crt": false
    }
  },
  "underground": {
    "name": "Underground",
    "note": "cards",
    "layout": "cards",
    "skin": "retro",
    "fx": {
      "crt": true
    },
    "placeholder": "Do you know how strong I have to be in order to be this gentle",
    "font": "\"Courier New\", Courier, \"Liberation Mono\", monospace",
    "radius": 0,
    "colors": {
      "bg": "#000000",
      "surface": "#000000",
      "border": "#ffffff",
      "text": "#ffffff",
      "muted": "#a8a8a8",
      "accent": "#ffe600",
      "accentText": "#000000"
    },
    "bg": {
      "mode": "off",
      "src": "",
      "fit": "cover",
      "overlay": 0.5
    },
    "art": {
      "mode": "mascot",
      "mascot": "heart",
      "src": "",
      "size": 110
    }
  },
  "rose-night": {
    "name": "Rosé Night",
    "note": "minimal",
    "layout": "minimal",
    "placeholder": "I am haunted by humans",
    "font": "ui-rounded, \"Nunito\", \"Segoe UI\", system-ui, sans-serif",
    "radius": 20,
    "colors": {
      "bg": "#191724",
      "surface": "#1f1d2e",
      "border": "#403d52",
      "text": "#e0def4",
      "muted": "#908caa",
      "accent": "#eb6f92",
      "accentText": "#191724"
    },
    "bg": {
      "mode": "off",
      "src": "",
      "fit": "cover",
      "overlay": 0.5
    },
    "art": {
      "mode": "mascot",
      "mascot": "ghost",
      "src": "",
      "size": 120
    },
    "skin": "",
    "fx": {
      "crt": false
    }
  },
  "moss-garden": {
    "name": "Moss Garden",
    "note": "accordion",
    "layout": "accordion",
    "placeholder": "Don't sell your soul to coding",
    "font": "ui-rounded, \"Trebuchet MS\", \"Segoe UI\", sans-serif",
    "radius": 22,
    "colors": {
      "bg": "#1e2326",
      "surface": "#272e33",
      "border": "#374145",
      "text": "#d3c6aa",
      "muted": "#859289",
      "accent": "#a7c080",
      "accentText": "#1e2326"
    },
    "bg": {
      "mode": "off",
      "src": "",
      "fit": "cover",
      "overlay": 0.5
    },
    "art": {
      "mode": "mascot",
      "mascot": "bot",
      "src": "",
      "size": 120
    },
    "skin": "",
    "fx": {
      "crt": false
    }
  },
  "crimson-styx": {
    "name": "Crimson Styx",
    "note": "cards",
    "layout": "cards",
    "skin": "classical",
    "fx": {
      "crt": false
    },
    "placeholder": "Home is not where you live, but who cares when you're gone",
    "font": "\"Palatino Linotype\", \"Book Antiqua\", Palatino, Georgia, serif",
    "radius": 2,
    "colors": {
      "bg": "#0c0b10",
      "surface": "#16121a",
      "border": "#c9a24a",
      "text": "#f1e6cf",
      "muted": "#a89a82",
      "accent": "#c42b38",
      "accentText": "#fff3e0"
    },
    "bg": {
      "mode": "off",
      "src": "",
      "fit": "cover",
      "overlay": 0.5
    },
    "art": {
      "mode": "mascot",
      "mascot": "hound",
      "src": "",
      "size": 130
    }
  },
  "ocean-glass": {
    "name": "Ocean Glass",
    "note": "accordion",
    "layout": "accordion",
    "skin": "poster",
    "fx": {
      "crt": false
    },
    "placeholder": "Things are more beautiful when they are imperfect",
    "font": "\"Arial Rounded MT Bold\", ui-rounded, \"Nunito\", \"Segoe UI\", system-ui, sans-serif",
    "radius": 6,
    "colors": {
      "bg": "#2d4a69",
      "surface": "#f6f1e3",
      "border": "#f6f1e3",
      "text": "#f6f1e3",
      "muted": "#a9bdd3",
      "accent": "#e8a0ae",
      "accentText": "#2d3a52"
    },
    "bg": {
      "mode": "off",
      "src": "",
      "fit": "cover",
      "overlay": 0.5
    },
    "art": {
      "mode": "mascot",
      "mascot": "lamplight",
      "src": "",
      "size": 174
    }
  },
  "frost-orbit": {
    "name": "Frost Orbit",
    "note": "minimal",
    "layout": "minimal",
    "placeholder": "Loving you is the most natural thing I do, like the earth turning",
    "font": "\"Avenir Next\", \"Segoe UI\", system-ui, sans-serif",
    "radius": 14,
    "colors": {
      "bg": "#eceff4",
      "surface": "#ffffff",
      "border": "#d8dee9",
      "text": "#2e3440",
      "muted": "#6b7589",
      "accent": "#5e81ac",
      "accentText": "#ffffff"
    },
    "bg": {
      "mode": "off",
      "src": "",
      "fit": "cover",
      "overlay": 0.55
    },
    "art": {
      "mode": "mascot",
      "mascot": "planet",
      "src": "",
      "size": 130
    },
    "skin": "",
    "fx": {
      "crt": false
    }
  },
  "tangerine": {
    "name": "Tangerine",
    "note": "cards",
    "layout": "cards",
    "skin": "",
    "fx": {
      "crt": false
    },
    "placeholder": "Love is the most twisted curse of them all",
    "font": "Georgia, \"Iowan Old Style\", \"Palatino Linotype\", \"Times New Roman\", serif",
    "radius": 22,
    "colors": {
      "bg": "#fff0da",
      "surface": "#fffaf1",
      "border": "#f0cb9a",
      "text": "#4a2a17",
      "muted": "#a07858",
      "accent": "#f08a1c",
      "accentText": "#3b1d08"
    },
    "bg": {
      "mode": "off",
      "src": "",
      "fit": "cover",
      "overlay": 0.5
    },
    "art": {
      "mode": "mascot",
      "mascot": "sakura",
      "src": "",
      "size": 160
    }
  }
});

export const THEME_ORDER = Object.freeze([
  "ryomen",
  "rigby",
  "underground",
  "rose-night",
  "moss-garden",
  "crimson-styx",
  "ocean-glass",
  "frost-orbit",
  "tangerine"
]);

export const COLOR_LABELS = Object.freeze({
  "bg": "Background",
  "surface": "Surface",
  "border": "Border",
  "text": "Text",
  "muted": "Muted",
  "accent": "Accent",
  "accentText": "On accent"
});

export const LAYOUT_LABELS = Object.freeze({
  "accordion": "Accordion",
  "minimal": "Minimal",
  "cards": "Cards"
});

export const ART_LABELS = Object.freeze({
  "drop": "Drop",
  "cat": "Cat",
  "bot": "Bot",
  "heart": "Heart",
  "hound": "Hound",
  "specter": "Specter",
  "ghost": "Ghost",
  "sprout": "Sprout",
  "sun": "Sun",
  "jelly": "Jelly",
  "planet": "Planet",
  "tangerine": "Tangerine",
  "stargazers": "Stargazers",
  "sakura": "Cherry tree",
  "rigby": "Rigby",
  "seal": "Sleepy seal",
  "skeleton": "Hilltop skeleton",
  "lamplight": "Streetlamp",
  "crt": "CRT",
  "custom": "My image / GIF",
  "none": "None"
});

export const ART_NOTES = Object.freeze({
  "drop": "Animation: blinks and squishes gently.",
  "cat": "Animation: breathes slowly while z's drift up.",
  "bot": "Animation: eyes scan in pixel steps, antenna pulses, a rare glitch.",
  "heart": "Animation: a double heartbeat, and a pixel glint twinkles.",
  "specter": "Animation: the two faces blink in turn, four arms sway, the robe ripples, soul-flames rise, and the picture jolts like an ink panel now and then.",
  "hound": "Animation: three heads sway out of step (one snarling, one stern, one goofy that wags its tongue and rolls its googly eyes), the shared collar tag swings and the eyes glow.",
  "ghost": "Animation: floats, waves its arms, eyes look around, shadow breathes.",
  "sprout": "Animation: sways in the wind, leaves flutter.",
  "sun": "Animation: rays spin, core pulses, sunglasses glint.",
  "jelly": "Animation: bobs, bell pulses, tentacles trail.",
  "planet": "Animation: a moon orbits, stars twinkle.",
  "tangerine": "Animation: bobs, the leaf sways, one eye blinks, a tear rolls down while the cheeks glow and a heart floats.",
  "stargazers": "Animation: two cats breathe side by side, heads tilt toward the sky, eyes blink, tails swish, stars twinkle and a shooting star streaks past.",
  "sakura": "Animation: the branches sway at different speeds, the buds twinkle, and petals drift down from the tree onto the page.",
  "rigby": "Animation: breathes slowly, ears and whiskers twitch, the tail swishes and z's drift up.",
  "seal": "Animation: breathes slowly, yawns wide now and then, flippers flap, whiskers twitch and z's drift up.",
  "skeleton": "Pixel art. The cloud drifts, the skeleton nods, the flower sways and petals float down.",
  "lamplight": "Animation: the lamp flickers softly, moths circle the light, stars twinkle, the cat swishes its tail and the figure breathes.",
  "crt": "Animation: cursor blinks, scanline sweeps, screen flickers.",
  "custom": "Plays your own image or GIF as uploaded.",
  "none": "No art shown."
});