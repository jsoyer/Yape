# Yape — Browser Extension for PyLoad

> Fork of [RemiRigal/Yape](https://github.com/RemiRigal/Yape) — v3.0.0 brings multi-server, dark mode, i18n, Firefox support, and much more.

![Screenshot](images/screenshot.jpg)

---

## Features

- **Downloads** — Monitor active downloads with progress, speed and ETA
- **Queue** — View queued packages, reorder with drag & drop or arrow buttons
- **Collector** — Browse collector and push packages to queue
- **Per-file controls** — Stop, restart or delete individual files and packages
- **Context menu** — Right-click any link to send it to PyLoad
- **Multi-URL paste** — Add multiple URLs at once from the popup
- **Captcha solving** — Solve captchas directly in the popup
- **Search & filter** — Filter downloads, queue and collector in real time
- **Multi-server** — Manage multiple PyLoad instances, switch in one click
- **Event streaming** — Live updates via PyLoad's `getEvents` API
- **Dark mode** — Automatic, follows your OS preference
- **Desktop notifications** — Alerts on download complete, errors, captcha waiting
- **Download stats** — Track packages added over time
- **Speed limiter** — One-click global bandwidth toggle
- **Proxy toggle** — Enable/disable PyLoad proxy from the popup
- **Hoster accounts** — Manage hoster credentials from the options page
- **Server log viewer** — Read PyLoad server logs from options
- **Tampermonkey companion** — One-click "Download with PyLoad" buttons on 60+ hoster sites
- **i18n** — English and French, easy to contribute new languages
- **Firefox support** — Works on Firefox via `manifest.firefox.json`

---

## Compatibility

| PyLoad version | Auth method | Status |
|---|---|---|
| < 0.5.0b3.dev78 | Session cookie | Not supported — use [original extension](https://github.com/RemiRigal/Yape) |
| >= 0.5.0b3.dev78 | HTTP Basic Auth | Supported |

| Browser | Manifest | Status |
|---|---|---|
| Chrome / Chromium / Edge | `manifest.json` (MV3) | Supported |
| Firefox >= 121 | `manifest.firefox.json` (MV3) | Supported |

---

## Install

### Chrome / Chromium / Edge

1. [Download the latest release](https://github.com/jsoyer/Yape/releases/latest) and unzip, or clone the repo
2. Go to `chrome://extensions`
3. Enable **Developer mode** (top-right toggle)
4. Click **Load unpacked** and select the folder
5. Click the extension icon, then the gear icon to configure

### Firefox

1. Clone or download the repo
2. Copy `manifest.firefox.json` over `manifest.json` (or rename it)
3. Go to `about:debugging#/runtime/this-firefox`
4. Click **Load Temporary Add-on** and select `manifest.json`

---

## Setup

### Server configuration

1. Open the **Options page** (gear icon in the popup)
2. Enter your PyLoad server's host, port and path
3. Check **Use HTTPS** if your server supports it (recommended)
4. Click **Save** — the browser will prompt you to grant permission to your server's origin
5. Click **Login** and enter your PyLoad credentials

### Multi-server

You can manage multiple PyLoad instances from the options page:

1. Click **+ Add server** to create a new server entry
2. Configure each server with its own host, port, path and name
3. Use the **Activate** button to switch between servers
4. In the popup, use the server dropdown to switch quickly

Each server keeps its own credentials (session or saved).

### Credentials storage

| Mode | Storage | Survives browser restart |
|---|---|---|
| Default | `chrome.storage.session` (memory only) | No |
| "Remember credentials" checked | `chrome.storage.local`, encrypted AES-GCM 256-bit | Yes |

Credentials are never synced across devices. Per-server credentials are namespaced by server ID.

---

## Tampermonkey Companion

The companion userscript adds a "Download with PyLoad" button next to download links on 60+ supported hoster sites.

### Install

1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser
2. Create a new script and paste the contents of `yape-companion.user.js`
3. Edit the `EXTENSION_ID` constant at the top of the script — set it to your Yape extension ID (find it in `chrome://extensions`)
4. Save and enable the script

The script communicates with the extension via `chrome.runtime.sendMessage` using the `externally_connectable` manifest key. No extra permissions needed.

---

## Contributing translations

Yape uses Chrome's `chrome.i18n` API with a modular setup:

```
_locales/
  en/messages.json   # English (default)
  fr/messages.json   # French
```

To add a new language:

1. Create `_locales/<code>/messages.json` (e.g. `de`, `es`, `pt`)
2. Copy `_locales/en/messages.json` as a starting point
3. Translate all `"message"` values — keys and `"placeholders"` stay the same
4. Submit a PR

HTML elements use `data-i18n` attributes for automatic translation. JS code uses the `msg()` helper from `js/i18n.js`.

---

## Security

- **AES-GCM 256-bit encryption** for credentials saved to disk (WebCrypto API)
- **HTTP Basic Auth** on all API requests — no session cookies
- **Minimal permissions**: `storage`, `contextMenus`, `notifications`, `alarms`
- **Dynamic host permissions** — no broad `<all_urls>` at install time
- **No script injection** into third-party pages — notifications via `chrome.notifications`
- **Strict CSP**: `default-src 'none'`; no `unsafe-eval`, no `unsafe-inline`
- **Login rate limiting**: exponential backoff after 3 failed attempts (30s to 5min)
- **ES modules** throughout — no global scope pollution

See [PRIVACY.md](PRIVACY.md) for the full data handling policy.

---

## License

MIT — see [LICENSE](LICENSE). Original extension by [Remi Rigal](https://github.com/RemiRigal).
