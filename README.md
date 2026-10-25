# First Infotech Solutions — Static Website

A responsive static website for Azure/DevOps IT services, Cloud AI solutions, training courses and student internships. It uses only HTML, CSS and vanilla JavaScript; there is no Node.js backend, database or server-side runtime.

## Files
- `index.html` — single-page site with navigation sections
- `styles.css` — responsive styling
- `script.js` — mobile menu, dynamic copyright year and contact form behaviour
- `404.html` — fallback page
- `assets/favicon.svg` — site icon

## Before publishing
1. Replace `YOUR-BUSINESS-EMAIL@example.com` in `script.js` with your official email address.
2. Confirm course fees, durations, internship terms, business name and legal details.
3. Add real phone number, address, privacy policy and terms as appropriate.
4. The contact form uses `mailto:`. It opens the visitor's email app; it does **not** send/store form submissions on a server. For a form that submits directly, connect a form service or a serverless endpoint.
5. Remove or amend any claims that do not match the services you actually provide.

## Deploy to Azure Storage static website hosting
1. Create an Azure Storage account that supports static website hosting (a general-purpose v2 account).
2. In the Azure portal, open **Storage account → Data management → Static website** and select **Enabled**.
3. Set the index document name to `index.html` and the error document path to `404.html`, then save.
4. Open the `$web` container created by Azure.
5. Upload the contents of this folder (not the parent folder) to `$web`, preserving the `assets/` directory.
6. Open the **Primary endpoint** shown in the Static website blade to test the site.

Azure Storage static website hosting serves static files; it does not run backend code. For HTTPS with a custom domain, a managed edge service such as Azure Front Door or Azure CDN can be placed in front of the storage website endpoint. Azure Storage static website hosting by itself has limitations around custom-domain HTTPS and access controls; review current Azure documentation before choosing the production design.

## Local preview
You can open `index.html` directly in a browser. For a local web server, from this directory run:
```bash
python -m http.server 8080
```
Then open `http://localhost:8080`.

## Important
The course fees shown are based on the proposed fees discussed during planning and should be verified before launch. The business name is a proposed brand until legal registration/name availability is confirmed.
