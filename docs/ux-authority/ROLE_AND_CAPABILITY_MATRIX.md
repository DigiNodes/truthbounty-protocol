# Role and Capability Authority

**Status:** Approved semantic authority  
**Approved:** 2026-10-05  
**Enforcement:** Contracts and protected API authorization, never frontend context alone

## Principles

- Capabilities are granted explicitly; hidden UI is not authorization.
- Contract authority governs protocol mutations.
- API authorization governs protected off-chain operations and projections.
- Frontend route guards improve UX but are not security boundaries.
- A wallet may hold multiple capabilities; the UI shows an active context and prevents accidental privilege use.
- Generic “admin” is not one unlimited role.
- Missing, stale, contradictory or unmapped authority fails closed.
- Production mappings come from the versioned release role manifest; contributors must not hard-code guessed role hashes or addresses.

## User contexts

| Context | Meaning | Authority source |
|---|---|---|
| Visitor | No authenticated wallet/session | Public chain and public API projection |
| Connected participant | Authenticated wallet on a supported release/chain | Wallet, session and release manifest |
| Claimant | Participant acting on owned claims | Claim ownership and contract permissions |
| Verifier | Participant currently eligible for verification work | Canonical eligibility/reputation/stake rules |
| Operations administrator | Bounded off-chain operational capability | Protected API authorization and audit policy |
| Governance operator | Timelocked configuration/proposal/upgrade capability | Canonical contract roles and governance state |
| Emergency guardian | Narrow operation-scoped pause capability | Canonical emergency role; no implied unpause/settlement authority |

“Active context” is presentation state only. It cannot create a capability.

## Capability matrix

| Capability | Visitor | Participant/Claimant | Verifier | Operations admin | Governance operator | Guardian | Authority |
|---|---:|---:|---:|---:|---:|---:|---|
| Browse public claims and metrics | Yes | Yes | Yes | Yes | Yes | Yes | Public chain/API projection |
| Connect wallet and establish session | Yes | Yes | Yes | Yes | Yes | Yes | Wallet + API session |
| Create and fund own claim | No | If claimant-capable | If independently claimant-capable | No | Only if independently claimant-capable | No | Contract |
| Manage own draft/evidence before immutable boundary | No | If owner | If owner | No | If owner | No | Contract/API as specified |
| Discover eligible verification work | No | If eligible | Yes | No | If independently eligible | No | Canonical eligibility projection |
| Commit/reveal/submit verification | No | If eligible | Yes | No | If independently eligible | No | Contract |
| Open a dispute/appeal | No | If canonically eligible | If canonically eligible | No | Only if independently eligible | No | Contract |
| View personal rewards/reputation/history | No | Yes | Yes | No personal impersonation | Own only | Own only | Contract/API projection |
| Withdraw own available funds/rewards | No | Yes | Yes | No | Own only | Own only | Contract |
| Review operational queues | No | No | No | Yes | Read only where authorized | No | Protected API |
| Retry safe idempotent projection work | No | No | No | If explicitly granted | No | No | Protected API + audit |
| Propose/execute governed configuration | No | No | No | No | If timelock/role permits | No | Governance contracts |
| Pause an operation | No | No | No | No | Only if granted | If scoped role permits | Emergency/governance contracts |
| Unpause, upgrade or administer roles | No | No | No | No | Only through canonical governance/timelock | No unless separately governed | Governance contracts |
| Override truth/outcomes or fabricate settlement | No | No | No | No | No | No | Prohibited |
| Move or withdraw another user’s funds | No | No | No | No | No | No | Prohibited |

## Canonical mapping rule

The UI must consume a versioned release manifest containing supported chain, contract addresses, ABI hashes and role/capability identifiers. Until that manifest is published and verified:

- privileged mutation controls remain unavailable;
- the UI may render read-only authority explanations;
- no contributor may map a legacy role name directly to a production capability;
- no frontend-only flag may grant governance, guardian or operations access.

## Required evidence per privileged screen

A privileged implementation issue must link:

1. the exact contract function or protected API operation;
2. its authorization check;
3. the emitted event or immutable audit identifier;
4. timelock, pause and rollback behavior;
5. denied, expired, revoked and wrong-chain states;
6. the release-manifest field used to resolve the capability.
