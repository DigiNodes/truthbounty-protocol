# Batch 4 Interface Observations

**Observed:** 2026-10-08  
**Purpose:** Design-time evidence, not a deployment manifest

## Contracts main

- `contracts/TruthBountyWeighted.sol` exposes `stake(uint256)`, `vote(...)` and `voteWithValidation(uint256,bool,uint256,uint256,uint256)`.
- `VoteCast` records `claimId`, verifier, boolean support, raw stake, effective stake and reputation score.
- `previewEffectiveStake` / staleness validation support a precise weight review.
- No `revealVote` implementation was found on default-branch code search. Commit/reveal appears in threat-model planning, so the UI must not present it as available.
- `ITruthBountyEvents.sol` and event documentation define `DisputeRaisedV1` and `DisputeResolvedV1`, but event evidence alone does not establish a callable dispute mutation.

## API main

- Verification read models store round type, status, stake, reputation input and effective weight verbatim with observed/safe/finalized data state.
- Dispute projections store raised/resolved/expired status, original round, optional appeal round, challenge bond, deadline and verbatim resolved outcome.
- The dispute entity explicitly notes that no frozen ABI confirms the appeal-round correlation.
- Projection registry currently consumes unversioned `DisputeRaised`, `DisputeResolved` and `DisputeExpired`, while contract event authority documents versioned `DisputeRaisedV1` and `DisputeResolvedV1`. This naming/interface mismatch must be reconciled before integration.

## Design consequence

Batch 4 shows complete journey compositions but fails closed where the current release cannot prove a callable or compatible interface. The eventual frontend implementation must consume a verified release manifest and may not infer functions from event names, docs or API fields.

