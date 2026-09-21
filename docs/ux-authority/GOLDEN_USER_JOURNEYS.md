# Golden User Journeys

**Status:** Maintainer proposal. Each implementation issue must select one bounded slice and include every relevant state.

## Journey 1 — Create and fund a claim

1. User discovers the capability and connects a wallet.
2. UI validates account, supported chain, session, form data, and required allowance/funding.
3. UI simulates the canonical transaction where supported.
4. User authorizes the transaction.
5. UI distinguishes rejected, submitted, replaced, reverted, confirmed, finalized, and projection-lag states.
6. Claim detail becomes the durable destination.

Success is never inferred from a button click or API optimism; it follows canonical transaction evidence.

## Journey 2 — Verify an eligible claim

1. Eligible verifier opens the queue.
2. UI explains eligibility and deadline without leaking protected information.
3. Verifier reviews canonical claim/evidence state.
4. Commit/reveal or verification action follows the protocol sequence.
5. UI preserves pending work across refresh and reconciles account/chain changes.
6. Completion is shown only after canonical confirmation/finality.

## Journey 3 — Track outcome, dispute, and settlement

1. Participant opens claim timeline.
2. UI identifies current protocol phase, deadline, available action, and uncertainty.
3. Dispute/appeal actions appear only where canonical authority permits.
4. Provisional and final outcomes are visually and semantically distinct.
5. Reorg or projection lag never fabricates a final outcome.

## Journey 4 — View and withdraw rewards

1. User opens rewards dashboard.
2. UI separates accrued, claimable, pending withdrawal, withdrawn, and unavailable values.
3. Withdrawal validates wallet/chain and simulates before authorization.
4. Receipt/finality and projection reconciliation are displayed.
5. Empty and unavailable states never fall back to mock balances.

## Journey 5 — Perform a bounded admin operation

1. Authorized admin enters a protected route.
2. UI displays the exact authority, impact, and audit consequence.
3. Destructive/high-impact action requires clear confirmation and canonical authorization.
4. Submitted action shows transaction/operation state and immutable audit reference.
5. Admin cannot override claim truth, settlement, or user custody beyond canonical governance.

## Cross-journey requirements

- keyboard and screen-reader completion;
- mobile, tablet, and desktop behavior;
- explicit loading, empty, stale, offline, denied, rejected, failed, pending, confirmed, finalized, and reorged states where applicable;
- stable deep links;
- telemetry without secrets, evidence content, signatures, or sensitive wallet data.
