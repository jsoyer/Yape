# Yapee Roadmap

## Done

- [x] fix: pushToQueue POST method (PR #4)
- [x] feat: Telegram bot notifications (PR #5)
- [x] security: hardening — dead libs, innerHTML, content_scripts, API params (PR #6)
- [x] feat: expandable file list in queue packages (PR #7)
- [x] fix: restart package also restarts aborted files
- [x] refactor: tech debt phases 1-3 — constants, utils, async/await, popup decomposition (PR #8)

## Backlog — Features

### Dark mode complet
- `js/theme.js` detecte deja `prefers-color-scheme` mais n'applique rien
- Toggle dans les settings avec persistence dans storage
- Appliquer `data-bs-theme="dark"` sur le body (Bootstrap 5.3+ le supporte nativement)
- Effort: Low

### Drag & drop DLC/CCF/RSDF
- `uploadContainer` existe deja dans pyload-api.js
- Ajouter une drop zone dans le popup (overlay sur drag enter)
- Accepter les fichiers .dlc, .ccf, .rsdf, .txt
- Effort: Low

### ETA global de la queue
- L'element `queueEta` existe dans le HTML mais est vide
- Calculer a partir de la taille restante totale / vitesse moyenne
- Afficher dans le header de la queue view
- Effort: Low

### Raccourcis clavier supplementaires
- Switch tabs (1-5 pour downloads/queue/collector/history/stats)
- Clear finished (Ctrl+Shift+C)
- Focus search (/)
- Ajouter via `chrome.commands` ou key listeners dans popup
- Effort: Low

### Filtres avances dans la queue
- Filtrer par statut (failed, aborted, waiting, finished)
- Dropdown ou pills comme dans les logs
- Effort: Low

## Backlog — Integrations

### Discord webhook
- Meme pattern que js/telegram.js
- Format embed Discord au lieu de HTML Telegram
- Config dans l'onglet Notifications existant
- Effort: Low

### ntfy.sh
- Notification push self-hosted
- Un seul POST sans auth complexe (juste topic + message)
- Alternative legere a Telegram/Discord
- Effort: Trivial

## Backlog — DX / Qualite

### Build script
- Generer manifest.json + manifest.firefox.json depuis un fichier base
- Deduplication de la liste hosters (actuellement 4 copies)
- Optionnel: minification, PurgeCSS sur Bootstrap
- Effort: Medium

### Tests unitaires
- Setup vitest (zero config avec ES modules)
- Tester les fonctions pures de js/utils.js:
  formatBytes, parseEtaSeconds, formatEta, nameFromUrl, setIcon
- Tester js/constants.js (valeurs coherentes)
- Tester statusBadgeClass, statusLabel, escapeHtml
- Effort: Low

### CI GitHub Actions
- Lint (ESLint) + tests (vitest) sur chaque PR
- Valider les JSON (manifests, locales)
- Optionnel: build + package automatique
- Effort: Low
