# kWh Electric — Product/Site

## Status

**Product tabs live on Vercel; marketing homepage offline.**  
Shareable now (works today):

- https://kwhelectric.vercel.app/gateway/
- https://kwhelectric.vercel.app/integrations/
- https://kwhelectric.vercel.app/intelligence/

`kwhelectric.io` DNS still points at GitHub Pages (disabled / unsupported on this repo plan). Domains `kwhelectric.io` + `www` are attached on Vercel project `kwhelectric` (`prj_2v4NqoUcD5hAu3olv0A6qeddh0bJ`) and verified, but apex needs DNS:

- **A** `@` → `76.76.21.21`
- **CNAME** `www` → `cname.vercel-dns.com` (or remove GH Pages CNAME)

Until DNS flips, `kwhelectric.io/*` will not serve these pages.

## Last meaningful work

28 September 2026 (Nvidia Inception product tabs) —
  - Replaced marketing `index.html` with a minimal product hub (noindex); bak at `index.html.marketing-offline.bak`.
  - Added `/gateway/`, `/integrations/`, `/intelligence/` product pages with shared product nav.
  - Intelligence = third layer: flex automation, asset management, DSM, interoperable programs.
  - Old Vercel project was gone; recreated `kwhelectric`, aliased to `kwhelectric.vercel.app`, attached custom domains.
  - GitHub Pages cannot be re-enabled (plan 422); code pushed to `origin/main` @ `d3cf668`.

21 September 2026 (take site offline) —
  - Deleted GitHub Pages; paused prior Vercel project.

## Next step

Update Google Domains DNS for `kwhelectric.io` A → `76.76.21.21` (and www → Vercel) so partner links can use the custom domain. Share vercel.app URLs with Nvidia until then.
