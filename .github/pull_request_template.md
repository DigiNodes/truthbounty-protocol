## Canonical change

- Protocol/wave item:
- Affected repositories:
- Compatibility version:

## Summary

<!-- Explain the smallest cohesive change. -->

## Authority and architecture

- [ ] Optimism/EVM remains the only runtime.
- [ ] Contracts remain authoritative for protocol mutation.
- [ ] API remains a deterministic projection/read layer.
- [ ] Frontend does not fabricate protocol or transaction state.
- [ ] The allowed cross-repository dependency graph is preserved.

## Security and compatibility

- [ ] Invariants and threat-model impact are documented.
- [ ] ABI, event, address, OpenAPI, or compatibility changes are versioned.
- [ ] No secrets, placeholder production values, generated drift, or production mocks are introduced.
- [ ] Migration and rollback impact is documented.

## Validation

- [ ] Documentation and examples agree.
- [ ] Linked issues and dependencies are correct.
- [ ] Required human maintainers have reviewed the exact head SHA.

## Checklist

- [ ] One PR represents one canonical change.
- [ ] No unrelated issue is closed.
- [ ] Contributor-wave activation is not implied by merging this PR.
