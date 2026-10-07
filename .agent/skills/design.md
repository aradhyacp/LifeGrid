---
version: alpha
name: elevenlabs-design-system
description: The complete ElevenLabs-style design system in three layers. Part I is the foundation — a quietly editorial print-magazine brand on a warm off-white canvas with near-black ink, Waldenburg Light 300 display, Inter body, pill CTAs, hairline borders, and a ~97% achromatic palette. Part II is the atmospheric mesh gradient — a heavily blurred multi-zone color field that reads like an out-of-focus photograph of light, governed by a hue-arc law, saturation coupling, a lightness regime choice, and extreme blur. Part III is the noise overlay and text-backdrop gradient — a tiled grain texture at overlay blend that makes surfaces tactile, plus a readability scrim that follows text position. Together they compose the textured card: gradient, grain, scrim, type.

colors:
  # --- Ink & primary action ---
  primary: "#292524"
  primary-active: "#0c0a09"
  ink: "#0c0a09"
  ink-pure: "#000000"
  graphite: "#44403b"
  # --- Text ---
  body: "#4e4e4e"
  body-strong: "#292524"
  muted: "#777169"
  muted-soft: "#a8a29e"
  ash: "#a59f97"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-dark-soft: "#a8a29e"
  # --- Hairlines ---
  hairline: "#e7e5e4"
  hairline-soft: "#f0efed"
  hairline-strong: "#d6d3d1"
  stone: "#ebe8e4"
  border-button: "#e5e5e5"
  # --- Canvas & surfaces ---
  canvas: "#f5f5f5"
  canvas-eggshell: "#fdfcfc"
  canvas-soft: "#fafafa"
  canvas-deep: "#0c0a09"
  surface-card: "#ffffff"
  surface-strong: "#f0efed"
  surface-taupe: "#f5f3f1"
  surface-dark: "#0c0a09"
  surface-dark-elevated: "#1c1917"
  # --- Atmospheric gradient stops (signature) ---
  gradient-mint: "#a7e5d3"
  gradient-peach: "#f4c5a8"
  gradient-lavender: "#c8b8e0"
  gradient-sky: "#a8c8e8"
  gradient-rose: "#e8b8c4"
  # --- Product-visual sparks (decoration only) ---
  violet-spark: "#0447ff"
  ember-orange: "#ff4704"
  # --- Semantic ---
  semantic-error: "#dc2626"
  semantic-success: "#16a34a"

typography:
  display-mega:
    fontFamily: "'Waldenburg', 'Times New Roman', serif"
    fontSize: 64px
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: -1.92px
  display-xl:
    fontFamily: "'Waldenburg', serif"
    fontSize: 48px
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: -0.96px
  display-lg:
    fontFamily: "'Waldenburg', serif"
    fontSize: 36px
    fontWeight: 300
    lineHeight: 1.17
    letterSpacing: -0.72px
  display-md:
    fontFamily: "'Waldenburg', serif"
    fontSize: 32px
    fontWeight: 300
    lineHeight: 1.13
    letterSpacing: -0.64px
  display-sm:
    fontFamily: "'Waldenburg', serif"
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: 0
  title-md:
    fontFamily: "'Inter', sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  title-sm:
    fontFamily: "'Inter', sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.44
    letterSpacing: 0.18px
  body-md:
    fontFamily: "'Inter', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.16px
  body-strong:
    fontFamily: "'Inter', sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.16px
  body-sm:
    fontFamily: "'Inter', sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: 0.15px
  body-xs:
    fontFamily: "'Inter', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.14px
  caption:
    fontFamily: "'Inter', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption-xs:
    fontFamily: "'Inter', sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption-uppercase:
    fontFamily: "'Inter', sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.96px
    textTransform: uppercase
  mono-sm:
    fontFamily: "'Geist Mono', ui-monospace, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.69
    letterSpacing: 0
  button:
    fontFamily: "'Inter', sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  nav-link:
    fontFamily: "'Inter', sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  card: 20px
  large-card: 24px
  input: 4px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  base: 16px
  md: 20px
  lg: 24px
  lg-plus: 28px
  xl: 32px
  xl-plus: 36px
  xxl: 48px
  xxl-plus: 56px
  gutter: 64px
  gutter-plus: 72px
  section: 96px
  mega: 160px

shadows:
  subtle: "rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px"
  subtle-2: "rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset"
  subtle-3: "rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset"
  subtle-4: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset"
  subtle-5: "rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px"
  subtle-6: "rgba(255, 255, 255, 0.6) 0px 0px 0px 1px inset"
  subtle-7: "rgb(235, 232, 228) 0px 0px 0px 0.5px inset"
  soft-drop: "0 4px 16px rgba(0, 0, 0, 0.04)"

layout:
  page-max-width: 1280px
  content-max-width: 1200px
  outer-gutter: 64px
  section-gap: 96-125px
  card-padding: 32px
  element-gap: 8-16px
  base-unit: 4px
  density: comfortable

atmospheric:
  hue-arc-sweep: 100-150deg
  hue-arc-sweep-subtle: 25deg
  hue-arc-direction: through-magenta
  hue-pivot: 330-360deg
  saturation-cool: 10-30%
  saturation-warm: 60-100%
  lightness-span-flat: 15
  lightness-span-deepwell: 60
  blob-radius: 50-80%
  blob-count: 2-4
  blur-sigma: 8-15%
  blur-sigma-default: 10%
  oversize: 120-140%
  transparent-stop: 65-75%

gradient-palettes:
  slate-plum:
    regime: deep-well
    stops: ["#b8c7cb", "#8599b3", "#4d5b8c", "#41375b", "#3f1d2a"]
  amber-rust:
    regime: subtle-saturation-driven
    stops: ["#f3b129", "#eb820b", "#953814", "#6e4c2c", "#4c483e"]
  periwinkle-orange:
    regime: flat-light
    stops: ["#8b98c0", "#9c7c96", "#db7869", "#b34148", "#fa9d2c"]
  lavender-orange:
    regime: flat-light
    stops: ["#928caf", "#a085a0", "#bb7a79", "#ef934a"]
  slate-maroon:
    regime: deep-well
    stops: ["#7b919c", "#eeba70", "#b55234", "#261015"]
  paleblue-forest:
    regime: deep-well
    stops: ["#abbdc2", "#9ca78f", "#5d693e", "#1f3618"]

noise:
  asset-avif: "/noise.avif"
  asset-png: "/noise.png"
  asset-nature: black pixels at varying alpha, mean ~0.40 (not a grey texture)
  asset-source-size: 256px
  tile-size: 128px
  tile-size-finer: 96px
  tile-size-coarser: 192px
  field-blend-mode: overlay
  field-opacity: 0.3
  scope: atmospheric fields only — no page-wide layer

text-backdrop:
  height: 60%
  bleed-x: -32px
  bleed-y: -24px
  color-start: "rgba(0, 0, 0, 0.5)"
  color-end: "rgba(0, 0, 0, 0)"

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
    height: 40px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 9px 19px
    height: 40px
  button-tertiary-text:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  tab-pill:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    border: 1px solid "{colors.border-button}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-mega}"
    padding: 96px
  gradient-orb-card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xxl}"
    padding: 32px
  atmospheric-card:
    rounded: "{rounded.xxl}"
    padding: 32px
    isolation: isolate
    overflow: hidden
  audio-sphere-visual:
    size: 200px
    rounded: "{rounded.full}"
  feature-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: 24px
  feature-card-taupe:
    backgroundColor: "{colors.surface-taupe}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: 32px
  large-feature-card:
    backgroundColor: "{colors.surface-taupe}"
    textColor: "{colors.ink}"
    rounded: "{rounded.large-card}"
    padding: 32px
  white-card-whisper:
    backgroundColor: "{colors.canvas-eggshell}"
    rounded: "{rounded.card}"
    padding: 16px
    shadow: "{shadows.subtle}"
  product-card-stack:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 0
  voice-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: 12px 0
  voice-icon-circular:
    backgroundColor: "{colors.surface-strong}"
    rounded: "{rounded.full}"
    size: 32px
  pricing-tier-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  pricing-tier-featured:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 44px
  badge-pill:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  hairline-divider:
    border: 1px solid "{colors.stone}"
  cta-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: 96px
  testimonial-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  audio-waveform-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 24px
  trust-logo-grid:
    backgroundColor: "{colors.canvas-eggshell}"
    columns: 6
  logo-wordmark:
    textColor: "{colors.ink-pure}"
    fontFamily: "'Inter', sans-serif"
    fontWeight: 600
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: 64px 48px
  footer-link:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
---

# ElevenLabs — Design System

> Warm cream editorial with whispered headlines. A Bauhaus studio notebook — eggshell paper, black ink, pastel atmosphere, and a single violet-and-orange spark for product moments.

**Theme:** light

This file combines three previously separate skills into one system:

| Part | Covers | Was |
|---|---|---|
| **I — Foundations** | Color, type, spacing, shape, elevation, components, layout | `base.md` |
| **II — Atmospheric Gradient** | The blurred multi-zone color field behind cards and heroes | `gradient.md` |
| **III — Noise & Text Backdrop** | Tiled grain overlay and the readability scrim behind type | `noise.md` |

Part I was itself merged from two independent captures of the same system; where those captures disagree, both values are preserved and flagged in **Source Reconciliation**. Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

---

## 0. The Layer Model

The three parts are three layers of one composition, in this order:

```
Atmospheric gradient  (or a background image)   ← Part II
            ↓
Noise texture         (128px tile, 0.30)        ← Part III
            ↓
Text-backdrop gradient (only where type needs it) ← Part III
            ↓
Content: type, logos, line work                 ← Part I
```

Each layer has one job, and they are not interchangeable:

- **The gradient** is the artwork. It carries color and depth.
- **The noise** makes the artwork tactile, and incidentally dithers the gradient's long tonal plateaus (see §15 and §26).
- **The text backdrop** exists purely for readability. It is not decoration.
- **The content** is the reason for all of it.

The two gradients in this system are different things and must not be conflated: the **atmospheric gradient** of Part II *is* the background artwork; the **text-backdrop gradient** of Part III is a dark scrim laid over that artwork behind type. Part III never defines the background artwork.

The container for all four layers is always the same:

```css
.card {
  position: relative;
  isolation: isolate;
  overflow: hidden;
}
```

`isolation: isolate` creates a stacking/compositing context so the noise layer's blend mode stays inside the card (§20). `overflow: hidden` performs the crop that the oversized gradient render depends on (§10.1).

---

# Part I — Foundations

## 1. Overview

ElevenLabs reads like a quietly editorial print magazine that happens to be a voice-AI product. A warm off-white canvas holds near-black ink, with a single layer of warm taupe surfaces one step deeper. The brand voltage is **photographic, not chromatic**: soft pastel atmospheric gradient orbs (mint, peach, lavender, sky, rose) drift through the page, and radial audio spheres blending violet and ember orange serve as the hero product graphic. These are the only "color" moments. There is no neon accent, no saturated CTA color, no dark-canvas dev-tools atmosphere.

Type pairs **Waldenburg Light** (weight 300) for display with **Inter** for body, navigation, captions, and buttons, plus **Geist Mono** for sparse technical micro-copy. The whisper-weight display at 300 is the editorial signature and is anti-convention — most sites use 600–700; this creates authority through restraint. Tight `-0.02em` tracking pulls display letters closer at large sizes, while Inter runs `+0.01em` looser at body sizes. The opposite tracking directions are a deliberate contrast between display and body.

CTAs are subtle: a near-black ink pill is the primary, a transparent outline is the secondary. Components stay flat or barely elevated with hairline 1px borders, generous 20–24px radii on cards, and fully-pilled 9999px buttons. The system feels like a Bauhaus studio on cream paper: restrained, editorial, and technically precise.

**Key Characteristics:**
- Warm off-white canvas, warm near-black ink. No saturated CTA color.
- Single primary action: ink pill at `{rounded.pill}`. Atmospheric gradients carry visual brand voltage.
- Display runs Waldenburg Light at weight 300 — editorial magazine voice. Never bold.
- Body runs Inter at 400 with subtle positive letter-spacing (+0.14–0.18px).
- Pastel gradient orbs (5 tokens: mint, peach, lavender, sky, rose) as atmospheric decoration only.
- Two product-visual sparks (violet, ember orange) confined to audio spheres and product icons.
- Soft pill geometry (`{rounded.pill}` for CTAs, 16–24px for cards).
- 96px section rhythm; palette is intentionally ~97% achromatic.
- Surfaces stack eggshell → taupe → stone. Never pure white, never pure gray — warmth is the defining tonal quality.

## 2. Source Reconciliation

The two captures behind Part I disagree on a handful of values. Both sets are preserved in the tokens above. Where they conflict, this table is authoritative about *what was measured*; pick per project and stay consistent.

| Area | Ref 1 (Style Reference) | Ref 2 (design-analysis) | Note |
|---|---|---|---|
| Page canvas | `#fdfcfc` eggshell | `#f5f5f5` canvas | Both warm off-white; Ref 1 is lighter. Tokens: `canvas-eggshell` / `canvas`. |
| Primary text | `#000000` pure black | `#0c0a09` warm near-black | Ref 1 notes pure black is "the system's only hard contrast." Tokens: `ink-pure` / `ink`. |
| Button fill | `#000000` | `#292524` | Tokens: `ink-pure` / `primary`. |
| Body text | `#777169` smoke | `#4e4e4e` | Ref 1's smoke maps to Ref 2's `muted`. |
| Faintest text | `#a59f97` ash | `#a8a29e` muted-soft | Within 2/255 — effectively the same value. |
| Hairline | `#ebe8e4` stone | `#e7e5e4` hairline | Near-identical. Ref 1 also lists `#e5e5e5` for button borders specifically. |
| Card surface | `#f5f3f1` warm taupe | `#ffffff` surface-card | Genuinely different approaches: Ref 1 cards are flat taupe, Ref 2 cards are white. Both tokenized. |
| Card radius | 20px (24px large) | 16px `xl` (24px `xxl`) | Tokens: `card`/`large-card` vs `xl`/`xxl`. |
| Accent colors | violet `#0447ff` + orange `#ff4704` | none; 5 pastel gradient stops | Not a conflict — different decoration layers. Keep both; see §3. |
| Display max | 48px | 64px `display-mega` | Ref 2 captured a larger homepage hero. |
| Tracking at 36px | -0.72px (-0.02em) | -0.36px (-0.01em) | **Resolved toward Ref 1.** Ref 1's -0.02em is internally consistent across 32/36/48px; Ref 2's is not. |
| Tracking at 32px | -0.64px (-0.02em) | -0.32px (-0.01em) | Same as above. |
| Button type | Inter 14px/500 | Inter 15px/500 | Tokens carry 15px; Ref 1's 14px is the alternative. |
| Nav height | 50px, transparent | 64px, canvas fill | Ref 1 notes the nav is "invisible until scroll." |
| Subheading 18px | line-height 1.6 | line-height 1.44, +0.18px | Token carries Ref 2. |
| body-sm | 14px / 1.5 / 0.14px | 15px / 1.47 / 0.15px | Both tokenized: `body-xs` / `body-sm`. |
| Caption | 10px / 1.6 | 14px / 1.5 | Both tokenized: `caption-xs` / `caption`. |
| Page width | 1280px max, 64px gutters | ~1200px content cap | Tokens: `page-max-width` / `content-max-width`. |

## 3. Colors

### Brand & Primary Action
- **Ink Primary** (`{colors.primary}` — #292524): The primary action color — warm near-black pill. Used scarcely.
- **Ink Primary Active** (`{colors.primary-active}` — #0c0a09): Press state.
- **Ink Pure** (`{colors.ink-pure}` — #000000): Pure black. Anchors the otherwise warm palette and creates the system's only hard contrast. Primary text, filled buttons, nav, links.

### Surface
- **Canvas** (`{colors.canvas}` — #f5f5f5): Off-white page floor.
- **Canvas Eggshell** (`{colors.canvas-eggshell}` — #fdfcfc): Warm off-white page canvas, button surfaces, card surfaces — warmer than clinical white, avoids digital glare and gives the site a paper-like calm.
- **Canvas Soft** (`{colors.canvas-soft}` — #fafafa): Lighter band for subtle alternating sections.
- **Canvas Deep** (`{colors.canvas-deep}` — #0c0a09): Same as ink — used for the rare dark-mode hero (Agents page).
- **Surface Card** (`{colors.surface-card}` — #ffffff): Pure white card.
- **Surface Taupe** (`{colors.surface-taupe}` — #f5f3f1): Section bands, feature cards, and the secondary surface level — one step deeper than eggshell, creates quiet separation without borders.
- **Surface Strong** (`{colors.surface-strong}` — #f0efed): Badges, voice-icon plates.
- **Surface Dark** (`{colors.surface-dark}` — #0c0a09): Dark hero/CTA band canvas.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #1c1917): Cards on dark canvas.

### Hairlines
- **Hairline** (`{colors.hairline}` — #e7e5e4): Default 1px divider.
- **Hairline Soft** (`{colors.hairline-soft}` — #f0efed): Lighter divider.
- **Hairline Strong** (`{colors.hairline-strong}` — #d6d3d1): Stronger panel outline.
- **Stone** (`{colors.stone}` — #ebe8e4): Hairline borders, dividers, icon plate backgrounds — warm gray that sits between taupe and mid-gray without feeling cold. The most common border pattern (54 occurrences in capture).
- **Button Border** (`{colors.border-button}` — #e5e5e5): 1px border on pill buttons (legacy support).

### Text
- **Ink** (`{colors.ink}` — #0c0a09): Display, primary text.
- **Graphite** (`{colors.graphite}` — #44403b): Strong secondary text, section labels — barely-warm dark gray for text that needs weight without true-black harshness.
- **Body** (`{colors.body}` — #4e4e4e): Default running-text.
- **Body Strong** (`{colors.body-strong}` — #292524): Same as primary — emphasis.
- **Muted / Smoke** (`{colors.muted}` — #777169): Sub-titles, body text, muted descriptions, caption labels — mid warm-gray; the dominant readable-but-quiet voice across cards and feature copy.
- **Muted Soft** (`{colors.muted-soft}` — #a8a29e): Disabled text.
- **Ash** (`{colors.ash}` — #a59f97): Faintest helper text, tertiary descriptions — the softest gray, used when text should feel like a footnote.
- **On Primary** (`{colors.on-primary}` — #ffffff): White text on ink pill.
- **On Dark** (`{colors.on-dark}` — #ffffff): White text on dark hero.
- **On Dark Soft** (`{colors.on-dark-soft}` — #a8a29e): Muted off-white on dark.

### Atmospheric Gradient Stops (signature)
- **Gradient Mint** (`{colors.gradient-mint}` — #a7e5d3): Mint green orb.
- **Gradient Peach** (`{colors.gradient-peach}` — #f4c5a8): Peach orb.
- **Gradient Lavender** (`{colors.gradient-lavender}` — #c8b8e0): Lavender orb.
- **Gradient Sky** (`{colors.gradient-sky}` — #a8c8e8): Sky-blue orb.
- **Gradient Rose** (`{colors.gradient-rose}` — #e8b8c4): Rose orb.

These appear ONLY as soft radial-gradient atmospheric orbs inside `{component.gradient-orb-card}` and as background atmospheric blooms behind hero copy. Never as button fills, never as text colors. For the full atmospheric field — which is a richer, more saturated construction than these five pastel orbs — see **Part II**.

### Product-Visual Sparks
- **Violet Spark** (`{colors.violet-spark}` — #0447ff): Product visual accent — appears inside audio sphere illustrations and decorative product icons only; never used for UI chrome.
- **Ember Orange** (`{colors.ember-orange}` — #ff4704): Second sphere color and product icon highlight; paired with Violet Spark inside artwork, never in buttons or links.

### Semantic
- **Success** (`{colors.semantic-success}` — #16a34a): Confirmation.
- **Error** (`{colors.semantic-error}` — #dc2626): Validation errors.

## 4. Typography

### Font Families

**Waldenburg** · `--font-waldenburg` — Display and heading type only. Used at 32/36/48/64px with weight 300. The ultra-light weight is anti-convention; most sites use 600–700, and this whisper-weight creates authority through restraint. Tight -0.02em tracking pulls letters closer at large sizes.
- **Substitute:** Inter (300), Söhne Light as a premium alternative, or EB Garamond 300 / GT Sectra for a more humanist or closer-to-modern read. Fallback `'Times New Roman', serif`.
- **Weights:** 300
- **Sizes:** 32px, 36px, 48px, 64px
- **Line height:** 1.05–1.20
- **Letter spacing:** -1.92px at 64px, -0.96px at 48px, -0.72px at 36px, -0.64px at 32px (-0.02em throughout)
- **OpenType features:** `"ss01" on if available`

**Inter** · `--font-inter` — Everything outside display: body, nav, buttons, links, captions, inputs, cards. Weight 400 is the default; weight 500 is reserved for buttons, emphasized links, and titles. Sizes span 10–20px with relaxed line-heights (1.47–1.6) that give paragraphs breathing room. Slight +0.01em tracking at 14–16px sizes adds legibility at small sizes.
- **Substitute:** Inter or system-ui — this is the same family ElevenLabs uses, so use it directly.
- **Weights:** 400, 500 (600 for uppercase captions and the wordmark)
- **Sizes:** 10px, 12px, 13px, 14px, 15px, 16px, 18px, 20px
- **Line height:** 1.20–2.06
- **Letter spacing:** +0.01em at 14/15/16px sizes, normal elsewhere

**Geist Mono** · `--font-geist-mono` — Code-adjacent or technical micro-copy at 13px, used sparingly for technical labels or metadata. Single weight, generous 1.69 line-height.
- **Substitute:** JetBrains Mono or IBM Plex Mono
- **Weights:** 400
- **Sizes:** 13px

### Hierarchy

| Token | Family | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|---|
| `{typography.display-mega}` | Waldenburg | 64px | 300 | 1.05 | -1.92px | Homepage hero h1 |
| `{typography.display-xl}` | Waldenburg | 48px | 300 | 1.08 | -0.96px | Subsidiary heroes, hero headline |
| `{typography.display-lg}` | Waldenburg | 36px | 300 | 1.17 | -0.72px | Section heads |
| `{typography.display-md}` | Waldenburg | 32px | 300 | 1.13 | -0.64px | Sub-section heads |
| `{typography.display-sm}` | Waldenburg | 24px | 300 | 1.20 | 0 | Card group titles |
| `{typography.title-md}` | Inter | 20px | 500 | 1.35 | 0 | Component titles |
| `{typography.title-sm}` | Inter | 18px | 500 | 1.44 | 0.18px | List labels, subheading |
| `{typography.body-md}` | Inter | 16px | 400 | 1.5 | 0.16px | Default body |
| `{typography.body-strong}` | Inter | 16px | 500 | 1.5 | 0.16px | Emphasized body |
| `{typography.body-sm}` | Inter | 15px | 400 | 1.47 | 0.15px | Footer body |
| `{typography.body-xs}` | Inter | 14px | 400 | 1.5 | 0.14px | Small body, nav links, buttons (Ref 1) |
| `{typography.caption}` | Inter | 14px | 400 | 1.5 | 0 | Photo captions |
| `{typography.caption-uppercase}` | Inter | 12px | 600 | 1.4 | 0.96px | Section labels, badges |
| `{typography.caption-xs}` | Inter | 10px | 400 | 1.6 | 0 | Finest caption |
| `{typography.mono-sm}` | Geist Mono | 13px | 400 | 1.69 | 0 | Technical labels, metadata |
| `{typography.button}` | Inter | 15px | 500 | 1.0 | 0 | CTA pill |
| `{typography.nav-link}` | Inter | 15px | 500 | 1.4 | 0 | Top-nav menu |

### Principles
- **Display weight stays at 300.** Waldenburg Light is the editorial signature. Never bold display copy.
- **Negative letter-spacing on display.** Waldenburg pulls -0.02em (-0.64px to -1.92px) tighter at display sizes.
- **Subtle positive letter-spacing on body.** Inter at +0.01em (+0.14–0.18px) tracking — slightly looser than default Inter for a more editorial feel.
- **The opposite tracking directions are deliberate** — the contrast between tightened display and loosened body is part of the voice.
- **Body never drops to 300** to match Waldenburg. Inter stays at 400/500 for legibility, and owns everything below 24px.

## 5. Layout

### Spacing System
- **Base unit:** 4px. **Density:** comfortable.
- **Tokens:** `{spacing.xxs}` 4 · `{spacing.xs}` 8 · `{spacing.sm}` 12 · `{spacing.base}` 16 · `{spacing.md}` 20 · `{spacing.lg}` 24 · `{spacing.lg-plus}` 28 · `{spacing.xl}` 32 · `{spacing.xl-plus}` 36 · `{spacing.xxl}` 48 · `{spacing.xxl-plus}` 56 · `{spacing.gutter}` 64 · `{spacing.gutter-plus}` 72 · `{spacing.section}` 96 · `{spacing.mega}` 160 (px).
- **Section padding / gap:** 96px (96–125px between bands).
- **Card padding:** 32px. **Element gap:** 8–16px.

### Grid & Container
- Page max-width 1280px with 64px outer gutters; content caps around 1200px.
- Editorial body: 12-column grid.
- Feature card grids: 2-up at desktop for hero splits, 3-up for benefit grids.
- Footer: 5-column at desktop.

### Page Composition
Full-width sections flow vertically in a single centered column. The hero is asymmetric: left-aligned headline at 48px Waldenburg, right-aligned body description, with two pill buttons stacked below the headline. Below the hero, a large feature panel with tab navigation spans the full content width. Sections alternate between canvas and taupe band backgrounds with 96–125px vertical gaps. The footer is a compact single band. Navigation is a minimal top bar — no sticky behavior, no mega-menu. Content rhythm is editorial: generous whitespace, one major visual per section, no card grids below the trust section.

### Whitespace Philosophy
Generous editorial pacing — print-magazine feel. 96px between bands; cards inside bands sit close (16–24px gap). The atmospheric gradient orbs occupy generous breathing space without competing with copy.

## 6. Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Reserved |
| `{rounded.xs}` / `{rounded.input}` | 4px | Inline tags, form inputs, small elements (4–10px) |
| `{rounded.sm}` | 6px | Compact rows |
| `{rounded.md}` | 8px | Form inputs (Ref 2) |
| `{rounded.lg}` | 12px | Compact cards |
| `{rounded.xl}` | 16px | Feature cards, pricing tiers (Ref 2) |
| `{rounded.card}` | 20px | Cards (Ref 1) |
| `{rounded.xxl}` / `{rounded.large-card}` | 24px | Gradient orb cards, atmospheric cards, large feature cards (extra-soft) |
| `{rounded.pill}` | 9999px | All CTA buttons, tags, tab pills, badges |
| `{rounded.full}` | 9999px | Voice icon circles, avatars |

## 7. Elevation & Depth

The system uses **hairline + soft drop**. Cards float above the canvas via 1px hairlines and a single subtle shadow tier. Atmospheric depth comes from gradient orbs and the Part II field, not from blur on the card itself.

| Level | Treatment | Use |
|---|---|---|
| Flat (canvas) | `{colors.canvas}` / `{colors.canvas-eggshell}` | Body bands, footer |
| Card | `{colors.surface-card}` / `{colors.surface-taupe}` | Content cards |
| Hairline border | 1px `{colors.hairline}` / `{colors.stone}` | Card outlines, section separation |
| Soft drop | `{shadows.soft-drop}` — `0 4px 16px rgba(0,0,0,0.04)` | Hovered cards (single shadow tier) |
| Whisper shadow | `{shadows.subtle}` — 1px hard edge + 1px blur + 4px blur at 4% | Elevated white cards |
| Inset border / focus halo | `{shadows.subtle-2}` — `rgba(0,0,0,0.075) 0 0 0 0.5px inset` | Focus rings |
| Gradient orb | Radial gradient with one of `{colors.gradient-*}` | Atmospheric depth — never a card surface |
| Atmospheric field | Full Part II composition | Card and hero backgrounds |

### Surfaces

| Level | Name | Value | Purpose |
|---|---|---|---|
| 1 | Eggshell Canvas | `#fdfcfc` | Base page background — warm off-white that reads as paper, not screen |
| 2 | Warm Taupe | `#f5f3f1` | Section bands and card surfaces that sit one step above the canvas without a border |
| 3 | Stone Plate | `#ebe8e4` | Icon plates, subtle elevated backgrounds — slightly deeper than taupe for small isolated elements |

### Decorative Depth
- **Pastel gradient orbs** are the brand's quietest atmospheric pattern. Soft radial blooms in mint, peach, lavender, sky, or rose drift through hero bands and feature sections without containing any content — they are pure atmosphere.
- **Atmospheric fields** (Part II) are the loud version: full-bleed, saturated, blurred color fields used as card and hero backgrounds, always with grain over them.

## 8. Components

### Top Navigation

**`top-nav`** — ElevenLabs wordmark left, primary horizontal menu (Creative / Agents / Video / Pricing / Enterprise / Docs) center-left, Sign In + "Try free" primary CTA right. Ref 2: background `{colors.canvas}`, text `{colors.ink}`, height 64px. Ref 1: transparent on eggshell canvas, 50px height, nav links Inter 14px, outline "Log in" + filled "Sign up" right — no background fill, invisible until scroll.

**`logo-wordmark`** — Black text reading "ElevenLabs" in Inter bold/semibold. Consistent across header and footer. No icon mark — the wordmark alone carries the brand.

### Buttons

**`button-primary`** — Near-black ink pill, the system's most recognizable component. Background `{colors.primary}` (#292524) or `{colors.ink-pure}` (#000000), text `{colors.on-primary}`, type `{typography.button}` (15px/500; Ref 1 measures 14px/500), padding 10px × 20px (Ref 1: 16px horizontal), height 40px, rounded `{rounded.pill}`, 1px solid `{colors.border-button}` border. Used for "Sign up", "Create an AI agent", "Learn more".

**`button-primary-active`** — Press state. Background `{colors.primary-active}`.

**`button-outline`** — Transparent or eggshell pill with 1px border. Background transparent / `{colors.canvas-eggshell}`, text `{colors.ink}`, 1px `{colors.hairline-strong}` or `{colors.border-button}` border, padding 9px × 19px (Ref 1: 14px horizontal), height 40px, rounded `{rounded.pill}`. Used for "Contact sales", "Log in". Lower visual weight than the filled variant — pairs beside it without competing.

**`button-tertiary-text`** — Ghost link button. Transparent fill, ink text, type `{typography.button}`, rounded `{rounded.pill}`, 1px border. Used for nav items and inline actions. No visible fill until hover.

**`tab-pill`** — Product switcher in feature panels. White fill, black text, rounded `{rounded.pill}`, 1px border. Active state marked by a small colored dot (orange for ElevenCreative, teal for ElevenAgents, gray for ElevenAPI). Tabs sit inline above the card content.

### Hero & Atmospheric

**`hero-band`** — Background `{colors.canvas}`, full-width display headline in `{typography.display-mega}` (64px/300/-1.92px), subhead in `{typography.body-md}`, two CTAs, and an atmospheric gradient orb behind the centered headline. 96px padding.

**`gradient-orb-card`** — A large card with a soft radial-gradient orb behind centered display copy. Background `{colors.canvas-soft}`, rounded `{rounded.xxl}` (24px), padding 32px. Each variant uses one of the five gradient tokens (`gradient-mint`, `gradient-peach`, `gradient-lavender`, `gradient-sky`, `gradient-rose`).

**`atmospheric-card`** — The full Part II + Part III composition as a card: atmospheric gradient field, grain overlay, optional text backdrop, white type. Rounded `{rounded.xxl}`, padding 32px, `isolation: isolate`, `overflow: hidden`. See §27 for the complete pattern.

**`audio-sphere-visual`** — Large circular gradient sphere (roughly 200px diameter) with soft radial gradients blending violet `#0447ff`, orange `#ff4704`, pink, and warm tones. Centered play-button overlay (white circle, 48px). No hard edges — these are the system's signature visual and appear 3× in a carousel row.

**`audio-waveform-card`** — A waveform visualization card. Background `{colors.surface-card}`, rounded `{rounded.xl}`, padding 24px. Holds a play button + waveform glyph + voice metadata.

### Cards

**`feature-card`** — 2-up or 3-up grids. Background `{colors.surface-card}`, text `{colors.ink}`, rounded `{rounded.xl}`, padding 24px, 1px hairline border.

**`feature-card-taupe`** — The dominant card pattern (22 occurrences). `{colors.surface-taupe}` (#f5f3f1) fill, rounded `{rounded.card}` (20px), 32px horizontal padding, no shadow, no border. Flat, quiet, sits on the canvas without elevation.

**`large-feature-card`** — Hero feature block. `{colors.surface-taupe}` fill, rounded `{rounded.large-card}` (24px, slightly larger than standard), generous internal padding. For flagship feature showcases that need more breathing room.

**`white-card-whisper`** — Elevated content card. `{colors.canvas-eggshell}` fill, rounded `{rounded.card}` (20px), 16px all-side padding, three-layer whisper shadow (`{shadows.subtle}` — 1px hard edge + 1px blur + 4px blur at 4% opacity). Used sparingly — only when a card needs to sit above other content with subtle separation.

**`product-card-stack`** — Stacked product preview cards. Background `{colors.surface-card}`, rounded `{rounded.xl}`, no padding (children fill the card edge-to-edge).

**`testimonial-card`** — Quote card. Background `{colors.surface-card}`, text `{colors.body}`, rounded `{rounded.xl}`, padding 32px.

### Voice Library

**`voice-row`** — Horizontal row in voice list. Background transparent, 1px hairline divider. Layout: 32px circular voice icon left, voice name + accent stack, optional preview button right. Padding 12px × 0.

**`voice-icon-circular`** — Background `{colors.surface-strong}`, rounded `{rounded.full}`, 32px diameter. Holds initials or voice glyph.

### Pricing

**`pricing-tier-card`** — Background `{colors.surface-card}`, rounded `{rounded.xl}`, padding 32px, 1px hairline border.

**`pricing-tier-featured`** — Featured tier inverts. Background `{colors.surface-dark}`, text `{colors.on-dark}`. Same shape, dark inversion.

### Forms & Tags

**`text-input`** — Background `{colors.surface-card}`, text `{colors.ink}`, rounded `{rounded.md}` (8px; Ref 1 measures 4px), padding 12px × 16px, height 44px, 1px `{colors.hairline-strong}` border. On focus, border thickens to 2px ink.

**`badge-pill`** — Background `{colors.surface-strong}`, text `{colors.ink}`, type `{typography.caption-uppercase}`, rounded `{rounded.pill}`, padding 4px × 10px.

### Structure

**`hairline-divider`** — 1px solid `{colors.stone}` (#ebe8e4) line. Preferred over whitespace when sections need explicit separation. The most common border pattern on the page (54 occurrences).

**`trust-logo-grid`** — Social proof section. 6-column grid of partner logos (Twilio, Disney, KPN, NVIDIA, Meta) rendered in grayscale at low contrast. Logos sit directly on the canvas with generous padding — not boxed in cards. "Read all stories" outline button top-right.

### CTA / Footer

**`cta-band`** — Pre-footer. Background `{colors.canvas}`, centered display headline in `{typography.display-lg}`, single ink pill CTA. 96px padding.

**`footer`** — Closing footer. Background `{colors.canvas}`, text `{colors.body}`. 5-column link list. 64 × 48px padding.

**`footer-link`** — Background transparent, text `{colors.body}`, type `{typography.body-sm}`.

## 9. Imagery

Product visuals dominate the imagery language: large soft-edged audio sphere gradients (200px+ circles with radial violet-to-orange-to-pink blends) serve as the hero graphic, alongside pastel atmospheric orbs as background bloom and full atmospheric fields (Part II) as card backgrounds. Logos in the trust section appear in low-contrast grayscale against the canvas. Photography is minimal — no lifestyle or product photography detected. Iconography is sparse and monochrome (black outlined or filled icons, no chromatic icons). The visual system feels more like a design publication than a product catalog — editorial restraint over marketing spectacle.

---

# Part II — Atmospheric Gradient

## 10. Purpose & Mental Model

Produce the background color field used across marketing surfaces: card backgrounds, hero panels, blog thumbnails, product announcements.

The target is **an out-of-focus photograph of colored light** — a soft, blurred, multi-zone field with no visible geometry. Not a CSS gradient. Not a mesh with discernible control points. Something that looks like it was *photographed*, not *computed*.

Every reference answers the same brief: **point a camera at a light source through something diffusing, defocus it completely, and photograph the result.** Three consequences follow, and they drive everything below:

1. **Nothing has an edge.** Not a soft edge — *no* edge. The fastest measured transition is ~0.4 points of lightness per 1% of frame width.
2. **Colors are lit, not filled.** Bright regions look like emission; dark regions look like absence of light, not like a dark paint color.
3. **The hue travels.** A real light field shifts hue as it falls off (sunset physics). A field that holds one hue and only changes brightness reads as a gradient, not as light.

The single most common failure is building a technically correct multi-stop gradient that still looks like a gradient. The fix is almost always §12 (hue arc) and §15 (blur scale).

### 10.1 Render oversized, then crop

Blurring to the frame edge pulls in transparent or background pixels and produces a visible soft halo around the border. Render the field **120–140% oversized**, blur, then crop to the frame. Every reference is edge-to-edge dense with no border falloff. The crop is the `overflow: hidden` on the card container from §0.

## 11. Anatomy

Every reference decomposes into **2–4 enormous, overlapping, soft zones**:

| Zone | Role | Typical size |
|---|---|---|
| **Light field** | The dominant tone. Occupies 40–60% of frame. | 60–100% of frame |
| **Warm core** | The saturated heart — where the "light" is. | 40–70% of frame |
| **Deep well** | The dark anchor. Usually one corner or one band. | 30–60% of frame |
| **Cool edge** *(optional)* | A desaturated cool corner that makes the warm core read as warm. | 25–40% of frame |

They overlap heavily. There is no visible seam between zones — each one's falloff is wider than the zone itself.

### 11.1 Observed arrangements

- **Diagonal fall** (Agents BG): light fills the top and the entire left edge; the deep well pools in the bottom-right corner. Streaky, directional, like light shafts at ~60°.
- **Vertical split** (Flows, Government, Expressive mode cards): cool zone on top, warm zone on the bottom, transition across the middle third. The most reusable arrangement for cards with type.
- **Intruding band** (NVIDIA BG): a saturated warm field with one desaturated dark column pushing down through the right-of-center. The contrast is a *saturation* contrast, not a lightness one.
- **Centered bloom** (Sunset panel 3): a near-white hot spot off-center-left, with color radiating out and darkening to the edges.

## 12. Law One — The Hue Arc

> **The hue travels 100–150° along a single continuous arc. Never hold one hue. Never jump.**

This is the law that separates these images from ordinary gradients. Measured hue paths, corner to corner:

| Reference | Hue path | Total sweep |
|---|---|---|
| Agents BG | 192° → 205 → 216 → 221 → 235 → 256 → 311 → **337°** | 145° |
| Sunset (panel 1) | 225° → 245 → 286 → 311 → 323 → 354 → 7 → **32°** | 167° |
| Flows card | 250° → 278 → 300 → 325 → 348 → 2 → **26°** | 136° |
| Expressive mode | 212° → 192 → 150 → 91 → 83 → **106°** | ~120° |
| NVIDIA BG | 40° → 33 → 27 → 21 → **15°** | 25° (subtle variant) |

### 12.1 Choose the arc, not just the endpoints

Blue (220°) to orange (30°) can be traversed two ways:

- **Through magenta** (220 → 280 → 330 → 30): violet, plum, rose, salmon, orange. **This is the one.** Every warm reference takes it.
- **Through green** (220 → 160 → 90 → 30): teal, green, olive, amber. Produces mud. Never used for a warm composition.

In CSS this is `longer hue` vs `shorter hue` on an `oklch` interpolation — see §16.2. Getting this backwards is the single most common way to produce a dead-looking result.

The exception proves the rule: **Expressive mode** runs blue → olive → forest green, i.e. deliberately *through* green, because green is the destination. Pick the arc that avoids the hues you don't want in the frame.

### 12.2 Everything converges on red-magenta

The deep end of every warm reference lands in **330–360°**. Agents ends at 337° (plum-maroon), Sunset at 356° (crimson), Government at 346° (deep maroon). Red-magenta is the pivot the whole family rotates around — it is where cool fields and warm fields both go when they get dark.

## 13. Law Two — Saturation Is Coupled to Hue

> **Cool zones are muted. Warm zones are vivid. Saturation and hue move together.**

Measured, consistently, across every reference:

| Hue family | Saturation | Example |
|---|---|---|
| Blue / lavender / slate (190–260°) | **10–30%** | `#8b98c0` S29, `#7b919c` S14, `#b8c7cb` S15 |
| Mauve / rose (280–350°) | **12–50%** | `#9c7c96` S13, `#bb7a79` S27 |
| Red / orange / amber (0–45°) | **60–100%** | `#fa9d2c` S95, `#eb820b` S91, `#ff852a` S100 |

Total measured saturation span: **6% → 92%** (NVIDIA), **11% → 100%** (Sunset).

Two practical consequences:

- A cool zone at S 60% will look like plastic. Keep it under 30%.
- A warm core at S 40% will look dirty. Push it past 75%.

### 13.1 The deep well desaturates or goes maroon

Dark regions resolve one of two ways, never a third:

- **Neutral shadow** — saturation collapses toward grey. NVIDIA's dark band measures `#4c483e` at **S 10%**, `#43423c` at **S 5%**. Essentially neutral.
- **Maroon shadow** — saturation holds or rises while lightness drops. Agents' corner is `#3f1d2a`, S 36% at L 18%.

What never happens: taking the dominant hue and simply darkening it at constant saturation. That produces the flat, synthetic look this whole style is avoiding.

## 14. Law Three — Lightness Does Less Than You Think

> **In the warm compositions, lightness is nearly flat. Hue and saturation carry the image.**

Sunset panel 1, corner to corner — the full dramatic sweep from periwinkle to vivid orange:

```
L:  64 → 62 → 58 → 54 → 56 → 59 → 63 → 65 → 57 → 58
```

A span of **11 points.** Meanwhile hue moves 167° and saturation moves 12% → 95%. The Flows card is the same: L stays in 54–64 across the entire card while hue sweeps 136°.

Two regimes:

| Regime | L span | Used for |
|---|---|---|
| **Flat-light** | 50–65 (span ~15) | Luminous, saturated, "lit from within". Sunset panels, Flows card. |
| **Deep-well** | 10–75 (span ~60) | Dramatic, photographic depth. Agents BG, Government card, Expressive mode. |

Pick one deliberately. Mixing them — a flat field with one small dark patch — reads as a mistake rather than a composition.

**If the image looks washed out, raise saturation and widen the hue arc. Do not reach for lightness contrast first.** Lightness contrast is what makes these look like stock gradients.

## 15. Law Four — Blur Beyond Reason

> **The smallest feature is larger than a third of the frame.**

Measured rate of change, averaged across the frame:

| Reference | Mean ΔL per 11% of frame | Mean ΔS per 11% of frame |
|---|---|---|
| Agents BG | 4.8 | 2.2 |
| NVIDIA BG | 3.9 | 8.1 |
| Sunset | 7.2 | 23 |

Roughly **0.4 lightness points per 1% of frame width.** Traversing the full tonal range takes 60–100% of the frame.

Practical targets:

- Blob radius: **50–80% of the frame's smaller dimension.**
- Gaussian blur, if you blur a rendered composition: **σ ≈ 8–15% of frame width** (e.g. 100–180px on a 1200px frame).
- Number of distinct features a viewer can point at: **2 to 4.** If you can count five, it is too busy.

Blur hard enough that you cannot tell how the image was made. If a viewer can identify "that's three radial gradients," the blur is insufficient.

**Blur at this scale produces long 1/255 plateaus, which band on 8-bit displays.** The grain layer of Part III is what dithers them. This is a structural reason the noise exists, not just a texture preference — see §26.

## 16. Implementation

### 16.1 CSS — layered radial gradients

The most direct approach. Stack oversized radial gradients, warm core last (on top), on a base linear gradient:

```css
.atmos {
  position: relative;
  isolation: isolate;
  background:
    /* warm core — the light source, saturated, on top */
    radial-gradient(90% 70% at 28% 88%, #fa9d2c 0%, #f9783a 38%, transparent 72%),
    /* mid rose — the hue-arc bridge */
    radial-gradient(110% 80% at 62% 72%, #c84a46 0%, transparent 68%),
    /* deep well */
    radial-gradient(85% 75% at 92% 96%, #3f1d2a 0%, transparent 70%),
    /* cool edge — muted, large, underneath */
    radial-gradient(120% 95% at 8% 6%, #8b98c0 0%, transparent 75%),
    /* base: the arc endpoints */
    linear-gradient(165deg, #9aa3c4 0%, #b06a74 45%, #e8803a 100%);
}
```

Rules that matter here:

- **Sizes exceed 100%.** `90% 70%`, `120% 95%` — the ellipses are bigger than the box, which is what keeps falloff off-screen.
- **`transparent` stops land at 65–75%**, not 100%. Stopping short keeps each blob's core readable while its edge stays invisible.
- **Positions sit near corners and edges** (`8% 6%`, `92% 96%`), not scattered mid-field.
- `transparent` in a gradient interpolates through transparent *black* in some engines, darkening the blend. If edges look dirty, use an explicit `rgb(... / 0)` of the same hue instead.

### 16.2 CSS — let the browser walk the hue arc

Modern CSS can do §12 directly:

```css
.arc {
  background: linear-gradient(
    165deg in oklch longer hue,
    oklch(72% 0.05 265),   /* muted periwinkle  — low chroma */
    oklch(70% 0.19  55)    /* vivid amber       — high chroma */
  );
}
```

`in oklch` keeps perceptual lightness steady across the sweep — which is exactly the flat-light regime of §14, for free. `longer hue` forces the 265° → 55° path the long way round, **through magenta**, per §12.1. Drop `longer` and you get the green route and a muddy result.

Chroma does the §13 work: `0.05` for the cool end, `0.19` for the warm end.

Use this as the base layer, then stack radial blobs from §16.1 on top for structure.

### 16.3 The blurred-blob approach (most faithful)

Closest to how the references actually look, because real blur is isotropic in a way gradient stops are not:

```html
<div class="field">
  <span class="blob blob--cool"></span>
  <span class="blob blob--core"></span>
  <span class="blob blob--deep"></span>
</div>
```

```css
.field {
  position: relative;
  overflow: hidden;          /* the crop in §10.1 */
  background: #b06a74;       /* mid-arc color, so gaps never show */
}
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);       /* σ ≈ 10% of frame width */
  will-change: filter;
}
/* oversized and overhanging the edges — see §10.1 */
.blob--cool { inset: -30% 40% 55% -30%; background: #8b98c0; }
.blob--core { inset:  35% 25% -25% -20%; background: #fa9d2c; }
.blob--deep { inset:  45% -25% -30% 35%; background: #3f1d2a; }
```

Negative `inset` values are the point — every blob hangs off at least one edge, so no blob's own falloff is visible inside the frame.

### 16.4 SVG — for exported assets

```xml
<svg viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="soften" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="120"/>   <!-- 10% of frame -->
    </filter>
  </defs>

  <!-- render oversized, crop via viewBox -->
  <g filter="url(#soften)" transform="translate(-150,-150) scale(1.25)">
    <rect width="1200" height="1200" fill="#b06a74"/>
    <ellipse cx="120"  cy="80"   rx="760" ry="620" fill="#8b98c0"/>
    <ellipse cx="340"  cy="1060" rx="700" ry="560" fill="#fa9d2c"/>
    <ellipse cx="1080" cy="1140" rx="560" ry="520" fill="#3f1d2a"/>
  </g>
</svg>
```

`stdDeviation` at ~10% of the viewBox, filter region expanded to `150%` so the blur is not clipped at its own edges.

### 16.5 Canvas

```js
// Oversize, draw, blur, then crop — §10.1
const pad = Math.round(w * 0.2);
const off = new OffscreenCanvas(w + pad * 2, h + pad * 2);
const c = off.getContext('2d');

c.fillStyle = '#b06a74';
c.fillRect(0, 0, off.width, off.height);

for (const b of blobs) {              // {x, y, r, color} in oversized space
  const g = c.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
  g.addColorStop(0,    b.color);
  g.addColorStop(0.7,  b.color + '00');
  g.addColorStop(1,    b.color + '00');
  c.fillStyle = g;
  c.fillRect(0, 0, off.width, off.height);
}

ctx.filter = `blur(${Math.round(w * 0.10)}px)`;
ctx.drawImage(off, -pad, -pad);       // crop back to frame
ctx.filter = 'none';
```

## 17. Measured Palettes

Lifted directly from the references. Each row is one zone, ordered along the hue arc.

### Slate → Plum (Agents BG) — deep-well regime

| Zone | Hex | HSL |
|---|---|---|
| Cool light field | `#b8c7cb` | 192 / 15 / 75 |
| Mid slate | `#8599b3` | 213 / 23 / 61 |
| Indigo | `#4d5b8c` | 231 / 24 / 45 |
| Violet shadow | `#41375b` | 256 / 24 / 28 |
| Plum well | `#3f1d2a` | 337 / 36 / 18 |

### Amber → Rust (NVIDIA BG) — subtle variant, saturation-driven

| Zone | Hex | HSL |
|---|---|---|
| Amber highlight | `#f3b129` | 40 / 89 / 55 |
| Orange core | `#eb820b` | 31 / 91 / 48 |
| Rust | `#953814` | 16 / 76 / 33 |
| Warm shadow | `#6e4c2c` | 29 / 42 / 30 |
| Neutral shadow | `#4c483e` | 42 / 10 / 27 |

### Periwinkle → Orange (Sunset) — flat-light regime

| Zone | Hex | HSL |
|---|---|---|
| Periwinkle | `#8b98c0` | 225 / 29 / 64 |
| Mauve | `#9c7c96` | 311 / 13 / 54 |
| Salmon | `#db7869` | 7 / 61 / 63 |
| Crimson | `#b34148` | 356 / 46 / 47 |
| Vivid orange | `#fa9d2c` | 32 / 95 / 57 |

### Lavender → Orange (Flows card) — flat-light, vertical split

| Zone | Hex | HSL |
|---|---|---|
| Lavender | `#928caf` | 250 / 17 / 61 |
| Mauve | `#a085a0` | 300 / 12 / 57 |
| Dusty rose | `#bb7a79` | 353 / 27 / 60 |
| Orange | `#ef934a` | 26 / 83 / 61 |

### Slate → Maroon (Government card) — deep-well, vertical split

| Zone | Hex | HSL |
|---|---|---|
| Slate | `#7b919c` | 200 / 14 / 54 |
| Amber | `#eeba70` | 35 / 78 / 68 |
| Rust | `#b55234` | 11 / 53 / 39 |
| Deep maroon | `#261015` | 346 / 40 / 10 |

### Pale blue → Forest (Expressive mode) — cool arc through green

| Zone | Hex | HSL |
|---|---|---|
| Pale blue | `#abbdc2` | 192 / 15 / 72 |
| Olive | `#9ca78f` | 87 / 11 / 60 |
| Moss | `#5d693e` | 76 / 25 / 32 |
| Forest | `#1f3618` | 106 / 38 / 15 |

## 18. Variants Observed

- **Monochrome-warm** (NVIDIA): hue arc narrows to ~25°, and *saturation* carries the contrast instead — S 6% to 92% in one frame. Use when a brand color must stay recognizable.
- **Grayscale** (Building Agents card): the same recipe with chroma zeroed. The blob composition and blur scale alone still read as atmospheric. A good test — if your composition fails in grayscale, it was leaning on hue to hide weak structure.
- **With line overlay** (Government card): a thin white contour-grid at very low opacity sits on top. The gradient underneath is unchanged; do not compensate for the overlay by flattening the field.
- **With bloom** (Sunset panel 3): one near-white hot spot (`#f1d4c2`, L 85) placed off-center. Keep it to a single bloom and keep it off-center.

## 19. Construction Recipe

1. **Pick the regime** — flat-light (§14) or deep-well. This decides everything downstream.
2. **Pick two arc endpoints** — one cool and muted (S 10–30%), one warm and vivid (S 60–100%).
3. **Choose the arc direction** — through magenta for warm compositions. Confirm the midpoint hue is one you want in the frame.
4. **Sample 3–5 zone colors along the arc**, keeping lightness per §14.
5. **Place 2–4 blobs**, each 50–80% of the frame, anchored near corners and overhanging the edges.
6. **Render 120–140% oversized, blur at σ ≈ 10% of frame width, crop.**
7. **Add grain** — Part III.
8. **Squint at it.** You should see 2–4 soft masses and no construction.

---

# Part III — Noise & Text Backdrop

## 20. Purpose

Use this technique to create premium, textured surfaces. It consists of:

- A background visual — the Part II atmospheric gradient, or a background image.
- A subtle tiled noise texture layered over it.
- A dark gradient **only when needed** behind text to improve readability.
- Text positioned naturally over the composition.

**Scope rule:** this part does not define the background artwork. That is Part II. The gradient described here is only the text readability/backdrop gradient (§23–§25).

### 20.1 isolation: isolate

The containing component uses `isolation: isolate` (see §0). This creates an isolated stacking/compositing context for the blend mode, and prevents the noise layer from unexpectedly blending with elements outside the card.

## 21. The Background Layer

The background is the base visual — either a Part II gradient field, or an image:

```css
.card__background {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  z-index: -3;
}
```

Do not add a background-image gradient here as part of Part III.

## 22. The Noise Layer

### 22.1 Assets

Use the provided noise assets, which are the same texture in two formats:

```
noise.png
noise.avif
```

| Format | Role |
|---|---|
| **PNG** | The lossless fallback. Preserves the texture accurately, broad browser support. |
| **AVIF** | The optimized version. Significantly smaller file size at the same visual appearance. |

Use AVIF when supported and PNG as the fallback, via `image-set()`. Always declare a plain `url()` fallback on the line above, since `image-set()` is unsupported in older engines and a lone declaration there leaves no grain at all.

### 22.2 What the asset actually is

**Measured, 256×256: the texture is pure black pixels (`rgb(0,0,0)`) at varying alpha, mean ≈ 0.40. It is not a grey noise image.**

This single fact decides the blend mode, and getting it wrong is why grain goes invisible. `overlay` composites a black source against a light base as roughly:

```
result ≈ 1 − 2 × (1 − base)
```

On an eggshell canvas (`#fdfcfc`, base ≈ 0.99) that is about a **2% shift — at any opacity.** Raising opacity does nothing; the layer is mathematically near-inert. Against a mid-tone base (≈ 0.5) the same blend resolves toward black and bites hard.

So one blend mode cannot serve every surface. Match the mode to the base tone:

| Surface | Base tone | Blend | Why |
|---|---|---|---|
| **Atmospheric field / photo** | mid-tone | `overlay` | The documented behaviour (§22.4). Integrates into the artwork. |
| **Light page canvas** | near-white | `multiply` | `overlay` is inert here. `multiply` darkens by the grain and registers. |
| **Dark page canvas** | near-black | `screen` + `filter: invert(1)` | Black grain on a near-black canvas is equally invisible. Invert the texture to white, then screen it. |

### 22.3 Values

These are the shipped values, arrived at by eye against the references. Treat them as the starting point rather than re-deriving them.

| Token | Value | Applies to |
|---|---|---|
| `background-size` | **`128px`** | atmospheric fields |
| `opacity` | **`0.30`** | atmospheric fields, `overlay` blend |

```css
:root {
  --noise-tile: 128px;
  --noise-opacity: 0.3;   /* fields — overlay */
}
```

**Grain belongs to the fields, not the page.** A page-wide fixed overlay is
tempting but earns little: on a near-white or near-black canvas the only modes
that register are `multiply`/`screen` (§22.2), and at the low opacity those
need in order not to cast the page grey, the contribution is small. It also
costs a full-viewport compositing layer on every scroll. Put the grain on the
surfaces that are mid-tone enough to carry it.

#### Combining layers — they add in quadrature, not linearly

If two grain layers are stacked (say a field layer and a page layer), their
textures are sampled at different origins, so the perturbations are
*independent* and the resulting grain is:

```
o_effective = sqrt(o₁² + o₂²)
```

Worked example from this system: a field at `overlay 0.28` under a page layer
at `multiply 0.10` gives `sqrt(0.28² + 0.10²) ≈ 0.2994`. Dropping the page
layer and raising the field to **0.30** reproduces it exactly. Note how little
the second layer was worth — only ~6% of the total — because quadrature
penalises the weaker layer. Intuition says 0.28 + 0.10 = 0.38; that is wrong by
a wide margin, and stacking to reach a target will always overshoot.

Removing a `multiply` layer also removes its flat darkening, so the surface
below gets roughly `mean_alpha × opacity` lighter (~1.6% here). That is a tone
shift, not a grain shift — correct it on the base colour if it matters, not
with grain opacity.

### 22.4 The field layer

Grain over an atmospheric gradient or image:

```css
.card__noise {
  position: absolute;
  inset: 0;

  background-image: url("/noise.png");
  background-image: image-set(
    url("/noise.avif") type("image/avif"),
    url("/noise.png") type("image/png")
  );

  background-size: var(--noise-tile);   /* 128px */

  mix-blend-mode: overlay;

  opacity: var(--noise-opacity);        /* 0.30 */

  pointer-events: none;

  z-index: -2;
}
```

### 22.5 No page-wide layer

Do not ship a fixed, full-viewport grain overlay. See §22.3 — on a near-white or
near-black canvas the blend modes that register have to run at an opacity so low
that the contribution is marginal, and it costs a full-screen compositing layer
on every scroll. Flat UI surfaces (cards, bands, panels) carry no grain in this
system; texture is a property of the atmospheric fields.

If a flat surface genuinely needs tooth, give that element its own `::after`
rather than reaching for a global layer.

### 22.6 Size and strength are separate dials

The most common tuning mistake is reaching for opacity when the complaint is about grain *character*. They are independent:

- **`background-size` sets grain size.** The source is 256×256, so rendering at 256px is 1:1 — one source pixel per screen pixel, which reads as coarse, harsh speckle. **128px** puts each grain at half a pixel and reads as fine film grain. Smaller tile = finer grain.
- **`opacity` sets grain strength**, and nothing else.

| Symptom | Dial |
|---|---|
| "Too harsh / too chunky / too speckly" | lower `background-size` (toward 96–128px) |
| "Can't see it at all" | raise `opacity` — **and check the blend mode against §22.2 first** |
| "Looks like a layer sitting on top" | wrong blend mode for the base tone (§22.2) |
| "Washes the page grey" | `multiply` opacity too high on a light canvas; keep it ≤ 0.12 |

**Do not stretch the noise image to the dimensions of the card.** Tile it — that is what lets a 256×256 file cover any surface.

### 22.7 Opacity reference

Noise should be subtle. The viewer should **feel** the texture rather than notice a pattern.

| Surface | Range | Shipped |
|---|---|---|
| Atmospheric field (`overlay`) | 0.20 – 0.35 | **0.30** |

If you ever do grain a near-white surface directly, `multiply` has to stay at or
below ~0.12 — past that it stops reading as grain and starts reading as a grey
cast, because it acts on the canvas directly where `overlay` on a mid-tone is
self-limiting.

## 23. The Text-Backdrop Gradient

This gradient exists **only to improve text readability**. It sits between the noise/background and the text, at `z-index: -1`.

It should not look like a rectangular black box. It should fade naturally into the image. The purpose is readability, not decoration.

### 23.1 Position follows the text

| Text position | Backdrop |
|---|---|
| Bottom | Dark gradient behind the bottom text, fading upward |
| Top | Dark gradient behind the top text, fading downward |
| Centered | **No gradient by default** |

The dark portion is always closest to the text and fades away from it.

### 23.2 When text is at the bottom

```css
.text-backdrop {
  position: absolute;
  left: -32px;
  right: -32px;
  bottom: -24px;

  height: 60%;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );

  z-index: -1;
}
```

### 23.3 When text is at the top

Reverse the direction:

```css
.text-backdrop {
  position: absolute;
  left: -32px;
  right: -32px;
  top: -24px;

  height: 60%;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );

  z-index: -1;
}
```

### 23.4 When text is centered

Do not automatically add a dark text backdrop. Start with none:

```css
.text-backdrop {
  display: none;
}
```

The background and noise should remain visible behind the text. Only introduce a gradient if the actual image makes the text difficult to read. The goal is to avoid unnecessarily covering the center of the artwork with a dark overlay.

## 24. The Gradient Must Extend Beyond the Text

Do not tightly wrap the gradient around the text element.

**Bad:**

```css
background: rgba(0, 0, 0, 0.5);
```

This creates a visible dark rectangle. Instead, bleed the gradient past the text on every side and let it fade to transparency:

```css
left: -32px;
right: -32px;
bottom: -24px;
```

The result should feel like the image naturally becomes darker behind the text.

## 25. Gradient Falloff Style

The reference markup uses a smooth gradient with multiple opacity stops rather than a simple abrupt dark-to-transparent transition. Conceptually:

```css
background: linear-gradient(
  to top,
  rgba(0, 0, 0, 0.5),
  rgba(0, 0, 0, 0)
);
```

For most implementations this simpler two-stop gradient is sufficient. If a design requires a more controlled, cinematic falloff, use multiple stops — but **do not add multiple stops merely for complexity.**

## 26. Noise and Banding

Beyond texture, the grain layer has a structural job: the Part II blur produces tonal plateaus hundreds of pixels wide, which band visibly on 8-bit displays. The noise dithers them.

Consequences:
- A Part II field shipped **without** grain will band on large displays.
- If you must ship without the noise layer, dither the gradient at export instead: ±1/255 of uniform random per pixel.
- Raising the gradient's amplitude does not fix banding — it just produces more, equally visible, bands.
- Grain only dithers where it is actually visible. A page-level layer in a blend mode that is inert against the canvas (§22.2) contributes nothing, so check the field's own grain is present rather than relying on a global overlay.

---

# Part IV — Composition

## 27. The Complete Base Pattern

All three parts, assembled. This is the default implementation of the textured card.

```html
<div class="card">
  <img
    src="/images/background.webp"
    alt=""
    class="card__background"
  />

  <div class="card__noise"></div>

  <div class="card__content">
    <div class="card__text-backdrop"></div>

    <div class="card__text">
      Your text goes here
    </div>
  </div>
</div>
```

```css
/* §0 — the shared container */
.card {
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

/* Part II — the background artwork (image, or a gradient field per §16) */
.card__background {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  z-index: -3;
}

/* Part III §22 — the grain */
.card__noise {
  position: absolute;
  inset: 0;

  background-image: url("/noise.png");
  background-image: image-set(
    url("/noise.avif") type("image/avif"),
    url("/noise.png") type("image/png")
  );

  background-size: 128px;

  mix-blend-mode: overlay;   /* mid-tone base — see §22.2 */

  opacity: 0.3;

  pointer-events: none;

  z-index: -2;
}

.card__content {
  position: relative;
  z-index: 0;
}

/* Part III §23 — readability scrim, only where type needs it */
.card__text-backdrop {
  position: absolute;
  left: -32px;
  right: -32px;
  bottom: -24px;

  height: 60%;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );

  z-index: -1;
}

/* Part I — the type */
.card__text {
  position: relative;
  color: white;
}
```

To use a generated gradient instead of an image, replace `.card__background` with the `.field` of §16.3 or the `.atmos` of §16.1, keeping the same `z-index: -3`.

## 28. Reference Compositions

### Omnichannel Agents

The primary reference for the technique. Uses a background similar to `Agents-BG.webp` — the Slate → Plum palette of §17, deep-well regime, diagonal fall arrangement (§11.1).

```
Background image (atmospheric gradient)
+
Noise texture
+
Dark lower text backdrop
+
White text
```

The text sits toward the bottom of the card:

> **Omnichannel agents**
> Agents listen, read and interact just like humans would across phone, chat, email and WhatsApp.

The dark gradient is positioned toward the bottom so the white typography remains readable against the background.

### NVIDIA ACE

Uses `nvida-bg.webp` — the Amber → Rust palette of §17, the monochrome-warm variant (§18) with an intruding desaturated band (§11.1). The card holds the NVIDIA logo toward the top and the article title toward the bottom:

> ElevenLabs showcases multilingual AI voice technology with NVIDIA ACE at Computex

```
NVIDIA background image
+
text-backdrop gradient near bottom
+
white text
```

The backdrop gradient does not replace or define the background artwork. It exists specifically to provide contrast for the bottom typography.

## 29. Final Mental Model

```
ATMOSPHERIC GRADIENT
  +
SUBTLE NOISE
  +
OPTIONAL TEXT CONTRAST
  =
TEXTURED CARD
```

- The gradient is the artwork, and remains the primary visual.
- The noise makes it feel tactile.
- The text backdrop makes typography readable, and appears only where the typography needs additional contrast.

---

# Do's and Don'ts

## Foundations (Part I)

### Do
- Use Waldenburg at weight 300 for all display headlines 32px+; never apply bold or semibold — the whisper-weight is the brand's signature restraint.
- Set all buttons, tags, and tab pills to `{rounded.pill}` (9999px); the pill shape is non-negotiable and defines the system's most recognizable component.
- Reserve the ink fill (`{colors.primary}` / `{colors.ink-pure}`) for primary CTAs, paired with an outline button as the only button hierarchy.
- Apply -0.02em letter-spacing on Waldenburg headlines at 32px+ and +0.01em tracking on Inter body at 14–16px — the opposite tracking directions create a deliberate display/body contrast.
- Reserve `{colors.violet-spark}` and `{colors.ember-orange}` exclusively for product visuals (audio spheres, product icons, illustration accents).
- Use atmospheric gradient orbs (mint/peach/lavender/sky/rose) as decoration only.
- Use 1px hairline borders (`{colors.stone}` / `{colors.hairline}`) for section separation; prefer borders over drop shadows for the flat editorial feel.
- Stack surfaces as eggshell → taupe → stone; warmth is the system's defining tonal quality.

### Don't
- Don't bold or semibold Waldenburg — the weight-300 whisper is the brand's most distinctive choice, and bolding shifts the voice from editorial to consumer-marketing.
- Don't introduce a saturated brand action color. The ink pill is the only CTA color.
- Don't use violet, ember orange, or the gradient orbs for buttons, links, badges, text colors, component backgrounds, or any interactive UI element — they are decoration-only.
- Don't introduce new accent colors beyond the two product-visual sparks; the palette is intentionally ~97% achromatic.
- Don't add heavy drop shadows; the system uses near-invisible 1px shadows only — no blurred elevation effects.
- Don't use sharp corners (`{rounded.none}`, or anything under 8px) on cards, feature panels, or CTAs. The 20–24px card radii and pill buttons are signatures.
- Don't use pure white #ffffff for page backgrounds; use a warm off-white to maintain the paper-like canvas.
- Don't drop body Inter to weight 300 to match Waldenburg — body stays at 400/500 for legibility.
- Don't extract a CTA color from a third-party widget (cookie consent, OneTrust). The brand's CTA color is what appears on actual product CTAs.

## Gradient (Part II)

### Do
- Sweep the hue 100–150° along a single continuous arc (or ~25° with an 80-point saturation span for the subtle variant).
- Take the magenta route for warm compositions; verify the midpoint hue is one you want in the frame.
- Keep cool zones at S 10–30% and warm zones at S 60–100%.
- Choose a lightness regime deliberately — flat (span ≤ 15) or deep-well (span ~60).
- Make every blob ≥ 50% of the frame's smaller dimension, anchored near corners and overhanging the edges.
- Render 120–140% oversized, blur, then crop.

### Don't
- Don't hold a single hue and vary only brightness — that is what makes it read as a CSS gradient.
- Don't route blue→orange through green; it produces mud.
- Don't build the deep well by darkening the base hue at constant saturation. Desaturate toward neutral, or go maroon.
- Don't reach for lightness contrast when the image looks washed out — raise saturation and widen the arc first.
- Don't use more than 4 countable features.
- Don't ship a gradient field without grain or export dithering.

## Noise & Text Backdrop (Part III)

### Do
- Treat the background artwork as the primary visual.
- Add the noise texture as a subtle visual treatment.
- Use `noise.avif` with `noise.png` as fallback, via `image-set()`.
- Use `mix-blend-mode: overlay`.
- Put grain on the atmospheric fields at a `128px` tile and `0.30` opacity with `overlay`, then tune by eye. Do not add a page-wide layer (§22.3).
- Use `isolation: isolate` on the containing component.
- Add a dark gradient behind bottom text when text is near the bottom, and behind top text when it is near the top.
- Make the text gradient larger than the text itself and let it fade naturally into the image.
- Keep the noise subtle enough that it supports the image rather than becoming the subject.

### Don't
- Don't stretch the noise texture to the dimensions of the card — tile it.
- Don't automatically use high noise opacity.
- Don't add a dark backdrop by default when text is centered.
- Don't create a visible rectangular dark box behind text.
- Don't tightly wrap the backdrop gradient around the text element.
- Don't add multiple gradient stops merely for complexity.
- Don't use Part III to define gradients for the background artwork itself — that is Part II.

---

# Responsive Behavior

## Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero h1 64→32px; feature cards 1-up; nav hamburger; gradient orbs shrink. |
| Tablet | 640–1024px | Hero h1 48px; feature cards 2-up. |
| Desktop | 1024–1280px | Full hero h1 64px; feature cards 3-up. |
| Wide | > 1280px | Content caps at 1200–1280px. |

## Touch Targets
- Primary pill at 40px height — at WCAG AA, padded for AAA.
- Voice icon circles 32px — padded row creates an effective 48px tap zone.

## Collapsing Strategy
- Top nav switches to hamburger below 768px.
- Feature grid: 3-up → 2-up → 1-up.
- Gradient orbs reduce diameter at every breakpoint but never disappear.

## Atmospheric Fields at Small Sizes
- Blur σ is a *percentage* of frame width, so it scales automatically. Do not hard-code a pixel blur that was tuned at desktop width.
- Noise `background-size` stays at 128px regardless of viewport — it is a texture, not a layout value.
- Grain scales with the fields it lives on; there is no page layer to reconsider per breakpoint.

---

# Checklists

## Gradient

- [ ] Hue sweeps 100–150° (or ~25° with an 80-point saturation span for the subtle variant)
- [ ] The arc takes the intended route — magenta, not green, for warm compositions
- [ ] Cool zones sit at S 10–30%; warm zones at S 60–100%
- [ ] Lightness regime chosen deliberately — flat (span ≤ 15) or deep-well (span ~60), not accidentally in between
- [ ] Deep well either desaturates toward neutral or goes maroon — it is not the base hue darkened
- [ ] Every blob is ≥ 50% of the frame's smaller dimension
- [ ] Rendered oversized and cropped — no soft halo at the border
- [ ] 2–4 countable features, not 5+
- [ ] Still reads as atmospheric when converted to grayscale
- [ ] Cannot tell from looking at it how it was made

## Noise & Text

- [ ] Container has `position: relative`, `isolation: isolate`, `overflow: hidden`
- [ ] Noise uses `image-set()` with AVIF first, PNG fallback
- [ ] `background-size: 128px` and the texture repeats — not stretched
- [ ] Blend mode matches the base tone (§22.2): `overlay` on fields, `multiply` on a light page, `screen` + `invert(1)` on a dark page
- [ ] Noise z-index sits above the background and below the content
- [ ] Text backdrop present only where text actually needs contrast
- [ ] Backdrop direction matches text position; centered text has none by default
- [ ] Backdrop bleeds past the text on every side and fades to transparent
- [ ] No visible dark rectangle anywhere

## Type & Chrome

- [ ] Display is Waldenburg 300 with -0.02em tracking at 32px+
- [ ] Body is Inter 400/500 with +0.01em tracking at 14–16px
- [ ] Every CTA and badge is a 9999px pill
- [ ] No accent color appears on any interactive element
- [ ] Borders are 1px hairlines, not shadows

---

# Failure Modes

| Symptom | Cause |
|---|---|
| "It looks like a CSS gradient" | Hue arc too short. Widen to 100°+. §12 |
| Muddy brown transition | Arc went through green instead of magenta. §12.1 |
| Flat and lifeless | Saturation too uniform. Cool zones must drop under 30%, warm must exceed 75%. §13 |
| Looks synthetic / plasticky | Cool zone oversaturated, or deep well is just the base hue darkened. §13.1 |
| Washed out | Reached for lightness contrast instead of hue+saturation. §14 |
| Can see the construction | Blur insufficient, or too many blobs. §15 |
| Soft halo around the edges | Not rendered oversized before blurring. §10.1 |
| Banding in large flat areas | Grain layer missing, or export not dithered. §26 |
| Busy / noisy composition | More than 4 features. Merge or remove. §15 |
| Noise reads as an obvious overlay | Missing blend mode, or opacity too high. §22.2, §22.7 |
| Noise invisible however high the opacity | `overlay` used on a near-white or near-black canvas, where a black-alpha texture is inert. Switch mode per §22.2. |
| Noise too harsh / chunky | `background-size` at the 256px source size (1:1). Drop to 128px — that is the grain-*size* dial, not opacity. §22.6 |
| Page looks grey-cast | `multiply` opacity above ~0.12 on a light canvas. §22.7 |
| Grain weaker than expected after merging layers | Stacked grain adds in quadrature, `sqrt(o₁²+o₂²)`, not linearly. §22.3 |
| Noise blends with things outside the card | Missing `isolation: isolate` on the container. §20.1 |
| Noise looks smeared | Texture stretched instead of tiled. §22.6 |
| Visible dark rectangle behind text | Backdrop wrapped tightly to the text, or a flat fill used. §24 |
| Center of the artwork looks covered | Added a backdrop to centered text by default. §23.4 |
| Brand feels consumer-marketing, not editorial | Display was bolded above weight 300. §4 |

---

# Agent Prompt Guide

**Quick Color Reference**
- text: `#000000` / `#0c0a09` (primary), `#777169` / `#4e4e4e` (body), `#a59f97` (caption)
- background: `#fdfcfc` / `#f5f5f5` (canvas), `#f5f3f1` / `#ffffff` (card surface)
- border: `#ebe8e4` / `#e7e5e4` (hairline), `#e5e5e5` (button border)
- accent: `#0447ff` (violet spark — product visuals only)
- accent: `#ff4704` (ember orange — product visuals only)
- primary action: `#000000` / `#292524` (filled action)

**Example Component Prompts**

1. Create a hero headline: "Bringing technology to life" at 48px Waldenburg weight 300, color #000000, letter-spacing -0.96px, line-height 1.08. Left-aligned on #fdfcfc canvas.

2. Create a primary button: "Sign up" — 9999px radius, #000000 fill, white text, Inter 14px/500, 16px horizontal padding, 1px solid #e5e5e5 border.

3. Create a secondary button: "Contact sales" — 9999px radius, #fdfcfc fill, #000000 text, Inter 14px/500, 14px horizontal padding, 1px solid #e5e5e5 border.

4. Create a feature card: #f5f3f1 fill, 20px radius, 32px horizontal padding, no shadow. Title at 36px Waldenburg 300, description at 16px Inter 400 in #777169.

5. Create an audio sphere visual: 200px circle with radial-gradient blending #0447ff, #ff4704, and pink, no hard edge. Center play icon in white circle 48px diameter.

6. Create an atmospheric card: 24px radius, isolation isolate, overflow hidden. Background is a deep-well gradient field from #b8c7cb through #4d5b8c to #3f1d2a, blobs at 60% frame radius, blurred at 10% of width, rendered oversized and cropped. Noise overlay at 128px tile, overlay blend, 0.30 opacity. Bottom text backdrop fading up from rgba(0,0,0,0.5). White Inter 16px/400 copy at the bottom.

---

# Similar Brands

- **Linear** — Same whisper-weight display headlines paired with monochrome UI and pill-shaped buttons; both achieve authority through typographic restraint rather than color.
- **Vercel** — Same near-white warm canvas with stark black text and pill buttons; both use minimal color and let typography carry the brand.
- **Stripe** — Same editorial restraint with hairline borders, generous whitespace, and accent colors reserved for illustrations rather than UI chrome.
- **Notion** — Same warm off-white palette with taupe secondary surfaces and pill-shaped interactive elements; both feel like paper rather than glass.
- **Framer** — Same Bauhaus-influenced minimalism with whisper-weight headlines and a ~97% achromatic palette that lets single accent colors feel significant.

---

# Quick Start

## CSS Custom Properties

```css
:root {
  /* Colors */
  --color-eggshell: #fdfcfc;
  --color-canvas: #f5f5f5;
  --color-canvas-soft: #fafafa;
  --color-warm-taupe: #f5f3f1;
  --color-surface-card: #ffffff;
  --color-surface-strong: #f0efed;
  --color-surface-dark: #0c0a09;
  --color-surface-dark-elevated: #1c1917;
  --color-stone: #ebe8e4;
  --color-hairline: #e7e5e4;
  --color-hairline-soft: #f0efed;
  --color-hairline-strong: #d6d3d1;
  --color-border-button: #e5e5e5;
  --color-ink: #000000;
  --color-ink-warm: #0c0a09;
  --color-primary: #292524;
  --color-graphite: #44403b;
  --color-body: #4e4e4e;
  --color-smoke: #777169;
  --color-ash: #a59f97;
  --color-muted-soft: #a8a29e;
  --color-violet-spark: #0447ff;
  --color-ember-orange: #ff4704;
  --color-gradient-mint: #a7e5d3;
  --color-gradient-peach: #f4c5a8;
  --color-gradient-lavender: #c8b8e0;
  --color-gradient-sky: #a8c8e8;
  --color-gradient-rose: #e8b8c4;
  --color-success: #16a34a;
  --color-error: #dc2626;

  /* Typography — Font Families */
  --font-waldenburg: 'Waldenburg', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.6;
  --text-mono-sm: 13px;
  --leading-mono-sm: 1.69;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.14px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.6;
  --text-body-lg: 20px;
  --leading-body-lg: 1.35;
  --text-display-sm: 24px;
  --leading-display-sm: 1.2;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.13;
  --tracking-heading-sm: -0.64px;
  --text-heading: 36px;
  --leading-heading: 1.17;
  --tracking-heading: -0.72px;
  --text-display: 48px;
  --leading-display: 1.08;
  --tracking-display: -0.96px;
  --text-display-mega: 64px;
  --leading-display-mega: 1.05;
  --tracking-display-mega: -1.92px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-96: 96px;
  --spacing-160: 160px;

  /* Layout */
  --page-max-width: 1280px;
  --content-max-width: 1200px;
  --outer-gutter: 64px;
  --section-gap: 96px;
  --card-padding: 32px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-sm-2: 6px;
  --radius-lg: 8px;
  --radius-lg-2: 10px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-tags: 9999px;
  --radius-buttons: 9999px;
  --radius-inputs: 4px;
  --radius-cards: 20px;
  --radius-large-cards: 24px;
  --radius-small-elements: 4px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-subtle-2: rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset;
  --shadow-subtle-3: rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset;
  --shadow-subtle-4: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset;
  --shadow-subtle-5: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-subtle-6: rgba(255, 255, 255, 0.6) 0px 0px 0px 1px inset;
  --shadow-subtle-7: rgb(235, 232, 228) 0px 0px 0px 0.5px inset;
  --shadow-soft-drop: 0 4px 16px rgba(0, 0, 0, 0.04);

  /* Surfaces */
  --surface-eggshell-canvas: #fdfcfc;
  --surface-warm-taupe: #f5f3f1;
  --surface-stone-plate: #ebe8e4;

  /* Atmospheric gradient — Slate → Plum (deep-well) */
  --atmos-slate-1: #b8c7cb;
  --atmos-slate-2: #8599b3;
  --atmos-slate-3: #4d5b8c;
  --atmos-slate-4: #41375b;
  --atmos-slate-5: #3f1d2a;

  /* Atmospheric gradient — Periwinkle → Orange (flat-light) */
  --atmos-sunset-1: #8b98c0;
  --atmos-sunset-2: #9c7c96;
  --atmos-sunset-3: #db7869;
  --atmos-sunset-4: #b34148;
  --atmos-sunset-5: #fa9d2c;

  /* Atmospheric gradient — Amber → Rust (saturation-driven) */
  --atmos-amber-1: #f3b129;
  --atmos-amber-2: #eb820b;
  --atmos-amber-3: #953814;
  --atmos-amber-4: #6e4c2c;
  --atmos-amber-5: #4c483e;

  /* Noise */
  --noise-tile: 128px;
  --noise-opacity: 0.3;
  --noise-blend: overlay;

  /* Text backdrop */
  --backdrop-height: 60%;
  --backdrop-bleed-x: -32px;
  --backdrop-bleed-y: -24px;
  --backdrop-start: rgba(0, 0, 0, 0.5);
  --backdrop-end: rgba(0, 0, 0, 0);
}
```

## Tailwind v4

```css
@theme {
  /* Colors */
  --color-eggshell: #fdfcfc;
  --color-canvas: #f5f5f5;
  --color-canvas-soft: #fafafa;
  --color-warm-taupe: #f5f3f1;
  --color-surface-card: #ffffff;
  --color-surface-strong: #f0efed;
  --color-surface-dark: #0c0a09;
  --color-surface-dark-elevated: #1c1917;
  --color-stone: #ebe8e4;
  --color-hairline: #e7e5e4;
  --color-hairline-strong: #d6d3d1;
  --color-border-button: #e5e5e5;
  --color-ink: #000000;
  --color-ink-warm: #0c0a09;
  --color-primary: #292524;
  --color-graphite: #44403b;
  --color-body: #4e4e4e;
  --color-smoke: #777169;
  --color-ash: #a59f97;
  --color-muted-soft: #a8a29e;
  --color-violet-spark: #0447ff;
  --color-ember-orange: #ff4704;
  --color-gradient-mint: #a7e5d3;
  --color-gradient-peach: #f4c5a8;
  --color-gradient-lavender: #c8b8e0;
  --color-gradient-sky: #a8c8e8;
  --color-gradient-rose: #e8b8c4;
  --color-success: #16a34a;
  --color-error: #dc2626;

  /* Typography */
  --font-waldenburg: 'Waldenburg', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.6;
  --text-mono-sm: 13px;
  --leading-mono-sm: 1.69;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.14px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.6;
  --text-body-lg: 20px;
  --leading-body-lg: 1.35;
  --text-display-sm: 24px;
  --leading-display-sm: 1.2;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.13;
  --tracking-heading-sm: -0.64px;
  --text-heading: 36px;
  --leading-heading: 1.17;
  --tracking-heading: -0.72px;
  --text-display: 48px;
  --leading-display: 1.08;
  --tracking-display: -0.96px;
  --text-display-mega: 64px;
  --leading-display-mega: 1.05;
  --tracking-display-mega: -1.92px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-96: 96px;
  --spacing-160: 160px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 10px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-subtle-2: rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset;
  --shadow-subtle-3: rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset;
  --shadow-subtle-4: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset;
  --shadow-subtle-5: rgba(0, 0, 0, 0.4) 0px 0px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-subtle-6: rgba(255, 255, 255, 0.6) 0px 0px 0px 1px inset;
  --shadow-subtle-7: rgb(235, 232, 228) 0px 0px 0px 0.5px inset;
  --shadow-soft-drop: 0 4px 16px rgba(0, 0, 0, 0.04);
}
```

---

# Iteration Guide

1. Focus on a single component at a time.
2. CTAs default to `{rounded.pill}`. Cards use 16–24px depending on which capture you follow — pick one and hold it.
3. Variants live as separate entries.
4. Use `{token.refs}` everywhere — never inline hex.
5. Hover state is not documented in any capture.
6. Waldenburg 300 for display, Inter 400/500 for body.
7. Gradient orbs and audio spheres stay scoped to atmospheric decoration.
8. When the two Part I captures disagree, consult **Source Reconciliation** (§2) and record which side the project chose.
9. Build the gradient (Part II) before tuning the noise (Part III) — grain tuned against a placeholder will be wrong.
10. Add the text backdrop last, and only if the type is actually hard to read.

---

# Known Gaps

- Waldenburg is a licensed typeface; Inter 300, Söhne Light, EB Garamond, and GT Sectra are documented substitutes.
- Animation timings (orb drift, waveform pulse, hero entrance) are out of scope.
- In-product surfaces (voice library editor, agent playground) are only partially captured via marketing mockups.
- Form validation states beyond focus are not visible on captured surfaces.
- Hover states are undocumented across all captures.
- The two Part I captures were taken at different times; canvas, ink, and card treatments differ (see §2).
- The noise asset files themselves (`noise.png`, `noise.avif`) are referenced but their generation is not documented — they are treated as supplied assets.
- Part II's blur targets are derived from mean rate-of-change; the Sunset reference is a 2×2 composite whose panel borders inflate its maximum values, so means were used rather than maxima.
