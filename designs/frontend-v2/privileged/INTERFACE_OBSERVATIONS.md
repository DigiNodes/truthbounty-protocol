# Batch 5 Interface Observations

**Observed:** 2026-10-09  
**Repositories:** `truthbounty-contract`, `truthbounty-api`, `truthbounty-protocol`

## Confirmed governance surface

- `TruthBountyGovernor` uses an OpenZeppelin Governor and `TimelockController` lifecycle.
- Canonical V2 governance supports proposal, voting, queue, cancel and execute states.
- Proposal targets must be registered modules; forbidden settlement selectors are rejected.
- `ITruthBountyGovernor` exposes `cancel(uint256)`, `queue(uint256)` and `execute(uint256)` helpers in addition to `IGovernor`.
- Execution rejects native value and reverts atomically on a failed target call.
- Governance documentation states that the Governor is the sole proposer and execution is available only after the timelock.

## Confirmed guardian surface and boundary

- `GovernanceGuardian.vetoProposal(proposalId)` calls the canonical governor cancellation path.
- `GovernanceGuardian.requestModulePause(module)` emits `GuardianModulePauseRequested`; it does **not** call or pause the target module.
- `guardianPause()` pauses the guardian contract itself, and the implementation explicitly notes that it does not prevent its veto/request functions.
- `guardianUnpause()` is held by `DEFAULT_ADMIN_ROLE`, not implied by `GUARDIAN_ROLE`.
- Governance documentation describes the guardian as a veto/cancel authority without proposal execution or timelock bypass.

The UI therefore distinguishes veto, pause request, guardian-contract pause and actual module pause. It cannot display a pause request as a completed protocol pause.

## Upgrade surface

- `ProtocolUpgradeManager` records proposal, storage attestation, migration validation, approval, execution, cancellation and rollback stages.
- It is an authorization/version registry and does not itself call `upgradeToAndCall`.
- A minimum seven-day upgrade delay is documented by the implementation.
- Module adoption and governed unpause require their own exact callable surfaces and release mappings before frontend activation.

## Confirmed operations API

- `GET /admin/protocol/queues` exposes per-queue waiting, active, completed, failed, delayed and paused counts plus totals.
- `POST /admin/protocol/queues/retry-failed?queueName=<queue>` retries failed work for an explicit queue or the known queue set.
- `POST /admin/protocol/services/control` includes queue pause/resume/retry/clear and other service controls.
- The service writes audit-trail records with actor, action, entity, severity, category and before/after state.
- Operational health documentation exposes database, Redis, BullMQ, RPC/indexer and notification failure/recovery states.

## Risks requiring fail-closed UI

1. Several API service and emergency states are maintained in process memory; they must not be represented as durable protocol state.
2. The retry-all endpoint can target multiple queues; the UI should require an explicit queue and scope preview rather than defaulting silently to all queues.
3. Queue clearing is materially more destructive than retrying failed jobs and is not approved by these boards as a contributor-facing default action.
4. API role names such as `SUPER_ADMIN` and `ADMINISTRATOR` are legacy implementation names; they cannot be mapped directly to production capability contexts without the release role manifest.
5. Governance, upgrade and emergency implementations coexist across legacy and V2 paths; only the pinned release manifest may select the production surface.
6. A `GuardianModulePauseRequested` event proves a request, not a completed pause.

## Design decision

Boards show confirmed read models and exact canonical states. Mutation controls appear only where the observed interface and approved authority align; otherwise they render an explicit unavailable or request-only boundary.
