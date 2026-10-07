# TruthBounty V2 rendered screen authority

Version: `v2-2026-10-07`

These images are the implementation reference for the V2 frontend visual authority approved through Protocol PRs #11–#13. They are rendered from the dependency-free prototype in `../prototype/` and contain illustrative data only.

## Authority rules

- The protocol route, capability, transaction-state, responsive and accessibility documents remain normative.
- Images define hierarchy, spacing, visual priority, responsive stacking and component composition.
- Illustrative balances, claims, hashes, deadlines and identities must never be copied into production as protocol truth.
- Runtime capability is derived only from pinned release and authorization evidence; it is never inferred from a visible role or screen.
- Chain submission, confirmation, finality, API projection and reorg states remain distinct.
- If an implementation conflicts with the semantic authority, the semantic authority wins and the design must be amended through review.

## Screen-to-issue map

| # | Canonical surface | Route / capability | Desktop reference | Responsive references | Frontend issue |
|---|---|---|---|---|---|
| 01 | Product home | `/` | [desktop](./v2-2026-10-07/desktop/01-product-home.png) | [tablet](./v2-2026-10-07/tablet/01-product-home.png) · [mobile](./v2-2026-10-07/mobile/01-product-home.png) | #554 |
| 02 | Explore claims | `/claims` | [desktop](./v2-2026-10-07/desktop/02-explore-claims.png) | [tablet](./v2-2026-10-07/tablet/02-explore-claims.png) · [mobile](./v2-2026-10-07/mobile/02-explore-claims.png) | #554 |
| 03 | Claimant dashboard | claimant capability | [desktop](./v2-2026-10-07/desktop/03-claimant-dashboard.png) | [tablet](./v2-2026-10-07/tablet/03-claimant-dashboard.png) · [mobile](./v2-2026-10-07/mobile/03-claimant-dashboard.png) | #554 |
| 04 | My claims | claimant capability | [desktop](./v2-2026-10-07/desktop/04-my-claims.png) | prototype responsive policy | #554 |
| 05 | Claim detail | `/claims/[claimId]` | [desktop](./v2-2026-10-07/desktop/05-claim-detail.png) | [tablet](./v2-2026-10-07/tablet/05-claim-detail.png) · [mobile](./v2-2026-10-07/mobile/05-claim-detail.png) | #554 |
| 06 | Create claim | claimant capability | [desktop](./v2-2026-10-07/desktop/06-create-claim.png) | [tablet](./v2-2026-10-07/tablet/06-create-claim.png) · [mobile](./v2-2026-10-07/mobile/06-create-claim.png) | #554 |
| 07 | Verification queue | verifier capability | [desktop](./v2-2026-10-07/desktop/07-verification-queue.png) | [tablet](./v2-2026-10-07/tablet/07-verification-queue.png) · [mobile](./v2-2026-10-07/mobile/07-verification-queue.png) | #555 |
| 08 | Verification workspace | verifier capability | [desktop](./v2-2026-10-07/desktop/08-verification-workspace.png) | [tablet](./v2-2026-10-07/tablet/08-verification-workspace.png) · [mobile](./v2-2026-10-07/mobile/08-verification-workspace.png) | #555 |
| 09 | Disputes | public/participant capability | [desktop](./v2-2026-10-07/desktop/09-disputes.png) | [tablet](./v2-2026-10-07/tablet/09-disputes.png) · [mobile](./v2-2026-10-07/mobile/09-disputes.png) | #555 |
| 10 | Rewards | claimant capability | [desktop](./v2-2026-10-07/desktop/10-rewards.png) | prototype responsive policy | #554 |
| 11 | Transactions | connected wallet | [desktop](./v2-2026-10-07/desktop/11-transactions.png) | [tablet](./v2-2026-10-07/tablet/11-transactions.png) · [mobile](./v2-2026-10-07/mobile/11-transactions.png) | #554 |
| 12 | Operations overview | operations capability | [desktop](./v2-2026-10-07/desktop/12-operations-overview.png) | prototype responsive policy | #556 |
| 13 | Operations queues | operations capability | [desktop](./v2-2026-10-07/desktop/13-operations.png) | prototype responsive policy | #556 |
| 14 | Governance | governance capability | [desktop](./v2-2026-10-07/desktop/14-governance.png) | prototype responsive policy | #556 |
| 15 | Emergency guardian | guardian pause capability | [desktop](./v2-2026-10-07/desktop/15-emergency-guardian.png) | prototype responsive policy | #556 |
| 16 | Audit log | privileged read capability | [desktop](./v2-2026-10-07/desktop/16-audit-log.png) | prototype responsive policy | #556 |
| 17 | Settings | connected wallet | [desktop](./v2-2026-10-07/desktop/17-settings.png) | prototype responsive policy | #557 |
| 18 | Service status | public | [desktop](./v2-2026-10-07/desktop/18-service-status.png) | prototype responsive policy | #557 |
| 19 | Documentation | public | [desktop](./v2-2026-10-07/desktop/19-documentation.png) | prototype responsive policy | #557 |

Issues #552 and #553 apply across the whole collection: #552 owns the Storybook design-system foundation and states; #553 owns the canonical shell, routes and capability-aware navigation.

## Dimensions and integrity

- Desktop: 19 PNGs at 1440 × 1024.
- Tablet: 9 golden-journey PNGs at 768 × 1024.
- Mobile: 9 golden-journey PNGs at 390 × 844.
- File integrity is pinned in [SHA256SUMS](./v2-2026-10-07/SHA256SUMS).
- The machine-readable route index is [manifest.json](./v2-2026-10-07/manifest.json).

## Change control

This version is immutable after approval. Visual changes require a new versioned directory, updated manifest and independent review. Approval of this pack does not authorize a Stellar Wave.
