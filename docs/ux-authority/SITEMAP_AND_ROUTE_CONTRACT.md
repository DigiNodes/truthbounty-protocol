# Sitemap and Route Contract

**Status:** Approved maintainer authority  
**Approved:** 2026-10-05  
**Runtime:** Optimism/EVM only

This contract defines durable destinations and journey ownership. Framework implementation details may vary, but capability boundaries, deep links and mutation safety may not.

## Canonical routes

| Area | Route contract | Audience | Purpose |
|---|---|---|---|
| Product entry | `/` | All | Product explanation, current public activity and safe journey entry |
| Explore claims | `/claims` | All | Search and filter public claims without implying participation eligibility |
| Claim detail | `/claims/:claimId` | All; actions capability-gated | Canonical claim state, evidence and verification/dispute/settlement timeline |
| Create claim | `/claims/new` | Claimant-capable wallet | Recoverable draft, funding, review, authorization and reconciliation |
| Personal dashboard | `/dashboard` | Authenticated | Active-context overview and next actions |
| Owned claims | `/dashboard/claims` | Claimant-capable wallet | Owned claims and actionable states |
| Verification queue | `/dashboard/verifications` | Eligible verifier | Available and assigned verification work |
| Verification workspace | `/dashboard/verifications/:claimId` | Eligible verifier | Evidence review, commit/reveal or canonical verification journey |
| Rewards | `/dashboard/rewards` | Authenticated | Accrued, claimable, pending, withdrawn and unavailable states |
| Transaction center | `/dashboard/transactions` | Authenticated | Persisted transaction reconciliation and receipt references |
| Settings | `/settings` | Authenticated | Wallet, session, chain and non-authoritative preferences |
| Identity/trust | `/settings/identity` | Authenticated | Humanity and trust evidence without inventing protocol authority |
| Disputes | `/disputes` | All; actions capability-gated | Public dispute discovery and participant history |
| Dispute detail | `/disputes/:disputeId` | All; actions capability-gated | Challenge, appeal, deadlines, provisional and final outcome |
| Treasury | `/treasury` | All; mutations capability-gated | Public accounting and user-owned claimable balances |
| Analytics | `/analytics` | All | Clearly sourced, freshness-labelled protocol analytics |
| Admin overview | `/admin` | Authorized operational/governance context | Health, bounded queues and authority summary |
| Admin operation | `/admin/operations/:queue` | Authorized operations context | Explicit operation with impact and audit trail |
| Admin audit | `/admin/audit` | Authorized admin context | Immutable audit and canonical transaction references |
| Service status | `/status` | All | RPC, API, indexer and release-manifest degradation |
| Documentation/help | `/docs` | All | Protocol and journey guidance |

## Capability contexts

A wallet may hold multiple capabilities. The UI exposes an active context but never treats context selection as authorization:

- public visitor;
- connected participant;
- claimant;
- verifier;
- operations administrator;
- governance operator;
- emergency guardian.

Exact authorization is resolved from the versioned contract release role manifest and protected API authorization. Missing or stale authority fails closed.

## Legacy-route migration

The current frontend contains routes that predate this authority. Migration must preserve safe inbound links:

| Legacy route | Canonical destination |
|---|---|
| `/verifier` | `/dashboard/verifications` |
| `/rewards` | `/dashboard/rewards` |
| `/identity` | `/settings/identity` |
| `/how-it-works` | `/docs` |
| `/treasury/stake` | `/treasury` with the user-owned stake/withdrawal section |

Legacy aliases may redirect only after preserving query/hash state. They must not auto-submit, open a signature request or bypass a capability gate. The root route must stop acting simultaneously as product entry, personal dashboard and claims index when the migration lands.

## Routing rules

1. Topbar, sidebar, cards, notifications and deep links resolve to the same canonical route.
2. Missing capability produces an explicit denied state; it never silently redirects into a misleading screen.
3. Wallet disconnect, account change, chain change, release-manifest change and role revocation invalidate protected route context.
4. Unknown IDs render a truthful not-found or unavailable state.
5. Admin routes require canonical contract/API authorization in addition to frontend guards.
6. Placeholder routes, console-only handlers and dead controls are not production implementations.
7. Public reads remain available when safe; every mutation fails closed on unsupported chain, missing artifacts or stale critical authority.
8. Routes expose active state programmatically and restore focus after navigation.
9. Contributor issues may implement this contract but may not add roles, destinations or privileged actions without maintainer approval.
