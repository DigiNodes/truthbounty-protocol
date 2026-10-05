# Stabilization and Stellar Wave Readiness Gates

## Gate A — Control plane approved

- [ ] Current-state snapshot is current.
- [ ] Every open PR has a disposition and named maintainer owner.
- [ ] Recovery registry matches GitHub.
- [ ] Existing V2 issue count has not been reduced by stabilization work.
- [ ] Protocol and implementation repositories enforce approved branch/ruleset policy.
- [ ] A test PR proves required checks and review restrictions cannot be bypassed by the normal contributor path.

## Gate B — Baseline green

For each implementation repository:

- [ ] Clean deterministic install.
- [ ] Lint and typecheck.
- [ ] Unit/integration tests.
- [ ] Production build.
- [ ] Repository-specific security checks.
- [ ] No high/critical runtime vulnerability without explicit owner, rationale and deadline.
- [ ] No concealed skip or unconditional-success path.

Additional requirements:

- API: container smoke build and migration/drift verification.
- Contract: compile, Foundry/Hardhat tests, gas, fuzz/invariants, static analysis and deployment dry run.
- Frontend: accessibility, E2E, production mock guard and canonical artifact drift check.

## Gate C — UX authority approved

**Approval record:** Proposed by the maintainer on 2026-10-05. Effective only when the approving authority PR is independently reviewed and merged.

- [x] Role/capability matrix.
- [x] Sitemap and route contract.
- [x] Golden journeys.
- [x] Administrative authority boundary.
- [x] Design-system authority.
- [x] Transaction-state model.
- [x] Responsive/accessibility policy.
- [x] Contributor evidence issues reference these artifacts and do not invent product rules.

Gate C approves semantics and design authority. It does not assert that the current frontend conforms, that privileged release-role mappings exist, or that Gates A/B are satisfied. Missing release-manifest authority remains a fail-closed implementation boundary.

## Gate D — Controlled activation

- [ ] Initial tranche is dependency-free and small enough for maintainer review capacity.
- [ ] Only selected issues receive `Stellar Wave`.
- [ ] Contributor assignment occurs after activation.
- [ ] One issue/one PR and required evidence are understood.
- [ ] No merge is allowed before the announced wave start.
- [ ] Merge requires current green gates and independent human approval of the exact head SHA.

## Broad-wave condition

Do not activate a broad batch until Gates A–D are satisfied and the first recovery tranche has demonstrated the review and merge controls end to end.
