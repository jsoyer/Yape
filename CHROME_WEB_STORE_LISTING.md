# Chrome Web Store Listing Content for Yapee

## 1. Short Description (max 132 characters)

PyLoad manager with real-time downloads, multi-server support, smart retry, side panel, and download history.

**Character count: 108**

---

## 2. Detailed Description

### Yapee: The PyLoad Companion for Your Browser

Yapee is a professional-grade browser extension for managing your self-hosted PyLoad download manager — the spiritual successor to Yape, completely rewritten with Manifest V3. Whether you're running PyLoad on a NAS, VPS, or homelab, Yapee brings complete download control to your browser with real-time monitoring, advanced queue management, and seamless multi-server support.

Built for technical users who demand privacy, control, and efficiency.

### Core Features

**Real-Time Download Management**
- Monitor active downloads with live progress, speed, and global ETA
- View queued packages and reorder with drag-and-drop
- Browse your collector and push packages directly to the queue
- Per-file controls: stop, restart, or delete individual items
- Progress notification showing top 3 active downloads simultaneously
- Desktop notifications for per-package completion, errors, and captcha alerts

**Side Panel & Sidebar**
- Chrome Side Panel and Firefox Sidebar for persistent download monitoring
- Reuses the same interface as the popup — no extra setup
- Keep downloads visible while browsing other tabs

**Multi-Server Support**
- Manage multiple PyLoad instances from a single extension
- Switch servers in one click from the toolbar
- Per-server credentials with AES-256 encryption
- Hoster account management with test/verify button
- Each server maintains independent state and credentials

**Smart Downloads**
- Add single URLs, paste multiple URLs in parallel, or upload container files (DLC, CCF, RSDF)
- Container upload size guard (10 MB client-side limit)
- Custom package names for multi-URL submissions
- Right-click context menu: send link or extract all hoster links from page
- Batch operations: multi-select delete in queue
- Click-to-rename packages, add links to existing packages
- Smart retry with exponential backoff (up to 5 attempts, configurable)
- Speed limiter with input validation (0–100,000 KB/s) and proxy toggle

**Captcha & Alerts**
- Captcha solving directly in the popup
- Captcha timeout warning with visual countdown (alert after 2 minutes)
- Captcha badge indicator on toolbar icon

**Download History & Statistics**
- Download history (last 1,000 entries, circular buffer)
- Mini-stats dashboard: per-hoster breakdown, peak speed, failure rate
- History tab in popup with search and status filter

**User Experience**
- Dark mode with dynamic system theme detection (updates without reload)
- English and French localization
- Search and filter across downloads, queue, and collector
- Keyboard shortcuts: Alt+Shift+P (pause), Alt+Shift+Y (popup)
- Speed limit input in KB/s from toolbar

**Server Log Viewer**
- Log level filter: DEBUG, INFO, WARNING, ERROR, CRITICAL
- Full-text search across log entries
- Pagination for large log files

**Security & Privacy**
- No data collection or external dependencies
- Credentials encrypted with AES-GCM 256-bit encryption (WebCrypto API)
- Optional credential storage with session-only defaults
- Content-relay URL validation (HTTP/S only)
- Strict Content Security Policy with zero inline scripts
- Open-source code on GitHub for full transparency

**For Power Users**
- Event-driven real-time updates via PyLoad's event streaming API
- Tampermonkey companion script with one-click download buttons on 60+ hosters
- Content-relay architecture (no EXTENSION_ID needed for companion script)
- Login rate limiting to prevent brute force attacks
- Minimal permission model with optional host permissions

### Getting Started

1. Install Yapee from the Chrome Web Store
2. Click the extension icon and select the settings gear
3. Add your PyLoad server (IP/domain, port, optional path)
4. Click "Login" and enter your PyLoad credentials
5. Start managing downloads in real-time

### Requirements

- PyLoad 0.5.0 or newer
- Chrome, Chromium, Edge, or Firefox
- A self-hosted PyLoad instance accessible from your browser

### Open Source & Free

Yapee is completely free and open-source under the MIT license. No ads, no tracking, no premium features. Full source code available on GitHub.

Yapee is the successor to Yape, originally created by Rémi Rigal. Completely rewritten with Manifest V3 and actively maintained.

### Support the Project

- Star the project on GitHub
- Report issues and request features
- Contribute translations or code improvements
- Support via GitHub Sponsors or Ko-fi

---

## 3. Release Announcement — v3.8.0

### Yapee 3.8.0: Hardening & Quality of Life

**Yapee 3.8.0** focuses on polish and reliability — no new features, just making everything tighter.

**What's New in v3.8.0**

- Speed input validation: reject negative values, clamp to 0–100,000 KB/s
- Captcha timeout warning: visual countdown when captcha is pending, alert after 2 min idle
- Dynamic theme switching: dark/light updates instantly without reload
- Parallel multi-URL submission: all URLs sent simultaneously via Promise.all
- Container upload size guard: client-side 10 MB limit before upload
- Account verify button: "Test" button in options to validate hoster credentials
- Log viewer upgrade: level filter (DEBUG/INFO/WARNING/ERROR/CRITICAL), search, pagination
- Progress notification: shows top 3 active downloads, not just one

**Recent Highlights (v3.4.0–v3.7.0)**

- Chrome Side Panel + Firefox Sidebar for persistent monitoring
- Download history with circular buffer (last 1,000 entries)
- Mini-stats dashboard with per-hoster breakdown and peak speed tracking
- Smart retry with exponential backoff (configurable, up to 5 attempts)
- Batch operations: multi-select delete in queue
- Click-to-rename packages and add links to existing packages
- Hoster link extractor via context menu
- Per-package completion and error desktop notifications
- Progress bar notification for active downloads
- Simplified Downloads tab with package management moved to Collector
- Custom package name for multi-URL submissions
- GitHub Sponsors and Ko-fi funding links

**Supported Platforms**

- Chrome, Chromium, Edge (via Chrome Web Store)
- Firefox 109+ (via Firefox Add-ons)

**Get Started**

Install Yapee from the Chrome Web Store or Firefox Add-ons.

GitHub: https://github.com/jsoyer/Yapee

---

## 4. Social Media Tagline

The most powerful PyLoad manager for your browser — real-time monitoring, multi-server management, download history, smart retry, and a Side Panel that never gets in your way. Free and open-source.

---

## 5. Alternative Short Taglines

- "Yapee 3.8: Tighter, faster, smarter PyLoad management in your browser."
- "Side Panel + download history + smart retry. PyLoad has never been this good."
- "Control your downloads. Monitor your servers. Own your infrastructure."
- "From homelab to VPS: Yapee powers self-hosted download management."
