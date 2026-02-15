# Deploy to cPanel via GitHub Actions

This project is set up to **build on GitHub** and **deploy the static site to cPanel over FTP** on every push to `main`.

## 1. GitHub repository

Code is pushed to: **https://github.com/DigitalSkillsHouse/Testing**

Branch: **main**

## 2. Build output

- The app is built as a **static export** (`next build` → `out/` folder).
- No Node.js is required on cPanel; you upload plain HTML/JS/CSS to `public_html` (or a subdomain folder).

## 3. GitHub Secrets (required for deploy)

In the repo: **Settings → Secrets and variables → Actions**, add:

| Secret name           | Description |
|-----------------------|-------------|
| `FTP_SERVER`          | cPanel FTP host, e.g. `ftp.yourdomain.com` or your server IP |
| `FTP_USERNAME`        | cPanel FTP username (often same as cPanel login) |
| `FTP_PASSWORD`        | cPanel FTP password |
| `FTP_REMOTE_DIR`      | Remote folder for the site, e.g. `/public_html` or `/public_html/cleaning` for a subfolder |
| `NEXT_PUBLIC_SITE_URL`| Full site URL, e.g. `https://yourdomain.com` (used in sitemap, schema, OG) |

## 4. cPanel setup

1. **FTP account**  
   In cPanel: **FTP Accounts** – use an existing account or create one. Use that username/password in the secrets above. The path is usually `/public_html` or a subdirectory (e.g. `/public_html/seattle-cleaning`).

2. **FTP remote dir**  
   - For **root domain**: set `FTP_REMOTE_DIR` to `/public_html`.  
   - For a **subdirectory or subdomain**: set it to that directory (e.g. `/public_html/subdomain` or `/public_html/cleaning`).  
   The workflow uploads the **contents** of `out/` into this folder (it does not create an `out` folder on the server).

3. **Optional – subdomain**  
   In cPanel: **Subdomains** → create e.g. `cleaning.yourdomain.com` and set its document root to the same path you use for `FTP_REMOTE_DIR`.

## 5. Run the pipeline

- **Automatic**: Push to `main` (e.g. `git push origin main`) → Actions run build and FTP deploy.
- **Manual**: **Actions** tab → **Build and Deploy to cPanel** → **Run workflow**.

## 6. After first deploy

- Open your site URL and test key pages (home, contact, a service page).
- Add `public/og-image.jpg` (1200×630) if you want a custom social image; then commit and push to redeploy.

## Troubleshooting

- **FTP connection failed**  
  Check host (no `ftp://`), username, password, and that the FTP user has write access to `FTP_REMOTE_DIR`.

- **404 on refresh / direct URL**  
  Static export uses `index.html` in folders. If your host doesn’t support “pretty” URLs, you may need to configure redirects in cPanel (e.g. redirect `/*` to `/index.html` for client-side routing) or use a host that supports it. Many cPanel setups work by placing an `.htaccess` in `public_html` (see Next.js static export docs for Apache rules).

- **Build fails in Actions**  
  Check the **Actions** run log. Fix any TypeScript/lint errors locally with `npm run build` and push again.
