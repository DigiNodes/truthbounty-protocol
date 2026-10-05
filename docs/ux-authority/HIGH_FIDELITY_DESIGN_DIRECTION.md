# High-Fidelity Frontend Design Direction

**Authority:** Maintainers  
**Status:** Approved visual and interaction direction  
**Approved:** 2026-10-05  
**Implementation:** Reserved for bounded contributor issues; this document does not certify production UI

## Decision

TruthBounty V2 evolves the existing Geist, neutral-surface, indigo-accent application rather than replacing it with a disconnected shell. The interface is evidence-first: the next permitted action, canonical phase, deadline, freshness and uncertainty appear before decorative analytics.

The reference prototype lives in `designs/frontend-v2/prototype/`. Its values are illustrative and must never become production defaults or protocol truth.

## Preserve

- `MainLayout`, `Sidebar` and `Topbar` as shell boundaries.
- Geist Sans and Geist Mono.
- Token-based light and dark modes.
- 256 px desktop sidebar and 64 px topbar.
- Skip link, reduced-motion support, mobile drawer and pending-transaction visibility.
- Existing transaction reconciliation and wallet/account controls that conform to canonical state.

## Required corrections

| Current finding | Approved direction |
|---|---|
| Root aliases home, dashboard and claims | Adopt the canonical route contract and safe legacy redirects |
| Claim creation is duplicated | Every entry resolves to `/claims/new` |
| Generic dashboard mixes public/network and personal data | Role-aware `/dashboard` with next actions before analytics |
| Mock data can reach production components | Explicit loading, empty, unavailable, stale and error states |
| Mixed hard-coded colours and tokens | Semantic tokens and approved primitives |
| Mutation shell can imply unsupported networks | Pinned Optimism/EVM release context only |
| Placeholder settings/profile/community behavior remains | Canonical route or explicit unavailable state |
| Generic admin presentation | Operations, governance and guardian contexts with fail-closed authority |

## Visual language

### Tone

Calm, rigorous and operational. TruthBounty should feel like an evidence review workspace, not a speculative trading dashboard.

### Hierarchy

1. Identity, active context and task.
2. Required action, eligibility, deadline or degraded-state notice.
3. Up to four high-priority summary values.
4. Primary queue or journey status.
5. Supporting activity and analytics.

### Colour

- Primary indigo: `#5B5BF6` light / `#7C7CF7` dark.
- Neutrals carry most of the composition.
- Green means canonical success/finalized health only.
- Amber means pending, deadline, projection lag or attention.
- Red is reserved for destructive or failed states.
- Blue communicates neutral protocol information.
- Text and icons accompany every semantic colour.

### Approved component treatments

- role-aware shell and context selector;
- next-action and degraded-state notices;
- metric cards with source/freshness copy;
- claim lists and responsive queue cards;
- status badges and protocol timelines;
- evidence cards;
- bounded operations, governance and emergency panels;
- step-based claim creation and verification;
- transaction, wallet and network controls;
- empty, denied, unavailable and prototype-boundary states.

## Required screen library

The high-fidelity prototype must cover:

1. product entry and public claim exploration;
2. claimant dashboard and owned claims;
3. verifier queue and verification workspace;
4. operations, governance and guardian dashboards;
5. claim detail with dispute and settlement variants;
6. full claim-creation journey;
7. disputes and appeals;
8. rewards, reputation and withdrawals;
9. transaction center;
10. settings, session, wallet, chain and identity;
11. status, help and documentation;
12. loading, empty, error, denied, stale, offline, projection-lag and reorg states.

## Responsive behavior

- Desktop: persistent sidebar and task-oriented multi-column layouts.
- Tablet: single-column primary flow with secondary panels below.
- Mobile: focus-managed drawer, full-width primary actions, queue cards instead of compressed tables, and no horizontal workflow dependency.
- Touch targets are at least 44 by 44 CSS pixels.
- At 200% zoom every golden journey remains operable.

## Prototype boundaries

The prototype defines hierarchy, composition, navigation intent and responsive behavior. It does not define ABI/API payloads, verifier eligibility math, role hashes, addresses, reward math or production data. Unresolved authority renders as an explicit unavailable boundary.

## Contributor handoff order

1. recover and verify the frontend baseline;
2. finish evidence audits and acceptance matrices;
3. implement semantic tokens/primitives;
4. migrate the canonical shell and routes;
5. implement dashboards independently;
6. implement bounded journeys;
7. integrate pinned contract/API artifacts;
8. pass accessibility, responsive, contract and release gates.

No contributor issue is active until maintainers apply `Stellar Wave`.
