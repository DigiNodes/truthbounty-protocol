# Post-August 2026 V2 Conformance Audit

**Audit date:** 2026-09-07  
**Status:** Launch-blocking baseline  
**Repositories:** protocol, contract, API, frontend

## Executive decision

The August contribution wave produced reusable V2 foundations, but the combined implementation is not release-ready. New feature work must remain behind the remediation and CI gates in this document.

TruthBounty remains an Optimism/EVM protocol. “Stellar Wave” is a Drips programme label only.

## Repository findings

| ID | Repository | Finding | Severity | Gate |
|---|---|---|---|---|
| PA-001 | contract | Canonical V2 is incomplete while legacy deployment and modules remain present. | blocker | V2-SC-041 |
| PA-002 | contract | Previous merges demonstrated compilation, emergency-control, custody and identifier-integrity defects. | blocker | V2-SC-042–043 |
| PA-003 | contract | CI uses unpinned Foundry and skips gas enforcement when snapshots are absent. | high | V2-SC-044 |
| PA-004 | API | Prisma and TypeORM commands/paths coexist, so persistence ownership is not frozen. | blocker | V2-BE-041 |
| PA-005 | API | Projection health, reorg safety and deterministic rebuild require completion. | blocker | V2-BE-042–043 |
| PA-006 | API | Coverage enforcement is a placeholder and security tools use floating action refs. | high | V2-BE-044 |
| PA-007 | frontend | `useAppealParticipation` contains fabricated selectors, calldata, estimates and transaction behaviour. | blocker | V2-FE-041 |
| PA-008 | frontend | CI treats E2E and accessibility as optional; `test:a11y` is absent. | high | V2-FE-042 |
| PA-009 | frontend | ABI/address provenance and lifecycle E2E coverage remain incomplete. | blocker | V2-FE-043–044 |
| PA-010 | all | The Wave intake scope ended at 040 although the new backlog ends at 090. | blocker | Automation update |

## Retain, repair, quarantine

- **Retain:** accepted V2 interfaces, lifecycle specification, EvidenceRegistry, StakeVault foundations, EVM wallet migration, deterministic projection work, and verified tests.
- **Repair:** all code mapped to tasks 041–090.
- **Quarantine:** legacy deployments, backend-authoritative mutation, TypeORM runtime ownership, mock wallet/transaction paths, dummy production values, and any Stellar/Freighter runtime dependency.
- **Do not delete audit evidence:** legacy code may remain only when clearly non-canonical and unreachable from production deployment.

## Launch gates

1. The frozen V2 specification and cross-repository contract are approved.
2. The three baseline CI PRs are green.
3. Only SC-041, BE-044 and FE-042 receive the external Wave activation label initially.
4. Sensitive work requires an approving human maintainer review on the exact head SHA.
5. Later batches activate only after their declared dependencies merge and are revalidated.

## Exit evidence

The iteration exits audit mode only when each blocker has a linked green PR or a documented, maintainer-approved quarantine decision.
