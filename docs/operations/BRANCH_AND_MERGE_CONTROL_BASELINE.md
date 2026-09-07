# GitHub Branch and Merge Control Baseline

**Audited:** 2026-09-07  
**Applies to:** contract, API, frontend and protocol repositories.

## Audit finding

The three implementation repositories have active rulesets, but their current settings are not sufficient:

- required approving reviews are set to zero;
- stale reviews are not dismissed after a push;
- last-push approval is not required;
- administrators/repository roles can bypass contributor rulesets;
- the contract required-check list omits Gas Check;
- the API required checks reference Lint, Test and Build while its workflow currently exposes Build, Lint, and Test;
- the protocol repository has no ruleset.

## Required baseline

For `main` in every repository:

1. Require a pull request.
2. Require at least one approving human maintainer review.
3. Dismiss stale approvals when new commits are pushed.
4. Require approval of the latest push by someone other than its author.
5. Require all review conversations to be resolved.
6. Require strict status checks against the latest base.
7. Block force pushes and deletion.
8. Do not permit routine admin/maintainer bypass.
9. Require signed commits where organization policy supports it.
10. Restrict merge methods to squash unless a documented release workflow requires otherwise.

## Required checks

### Contract

- Lint
- Test
- Fuzz Tests
- Invariant Tests
- Gas Check

### API

- Build, Lint, and Test
- Security Scans
- Container Vulnerability Scan
- Sensitive Changes Protection

### Frontend

- Lint
- Test
- Build
- E2E

### Protocol

- Markdown/link validation
- Internal reference validation
- Specification status validation

## Sensitive-change policy

Protocol specification, contracts, authentication, wallet/signature, settlement, rewards, treasury, governance, deployment, migration, indexer/reorg and CI/workflow changes always require explicit human approval on the exact head SHA.

## Application procedure

Repository administrators must update GitHub rulesets after the matching CI PR establishes stable check names. Capture screenshots/exported ruleset JSON and link them in the launch record. The Wave must not activate beyond Batch 0 until this is complete.
