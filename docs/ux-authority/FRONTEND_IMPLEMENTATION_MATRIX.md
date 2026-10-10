# Frontend Implementation Matrix

**Status:** Proposed implementation authority  
**Design authority:** Batches 1–6 approved  
**Runtime:** Optimism/EVM only  
**Scope:** Documentation-only reconciliation  

## Decision

The six approved design batches are complete. This matrix controls translation of their 58 high-fidelity boards and approved brand assets into frontend work without inventing routes, capabilities, protocol state, legal authority, or backend behavior.

It establishes board-to-route, screen-to-capability, field-to-source, action-to-interface, state, issue-ownership, and dependency mappings. Approval does not implement a screen, pin a release, approve legal copy, activate a contributor issue, or authorize the `Stellar Wave` label.

## Approved authority baseline

| Batch | Authority and artifacts | Approval |
|---|---|---|
| 1 — Brand | [`BRAND_FOUNDATION.md`](./BRAND_FOUNDATION.md); [`brand/`](../../designs/frontend-v2/brand/README.md) | PR #17, 2026-10-07 |
| 2 — Foundation | [`FRONTEND_FOUNDATION_AUTHORITY.md`](./FRONTEND_FOUNDATION_AUTHORITY.md); 8 boards | PR #18, 2026-10-07 |
| 3 — Public and claimant | [`PUBLIC_CLAIMANT_SCREEN_AUTHORITY.md`](./PUBLIC_CLAIMANT_SCREEN_AUTHORITY.md); 11 boards | PR #19, 2026-10-08 |
| 4 — Verifier and dispute | [`VERIFIER_DISPUTE_SCREEN_AUTHORITY.md`](./VERIFIER_DISPUTE_SCREEN_AUTHORITY.md); 13 boards | PR #20, 2026-10-09 |
| 5 — Privileged | [`PRIVILEGED_SCREEN_AUTHORITY.md`](./PRIVILEGED_SCREEN_AUTHORITY.md); 13 boards | PR #21, 2026-10-09 |
| 6 — Support and legal | [`SUPPORT_LEGAL_SCREEN_AUTHORITY.md`](./SUPPORT_LEGAL_SCREEN_AUTHORITY.md); 13 boards | PR #22, 2026-10-09 |

Also authoritative: [`SITEMAP_AND_ROUTE_CONTRACT.md`](./SITEMAP_AND_ROUTE_CONTRACT.md), [`ROLE_AND_CAPABILITY_MATRIX.md`](./ROLE_AND_CAPABILITY_MATRIX.md), [`TRANSACTION_STATE_MODEL.md`](./TRANSACTION_STATE_MODEL.md), and [`ADMIN_AUTHORITY_BOUNDARY.md`](./ADMIN_AUTHORITY_BOUNDARY.md).

## Brand asset inventory

| Asset | Approved use |
|---|---|
| [`truthbounty-glyph.svg`](../../designs/frontend-v2/brand/truthbounty-glyph.svg) | Primary Evidence Shield glyph |
| [`truthbounty-glyph-monochrome.svg`](../../designs/frontend-v2/brand/truthbounty-glyph-monochrome.svg) | Single-color and constrained contexts |
| [`truthbounty-app-icon.svg`](../../designs/frontend-v2/brand/truthbounty-app-icon.svg) | Square application and favicon source |
| [`truthbounty-landscape-dark.svg`](../../designs/frontend-v2/brand/truthbounty-landscape-dark.svg) | Wordmark on dark surfaces |
| [`truthbounty-landscape-light.svg`](../../designs/frontend-v2/brand/truthbounty-landscape-light.svg) | Wordmark on light surfaces |

Frontend #552 owns implementation of these assets, tokens, type, and theme behavior. It may not redraw the mark or substitute an unapproved palette.

## Canonical source classes

| Source | May supply | Must not supply |
|---|---|---|
| Pinned contracts | Roles, balances, phases, deadlines, economic values, receipts, finalized outcomes | Service health, legal copy, inferred projection freshness |
| Fresh API projection | Search, lists, timelines, indexed state, lag, sanitized operations data | Canonical authorization, finality, unsupported mutations |
| Verified release manifest | Chain, addresses, ABIs, versions, deployment/interface availability | User capability without contract/API validation |
| Wallet/session/local state | Account, active context, drafts, pending references, private notes | Protocol role, final success, implied legal consent |
| Approved content | Product guidance, docs, reviewed legal text, contact channels, disclosures | Live protocol values, health, authority |

Every production field must identify a source class in fixtures and adapters. Board values are illustrative only.

## Canonical states

Mutation-capable compositions use: `idle`, `validating`, `awaiting-signature`, `rejected`, `submitted`, `replaced`, `reverted`, `confirmed`, `finalized`, `projection-lag`, `reorged`, and `unavailable`. Confirmation is not finalization; finalized chain state is not a fresh projection.

Applicable surfaces use: `loading`, `empty`, `stale`, `offline`, `unavailable`, `error`, `denied`, and `not-found`. Capability-sensitive surfaces also cover wrong-chain, changed-account, changed-release, revoked-authority, and expired-authority states.

## Board-to-implementation ownership

Tracking epics coordinate work. Each must be split into focused, dependency-ordered issues before contributor activation.

### Batch 2 — Foundation

| Board | Surface | Capability/source/action boundary | Epic |
|---|---|---|---|
| [`01-design-tokens.svg`](../../designs/frontend-v2/foundation/boards/01-design-tokens.svg) | Global tokens | Approved static tokens; no runtime values | #552 |
| [`02-application-shells.svg`](../../designs/frontend-v2/foundation/boards/02-application-shells.svg) | Marketing/public/authenticated shells | Session context is presentation, never authority | #552, #553 |
| [`03-navigation.svg`](../../designs/frontend-v2/foundation/boards/03-navigation.svg) | Sidebar, topbar, drawer | Route contract; denied rather than inferred access | #553 |
| [`04-component-primitives.svg`](../../designs/frontend-v2/foundation/boards/04-component-primitives.svg) | Controls and data display | Storybook fixtures isolated from live adapters | #552 |
| [`05-wallet-network-identity.svg`](../../designs/frontend-v2/foundation/boards/05-wallet-network-identity.svg) | Wallet/network/trust | Wallet + manifest; connection is not authorization | #552, #553 |
| [`06-transaction-states.svg`](../../designs/frontend-v2/foundation/boards/06-transaction-states.svg) | Transaction components/center | Receipt + pinned chain + projection freshness | #552 |
| [`07-system-states.svg`](../../designs/frontend-v2/foundation/boards/07-system-states.svg) | Shared recovery components | Preserve truthful data and safe recovery only | #552 |
| [`08-responsive-accessibility.svg`](../../designs/frontend-v2/foundation/boards/08-responsive-accessibility.svg) | All breakpoints/modes | WCAG 2.2 AA target; task-equivalent layouts | #552 |

### Batch 3 — Public and claimant

| Board | Route | Capability/source/action boundary | Epic |
|---|---|---|---|
| [`01-product-landing.svg`](../../designs/frontend-v2/public-claimant/boards/01-product-landing.svg) | `/` | Public content/projection; no implied eligibility | #554 |
| [`02-explore-claims.svg`](../../designs/frontend-v2/public-claimant/boards/02-explore-claims.svg) | `/claims` | Public, freshness-labelled API discovery | #554 |
| [`03-claim-detail.svg`](../../designs/frontend-v2/public-claimant/boards/03-claim-detail.svg) | `/claims/:claimId` | Public; contract truth reconciled with API; actions gated | #554 |
| [`04-wallet-entry-and-eligibility.svg`](../../designs/frontend-v2/public-claimant/boards/04-wallet-entry-and-eligibility.svg) | Gated entry | Wallet + chain + manifest + canonical capability | #554 |
| [`05-claimant-dashboard.svg`](../../designs/frontend-v2/public-claimant/boards/05-claimant-dashboard.svg) | `/dashboard` | Authenticated summaries linked to canonical references | #554 |
| [`06-submit-claim-statement.svg`](../../designs/frontend-v2/public-claimant/boards/06-submit-claim-statement.svg) | `/claims/new` | Claimant; recoverable local draft | #554 |
| [`07-submit-evidence.svg`](../../designs/frontend-v2/public-claimant/boards/07-submit-evidence.svg) | `/claims/new` | Approved evidence adapter + integrity; no secrets | #554 |
| [`08-submit-funding.svg`](../../designs/frontend-v2/public-claimant/boards/08-submit-funding.svg) | `/claims/new` | Contract-derived requirements/values | #554 |
| [`09-submit-review-authorize.svg`](../../designs/frontend-v2/public-claimant/boards/09-submit-review-authorize.svg) | `/claims/new` | Exact pinned call, simulation, canonical tx states | #554 |
| [`10-owned-claims.svg`](../../designs/frontend-v2/public-claimant/boards/10-owned-claims.svg) | `/dashboard/claims` | Canonical ownership/phase + fresh projection | #554 |
| [`11-rewards-transactions.svg`](../../designs/frontend-v2/public-claimant/boards/11-rewards-transactions.svg) | `/dashboard/rewards`, `/dashboard/transactions` | Contract-owned values + persisted reconciliation | #554 |

### Batch 4 — Verifier and dispute

| Board | Route | Capability/source/action boundary | Epic |
|---|---|---|---|
| [`01-verifier-eligibility-readiness.svg`](../../designs/frontend-v2/verifier-dispute/boards/01-verifier-eligibility-readiness.svg) | Verifier entry | Wallet, chain, release, role/stake; fail closed | #555 |
| [`02-verification-queue.svg`](../../designs/frontend-v2/verifier-dispute/boards/02-verification-queue.svg) | `/dashboard/verifications` | Eligible verifier; fresh queue + canonical phase/deadline | #555 |
| [`03-verification-evidence-workspace.svg`](../../designs/frontend-v2/verifier-dispute/boards/03-verification-evidence-workspace.svg) | `/dashboard/verifications/:claimId` | Public evidence/integrity; notes local/private | #555 |
| [`04-stake-effective-weight.svg`](../../designs/frontend-v2/verifier-dispute/boards/04-stake-effective-weight.svg) | Verification workspace | Contract-derived stake, adjustment, exposure | #555 |
| [`05-verification-decision.svg`](../../designs/frontend-v2/verifier-dispute/boards/05-verification-decision.svg) | Verification workspace | Exact release interface; no invented abstain/commit | #555 |
| [`06-verification-authorize-reveal.svg`](../../designs/frontend-v2/verifier-dispute/boards/06-verification-authorize-reveal.svg) | Verification workspace | Direct vote/reveal only if pinned ABI proves it | #555 |
| [`07-my-verifications.svg`](../../designs/frontend-v2/verifier-dispute/boards/07-my-verifications.svg) | `/dashboard/verifications` | Receipt/outcome + freshness-labelled projection | #555 |
| [`08-public-dispute-register.svg`](../../designs/frontend-v2/verifier-dispute/boards/08-public-dispute-register.svg) | `/disputes` | Public, read-only projection + canonical refs | #555 |
| [`09-dispute-detail.svg`](../../designs/frontend-v2/verifier-dispute/boards/09-dispute-detail.svg) | `/disputes/:disputeId` | Public; provisional/final distinct; actions gated | #555 |
| [`10-dispute-eligibility-entry.svg`](../../designs/frontend-v2/verifier-dispute/boards/10-dispute-eligibility-entry.svg) | Dispute boundary | Contract capability/phase; unavailable until pinned | #555 |
| [`11-open-dispute-evidence.svg`](../../designs/frontend-v2/verifier-dispute/boards/11-open-dispute-evidence.svg) | Dispute flow | Local draft/evidence; mutation unavailable until pinned | #555 |
| [`12-dispute-review-authorize.svg`](../../designs/frontend-v2/verifier-dispute/boards/12-dispute-review-authorize.svg) | Dispute flow | Exact call required; event docs are insufficient | #555 |
| [`13-appeal-resolution-settlement.svg`](../../designs/frontend-v2/verifier-dispute/boards/13-appeal-resolution-settlement.svg) | `/disputes/:disputeId` | Only where release proves callable authority | #555 |

### Batch 5 — Privileged

| Board | Route/surface | Capability/source/action boundary | Epic |
|---|---|---|---|
| [`01-privileged-access-readiness.svg`](../../designs/frontend-v2/privileged/boards/01-privileged-access-readiness.svg) | `/admin` entry | Contract role manifest + protected API; context grants nothing | #556 |
| [`02-privileged-overview.svg`](../../designs/frontend-v2/privileged/boards/02-privileged-overview.svg) | `/admin` | Capability-specific, read-only-first summaries | #556 |
| [`03-system-health-release-status.svg`](../../designs/frontend-v2/privileged/boards/03-system-health-release-status.svg) | `/admin` | Operations; protected API + manifest; stale not healthy | #556 |
| [`04-operational-queue-register.svg`](../../designs/frontend-v2/privileged/boards/04-operational-queue-register.svg) | `/admin/operations/:queue` | Protected bounded queues; no outcome editing | #556 |
| [`05-queue-item-safe-retry.svg`](../../designs/frontend-v2/privileged/boards/05-queue-item-safe-retry.svg) | `/admin/operations/:queue` | Idempotent retry + audit ID; mapping pinned | #556 |
| [`06-administrative-audit-trail.svg`](../../designs/frontend-v2/privileged/boards/06-administrative-audit-trail.svg) | `/admin/audit` | Protected immutable audit + canonical tx refs | #556 |
| [`07-governance-proposal-register.svg`](../../designs/frontend-v2/privileged/boards/07-governance-proposal-register.svg) | `/admin` governance | Governor/timelock + fresh indexing | #556 |
| [`08-governance-proposal-detail.svg`](../../designs/frontend-v2/privileged/boards/08-governance-proposal-detail.svg) | `/admin` governance | Exact calls, votes, lifecycle, simulation, receipts | #556 |
| [`09-governed-change-preparation.svg`](../../designs/frontend-v2/privileged/boards/09-governed-change-preparation.svg) | `/admin` governance | Supported typed actions; never arbitrary UI calls | #556 |
| [`10-timelock-execution.svg`](../../designs/frontend-v2/privileged/boards/10-timelock-execution.svg) | `/admin` governance | Timelock executor; exact queued action/readiness | #556 |
| [`11-role-administration.svg`](../../designs/frontend-v2/privileged/boards/11-role-administration.svg) | `/admin` governance | Timelocked grant/revoke; no legacy inference | #556 |
| [`12-upgrade-controlled-unpause.svg`](../../designs/frontend-v2/privileged/boards/12-upgrade-controlled-unpause.svg) | `/admin` governance | Verified release/layout/rollback + governed calls | #556 |
| [`13-emergency-scope-pause-control.svg`](../../designs/frontend-v2/privileged/boards/13-emergency-scope-pause-control.svg) | `/admin` guardian | Proven operation-scoped call; request is not completed pause; no unpause | #556 |

### Batch 6 — Support and legal

#557 remains a settings/status/docs tracking epic; it must not absorb all support, security, legal, consent, and recovery work.

| Board | Route | Capability/source/action boundary | Owner after approval |
|---|---|---|---|
| [`01-documentation-home.svg`](../../designs/frontend-v2/support-legal/boards/01-documentation-home.svg) | `/docs` | Public, approved versioned content + release | #557 + docs child |
| [`02-documentation-article.svg`](../../designs/frontend-v2/support-legal/boards/02-documentation-article.svg) | `/docs/:slug` | Approved content/review/applicable release/sources | #557 + docs child |
| [`03-help-troubleshooting.svg`](../../designs/frontend-v2/support-legal/boards/03-help-troubleshooting.svg) | `/support` | Approved recovery; no intervention promise | Help child |
| [`04-service-status-overview.svg`](../../designs/frontend-v2/support-legal/boards/04-service-status-overview.svg) | `/status` | Sanitized public telemetry required; protected health is not public API | #557 + status child |
| [`05-incident-detail-history.svg`](../../designs/frontend-v2/support-legal/boards/05-incident-detail-history.svg) | `/status/incidents/:incidentId` | Sanitized public incident projection required | Incident child |
| [`06-contact-support-entry.svg`](../../designs/frontend-v2/support-legal/boards/06-contact-support-entry.svg) | `/contact` | Approved channels; absent channels unavailable | Contact child |
| [`07-support-request-form.svg`](../../designs/frontend-v2/support-legal/boards/07-support-request-form.svg) | `/support` | Minimum-data API, retention, secret detection required | Form + API children |
| [`08-security-reporting.svg`](../../designs/frontend-v2/support-legal/boards/08-security-reporting.svg) | `/security` | Protected channel/policy; no invented bounty/SLA | Security + policy children |
| [`09-privacy-notice.svg`](../../designs/frontend-v2/support-legal/boards/09-privacy-notice.svg) | `/privacy` | Legally approved, versioned content only | Privacy child |
| [`10-terms-of-use.svg`](../../designs/frontend-v2/support-legal/boards/10-terms-of-use.svg) | `/terms` | Legally approved, versioned content only | Terms child |
| [`11-protocol-risk-disclosures.svg`](../../designs/frontend-v2/support-legal/boards/11-protocol-risk-disclosures.svg) | `/disclosures` + contextual | Approved testnet/mainnet-specific copy | Disclosures child |
| [`12-legal-version-consent.svg`](../../designs/frontend-v2/support-legal/boards/12-legal-version-consent.svg) | Legal routes/genuine gates | Approved consent policy; wallet signature is not consent | Consent child |
| [`13-system-support-states.svg`](../../designs/frontend-v2/support-legal/boards/13-system-support-states.svg) | Global boundaries | Safe not-found/retired/maintenance/dependency/denied recovery | #553 + recovery children |

## Action-to-interface gates

| Action | Required authority | Until pinned |
|---|---|---|
| Claim create/fund | Manifest, ABI, chain, simulation, tx adapter | Implement only against pinned release |
| Verification decision | Exact function and encoding | Do not infer commit/reveal or abstain |
| Dispute/appeal/settle | Exact functions, phases, bonds, receipts | Read-only or explicit unavailable |
| Reward claim/withdraw | Contract ownership, amount, eligibility, function | API estimate never authorizes |
| Operational retry | Protected permission, idempotency, audit ID | Fail closed on legacy/unmapped auth |
| Governance/execute | Governor/timelock roles, typed calls, lifecycle, simulation | No arbitrary call composition |
| Upgrade/unpause | Verified implementation/layout/rollback + governed call | Registry record is not execution |
| Guardian pause | Exact operation-scoped call and impact | Request event/self-pause is not module pause |
| Support submit | Endpoint, minimum schema, retention, privacy, secret controls | Form unavailable |
| Security submit | Protected channel and disclosure policy | Do not collect reports |
| Legal accept | Approved version and explicit consent policy | Viewing/connecting/signing protocol tx is not consent |

## Epic restructuring contract

| Issue | Required role |
|---|---|
| Frontend #552 | Storybook, brand, tokens, primitives, state catalogue, visual/accessibility/interaction foundation |
| Frontend #553 | Route shell, redirects, metadata, focus restoration, capability navigation, safe boundaries |
| Frontend #554 | Batch 3 tracking epic |
| Frontend #555 | Batch 4 tracking epic |
| Frontend #556 | Batch 5 tracking epic |
| Frontend #557 | Settings/identity/docs/status epic; split Batch 6 support/legal work |

Each child issue requires one bounded deliverable, exact board links, capability/source/action boundaries, canonical states, responsive/accessibility criteria, fixtures/tests, dependencies, non-goals, complexity, and points. Unknown issue numbers are not preallocated here.

## Dependency order

1. Approve this reconciliation.
2. Convert #552–#557 into tracking epics and create focused candidates without activation labels.
3. Complete #552: remove default Storybook examples; finish primitive/state/testing catalogue.
4. Complete #553: shells, routes, redirects, authorization-safe boundaries.
5. Implement shared source labels, states, and recovery components.
6. Implement Batch 3 compositions.
7. Implement Batch 4, leaving unpinned mutations unavailable.
8. Implement Batch 5 with separated authority.
9. Implement Batch 6 only where content/backend dependencies are approved.
10. Integrate pinned contract/API adapters.
11. Run responsive, accessibility, visual, recovery, reorg, and Optimism Sepolia E2E rehearsals.

## Unresolved dependencies

- **Contracts/release:** one verified Optimism Sepolia manifest; exact verification/dispute/appeal/settlement/reward/pause/unpause/upgrade interfaces; versioned role mappings.
- **API:** public status/incident schemas; canonical retry permission/audit IDs; approved support endpoint/schema/retention/secret controls; freshness/finalized-block/release metadata.
- **Legal/security/content:** operator, jurisdiction, eligibility, retention, processors, contacts, governing law, support/security channels, consent, and testnet/mainnet copy. No bounty, response SLA, or uptime guarantee is authorized.
- **Frontend gates:** remove default stories; finish interaction/accessibility/responsive/visual matrix; isolate production adapters from fixtures.

## Non-goals and approval effect

This document changes no runtime code, approves no placeholder content, creates no generic administrator, makes no unavailable interface callable, and creates or activates no contributor issue.

Approval makes this the canonical design-to-implementation reconciliation and permits restructuring the frontend epics and creating focused candidate issues. Candidate creation is separate from activation; `Stellar Wave` remains suspended until explicitly authorized.
