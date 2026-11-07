# Tabify

A customizable new tab page for Chrome and Firefox, used through the **New Tab Override** extension.
Nine themes, three layouts, five box styles, animated mascots, your own links and shortcuts, your own image or GIF,
and a clickable search-engine switcher. Free to host, with nothing to sign up for and nothing sent anywhere.

- **Zero cost.** Plain static files on GitHub Pages. No server, database, accounts, analytics or third-party code.
- **Locked down.** A strict Content-Security-Policy blocks all network requests from the page and all code except our own files. See [SECURITY.md](SECURITY.md).
- **Your settings survive a site-data wipe.** Use your personal link or a backup file (see below).
- **Your own themes.** Themes are plain JSON you can copy, paste and share.

## Put it on the web (free)

1. Create a new **public** repository on GitHub, for example `startpage`.
2. Upload every file in this folder, keeping the same folders.
3. In the repository open **Settings, Pages**, and under **Build and deployment** set **Source** to **GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/pages.yml` runs the tests and publishes the page.
5. Your page is at `https://YOUR-NAME.github.io/startpage/`.

## Use it as your new tab

1. Install **New Tab Override** from the Chrome Web Store or Firefox Add-ons.
2. In its options choose **Custom URL** and paste your page address.
3. Open Customize, then **General, Keep my settings safe**, copy your **personal link**, and paste *that* into New Tab Override instead.

### Why the personal link matters

Clearing cookies and site data wipes anything a web page saves, including your links. Your personal link holds your whole
setup after the `#`, which browsers never send to a server. The extension stores the address itself, so after a wipe the page restores
everything on the next new tab. If you change settings later, copy the link again. For uploaded images, which a link cannot hold,
use **Download backup**.

## Make a theme

Open Customize, then Theme. Every field is optional except `name`:

```json
{
  "name": "Midnight",
  "layout": "cards",
  "skin": "",
  "placeholder": "Search or type a URL…",
  "font": "system-ui, sans-serif",
  "radius": 14,
  "colors": { "bg": "#0e1018", "surface": "#171a26", "border": "#262b3d", "text": "#e6e9f5", "muted": "#8a90ab", "accent": "#7aa2f7", "accentText": "#0e1018" },
  "bg":  { "mode": "off", "src": "", "fit": "cover", "overlay": 0.45 },
  "art": { "mode": "mascot", "mascot": "drop", "src": "", "size": 120 }
}
```

`layout`: accordion, minimal or cards. `skin`: "" (soft), retro, classical, ink or poster. Colors must be `#rrggbb`.
Images must be https addresses. Anything invalid is quietly replaced with a safe default.

## Develop

```
npm test        # unit tests, Node 22+, no dependencies
npm run serve   # http://localhost:8080
```

| Folder | What is in it |
| --- | --- |
| `index.html` | The page and the security policy |
| `js/sanitize.js` | Every check on untrusted input |
| `js/state.js`, `share.js`, `backup.js`, `media.js` | Saving, personal links, backup files, uploads |
| `js/themes.js`, `avatars.js` | The built-in themes and mascots |
| `js/main.js`, `render.js`, `search.js`, `links.js`, `settings.js` | The page itself |
| `css/` | Styles and mascot animations |
| `tests/` | Security and behaviour tests |

## Credits and license

Code is MIT licensed (see [LICENSE](LICENSE)). Inspirations and references are in [CREDITS.md](CREDITS.md).
This project is not affiliated with any game, show or publisher it pays homage to.