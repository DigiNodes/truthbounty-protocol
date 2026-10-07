# TruthBounty Frontend V2 Design Authority

These assets define hierarchy, composition and required regions. Implementation must follow the route, role, transaction-state, responsive and accessibility authority under `docs/ux-authority`.

## Brand foundation

- [Brand asset usage](./brand/README.md)
- [Brand, colour, typography and theme authority](../../docs/ux-authority/BRAND_FOUNDATION.md)

The brand foundation supersedes the purple/indigo palette shown in older prototype artifacts. Those artifacts remain composition references only until replaced through the new design batches.

## Frontend foundation

- [Foundation package and board index](./foundation/README.md)
- [Foundation authority](../../docs/ux-authority/FRONTEND_FOUNDATION_AUTHORITY.md)
- [Machine-readable CSS tokens](./foundation/tokens.css)
- [Tool-neutral design tokens](./foundation/tokens.json)

The foundation boards define reusable shells, navigation, primitives, canonical states and responsive/accessibility behaviour. They do not approve page-specific compositions.

## High-fidelity reference

- [Interactive responsive prototype](./prototype/index.html)
- [Prototype notes and boundaries](./prototype/README.md)
- [High-fidelity design direction](../../docs/ux-authority/HIGH_FIDELITY_DESIGN_DIRECTION.md)

The prototype is a design artifact, not production application code. Its data is illustrative and must not be copied into production as protocol truth.

## Low-fidelity foundations

- [Claimant dashboard](./claimant-dashboard.svg)
- [Verifier dashboard](./verifier-dashboard.svg)
- [Admin dashboard](./admin-dashboard.svg)
- [Claim detail](./claim-detail.svg)

## Interpretation

- Signal Cyan (`#22D3EE`) marks evidence input, focus and brand signal.
- Proof Blue (`#4F7CFF`) marks resolved output, primary action and active context.
- Bounty Gold (`#F5B942`) is reserved for rewards and staking.
- Amber marks pending, stale or attention-required state.
- Green is reserved for confirmed/finalized success.
- Every visual status also requires text and an accessible name.
- On mobile, the sidebar becomes a drawer and multi-column regions stack by documented priority.
- Where product or protocol authority is unresolved, use an explicit unavailable/boundary state rather than inventing behavior.
