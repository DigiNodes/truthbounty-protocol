# TruthBounty V2 Audit Reconciliation

**Document version:** 1.1.0  
**Date:** 2026-08-26  
**Status:** Proposed baseline  
**Scope:** `truthbounty-protocol`, `truthbounty-contract`, `truthbounty-api`, and `truthbounty-frontend`

## 1. Purpose

This document reconciles the TruthBounty V2 architectural audit with the implementation and GitHub issue state visible on 2026-08-25.

It establishes the remediation baseline that must be reviewed before implementation work resumes. It does not declare the current implementation production-ready or replace the full protocol specification.

Existing GitHub issues are historical records only. They will not be reopened, modified, relabelled, superseded in place, or activated for V2. Every implementation task will be authored as a new clean-slate V2 issue.

## 2. Non-Negotiable V2 Rule

> The blockchain is the canonical single source of truth for all protocol state.

Accordingly:

- smart contracts own claims, votes, stake accounting, consensus, settlement, slashing, rewards, disputes, and authoritative reputation commitments;
- the indexer consumes finalized contract events and creates deterministic PostgreSQL projections that are rebuildable from chain history;
- the backend provides authentication, IPFS support, indexed queries, caching, notifications, analytics, and other non-authoritative services;
- the frontend signs state-changing transactions directly through the user's wallet;
- neither the backend nor the frontend may independently create or finalize authoritative protocol state.

## 3. Executive Reconciliation

The repositories are in a transitional state between a backend-authoritative V1 design and the event-driven V2 protocol. The audit's primary code findings are confirmed, but its action plan cannot be executed safely until the canonical contract topology and documentation hierarchy are established.

The audit also relied on local planning documents that were not present on `truthbounty-protocol/main` at the time of verification. Consequently, GitHub contributors could not inspect the purported V2 specification, master backlog, dependency graph, or audit baseline.

## 4. Verified Implementation Findings

| ID | Repository | Finding | Severity | Required disposition |
|---|---|---|---|---|
| AR-001 | `truthbounty-contract` | `FullDeploy.ts` composes the legacy `TruthBounty` and `TruthBountyClaims` deployment instead of a canonical modular V2 suite. | Blocker | Replace the canonical deployment after ADR-0001 is accepted. |
| AR-002 | `truthbounty-contract` | `Rewards.ts` passes one constructor argument to `TruthBountyClaims`, whose constructor requires the token address and initial administrator. | High | Do not repair the production path if the legacy module is removed; retain only if explicitly required for migration or tests. |
| AR-003 | `truthbounty-contract` | `TruthBountyClaims` permits treasury-controlled push settlement and recovery of the bounty token through `rescueTokens`. | Blocker | Deprecate from the V2 production deployment and prohibit protocol funds from being routed through it. |
| AR-004 | `truthbounty-contract` | `TruthBountyWeighted` allocates only a configured share of slashed stake to rewards and has no explicit treasury or burn destination for the remainder. | High | Implement deterministic treasury/burn accounting in the canonical modular contracts. |
| AR-005 | `truthbounty-api` | SIWE challenge generation produces EIP-4361 messages, while login validates only the legacy `Sign in to TruthBounty: <nonce>` template. | Blocker | Create a new V2 backend issue for full SIWE validation. |
| AR-006 | `truthbounty-api` | Claim creation and claim resolution still write authoritative lifecycle state directly to the database. | Blocker | Convert mutation paths into transaction-observation and indexed-query workflows. |
| AR-007 | `truthbounty-api` | The event indexer stores raw logs but does not project finalized events into claim, vote, stake, reward, dispute, and reputation read models. | Blocker | Create new V2 backend issues for deterministic projections, replay, and reorganization handling. |
| AR-008 | `truthbounty-api` | TypeORM and Prisma use separate SQLite databases. | High | Create a new V2 backend issue for one PostgreSQL architecture and an approved ORM ownership strategy. |
| AR-009 | `truthbounty-frontend` | Mock wallet providers and synthetic transaction receipts remain in application code. | Blocker | Replace application usage with real Wagmi/Viem providers while retaining isolated test mocks only. |
| AR-010 | `truthbounty-frontend` | Rewards use a dummy mainnet address and an ABI that calls `claimRewards()` instead of the implemented settlement-reward interface. | Blocker | Consume versioned ABI/address exports from the canonical deployment. |
| AR-011 | `truthbounty-frontend` | `@stellar/freighter-api` is used in the EVM account hook. | High | Remove the Stellar wallet path from the Optimism/EVM application runtime. |

These findings are pre-production blockers. They do not, by themselves, prove that a funded production deployment has been exploited.

## 5. Legacy Issue Inventory and Clean-Slate Decision

### 5.1 Historical inventory

At the 2026-08-25 verification point:

- the contract repository contained legacy `SC-001` through `SC-035` issues;
- the API repository contained legacy `BE-001` through `BE-040` issues;
- no consistent `FE-###` frontend series existed;
- issue closure did not reliably demonstrate that V2 acceptance criteria were satisfied;
- labels included both `Stellar Wave` and lowercase `stellar-wave`.

This inventory remains useful as audit evidence, but it is not the V2 implementation backlog.

### 5.2 Clean-slate issue policy

The V2 programme will:

1. leave every existing issue unchanged as historical evidence;
2. not reopen, edit, relabel, repurpose, or activate an existing issue;
3. create fully rewritten, immediately assignable issues from the accepted V2 specification and current repository state;
4. use fresh identifiers:
   - `V2-SC-###` for smart-contract work;
   - `V2-BE-###` for API, indexer, and backend work;
   - `V2-FE-###` for frontend work;
   - `V2-DOC-###` for implementation-specific documentation in a Wave-approved repository;
5. link new issues to audit finding IDs, protocol sections, dependencies, and security requirements rather than treating old issue numbers as authority;
6. complete and review one genuine engineering epic at a time before publishing its contributor-ready tasks.

Existing code may be retained when it passes the new issue's acceptance criteria and security checks. Existing issue status does not create any presumption of completeness.

### 5.3 Wave labels

Internal preparation labels are:

- `wave-candidate`;
- `wave-reviewed`;
- `wave-ready`;
- `wave-blocked`.

The exact external activation label is `Stellar Wave`. It must not appear on generated candidates and may be applied only as the final action of a maintainer-controlled publication step.

The lowercase `stellar-wave` label is not a publication label and must not be used for the new backlog. Its eventual retirement is a separate maintenance action that must not modify the historical issues.

## 6. Canonical Repository Boundaries

| Repository | Owns | Must not own |
|---|---|---|
| `truthbounty-protocol` | Protocol specification, architecture decisions, invariants, governance rules, audit history, master planning, dependency graph | Solidity, TypeScript application code, deployment scripts, database schemas, implementation tests |
| `truthbounty-contract` | Canonical V2 contracts, tests, deployment modules, ABI exports, address manifests | Backend-derived settlement authority |
| `truthbounty-api` | SIWE, IPFS services, event indexing, PostgreSQL projections, query APIs, caching, notifications, analytics | Independent creation, voting, settlement, slashing, reward, or finalization authority |
| `truthbounty-frontend` | Wallet integration, direct contract transactions, transaction lifecycle UX, indexed read experiences | Synthetic production transactions or independent protocol state |

Allowed dependency direction:

1. `truthbounty-protocol` documents constrain all implementation repositories.
2. `truthbounty-contract` exports versioned ABIs to the frontend.
3. `truthbounty-contract` exports deployment addresses and event definitions to the API.
4. `truthbounty-api` exposes indexed REST and WebSocket data to the frontend.

No reverse dependency may grant an off-chain component authority over protocol state.

## 7. Remediation Waves

### Wave 0 — Governance and Architecture Freeze

1. Accept ADR-0001 or replace it with an explicitly approved alternative.
2. Publish the complete V2 protocol specification.
3. Publish the engineering blueprint, master backlog, and dependency graph.
4. Map every audit finding to one or more newly authored clean-slate V2 issues.
5. Publish the new dependency graph and issue identifiers without changing historical issues.
6. Mark superseded V1 code paths and documentation clearly.

### Wave 1 — Emergency Hardening

1. Remove `TruthBountyClaims` from the canonical production deployment.
2. Fix SIWE verification with nonce, domain, URI, chain ID, issued-at, expiration, and signature validation.
3. Establish the canonical modular deployment and publish versioned ABIs/address manifests.
4. Route all slashed-token outcomes deterministically through the treasury/reward/burn rules.

### Wave 2 — Restore Blockchain Authority

1. Implement finalized-event projections and deterministic replay.
2. Consolidate persistence into PostgreSQL.
3. Remove database-authoritative claim creation and resolution.
4. Expose query/read models and transaction-indexing status without acting as the transaction signer.

### Wave 3 — Frontend EVM Integration

1. Establish real Wagmi/Viem provider and supported Optimism network configuration.
2. Remove Stellar Freighter from the EVM runtime.
3. Bind claim, verification, settlement, dispute, and reward flows to versioned contract exports.
4. Implement the transaction lifecycle: review, signature, submission, confirmation, indexing, and UI refresh.

## 8. New V2 Issue Authoring Rules

Every new V2 issue must:

1. describe one independently meaningful engineering outcome;
2. be fully written, mature, and immediately assignable, with no placeholders or skeleton sections;
3. identify its epic, governing protocol section, audit findings, repository owner, and upstream dependencies;
4. define objective acceptance criteria, required tests, security checks, deliverables, and explicit non-goals;
5. fit within a Wave contribution window or be decomposed along genuine engineering boundaries;
6. avoid duplicate, overlapping, obsolete, or architecture-blocked work;
7. avoid frontend visual implementation against unapproved designs, provisional ABIs, dummy addresses, or unfrozen chain configuration;
8. include only internal preparation labels during drafting and review;
9. omit `Stellar Wave` until the final maintainer-controlled publication action;
10. never be split merely to inflate issue or contribution counts.

The new backlog is generated from current code, accepted architecture, and unresolved audit findings. Historical issue titles, bodies, labels, assignments, and completion states are not copied forward as authoritative scope.

## 9. Exit Criteria for the Reconciliation Phase

This phase is complete only when:

- ADR-0001 has been accepted or superseded;
- the V2 specification and engineering blueprint are available on GitHub;
- every audit finding has an owner and one or more new V2 issue mappings;
- the clean-slate identifiers, dependencies, and epic boundaries are published;
- Wave preparation labels and the protected `Stellar Wave` activation gate are documented;
- canonical contracts, deployment outputs, event schemas, and repository boundaries are unambiguous;
- no implementation wave depends on an unpublished local document.

## 10. Related Decision

- [ADR-0001 — Canonical TruthBounty V2 Contract Topology](../architecture/ADR-0001-canonical-v2-contract-topology.md)
