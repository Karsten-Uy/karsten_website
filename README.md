# Karsten's Website

Link: https://karsten-uy.github.io/karsten_website/

Welcome to my website! This project showcases my portfolio, projects, and more.

## Built With

- **Vite** – fast dev server and bundler.
- **React** – UI library.
- **Framer Motion** – animation library for React.
- **EmailJS** – send emails from the contact form.
- **TailwindCSS** – utility-first CSS framework.

## Run locally

```bash
npm install
npm run dev
```

See [documentation/run.md](documentation/run.md) for all scripts.

## Project structure

```
src/
  data/         <- single source of truth for content (edit these)
    projects.js     all projects + per-view flags
    experience.js   the career list
    siteConfig.js   nav links, social links, hero titles, per-page backgrounds
  components/   reusable UI (Navbar, Footer, ProjectCard, ...)
  pages/        one file per route (Home, About, Experience, Projects, Contact, 404)
  assets/       images, video, audio
```

### Adding a project

Add **one object** to the `projects` array in [src/data/projects.js](src/data/projects.js)
and set where it appears with the flags `showOnExperience`, `showOnProjects`, and `featured`.
The Experience page, the Projects page cards, and the home highlights all read from this one list.

### Adding a page

Add a `<Route>` in [src/App.jsx](src/App.jsx) and one entry to `pageConfig` in
[src/data/siteConfig.js](src/data/siteConfig.js) (background + overlay). Add it to `navLinks`
in the same file to show it in the navbar.

## Deployment

Pushing to `main` builds and deploys automatically via GitHub Actions.
See [documentation/deployment.md](documentation/deployment.md) (includes the one-time
Pages setting and how to switch to a custom domain).
