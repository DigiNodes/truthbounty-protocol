# Privileged Screen Authority

**Status:** Approved maintainer authority  
**Approved:** 2026-10-09  
**Batch:** 5 — Operations, governance and emergency guardian  
**Runtime:** Optimism/EVM only

## Purpose

This authority translates the approved role/capability matrix, administrative boundary, route contract and transaction-state model into high-fidelity privileged interfaces. It does not create protocol powers or extend any role.

## Shared rules

1. There is no unlimited administrator context.
2. The interface displays the active identity, chain, release, capability context and authority source.
3. Context selection changes presentation only; authorization is revalidated by the contract or protected API.
4. Missing, stale, expired, revoked, wrong-chain, contradictory or unmapped authority fails closed.
5. Read-only observation is visually separated from mutation.
6. Every mutation preview shows target, parameters, impact, blast radius, reversibility, timelock and expected audit reference.
7. Submitted actions use real transaction hashes or immutable API audit identifiers. Synthetic receipts are prohibited.
8. Secrets, private evidence, protected rationale and privileged credentials never appear in boards, logs or exports.
9. Operations cannot edit protocol truth, verification results, dispute outcomes, settlement or user balances.
10. Guardian authority does not imply unpause, execution, upgrade, treasury, settlement or role-administration authority.

## Canonical route ownership

| Destination | Approved use |
|---|---|
| `/admin` | Privileged readiness, context-aware overview, governance and guardian sections |
| `/admin/operations/:queue` | Bounded queue observation and explicitly authorized safe retry |
| `/admin/audit` | Immutable operational audit records and canonical transaction references |

Batch 5 does not add canonical routes. Governance and guardian compositions are capability-aware sections of `/admin` until maintainers deliberately amend the route contract.

## Screen authority

### Shared privileged entry

- **Privileged access and readiness:** positively verifies wallet/session, chain, release manifest and each independent capability; renders denied, stale, revoked and unavailable states.
- **Privileged overview:** provides read-only awareness across operations, governance and emergency state without cross-granting authority.

### Operations administrator

- **System health and release status:** displays freshness-labelled API, RPC, database, Redis, queue, indexer, manifest and ABI status.
- **Operational queue register:** displays bounded queue metrics and distinguishes waiting, active, delayed, failed, paused and recovered work.
- **Queue item and safe retry:** requires an explicit queue, idempotency evidence, canonical event availability, duplicate-impact review and protected API authorization.
- **Administrative audit trail:** displays actor, capability, operation, before/after references, transaction/audit identifier and outcome without secrets.

### Governance operator

- **Proposal register:** uses canonical Governor states; active, succeeded, queued, executable, cancelled, expired and executed are not conflated.
- **Proposal detail:** exposes exact targets, decoded calldata, proposer, voting result, timelock operation, simulation and audit history.
- **Governed-change preparation:** permits only registered targets and allowed selectors; preparation never implies queueing or execution.
- **Timelock execution:** remains disabled until the canonical delay and all preflights pass; recovery states follow the approved transaction model.
- **Role administration:** represents role grants/revocations as governed changes and preserves separation of duty.
- **Upgrade and controlled recovery:** separates proposal, compatibility attestation, migration validation, approval, timelock, authorization, module adoption and rollback.

### Emergency guardian

- **Emergency scope and pause control:** shows only exact guardian capabilities mapped by the verified release. A proposal veto, a module-pause request and an actual module pause are distinct results.

## Responsive and accessibility requirements

- Desktop preserves contextual navigation and side-by-side evidence/authorization views.
- Tablet collapses secondary panels below primary content without changing authority order.
- Mobile uses a labelled context drawer, stacked cards and persistent action summaries; destructive actions never become icon-only.
- At 200% zoom, values, calldata, hashes, warnings and confirmation controls remain readable without horizontal page scrolling.
- Status is always communicated with text plus colour/icon; focus order follows authority explanation → impact → preflight → action.
- Destructive or irreversible operations require explicit confirmation and must support reduced motion.

## Approval effect

Approval establishes visual and semantic authority only. Frontend implementation issues remain inactive until exact contract functions, protected API operations, authorization checks, audit events and release-manifest mappings are pinned in those issues.
