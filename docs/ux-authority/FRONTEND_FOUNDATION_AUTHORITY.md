# Frontend Foundation Authority

**Authority:** Maintainers  
**Status:** Approved — Protocol PR #18  
**Approved:** 2026-10-07  
**Depends on:** Approved Brand Foundation and existing route/capability/transaction authorities  
**Runtime:** Optimism/EVM only  

## Decision

This authority defines the reusable visual and interaction foundation for TruthBounty V2. It approves tokens, shell boundaries, navigation behaviour, primitive components, canonical transaction/system states, and responsive/accessibility rules. It does not approve page-specific compositions or production integrations.

## Token contract

- Use the 4/8/12/16/24/32/48/64 px spacing scale.
- Default control height is 44 px; compact controls are 36 px and large controls are 52 px.
- Minimum interactive target is 44 by 44 CSS pixels.
- Approved radii are 8, 12, 16 and 20 px plus pill radius.
- Borders define most elevation; shadows remain restrained and never communicate state.
- Motion durations are 120 ms feedback, 180 ms component and 240 ms drawer.
- Reduced-motion preference removes non-essential transforms while preserving state and focus.

## Shell contract

### Marketing shell

Used for product explanation, public proof and journey entry. It does not require a wallet and must not imply participation eligibility.

### Public application shell

Used for canonical public claims, disputes, treasury, analytics, status and documentation. Public reads remain available when safe. Mutations explain prerequisites before connection.

### Authenticated application shell

Uses the approved 256 px sidebar, 64 px topbar and 1440 px content maximum. It exposes active context, wallet, supported chain and persisted transaction visibility. Active context is presentation state, not authorization.

Operations, governance and guardian surfaces are distinct protected contexts. They never inherit generic administrator power and default to read-only until canonical authority is established.

## Navigation contract

- Desktop uses a persistent sidebar and topbar.
- Mobile uses a focus-trapped drawer and restores focus to the menu control.
- All destinations follow `SITEMAP_AND_ROUTE_CONTRACT.md`.
- Account, chain, release or role changes invalidate stale protected context.
- Unsupported direct access renders denied; it does not silently redirect.
- Claim creation always resolves to `/claims/new`.
- Mutation flows never expose an `All Chains` context.

## Component contract

Approved primitives include buttons, links, text fields, text areas, selectors, uploads, cards, tables, responsive queue cards, filters, tabs, badges, notices, timelines, drawers and confirmation dialogs.

Every component must support default, hover, focus-visible, active, disabled, loading, error and read-only states where meaningful. Destructive and privileged actions require explicit impact copy and a separate confirmation boundary.

## Wallet, network and identity

- Wallet connection never establishes a capability by itself.
- Only pinned Optimism/EVM releases appear in mutation controls.
- Wrong-chain, changed-account, changed-release and revoked-role states revalidate and fail closed.
- Humanity or trust evidence never creates protocol authority.
- Privileged controls depend on the versioned release manifest plus contract/API authorization.

## Canonical transaction states

Components use the exact states defined in `TRANSACTION_STATE_MODEL.md`: idle, validating, awaiting-signature, rejected, submitted, replaced, reverted, confirmed, finalized, projection-lag, reorged and unavailable.

A button click, wallet signature or transaction hash is never rendered as final success. Chain truth remains distinct from API projection freshness.

## System states

Every relevant surface provides loading, empty, stale, offline, unavailable, error, denied and not-found treatments. Each treatment:

1. names what happened;
2. preserves truthful and recoverable data;
3. offers a safe next action;
4. identifies source/freshness where relevant;
5. remains understandable without colour;
6. never fabricates balances, authority, hashes, success or protocol outcomes.

## Responsive and accessibility contract

- Desktop, tablet and mobile retain the same task and authority semantics.
- Multi-column layouts reflow by task priority; tables become approved cards where compression would hide meaning.
- Golden journeys remain operable at 200% zoom without two-dimensional scrolling.
- Keyboard order follows visual/task order and every interactive element has visible focus.
- Drawers and dialogs trap focus, close predictably and restore focus.
- Status changes are announced appropriately without exposing secrets.
- Colour contrast targets WCAG 2.2 AA.
- Reduced-motion and forced-colour modes preserve meaning.

## Approval boundary

Foundation Approval does not certify page-specific landing, claimant, verifier, dispute, operations, governance, guardian, support or legal screens. Those remain separate design batches. No frontend implementation issue may treat illustrative text, values, addresses, roles or status as protocol truth.

No contributor issue is active until maintainers explicitly apply `Stellar Wave`.

