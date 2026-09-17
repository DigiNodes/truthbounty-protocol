# TruthBounty Wave Governance

This directory is the canonical planning authority for contributor waves. It records eligibility rules and compatibility requirements; it does not activate work by itself.

## Lifecycle

`draft -> candidate -> dependency-ready -> wave-active -> assigned -> in-review -> completed`

Only maintainers may move a task to `wave-active` by applying the exact external label `Stellar Wave` in the matching implementation repository.

## Activation gate

A task may be activated only when:

1. its ID exists in the canonical V2 catalogue;
2. its repository, scope, points, and acceptance criteria are valid;
3. every dependency is safely completed with green required checks;
4. the default branch of every affected repository is green;
5. there is no active or merged duplicate;
6. one task maps to one PR unless an inseparable pair is pre-approved;
7. a maintainer records the activation decision.

Open issues without `Stellar Wave` remain candidates and must not be assigned as Wave work.

## Pull-request gate

A contribution may merge only when:

- the author is the issue assignee or the relationship is explicitly approved;
- the PR resolves exactly one active task;
- the reviewed head SHA is current;
- required CI and security checks succeed;
- conflicts, unresolved threads, and change requests are cleared;
- compatibility and architecture boundaries are preserved;
- security-sensitive changes have approving human CODEOWNER review.

CodeRabbit and other automated reviewers are advisory. They cannot supply required human approval or override deterministic checks.

## Current catalogue

| Repository | Prefix | V2 range | Candidate expansion |
|---|---|---:|---:|
| truthbounty-contract | V2-SC | 001–150 | 091–150 |
| truthbounty-api | V2-BE | 001–150 | 091–150 |
| truthbounty-frontend | V2-FE | 001–150 | 091–150 |

Contributor activation remains paused until a reviewed wave plan selects a small dependency-free batch.
