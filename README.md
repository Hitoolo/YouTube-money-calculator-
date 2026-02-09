# Hitoolo — YouTube Money Calculator

A clean, white-first YouTube revenue calculator for creators. Estimate AdSense, sponsorship, affiliate and membership income. Client-side, zero dependencies, ideal for GitHub Pages.

**Live demo (replace):**  
`https://hitoolo.github.io/youtube-money-calculator/`

---

## What this repo contains
- `index.html` — main tool (UI + logic + charts)
- `README.md` — this file
- `LICENSE` — MIT license
- `sitemap.xml` — basic sitemap for search engines
- `robots.txt` — crawl rules
- `.nojekyll` — prevents Jekyll processing (optional)
- `assets/` — images (favicon, social preview)

---

## Quick deploy (GitHub Pages)

### Using GitHub web UI (fast)
1. Create a new **public** repository on GitHub, name it (example): `hitoolo-youtube-calculator`.  
2. Upload `index.html`, `README.md`, `LICENSE`, `sitemap.xml`, `robots.txt`, `.nojekyll`, plus an `assets/` folder containing `favicon.ico` and `social.png`.  
3. Commit and push.  
4. In the repo: **Settings → Pages** → Source: choose branch `main` (or `master`) and folder `/ (root)` → Save.  
5. After ~30–60 seconds open: `https://hitoolo.github.io/youtube-money-calculator/`

### Using Git (CLI)
```bash
git init
git add .
git commit -m "Initial commit - Hitoolo revenue calculator"
git branch -M main
git remote add origin https://github.com/hitoolo/youtube-money-calculator.git
git push -u origin main
# Then enable GitHub Pages in repo settings (branch: main / root)
