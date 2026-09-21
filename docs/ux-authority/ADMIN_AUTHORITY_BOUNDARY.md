# Admin Authority Boundary

## Purpose

Admin dashboards expose bounded operations; they do not create new protocol powers.

## Allowed categories

Only when backed by canonical contract/API authority:

- observe system health and projection lag;
- review explicitly defined moderation/operations queues;
- manage configuration within documented limits;
- execute pause/emergency actions granted by governance;
- inspect audit records and failed jobs;
- retry safe idempotent off-chain processing.

## Prohibited categories

- editing canonical claim truth or verification results;
- fabricating, accelerating, or reversing settlement;
- moving or withdrawing user funds;
- bypassing verifier eligibility or dispute rules;
- impersonating a wallet or accepting a signature for a user;
- silently deleting audit history;
- using frontend-only role checks as authorization.

## UX requirements

- Display the active admin identity and authority source.
- Separate read-only observation from mutation.
- Show blast radius, reversibility, and expected audit record before confirmation.
- Require revalidation for sensitive actions.
- Render denied/expired/revoked states explicitly.
- Link every action result to the canonical transaction or audit identifier.
- Never expose secrets or privileged raw credentials.

## Approval rule

A contributor may implement an admin screen only after a maintainer links the exact canonical capability, authorization check, audit event, and rollback/emergency behavior.
