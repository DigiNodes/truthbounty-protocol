# Frontend Visual Foundations

**Authority:** Maintainers  
**Status:** Proposed implementation baseline; contributors may implement but may not redefine these semantics.

## Direction

TruthBounty uses a calm, evidence-first interface. Protocol status, uncertainty, and next actions take priority over decorative analytics. The current Geist typography, neutral surfaces, light/dark modes, and indigo accent are retained to reduce unnecessary churn.

## Token baseline

| Token | Light | Dark | Use |
|---|---|---|---|
| Canvas | white | near-black | Application background |
| Surface | white | dark neutral | Cards, panels, drawers |
| Border | light neutral | white/10% | Structural separation |
| Primary | `#5B5BF6` | `#7C7CF7` | Primary actions and active navigation |
| Success | semantic green | semantic green | Confirmed/finalized success only |
| Warning | semantic amber | semantic amber | Pending, projection lag, deadlines |
| Danger | semantic red | semantic red | Revert, destructive confirmation |
| Info | semantic blue | semantic blue | Neutral protocol information |

Exact accessible OKLCH values are implemented through tokens and must meet WCAG 2.2 AA. Hard-coded feature colors are migration targets, not new precedent.

## Typography

- Geist Sans remains the interface family.
- Geist Mono is reserved for hashes, addresses, block numbers, and code.
- Page title: 28–32 px desktop; 24–28 px mobile.
- Section title: 18–22 px.
- Body: minimum 16 px on mobile.
- Metadata may use 14 px when contrast remains sufficient.

## Spacing and density

- Base spacing unit: 4 px.
- Main content maximum width: 1440 px.
- Desktop shell: 256 px sidebar, 64 px topbar.
- Mobile: drawer navigation; no permanently collapsed icon rail.
- Cards use 16–24 px internal spacing.
- Dense operational tables must provide a mobile list/card representation.

## Data presentation

- Every metric shows its source and freshness when material.
- Charts supplement, never replace, exact status and accessible summaries.
- Claim phase, transaction state, and finality must use text plus icon; color alone is prohibited.
- Mock or unavailable data uses explicit empty/unavailable states.

## Motion

- Motion confirms spatial change or progress only.
- Respect reduced-motion settings.
- Never animate balances, confidence, or settlement in a way that implies certainty not present in canonical state.
