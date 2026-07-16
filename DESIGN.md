# Design

## Theme

Superseded the original "basement rehearsal space" dark direction after the founder shared 4 reference pages (Western Rise, BlowLTD, Campaign Monitor, HomeLoanGurus): full-bleed photo hero with overlaid headline and a single solid CTA button, clean white/light sections below, icon-row trust signals, star-rating testimonials, numbered how-it-works. Premium DTC lifestyle-brand energy, daylight not midnight. Intensity now comes from bold type weight and one saturated accent color, not a dark palette.

## Color Strategy

Restrained-to-committed. White is the dominant surface (matches all 4 references). One saturated accent (crimson/red, closer to HomeLoanGurus and BlowLTD than to a soft pastel) carries every CTA, star rating, and price highlight. A light-gray alternating section background separates rhythm, exactly like Western Rise's testimonial band.

```css
:root {
  --bg:      oklch(1.000 0.000 0);    /* pure white, matches every reference */
  --surface: oklch(0.97 0.004 268);   /* faint cool-neutral tint for alternating sections */
  --surface-dark: oklch(0.14 0.01 268); /* footer / hero placeholder panel */
  --ink:     oklch(0.18 0.01 268);    /* near-black body text, >15:1 on white */
  --muted:   oklch(0.46 0.01 268);    /* secondary text, >=4.5:1 on white */
  --border:  oklch(0.89 0.005 268);   /* hairlines on white */
  --border-dark: oklch(0.30 0.01 268);

  --accent:  oklch(0.53 0.22 25);     /* crimson/red: CTA, stars, price */
  --accent-ink: oklch(0.99 0.005 25); /* white text on accent fill */
  --accent-hover: oklch(0.47 0.22 25);

  --ink-inverse: oklch(0.98 0.005 268); /* text on dark panels */
}
```

Text-on-fill: white text on --accent (mid-luminance saturated, fails dark-on-saturated legibility otherwise). Near-black text everywhere on white/light surfaces.

## Typography

- Display: "Archivo" (Google Fonts), weight 800-900. Bold confident grotesk, matches the weight of the reference headlines without the condensed gym-poster read of the earlier direction. Tight tracking (-0.02em), `text-wrap: balance`.
- Body: "Inter" (Google Fonts), 400/500/600/700. Same as before, still the right humanist counterpoint.
- No uppercase display headlines by default (the references use sentence/title case, not shouty caps). Reserve uppercase for short labels: eyebrow tags, badges, nav.
- Hero clamps 2.75rem-4.75rem (slightly lower ceiling than the display-font version since Archivo is wider than Anton at the same size).

## Motion

Same principles as before: sharp, quick, ease-out-quart/expo, no bounce. Slightly softer now to match the calmer daylight palette: micro-interactions 150-200ms, section reveals 400-550ms.

## Layout

- Full-bleed photo hero (100vw, ~85-100vh on desktop, min 480px), dark gradient overlay bottom-left to top-right for text legibility, headline + subhead + single CTA anchored lower-left (Western Rise / HomeLoanGurus pattern).
- Icon-row trust strip directly under the hero: 3 columns, centered icon + bold label + short gray description, no card chrome (Western Rise / HomeLoanGurus pattern exactly).
- Numbered how-it-works: 3 steps in a row (desktop) / stacked (mobile), circular number badge in accent color, connecting line optional. This is the one legitimate use of numbered scaffolding per the design system's absolute-ban exception: it's a real sequence.
- Testimonial band: light-gray section, centered 5-star rating in accent color, bold headline quote, then supporting testimonial paragraph. Optional 3-column variant for multiple short quotes (BlowLTD pattern).
- Value stack and bonus sections keep prior structure/copy, restyled for light surfaces.

## Components

- **Button (primary CTA)**: solid --accent fill, white text, bold, rectangular with a small 4px radius (not pill, matches every reference), generous padding. Hover: --accent-hover, slight lift.
- **Button (secondary/outline)**: white fill or transparent, 1.5px --ink border, used sparingly (e.g. "Watch demo" style secondary actions if ever needed).
- **Icon-row item**: centered column, a simple line-weight icon (24-32px, --ink or --accent stroke), bold label beneath, muted 1-2 line description. No background, no border, no card.
- **Star rating**: 5 filled star glyphs in --accent, inline, used above testimonial quotes and optionally in the hero trust line.
- **Numbered step**: circular badge (accent bg, white bold number) + bold step title + muted description, connected by a thin --border line on desktop.
- **Hero placeholder panel**: until real photography exists, a full-bleed dark gradient panel (--surface-dark to a slightly warmer dark tone) stands in for the photo, with a small centered "Add hero photo here" marker visible only as an HTML comment + a subtle corner tag in the live build, never presented as if it were finished photography.
- **Bonus card / value-stack row / FAQ**: same structure as before, recolored for light surfaces (white bg, --border hairlines, --ink text, --muted descriptions).
