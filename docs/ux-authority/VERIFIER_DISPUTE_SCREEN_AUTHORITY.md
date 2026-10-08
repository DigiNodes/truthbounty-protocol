# TruthBounty V2 Verifier and Dispute Screen Authority

**Authority:** Maintainers  
**Status:** Proposed for Verifier and Dispute Approval  
**Runtime:** Optimism/EVM only  
**Dependencies:** Approved Brand, Frontend Foundation, and Public/Claimant authorities

## Decision

Approve the page-level verifier and dispute compositions while preserving a strict interface boundary. These screens inherit the approved Evidence Shield, dark-first Signal Cyan / Proof Blue identity, foundation components, canonical transaction states and accessibility behavior.

## Screen contract

| Board | Canonical destination | Primary decision |
|---|---|---|
| Verifier readiness | `/dashboard/verifications` entry | Revalidate account, chain, release, stake and reputation before protected work. |
| Verification queue | `/dashboard/verifications` | Order work by phase and deadline without leaking protected positions. |
| Evidence workspace | `/dashboard/verifications/:claimId` | Keep claim, evidence integrity, availability, notes and phase together. |
| Stake/weight review | `/dashboard/verifications/:claimId` | Display contract-previewed raw stake, reputation input and effective weight verbatim. |
| Decision | `/dashboard/verifications/:claimId` | Expose only verdicts supported by the pinned ABI. |
| Authorization/reveal boundary | `/dashboard/verifications/:claimId` | Review the exact callable function; never promise secrecy or reveal support without interface evidence. |
| My verifications | `/dashboard/verifications` | Separate active position, settlement, reward, stake-return and slashing states. |
| Dispute register | `/disputes` | Publicly discover raised, appeal, resolved and expired records with data state. |
| Dispute detail | `/disputes/:disputeId` | Keep original round, bond, evidence, timeline and provisional/final boundary together. |
| Dispute eligibility | `/disputes/:disputeId` action entry | Resolve eligibility, deadline, existing dispute, bond and callable interface. |
| Dispute evidence | `/disputes/:disputeId` action flow | Preserve a local, non-canonical challenge draft and public evidence reference. |
| Dispute authorization | `/disputes/:disputeId` action flow | Fail closed until exact function, bond asset, allowance and simulation are available. |
| Appeal/resolution | `/disputes/:disputeId` | Separate appeal availability, resolution, finality, refund, reward and slashing. |

## Verification rules

1. Eligibility is canonical and time-sensitive; active context is presentation only.
2. Stake, reputation input and effective weight are displayed as exact integer-derived values from contracts/events, never floating-point API calculations.
3. Current `TruthBountyWeighted` supports direct `voteWithValidation(claimId, support, stakeAmount, expectedReputation, maxReputationDrift)` and exposes a boolean position. The UI must not expose `Abstain` unless a pinned compatible interface supports it.
4. The current direct vote emits the position. The UI must not promise sealed voting or commit/reveal privacy unless a pinned release exposes compatible functions and events.
5. Private working notes remain local unless an approved interface explicitly commits or publishes them.
6. A submitted verification is not a settlement, reward or returned stake.
7. Ties/inconclusive outcomes use the canonical refund-only treatment when the pinned settlement contract confirms it; the frontend does not recompute settlement.

## Dispute rules

1. Public dispute reads may use freshness-labelled projections, but eligibility and mutations resolve from the pinned contract release.
2. API projections do not adjudicate, resolve or originate canonical disputes.
3. Event documentation or event interfaces are not sufficient evidence of a callable dispute function.
4. Until a compatible dispute function is pinned, the eligibility, evidence and authorization boards render the explicit unavailable state shown in this package.
5. Challenge bond, bond asset, deadline, appeal round, ruling and resulting outcome are presented only when canonically available.
6. Provisional, resolved, safe and finalized states remain distinct. Reorg or projection lag withdraws prior certainty.
7. Appeal controls appear only for a canonically eligible wallet and supported phase.

## Transaction, responsive and accessibility requirements

- Use the canonical idle, validating, awaiting-signature, rejected, submitted, replaced, reverted, confirmed, finalized, projection-lag, reorged and unavailable vocabulary.
- Queue and register tables become task-prioritized cards on narrow viewports.
- The evidence workspace places claim and evidence before economic action after reflow.
- Protected position details and local notes are not announced or logged beyond their intended scope.
- Deadlines, amounts, hashes and status remain usable at 200% zoom.
- Focus moves to the first validation error and returns predictably after dialogs or wallet cancellation.
- Status and risk never rely on color alone; touch targets remain at least 44 CSS pixels.

## Approval boundary

This batch does not approve operations, governance, guardian, support or legal screens. It does not activate contributor work and does not authorize applying `Stellar Wave`. Implementations remain non-authoritative consumers of contracts, the pinned release manifest and labelled API projections.

