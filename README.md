# Getizy — React conversion

A React (Vite) rebuild of the "Home One" page from the Getizy HTML template.
The jQuery-driven bits (Owl Carousel, WOW.js, custom cursor, sticky-header
clone, mobile nav clone, counters) have been re-implemented as plain React —
no jQuery, Owl Carousel, or Bootstrap JS involved.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## What's here

- `src/components/` — one component per template section (HeroSlider,
  Features, About, Services, Testimonials, WhyChoose, Projects, Team,
  VideoSection, Blog, Footer, Header, MobileNav, SearchPopup, ScrollToTop).
- `src/pages/Home.jsx` — assembles the full homepage from those components.
- `src/pages/Placeholder.jsx` — a stand-in page used for every other nav
  link (About, Services, Shop, Blog, Contact, etc.), since only the
  homepage HTML was provided. Duplicate the `Home.jsx` pattern to flesh
  these out once you have the matching template pages.
- `src/data/navigation.js` — the main menu structure (desktop dropdowns +
  mobile accordion share this one source of truth).
- `src/data/content.js` — copy and imagery for every section, pointing at
  `public/assets/images/...` (the real template images, laid out the same
  way as the original template's `assets/images` folder).
- `src/hooks/useCarousel.js` — tiny carousel state machine used by the
  hero and testimonial sliders (replaces Owl Carousel).
- `src/hooks/useCountUp.js` — animates the stat counters in on scroll.
- `src/hooks/useReveal.js` — lightweight fade-in-on-scroll (replaces the
  `wow fadeInUp` classes from the original markup; pairs with animate.css,
  loaded via CDN in `index.html`).
- `src/styles/getizy.css` — a condensed version of the template's
  stylesheet covering every class actually used by the components above.

## Things intentionally left out / simplified

- **Hero background photo**: the template's `backgrounds/slider-1-1.jpg`
  wasn't part of the supplied image set, so the hero section falls back to
  a tinted gradient (`.hero-slider-one__bg` in `getizy.css`) layered with
  the ambient shape art that *was* provided.
- **Footer "Gallery" thumbnails**: the dedicated `gallery/footer-widget-
  gallery-*.png` files weren't in the supplied set either, so that grid
  reuses the `home-showcase` images instead (otherwise unused, since the
  megamenu they were built for was dropped — see below).
- **Icon font**: the template's custom `getizy-icon` icon font isn't
  available, so icons were swapped for the closest Font Awesome
  equivalents (already loaded via CDN in `index.html`).
- **Megamenu / multi-demo showcase**: the "Home" nav item's megamenu (a
  gallery of alternate template demos) doesn't apply to a single real
  site, so it was dropped from the nav.
- **jQuery plugins not re-implemented**: `nouislider`, `isotope` masonry
  filtering, `magnific-popup` image lightbox, `jarallax` parallax, and the
  custom cursor were part of *other* pages in the template (shop filters,
  gallery, etc.) and aren't used on the homepage, so they were left out.
  If you build out the Shop/Gallery placeholder pages, you'll want React
  equivalents for those (e.g. a small custom filter/lightbox component).
