# 🔍 TruthBounty Protocol

**Decentralized News Verification Infrastructure**  
*A public-good protocol for incentivizing truth using cryptoeconomic guarantees*

---

## 🌍 What is TruthBounty?

TruthBounty is a **decentralized fact-checking protocol** that transforms news verification into a **verifiable, incentive-aligned public good**.

Instead of relying on centralized authorities or opaque editorial processes, TruthBounty enables communities to:

- Submit claims
- Verify claims using stake-weighted participation
- Build reputation through honest verification
- Earn rewards for truthful contributions
- Penalize misinformation through cryptoeconomic slashing

TruthBounty treats **truth as infrastructure**, not opinion.

---

## 🎯 Core Problem

Misinformation spreads because:

- Verification is unpaid or under-incentivized
- Trust is centralized and opaque
- Identities are cheap to fake
- There is no economic downside to being wrong

TruthBounty solves this by aligning **economic incentives, identity, and reputation** around truthful verification.

---

## 🧠 High-Level System Design

TruthBounty is intentionally **modular** and **chain-aware**, composed of three primary layers:

### 1️⃣ Frontend (User Interface)
- Claim submission & verification
- Evidence review
- Reputation dashboards
- Wallet & identity flows

### 2️⃣ Backend (Off-chain Logic)
- Claim lifecycle engine
- Verification aggregation
- Reputation scoring
- Evidence management (IPFS)
- Blockchain event indexing
- Identity verification (Worldcoin ID)

### 3️⃣ Smart Contracts (On-chain Enforcement)
- Staking & slashing
- Reward distribution
- Reputation anchoring
- Dispute windows
- Protocol invariants

> **Design Principle:**  
> Complex computation happens **off-chain**, while **economic enforcement and finality live on-chain**.

---

## 🔗 Ecosystem Alignment

TruthBounty is built within the **Ethereum ecosystem**, with compatibility for **public-good-oriented chains**.

### Ethereum & Optimism
- Primary settlement layer
- ERC-20 reward token
- Low-cost reward distribution via Optimism

### IPFS
- Immutable, content-addressed evidence storage

### Worldcoin ID
- Sybil-resistant verifier identity
- One-person-one-vote guarantees (weighted by stake)

### Drips Network
- Sustainable funding for maintainers
- Incentivized open-source contribution
- Wave-based development cadence

### Stellar (Planned)
- Low-fee micro-rewards
- Global accessibility
- Cross-chain reputation proofs

---

## 🧩 Protocol Invariants (Non-Negotiable)

All implementations across repositories **MUST** respect these rules:

1. **Claims are off-chain, stakes are on-chain**
2. **No rewards without verifiable stake**
3. **Reputation must be earned, decays over time**
4. **Incorrect verification carries economic risk**
5. **Identity is Sybil-resistant**
6. **All critical state transitions are auditable**

If a PR violates an invariant, it must be rejected or redesigned.

---

## 📂 Repository Structure

This repository is the **canonical source of truth**.

### Child Repositories

| Repo | Description |
|----|----|
| `truthbounty-api` | Backend services & protocol logic |
| `truthbounty-contracts` | Smart contracts (staking, rewards, reputation) |
| `truthbounty-frontend` | User interface & dashboards |

### This Repository Owns

docs/
├── architecture.md # Full system architecture
├── protocol-spec.md # Protocol rules & flows
├── tokenomics.md # Reward & incentive model
├── threat-model.md # Security & trust assumptions
└── glossary.md

designs/
├── flows/
├── screens/
└── component-map.md

.github/
├── ISSUE_TEMPLATE/
└── PULL_REQUEST_TEMPLATE.md


---

## 🧭 How to Contribute

1. **Read the canonical docs**
2. Pick an issue from a child repo
3. Ensure your work aligns with protocol invariants
4. Reference this repo in your PR

All contributors are expected to:
- Respect protocol boundaries
- Document assumptions
- Write tests for logic
- Avoid “local optimizations” that break global behavior

---

## 🧪 How Contributions Are Evaluated

PRs are reviewed based on:

- Alignment with protocol spec
- Security implications
- Incentive correctness
- Test coverage
- Clarity & documentation

This project prioritizes **correctness over speed**.

---

## 🛡️ Security & Trust Assumptions

- Off-chain logic is assumed to be **honest-but-verifiable**
- On-chain logic is **trust-minimized**
- Identities are Sybil-resistant but privacy-preserving
- All economic actions must be reproducible from logs

See `docs/threat-model.md` for details.

---

## 📜 License

MIT — open-source, forkable, and community-driven.

---

## 🌊 Drips Wave Participation

TruthBounty participates in **Drips Network Waves** to:

- Attract serious contributors
- Fund maintainers
- Build long-term open-source momentum

All Wave issues are designed to:
- Have real protocol impact
- Be fairly scoped
- Align with long-term vision

---

## 🙏 Acknowledgements

Built by the community.  
Maintained with intention.  
Aligned for truth.

---

**Truth is not free — but it should be worth defending.**
