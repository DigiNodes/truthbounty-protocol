# Sitemap and Route Contract

**Status:** Maintainer proposal. Route names may be adapted to the framework, but capability boundaries and journey ownership require maintainer approval.

| Area | Route contract | Audience | Purpose |
|---|---|---|---|
| Public | `/` | All | Product entry, protocol explanation, current public activity |
| Explore | `/claims` | All | Search/filter public claims without implying eligibility |
| Claim detail | `/claims/:claimId` | All; actions role-gated | Canonical claim state, evidence, verification/settlement timeline |
| Create claim | `/claims/new` | Claimant-capable wallet | Validated golden claim-creation journey |
| User dashboard | `/dashboard` | Authenticated | Role-aware overview and next actions |
| User claims | `/dashboard/claims` | Claimant-capable | Owned claims and actionable states |
| Verification queue | `/dashboard/verifications` | Eligible verifier | Available/assigned verification work |
| Rewards | `/dashboard/rewards` | Authenticated | Canonical accrued/claimable/withdrawn state |
| Profile/settings | `/settings` | Authenticated | Session, wallet, preferences; no protocol authority invention |
| Admin overview | `/admin` | Authorized admin | Operational health and bounded queues |
| Admin queue | `/admin/:queue` | Authorized admin | Explicit admin operation with audit trail |
| Status/help | `/status`, `/docs` | All | Degraded-state communication and user guidance |

## Routing rules

1. Topbar, Sidebar, cards, and deep links must resolve to the same canonical route.
2. Missing capability produces an explicit permission state; it must not silently redirect into a misleading screen.
3. Wallet disconnect, account change, and chain change invalidate protected route context.
4. Unknown IDs render a truthful not-found/unavailable state.
5. Admin routes require server/contract authorization in addition to frontend guarding.
6. Placeholder routes and `console.log` actions are not production implementations.
7. The screen inventory issue validates existing code against this contract; it may not expand the contract.
