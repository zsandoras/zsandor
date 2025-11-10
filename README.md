# Zsandor

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
3. Launch a local server (recommended) or open `index.html` directly in your
   browser:
   ```bash
   python -m http.server 8000
   ```
4. Visit [http://localhost:8000](http://localhost:8000) to explore the site.

## Structure

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
