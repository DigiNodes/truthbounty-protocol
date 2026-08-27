# TruthBounty Protocol V2 Specification

**Version:** 2.0.0-proposed  
**Date:** 2026-08-27  
**Status:** Proposed  
**Decision owners:** TruthBounty maintainers  
**Runtime:** Optimism / EVM  
**Normative language:** “MUST”, “MUST NOT”, “SHOULD”, and “MAY” are requirements keywords.

## 1. Purpose

TruthBounty is a decentralized protocol for submitting evidence-backed claims, coordinating stake-backed verification, calculating deterministic provisional outcomes, resolving challenges, and distributing rewards and penalties through auditable smart-contract rules.

This specification defines the canonical V2 protocol behavior. It constrains the contract, API, indexer, and frontend repositories. Where older code, issues, screenshots, tokenomics notes, threat-model notes, or repository documentation conflict with this specification or an accepted ADR, the accepted V2 document takes precedence.

## 2. Network and Programme Boundary

TruthBounty V2 executes on Optimism/EVM.

The canonical runtime uses:

- EVM-compatible wallets;
- Solidity contracts;
- EVM transactions and signatures;
- chain-specific EVM ABIs, event schemas, and address manifests;
- Optimism test and production networks approved through deployment governance.

Drips Stellar Wave is only an open-source contribution and funding programme. Stellar, Soroban, Freighter, and Stellar transaction formats are not part of the TruthBounty runtime.

A runtime-network change requires a separate accepted ADR and migration plan.

## 3. Source-of-Truth Rule

> The blockchain is the canonical single source of truth for all protocol state.

Smart contracts exclusively own:

- claim existence and lifecycle;
- evidence commitments associated with claims;
- verification submissions and locked stake;
- aggregation and provisional outcomes;
- challenge state and appeal outcomes;
- settlement, rewards, refunds, slashing, and treasury accounting;
- governance-controlled parameters;
- authoritative reputation commitments used by protocol logic.

The API, indexer, PostgreSQL, Redis, frontend, analytics, search, notifications, and AI services are derived or non-authoritative. They MUST NOT create or finalize authoritative protocol outcomes.

## 4. Actors

| Actor | Authority |
|---|---|
| Claim submitter | Creates a claim through an EVM transaction and funds its bounty |
| Evidence contributor | Adds content-addressed evidence commitments where permitted |
| Verifier | Locks stake and submits a verification position |
| Challenger | Posts a challenge bond against a provisional outcome |
| Appeal verifier | Participates in a single dispute round |
| Governance | Changes approved parameters and upgrades through a timelock |
| Guardian | Pauses defined operations during emergencies; cannot unpause or upgrade |
| Treasury | Receives only explicitly allocated funds; cannot determine claim outcomes |
| Indexer/API | Projects and serves finalized events; has no settlement authority |
| Frontend | Builds and submits user-signed transactions; has no custody or protocol authority |

No actor MAY receive an undocumented privileged path that bypasses the state machines in this specification.

## 5. Canonical Modules

The production deployment MUST be modular and contain explicit interfaces for the following responsibilities.

| Module | Responsibility |
|---|---|
| ProtocolConfig | Versioned parameters, supported assets, limits, and module references |
| ClaimRegistry | Claim creation, identifiers, lifecycle, deadlines, and canonical claim reads |
| EvidenceRegistry | Content-addressed evidence commitments and evidence metadata hashes |
| StakeVault | Custody, lock accounting, refunds, claims, and pull-based withdrawals |
| VerificationRegistry | Verification positions, stake references, duplication prevention, and round membership |
| AggregationEngine | Integer-only, deterministic weight and confidence calculation |
| SettlementEngine | Provisional outcome creation and final settlement orchestration |
| DisputeManager | Challenge bonds, one appeal round, appeal aggregation, and dispute finalization |
| RewardEngine | Bounty, winner reward, refund, and pull-payment accounting |
| SlashingEngine | Losing-stake penalties and exhaustive allocation calculation |
| Treasury | Timelocked protocol allocations and constrained recovery behavior |
| ReputationRootRegistry | Approved reputation commitments and proof verification |
| GovernanceController | Proposal, voting, timelock, role administration, and upgrade execution |
| EmergencyController | Operation-scoped pause escalation and governed recovery |

A module MAY be combined with another only when the resulting contract preserves explicit interfaces, least privilege, independent testing, and the accounting and event invariants in this specification. A monolithic legacy contract is not the default production topology.

## 6. Identifiers and Versioning

### 6.1 Protocol release

Every production deployment MUST publish a semantic protocol release identifier such as `v2.0.0`.

The API and frontend MUST pin the same release identifier and chain-specific manifest.

### 6.2 Claim identifier

A claim identifier MUST be collision-resistant and deterministic. The canonical derivation is:

```text
claimId = keccak256(
  abi.encode(
    chainId,
    claimRegistryAddress,
    submitter,
    submitterNonce,
    metadataDigest
  )
)
```

The registry MUST reject duplicate identifiers and increment or otherwise consume the submitter nonce atomically.

### 6.3 Evidence identifier

An evidence identifier MUST commit to the claim, contributor, content digest, metadata digest, and contributor nonce. Raw evidence content is not stored in contract storage.

### 6.4 Event version

Every authoritative event schema MUST identify the protocol or event version either in its signature, emitted data, or release manifest. Breaking event changes require a new release and migration plan.

## 7. Claim Data Model

A canonical claim MUST include or commit to:

- `claimId`;
- submitter address;
- metadata digest;
- evidence-root or initial evidence digest;
- bounty asset and amount;
- creation block and timestamp;
- verification deadline;
- challenge deadline when created;
- current lifecycle state;
- current provisional and final outcome;
- verification round;
- protocol-parameter version;
- settlement reference.

Human-readable claim text, sources, media, and extended metadata SHOULD be content-addressed outside the chain. The contract stores the digest and emits the retrievable reference required by the approved metadata schema.

The frontend MUST warn users that public content-addressed evidence may be permanent and must not contain unnecessary personal or confidential information.

## 8. Claim Lifecycle

### 8.1 States

| State | Meaning |
|---|---|
| `VerificationOpen` | Claim exists and first-round verification is open |
| `AwaitingSettlement` | Verification deadline passed; new first-round votes are rejected |
| `ChallengeWindow` | A deterministic provisional outcome exists and may be challenged |
| `Disputed` | A valid challenge opened the single appeal round |
| `Finalized` | Outcome and all financial allocations are immutable |
| `Paused` | An operational pause blocks selected transitions without changing underlying claim state |

The implementation MAY represent pause separately from the claim enum, but pause behavior MUST be observable.

### 8.2 Transitions

| From | Action | To |
|---|---|---|
| None | Create claim and fund bounty | `VerificationOpen` |
| `VerificationOpen` | Verification deadline reached | `AwaitingSettlement` |
| `AwaitingSettlement` | Aggregate and settle provisionally | `ChallengeWindow` |
| `ChallengeWindow` | Valid challenge bond posted before deadline | `Disputed` |
| `ChallengeWindow` | Deadline passes without challenge | `Finalized` |
| `Disputed` | Appeal deadline passes and appeal settles | `Finalized` |

Transactions MUST enforce time boundaries using contract-visible time and MUST reject early, late, duplicate, or repeated transitions.

No backend administrator or treasury role may override a claim outcome.

## 9. Claim Creation

A claim-creation transaction MUST:

1. validate supported bounty asset and minimum/maximum bounty;
2. validate metadata and evidence commitment formats;
3. derive a unique claim identifier;
4. transfer the bounty into protocol custody using safe token semantics;
5. bind the claim to a versioned parameter set;
6. create the verification deadline;
7. enter `VerificationOpen`;
8. emit a complete `ClaimCreated` event.

Fee-on-transfer, rebasing, callback-enabled, or otherwise non-standard assets MUST be rejected unless explicitly supported by an accepted asset adapter and tested accounting model.

The submitter MUST NOT be able to withdraw or change a live claim after verifications begin. Any future correction mechanism requires a separate versioned protocol decision.

## 10. Evidence Commitments

Evidence may be submitted during the windows defined by `ProtocolConfig`.

Each evidence submission MUST:

- reference an existing claim;
- commit to the content digest and metadata digest;
- identify the contributor;
- prevent duplicate evidence identifiers;
- enforce size, MIME, and URL-policy validation in the non-authoritative upload service;
- emit `EvidenceCommitted`.

The API MAY upload, scan, validate, and pin evidence. A successful upload is not authoritative until the user or permitted actor commits the digest through the defined transaction.

Contracts do not attest that evidence is true; they attest only to the submitted commitment and protocol timing.

## 11. Verification and Stake

A verifier transaction MUST:

1. reference a claim in an open verification or appeal round;
2. select one allowed position: `True` or `False`;
3. lock a supported stake amount in `StakeVault`;
4. reject a second position from the same address in the same round;
5. freeze the stake and effective weight used for that round;
6. emit `VerificationSubmitted`.

A verifier MUST NOT change or withdraw a position after submission.

The minimum and maximum stake, per-wallet weight cap, and round-specific limits are governed parameters. Weight caps MUST prevent a single address from gaining unbounded influence merely by increasing stake.

## 12. Reputation and Sybil Signals

V2 MUST remain correct when no optional identity provider is available.

The base effective weight is stake subject to configured caps. A reputation multiplier MAY be applied only when:

- governance has approved a versioned reputation root or commitment;
- the verifier supplies a valid proof;
- the multiplier bounds are encoded in the contract;
- the proof and applied multiplier are reproducible and auditable;
- the backend cannot choose or alter the multiplier.

World ID or another Sybil-resistance system MAY be used as an optional signal through an accepted adapter. It MUST NOT silently become a mandatory dependency or create an off-chain settlement authority.

## 13. Deterministic Aggregation

Aggregation MUST use integer-only arithmetic and MUST be independent of submission order.

For each valid verification:

```text
effectiveWeight =
  min(lockedStake, perWalletWeightCap)
  × reputationMultiplierBps
  ÷ 10_000
```

Without an approved reputation proof, `reputationMultiplierBps = 10_000`.

The engine calculates:

```text
trueWeight  = sum(effectiveWeight for True)
falseWeight = sum(effectiveWeight for False)
totalWeight = trueWeight + falseWeight
```

A provisional outcome is:

- `True` when `trueWeight > falseWeight` and all participation thresholds pass;
- `False` when `falseWeight > trueWeight` and all participation thresholds pass;
- `Inconclusive` on an exact tie, zero participation, or failure of a required participation threshold.

For a conclusive result:

```text
confidenceBps = winningWeight × 10_000 ÷ totalWeight
```

For an inconclusive result, `confidenceBps = 0`.

Aggregation MUST be callable without granting the caller discretion over the result. Repeated aggregation for the same round MUST return the same result or revert after the canonical result is stored.

## 14. Provisional Settlement

After the verification deadline, any account MAY trigger deterministic aggregation and provisional settlement.

Provisional settlement MUST:

- freeze the round result;
- calculate, but not prematurely release, final allocations;
- create the challenge deadline;
- emit weights, participation, outcome, confidence, and parameter version;
- enter `ChallengeWindow`.

Funds that may be affected by a challenge remain locked until finalization.

## 15. Disputes

V2 supports one challenge and one appeal round per claim.

A valid challenge MUST:

- be submitted during `ChallengeWindow`;
- post the configured challenge bond;
- state the challenged provisional outcome;
- open a new appeal round with increased participation or stake requirements;
- emit `DisputeOpened`;
- enter `Disputed`.

Appeal verifications use the same deterministic aggregation rules with the appeal-round parameters. First-round voters MAY participate unless a later accepted ADR introduces privacy-preserving uniqueness or exclusion that can be enforced without backend discretion.

When the appeal deadline passes, any account MAY trigger appeal settlement. The appeal result becomes final. Recursive appeals are not supported in V2.

If the appeal changes a conclusive provisional outcome or turns it inconclusive, the challenger bond is refunded and MAY receive the configured successful-challenge reward. Otherwise, the bond is allocated according to the configured failed-challenge rules.

Governance, guardians, treasury operators, API administrators, and frontend maintainers MUST NOT decide individual disputes.

## 16. Final Settlement and Accounting

Settlement uses pull-based balances. The protocol records entitlements; recipients withdraw through bounded, reentrancy-protected functions.

### 16.1 Conclusive outcome

For a conclusive final outcome:

- winning verifier principal is unlocked;
- losing stake is slashed according to configured rules;
- winning verifiers receive the verifier-reward pool pro rata by frozen effective weight;
- the submitter bounty is allocated according to the approved reward configuration;
- treasury, burn, and insurance allocations are recorded;
- challenge-bond treatment is recorded;
- all amounts become claimable or irreversibly allocated.

### 16.2 Inconclusive outcome

For an inconclusive final outcome:

- verifier principal is returned unless a separately documented misconduct penalty applies;
- no verifier is treated as a winning truth position;
- the bounty is refunded or allocated according to the versioned inconclusive policy;
- challenge-bond treatment follows the dispute result;
- protocol fees, if any, are explicit.

### 16.3 Exhaustive accounting invariant

For every asset and settlement:

```text
funds received
=
claimable principal
+ claimable rewards
+ submitter refund
+ treasury allocation
+ burn allocation
+ insurance allocation
+ explicitly documented protocol fee
```

The configured allocation basis points for each distributed pool MUST sum to `10_000`, subject only to documented integer-rounding treatment.

Rounding dust MUST be assigned deterministically to a named destination. It MUST NOT remain as unexplained contract surplus.

No privileged `rescueTokens` function may withdraw assets that are owed to users or allocated by live settlements.

## 17. Treasury

The treasury MAY receive only explicit allocations emitted by settlement events.

Treasury actions MUST:

- be initiated by governance;
- pass the required timelock;
- identify asset, amount, recipient, and purpose;
- emit an event;
- preserve user claimable balances;
- reject zero addresses and unsupported assets.

The treasury has no authority to settle claims, choose winners, alter weights, or bypass dispute rules.

## 18. Governance, Roles, and Upgrades

Production administration MUST NOT remain with an externally owned account.

The governance model MUST include:

- a GovernorBravo-compatible governance controller or an accepted equivalent;
- `TimelockController`;
- a minimum 48-hour delay for economic-parameter changes;
- a minimum 7-day delay for implementation upgrades;
- a 3-of-5 guardian multisignature limited to authorized pause escalation;
- role separation between proposing, executing, pausing, treasury operations, and upgrading.

The guardian MUST NOT:

- unpause independently;
- upgrade contracts;
- transfer treasury funds;
- decide claim outcomes;
- change economic parameters.

Upgradeable modules SHOULD use transparent ERC-1967 proxies with a `ProxyAdmin` owned by the timelock. Any exception must be documented in the deployment manifest. Implementations MUST disable initializers and pass storage-layout compatibility checks.

Deprecated production paths MUST revert or be unreachable after migration.

## 19. Emergency Controls

Emergency controls MUST be operation-scoped and fail closed.

At minimum, the system MUST be able to pause:

- claim creation;
- evidence commitment;
- verification submission;
- challenge creation;
- reward withdrawal;
- treasury execution;
- upgrades where an incident requires it.

Read functions and event history remain available.

Pause escalation may be rapid. Recovery and unpause require governance-controlled validation and must emit a complete audit trail. Pausing MUST NOT silently alter claim outcomes or accounting.

## 20. Canonical Events

The canonical suite MUST emit sufficient events to rebuild every authoritative state transition and financial allocation.

Required event families include:

- `ClaimCreated`;
- `ClaimStateChanged`;
- `EvidenceCommitted`;
- `StakeLocked`;
- `VerificationSubmitted`;
- `RoundAggregated`;
- `ProvisionalOutcomeCreated`;
- `DisputeOpened`;
- `AppealFinalized`;
- `ClaimFinalized`;
- `StakeUnlocked`;
- `StakeSlashed`;
- `RewardAllocated`;
- `WithdrawalCompleted`;
- `TreasuryAllocated`;
- `ParameterUpdated`;
- `ReputationRootUpdated`;
- `PauseActivated`;
- `PauseLifted`;
- `ModuleUpgraded`.

Events MUST contain identifiers, round, actor, asset, amount, state or outcome, parameter version, and other fields required for deterministic projection. Event payloads MUST NOT expose unnecessary personal information.

## 21. Indexer and Reorganization Rules

The indexer consumes chain events but does not become authoritative.

It MUST:

- identify events by `chainId + blockHash + transactionHash + logIndex`;
- store block ancestry and confirmation state;
- process handlers idempotently;
- project only events meeting the configured confirmation/finality policy into finalized read models;
- roll back orphaned blocks and dependent projections;
- replay from genesis or an approved deployment block;
- rebuild PostgreSQL state deterministically;
- expose synchronization and indexing status.

If the API and chain disagree, security-critical UI flows MUST treat the chain as authoritative and display indexing delay rather than inventing finality.

## 22. API and Authentication Boundary

The API MAY provide:

- EIP-4361 SIWE authentication;
- evidence upload, scanning, pinning, and retrieval;
- indexed queries, search, analytics, notifications, and WebSockets;
- transaction observation and indexing status;
- non-authoritative preferences and profiles.

SIWE validation MUST verify nonce, signature, domain, URI, chain ID, issued-at time, expiration time, and replay protection.

Authentication proves control of an address for application services. It does not authorize the API to sign transactions or mutate protocol state on the user's behalf.

The API MUST use PostgreSQL as the durable application and projection datastore. Redis is disposable cache and coordination infrastructure. A second authoritative ORM/database path is prohibited.

## 23. Frontend Boundary

The frontend MUST:

- use Wagmi and Viem-compatible EVM integration;
- enforce approved Optimism networks;
- obtain ABIs and addresses from the versioned deployment release;
- show transaction review, wallet prompt, submission, confirmation, replacement, failure, indexing, and final UI states;
- distinguish provisional outcomes from final outcomes;
- warn on wrong network, unsupported asset, stale configuration, and evidence privacy risks.

Production code MUST NOT use:

- Freighter or Stellar wallet APIs;
- dummy contract addresses;
- synthetic receipts or fabricated transaction hashes;
- local or API state as authoritative finality.

Visual implementation tasks remain blocked until maintainers approve the replacement information architecture and interface designs.

## 24. Security Requirements

The protocol assumes adversarial participation.

Required controls include:

- checks-effects-interactions and reentrancy protection;
- safe ERC-20 handling;
- bounded loops or pull-based iteration;
- access-control tests and least privilege;
- replay and signature-domain protection;
- frontrunning and deadline analysis;
- stake, bounty, bond, and withdrawal accounting invariants;
- denial-of-service resistance for settlement and withdrawals;
- integer rounding tests;
- fuzz and invariant testing;
- upgrade authorization and storage-layout testing;
- secret, dependency, licence, and provenance scanning;
- private disclosure handling for exploitable findings.

AI output, external identity signals, analytics, and moderator annotations are never authoritative claim outcomes.

## 25. Protocol Invariants

Every implementation and pull request MUST preserve:

1. No claim exists without a valid on-chain creation transaction.
2. No verification weight exists without locked stake.
3. One address has at most one position per claim round.
4. Frozen round weight cannot change after submission.
5. Aggregation is deterministic, integer-only, and order-independent.
6. Backend or frontend state cannot override contract state.
7. No final reward exists before final settlement.
8. User claimable balances cannot be withdrawn by treasury or rescue logic.
9. Every received token has an exhaustive accounting destination.
10. Total withdrawals cannot exceed recorded entitlements.
11. A finalized claim cannot re-enter an earlier state.
12. A paused operation cannot mutate prohibited state.
13. The indexer can rebuild finalized read models from canonical events.
14. Frontend and API consume the same versioned contract release.
15. Governance and upgrades cannot bypass required timelocks.
16. Deprecated authority paths are unreachable in production.

## 26. Deployment Artifacts

Each approved deployment MUST publish:

- protocol release identifier;
- chain ID and network name;
- deployment block;
- contract names, addresses, implementation addresses, and proxy types;
- constructor or initializer parameters;
- role assignments and role administrators;
- timelock and guardian addresses;
- supported assets;
- parameter-set version and values;
- ABI files;
- event-schema files;
- source commit and build-tool versions;
- bytecode or source verification status;
- post-deployment invariant results.

API and frontend CI MUST fail when manifests contain zero, dummy, legacy, unsupported, or unapproved addresses.

## 27. Governed Launch Parameters

Launch values are not hardcoded in this specification. Before a public deployment, maintainers MUST approve and publish values and safe bounds for:

- supported bounty and stake assets;
- minimum and maximum bounty;
- minimum and maximum verifier stake;
- per-wallet weight cap;
- verification duration;
- minimum verifier count;
- minimum total effective weight;
- minimum confidence;
- challenge duration;
- challenge bond;
- appeal duration and participation multiplier;
- reward, treasury, burn, insurance, and fee allocations;
- reputation multiplier bounds and root validity;
- confirmation/finality policy;
- evidence metadata and upload limits;
- pause cooldowns;
- governance proposal, quorum, voting, and timelock settings.

A parameter change MUST be versioned and MUST NOT retroactively change frozen claim-round calculations.

## 28. Compatibility and Migration

V1 and legacy contracts are not peer authorities with V2.

Migration MUST:

1. classify every legacy component as reference, transitional, deprecated, or removed;
2. exclude `TruthBountyClaims.sol` from canonical V2 settlement;
3. use `TruthBountyWeighted.sol` only as reference or controlled migration code unless a later ADR supersedes ADR-0001;
4. deploy one canonical modular release;
5. publish the deployment artifacts;
6. move API and frontend consumers to that release;
7. disable legacy production routes;
8. verify that no two authoritative paths remain active.

Historical database records MAY be retained as non-authoritative archive data and MUST be clearly distinguished from V2 indexed state.

## 29. Acceptance Gate

This specification may move from `Proposed` to `Accepted` when:

- at least two core maintainers approve it;
- ADR-0001 remains accepted or is updated consistently;
- the engineering blueprint maps every requirement to a repository and test gate;
- the launch-parameter approval process is assigned;
- contract state, financial, dispute, governance, and event invariants are reviewable;
- threat-model and tokenomics documents are scheduled for alignment;
- all internal links validate;
- no unresolved contradiction grants authority to an off-chain service.

New implementation issues may be drafted against this proposed specification, but they MUST remain unactivated candidates until the governing sections and dependencies are accepted.

## 30. Related Documents

- [ADR-0001 — Canonical TruthBounty V2 Contract Topology](../architecture/ADR-0001-canonical-v2-contract-topology.md)
- [TruthBounty V2 Audit Reconciliation](../audits/TRUTHBOUNTY_V2_AUDIT_RECONCILIATION.md)
- [Drips Stellar Wave Operations](../operations/DRIPS_STELLAR_WAVE_OPERATIONS.md)
- [Glossary](../glossary.md)
- [Threat Model](../threat-model.md)
- [Tokenomics](../tokenomics.md)
