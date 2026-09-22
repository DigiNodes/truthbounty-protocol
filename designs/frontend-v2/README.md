# TruthBounty Frontend V2 Design Authority

These assets define hierarchy, composition and required regions. Implementation must follow the route, role, transaction-state, responsive and accessibility authority under `docs/ux-authority`.

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

- Purple marks the primary action or active context.
- Amber marks pending, stale or attention-required state.
- Green is reserved for confirmed/finalized success.
- Every visual status also requires text and an accessible name.
- On mobile, the sidebar becomes a drawer and multi-column regions stack by documented priority.
- Where product or protocol authority is unresolved, use an explicit unavailable/boundary state rather than inventing behavior.
