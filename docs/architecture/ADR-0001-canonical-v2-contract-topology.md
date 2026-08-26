# ADR-0001: Canonical TruthBounty V2 Contract Topology

**Status:** Proposed  
**Date:** 2026-08-25  
**Last updated:** 2026-08-26  
**Decision owners:** TruthBounty maintainers  
**Related audit:** [TruthBounty V2 Audit Reconciliation](../audits/TRUTHBOUNTY_V2_AUDIT_RECONCILIATION.md)

## Context

TruthBounty currently contains three competing implementation directions:

1. a legacy backend-authoritative architecture in which claims and verdicts are created off-chain;
2. a large `TruthBountyWeighted` contract that contains claim, vote, stake, settlement, slashing, reward, and reputation-update logic;
3. a modular contract suite and issue backlog based on dedicated registries and engines.

Deployment modules still compose legacy contracts, while closed implementation issues and local V2 planning documents imply that a modular architecture is the intended destination. Without a binding topology decision, contract, backend, indexer, and frontend work can each target a different interface.

## Decision

TruthBounty V2 will use a modular smart-contract suite as the canonical production architecture.

The suite will separate protocol responsibilities into independently auditable modules with explicit interfaces. The exact composition may evolve through the protocol specification, but the minimum responsibility boundaries are:

- claim registry and lifecycle;
- evidence commitment management;
- verification and stake submission;
- weighted aggregation;
- deterministic settlement;
- dispute resolution;
- reward distribution and escrow;
- slashing;
- treasury accounting;
- reputation commitments and update authorization;
- governance-controlled parameters, pausing, and upgrades.

No backend service may replace these contracts as the authority for claim creation, voting, settlement, slashing, rewards, or finalization.

## Network and Programme Boundary

TruthBounty V2 executes on Optimism/EVM. Its contracts, wallets, transactions, settlement, ABIs, address manifests, and chain configuration must remain EVM-compatible.

Drips Stellar Wave is used only for open-source contribution coordination and funding. It does not introduce Stellar, Soroban, Freighter, or any Stellar runtime dependency into TruthBounty. A future network change would require a separate accepted ADR and must not be inferred from programme participation.

## Component Status

### Modular V2 contracts

The modular suite is the target production system. Existing modules must not be assumed complete merely because an issue is closed. They require interface reconciliation, integration tests, invariant tests, deployment composition, and end-to-end event verification.

### `TruthBountyWeighted.sol`

`TruthBountyWeighted.sol` is a transitional reference implementation, not the default V2 production deployment.

It may be used to:

- preserve tested formulas and invariants;
- identify integration behavior that modular contracts must retain;
- support controlled migration tests;
- compare gas, storage, and settlement behavior.

It must not become the frontend/backend integration target unless this ADR is superseded by a later accepted decision.

### `TruthBountyClaims.sol`

`TruthBountyClaims.sol` is deprecated for V2 protocol settlement.

The canonical production deployment must not:

- route protocol settlement funds through it;
- grant it authority to determine winners;
- use treasury push payouts as the standard reward path;
- rely on `rescueTokens` for custody of protocol funds.

It may remain temporarily for legacy tests or an explicitly documented migration, provided it is excluded from production deployment manifests.

## Canonical Interaction Model

### State-changing flow

1. The frontend obtains metadata or evidence CIDs from non-authoritative services when necessary.
2. The user reviews the exact transaction.
3. The user's EVM wallet signs and submits the transaction directly to the canonical V2 contract.
4. Contracts validate and mutate authoritative protocol state.
5. Contracts emit versioned events.
6. The indexer waits for the configured finality threshold.
7. The indexer projects finalized events into PostgreSQL.
8. The API exposes the indexed view and transaction-indexing status.
9. The frontend refreshes from the indexed view and may cross-check chain state.

### Read flow

- contract reads are used for security-critical preflight and canonical state checks;
- PostgreSQL/Redis-backed APIs provide search, feeds, analytics, history, notifications, and optimized views;
- derived storage must be rebuildable from contract history plus explicitly non-authoritative application metadata.

## Deployment Requirements

The canonical deployment process must:

1. deploy only the approved modular V2 suite;
2. validate constructor arguments and dependency addresses before broadcasting;
3. configure roles with least privilege;
4. transfer governance and administration according to the approved governance model;
5. publish a chain-specific, versioned address manifest;
6. publish versioned ABIs and event schemas;
7. prevent unsupported network configuration in the frontend and API;
8. run post-deployment invariant and role checks;
9. fail CI if application configuration references dummy, zero, legacy, or unapproved addresses.

## Treasury and Slashing Requirements

Every token entering protocol custody must have a deterministic accounting destination.

For each settlement:

```text
total slashed
= winner reward allocation
+ treasury allocation
+ burn allocation
+ explicitly defined insurance allocation
```

The allocation must equal the total slashed amount, subject only to documented integer-rounding behavior. No surplus may remain unaccounted for in a contract balance.

Treasury withdrawals, emergency recovery, and governance actions must be constrained by role separation, events, and the approved timelock or multisignature policy.

## Event and ABI Requirements

- Events are part of the protocol interface, not implementation detail.
- Every authoritative transition must emit a versioned event sufficient for deterministic projection.
- ABI and event-schema exports must be generated from the canonical deployment source.
- Frontend and API builds must consume the same release version.
- Breaking event or ABI changes require a protocol decision and migration plan.

## Alternatives Considered

### Adopt `TruthBountyWeighted.sol` as the production contract

Rejected as the default because its broad responsibility surface makes auditing, replacement, governance, and integration boundaries harder. Its verified logic remains valuable as a reference.

### Continue the backend-authoritative V1 design

Rejected because it violates the V2 source-of-truth invariant and permits off-chain services to create divergent protocol outcomes.

### Deploy both legacy and modular systems as peers

Rejected because two authoritative paths would produce ambiguous state, incompatible events, and unsafe frontend/API routing.

## Consequences

### Positive

- one unambiguous production topology;
- smaller audit surfaces;
- explicit ownership and interfaces;
- deterministic event projections;
- consistent ABI/address distribution;
- clearer migration and governance controls.

### Costs

- existing implementation must be re-audited independently of legacy issue status;
- legacy issues remain archived while new clean-slate V2 issues govern all implementation work;
- integration and deployment work may supersede legacy implementation;
- cross-module invariant testing becomes mandatory;
- frontend development remains blocked until the first canonical deployment artifacts are published.

## Migration Sequence

1. Inventory every existing contract and map it to the modular responsibility model.
2. Mark each contract as canonical, transitional, superseded, or deprecated.
3. Reconcile interfaces, events, role ownership, and token flows.
4. Implement missing treasury and settlement accounting.
5. Build a canonical deployment module and local integration fixture.
6. run unit, integration, invariant, fuzz, and fork tests;
7. publish ABIs, event schemas, and address manifests;
8. migrate the indexer and frontend to the published release;
9. disable and archive legacy production paths.

## Acceptance Criteria

This ADR may move from `Proposed` to `Accepted` when:

- maintainers approve the modular V2 topology;
- every deployed module and interface has a named owner;
- the canonical deployment composition is documented;
- treasury and slashing allocations are exhaustive;
- the event schema can rebuild all authoritative protocol state;
- the backend has no independent authoritative mutation path;
- the frontend integration target is a versioned contract release;
- legacy contracts have an explicit migration or deprecation status.
