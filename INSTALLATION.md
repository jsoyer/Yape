# Yape - Installation Guide for PyLoad 0.5.0+

This modified version of Yape is compatible with PyLoad 0.5.0 and later versions.

---

## ✨ Changes Made

- Replaced obsolete `/api/login` endpoint with `/api/check_auth`
- Adapted authentication handling for the new PyLoad API
- Fixed "CSRF token is invalid" error
- Implemented HTTP Basic Authentication on all API calls
- Updated all endpoint names to snake_case format
- Migrated data format from URL-encoded to JSON

---

## 📦 Installation in Chrome

### Step 1: Access Chrome Extensions

1. Open **Chrome** (or Chromium-based browser like Brave, Edge)
2. Type `chrome://extensions/` in the address bar
3. Press **Enter**

### Step 2: Enable Developer Mode

1. In the top right corner of the page, toggle the **"Developer mode"** switch

### Step 3: Load the Extension

1. Click on **"Load unpacked"**
2. Navigate to the `yape-fixed` folder
3. Select the folder and click **"Select"**

### Step 4: Configure Yape

1. Click on the Yape icon in the Chrome toolbar
2. Click on the ⚙️ (settings) icon
3. Enter your PyLoad server information:
   - **Host**: `192.168.1.249` (or your IP address)
   - **Port**: `8666` (or your port)
   - **Path**: `/`
   - **Use HTTPS**: Leave unchecked if using HTTP
4. Click **"Save"**
5. Click **"Login"** and enter your PyLoad credentials

---

## 📦 Installation in Firefox

### Step 1: Access Firefox Add-ons

1. Open **Firefox**
2. Type `about:debugging#/runtime/this-firefox` in the address bar
3. Press **Enter**

### Step 2: Load Temporary Add-on

1. Click on **"Load Temporary Add-on..."**
2. Navigate to the `yape-fixed` folder
3. Select the **`manifest.json`** file
4. Click **"Open"**

### Step 3: Configure Yape

Follow the same configuration steps as Chrome (Step 4 above).

**Note**: In Firefox, the extension will be removed when the browser is closed. For permanent installation, you need to package and sign the extension.

---

## ✅ Verification

If everything works correctly:

- ✅ The "CSRF token is invalid" error should no longer appear
- ✅ You should see **"✓ You are logged in"** in green on the options page
- ✅ You can view your current downloads
- ✅ You can add downloads via the context menu (right-click on a link → "Download with Yape")

---

## 🔧 Troubleshooting

### "CSRF token is invalid" still appears

**Solution**: Make sure you:
1. Reloaded the extension after installation
2. Clicked "Save" before clicking "Login"
3. Are using PyLoad 0.5.0 or higher
4. Have entered the correct server address and port

### "Server not found" error

**Solution**:
1. Check that PyLoad is running
2. Verify the IP address and port are correct
3. Try accessing PyLoad in your browser: `http://192.168.1.249:8666/`
4. Make sure there's no firewall blocking the connection

### "Login failed, invalid credentials" error

**Solution**:
1. Verify your PyLoad username and password
2. Try logging in directly to PyLoad via the web interface
3. Check that your PyLoad account has API access enabled

### Extension doesn't appear in Chrome toolbar

**Solution**:
1. Check that the extension is enabled on `chrome://extensions/`
2. Click the puzzle icon (🧩) in Chrome toolbar
3. Pin Yape to the toolbar

---

## 🔐 Security Notes

### Credential Storage

Credentials are stored in `chrome.storage.sync`, which is:
- ✅ Encrypted by Chrome
- ✅ Synced only if you're logged into Chrome
- ✅ Accessible only by this extension

### Recommendations

- Use a strong, unique password for PyLoad
- Consider disabling Chrome sync if concerned about credential synchronization
- Logout from Yape when not using it for extended periods

---

## 📋 Requirements

### PyLoad Server

- **Version**: 0.5.0 or higher
- **API Access**: Enabled (default)
- **Authentication**: HTTP Basic Auth (default in 0.5.0+)

### Browser

- **Chrome**: Latest version (Manifest V3 support)
- **Edge**: Latest version
- **Brave**: Latest version
- **Firefox**: Latest version (with minor limitations)

### Network

- Access to PyLoad server (local network or internet)
- PyLoad API port accessible (default: 8000 or 8666)

---

## 🆘 Support

If you encounter issues:

1. **Check the documentation**:
   - [CHANGELOG.md](CHANGELOG.md) - Version history
   - [TECHNICAL_REPORT.md](TECHNICAL_REPORT.md) - Complete technical details

2. **Verify PyLoad version**:
   ```bash
   pyload --version
   ```
   Must be 0.5.0 or higher

3. **Check PyLoad logs**:
   Look for API errors in PyLoad logs

4. **Open an issue**:
   [GitHub Issues](https://github.com/jsoyer/Yape/issues)

---

## 📚 Additional Resources

- **PyLoad Documentation**: https://pyload.net/
- **PyLoad GitHub**: https://github.com/pyload/pyload
- **Original Yape**: https://github.com/RemiRigal/Yape
- **This Fork**: https://github.com/jsoyer/Yape

---

**Installation guide for Yape version 1.1.4**  
**Compatible with PyLoad 0.5.0+**  
**Last updated: January 11, 2026**
