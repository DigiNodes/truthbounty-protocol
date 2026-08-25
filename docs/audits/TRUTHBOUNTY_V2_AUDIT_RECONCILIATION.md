# TruthBounty V2 Audit Reconciliation

**Document version:** 1.0.0  
**Date:** 2026-08-25  
**Status:** Proposed baseline  
**Scope:** `truthbounty-protocol`, `truthbounty-contract`, `truthbounty-api`, and `truthbounty-frontend`

## 1. Purpose

This document reconciles the TruthBounty V2 architectural audit with the implementation and GitHub issue state visible on 2026-08-25.

It establishes the remediation baseline that must be reviewed before implementation work resumes. It does not declare the current implementation production-ready, reopen issues automatically, or replace the full protocol specification.

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
| AR-005 | `truthbounty-api` | SIWE challenge generation produces EIP-4361 messages, while login validates only the legacy `Sign in to TruthBounty: <nonce>` template. | Blocker | Reopen or supersede BE-001 and implement full SIWE validation. |
| AR-006 | `truthbounty-api` | Claim creation and claim resolution still write authoritative lifecycle state directly to the database. | Blocker | Convert mutation paths into transaction-observation and indexed-query workflows. |
| AR-007 | `truthbounty-api` | The event indexer stores raw logs but does not project finalized events into claim, vote, stake, reward, dispute, and reputation read models. | Blocker | Reopen or supersede BE-003 and implement deterministic projection handlers plus replay. |
| AR-008 | `truthbounty-api` | TypeORM and Prisma use separate SQLite databases. | High | Complete BE-002 using one PostgreSQL architecture and an approved ORM ownership strategy. |
| AR-009 | `truthbounty-frontend` | Mock wallet providers and synthetic transaction receipts remain in application code. | Blocker | Replace application usage with real Wagmi/Viem providers while retaining isolated test mocks only. |
| AR-010 | `truthbounty-frontend` | Rewards use a dummy mainnet address and an ABI that calls `claimRewards()` instead of the implemented settlement-reward interface. | Blocker | Consume versioned ABI/address exports from the canonical deployment. |
| AR-011 | `truthbounty-frontend` | `@stellar/freighter-api` is used in the EVM account hook. | High | Remove the Stellar wallet path from the Optimism/EVM application runtime. |

These findings are pre-production blockers. They do not, by themselves, prove that a funded production deployment has been exploited.

## 5. GitHub Planning-State Drift

### 5.1 Smart contracts

- GitHub contains 35 numbered issues: `SC-001` through `SC-035`.
- 28 were closed and 7 were open at verification time.
- The audit and local backlog references mention `SC-036`, but no `SC-036` GitHub issue existed.
- `SC-001` and `SC-026` were closed even though the repository still lacked a canonical integrated V2 deployment.
- `SC-012` remained open and is the appropriate upstream scope for treasury routing and accounting, subject to ADR-0001.

### 5.2 Backend

- GitHub contains 40 numbered issues: `BE-001` through `BE-040`.
- 30 were closed and 10 were open at verification time.
- `BE-001`, `BE-003`, `BE-006`, and `BE-007` were closed despite current code failing their V2 architectural acceptance criteria.
- Multiple backend issues overlap in AI, notifications, jobs, health checks, audit logging, search, and feature flags. They require deduplication before additional issue generation.

### 5.3 Frontend

- No `FE-###` issue series existed at verification time.
- Frontend issue generation must wait until the canonical contracts, event schemas, ABIs, addresses, and chain configuration are approved.

### 5.4 Labels

GitHub currently contains both `Stellar Wave` and `stellar-wave`. The lowercase `stellar-wave` label is canonical for generated issue files. Label sections must use a Markdown list:

```markdown
# 🏷 Labels

- backend
- architecture
- protocol-critical
- web3
- complexity-high
- stellar-wave

---
```

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
4. Map every audit finding to an existing issue, a reopened issue, or one new corrective issue.
5. Mark superseded V1 code paths and documentation clearly.

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

## 8. Issue Reconciliation Rules

For each affected issue:

1. Compare the implemented code against every acceptance criterion.
2. Reopen the issue when its original scope remains valid and incomplete.
3. Create a corrective issue only when the original scope is obsolete, materially changed, or too broad.
4. Link the corrective issue to the superseded issue and the governing protocol document.
5. Do not close an issue solely because code exists; tests, integration, documentation, and protocol invariants must also pass.
6. Do not generate frontend implementation issues against dummy addresses or provisional ABIs.

## 9. Exit Criteria for the Reconciliation Phase

This phase is complete only when:

- ADR-0001 has been accepted or superseded;
- the V2 specification and engineering blueprint are available on GitHub;
- every audit finding has an owner and issue disposition;
- issue counts and missing identifiers are reconciled;
- duplicated labels are normalized;
- canonical contracts, deployment outputs, event schemas, and repository boundaries are unambiguous;
- no implementation wave depends on an unpublished local document.

## 10. Related Decision

- [ADR-0001 — Canonical TruthBounty V2 Contract Topology](../architecture/ADR-0001-canonical-v2-contract-topology.md)
