# PC Checker UI

Application bureau **React + Electron** (Scanner PC) : login PIN, écran de scan animé, et écran de fin.

**made by [OWXLD](https://github.com/1337lpb-afk)**

---

## Fonctionnalités

- Fenêtre **sans cadre** (frameless), déplaçable par glisser-déposer
- 3 écrans : **Login** → **Scan** → **Finish**
- Animations **typewriter**, curseur carré, loader en carrés
- Interface **1280×720** (design Figma)
- Crédit auteur intégré (`made by OWXLD`)

---

## Stack technique

| Couche        | Techno                          |
| ------------- | --------------------------------- |
| UI            | React 19, TypeScript              |
| Styles        | Tailwind CSS 3                    |
| Routing       | React Router (HashRouter)         |
| Build UI      | Vite 6                            |
| Bureau        | Electron 36                       |
| Assets SVG    | vite-plugin-svgr                  |

---

## Prérequis

- **Node.js** 20 ou plus récent ([nodejs.org](https://nodejs.org/))
- **npm** (fourni avec Node)
- **Git** ([git-scm.com](https://git-scm.com/)) pour GitHub

Vérifier les versions :

```bash
node -v
npm -v
git -v
```

---

## Installation locale

```bash
git clone https://github.com/1337lpb-afk/scanner.git
cd scanner
npm install
```

---

## Commandes

| Commande        | Description                                      |
| --------------- | ------------------------------------------------ |
| `npm run dev`   | Dev : Vite + Electron (hot reload)               |
| `npm run build` | Compile TypeScript + build React dans `dist/`    |
| `npm run start` | Build puis lance Electron (mode production)      |
| `npm run electron` | Electron seul (après un `npm run build`)     |
| `npm run preview`  | Prévisualise le build Vite dans le navigateur |

### Développement (recommandé)

```bash
npm run dev
```

- Interface : fenêtre Electron
- Modifier `src/` → rechargement automatique

### Production locale

```bash
npm run start
```

---

## Structure du projet

```
scanner/
├── electron/           # Process principal Electron
│   ├── main.cjs        # Fenêtre, frameless, chargement app
│   └── preload.cjs     # Bridge sécurisé renderer ↔ main
├── src/
│   ├── screens/        # Écrans (Login, Scan, Finish)
│   ├── components/     # UI réutilisable (Typewriter, etc.)
│   ├── constants/      # Crédits (OWXLD)
│   ├── App.tsx         # Routes
│   └── main.tsx        # Entrée React
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

### Routes

| Route       | Écran          | Rôle                    |
| ----------- | -------------- | ----------------------- |
| `#/`        | ScannerLogin   | Saisie du PIN           |
| `#/scan`    | Scanner        | Scan en cours (~5 s)    |
| `#/finish`  | Finish         | Scan terminé            |

---

## Assets & design Figma

Les icônes par défaut sont des placeholders. Pour le design final :

1. Exporter depuis Figma en **SVG** (ou PNG si besoin)
2. Copier dans le dossier de l’écran concerné :

| Écran   | Dossier                         | Fichiers utiles                          |
| ------- | ------------------------------- | ---------------------------------------- |
| Login   | `src/screens/ScannerLogin/`     | `icon-lock.svg`, `vector.svg`            |
| Scan    | `src/screens/Scanner/`          | `group-260.png`, `vector.svg`            |
| Finish  | `src/screens/Finish/`           | `icon-complete.svg`, `icon-done.svg`     |

3. Garder les **mêmes noms** ou mettre à jour les imports dans les `.tsx`

**SVG multi-calques Figma :** préférer **un seul SVG** par icône, ou importer avec `?react` (voir `vite-plugin-svgr`).

---

## Personnalisation rapide

| Besoin              | Fichier / endroit                          |
| ------------------- | ------------------------------------------ |
| Crédit auteur       | `src/constants/credits.ts`                 |
| Durée du scan       | `SCAN_DURATION_MS` dans `Scanner.tsx`      |
| Taille fenêtre      | `electron/main.cjs` → `width` / `height`   |
| Lignes de statut    | `SCAN_LINES` dans `Scanner.tsx`            |
| Couleur fond        | `#2148c0` (Tailwind + `backgroundColor`)   |

---

## Publier sur GitHub

### 1. Créer le dépôt sur GitHub

1. Va sur [github.com/new](https://github.com/new)
2. Nom du repo : `scanner` (ou autre)
3. **Ne coche pas** « Add a README » si tu en as déjà un en local
4. Crée le dépôt

### 2. Initialiser Git en local (première fois)

À la racine du projet (`scanner/`) :

```bash
git init
git add .
git commit -m "Initial commit — Scanner PC (React + Electron) by OWXLD"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/scanner.git
git push -u origin main
```

Remplace `TON_USERNAME` par ton pseudo GitHub.

### 3. Connexion HTTPS vs SSH

**HTTPS** (simple) :

```bash
git remote set-url origin https://github.com/TON_USERNAME/scanner.git
```

**SSH** (si clé configurée) :

```bash
git remote set-url origin git@github.com:TON_USERNAME/scanner.git
```

### 4. Pousser les prochains changements

```bash
git add .
git commit -m "Description de tes changements"
git push
```

### 5. Bonnes pratiques pour le repo

- **Description** GitHub : `PC Scanner UI — React + Electron — made by OWXLD`
- **Topics** suggérés : `electron`, `react`, `typescript`, `vite`, `tailwindcss`, `desktop-app`
- Ne jamais committer : `node_modules/`, `dist/`, fichiers `.env` avec secrets
- Le `.gitignore` du projet exclut déjà `node_modules` et `dist`

---

## Prochaines étapes (idées)

- [ ] Logique de **scan PC** réelle (IPC Electron : `ipcMain` / `preload`)
- [ ] Validation du **PIN** (config locale ou API)
- [ ] Installateur **`.exe`** avec [electron-builder](https://www.electron.build/)
- [ ] Auto-update (optionnel)

### Exemple futur : IPC scan

```text
Renderer (React)  →  preload.cjs  →  main.cjs  →  scan système
```

---

## Dépannage

| Problème | Piste de solution |
| -------- | ----------------- |
| `npm run dev` ne ouvre pas Electron | Vérifier que le port `5173` est libre ; relancer |
| Écran blanc en prod | Lancer `npm run build` avant `npm run electron` |
| SVG invisibles | Remplacer les placeholders ; vérifier imports `?url` / `?react` |
| Fenêtre non déplaçable | Glisser sur le fond bleu (zones `electron-drag`) |

---

## Licence

Projet personnel — **OWXLD**.  
Tu peux ajouter un fichier `LICENSE` (MIT, Apache-2.0, etc.) si tu publies en open source.

---

## Auteur

**OWXLD** — made by OWXLD

Si ce projet t’a aidé, une ⭐ sur GitHub fait plaisir.
