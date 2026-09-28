# inimah.github.io

Personal academic homepage of **Iftitahu Ni'mah**, built with [Vite](https://vite.dev) + [React](https://react.dev).

## Editing content

All content (bio, research interests, publications, talks, teaching, service, CV) lives in
[`src/data/profile.js`](src/data/profile.js). Add or edit entries there; the components render
whatever the data file contains. The "Recent highlights" list is derived automatically from the
newest publications and talks.

The profile photo is `public/images/profile.png`.

## Local development

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build into docs/
npm run preview  # serve the built docs/ folder locally
```

## Deployment (GitHub Pages)

The production build is committed in `docs/`. In the repository settings go to
**Settings → Pages → Build and deployment**, choose **Deploy from a branch**, then select the
branch holding this code and the **`/docs`** folder. Run `npm run build` and commit `docs/` after
every content change.

Old Jekyll URLs (`/publications/`, `/talks/`, `/teaching/`, `/reviewing/`, `/cv/`, `/resume/`,
`/about/`) redirect to the matching section of the new one-page site.

## Project structure

```
index.html             HTML entry (meta tags, fonts, theme bootstrap)
src/main.jsx           React entry
src/App.jsx            Page composition and navigation sections
src/components/        Header, Hero, About, News, Publications, Talks, Teaching, Service, CV, Footer
src/data/profile.js    All site content
src/styles.css         Styles, light/dark themes, responsive rules
public/                Static files copied as-is (photo, favicon, redirects, 404, .nojekyll)
docs/                  Production build served by GitHub Pages
```
