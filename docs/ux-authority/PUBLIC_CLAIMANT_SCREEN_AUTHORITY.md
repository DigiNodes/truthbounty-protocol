# TruthBounty V2 Public and Claimant Screen Authority

**Authority:** Maintainers  
**Status:** Proposed for Public and Claimant Approval  
**Runtime:** Optimism/EVM only  
**Dependencies:** Approved Brand Foundation and Frontend Foundation

## Decision

Approve the page-level compositions for public discovery and the claimant journey. These screens inherit the approved Signal Cyan / Proof Blue dark-first identity, Evidence Shield, application shells, component primitives, canonical transaction states and accessibility behaviour.

## Screen contract

| Board | Canonical destination | Primary decision |
|---|---|---|
| Product landing | `/` | Explain value and current public activity before wallet entry. |
| Explore claims | `/claims` | Search and filter public state without implying participation eligibility. |
| Claim detail | `/claims/:claimId` | Keep evidence, canonical phase, freshness, uncertainty and next action together. |
| Wallet entry | `/claims/new` entry | Explain connection, supported environment and eligibility before action. |
| Claimant dashboard | `/dashboard` | Order work by deadline and canonical phase rather than decorative analytics. |
| Claim statement | `/claims/new` | Preserve a clearly labelled local draft and collect a bounded assertion. |
| Evidence | `/claims/new` | Prefer primary sources and record availability/integrity without asserting canonical submission. |
| Funding | `/claims/new` | Resolve bond, fee, balance and allowance from pinned canonical sources. |
| Review/authorize | `/claims/new` | Show chain, contract, cost, risk, simulation and the exact authorization boundary. |
| Owned claims | `/dashboard/claims` | Separate local drafts from on-chain claims and expose the next canonical action. |
| Rewards/transactions | `/dashboard/rewards`, `/dashboard/transactions` | Separate accrued, claimable, pending and finalized value; preserve mutation recovery. |

## Journey rules

1. Public discovery requires no wallet.
2. Wallet connection is progressive and never presented as authorization.
3. Claim drafts remain local and non-canonical until the approved contract journey succeeds.
4. Production claim, evidence, fee, allowance, balance, address, phase and outcome data may not be copied from the boards.
5. Every mutation revalidates account, chain, release, capability, allowance, simulation and receipt.
6. A signature or hash is not confirmation; confirmation is not finality.
7. Claim detail is the durable destination after canonical submission.
8. Projection freshness is labelled and never overrides chain truth.
9. Wrong-chain, unavailable-release, rejected, replaced, reverted, projection-lag and reorged states preserve truthful recovery.
10. No page may infer verifier, governance, operations or guardian authority from claimant context.

## Responsive and accessibility requirements

- At tablet and mobile sizes, layouts reflow by task priority; public and owned-claim rows use the approved card representation rather than compressed tables.
- The claim wizard remains one linear journey with visible progress, recoverable validation and focus moved to the first error.
- Every action and status has an accessible name; status never relies on colour alone.
- Claim title, source metadata, deadlines, fees and addresses support 200% zoom without hiding the action or recovery path.
- Dialogs and wallet handoffs preserve focus, return focus after cancellation, and announce transaction-state changes without repeated noise.
- Reduced-motion, forced-colour and keyboard-only operation preserve meaning.

## Approval boundary

This batch does not approve verifier/dispute, privileged, support or legal page compositions. It does not activate contributor work and does not authorize a `Stellar Wave` label. Page implementations remain non-authoritative consumers of contracts, the pinned release manifest and labelled API projections.

