# Frontend UI Post-Wave-9 Reconciliation

**Audit date:** 2026-10-05  
**Protocol baseline:** `1d75cf8db620e106caa3bc6aa4e8c632235967ea`  
**Frontend baseline:** `5762d37048601ee8084ea111c00fafece181910e`  
**Authority:** Maintainer audit and next-wave preparation  
**Runtime boundary:** Optimism/EVM only

## Executive conclusion

TruthBounty is not starting its frontend design from zero. The protocol repository contains a coherent semantic UX authority, four low-fidelity SVGs and a responsive dependency-free prototype. The frontend repository also contains implemented claimant, verifier and bounded-admin dashboard work.

However, the UI authority is not yet a complete, approved, implementation-ready screen system:

1. authority documents still describe themselves as maintainer proposals;
2. Gate C remains unchecked;
3. the prototype expands only five representative screens;
4. the current frontend route/navigation model diverges materially from the proposed route contract;
5. responsive/accessibility acceptance remains open;
6. several frontend inventory links are machine-local `file://` paths;
7. production integration is still blocked by baseline, configuration, artifact and cross-repository readiness work.

The next wave should therefore include a bounded **UI authority completion and conformance tranche**, not an unrestricted redesign.

## Evidence reviewed

### Protocol authority

- `designs/frontend-v2/README.md`
- `designs/frontend-v2/prototype/{index.html,styles.css,prototype.js,README.md}`
- claimant, verifier, admin and claim-detail SVG foundations
- `docs/ux-authority/ROLE_AND_CAPABILITY_MATRIX.md`
- `docs/ux-authority/SITEMAP_AND_ROUTE_CONTRACT.md`
- `docs/ux-authority/GOLDEN_USER_JOURNEYS.md`
- `docs/ux-authority/APP_SHELL_AND_NAVIGATION.md`
- `docs/ux-authority/DASHBOARD_SCREEN_SPECIFICATIONS.md`
- `docs/ux-authority/CLAIM_AND_VERIFICATION_SCREEN_SPECIFICATIONS.md`
- `docs/ux-authority/DESIGN_SYSTEM_AUTHORITY.md`
- `docs/ux-authority/TRANSACTION_STATE_MODEL.md`
- `docs/ux-authority/ADMIN_AUTHORITY_BOUNDARY.md`
- `docs/ux-authority/RESPONSIVE_ACCESSIBILITY_POLICY.md`
- `docs/stabilization/READINESS_GATES.md`

### Frontend implementation

- `src/config/navigation.ts`
- `docs/COMPONENT_STATE_INVENTORY.md`
- `docs/ux/RESPONSIVE_WORKFLOWS.md`
- merged role-aware dashboard work, including frontend PRs #465 and #537
- open responsive/accessibility issue #435

## What is already strong

- Evidence-first hierarchy is explicit.
- Claimant, verifier and bounded-admin responsibilities are separated.
- Contract authority, API projection authority and frontend responsibility are correctly bounded.
- The transaction model covers rejection, replacement, reversion, confirmation, finality, projection lag and reorg.
- Responsive and WCAG 2.2 AA expectations are documented.
- The existing `MainLayout`, `Sidebar` and `Topbar` are intentionally evolved rather than replaced.
- The prototype covers light/dark tokens, mobile navigation behavior and role switching.
- Admin outcome override and user-fund movement are expressly prohibited.

## Authority and approval gaps

| Finding | Current evidence | Required resolution |
|---|---|---|
| Proposal/authority ambiguity | Several UX documents say “Maintainer proposal”; the design README calls the assets authority | Maintainer review must either approve the current documents or record exact revisions |
| Gate C not recorded | Every Gate C checkbox is unchecked | Check items only after evidence and review are linked |
| Exact privileged capabilities unresolved | Role matrix requires canonical references for verifier eligibility, admin roles, disputes and configuration limits | Link approved contract/API authority before privileged UI implementation |
| Prototype scope is incomplete | Five representative screens are expanded; other destinations intentionally fall into a placeholder boundary | Complete the screen library before broad visual implementation |
| Responsive acceptance incomplete | Policy exists, but issue #435 remains open | Produce measurable per-screen automated/manual acceptance |
| Portable evidence is incomplete | Frontend component inventory contains developer-local `file:///c:/...` links | Replace with repository-relative links |

## Prototype coverage map

| Surface | Authority status | Prototype status | Next action |
|---|---|---|---|
| Claimant dashboard | Specified | Expanded | Reconcile with current dashboard implementation |
| Verifier queue | Specified | Expanded | Reconcile route, eligibility and deadline states |
| Admin overview | Specified | Expanded | Validate every operation against canonical authority |
| Claim detail | Specified | Expanded | Add dispute, settlement and phase variants |
| Claim creation | Specified | Evidence step only | Add claim, funding, review, authorize and reconciliation states |
| Public home/product entry | Route specified | Missing | Create high-fidelity responsive screen |
| Explore/search claims | Route specified | Missing | Create filters, results, empty/error/stale states |
| My claims | Route specified | Missing | Create owned-claim and next-action views |
| Verification workspace | Journey specified | Missing | Create evidence, eligibility, review, authorize and receipt views |
| Dispute/appeal | Journey specified | Missing | Create eligible, ineligible, expired, provisional and finalized states |
| Rewards/withdrawal | Journey specified | Missing | Create accrued, claimable, pending, withdrawn and unavailable states |
| Transaction center | Shell/state specified | Missing | Create global pending/replaced/reverted/reorged reconciliation views |
| Settings/session | Route specified | Missing | Create wallet, chain, session and preference views |
| Admin operation queue/detail | Route specified | Placeholder only | Create read-only and bounded-mutation patterns |
| Audit log | Navigation specified | Placeholder only | Create immutable audit reference views |
| Status/help/docs | Route specified | Missing | Create degraded service and user-guidance surfaces |
| Permission and degradation states | Semantically specified | Partial | Expand wallet-disconnected, wrong-chain, denied, offline and projection-lag variants |

## Route conformance findings

The proposed contract and current frontend do not yet describe the same application:

| Concern | Protocol route contract | Current frontend |
|---|---|---|
| Product entry | `/` | `/` also aliases dashboard and claims |
| Personal dashboard | `/dashboard` | `/` |
| Public claims | `/claims` | `/` |
| Owned claims | `/dashboard/claims` | No canonical equivalent in navigation config |
| Verification queue | `/dashboard/verifications` | `/verifier` |
| Rewards | `/dashboard/rewards` | `/rewards` |
| Settings | `/settings` | Missing from `APP_ROUTES` |
| Status/docs | `/status`, `/docs` | Uses `/how-it-works` plus an external docs link |
| Admin operation detail | `/admin/:queue` | Only `/admin` is declared |
| Additional implementation routes | Not currently reconciled | `/treasury`, `/treasury/stake`, `/identity`, `/disputes`, `/analytics` |

Maintainers must choose the canonical route model before contributors refactor navigation. Neither side should be treated as automatically correct.

## Additional implementation risks

- `RESOURCE_LINKS.discord` currently points to a Storybook community URL and appears unrelated to TruthBounty.
- The component inventory uses non-portable local filesystem links.
- Prototype navigation buttons are valid for a static artifact but must become real links in production.
- The prototype contains illustrative balances, block numbers, deadlines and identities; none may become production defaults.
- The current design is a strong semantic and compositional reference, but it is not yet a complete production screen catalogue.

## Required next-wave work

### Maintainer-owned: authority completion

1. Resolve the route contract against the current Next.js application.
2. Approve or revise role, capability, verifier and admin boundaries.
3. Change proposal statuses only after recorded human review.
4. Expand the high-fidelity prototype for the missing surfaces in the coverage map.
5. Record Gate C evidence without marking incomplete items as satisfied.
6. Publish the final issue dependency order.

### Contributor-suitable: evidence and implementation

After authority approval, create or revalidate focused issues for:

1. portable screen/component inventory;
2. responsive and accessibility acceptance matrix;
3. canonical routes and role-aware shell conformance;
4. design tokens and shared state primitives;
5. public/explore surfaces;
6. claimant workspace;
7. verifier queue and verification workspace;
8. disputes and appeals;
9. rewards, reputation and withdrawals;
10. bounded admin operations and audit views;
11. transaction center and degraded states;
12. Storybook coverage and visual-regression evidence.

Each issue must retain the established structure: problem context, scope, architecture/security constraints, tests, acceptance criteria, dependencies, non-goals, deliverables, complexity and points.

## Dependency order

1. Baseline green and current-main snapshot.
2. Route/capability authority decision.
3. High-fidelity prototype completion.
4. Responsive/accessibility acceptance matrix.
5. Shared shell, tokens and primitives.
6. Independent role and journey slices.
7. Canonical contract/API integration.
8. Optimism Sepolia E2E, recovery and accessibility rehearsal.
9. Small dependency-free wave activation.
10. Broader activation only after evidence from the first tranche.

## Readiness decision

- **Design direction:** usable.
- **Semantic UX authority:** substantially present.
- **Approval evidence:** incomplete.
- **Screen-library completeness:** incomplete.
- **Frontend conformance:** unproven and currently divergent.
- **Contributor activation:** blocked pending authority and baseline reconciliation.
- **Optimism Sepolia UI readiness:** blocked.
- **Mainnet UI readiness:** blocked.

This audit does not activate issues, apply `Stellar Wave`, approve privileged behavior or authorize contributor implementation.
