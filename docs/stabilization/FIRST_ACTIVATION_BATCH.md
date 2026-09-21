# First Stellar Wave Activation Batch

**State:** Prepared, not activated.

## Selected issues

| Order | Issue | Reason |
|---:|---|---|
| 1 | API [#515](https://github.com/DigiNodes/truthbounty-api/issues/515) | Unblocks install, container, security, and CI recovery. |
| 1 | Contract [#546](https://github.com/DigiNodes/truthbounty-contract/issues/546) | Unblocks contract tests and all later gates. |
| 1 | Frontend [#429](https://github.com/DigiNodes/truthbounty-frontend/issues/429) | Small, bounded tooling baseline. |
| 1 | Frontend [#432](https://github.com/DigiNodes/truthbounty-frontend/issues/432) | Contributor documentation/evidence work grounded in approved authority. |
| Reserve | Frontend [#430](https://github.com/DigiNodes/truthbounty-frontend/issues/430) | Activate when #429 coupling is known and review capacity allows. |

## Activation checklist

On the announced wave start:

1. Reproduce each issue against current `main`.
2. Confirm this authority pack is merged before activating #432.
3. Confirm no selected issue has been silently implemented by an open PR.
4. Apply `Stellar Wave` only to the four selected issues.
5. Keep existing domain and complexity labels.
6. Assign one qualified contributor per issue.
7. Post the canonical branch, local reproduction command, required evidence, and reviewer.
8. Require one issue per PR and link the exact issue.
9. Do not activate the reserve automatically.

## Merge checklist

- clean rebase on current `main`;
- all required repository gates green;
- no skipped or weakened checks;
- no unrelated scope;
- conversations resolved;
- independent human approval on the exact head SHA;
- security/protocol review when required;
- squash/rebase policy applied consistently;
- linked issue remains open until the merge is verified.

## Exit condition

The first batch is complete only when the three implementation baselines are green and the frontend evidence inventory is approved. Then maintainers select the dependency-satisfied second batch from the revalidation register.
