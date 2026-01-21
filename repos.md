# 📦 TruthBounty Repositories

This document links all official TruthBounty repositories and clarifies their responsibilities.

TruthBounty is **not a monorepo**. Each repository is independently versioned, but all must conform to the canonical protocol defined in this repository.

---

## 🔧 Backend API

**Repository:** `truthbounty-api` DigiNodes/truthbounty-api

**Purpose:**
- Off-chain claim lifecycle management
- Verification aggregation
- Reputation scoring
- Evidence handling (IPFS)
- Blockchain event indexing
- Identity verification (Worldcoin ID)

**Key Responsibilities:**
- Compute reputation & confidence scores
- Enforce protocol rules off-chain
- Act as the source of truth for frontend data
- Submit finalized states to smart contracts

---

## 🧠 Smart Contracts

**Repository:** `truthbounty-contracts` DigiNodes/truthbounty-contracts

**Purpose:**
- On-chain staking & slashing
- Reward distribution
- Reputation anchoring
- Dispute windows
- Economic enforcement

**Key Responsibilities:**
- Enforce economic guarantees
- Prevent dishonest participation
- Anchor critical protocol state
- Remain minimal, auditable, and gas-efficient

---

## 🎨 Frontend

**Repository:** `truthbounty-frontend` DigiNodes/truthbounty-frontend

**Purpose:**
- User interface for claims, verification, and reputation
- Wallet & identity flows
- Evidence review
- Reward claiming

**Key Responsibilities:**
- Reflect backend + contract state accurately
- Prevent invalid user actions
- Provide transparent UX for verification outcomes

---

## 🔗 Canonical Reference

All repositories MUST reference:

- This repository’s `README.md` README.md
- `docs/protocol-spec.md`
- `docs/architecture.md`

If a PR conflicts with these documents, it must be revised or rejected.
