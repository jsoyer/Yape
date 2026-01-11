# Yape - PyLoad 0.5.0+ Compatible Fork 🚀

[![Version](https://img.shields.io/badge/version-1.1.4-blue.svg)](https://github.com/jsoyer/Yape)
[![PyLoad](https://img.shields.io/badge/PyLoad-0.5.0+-green.svg)](https://github.com/pyload/pyload)
[![License](https://img.shields.io/badge/license-MIT-orange.svg)](LICENSE)
[![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-yellow.svg)]()

> **Yet Another PyLoad Extension** - Compatible with PyLoad 0.5.0+ 

This is a fork of [RemiRigal/Yape](https://github.com/RemiRigal/Yape) with **complete fixes** for PyLoad 0.5.0+ compatibility, resolving the infamous **"CSRF token is invalid"** error.

---

## 🎯 What's New in This Fork

### ✅ Fixed Issues

- **CSRF Token Error** - Completely resolved
- **Obsolete API Endpoints** - Updated to new PyLoad 0.5.0+ API
- **HTTP Basic Authentication** - Implemented on all API calls
- **Endpoint Naming** - Converted from camelCase to snake_case
- **HTTP Methods** - Corrected GET/POST usage
- **Data Format** - Migrated from URL-encoded to JSON

### 🆕 New Features

- **Credential Storage** - Automatic storage and reuse of login credentials
- **Better Error Handling** - Improved authentication error detection
- **Full Documentation** - Comprehensive installation and fix reports

---

## 📦 Installation

### Method 1: Load Unpacked Extension (Recommended)

1. **Download this repository:**
   ```bash
   git clone https://github.com/jsoyer/Yape.git
   cd Yape
   git checkout pyload-0.5-compatible
   ```

2. **Open Chrome Extensions page:**
   - Navigate to `chrome://extensions/`
   - Enable **Developer mode** (top right)

3. **Load the extension:**
   - Click **"Load unpacked"**
   - Select the downloaded `Yape` folder

4. **Configure Yape:**
   - Click on the Yape icon in Chrome toolbar
   - Click the ⚙️ settings icon
   - Enter your PyLoad server details:
     - **Host:** Your PyLoad server IP (e.g., `192.168.1.249`)
     - **Port:** Your PyLoad port (default: `8000`)
     - **Path:** `/`
   - Click **Save**
   - Click **Login** and enter your PyLoad credentials

### Method 2: Chrome Web Store

*Coming soon - Awaiting publication*

For detailed installation instructions, see [INSTALLATION.md](INSTALLATION.md)

---

## 🔧 Configuration

### PyLoad Server Requirements

- **PyLoad version:** 0.5.0 or higher
- **Authentication:** HTTP Basic Auth enabled (default in 0.5.0+)
- **API Access:** Enabled

### Extension Settings

| Setting | Example | Description |
|---------|---------|-------------|
| Host | `192.168.1.249` | PyLoad server IP or hostname |
| Port | `8000` | PyLoad API port |
| Path | `/` | API path (usually `/`) |
| HTTPS | ☐ | Enable for SSL connections |

---

## ✨ Features

### Core Functionality

- ✅ **One-click Downloads** - Add downloads directly from any webpage
- ✅ **Context Menu Integration** - Right-click any link → "Download with Yape"
- ✅ **Real-time Monitoring** - View active downloads and progress
- ✅ **Bandwidth Control** - Monitor and limit download speed
- ✅ **Queue Management** - View and manage download queue

### Technical Features

- ✅ **HTTP Basic Authentication** - Secure credential storage
- ✅ **PyLoad 0.5.0+ API** - Full compatibility with latest API
- ✅ **Manifest V3** - Modern Chrome extension standards
- ✅ **Cross-browser Support** - Works on Chrome, Edge, Brave

---

## 🛠️ Technical Details

### API Endpoints Updated

| Old Endpoint | New Endpoint | Method | Format |
|-------------|--------------|--------|--------|
| `/api/login` | `/api/check_auth` | GET | Query params |
| `/api/statusServer` | `/api/status_server` | GET | - |
| `/api/statusDownloads` | `/api/status_downloads` | GET | - |
| `/api/getQueueData` | `/api/get_queue_data` | GET | - |
| `/api/addPackage` | `/api/add_package` | POST | JSON |
| `/api/checkURLs` | `/api/check_urls` | POST | JSON |

### Authentication Flow

```
1. User enters credentials → Login button
2. Extension validates via /api/check_auth
3. Credentials stored securely in chrome.storage.sync
4. All subsequent API calls include HTTP Basic Auth header
5. Session maintained until logout
```

For complete technical details, see [TECHNICAL_REPORT.md](TECHNICAL_REPORT.md)

---

## 📚 Documentation

- **[INSTALLATION.md](INSTALLATION.md)** - Step-by-step installation guide
- **[CHANGELOG.md](CHANGELOG.md)** - Version history and changes
- **[TECHNICAL_REPORT.md](TECHNICAL_REPORT.md)** - Complete technical documentation (French)

---

## 🐛 Known Issues

### Resolved in v1.1.4
- ✅ CSRF token error
- ✅ API endpoint incompatibility
- ✅ Authentication failures
- ✅ Method not allowed errors

### Current Limitations
- Credentials stored in browser sync storage (secure but synced across devices)
- Requires PyLoad 0.5.0+ (not compatible with older versions)

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this fork:

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 Changelog

### Version 1.1.4 (2026-01-11)

**Fixed:**
- Complete resolution of "CSRF token is invalid" error
- Updated all API endpoints to PyLoad 0.5.0+ format
- Implemented HTTP Basic Authentication on all requests
- Converted data format from URL-encoded to JSON
- Fixed endpoint naming (camelCase → snake_case)

**Added:**
- Credential storage and automatic reuse
- Comprehensive error handling
- Full technical documentation

**Changed:**
- Migrated from session cookies to HTTP Basic Auth
- Updated manifest to v1.1.4

For complete version history, see [CHANGELOG.md](CHANGELOG.md)

---

## 🔐 Security

### Credential Storage

Credentials are stored in `chrome.storage.sync` which:
- ✅ Is encrypted by Chrome
- ✅ Syncs only when user is logged into Chrome
- ✅ Is accessible only by this extension

**Recommendations:**
- Use a strong, unique password for PyLoad
- Consider disabling Chrome sync if concerned about credential sync
- Logout from Yape when not using it

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

### Original Project
- **Author:** Rémi Rigal ([@RemiRigal](https://github.com/RemiRigal))
- **Original Repository:** [RemiRigal/Yape](https://github.com/RemiRigal/Yape)

### PyLoad 0.5.0+ Compatibility Fork
- **Maintainer:** [@jsoyer](https://github.com/jsoyer)
- **Version:** 1.1.4
- **Date:** January 2026

### Special Thanks
- PyLoad development team for the amazing download manager
- Original Yape contributors

---

## 🔗 Links

- **PyLoad Project:** https://github.com/pyload/pyload
- **PyLoad Website:** https://pyload.net/
- **Original Yape:** https://github.com/RemiRigal/Yape
- **This Fork:** https://github.com/jsoyer/Yape

---

## 💬 Support

If you encounter issues:

1. **Check the documentation:** [INSTALLATION.md](INSTALLATION.md) and [TECHNICAL_REPORT.md](TECHNICAL_REPORT.md)
2. **Verify PyLoad version:** Must be 0.5.0 or higher
3. **Open an issue:** [GitHub Issues](https://github.com/jsoyer/Yape/issues)

---

## 📊 Compatibility

| Component | Version | Status |
|-----------|---------|--------|
| PyLoad | 0.5.0+ | ✅ Compatible |
| PyLoad | < 0.5.0 | ❌ Not compatible |
| Chrome | Latest | ✅ Compatible |
| Edge | Latest | ✅ Compatible |
| Brave | Latest | ✅ Compatible |
| Firefox | Latest | ⚠️ Compatible (minor tweaks needed) |

---

<div align="center">

**Made with ❤️ for the PyLoad community**

If this fork helped you, please ⭐ star the repository!

</div>
