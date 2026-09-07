# Next Wave Plan: V2 Tasks 041–090

**Prepared:** 2026-09-07  
**Total:** 150 tasks — 50 each for contracts, API and frontend.

## Activation policy

Creating an issue does not activate it. The external `Stellar Wave` label means the task is open for assignment. All other tasks remain candidates until dependencies and repository gates pass.

## Batch 0 — Baseline gates

Activate only:

- `V2-SC-041` — green canonical contract baseline;
- `V2-BE-044` — non-skippable API CI/security/build gates;
- `V2-FE-042` — non-skippable frontend CI/accessibility/build gates.

## Batch 1 — Canonical boundaries

After Batch 0:

- Contracts: SC-044, SC-045, SC-048, SC-068, SC-073, SC-075.
- API: BE-041, BE-042, BE-043, BE-045, BE-062, BE-068.
- Frontend: FE-041, FE-043, FE-045, FE-051, FE-063, FE-068.

## Batch 2 — Correctness and security

Activate tasks whose direct Batch 1 dependencies are complete: custody/economics, reorg recovery, authentication, transaction reconciliation, artifact provenance and accessibility.

## Batch 3 — Resilience and performance

Activate invariant, fuzz, load, chaos, recovery, bundle, degradation and operational tasks after their correctness foundations merge.

## Batch 4 — Release readiness

SC-090, BE-090 and FE-090 activate only after every applicable preceding gate is complete.

## Assignment rules

- One contributor may hold one active task per repository.
- One PR resolves one task unless maintainers approve an inseparable pair before work starts.
- Assignment expires after seven days without a draft PR or maintainer-agreed update.
- Dependencies are checked at assignment and again at review.
- Security-sensitive work requires exact-head human approval.
- A new commit invalidates the prior automated decision.
- Draft or pending-check PRs are never failed or merged by automation.

## Definition of ready

An issue is ready only when scope, non-goals, dependencies, required tests, acceptance criteria, labels and repository ownership are complete and no dependency is unresolved.

## Definition of done

Code, tests, documentation, migrations/artifacts and evidence are complete; required checks pass; review blockers are resolved; exact-head approvals exist; and linked issue closure is verified.
