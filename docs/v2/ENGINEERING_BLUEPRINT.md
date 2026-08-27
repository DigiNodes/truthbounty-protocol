# TruthBounty V2 Engineering Blueprint

**Version:** 1.0.0-proposed  
**Date:** 2026-08-27  
**Status:** Proposed  
**Governing specification:** [TruthBounty Protocol V2 Specification](PROTOCOL_V2_SPEC.md)

## 1. Purpose

This blueprint translates the V2 protocol specification into repository boundaries, delivery phases, integration contracts, environments, CI gates, operational controls, and definitions of ready and done.

It is an engineering execution document. It does not replace the protocol specification or accepted ADRs.

## 2. Delivery Principles

TruthBounty V2 engineering follows these rules:

1. blockchain authority is restored before application convenience work;
2. contracts publish versioned interfaces before consumers integrate;
3. derived data is reproducible from canonical events;
4. security and invariant tests are part of implementation, not a final add-on;
5. every cross-repository dependency is explicit;
6. existing GitHub issues remain historical and unchanged;
7. new work uses clean-slate V2 identifiers and complete issue contracts;
8. one engineering epic is reviewed at a time;
9. no candidate receives `Stellar Wave` automatically;
10. UI/UX implementation remains suspended until maintainers approve the redesigned interfaces.

## 3. Repository Responsibilities

| Repository | Engineering responsibility | Release output |
|---|---|---|
| `truthbounty-protocol` | Specifications, ADRs, invariants, audits, master backlog, dependency graph, Wave operations | Versioned governance documents |
| `truthbounty-contract` | Canonical modular contracts, tests, deployment, ABIs, events, manifests | Contract release package |
| `truthbounty-api` | SIWE, evidence services, indexer, PostgreSQL projections, APIs, cache, notifications, observability | API/indexer release |
| `truthbounty-frontend` | EVM wallet integration, user-signed transactions, indexed reads, transaction lifecycle, accessibility | Frontend release |

Only the three implementation repositories are currently eligible for Drips Stellar Wave activation.

## 4. Allowed Dependency Direction

```text
truthbounty-protocol
        ↓
truthbounty-contract
      ↙       ↘
truthbounty-api → truthbounty-frontend
```

The contract repository exports versioned artifacts to the API and frontend. The API exports indexed read interfaces to the frontend. No reverse dependency may grant an off-chain component protocol authority.

Cross-repository builds MUST pin releases. Consuming files from an unversioned branch or copying local ABI fragments into application code is prohibited.

## 5. Canonical Release Contract

A contract release MUST provide a machine-readable package with:

```text
release/
├── manifest.json
├── addresses/
│   └── <chain-id>.json
├── abi/
│   └── <ContractName>.json
├── events/
│   └── event-schema.json
├── parameters/
│   └── <chain-id>.json
├── roles/
│   └── <chain-id>.json
└── checksums.json
```

### 5.1 Manifest requirements

`manifest.json` MUST contain:

- protocol semantic version;
- source repository and commit;
- compiler and build-tool versions;
- chain ID and deployment environment;
- deployment block;
- contract, proxy, and implementation addresses;
- ABI and event-schema versions;
- parameter-set version;
- checksums for every exported artifact.

### 5.2 Consumer requirements

The API and frontend MUST:

- validate manifest schema and checksums at build time;
- reject unsupported chain IDs;
- reject zero, dummy, legacy, or unapproved addresses;
- expose the active protocol release in health or diagnostics output;
- fail CI when ABI-generated types are stale.

## 6. Delivery Phases

### Phase 0 — Governance Freeze

**Owner:** `truthbounty-protocol`

Deliverables:

- accepted V2 protocol specification;
- accepted engineering blueprint;
- accepted contract-topology ADR;
- clean-slate master backlog;
- cross-repository dependency graph;
- aligned threat model, tokenomics, and glossary;
- documented launch-parameter approval process.

Exit gate:

- at least two core maintainers approve the governing documents;
- no off-chain authority contradiction remains;
- the first implementation epic is fully scoped but not Wave-activated.

### Phase 1 — Canonical Contract Foundation

**Owner:** `truthbounty-contract`

The first implementation epic is the canonical contract-topology and deployment epic.

Deliverables:

- canonical interfaces and module boundary map;
- protocol configuration and module registry;
- claim and evidence commitments;
- stake custody and verification registry;
- deterministic aggregation and provisional settlement;
- dispute and single appeal round;
- reward, slashing, treasury, and pull-payment accounting;
- reputation-root proof boundary;
- governance, timelock, guardian, pause, and upgrade controls;
- one canonical deployment composition;
- generated release artifacts;
- local end-to-end fixture and security test suites.

Exit gate:

- every specification invariant has a contract test or an explicit downstream test owner;
- all token flows reconcile;
- role topology and upgrades pass automated checks;
- deprecated contracts are excluded from the canonical manifest;
- Optimism test deployment artifacts are published.

### Phase 2 — Indexer, Persistence, and Authentication

**Owner:** `truthbounty-api`

Deliverables:

- one PostgreSQL architecture and one ORM ownership strategy;
- versioned database migrations;
- raw block, transaction, log, and ancestry storage;
- confirmation and finality pipeline;
- idempotent event handlers;
- deterministic projections for claims, evidence, rounds, votes, stake, outcomes, disputes, rewards, treasury, governance, and reputation roots;
- reorganization rollback;
- replay from deployment block;
- database rebuild command and reconciliation report;
- full EIP-4361 SIWE;
- secure IPFS upload and pinning boundary;
- REST and WebSocket read APIs;
- indexing-status and protocol-release endpoints;
- metrics, structured logs, tracing, and operational runbooks.

Exit gate:

- PostgreSQL can be destroyed and rebuilt from canonical events plus explicitly non-authoritative metadata;
- reorg and replay tests pass;
- no service writes authoritative claim or settlement state;
- SIWE replay, domain, chain, expiration, and signature tests pass.

### Phase 3 — Frontend EVM Infrastructure

**Owner:** `truthbounty-frontend`

This phase covers architecture and behavior that do not depend on unapproved visual designs.

Deliverables:

- removal of Freighter and Stellar runtime code;
- Wagmi/Viem EVM client and approved Optimism chain enforcement;
- versioned release-artifact consumer;
- typed contract reads and writes;
- SIWE application session integration;
- transaction state machine;
- wrong-network, rejection, replacement, dropped, reverted, confirmed, indexing-delayed, and retry states;
- production mock and dummy-address prohibition;
- error classification and security warnings;
- test harnesses, accessibility infrastructure, performance budgets, and telemetry boundaries.

Exit gate:

- real testnet transactions complete against the canonical contract release;
- the frontend never fabricates protocol finality;
- all required transaction states have automated tests;
- final page and component implementation remains blocked until design approval.

### Phase 4 — Product Integration

**Owners:** all implementation repositories

Deliverables:

- claim submission;
- evidence contribution;
- verification and stake;
- provisional outcome and challenge;
- appeal participation;
- final settlement and withdrawals;
- account, history, notification, analytics, governance, and treasury reads;
- approved responsive and accessible interface implementation;
- cross-repository end-to-end tests.

Exit gate:

- each user journey completes on an approved Optimism test environment;
- API projections match contract state;
- accessibility and responsive criteria pass;
- security-critical errors fail safely.

### Phase 5 — Security and Controlled Launch

Deliverables:

- independent contract and application security review;
- resolved critical and high findings;
- launch parameter approval;
- production role ceremony;
- timelock and guardian verification;
- disaster recovery and incident response drills;
- monitoring dashboards and alerting;
- verified production deployment;
- staged public activation and rollback plan.

Exit gate:

- deployment checklist is signed by named maintainers;
- no unresolved critical or high security finding remains;
- on-chain roles and published manifests match;
- indexer replay and frontend smoke tests pass against production artifacts.

## 7. First Contract Epic Boundaries

The canonical contract-topology and deployment epic MUST be decomposed along genuine engineering boundaries.

Planned issue families include:

| Order | Outcome | Candidate identifier range |
|---|---|---|
| 1 | Canonical interfaces, storage types, errors, and event schemas | `V2-SC-001`–`V2-SC-003` |
| 2 | Protocol configuration and module registry | `V2-SC-004`–`V2-SC-005` |
| 3 | Claim and evidence commitments | `V2-SC-006`–`V2-SC-008` |
| 4 | Stake vault and verification rounds | `V2-SC-009`–`V2-SC-012` |
| 5 | Aggregation and provisional settlement | `V2-SC-013`–`V2-SC-015` |
| 6 | Dispute and appeal round | `V2-SC-016`–`V2-SC-018` |
| 7 | Rewards, slashing, treasury, and withdrawals | `V2-SC-019`–`V2-SC-023` |
| 8 | Reputation-root proof boundary | `V2-SC-024`–`V2-SC-025` |
| 9 | Governance, timelock, pause, and upgrades | `V2-SC-026`–`V2-SC-030` |
| 10 | Deployment composition and release artifacts | `V2-SC-031`–`V2-SC-034` |
| 11 | Integration, invariant, fuzz, and migration validation | `V2-SC-035`–`V2-SC-040` |

These ranges reserve planning identifiers only. They do not create GitHub issues and do not imply Drips activation. The exact issue bodies and dependencies belong in the master backlog and first epic review.

## 8. Contract Engineering Standards

The contract repository MUST use one canonical compiler and dependency configuration.

Required checks include:

- formatting and compilation with zero new warnings;
- unit and integration tests;
- property-based and fuzz tests;
- invariant tests for state, funds, roles, and lifecycle;
- static analysis;
- storage-layout compatibility;
- contract-size and gas reports;
- ABI and event diff detection;
- deployment simulation;
- source verification;
- release-artifact checksums;
- test coverage mapped to specification invariants.

Unbounded state-changing loops, push-based batch payouts, EOA administrators, undocumented delegate calls, and arbitrary recovery of user assets are prohibited.

## 9. Indexer Architecture

### 9.1 Durable tables

The PostgreSQL design SHOULD separate:

- chains and deployments;
- blocks and ancestry;
- transactions and logs;
- handler checkpoints;
- projection versions;
- claims and claim-state history;
- evidence commitments;
- verification rounds and positions;
- stake locks and withdrawals;
- aggregation and settlement results;
- disputes and appeal rounds;
- reward, slash, refund, and treasury allocations;
- governance, parameters, roles, pauses, and upgrades;
- non-authoritative user preferences and notification state.

### 9.2 Event identity

The unique event key is:

```text
chainId + blockHash + transactionHash + logIndex
```

Handlers MUST be idempotent. Projection changes MUST execute transactionally with their checkpoint.

### 9.3 Reorganizations

The indexer MUST:

1. compare stored ancestry with the provider;
2. detect the common ancestor;
3. mark or remove orphaned blocks and logs;
4. reverse affected projections deterministically;
5. ingest the canonical branch;
6. reapply handlers;
7. expose degraded or catching-up status.

A projection version change requires a replay or migration plan.

## 10. API Architecture

The API SHOULD be modularized into:

- configuration and secrets;
- database and migrations;
- chain provider and finality;
- indexer ingestion;
- projection handlers;
- SIWE authentication;
- evidence service;
- query API;
- WebSocket notifications;
- search and analytics;
- health, metrics, tracing, and audit logs.

Controllers MUST validate input. Outbound URL and file operations MUST defend against SSRF, path traversal, decompression bombs, oversized payloads, malicious MIME types, and unsafe redirects.

Rate limits SHOULD be risk-based. Authentication endpoints, evidence uploads, expensive searches, and WebSocket connection creation require specific limits.

## 11. Frontend Architecture

The frontend SHOULD separate:

- chain and release configuration;
- wallet/session adapters;
- generated contract clients;
- indexed API clients;
- transaction orchestration;
- protocol state queries;
- UI state and components;
- analytics and error reporting;
- test-only mocks.

The canonical transaction state machine is:

```text
idle
→ reviewing
→ awaiting_signature
→ submitted
→ confirming
→ confirmed
→ indexing
→ complete
```

Terminal or recovery states include:

- `rejected`;
- `wrong_network`;
- `reverted`;
- `dropped`;
- `replaced`;
- `indexing_delayed`;
- `retryable_error`;
- `fatal_error`.

A confirmed transaction is not equivalent to an indexed UI update. Both states must be represented.

## 12. Environments

| Environment | Purpose | Authority |
|---|---|---|
| Local deterministic chain | Unit, integration, invariant, and end-to-end development | Disposable |
| Optimism test network | Shared integration, deployment rehearsal, contributor validation | Test only |
| Production Optimism network | Public protocol | Canonical |

Each environment uses a separate signed manifest and parameter set. Production credentials and governance keys MUST NOT be used in development or CI.

Fork tests MAY validate compatibility but MUST NOT substitute for deterministic local tests.

## 13. CI Pipeline

### 13.1 Common gates

Every repository requires:

- deterministic installation;
- formatting;
- linting;
- type checking;
- build;
- unit and integration tests;
- dependency vulnerability review;
- secret scanning;
- CodeQL or approved equivalent;
- licence and dependency-provenance checks;
- generated-file freshness;
- changed-file scope validation.

### 13.2 Cross-repository gates

Release integration requires:

- ABI and event checksum validation;
- address-manifest schema validation;
- API handler coverage for every canonical event;
- frontend client generation for every exposed transaction method;
- test fixtures pinned to one protocol release;
- end-to-end claim lifecycle tests;
- confirmation and indexing reconciliation tests.

No pull request may claim cross-repository completion when downstream consumers or integration tests remain untracked.

## 14. Security Review Model

Security review is risk-based.

Mandatory human approval applies to:

- contracts and deployment;
- authentication and authorization;
- event finality and reorganization handling;
- settlement, treasury, rewards, slashing, disputes, and withdrawals;
- governance, roles, pauses, and upgrades;
- database migrations;
- cryptography and signature validation;
- CI or supply-chain security controls.

Required evidence may include threat analysis, test vectors, invariants, static-analysis output, gas or denial-of-service analysis, migration plan, and rollback procedure.

Automatic merge remains disabled by default.

## 15. Observability

All runtime components MUST expose:

- release version and environment;
- health and readiness;
- structured errors;
- latency and failure metrics;
- chain head, finalized head, indexed head, and lag;
- reorganization counts and rollback depth;
- projection failures and replay status;
- transaction submission and indexing latency;
- alertable security and accounting anomalies.

Logs MUST NOT contain private keys, session tokens, raw signatures beyond operational need, sensitive evidence, or unnecessary personal data.

## 16. Incident Response

The operational runbook MUST cover:

1. detection and severity;
2. guardian pause scope;
3. preservation of chain and application evidence;
4. maintainer and security-reviewer notification;
5. user communication;
6. patch, upgrade, migration, or rollback;
7. governance-controlled recovery;
8. post-incident accounting reconciliation;
9. public post-mortem after disclosure risk passes.

The guardian can pause but cannot independently unpause, upgrade, transfer treasury assets, or settle claims.

## 17. Issue Readiness

Clean-slate issue identifiers are:

| Prefix | Repository scope |
|---|---|
| `V2-SC-###` | Smart contracts, deployments, ABIs, invariants, and contract security |
| `V2-BE-###` | API, indexer, persistence, infrastructure, and backend security |
| `V2-FE-###` | Frontend architecture, EVM integration, behavior, testing, accessibility, and frontend security |
| `V2-DOC-###` | Implementation-specific documentation owned by a Wave-approved repository |

A new V2 issue is ready for creation only when:

- its governing specification section is accepted or explicitly approved for candidate drafting;
- its epic and repository owner are named;
- dependencies are identified;
- scope and non-goals are complete;
- acceptance criteria are objective;
- tests and security evidence are specified;
- no duplicate candidate exists;
- the work is independently meaningful;
- the issue can reasonably fit the contribution window.

An issue can reach `wave-ready` only after creation, dependency validation, security review, complexity review, and maintainer approval.

`Stellar Wave` remains absent until the separate final publication action.

## 18. Definition of Done

An implementation issue is done only when:

- code and documentation satisfy every acceptance criterion;
- required tests pass;
- security evidence is attached;
- generated artifacts are current;
- integration dependencies are updated or explicitly tracked;
- no protocol invariant is violated;
- review comments are resolved;
- CI passes on the final commit;
- the implementation is merged by an authorized maintainer;
- post-merge backlog and dependency state are reassessed.

Code existence, a passing unit test subset, or a closed historical issue is not completion evidence.

## 19. Backlog and Dependency Outputs

After this blueprint is accepted, maintainers create:

- `docs/planning/MASTER_V2_BACKLOG.md`;
- `docs/planning/ISSUE_DEPENDENCIES.md`;
- `docs/planning/epics/V2-EPIC-SC-001-canonical-contract-topology-and-deployment.md`;
- fully authored issue source files for the first epic.

The first epic is reviewed as a whole. Its issue files may then be created in `truthbounty-contract` without `Stellar Wave`. Activation occurs only after the merged Wave-operations publication gate is satisfied.

## 20. Blueprint Acceptance Gate

This blueprint may move from `Proposed` to `Accepted` when:

- at least two core maintainers approve it;
- all specification modules and invariants have engineering owners;
- phase exit criteria are testable;
- artifact and dependency directions are unambiguous;
- CI and security gates are assigned to repositories;
- the first contract epic boundaries are approved;
- no Wave-ineligible repository is scheduled for activation;
- internal links validate.

## 21. Related Documents

- [TruthBounty Protocol V2 Specification](PROTOCOL_V2_SPEC.md)
- [ADR-0001 — Canonical TruthBounty V2 Contract Topology](../architecture/ADR-0001-canonical-v2-contract-topology.md)
- [TruthBounty V2 Audit Reconciliation](../audits/TRUTHBOUNTY_V2_AUDIT_RECONCILIATION.md)
- [Drips Stellar Wave Operations](../operations/DRIPS_STELLAR_WAVE_OPERATIONS.md)
