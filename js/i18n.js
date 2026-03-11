export function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const msg = chrome.i18n.getMessage(el.dataset.i18n);
        if (msg) el.textContent = msg;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        const msg = chrome.i18n.getMessage(el.dataset.i18nPlaceholder);
        if (msg) el.placeholder = msg;
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
        const msg = chrome.i18n.getMessage(el.dataset.i18nTitle);
        if (msg) el.title = msg;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
        const msg = chrome.i18n.getMessage(el.dataset.i18nAria);
        if (msg) el.setAttribute('aria-label', msg);
    });
}

export function msg(key, substitutions) {
    return chrome.i18n.getMessage(key, substitutions) || key;
}
