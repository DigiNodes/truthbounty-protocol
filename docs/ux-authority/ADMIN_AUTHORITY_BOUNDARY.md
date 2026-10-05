# Administrative Authority Boundary

**Status:** Approved semantic authority  
**Approved:** 2026-10-05

Administrative UI exposes existing bounded capabilities; it never creates protocol power. The previous generic “admin” presentation is split into operational, governance and emergency contexts.

## Contexts

### Operations administrator

May, only when protected API authorization and audit policy allow:

- observe system health, RPC/API state and projection lag;
- inspect explicitly defined processing queues and failed jobs;
- retry safe idempotent off-chain processing;
- inspect immutable audit references;
- manage non-protocol operational configuration within documented limits.

It cannot sign for users, mutate canonical truth, move funds or exercise governance roles.

### Governance operator

May, only when the connected wallet holds the required canonical role and timelock state permits:

- view proposals, queued actions and configuration;
- propose or execute governed changes;
- administer roles through the canonical governance path;
- perform upgrades or unpause only through approved governance controls.

The interface must show timelock, proposal state, blast radius and audit/transaction identifiers.

### Emergency guardian

May, only where the release manifest maps an operation-scoped emergency capability:

- observe affected operations;
- pause the specifically authorized operation.

Guardian context does not imply unpause, upgrade, treasury, settlement, role-administration or outcome authority.

## Universally prohibited

- editing claim truth or verification results;
- fabricating, accelerating or reversing settlement;
- withdrawing or transferring user funds;
- bypassing verifier eligibility, dispute rules or timelocks;
- impersonating a wallet or accepting a signature for another user;
- silently deleting audit history;
- using frontend role checks as authorization;
- deriving privileged capability from a legacy role name without the canonical release manifest.

## UX requirements

- Display the active identity, context and authority source.
- Separate read-only observation from mutation.
- Show impact, blast radius, reversibility, timelock and expected audit record before confirmation.
- Revalidate wallet, chain, release manifest and authority immediately before sensitive actions.
- Render denied, expired, revoked, paused, stale and unavailable states explicitly.
- Link every result to the canonical transaction or immutable audit identifier.
- Never expose secrets, private evidence or privileged credentials.
- Default all privileged screens to read-only until canonical authority is positively established.

## Implementation approval rule

A contributor may implement a privileged screen only when the issue links the exact capability, authorization check, audit event, release-manifest mapping and rollback/emergency behavior. Otherwise the approved implementation is an explicit unavailable boundary.
