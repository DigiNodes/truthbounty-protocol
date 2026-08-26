# TruthBounty Repository Ownership and Dependencies

This document defines the ownership boundaries and permitted dependency direction across the TruthBounty V2 repositories.

TruthBounty is not a monorepo. Each repository is independently versioned, but every implementation must conform to the decisions and invariants maintained in `truthbounty-protocol`.

## Canonical Protocol Repository

**Repository:** [`DigiNodes/truthbounty-protocol`](https://github.com/DigiNodes/truthbounty-protocol)

Owns:

- protocol specifications and state machines;
- architecture decision records;
- protocol invariants and trust assumptions;
- governance and upgrade rules;
- tokenomics and treasury-allocation rules;
- threat models and audit history;
- cross-repository roadmaps, backlogs, and dependency graphs.

Must not contain implementation code, deployment scripts, database schemas, implementation tests, or environment-specific configuration.

## Smart Contracts

**Repository:** [`DigiNodes/truthbounty-contract`](https://github.com/DigiNodes/truthbounty-contract)

Owns:

- canonical V2 Solidity contracts and interfaces;
- claim, vote, stake, settlement, slashing, reward, treasury, dispute, governance, and reputation-commitment enforcement;
- unit, integration, invariant, fuzz, and deployment tests;
- canonical deployment composition;
- versioned ABI, event-schema, and address-manifest exports.

Must not delegate authoritative protocol transitions to the API or a privileged off-chain settler.

## Backend API and Indexer

**Repository:** [`DigiNodes/truthbounty-api`](https://github.com/DigiNodes/truthbounty-api)

Owns:

- SIWE authentication and application authorization;
- IPFS upload, validation, and pinning support;
- finalized-event ingestion, reorganization handling, replay, and deterministic projections;
- PostgreSQL read models and Redis caching;
- REST, WebSocket, search, notification, analytics, and operational APIs;
- explicitly non-authoritative metadata and application services.

Must not:

- create authoritative claims or votes;
- independently resolve or finalize claims;
- calculate a competing settlement result;
- custody user signing authority;
- mutate protocol state without a user- or governance-authorized on-chain transaction.

## Frontend dApp

**Repository:** [`DigiNodes/truthbounty-frontend`](https://github.com/DigiNodes/truthbounty-frontend)

Owns:

- supported EVM wallet connection and network enforcement;
- direct user-signed smart-contract transactions;
- claim, evidence, verification, staking, settlement, dispute, reward, governance, and account experiences;
- transaction review, signing, submission, confirmation, indexing, error, and replacement UX;
- indexed feeds, dashboards, analytics, and protocol-history views.

Must not:

- synthesize production transaction hashes or receipts;
- use dummy contract addresses in production builds;
- treat local state or backend responses as authoritative protocol finality;
- introduce a non-EVM wallet runtime into the canonical Optimism application without an accepted protocol decision.

## Allowed Dependency Direction

1. `truthbounty-protocol` documents constrain all other repositories.
2. `truthbounty-contract` exports versioned ABIs and event schemas to `truthbounty-frontend` and `truthbounty-api`.
3. `truthbounty-contract` exports chain-specific address manifests to `truthbounty-frontend` and `truthbounty-api`.
4. `truthbounty-api` exposes indexed REST and WebSocket views to `truthbounty-frontend`.

No other dependency may transfer protocol authority from the contracts to an off-chain component.

## Change-Control Rules

- Protocol-rule changes begin in `truthbounty-protocol`.
- Breaking ABI or event changes require an accepted decision and migration plan.
- Application repositories must pin a versioned contract release.
- Existing GitHub issues are archived historical records and must not be reopened, modified, relabelled, or activated as V2 work.
- All implementation work must be represented by newly authored clean-slate V2 issues with fresh identifiers, current dependencies, objective acceptance criteria, tests, and security requirements.
- Cross-repository changes must link their governing document, new V2 dependency issues, and integration tests.

## Drips Stellar Wave Boundary

Drips Stellar Wave is a contribution and funding programme, not a TruthBounty runtime dependency.

Wave-approved repositories are:

- `truthbounty-contract`;
- `truthbounty-api`;
- `truthbounty-frontend`.

`truthbounty-protocol` is not currently Wave-approved. Cross-repository specifications, ADRs, audit history, and master planning remain maintainer-governed here. Implementation-specific documentation may be contributed in the approved repository that owns it.

The external `Stellar Wave` label is an activation control. It may be applied only after a new V2 issue reaches `wave-ready` and a maintainer explicitly approves publication. Candidate generation and backlog automation must never apply it.

## Current Governance References

- [ADR-0001 — Canonical TruthBounty V2 Contract Topology](docs/architecture/ADR-0001-canonical-v2-contract-topology.md)
- [TruthBounty V2 Audit Reconciliation](docs/audits/TRUTHBOUNTY_V2_AUDIT_RECONCILIATION.md)
- [Drips Stellar Wave Operations](docs/operations/DRIPS_STELLAR_WAVE_OPERATIONS.md)

