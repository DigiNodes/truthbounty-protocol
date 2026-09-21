# Baseline Recovery Plan

## Goal

Reach a trustworthy, reviewable baseline without consuming the next Stellar Wave early or collapsing the existing V2 backlog.

## Work classes

| Class | Owner before activation | Examples |
|---|---|---|
| Maintainer authority | Maintainers | governance, repository rules, readiness gates, PR disposition, protocol authority, role/permission model, route authority, golden journeys |
| Contributor implementation | Reserved issue | dependency alignment, reproducible builds, failing tests, mock removal, CI repair |
| Contributor evidence/docs | Reserved issue | screen inventory, component-state inventory, responsive/accessibility acceptance matrix |
| Joint review | Maintainer decision after contribution | security risk acceptance, protocol behavior, admin powers, canonical transaction states |

## Sequence

### Phase 0 — Hold

- No recovery PR is merged.
- No recovery issue is assigned.
- No `Stellar Wave` label is applied.
- Existing V2 issues remain open and unchanged.

### Phase 1 — Control plane

Maintainers approve:

- this current-state snapshot;
- the pull-request disposition register;
- the recovery issue registry;
- readiness gates;
- UX authority documents;
- repository rules and required checks.

### Phase 2 — Activation preparation

- Revalidate every reserved issue against current `main`.
- Resolve overlaps with existing issues without closing them; link dependencies instead.
- Select a small dependency-free tranche.
- Apply `Stellar Wave` only to the selected issues.
- Assign only after contributor fit and availability are confirmed.

### Phase 3 — Baseline recovery

Recommended first tranche:

1. API STAB-BE-001.
2. Contract STAB-SC-001.
3. Frontend STAB-FE-001 and, if independent at activation time, STAB-FE-002.

Later work activates only when dependencies are satisfied.

### Phase 4 — Golden Journey implementation

After UX authority is approved and technical baselines are green:

- contributors complete evidence inventories;
- maintainers convert verified gaps into bounded implementation issues;
- role dashboards and journeys are built vertically, one journey slice at a time;
- each slice includes accessibility, responsive behavior, canonical data/transaction authority, and failure states.

## Non-goals

- Merging work before the wave.
- Closing existing V2 issues to make the backlog appear smaller.
- A broad framework migration.
- Letting contributors decide protocol, security, role, permission, or admin authority.
- Treating documentation as one undifferentiated maintainer-only category.
