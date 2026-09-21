# Claim and Verification Screen Specifications

## Claim creation

Use a dedicated route, not independent Sidebar and Topbar modals.

Recommended steps:

1. Claim statement and category.
2. Evidence and source metadata.
3. Funding/stake and allowance.
4. Review, risk disclosure, and simulation.
5. Wallet authorization.
6. Submitted/confirmed/finalized reconciliation.

Requirements:

- save recoverable local draft without implying on-chain creation;
- validate evidence and URLs safely;
- show cost, allowance, chain, and receiving contract before signature;
- preserve input on rejection/revert;
- return success to the durable claim-detail route.

## Claim detail

Header:

- claim statement;
- canonical claim ID;
- phase/status;
- confidence with methodology context;
- freshness/finality;
- permitted primary action.

Content:

- evidence list with provenance;
- protocol timeline;
- verification summary appropriate to phase;
- dispute/appeal section;
- settlement/reward state;
- transaction and audit references.

No UI may label an outcome final while the canonical state remains provisional.

## Verification workspace

Layout:

1. Claim/evidence reading region.
2. Eligibility, stake, deadline, and phase panel.
3. Verification input and rationale/evidence controls.
4. Review/simulation.
5. Wallet authorization and transaction progress.

Requirements:

- prevent protected reveal before canonical phase;
- preserve unsent local work without exposing it;
- distinguish ineligible, expired, already-submitted, and unavailable;
- reconcile refresh, replacement, reorg, account change, and chain change;
- never infer completion from local submission alone.

## Dispute and settlement

Dispute actions state eligibility, deadline, cost/stake, evidence requirement, and consequence. Settlement view separates provisional result, dispute window, finalized result, and withdrawable reward.
