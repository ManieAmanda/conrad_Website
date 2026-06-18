# Conrad Asia Energy — Website

Static HTML website. No build step required.

## Structure
- `index.html` — entry point (redirects to `Conrad Homepage.html`)
- `Conrad Homepage.html` — homepage
- `Conrad Who We Are.html`, `Board and Management.html` — about / governance team
- `What We Do *.html` — Project Overview, Duyung PSC, Aceh PSCs, Reserves & Resources
- `Governance.html`, `Careers.html`, `Media.html`, `Contact.html`
- `Investor *.html` — Stock Price, Financial Reports, Presentations, ASX Announcements, Analyst Coverage
- `Mako Project Highlights.html` — standalone highlights band
- `assets/` — CSS, JS, images, icons, fonts (`investor.css` is the shared stylesheet; `assets/board/` holds director headshots)

## Deploy to GitHub Pages
1. Create a new repository and push these files to the default branch.
2. In **Settings → Pages**, set the source to the default branch, root (`/`).
3. The site will be served from `https://<user>.github.io/<repo>/` — `index.html` redirects to the homepage.

## Notes
- Stock Price, Financial Reports, Presentations and ASX Announcements pages use the third-party **YourIR** widget script for live ASX data; an internet connection is required for those live feeds.
- Some leadership/management photos use drag-and-drop placeholders that are editor-only — replace them with real `<img>` files before publishing if needed.
