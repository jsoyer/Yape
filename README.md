# Yape — Browser Extension for PyLoad

> Fork of [RemiRigal/Yape](https://github.com/RemiRigal/Yape) — v2.0.0 brings MV3 compliance, full security hardening, and PyLoad ≥ dev78 support.

![Screenshot](images/screenshot.jpg)

---

## Features

- Monitor active downloads with progress, speed and ETA
- One-click download of the current tab's URL
- Context menu — right-click any link → **Download with Yape**
- Global bandwidth monitor and one-click speed limiter
- Desktop notifications for download success and errors

---

## Compatibility

| PyLoad version | Auth method | Status |
|---|---|---|
| < 0.5.0b3.dev78 | Session cookie | Not supported — use [original extension](https://github.com/RemiRigal/Yape) |
| ≥ 0.5.0b3.dev78 | HTTP Basic Auth | Supported |

This fork uses HTTP Basic Auth on every request. The `/api/login` session endpoint removed in dev78 is no longer used.

---

## Install

### Developer install (load unpacked)

1. [Download the latest release](https://github.com/jsoyer/Yape/archive/refs/tags/v2.0.0.zip) and unzip, or clone the repo
2. Go to `chrome://extensions`
3. Enable **Developer mode** (top-right toggle)
4. Click **Load unpacked** and select the folder
5. Click the extension icon, then the settings icon to configure

---

## Setup

1. Open the **Options page** (settings icon in the popup)
2. Enter your PyLoad server's host, port and path
3. Check **Use HTTPS** if your server supports it (recommended)
4. Click **Save** — Chrome will prompt you to grant permission to your server's origin
5. Click **Login** and enter your PyLoad credentials

### Credentials storage

| Mode | Storage | Survives browser restart |
|---|---|---|
| Default | `chrome.storage.session` (memory only) | No |
| "Remember credentials" checked | `chrome.storage.local`, encrypted AES-GCM 256-bit | Yes |

Credentials are never synced across devices.

---

## Security

This fork includes a full security audit and hardening versus the original:

- **AES-GCM 256-bit encryption** for credentials saved to disk (WebCrypto API)
- **HTTP Basic Auth** on all API requests — no session cookies
- **Minimal permissions**: `storage`, `contextMenus`, `notifications` only
- **Dynamic host permissions** — no broad `<all_urls>` at install time
- **No script injection** into third-party pages — notifications via `chrome.notifications`
- **Strict CSP**: `default-src 'none'`; no `unsafe-eval`, no `unsafe-inline`
- **Login rate limiting**: exponential backoff after 3 failed attempts (30s → 5min)
- **ES modules** throughout — no global scope pollution

See [PRIVACY.md](PRIVACY.md) for the full data handling policy.

---

## License

MIT — see [LICENSE](LICENSE). Original extension by [Remi Rigal](https://github.com/RemiRigal).
