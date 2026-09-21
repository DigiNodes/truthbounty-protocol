# Role and Capability Authority

**Status:** Maintainer proposal for approval. Contributors must not infer permissions beyond this document and the canonical protocol.

## Principles

- Capabilities are granted explicitly; hidden UI is not authorization.
- Contract authority governs protocol mutations.
- API authorization governs protected off-chain projections and operations.
- Frontend route guards improve UX but are not security boundaries.
- A wallet may hold multiple roles; the UI must show active context and avoid accidental privilege use.
- Admin capability must be narrow, auditable, and never imply custody of user funds.

## Capability matrix

| Capability | Visitor | Claimant | Verifier | Admin | Authority |
|---|---:|---:|---:|---:|---|
| Browse public claims and public protocol metrics | Yes | Yes | Yes | Yes | Public chain/API projection |
| Connect wallet and establish session | Yes | Yes | Yes | Yes | Wallet + API session |
| Create and fund own claim | No | Yes | If claimant-capable | If claimant-capable | Contract |
| Manage own draft/evidence before immutable boundary | No | Yes | If owner | If owner | Contract/API as specified |
| Discover eligible verification work | No | Yes | Yes | Yes | API projection of canonical eligibility |
| Commit/reveal/submit verification | No | If eligible | Yes | Only if independently eligible | Contract |
| View personal rewards/reputation/history | No | Yes | Yes | Yes | Contract/API projection |
| Withdraw own available funds/rewards | No | Yes | Yes | Yes | Contract |
| Review operational queues | No | No | No | Yes | API admin authorization |
| Pause/configure protocol where canonical governance permits | No | No | No | Limited | Contract role/governance |
| Override outcomes, fabricate settlement, or move user funds | No | No | No | No | Prohibited |

## Required decisions before implementation

Maintainers must attach canonical references for exact verifier eligibility, admin roles, dispute/appeal powers, and configuration limits. Until then, contributors implement no new privileged action.
