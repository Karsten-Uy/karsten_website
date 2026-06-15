# How to deploy

Deployment is automatic via GitHub Actions (`.github/workflows/deploy.yml`).

1. Push (or merge) to the `main` branch.
2. The workflow builds the site and publishes it to GitHub Pages.
3. The live site updates at https://karsten-uy.github.io/karsten_website/.

## One-time setup (only needed once per repo)

In GitHub: **Settings -> Pages -> Build and deployment -> Source -> "GitHub Actions"**.

## Using a custom domain later

1. In `vite.config.js`, change `base` from `"/karsten_website/"` to `"/"`.
2. Add a `public/CNAME` file containing your domain (e.g. `karstenuy.com`).
3. Point your DNS at GitHub Pages and set the domain under Settings -> Pages.

Routing keeps working with no other changes (the app uses HashRouter).
