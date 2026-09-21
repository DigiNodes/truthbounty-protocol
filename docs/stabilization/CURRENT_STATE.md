# TruthBounty Stabilization — Current State

**Snapshot date:** 2026-09-21  
**Authority:** Maintainers  
**Status:** Recovery planning; no contributor issue is active until the next Stellar Wave starts.

## Operating constraints

1. Do not merge recovery work before maintainers formally start the next Stellar Wave.
2. Do not close, replace, or reduce the existing V2 issue inventory during stabilization.
3. Classify every required change before work starts:
   - contributor-suitable work becomes a bounded issue;
   - governance, standardization, security authority, product authority, and cross-repository decisions remain maintainer work.
4. The `Stellar Wave` label is the activation signal. An open issue without that label is not available for assignment.
5. One issue maps to one focused pull request unless maintainers approve a split first.

## Repository snapshot

| Repository | Baseline observation | Recovery direction |
|---|---|---|
| API | Clean dependency install is blocked by incompatible NestJS major versions; container install and security baseline are not green; Prisma remnants conflict with the TypeORM-only direction. | Restore an installable dependency baseline, reproducible container, TypeORM-only path, vulnerability remediation, then required CI. |
| Contract | Hardhat 3 is combined with Hardhat 2-only plugin expectations; CI, gas, fuzz, and coverage are not green. | Restore a Hardhat 2-compatible baseline, classify Foundry failures, then restore CI/gas/fuzz gates. |
| Frontend | Build/E2E/accessibility largely run, but lint and one Jest snapshot suite fail; production paths still import mock data and claim entry points include placeholders. | Restore supported lint/test tooling, remove production mocks, then wire approved journeys. |
| Protocol | Canonical authority exists, but the stabilization control plane and protocol-repository branch protection need strengthening. | Maintain this control plane and approve product/UX authority before contributor implementation. |

## Open pull requests

Thirteen pre-existing pull requests require explicit disposition. They remain open during this phase; see [OPEN_PR_DISPOSITION.md](./OPEN_PR_DISPOSITION.md).

## Recovery issues

The reserved contributor backlog is recorded in [RECOVERY_ISSUE_REGISTRY.md](./RECOVERY_ISSUE_REGISTRY.md). These issues are intentionally open and inactive until the next Stellar Wave.

## Change control

This snapshot is evidence, not permission to implement. If repository state changes, maintainers update this document and the registry before activation.
