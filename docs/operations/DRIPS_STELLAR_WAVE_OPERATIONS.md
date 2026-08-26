# Drips Stellar Wave Operations

**Document version:** 1.0.0  
**Date:** 2026-08-26  
**Status:** Proposed operational policy  
**Owners:** TruthBounty maintainers

## 1. Purpose

This document defines how TruthBounty creates, reviews, publishes, assigns, validates, merges, and refreshes contributor work for Drips Stellar Wave.

The operating goal is to maximize meaningful contribution throughput while preserving protocol security, architectural consistency, review quality, and Drips programme integrity. Issue count is not an end in itself.

## 2. Runtime Boundary

TruthBounty remains an Optimism/EVM protocol.

Drips Stellar Wave is only a contribution-coordination and funding programme. It does not make Stellar or Soroban part of TruthBounty's contracts, wallets, settlement, deployment, frontend runtime, backend runtime, or technical roadmap.

The Wave-approved repositories are:

| Repository | Eligible contribution scope |
|---|---|
| `truthbounty-contract` | Solidity, interfaces, deployments, tests, ABI/event exports, contract security, and contract-specific documentation |
| `truthbounty-api` | SIWE, IPFS services, indexer, PostgreSQL projections, APIs, tests, operational tooling, security, and API-specific documentation |
| `truthbounty-frontend` | EVM wallet integration, transaction logic, indexed reads, tests, accessibility infrastructure, security, and frontend-specific documentation |

`truthbounty-protocol` is not currently Wave-approved. Cross-repository specifications, ADRs, audits, invariants, master planning, and dependency graphs remain maintainer-governed in this repository.

UI/UX contribution work remains suspended. Maintainers will approve the redesigned information architecture and screens before visual implementation issues are published.

## 3. Clean-Slate Backlog

All issues that existed before this policy are historical records. They must not be reopened, edited, relabelled, repurposed, assigned as V2 work, or activated for Drips.

New V2 work uses fresh identifiers:

| Prefix | Scope |
|---|---|
| `V2-SC-###` | Smart contracts, deployments, ABIs, invariants, and contract security |
| `V2-BE-###` | API, indexer, persistence, infrastructure, and backend security |
| `V2-FE-###` | Frontend architecture, EVM integration, behavior, testing, accessibility, and frontend security |
| `V2-DOC-###` | Implementation-specific documentation owned by a Wave-approved repository |

New issues may reference legacy issues as historical evidence, but must not use them as their governing scope or completion proof.

Existing code may satisfy part of a new issue only when the new acceptance criteria, tests, integrations, and security gates independently verify it.

## 4. Epic-First Authoring

Maintainers prepare one genuine engineering epic at a time.

An epic must define:

- the user or protocol outcome;
- repository ownership;
- architecture and security boundaries;
- upstream and downstream dependencies;
- interfaces, events, schemas, or configuration it produces;
- constituent issues and their execution order;
- epic-level integration and exit tests.

A large capability may be decomposed into meaningful boundaries such as interfaces, implementation, migrations, projections, test harnesses, invariants, security analysis, deployment verification, observability, accessibility, and operational documentation.

Work must never be fragmented merely to increase issue or contribution counts.

## 5. Required Issue Contract

Every new issue must be complete and immediately assignable. It must include:

1. identifier and outcome-focused title;
2. summary and current-state context;
3. governing specification, ADR, audit finding, and epic links;
4. repository scope and allowed files or modules where appropriate;
5. dependencies and blocked-by relationships;
6. technical requirements;
7. security and privacy requirements;
8. required unit, integration, invariant, fuzz, end-to-end, or accessibility tests as applicable;
9. objective acceptance criteria;
10. deliverables and evidence required in the pull request;
11. explicit non-goals;
12. contributor and reviewer guidance;
13. a Markdown-list label section containing only approved internal labels during preparation.

Placeholders, unexplained checklists, copied legacy bodies, duplicated work, and subjective acceptance criteria are not publishable.

## 6. Issue Lifecycle

```text
architecture or repository change
→ wave-candidate
→ duplicate and dependency validation
→ scope, security, test, and complexity review
→ wave-reviewed
→ final dependency and points-budget check
→ wave-ready
→ explicit maintainer publication approval
→ apply "Stellar Wave"
→ contributor application and assignment
→ pull request checks and human review
→ merge or request changes
→ repository re-audit and backlog refresh
```

Internal lifecycle labels are:

| Label | Meaning |
|---|---|
| `wave-candidate` | Newly authored issue awaiting validation |
| `wave-reviewed` | Scope, tests, security, dependencies, and complexity have been reviewed |
| `wave-ready` | Contributor-ready and eligible for a publication decision |
| `wave-blocked` | Valid future work whose dependencies are unresolved |
| `Stellar Wave` | External Drips activation label; final publication action only |

The lowercase `stellar-wave` label is retired from the new workflow. The automation must never translate an internal state into `Stellar Wave` without explicit maintainer approval.

## 7. Publication Gate

The Wave publisher must accept an explicit allowlist of repository and issue numbers and produce a dry-run summary before making changes.

For each issue it must verify:

- the repository is one of the three approved repositories;
- the issue uses a new V2 identifier;
- the issue is open, unassigned, unique, and marked `wave-ready`;
- all blocking dependencies are resolved;
- the specification, acceptance criteria, tests, security requirements, and non-goals are complete;
- complexity has been reviewed;
- the issue can reasonably be completed within the contribution window;
- the current repository and organization points budgets can accommodate it;
- the issue does not contain provisional interfaces, unapproved designs, dummy addresses, or unresolved architecture;
- the maintainer explicitly confirms the dry run.

Applying `Stellar Wave` must be the publisher's final mutation. Bulk publication without an explicit allowlist and confirmation is prohibited.

## 8. Assignment and Contributor Intake

Before assignment, maintainers or automation must check:

- one active assignee unless the issue explicitly requires coordinated work;
- no competing implementation is already in review;
- the contributor acknowledges dependencies, acceptance criteria, and security requirements;
- the contributor's proposed approach does not expand protocol authority or issue scope;
- the expected delivery fits the active Wave.

Assignment does not waive any acceptance criterion. Stale or abandoned work may be unassigned through a documented maintainer decision.

## 9. Pull Request Intake

Every contributor pull request must:

- link exactly one primary new V2 issue unless coordinated scope is pre-approved;
- identify any secondary dependency issues;
- describe implementation, tests, migrations, security considerations, and residual risks;
- remain within the assigned scope;
- include evidence for every acceptance criterion;
- avoid unrelated formatting, dependency, generated-file, or architectural changes;
- pass all repository-required checks.

Automation should comment on missing linkage, unassigned work, scope drift, failed checks, stale branches, merge conflicts, missing tests, dependency violations, and incomplete acceptance evidence.

## 10. CI and Security Gates

All repositories require:

- deterministic dependency installation;
- formatting, linting, type-checking, build, and tests;
- dependency vulnerability review;
- secret scanning;
- CodeQL or an approved equivalent;
- licence and provenance checks for new dependencies;
- changed-file and generated-artifact validation.

Additional contract gates include:

- unit, integration, invariant, and fuzz tests;
- static analysis;
- access-control and role-topology validation;
- reentrancy and token-accounting checks;
- storage-layout checks when upgradeability exists;
- ABI, event-schema, deployment, and address-manifest freshness;
- rejection of zero, dummy, legacy, or unapproved production addresses.

Additional API/indexer gates include:

- SIWE validation tests;
- migration and rollback tests;
- event idempotency, finality, replay, and reorganization tests;
- projection rebuild tests from genesis;
- authorization, rate-limit, input-validation, and SSRF/file-upload checks.

Additional frontend gates include:

- supported-chain enforcement;
- wallet rejection, wrong-network, dropped/replaced transaction, confirmation, indexing-delay, and retry tests;
- prohibition of production mock wallets, synthetic receipts, dummy addresses, and Stellar/Freighter runtime code;
- accessibility, responsive behavior, and dependency safety checks when relevant.

## 11. Merge Policy

Automatic merging is disabled by default.

Contracts, authentication, authorization, settlement, treasury, rewards, slashing, disputes, governance, deployments, migrations, indexer finality/reorganization logic, and security-sensitive changes always require human review.

Guarded auto-merge may be considered later only for narrowly defined low-risk changes after branch protections, required checks, ownership rules, and rollback procedures are proven.

## 12. Backlog Reconciliation Automation

After each merge, the backlog reconciler may:

- re-audit changed code and documentation;
- mark dependencies satisfied or newly blocked;
- detect duplicate, obsolete, or newly required work;
- propose candidate issue files;
- update the dependency graph and epic status;
- recommend complexity or sequencing changes.

It may not:

- publish an issue automatically;
- apply `Stellar Wave`;
- modify historical issues;
- assign contributors;
- approve or merge pull requests;
- change protocol rules without an accepted governance decision.

Generated candidates require maintainer review before creation, and created candidates require the full lifecycle before activation.

## 13. Operational Metrics

Maintainers should track:

- candidates, reviewed, ready, blocked, and active Wave issues;
- points-budget usage by repository and organization;
- contributor applications, assignments, stale work, and review deadlines;
- pull-request pass/fail rates and security findings;
- time from candidate to publication, assignment, review, and merge;
- reopened defects and post-merge regressions;
- dependency bottlenecks and issue obsolescence.

Metrics must support planning and safety. They must not incentivize artificial fragmentation or low-value contributions.

## 14. Initial Execution Order

After this policy is accepted:

1. publish the complete V2 protocol specification and engineering blueprint;
2. create the clean-slate master backlog and dependency graph;
3. author the canonical contract-topology and deployment epic;
4. validate its new `V2-SC-###` issues without applying `Stellar Wave`;
5. implement the minimum issue validator, security CI, and manual Wave publisher;
6. confirm Drips points budgets;
7. approve and activate a controlled first batch;
8. re-audit after each merge and generate the next candidates.
