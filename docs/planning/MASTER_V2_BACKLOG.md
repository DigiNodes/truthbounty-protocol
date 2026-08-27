# TruthBounty V2 Master Backlog

**Version:** 1.0.0-proposed  
**Date:** 2026-08-27  
**Status:** Proposed clean-slate backlog  
**Governing specification:** [TruthBounty Protocol V2 Specification](../v2/PROTOCOL_V2_SPEC.md)

## Purpose

This backlog is the canonical cross-repository delivery register for TruthBounty V2. It replaces legacy issue planning without modifying any historical GitHub issue.

Only the first epic is decomposed into contributor-ready issue source files in this change. Later epics remain blocked planning entries until their governing upstream outputs are accepted and their turn is approved.

## Backlog Rules

- Existing GitHub issues remain unchanged historical records.
- New identifiers use `V2-SC-###`, `V2-BE-###`, `V2-FE-###`, and `V2-DOC-###`.
- Each implementation repository will ultimately receive at least 30 mature, meaningful candidates across its approved epics; issue count must never be inflated through artificial fragmentation.
- One epic is authored and reviewed at a time.
- Source files are reviewed before GitHub issue creation.
- Created issues receive internal lifecycle labels only.
- `Stellar Wave` is applied only through the protected final publication gate.
- UI/UX implementation remains suspended until maintainers approve the redesigned interfaces.

## Epic Register

| Epic | Repository | Outcome | Status | Entry condition |
|---|---|---|---|---|
| `V2-EPIC-SC-001` | `truthbounty-contract` | Canonical modular contract topology and deployment release | Candidate review | Merged specification and blueprint |
| `V2-EPIC-BE-001` | `truthbounty-api` | PostgreSQL, chain ingestion, finality, and reorganization foundation | Blocked | Canonical event schema and deployment artifacts |
| `V2-EPIC-BE-002` | `truthbounty-api` | Deterministic projections, replay, reconciliation, and indexed queries | Blocked | BE-001 plus canonical events |
| `V2-EPIC-BE-003` | `truthbounty-api` | SIWE, evidence services, API security, notifications, and operations | Blocked | BE-001 architecture decisions |
| `V2-EPIC-FE-001` | `truthbounty-frontend` | EVM wallet, release-artifact consumer, and transaction state machine | Blocked | Versioned ABI/address release |
| `V2-EPIC-FE-002` | `truthbounty-frontend` | Protocol interaction logic, indexed reads, tests, and accessibility infrastructure | Blocked | FE-001, BE projections, approved interface architecture |
| `V2-EPIC-XR-001` | all implementation repositories | End-to-end claim, evidence, verification, dispute, settlement, and withdrawal journeys | Blocked | Contract, API, and frontend foundations |
| `V2-EPIC-SEC-001` | all implementation repositories | Independent review, launch controls, incident readiness, and controlled release | Blocked | Integrated test environment |

## Current Epic: V2-EPIC-SC-001

**Goal:** Produce one secure, deployable, versioned modular contract release that is the sole authority for TruthBounty V2.

**Issue count:** 40 candidate source files.

**Publication state:** Planning only. No GitHub issue and no Drips activation is created by this backlog.

### Issue Catalogue

| ID | Title | Family | Complexity | Dependencies | State |
|---|---|---|---|---|---|
| `V2-SC-001` | Define Canonical V2 Contract Interfaces | architecture | high | Governance docs | Candidate |
| `V2-SC-002` | Create Shared Protocol Types, Errors, and Lifecycle Library | architecture | medium | `V2-SC-001` | Candidate |
| `V2-SC-003` | Define Versioned Canonical Event Schema | architecture | high | `V2-SC-001`, `V2-SC-002` | Candidate |
| `V2-SC-004` | Implement Versioned Protocol Configuration Registry | configuration | high | `V2-SC-001`, `V2-SC-002` | Candidate |
| `V2-SC-005` | Implement Canonical Module Registry and Dependency Validation | architecture | high | `V2-SC-001`, `V2-SC-004` | Candidate |
| `V2-SC-006` | Implement Deterministic Claim Registry and Creation Flow | claims | high | `V2-SC-001`, `V2-SC-002`, `V2-SC-004`, `V2-SC-005` | Candidate |
| `V2-SC-007` | Enforce Claim Lifecycle and Deadline Transitions | claims | high | `V2-SC-006` | Candidate |
| `V2-SC-008` | Implement Content-Addressed Evidence Commitment Registry | evidence | medium | `V2-SC-003`, `V2-SC-006`, `V2-SC-007` | Candidate |
| `V2-SC-009` | Implement Stake Vault Custody and Lock Ledger | staking | high | `V2-SC-001`, `V2-SC-002`, `V2-SC-004`, `V2-SC-005` | Candidate |
| `V2-SC-010` | Implement Verification Submission Registry | verification | high | `V2-SC-006`, `V2-SC-007`, `V2-SC-009` | Candidate |
| `V2-SC-011` | Implement Verification Round Manager and Frozen Participation Snapshot | verification | high | `V2-SC-004`, `V2-SC-007`, `V2-SC-010` | Candidate |
| `V2-SC-012` | Implement Stake Unlock, Refund, and Settlement Hooks | staking | high | `V2-SC-009`, `V2-SC-010`, `V2-SC-011` | Candidate |
| `V2-SC-013` | Implement Deterministic Aggregation Engine | aggregation | high | `V2-SC-002`, `V2-SC-003`, `V2-SC-010`, `V2-SC-011` | Candidate |
| `V2-SC-014` | Implement Participation Threshold and Confidence Rules | aggregation | high | `V2-SC-004`, `V2-SC-013` | Candidate |
| `V2-SC-015` | Implement Provisional Settlement Engine | settlement | high | `V2-SC-006`, `V2-SC-007`, `V2-SC-013`, `V2-SC-014` | Candidate |
| `V2-SC-016` | Implement Dispute Opening and Challenge Bond Custody | disputes | high | `V2-SC-004`, `V2-SC-009`, `V2-SC-015` | Candidate |
| `V2-SC-017` | Implement Appeal Verification Round | disputes | high | `V2-SC-010`, `V2-SC-011`, `V2-SC-016` | Candidate |
| `V2-SC-018` | Implement Appeal Aggregation and Final Dispute Resolution | disputes | high | `V2-SC-013`, `V2-SC-014`, `V2-SC-016`, `V2-SC-017` | Candidate |
| `V2-SC-019` | Implement Reward Allocation Ledger | rewards | high | `V2-SC-004`, `V2-SC-009`, `V2-SC-015`, `V2-SC-018` | Candidate |
| `V2-SC-020` | Implement Slashing and Exhaustive Allocation Engine | slashing | high | `V2-SC-004`, `V2-SC-009`, `V2-SC-015`, `V2-SC-018` | Candidate |
| `V2-SC-021` | Implement Timelocked Treasury Vault | treasury | high | `V2-SC-004`, `V2-SC-005`, `V2-SC-020` | Candidate |
| `V2-SC-022` | Implement Pull-Based Withdrawals and Claimable Balances | rewards | high | `V2-SC-009`, `V2-SC-012`, `V2-SC-019`, `V2-SC-020`, `V2-SC-021` | Candidate |
| `V2-SC-023` | Implement Protocol-Wide Accounting Reconciliation Library | accounting | high | `V2-SC-019`, `V2-SC-020`, `V2-SC-021`, `V2-SC-022` | Candidate |
| `V2-SC-024` | Implement Versioned Reputation Root Registry | reputation | high | `V2-SC-002`, `V2-SC-003`, `V2-SC-004`, `V2-SC-005` | Candidate |
| `V2-SC-025` | Implement Reputation Proof and Weight Multiplier Adapter | reputation | high | `V2-SC-010`, `V2-SC-011`, `V2-SC-024` | Candidate |
| `V2-SC-026` | Implement Production Role Topology and Timelock Ownership | governance | high | `V2-SC-004`, `V2-SC-005` | Candidate |
| `V2-SC-027` | Implement Governor Proposal and Execution Controls | governance | high | `V2-SC-026` | Candidate |
| `V2-SC-028` | Implement Operation-Scoped Emergency Pause Controller | security | high | `V2-SC-005`, `V2-SC-026` | Candidate |
| `V2-SC-029` | Implement Transparent Proxy and Upgrade Administration | governance | high | `V2-SC-005`, `V2-SC-026`, `V2-SC-027` | Candidate |
| `V2-SC-030` | Implement Governed Parameter Change and Version Activation Flow | governance | high | `V2-SC-004`, `V2-SC-026`, `V2-SC-027`, `V2-SC-029` | Candidate |
| `V2-SC-031` | Build Canonical Modular Deployment Composition | deployment | high | `V2-SC-005`, `V2-SC-006`, `V2-SC-008`, `V2-SC-009`, `V2-SC-010`, `V2-SC-013`, `V2-SC-015`, `V2-SC-016`, `V2-SC-018`, `V2-SC-019`, `V2-SC-020`, `V2-SC-021`, `V2-SC-022`, `V2-SC-024`, `V2-SC-025`, `V2-SC-026`, `V2-SC-027`, `V2-SC-028`, `V2-SC-029`, `V2-SC-030` | Candidate |
| `V2-SC-032` | Implement Deployment Preflight and Post-Deployment Verification | deployment | high | `V2-SC-031` | Candidate |
| `V2-SC-033` | Generate Versioned ABI, Event, Address, Role, and Parameter Artifacts | deployment | high | `V2-SC-003`, `V2-SC-031`, `V2-SC-032` | Candidate |
| `V2-SC-034` | Implement Optimism Test Deployment and Source-Verification Workflow | deployment | high | `V2-SC-031`, `V2-SC-032`, `V2-SC-033` | Candidate |
| `V2-SC-035` | Build Deterministic Local End-to-End Lifecycle Fixture | testing | high | `V2-SC-031`, `V2-SC-032`, `V2-SC-033` | Candidate |
| `V2-SC-036` | Implement Cross-Module Integration Test Suite | testing | high | `V2-SC-035` | Candidate |
| `V2-SC-037` | Implement Protocol Invariant and Stateful Fuzz Suite | testing | high | `V2-SC-035`, `V2-SC-036` | Candidate |
| `V2-SC-038` | Benchmark Gas, Bounded Execution, and Denial-of-Service Limits | performance | high | `V2-SC-035`, `V2-SC-036` | Candidate |
| `V2-SC-039` | Validate Storage Layout, Upgrade Safety, and Migration Paths | security | high | `V2-SC-029`, `V2-SC-031`, `V2-SC-035` | Candidate |
| `V2-SC-040` | Audit Legacy Exclusion and Canonical Release Readiness | security | high | `V2-SC-034`, `V2-SC-035`, `V2-SC-036`, `V2-SC-037`, `V2-SC-038`, `V2-SC-039` | Candidate |

## Contract Epic Exit Gate

The epic is complete only when:

- all forty issue outcomes are implemented or formally replaced through an accepted backlog revision;
- the canonical modular deployment excludes legacy authority;
- all sixteen protocol invariants have executable evidence;
- token custody and every settlement path reconcile;
- role topology, timelocks, guardian limits, pauses, and upgrades pass;
- ABI, event, address, parameter, role, and checksum artifacts come from one release;
- Optimism test deployment rehearsal passes;
- no critical or high finding remains unresolved;
- API and frontend consumers can pin one approved contract release.

## Future Backlog Expansion

After this epic is reviewed, created, implemented, and re-audited, maintainers will revise current repository state and author the next eligible epic. Automation may propose candidates but cannot create or activate them without maintainer approval.
