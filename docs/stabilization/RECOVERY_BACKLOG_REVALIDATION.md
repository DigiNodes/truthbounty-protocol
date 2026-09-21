# Recovery Backlog Revalidation

**Date:** 2026-09-21  
**Result:** 16 issues remain open, reserved, unassigned, and not labeled `Stellar Wave`.

| Issue | Points | Position | Review | Key dependency/overlap |
|---|---:|---|---|---|
| API [#515](https://github.com/DigiNodes/truthbounty-api/issues/515) | 150 | First batch | API/tooling | Foundation |
| API [#516](https://github.com/DigiNodes/truthbounty-api/issues/516) | 150 | Second | API/container/security | #515 |
| API [#517](https://github.com/DigiNodes/truthbounty-api/issues/517) | 150 | Second | API/persistence | #515 |
| API [#518](https://github.com/DigiNodes/truthbounty-api/issues/518) | 200 | Split/review | API/security | Split major upgrades |
| API [#519](https://github.com/DigiNodes/truthbounty-api/issues/519) | 150 | Later | API/CI/security | Existing #395 and PR #443 |
| Contract [#546](https://github.com/DigiNodes/truthbounty-contract/issues/546) | 150 | First batch | Contract/tooling/security | Foundation |
| Contract [#547](https://github.com/DigiNodes/truthbounty-contract/issues/547) | 200 | Second/split | Protocol/security | #546 |
| Contract [#548](https://github.com/DigiNodes/truthbounty-contract/issues/548) | 200 | Later | Contract/CI/security | #546, #547 |
| Contract [#549](https://github.com/DigiNodes/truthbounty-contract/issues/549) | 150 | Second | Deployment/protocol | Existing #382 and PR #410 |
| Frontend [#429](https://github.com/DigiNodes/truthbounty-frontend/issues/429) | 100 | First batch | Frontend/tooling | Foundation |
| Frontend [#430](https://github.com/DigiNodes/truthbounty-frontend/issues/430) | 100 | First reserve | Frontend | Check coupling to #429 |
| Frontend [#431](https://github.com/DigiNodes/truthbounty-frontend/issues/431) | 150 | Second | Frontend/protocol data | PR #301 |
| Frontend [#432](https://github.com/DigiNodes/truthbounty-frontend/issues/432) | 150 | First after authority | Frontend/UX | This authority pack |
| Frontend [#433](https://github.com/DigiNodes/truthbounty-frontend/issues/433) | 200 | Golden journey | Wallet/protocol/security | Baseline + authority |
| Frontend [#434](https://github.com/DigiNodes/truthbounty-frontend/issues/434) | 150 | Docs batch | Frontend/UX | PR #301 + authority |
| Frontend [#435](https://github.com/DigiNodes/truthbounty-frontend/issues/435) | 150 | Docs batch | UX/accessibility | #432 |

## Findings

- All issues are contributor-suitable.
- No existing V2 issue should be closed merely because a recovery issue overlaps it.
- #518 and #547 require maintainer review for possible child issues before assignment.
- #519, #549, #431, and #434 must reuse or reconcile valid open-PR work.
- #433 must not start until route, journey, transaction, and canonical interface authority are approved.
