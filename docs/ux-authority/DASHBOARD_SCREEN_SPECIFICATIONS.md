# Dashboard Screen Specifications

## Shared dashboard contract

Every dashboard begins with:

- role-aware page title and concise next-action summary;
- stale/offline/projection-lag banner when applicable;
- no more than four high-priority summary cards;
- primary queue or journey status before secondary analytics;
- source/freshness information for protocol-derived values.

## Claimant dashboard

**Primary question:** What needs my attention across my claims and rewards?

Order:

1. Next action panel.
2. Claim summary: draft/active/verifying/disputed/finalized.
3. Recent claims with phase, deadline, confidence state, and next permitted action.
4. Rewards summary: accrued, claimable, pending, withdrawn.
5. Activity timeline.

Do not show network-wide mock statistics as personal metrics.

## Verifier dashboard

**Primary question:** Which claims am I eligible to verify, and what deadlines apply?

Order:

1. Eligibility/trust notice.
2. Available verification queue.
3. Assigned/in-progress work.
4. Commit/reveal or protocol-specific deadline panel.
5. Rewards and reputation summary.
6. Recent verification outcomes.

Protected information is displayed only at the canonical phase.

## Admin dashboard

**Primary question:** Is the system healthy, and which bounded operation needs attention?

Order:

1. System health: indexer lag, RPC/API state, failed jobs, queue age.
2. Bounded operational queues.
3. Security/governance notices.
4. Recent admin audit events.
5. Configuration summary with read-only default.

The admin dashboard must not present claim-outcome override, user-fund movement, fabricated settlement, or hidden bypass controls.

## Empty and degraded states

- New user: explain the role-specific first action.
- No eligible work: show eligibility/freshness and safe alternatives.
- Projection lag: preserve chain-derived truth and identify delayed data.
- Unsupported chain: disable mutation and offer an explicit switch.
- Partial failure: keep independently trustworthy panels available and mark unavailable panels.
