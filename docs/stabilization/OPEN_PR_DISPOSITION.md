# Open Pull Request Disposition Register

**Policy:** No PR listed here is merged or closed during this stabilization step. Dispositions are review instructions for maintainers at wave activation, not automated actions.

| Repository / PR | Provisional disposition | Required next action |
|---|---|---|
| [API #443](https://github.com/DigiNodes/truthbounty-api/pull/443) | Retain; rebase after baseline | Re-evaluate CI-gate changes after STAB-BE-001/002 and split unrelated changes. |
| [API #381](https://github.com/DigiNodes/truthbounty-api/pull/381) | Hold; security/architecture re-review | Rebase only after the API baseline is green; verify rollback/replay authority and operational alerts. |
| [API #379](https://github.com/DigiNodes/truthbounty-api/pull/379) | Likely out of scope | Maintainer must verify provenance and product relevance; do not rebase or close automatically. |
| [API #313](https://github.com/DigiNodes/truthbounty-api/pull/313) | Hold; re-scope | Compare with current notification authority and V2 issues, then split/rebase if still valid. |
| [Contract #422](https://github.com/DigiNodes/truthbounty-contract/pull/422) | Retain; rebase and audit | Re-evaluate against the recovered toolchain and canonical reward-allocation invariants. |
| [Contract #410](https://github.com/DigiNodes/truthbounty-contract/pull/410) | Hold; rebase/split | Reconcile deployment composition with the canonical local deployment baseline. |
| [Contract #346](https://github.com/DigiNodes/truthbounty-contract/pull/346) | Title/body mismatch; manual decision | Audit actual diff and linked issue before deciding whether any part remains valid. |
| [Frontend #355](https://github.com/DigiNodes/truthbounty-frontend/pull/355) | Retain; rebase after baseline | Re-evaluate gate changes after STAB-FE-001/002; keep CI work separate. |
| [Frontend #303](https://github.com/DigiNodes/truthbounty-frontend/pull/303) | Hold; overlap review | Compare with current allowance issues and approved transaction journey before rebase. |
| [Frontend #301](https://github.com/DigiNodes/truthbounty-frontend/pull/301) | Split candidate | Separate mock removal, hook refactors, and Storybook work; reconcile with STAB-FE-003 and docs inventory. |
| [Frontend #300](https://github.com/DigiNodes/truthbounty-frontend/pull/300) | Retain candidate; rebase | Validate against the approved wallet journey and current Wagmi baseline. |
| [Frontend #298](https://github.com/DigiNodes/truthbounty-frontend/pull/298) | Retain candidate; rebase | Revalidate projection/finality semantics and test coverage on current baseline. |
| [Frontend #289](https://github.com/DigiNodes/truthbounty-frontend/pull/289) | Hold; overlap review | Compare with #300 and current session/chain authority; split or supersede only by maintainer decision. |

## Triage checklist

Before any disposition changes:

- [ ] Rebase feasibility assessed against the recovered baseline.
- [ ] Linked issue and scope still match.
- [ ] Diff contains no generated artifacts, secrets, alternate-chain runtime, or unrelated work.
- [ ] Required tests are current and green.
- [ ] Security/protocol/UX authority reviewed where applicable.
- [ ] Independent human approval is attached to the exact head SHA.
- [ ] Closing or superseding a PR does not close or remove an existing wave issue without a separate maintainer decision.
