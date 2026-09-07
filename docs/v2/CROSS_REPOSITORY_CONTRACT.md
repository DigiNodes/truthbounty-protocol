# TruthBounty V2 Cross-Repository Contract

**Version:** 2.0.0-rc.1  
**Frozen:** 2026-09-07  
**Runtime:** Optimism/EVM

This document is normative for integration between TruthBounty repositories.

## Authority

- Contracts are authoritative for claims, evidence commitments, stake, verification, aggregation, settlement, disputes, rewards, slashing, treasury and governance.
- The API is a deterministic, rebuildable projection and service layer.
- The frontend creates user-reviewed EVM intent and submits wallet-signed transactions.
- No off-chain component may fabricate or override protocol state.

## Release manifest

Every contract release must publish a machine-readable manifest containing:

- protocol release;
- chain ID and network;
- source commit;
- compiler and optimizer settings;
- canonical module addresses;
- proxy and implementation addresses;
- ABI and deployed-bytecode hashes;
- event-schema version;
- deployment transaction references;
- creation timestamp and maintainer approval reference.

The API and frontend must reject an unsupported, placeholder, wrong-chain or hash-mismatched manifest.

## Identifiers

All repositories use lowercase `0x`-prefixed 32-byte hex strings for claim, evidence, verification, dispute, settlement, reward and operation identifiers. Implementations must not parse them as decimal numbers or regenerate canonical IDs off-chain.

Amounts cross repository boundaries as base-unit decimal strings. JavaScript `number` is prohibited for token amounts, weights and block numbers that may exceed its safe range.

## Lifecycle vocabulary

Canonical states are:

- `VerificationOpen`
- `AwaitingSettlement`
- `ChallengeWindow`
- `Disputed`
- `Finalized`

Pause is an independent operational condition. API/frontend aliases must map explicitly and may not add authoritative states.

## Finality model

Every projected resource must distinguish:

- `pending`: transaction known but not canonical;
- `confirmed`: included, below configured finality;
- `finalized`: accepted by the configured Optimism finality policy;
- `orphaned`: removed by reorg.

UI success for a protocol mutation requires a canonical receipt. “Finalized” additionally requires the configured finality condition.

## Event identity and ordering

The canonical log identity is `chainId + blockHash + transactionHash + logIndex`. Ordering is `blockNumber, transactionIndex, logIndex`. Projectors must be idempotent and reversible to a common ancestor.

Breaking event changes require a new event-schema version and coordinated consumer fixtures.

## Error contract

Contracts expose documented custom errors. The API maps internal failures to stable public error codes without changing meaning. The frontend must distinguish wallet rejection, validation failure, RPC failure, contract revert, replacement, drop, API lag and reorg.

## Compatibility gate

A release is compatible only when:

1. contract conformance fixtures pass;
2. API decoder/projection contract tests pass;
3. frontend ABI/API consumer tests pass;
4. artifact hashes match;
5. all three pin the same supported release and manifest.

Cross-repository changes must link consumer updates or demonstrate backward compatibility.
