# kWh Electric — Product/Site

## Status

**Marketing site live again on GitHub Pages** at https://kwhelectric.io/ (and www).

Also mirrored on Vercel: https://kwhelectric.vercel.app/

Product tabs still available:
- https://kwhelectric.io/gateway/
- https://kwhelectric.io/integrations/
- https://kwhelectric.io/intelligence/

Repo was made **public** so GitHub Pages works again on the free plan (private Pages was blocked with 422). Custom domain TLS certificate already approved.

## Last meaningful work

29 September 2026 (bring site back up) —
  - Restored marketing `index.html` from `index.html.marketing-offline.bak`.
  - Redeployed production on Vercel (`kwhelectric`) with full homepage.
  - Re-enabled GitHub Pages (`main` `/`) with CNAME `kwhelectric.io` after making the repo public.
  - Verified apex returns 200 with Universal Communication Pane homepage.

28 September 2026 (Nvidia Inception product tabs) —
  - Had replaced marketing `index.html` with a minimal product hub; bak kept at `index.html.marketing-offline.bak`.
  - Added `/gateway/`, `/integrations/`, `/intelligence/` product pages.
  - GitHub Pages had been disabled; DNS still pointed at Pages → site looked fully down.

## Next step

Keep apex on GitHub Pages while it works. Optional later: flip DNS A `@` → `76.76.21.21` if consolidating hosting on Vercel only.
