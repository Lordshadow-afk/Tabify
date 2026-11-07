# Security

This page opens every time you open a new tab and sits in front of your search, so it is built to
trust nothing it did not write itself.

## What it can and cannot do

- It is plain static files. There is no server, no account, no database, no analytics and no third-party code.
- The page cannot send anything anywhere. The Content-Security-Policy in `index.html` sets
  `connect-src 'none'` (no fetch, XHR or WebSocket) and `form-action 'none'`.
- Only our own scripts run: `script-src 'self'`, no inline scripts, no `eval`. Styles are the same:
  `style-src 'self'`. Colors and sizes are applied through the CSS object model (`element.style.setProperty`),
  which that policy allows, so no `style=""` attributes are needed.
- Links open with `rel="noopener noreferrer"`, and the page sends no referrer (`no-referrer`).
- Nothing you type is ever inserted as HTML. Names, labels and text are shown with `textContent`.

## Input rules (all in `js/sanitize.js`)

Anything a person can type, paste, import or upload, and anything read back from storage, is untrusted.

| Input | Rule |
| --- | --- |
| Link address | `http` or `https` only. `javascript:`, `data:`, `file:`, `mailto:` and similar are refused, as are addresses with a username or password, spaces, control or direction-changing characters. |
| Image or GIF | `http(s)` address, our own `idb:` upload reference, or a base64 png, jpeg, gif, webp or avif `data:` address. SVG is refused. |
| Search address | `http(s)`, `{q}` exactly once and never in the host, so what you search for cannot choose the site. |
| Colors | exactly `#rrggbb`. |
| Fonts | a short safe character set with balanced quotes, so no `url()`, `;`, `{}` or comments. |
| Text | control and direction-override characters removed, length limited, shown as text only. |
| Numbers, choices | clamped, or must match a fixed list. Lookups use own-property checks, so keys like `__proto__` or `constructor` are only ever data. |
| JSON (storage, imports, backups) | copied field by field into a fresh object through those checks. Unknown fields are dropped and nothing here throws on bad data. Size limits apply. |

## Personal links (`js/share.js`)

A personal link holds your settings after the `#`, which browsers never send to a server. Opening one is
treated like importing a file: it goes through the same checks, input is limited to 24,000 characters,
and the unpacked data may not exceed 64,000 bytes, which stops compression bombs. Uploaded images stay
in your browser and are never put in a link.

## Uploaded images and backup files (`js/media.js`, `js/backup.js`)

- An upload is accepted only if its first bytes say it is a png, jpeg, gif, webp or avif image, and only up to 30 MB.
  The file name and the type the browser reports are not trusted. SVG is refused, because an SVG can carry scripts.
- Uploads stay in your browser (IndexedDB) and are shown through `blob:` addresses. They are never sent anywhere.
- A backup file is treated like any other import: the settings are re-checked field by field, and every image inside it
  is re-checked by its bytes, size and count. Images that fail are skipped, and the rest of the backup still restores.

## What this does not protect against

- A compromised GitHub account or a malicious fork. Only install the page from a source you trust.
- Your own links: a link you add and click goes where it says.
- A malicious browser extension. It can already read everything you do in the browser.
- Images from `https` addresses you choose: the site hosting the image can see that your browser asked for it.
- Policy headers GitHub Pages cannot send. The policy is set with a `<meta>` tag, which cannot set
  `frame-ancestors`. The page does not rely on that.

## Reporting a problem

Please open a private report with GitHub's "Report a vulnerability" button on the Security tab of the
repository (https://github.com/Lordshadow-afk), or open an issue if it is not sensitive.

## Checked before release

- Every place the page writes to the DOM, navigates, or sets an address was reviewed. The only HTML insertion is the
  built-in mascot drawings (our own constants, with no scripts, styles or event handlers; a test enforces that).
- The page was loaded in a real browser with deliberately hostile saved data (script tags, event handlers,
  `javascript:` and SVG addresses, CSS injection in fonts and colors). It showed the text inertly, dropped the bad
  addresses, and the browser reported no policy violations. All nine themes and all four Customize tabs also
  produced no violations.
- A framed copy of the page stays blank.