# TISC Telangana 2026 — GitHub Pages site

A responsive, static recreation of the public-facing TISC challenge information page. It includes the 18 challenge descriptions, About, participation benefits, eligibility, process, dates and FAQs. Challenge cards are searchable/filterable and open full-detail dialogs.

## Images

The 18 challenge images are already included in the `assets/` directory. The site loads them using local relative paths, so no image-download script or extra download step is required before publishing.

Keep the `assets/` directory and its image files in the repository so the challenge cards and detail dialogs can display their images.

## Publish using GitHub Pages

1. Upload the site files and the complete `assets/` directory to the repository.
2. In GitHub, open **Settings → Pages**.
3. Select **Deploy from a branch**, choose **main** and **/(root)**, then save.
4. Wait for the Pages deployment and open the published URL.

No build step, Node.js, framework, server, API key or external runtime is required. Google Fonts are an optional external font enhancement; the site has system fallbacks. Challenge text and images are served locally from this repository.

## Project files

- `index.html` — full page structure and FAQ content
- `styles.css` — responsive visual design
- `script.js` — search, category filters, mobile menu and challenge detail dialogs
- `challenges.js` — all 18 challenge records and local image paths
- `assets/` — the 18 challenge images used by the site

## Source and attribution

Challenge wording, dates, FAQ text, challenge image filenames and image source URLs were transcribed from: https://tisc.telangana.gov.in/#challenges

This is an independent, unofficial reproduction for informational use. It is not affiliated with or endorsed by the Government of Telangana or TISC. Before public redistribution, confirm that you have permission to republish the source site's photographs, logos and other branded assets. This project intentionally does not copy the official site's logos or government marks.
