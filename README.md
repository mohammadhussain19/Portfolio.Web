# Platform Engineering Portfolio

A lightweight, production-ready portfolio website for a Platform Engineering / DevOps / Cloud Infrastructure professional.

## What is included

- `index.html` — static portfolio landing page
- `styles.css` — responsive, accessible styling with dark mode support
- `script.js` — mobile navigation and theme toggle logic
- `.github/workflows/deploy.yml` — GitHub Actions workflow to deploy to GitHub Pages

## Features

- Mobile-first responsive design
- Clean, professional technical aesthetic
- Hero section, project highlights, skills, summary, and contact CTA
- Fast static site with no server-side dependencies
- GitHub Actions deployment to `gh-pages`

## Getting started

1. Fork or clone this repository.
2. Push changes to the `main` branch.
3. The GitHub Actions workflow will deploy the site to the `gh-pages` branch automatically.

### Recommended GitHub Pages setup

- If GitHub Pages does not automatically appear after the first deploy, open the repository settings.
- In `Pages`, set the source to the `gh-pages` branch and the `/ (root)` folder.
- The published site URL will be displayed in GitHub Pages settings.

## Customize content

- Update section copy, project descriptions, and contact text in `index.html`.
- Replace social links with your own GitHub, LinkedIn, and other profiles.
- Change the email address in the contact CTA.
- Adjust the accent color or font settings in `styles.css`.

## Deployment

This project deploys automatically with GitHub Actions on every push to `main`.

If you need to deploy manually:

1. Install `git` and push your code to GitHub.
2. Ensure the `main` branch exists.
3. Confirm the repository has the `.github/workflows/deploy.yml` workflow.

## Notes

- No build step is required.
- The site is ready for GitHub Pages as a static root project.
- To preview locally, open `index.html` in a browser or use a simple local server.

## Local preview

```bash
# on macOS / Linux
python3 -m http.server 8000

# on Windows PowerShell
python -m http.server 8000
```

Then open `http://localhost:8000`.
