# 🔍 TruthBounty Protocol

**Decentralized truth-verification infrastructure**  
*A public-good protocol for establishing verifiable consensus through cryptoeconomic guarantees*

---

## What is TruthBounty?

TruthBounty is a decentralized protocol for submitting evidence-backed claims, coordinating community verification, and resolving outcomes through transparent staking, reputation, settlement, reward, slashing, and dispute rules.

TruthBounty treats truth verification as public infrastructure. No backend operator, database administrator, or frontend application is permitted to independently create or finalize authoritative protocol outcomes.

## Canonical V2 Rule

> **The blockchain is the canonical single source of truth for all protocol state.**

Smart contracts own:

- claim existence and lifecycle;
- verification votes and stake accounting;
- consensus and settlement outcomes;
- slashing, rewards, and treasury allocations;
- disputes and authoritative reputation commitments.

Off-chain systems index and present this state, but must not replace it.

## V2 System Boundaries

### Smart contracts

- enforce the canonical protocol state machines and economic rules;
- emit versioned events for every authoritative transition;
- expose versioned ABIs and deployment-address manifests;
- use governance-controlled roles, parameters, pauses, and upgrades.

### Indexer and backend API

- consume finalized blockchain events;
- build deterministic PostgreSQL read models that are rebuildable from chain history;
- provide SIWE authentication, IPFS services, caching, search, notifications, analytics, and WebSocket updates;
- never independently create claims, votes, verdicts, settlements, rewards, or finalization state.

### Frontend dApp

- connects supported EVM wallets through Wagmi/Viem;
- submits every state-changing action directly to canonical contracts;
- displays transaction submission, confirmation, indexing, and final UI state;
- consumes versioned ABIs, addresses, events, and indexed APIs.

## Protocol Invariants

All implementations must preserve the following rules:

1. Claims originate on-chain through a user-signed transaction.
2. Votes and stakes are recorded and enforced on-chain.
3. Settlement is deterministic and cannot be overridden by the backend.
4. No reward exists without verifiable protocol participation.
5. Slashed value has an exhaustive, auditable accounting destination.
6. Reputation influences protocol behavior only through an approved commitment and verification mechanism.
7. Critical transitions emit sufficient events for deterministic reconstruction.
8. Derived databases are disposable and rebuildable from finalized events plus explicitly non-authoritative metadata.
9. Frontend and API integrations use the same versioned contract release.
10. A PR that violates an invariant must be rejected or redesigned.

## Repository Structure

TruthBounty is split across four independently versioned repositories:

| Repository | Responsibility |
|---|---|
| [`truthbounty-protocol`](https://github.com/DigiNodes/truthbounty-protocol) | Canonical specification, architecture, governance, invariants, audits, and cross-repository planning |
| [`truthbounty-contract`](https://github.com/DigiNodes/truthbounty-contract) | Smart contracts, tests, deployment modules, ABIs, events, and address manifests |
| [`truthbounty-api`](https://github.com/DigiNodes/truthbounty-api) | SIWE, IPFS, indexing, PostgreSQL projections, cache, query APIs, notifications, and analytics |
| [`truthbounty-frontend`](https://github.com/DigiNodes/truthbounty-frontend) | Wallet integration, direct contract interactions, transaction UX, and indexed read experiences |

See [`repos.md`](repos.md) for the allowed dependency direction and detailed ownership boundaries.

## Current V2 Governance Baseline

- [ADR-0001 — Canonical TruthBounty V2 Contract Topology](docs/architecture/ADR-0001-canonical-v2-contract-topology.md)
- [TruthBounty V2 Audit Reconciliation](docs/audits/TRUTHBOUNTY_V2_AUDIT_RECONCILIATION.md)

The complete `PROTOCOL_V2_SPEC.md`, engineering blueprint, master backlog, and dependency graph must be published and reviewed before the remediation implementation waves are considered unfrozen.

## Repository Ownership

This repository owns documentation and cross-repository governance only. It must not contain:

- Solidity or application TypeScript;
- deployment scripts or runtime configuration;
- database schemas;
- implementation-specific tests;
- copied ABIs or environment-specific addresses.

Protocol-rule changes must be documented here before implementation repositories adopt them.

## Contribution Order

1. Read the current protocol decisions and audit baseline.
2. Confirm that the issue is not superseded or already covered elsewhere.
3. Identify the canonical contract release and upstream dependencies.
4. Implement in the owning repository.
5. Test protocol invariants and integration behavior.
6. Link the implementation PR to the governing document and issue.

Code existence alone does not satisfy an issue. Acceptance criteria, tests, integration, documentation, and protocol invariants must all pass.

## Ecosystem Alignment

- **Optimism / EVM:** canonical V2 execution and settlement environment.
- **IPFS:** content-addressed evidence and metadata storage.
- **World ID:** optional Sybil-resistance signal, subject to the protocol specification.
- **Drips Network:** open-source funding and contribution coordination.
- **Stellar:** exploratory only; it is not part of the canonical V2 EVM wallet runtime.

## Security

Report security-sensitive findings privately to the maintainers before public disclosure when exploitation could place users or funds at risk.

Protocol deployment is blocked until canonical contract composition, roles, treasury accounting, event schemas, and migration controls pass review.

## License

MIT — open-source, forkable, and community-driven.

---

**Truth is not free—but it should be worth defending.**

