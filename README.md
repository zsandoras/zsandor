# Zsandor

A dark, minimal multi-page site for the Zsandor persona. The layout now ships
with ambient motion, a floating music player, and a front-end admin sandbox so
you can iterate on copy and structure before wiring up a full CMS.
A dark, minimal portfolio for Zsandor — fingerstyle guitarist and chef. The
site blends music, culinary art, and practical tools like mail access in a
single static experience.

## Getting started

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/zsandor.git
   ```
2. Open the project directory:
   ```bash
   cd zsandor
   ```
3. Launch a local server (recommended) or open any HTML file directly in your
3. Launch a local server (recommended) or open `index.html` directly in your
   browser:
   ```bash
   python -m http.server 8000
   ```
4. Visit [http://localhost:8000](http://localhost:8000) to explore the site.

## Structure

- `index.html` – Landing page with lorem ipsum hero copy, animated orbs, and
  shared navigation.
- `guitar.html` – Placeholder song list with embedded Soundslice iframes ready
  to swap for your arrangements.
- `food-gallery.html` – Responsive grid for culinary photography.
- `mail.html` – Redirect form that hands credentials to the IONOS mail portal.
- `admin.html` – Front-end admin dashboard unlocked with `admin` / `admin`
  (session stored) so you can sketch future content workflows.
- `styles/main.css` – Single stylesheet powering the dark theme, cursor trail,
  audio player, and responsive layout.
- `scripts/main.js` – Cursor animations, audio controls, and admin dashboard
  logic.

## Customization tips

- Replace lorem ipsum copy, Soundslice embeds, and Unsplash photography with
  your real content as you iterate.
- Update the audio player source in each page if you want a different track for
  background ambience.
- Secure `admin.html` with `.htaccess`/`.htpasswd` or server rules before
  deploying publicly.
- To reset the admin dashboard session, clear browser storage or run
  `sessionStorage.removeItem('zsandorAdmin')` in the console.

## Deployment notes

Because the site is static, it can live on any static host (GitHub Pages,
Netlify, Vercel, IONOS, etc.). Upload the HTML, CSS, JS, and asset files, then
configure your domain.
- `index.html` – Home page introducing Zsandor’s musical and culinary worlds.
- `guitar.html` – Lists featured fingerstyle arrangements with embedded
  Soundslice tabs.
- `food-gallery.html` – Responsive gallery of signature dishes.
- `mail.html` – Mail portal with a login form redirecting to IONOS Mail.
- `admin.html` – Placeholder admin space ready for `.htaccess` protection.
- `styles/main.css` – Shared styling across all pages.

## Deployment notes

- Add server-side protection (e.g., `.htaccess`/`.htpasswd`) for `admin.html`
  before going live.
- Replace demo Soundslice score URLs and gallery photography with your own
  assets when ready.
- Because the site is static, it can be hosted on any service that serves HTML
  files (GitHub Pages, Netlify, etc.).
