# Reserved Recovery Issue Registry

**Activation rule:** Every issue below is reserved. It becomes contributor-active only when maintainers apply the `Stellar Wave` label.

## API

| ID | Issue | Dependency |
|---|---|---|
| STAB-BE-001 | [#515 — Align NestJS Major Versions and Restore Deterministic Install](https://github.com/DigiNodes/truthbounty-api/issues/515) | None |
| STAB-BE-002 | [#516 — Make the API Container Build Reproducible](https://github.com/DigiNodes/truthbounty-api/issues/516) | STAB-BE-001 |
| STAB-BE-003 | [#517 — Remove Prisma Remnants and Prove the TypeORM-Only Baseline](https://github.com/DigiNodes/truthbounty-api/issues/517) | STAB-BE-001 |
| STAB-BE-004 | [#518 — Remediate API Dependency Vulnerabilities in Reviewable Batches](https://github.com/DigiNodes/truthbounty-api/issues/518) | STAB-BE-001; may be split |
| STAB-BE-005 | [#519 — Restore the API Required CI Gate Set](https://github.com/DigiNodes/truthbounty-api/issues/519) | STAB-BE-001/002 |

## Contract

| ID | Issue | Dependency |
|---|---|---|
| STAB-SC-001 | [#546 — Restore a Compatible Hardhat 2 Toolchain Baseline](https://github.com/DigiNodes/truthbounty-contract/issues/546) | None |
| STAB-SC-002 | [#547 — Classify and Repair the Foundry Coverage Failures by Domain](https://github.com/DigiNodes/truthbounty-contract/issues/547) | STAB-SC-001 |
| STAB-SC-003 | [#548 — Restore Contract CI, Gas, and Fuzz Gates](https://github.com/DigiNodes/truthbounty-contract/issues/548) | STAB-SC-001/002 |
| STAB-SC-004 | [#549 — Document and Test the Canonical Local Deployment Baseline](https://github.com/DigiNodes/truthbounty-contract/issues/549) | STAB-SC-001 |

## Frontend

| ID | Issue | Dependency |
|---|---|---|
| STAB-FE-001 | [#429 — Align TypeScript and ESLint to a Supported Toolchain](https://github.com/DigiNodes/truthbounty-frontend/issues/429) | None |
| STAB-FE-002 | [#430 — Repair the Frontend Jest Snapshot Baseline](https://github.com/DigiNodes/truthbounty-frontend/issues/430) | STAB-FE-001 if coupled |
| STAB-FE-003 | [#431 — Remove Production Imports of Mock Data](https://github.com/DigiNodes/truthbounty-frontend/issues/431) | Canonical interfaces |
| STAB-FE-004 | [#433 — Wire Canonical Claim Submission from All Entry Points](https://github.com/DigiNodes/truthbounty-frontend/issues/433) | Approved UX authority and canonical interfaces |
| STAB-DOC-FE-001 | [#432 — Audit Screens, Routes, and Role Coverage Against UX Authority](https://github.com/DigiNodes/truthbounty-frontend/issues/432) | Approved UX authority |
| STAB-DOC-FE-002 | [#435 — Build the Responsive and Accessibility Acceptance Matrix](https://github.com/DigiNodes/truthbounty-frontend/issues/435) | Approved screen/journey authority |
| STAB-DOC-FE-003 | [#434 — Inventory Component States and Storybook Coverage Gaps](https://github.com/DigiNodes/truthbounty-frontend/issues/434) | Approved design/state authority |

## Registry rules

- Existing V2 issues remain open.
- New recovery issues do not silently supersede old issues.
- Overlap is expressed through links and dependencies.
- Maintainers revalidate scope immediately before activation.
- The registry records issue lifecycle; it does not replace GitHub as the assignment system.
