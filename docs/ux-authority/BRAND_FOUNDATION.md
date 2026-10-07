# TruthBounty V2 Brand Foundation

**Authority:** Maintainers  
**Status:** Approved  
**Approved:** 2026-10-07  
**Direction:** Dark-first, accessible light theme supported  

## Identity

The primary mark is the **Evidence Shield**. Two independent evidence paths enter from the upper left and upper right, converge at a diamond verification junction, and resolve into one output stem. The negative space constructs the letter `T` without relying on a human, keyhole, coin, chain, gavel or generic checkmark metaphor.

The mark communicates evidence, convergence, verification, protection and accountable resolution. It must remain recognizable at 16 CSS pixels and functional in one colour.

## Logo usage

| Asset | Primary use |
|---|---|
| Colour glyph | Navigation, documentation and co-branding |
| Monochrome glyph | Restricted-colour contexts and status bars |
| Application icon | Favicons, PWA/mobile tiles and avatars |
| Dark landscape lockup | Ink Navy and dark photographic surfaces |
| Light landscape lockup | White and pale neutral surfaces |

Minimum clear space is the width of the central output stem on every side. Do not display the glyph below 16 px. Use the full lockup only when the wordmark remains comfortably legible.

## Core colour tokens

| Token | Value | Purpose |
|---|---:|---|
| `signal-cyan` | `#22D3EE` | Evidence input, focus and primary brand signal |
| `proof-blue` | `#4F7CFF` | Resolved output, primary action and active context |
| `ink-navy` | `#070A12` | Default dark canvas |
| `deep-slate` | `#101522` | Dark surfaces, navigation and cards |
| `frost-white` | `#F7F9FC` | Primary text and light canvas |
| `bounty-gold` | `#F5B942` | Rewards and staking only |

Signal Cyan and Proof Blue form the approved brand transition. Components must also work with either colour used alone. Purple and lavender are not part of the approved V2 identity.

## Semantic colour separation

- Green is reserved for confirmed or finalized success.
- Amber is reserved for pending, deadlines, projection lag and attention.
- Red is reserved for destructive actions, failures and critical risk.
- Bounty Gold is reserved for economic rewards and staking; it is not a general warning colour.
- No state may rely on colour alone; pair colour with text, iconography and an accessible name.

## Typography

### Geist Sans

Use for the wordmark, headings, navigation, controls and body copy.

- Wordmark and display: 800.
- Page headings: 700–800.
- Navigation and controls: 600–700.
- Body copy: 400–500.

### Geist Mono

Use only for hashes, addresses, transaction identifiers, timestamps when tabular alignment is required, manifests and protocol data. Do not use it for long-form copy.

Fallback stack: `Geist, Inter, ui-sans-serif, system-ui, sans-serif`.

## Theme direction

TruthBounty is dark-first. Ink Navy is the canvas, Deep Slate defines elevated surfaces, and colour is applied sparingly to actions, focus and protocol state. The interface should feel like a rigorous evidence workspace rather than a trading dashboard.

Light mode remains a fully supported accessible theme using Frost White as the canvas and Ink Navy as primary text. It is not a simple colour inversion: borders, elevations, muted text and semantic surfaces require dedicated tokens.

## Accessibility rules

- Target WCAG 2.2 AA contrast for text, controls and meaningful graphics.
- Visible focus indicators use Signal Cyan or Proof Blue with sufficient surrounding contrast.
- Never place gradient text in dense body copy or state labels.
- Preserve meaning in monochrome and forced-colour modes.
- Logo alt text is `TruthBounty` when the wordmark is absent; decorative duplicates use an empty alt value.

## Implementation boundary

This approved foundation establishes identity and theme direction only. It does not approve navigation, layouts, components, production UI, ABI/API behavior or illustrative prototype data. Foundation Approval is the next independent design gate.
