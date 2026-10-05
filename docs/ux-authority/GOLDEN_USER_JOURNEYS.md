# Golden User Journeys

**Status:** Approved maintainer authority  
**Approved:** 2026-10-05

Each implementation issue selects one bounded slice and includes every relevant state. Approval defines journey semantics; it does not certify that current contracts, API or frontend implement them.

## Journey 1 — Create and fund a claim

1. User discovers the capability and connects a wallet.
2. UI validates account, supported chain, release manifest, session, form data and required allowance/funding.
3. UI simulates the canonical transaction where supported.
4. User reviews cost, chain, receiving contract and risk, then authorizes.
5. UI distinguishes rejected, submitted, replaced, reverted, confirmed, finalized and projection-lag states.
6. Claim detail becomes the durable destination.

Success is never inferred from a button click or API optimism.

## Journey 2 — Verify an eligible claim

1. Eligible verifier opens the canonical queue.
2. UI explains eligibility and deadline without leaking protected information.
3. Verifier reviews canonical claim/evidence state.
4. Commit/reveal or verification follows the protocol sequence.
5. UI preserves unsent local work and reconciles refresh, account, chain and release changes.
6. Completion appears only after canonical confirmation/finality.

## Journey 3 — Track outcome, dispute and settlement

1. Participant opens the claim timeline.
2. UI identifies phase, deadline, permitted action and uncertainty.
3. Dispute/appeal actions appear only where canonical authority permits.
4. Provisional and final outcomes remain visually and semantically distinct.
5. Reorg or projection lag withdraws prior certainty and never fabricates finality.

## Journey 4 — View and withdraw rewards

1. User opens rewards.
2. UI separates accrued, claimable, pending withdrawal, withdrawn and unavailable values.
3. Withdrawal validates wallet, chain, release and authority, then simulates before authorization.
4. Receipt/finality and projection reconciliation are displayed.
5. Empty/unavailable states never use mock balances.

## Journey 5 — Perform a bounded operations action

1. Authorized operations administrator enters a protected route.
2. UI displays exact protected-API authority, impact and audit consequence.
3. Only safe, documented and idempotent operations are offered.
4. Result links to an immutable audit reference.
5. No contract mutation or user impersonation is inferred.

## Journey 6 — Perform a governed action

1. Governance-capable wallet opens the governance context.
2. UI resolves the role from the pinned release manifest.
3. Proposal, timelock, execution window, impact and rollback path are shown.
4. Wallet authorization follows the canonical contract.
5. Result reconciles through transaction, finality and audit states.

## Journey 7 — Apply an emergency pause

1. Guardian-capable wallet opens the emergency context.
2. UI identifies the exact operation that can be paused.
3. UI confirms that unpause, upgrade, settlement and treasury actions are not granted.
4. Wallet authorization follows the scoped emergency contract.
5. Result links to the canonical transaction and operation state.

## Cross-journey requirements

- keyboard and screen-reader completion;
- mobile, tablet and desktop behavior;
- explicit loading, empty, stale, offline, denied, rejected, failed, pending, confirmed, finalized and reorged states where applicable;
- stable deep links and focus restoration;
- no production mocks, dummy addresses or synthetic receipts;
- telemetry without secrets, private evidence, signatures or sensitive wallet data.
