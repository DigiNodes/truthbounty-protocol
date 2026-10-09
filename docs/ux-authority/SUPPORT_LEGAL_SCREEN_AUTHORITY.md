# Support and Legal Screen Authority

**Status:** Proposed — requires maintainer approval  
**Batch:** 6 — Documentation, status, support and legal  
**Runtime:** Optimism/EVM only

## Purpose

This authority completes the TruthBounty V2 screen-design collection with trustworthy public guidance, service transparency, support entry, responsible disclosure, legal structures, risk communication and safe system states. It does not approve legal copy, create service promises or authorize support operators to change protocol state.

## Shared rules

1. Documentation is versioned by applicable protocol release and review date.
2. Contract state and verified release artifacts remain authoritative over explanatory content.
3. Public health is freshness-labelled; a missing, cached or stale observation is never displayed as healthy.
4. Third-party wallet, RPC, explorer, IPFS or infrastructure status is an observed dependency, not a TruthBounty guarantee.
5. Public incident content is sanitized and separated from protected investigation notes and administrator operations.
6. Support requests accept only non-secret diagnostic references. Seed phrases, private keys, signatures, credentials, protected rationale and non-public evidence are prohibited.
7. Support cannot edit or reverse claims, votes, disputes, settlements, rewards, balances or canonical transactions.
8. Security submissions remain unavailable until a protected channel and disclosure policy are formally approved.
9. Privacy, terms, eligibility, retention, jurisdiction, operator identity and liability language require legal approval before publication.
10. Wallet connection, authentication and wallet signatures are not treated as legal consent unless an approved specification explicitly says so.
11. Provisional confidence or dispute results are never described as established truth.
12. Testnet and mainnet risk notices remain distinct; testnet assets have no monetary value.

## Canonical routes

| Destination | Approved use |
|---|---|
| `/docs` | Documentation home and durable journey guidance |
| `/docs/:slug` | Versioned documentation article |
| `/status` | Freshness-labelled public health and incident summary |
| `/status/incidents/:incidentId` | Sanitized public incident detail and history |
| `/contact` | Contact category selection and approved public channels |
| `/support` | Troubleshooting and, only when configured, support-request submission |
| `/security` | Responsible-disclosure guidance and protected reporting channel |
| `/privacy` | Versioned, legally approved privacy notice |
| `/terms` | Versioned, legally approved terms of use |
| `/disclosures` | Protocol, participation, testnet and mainnet risk disclosures |

Routes may render explicit unavailable states until their backend, contact or legal authority is approved. They must not ship placeholder addresses or silently collect data.

## Screen authority

### Documentation and help

- **Documentation home:** exposes searchable, release-labelled claimant, verifier, dispute, rewards, governance, safety and developer guidance.
- **Documentation article:** exposes breadcrumb, table of contents, version, review date, release applicability, sources, related material and feedback boundary.
- **Help and troubleshooting:** organizes recovery by observed state and separates safe diagnosis from protocol mutation.

### Status and incidents

- **Service-status overview:** presents web, API, RPC, database, indexer, evidence gateway and release-manifest observations with timestamps and stale/degraded/unavailable states.
- **Incident detail and history:** publishes a sanitized incident timeline, impact and post-incident material without exposing protected investigation data or fabricating uptime guarantees.

### Contact and support

- **Contact and support entry:** separates general, technical, contributor, partnership, privacy/legal and security channels; missing channels remain pending.
- **Support-request form:** collects the minimum approved fields, blocks secret submission, states retention/consent boundaries and exposes validation, duplicate, failure and confirmation states.
- **Security reporting:** explains scope, safe testing, required report detail and prohibited disclosure; no bounty or response commitment appears without formal authority.

### Legal and disclosures

- **Privacy notice:** separates immutable chain/public references from controllable off-chain data and requires operator, processor, purpose, retention, request and jurisdiction review.
- **Terms of use:** covers eligibility, wallet responsibility, acceptable use, evidence, staking, rewards, disputes, dependencies, availability and liability only after legal approval.
- **Protocol-risk disclosures:** communicates contract, upgrade, economic, finality, reorg, evidence, dependency, governance and emergency risks at action-relevant points.
- **Legal version and consent:** preserves effective dates, prior versions, material-change summaries, decline and renewed-consent states without conflating signatures with consent.

### System support states

- **Not found, retired release, maintenance, unavailable, stale and denied:** preserve identifiers and drafts, explain the failing boundary, and offer only safe recovery routes. They never auto-submit, request a signature or switch networks.

## Responsive and accessibility requirements

- Documentation navigation becomes a labelled drawer on small screens; article content remains primary in reading order.
- Status tables become cards without losing service name, state, freshness or affected scope.
- Legal content retains headings, landmarks, version metadata and a readable measure at 200% zoom.
- Form errors are programmatically associated with fields and summarized before submission controls.
- Warnings and risk disclosures use text plus icon/colour and are never hidden behind hover.
- Focus returns to the initiating element after dialogs, drawers and error-state recovery.
- Reduced motion, high contrast, keyboard access and screen-reader announcements follow the approved foundation authority.

## Approval effect

Approval establishes visual, semantic and route authority. It does not approve legal text, configure support/security channels, expose protected incident data, activate frontend contributor issues or authorize the `Stellar Wave` label.
