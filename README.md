# Sharan Karuppannan — Research & Engineering Portfolio

[Visit the portfolio](https://trivik261.github.io/Portfolio_Website/)

A responsive, dependency-free portfolio featuring current research, public repositories, and the interactive GridWorld demo. Includes project filters, persistent dark/light themes, keyboard focus styles, and reduced-motion support.

## Run locally

From the repository root:

```bash
python -m http.server 8000
```

Open http://localhost:8000. The current site uses `index.html`, `assets/style.css`, `assets/app.js`, and `images/profile.jpeg`. No npm install or build is needed.

## Deployment

GitHub Pages serves the repository root on `main`. `.nojekyll` enables direct static publishing. The earlier Next.js source and exported bundles are retained for history; they are not used by the current homepage.

## Content accuracy

The 2025 paper is labeled an arXiv preprint; the INDICON 2026 manuscript is labeled under review. Only GridWorld is advertised as a live browser demo. Project illustrations are conceptual rather than model outputs. Company-confidential implementation details and unverified performance claims are omitted.
