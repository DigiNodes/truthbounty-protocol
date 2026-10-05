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

**Status:** Not effective. Approval-record PR [#13](https://github.com/DigiNodes/truthbounty-protocol/pull/13) merged at exact head `b55c8609fa56db538a18ee51c08b82045af6a889`, but GitHub records no submitted pull-request review. Under the approval rule below, merge alone does not satisfy Gate C. A replacement approval record must receive an independent human `APPROVED` review before merge.

**Evidence baseline (2026-10-05):**

- Post-Wave-9 reconciliation: protocol PR [#10](https://github.com/DigiNodes/truthbounty-protocol/pull/10), head `561f583a4e3827eade2e6ed458a8f52e74caca08`, merged as `c132a2ad2b050f58e1fec9c484c421e53cdc81dc`.
- Route and capability authority: protocol PR [#11](https://github.com/DigiNodes/truthbounty-protocol/pull/11), head `d0287de89b20d5adb0276999d731ca101faeb902`, merged as `ea693bf689a747f4c154475fcf41566de1a545f5`.
- Expanded 19-screen authority prototype: protocol PR [#12](https://github.com/DigiNodes/truthbounty-protocol/pull/12), head `1b131f5f909b558056f479406d1e185569b2db6a`, merged as `d0287de89b20d5adb0276999d731ca101faeb902`.

**Approval rule:** the approving reviewer must be a human other than the author/last pusher. Approval applies only to the exact head SHA of the Gate C approval-record PR; any later change requires renewed approval.

- [x] Role/capability matrix.
- [x] Sitemap and route contract.
- [x] Golden journeys.
- [x] Administrative authority boundary.
- [x] Design-system authority.
- [x] Transaction-state model.
- [x] Responsive/accessibility policy.
- [x] Contributor evidence issues reference these artifacts and do not invent product rules.

Gate C approves semantics and design authority. It does not assert that the current frontend conforms, that privileged release-role mappings exist, or that Gates A/B are satisfied. Missing release-manifest authority remains a fail-closed implementation boundary.

**Current audit:** [Post-Wave-9 Readiness Audit — 2026-10-05](../audits/POST_WAVE_9_READINESS_AUDIT_2026-10-05.md).

## Gate D — Controlled activation

- [ ] Initial tranche is dependency-free and small enough for maintainer review capacity.
- [ ] Only selected issues receive `Stellar Wave`.
- [ ] Contributor assignment occurs after activation.
- [ ] One issue/one PR and required evidence are understood.
- [ ] No merge is allowed before the announced wave start.
- [ ] Merge requires current green gates and independent human approval of the exact head SHA.

## Broad-wave condition

Do not activate a broad batch until Gates A–D are satisfied and the first recovery tranche has demonstrated the review and merge controls end to end.
