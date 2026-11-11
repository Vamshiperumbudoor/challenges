# TISC Telangana 2026 — GitHub Pages site

A responsive, static recreation of the public-facing TISC challenge information page. It includes the 18 challenge descriptions, About, participation benefits, eligibility, process, dates and FAQs. Challenge cards are searchable/filterable and open full-detail dialogs.

## Important: bundle the original images locally

The source website's original challenge images are not bundled in this archive because this build environment could not download external binary assets. The site is already configured to load them from `assets/` (local relative paths), not from the TISC domain. **Before publishing**, run the included downloader once while connected to the internet. It downloads the exact image filenames used by the official page into this repository, so the published GitHub Pages site serves images from your own repository and does not depend on TISC being online.

### Download the 18 exact original images

Requirements: Python 3.8+ and internet access.

```bash
python download_images.py
```

This saves all 18 images to `assets/challenge-01-...jpg` through `assets/challenge-18-...jpg`. The image URLs and exact source filenames were taken from the live official page. Do not remove the `assets` folder when publishing.

## Publish using GitHub Pages

1. Extract this ZIP.
2. Run `python download_images.py` and confirm that 18 `.jpg` files exist in `assets/`.
3. Create a GitHub repository (or use an existing one).
4. Upload **the contents** of this folder (`index.html`, `styles.css`, `script.js`, `challenges.js`, `assets/`, `README.md`, `.nojekyll`).
5. In GitHub: **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
6. Wait for the Pages deployment and open the published URL.

No build step, Node.js, framework, server, API key or external runtime is required. Google Fonts are an optional external font enhancement; the site has system fallbacks. All challenge text and challenge images are served locally once the downloader has been run.

## Project files

- `index.html` — full page structure and FAQ content
- `styles.css` — responsive visual design
- `script.js` — search, category filters, mobile menu and challenge detail dialogs
- `challenges.js` — all 18 challenge records and local image paths
- `download_images.py` — one-time original image downloader
- `assets/` — destination for the 18 downloaded original challenge images

## Source and attribution

Challenge wording, dates, FAQ text, challenge image filenames and image source URLs were transcribed from: https://tisc.telangana.gov.in/#challenges

This is an independent, unofficial reproduction for informational use. It is not affiliated with or endorsed by the Government of Telangana or TISC. Before public redistribution, confirm that you have permission to republish the source site's photographs, logos and other branded assets. This project intentionally does not copy the official site's logos or government marks.
