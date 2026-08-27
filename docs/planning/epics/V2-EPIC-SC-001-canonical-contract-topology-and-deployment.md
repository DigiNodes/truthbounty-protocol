# V2-EPIC-SC-001 — Canonical Contract Topology and Deployment

**Repository:** `DigiNodes/truthbounty-contract`  
**Status:** Candidate epic review  
**Issue range:** `V2-SC-001`–`V2-SC-040`  
**Runtime:** Optimism / EVM

## Epic Outcome

Deliver one modular, secure, testable, deployable, and versioned TruthBounty V2 contract release that is the sole authority for claim creation, verification, aggregation, disputes, settlement, accounting, governance, and finality.

## Why This Epic Comes First

The API and frontend cannot safely integrate while contract topology, events, ABIs, addresses, roles, and deployment composition are provisional. Existing legacy and partially modular code targets competing authority models. This epic freezes one production surface and proves it through deployment and invariant evidence.

## Scope

The epic includes:

- **Foundation:** `V2-SC-001`–`V2-SC-005`
- **Claims and Evidence:** `V2-SC-006`–`V2-SC-008`
- **Stake and Verification:** `V2-SC-009`–`V2-SC-012`
- **Aggregation and Settlement:** `V2-SC-013`–`V2-SC-015`
- **Disputes:** `V2-SC-016`–`V2-SC-018`
- **Accounting:** `V2-SC-019`–`V2-SC-023`
- **Reputation:** `V2-SC-024`–`V2-SC-025`
- **Governance and Safety:** `V2-SC-026`–`V2-SC-030`
- **Deployment:** `V2-SC-031`–`V2-SC-034`
- **Validation:** `V2-SC-035`–`V2-SC-040`

It also includes canonical release artifacts, an Optimism test deployment workflow, complete accounting conservation, and a final legacy-exclusion/readiness audit.

## Shared Architecture Rules

Every issue must preserve:

- blockchain-only protocol authority;
- one modular production topology;
- deterministic, integer-only aggregation;
- one challenge and appeal round;
- pull-based withdrawals;
- exhaustive token accounting;
- timelocked governance and upgrades;
- pause-only guardian authority;
- versioned, replay-sufficient events;
- no EOA production administrator;
- no legacy settlement contract in the canonical release;
- no Stellar/Soroban/Freighter runtime dependency.

## Shared Quality Gate

Every implementation candidate requires:

- complete acceptance evidence;
- unit tests and applicable integration, invariant, fuzz, gas, storage, or deployment tests;
- Hardhat and Foundry compatibility;
- static analysis with no new unresolved critical or high finding;
- NatSpec and implementation documentation;
- changed ABI/event/storage/deployment artifact review;
- human maintainer approval;
- no automatic merge.

## Issue Families

| Family | Range | Epic deliverable |
|---|---|---|
| Foundation | `V2-SC-001`–`V2-SC-005` | Define Canonical V2 Contract Interfaces; Create Shared Protocol Types, Errors, and Lifecycle Library; Define Versioned Canonical Event Schema; Implement Versioned Protocol Configuration Registry; Implement Canonical Module Registry and Dependency Validation |
| Claims and Evidence | `V2-SC-006`–`V2-SC-008` | Implement Deterministic Claim Registry and Creation Flow; Enforce Claim Lifecycle and Deadline Transitions; Implement Content-Addressed Evidence Commitment Registry |
| Stake and Verification | `V2-SC-009`–`V2-SC-012` | Implement Stake Vault Custody and Lock Ledger; Implement Verification Submission Registry; Implement Verification Round Manager and Frozen Participation Snapshot; Implement Stake Unlock, Refund, and Settlement Hooks |
| Aggregation and Settlement | `V2-SC-013`–`V2-SC-015` | Implement Deterministic Aggregation Engine; Implement Participation Threshold and Confidence Rules; Implement Provisional Settlement Engine |
| Disputes | `V2-SC-016`–`V2-SC-018` | Implement Dispute Opening and Challenge Bond Custody; Implement Appeal Verification Round; Implement Appeal Aggregation and Final Dispute Resolution |
| Accounting | `V2-SC-019`–`V2-SC-023` | Implement Reward Allocation Ledger; Implement Slashing and Exhaustive Allocation Engine; Implement Timelocked Treasury Vault; Implement Pull-Based Withdrawals and Claimable Balances; Implement Protocol-Wide Accounting Reconciliation Library |
| Reputation | `V2-SC-024`–`V2-SC-025` | Implement Versioned Reputation Root Registry; Implement Reputation Proof and Weight Multiplier Adapter |
| Governance and Safety | `V2-SC-026`–`V2-SC-030` | Implement Production Role Topology and Timelock Ownership; Implement Governor Proposal and Execution Controls; Implement Operation-Scoped Emergency Pause Controller; Implement Transparent Proxy and Upgrade Administration; Implement Governed Parameter Change and Version Activation Flow |
| Deployment | `V2-SC-031`–`V2-SC-034` | Build Canonical Modular Deployment Composition; Implement Deployment Preflight and Post-Deployment Verification; Generate Versioned ABI, Event, Address, Role, and Parameter Artifacts; Implement Optimism Test Deployment and Source-Verification Workflow |
| Validation | `V2-SC-035`–`V2-SC-040` | Build Deterministic Local End-to-End Lifecycle Fixture; Implement Cross-Module Integration Test Suite; Implement Protocol Invariant and Stateful Fuzz Suite; Benchmark Gas, Bounded Execution, and Denial-of-Service Limits; Validate Storage Layout, Upgrade Safety, and Migration Paths; Audit Legacy Exclusion and Canonical Release Readiness |

## Contributor Assignment Rules

- Assign only issues whose dependencies are merged and reviewed.
- One primary issue per pull request unless maintainers approve coordinated scope.
- Contributors must explain how current code is reused, replaced, or deprecated.
- Partial legacy implementation does not reduce acceptance criteria silently.
- Security-sensitive or shared-interface work requires named maintainer review.
- The external `Stellar Wave` label remains absent until the issue is independently approved as `wave-ready`.

## Epic Exit Criteria

- All forty outcomes are implemented and accepted.
- Canonical deployment and release artifacts are generated from one commit.
- All protocol invariants have executable evidence.
- Full local lifecycle, disputed lifecycle, withdrawal, pause, governance, and upgrade journeys pass.
- Accounting conservation holds across randomized sequences.
- Legacy authority paths are unreachable.
- Deployment preflight, postflight, artifact, role, gas, storage, and security gates pass.
- The release-readiness audit reports no unresolved critical or high blocker.
