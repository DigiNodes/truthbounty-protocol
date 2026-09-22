# High-Fidelity Frontend Design Direction

**Authority:** Maintainers  
**Status:** Proposed canonical visual direction  
**Implementation:** Reserved for contributor issues; this document does not implement production UI

## Decision

TruthBounty V2 evolves the existing Geist, neutral-surface, indigo-accent application rather than replacing it with a disconnected shell. The interface is evidence-first: the next permitted action, canonical phase, deadline, freshness and uncertainty appear before decorative analytics.

The approved reference prototype lives in `designs/frontend-v2/prototype/`. All values in the prototype are illustrative and must never be copied into production as protocol truth.

## Focused maintainer audit

This audit records only the authority decisions required to create the visual reference. The exhaustive route/screen inventory remains contributor issue truthbounty-frontend#432, and the component-state and accessibility matrices remain #434 and #435.

### Preserve

- `MainLayout`, `Sidebar` and `Topbar` as the shell boundaries.
- Geist Sans and Geist Mono.
- Token-based light and dark modes.
- 256 px desktop sidebar and 64 px topbar.
- Skip link, reduced-motion support, mobile drawer and persistent pending-transaction visibility.
- Existing transaction reconciliation and wallet/account controls.

### Correct through contributor issues

| Current finding | Approved direction | Existing issue |
|---|---|---|
| Sidebar entries are primarily buttons without canonical destinations | Every navigation destination is a real route with active-route semantics | #432 plus reserved shell issue |
| Claim creation is duplicated in Sidebar and Topbar modals | All entry points resolve to `/claims/new` | #433, #370 |
| Claim submission handlers log to the console | Canonical wallet/chain/simulation/transaction journey | #433, #370 |
| The default dashboard presents network-wide data as a generic personal view | Role-aware overview with next actions before analytics | Reserved dashboard issues |
| Production components can consume `src/data/mock-data.ts` | Explicit loading, empty, unavailable, stale and error states | #431, #406 |
| Mixed hard-coded colours and tokens | Semantic tokens and approved primitives | #390 |
| `All Chains` appears in a mutation-capable shell | Supported Optimism/EVM network context only | #364 and shell issue |
| Placeholder Settings/Profile/Discord behavior remains | Canonical routes or explicit unavailable states; no dead controls | #432 and shell issue |
| Admin and verifier information architecture is absent | Capability-gated routes with explicit denied states | Reserved shell/dashboard issues |

## Visual language

### Tone

Calm, rigorous and operational. TruthBounty should feel closer to an evidence review workspace than a speculative trading dashboard.

### Hierarchy

1. Role and task context.
2. Action required, eligibility, deadline or degraded-state notice.
3. No more than four high-priority summary values.
4. Primary queue or journey status.
5. Supporting activity and analytics.

### Colour

- Primary indigo: `#5B5BF6` light / `#7C7CF7` dark.
- Neutrals carry most of the composition.
- Green means canonical success or finalized health only.
- Amber means pending, deadline, projection lag or attention.
- Red is reserved for destructive or failed states.
- Blue communicates neutral protocol information.
- Text and icons accompany every semantic colour.

### Components

The prototype approves the visual treatment for:

- role-aware application shell and context selector;
- next-action and degraded-state notices;
- metric cards with freshness/source copy;
- claim list and responsive queue cards;
- status badges;
- protocol timeline;
- evidence cards;
- bounded admin health and operations queues;
- step-based claim creation;
- transaction, wallet and network controls;
- empty/prototype-boundary state.

## Approved screens

### Claimant dashboard

Answers: “What needs my attention across my claims and rewards?”

The first viewport contains an actionable notice, active claim counts, claimable rewards, recent claims and a personal protocol timeline. Network-wide mock metrics are prohibited as personal values.

### Verifier dashboard

Answers: “Which claims am I eligible to verify, and what deadline applies?”

Eligibility and protected-information notices precede the queue. Queue cards expose only phase-appropriate evidence, deadline, stake context and the canonical workspace action.

### Admin dashboard

Answers: “Is the system healthy, and which bounded operation needs attention?”

Health, queue age, governance/security notices and immutable audit references are allowed. Outcome overrides, fund movement and hidden bypass controls are prohibited.

### Claim detail

The claim statement, ID, phase, freshness and primary permitted action form the header. Evidence, protocol timeline, verification, dispute and settlement sections must not imply finality before canonical finalization.

### Claim creation

A dedicated five-step route: claim, evidence, funding, review and authorize. Local draft state is visually distinct from on-chain submission. Cost, chain, receiving contract and risk disclosure appear before authorization.

## Responsive behavior

- Desktop: persistent sidebar; two-column content where it improves task scanning.
- Tablet: single-column primary flow with secondary panels below.
- Mobile: focus-managed drawer, full-width primary actions, queue cards rather than compressed tables, and no horizontal workflow dependency.
- Touch targets are at least 44 by 44 CSS pixels.
- At 200% zoom the journey remains operable without loss of information.

## Prototype boundaries

The prototype demonstrates hierarchy, composition, navigation intent and responsive behavior. It does not define ABI/API payloads, verifier eligibility, admin powers, reward math, protocol statuses or production data. Where authority is unresolved, the prototype uses an explicit boundary rather than inventing behavior.

## Contributor handoff

Implementation must be split by dependency:

1. recover the frontend baseline (#429; #430 only if needed);
2. complete evidence audits (#432, #434, #435);
3. implement tokens/primitives (#390);
4. implement the role-aware shell;
5. implement dashboards independently;
6. integrate canonical claim, verification, dispute and reward journeys through their existing issues;
7. run accessibility, responsive, contract and release gates.

No redesign issue is active until maintainers apply `Stellar Wave`.
