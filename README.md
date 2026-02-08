# Pro YouTube Revenue Studio

A small, client-side YouTube revenue calculator that estimates AdSense and sponsorship earnings from views, RPM and timeframe. Built for creators who want fast, realistic revenue scenarios.

## Features
- Estimate AdSense earnings using RPM (net publisher RPM)
- Estimate sponsorship potential using CPM per 1,000 views
- Low / current / optimized scenario bars
- Toggle for long-form vs shorts defaults
- Mobile-friendly and zero-dependency (pure HTML/CSS/JS)

## How to use
1. Change `Traffic Volume` (views) and `Timeframe` (Single video / Daily / Monthly).  
2. Adjust `AdSense RPM` and `Sponsorship CPM`.  
3. Read the summary, split by AdSense and sponsors. Bars show low/current/optimized scenarios.

## Deploy on GitHub Pages (fast)
1. Create a new public repository on GitHub.
2. Add `index.html` and the `assets/` folder.
3. Commit and push.
4. In repo `Settings` → `Pages` → select `main` branch and `/ (root)` → Save.
5. Visit `https://<your-username>.github.io/<repo-name>/` after a minute.

## License
MIT — see LICENSE

## Customization ideas
- Save presets to `localStorage`
- Add CSV export or “share” link with parameters in URL
- Add currency selector and localization
- Add GA4 or Plausible analytics
