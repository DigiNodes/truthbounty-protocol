# Post-Wave-9 Readiness Audit — 2026-10-05

## Decision

TruthBounty is **not ready for a coordinated Optimism Sepolia deployment** and is **not mainnet-ready**.

Gate C authority artifacts are merged, but the Gate C approval record is not effective under its own rule: protocol PR #13 merged at head `b55c8609fa56db538a18ee51c08b82045af6a889` without any submitted pull-request review. The GitHub reviews collection is empty. UI implementation may continue only as a draft/verification activity until a replacement approval record receives independent human approval.

`Stellar Wave` activation, contributor assignment and the first activation batch remain suspended.

## Audited immutable heads

| Repository | Audited `main` | Control state | Baseline state |
| --- | --- | --- | --- |
| Protocol | `b476329e9398c79c8f0c8a338a1b31922f7d2ad8` | Gate C record merged; independent approval absent | Documentation authority present |
| API | `5fa48e6bc9ad5e8e45d3ea7406de5dfbe707fa86` | Protection enforcement off; no required checks | Red: 5 required jobs fail |
| Contracts | `90dcb94a7e7e36ac684f7f35072014b720b93c34` | Protection enforcement off; no required checks | Red: 7 jobs fail, 6 dependent jobs skip |
| Frontend | `5762d37048601ee8084ea111c00fafece181910e` | Protection enforcement off; no required checks | Unproven: only issue-inventory check runs |

## Gate A — control-plane audit

All three implementation repositories report `main` as protected, but the returned protection summary has `enabled: false`, required-status enforcement `off`, and empty required contexts/checks. This allowed post-wave merges while API/Contracts were red and Frontend had no product CI evidence.

Tracked by protocol issue #14. Gate A remains red until repaired workflows have stable check names, repository rulesets require those checks, independent human approval is enforced, and negative control tests prove normal contributors cannot bypass them.

## Gate B — baseline audit

### API

Root causes at the audited head:

1. `npm ci` cannot resolve the TypeScript 7 toolchain against packages accepting at most TypeScript 6.
2. The install failure cascades into build/typecheck/test, security, container vulnerability and container smoke failures.
3. Sensitive Changes Protection executes a Git command without checking out the repository.
4. `lint` runs ESLint with `--fix`, so verification is mutating.
5. TypeORM/PostgreSQL and Prisma/LibSQL/SQLite are both production dependencies.
6. `.env.example` repeats database and Redis keys, defines incompatible `DATABASE_URL` values, mixes chain defaults and permits an empty indexed-contract set.

Immediate recovery: #584. Architecture/config follow-ups: #585–#587.

Existing issues retained rather than duplicated:

- #398 atomic projection transaction boundaries;
- #453 projection readiness gate;
- #499 staging deployment smoke tests;
- #301 health/readiness;
- #299 feature/config management.

### Contracts

Independent root causes at the audited head:

1. EIP-712 vector tooling passes two unrelated root types to ethers v6, which rejects the ambiguous primary type.
2. Several Solidity-compiling jobs do not initialize recursive submodules; OpenZeppelin/forge-std imports are missing.
3. Node 18/20 jobs run Hardhat 3 dependencies requiring Node 22.
4. standalone Foundry jobs use `latest` or `nightly`, so verification is not reproducible.
5. `package.json` installs `solc` 0.8.37 while Foundry, Hardhat and the approved reproducibility manifest pin 0.8.28.
6. deployment commands use `optimism_sepolia`/`optimism`, but Hardhat defines `optimismSepolia`/`optimismMainnet`.
7. a clean install reports 22 dependency vulnerabilities, including seven high severity findings.

Immediate recovery: #666 and repair PR #669. Toolchain/deployment alignment: #667. Supply-chain remediation: #668.

Existing issues retained rather than duplicated:

- #382 canonical modular deployment composition;
- #525 event completeness for projection replay;
- #536 production readiness approval;
- #498/#499 privileged-control coverage;
- #510 upgrade rollback and compatibility fixtures;
- #549 canonical local deployment baseline.

### Frontend

Root causes at the audited head:

1. `.github/workflows/ci.yml` declares the top-level `permissions` key twice; product CI is not scheduled.
2. `package.json` declares `test:a11y` twice.
3. Storybook dependencies, scripts and stories exist, but the approved catalog/configuration and complete state matrix are absent.
4. no `.env.example` defines the production configuration contract.
5. the checked-in release manifest has deployment block zero and does not prove provenance for the canonical modular deployment.
6. no privacy-safe client observability sink supports testnet soak decisions.

Immediate recovery: #558 and repair PR #562. Storybook starts as stacked draft PR #563 for #552. Configuration/provenance/observability: #559–#561.

Existing issues retained rather than duplicated:

- #552–#557 approved UI implementation tranche;
- #435 responsive/accessibility matrix;
- #413 transaction-state E2E;
- #410 wallet compatibility;
- #361 wallet lifecycle;
- #315 transaction replacement/drop/reorg reconciliation;
- #236 production mock removal;
- #245 allowance/approval flow;
- #321/#380 dispute flows;
- #377 local drafts.

## Dependency-ordered candidate backlog

No item in this table is activated.

| Order | Candidate work | State |
| --- | --- | --- |
| 0 | Independent Gate C approval replacement | required; no valid approval exists |
| 1 | API #584, Contracts #666, Frontend #558 | Gate B baseline repair |
| 2 | Protocol #14 | enforce Gate A using stable repaired check names |
| 3 | Contracts #667–#668; API #585–#587; Frontend #559–#561 | architecture, configuration and supply-chain stabilization |
| 4 | Contracts #382/#525/#536 | canonical deployment, event and readiness authority |
| 5 | Frontend #560 and API #586 | consume the same pinned release package |
| 6 | Frontend #552–#557 | Gate C component/routes/compositions, with #552 currently draft-stacked |
| 7 | API #453/#499, Frontend #435/#413, contract recovery/security issues | Optimism Sepolia readiness evidence |
| 8 | Cross-repository release rehearsal | deploy → index/rebuild → transact → recover |
| 9 | First controlled activation decision | suspended until explicit maintainer authorization |

## Cross-repository release invariant

A testnet candidate exists only when one immutable release identity binds:

- contract source/release commit;
- verified Optimism Sepolia deployment block and module addresses;
- compiler/settings and deployed-bytecode hashes;
- ABI, event-schema, role and parameter checksums;
- API indexer start block and consumed release checksum;
- frontend consumed release checksum;
- E2E evidence for the same release ID.

No consumer may fall back to placeholder addresses, deployment block zero, empty indexed-contract configuration or a different chain.

## Optimism Sepolia rehearsal gates

The following are blocked until Gates A/B and the pinned interface package are complete:

1. responsive matrix at 390, 768 and 1440 px;
2. keyboard, screen-reader, contrast and reduced-motion checks;
3. wallet rejection, wrong-chain, rejected signature, reverted/replaced/dropped/reorged and delayed-indexer flows;
4. deterministic API replay/reorg rollback/projection rebuild;
5. contract deploy/verify/role-transfer/pause/recovery drills;
6. full claim → verify → dispute → settle/reward journey;
7. observability and rollback rehearsal.

## Mainnet condition

Mainnet consideration requires all testnet rehearsals, an external security review, no unapproved high/critical finding, reproducible release artifacts, enforced repository controls, recovery evidence and an agreed soak period.
