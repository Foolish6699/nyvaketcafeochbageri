## Goal
Move the Nyvaket logo from the header into the hero section, placed between the "Sedan 2018 · Södertälje" badge and the "Doften av nybakat..." headline. Make it large and visually blended into the warm cream background.

## Changes

### 1. `src/components/SiteHeader.tsx`
- Remove the logo `<img>` from the header.
- Replace it with a text wordmark "Nyvaket" using `font-display` (Fraunces serif) so the header still has a clickable brand link to `/`.

### 2. `src/routes/index.tsx`
- Import `nyvaketLogo` from `@/assets/nyvaket-logo.png`.
- In the `Hero` component, insert the logo image between the "Sedan 2018" badge and the `<h1>` headline.
- Sizing: large but balanced — `h-32 sm:h-40 lg:h-48 w-auto`, left-aligned, with top/bottom margin (`mt-6 mb-2`).
- Blend treatment: apply `mix-blend-multiply` so the white background of the PNG disappears into the cream page background, plus a subtle `opacity-95` and a soft mask (`[mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]`) to softly fade the edges into the page.

## Result
- Header becomes a clean text-only "Nyvaket" wordmark.
- Hero shows: small "Sedan 2018" pill → large blended Nyvaket logo → "Doften av nybakat..." headline → body copy → CTA.
