# Batch 6 Content and Legal Observations

**Observed:** 2026-10-09  
**Purpose:** Record current implementation evidence and unresolved policy decisions used by the Batch 6 boards.

## Confirmed implementation evidence

### Public health

The API exposes public health routes for liveness, readiness, startup, dependency health, indexer health and an aggregated report. The health types distinguish `healthy`, `degraded` and `unhealthy`, expose measurement timestamps, and can report dependency response time and last successful checks.

The public status design may therefore display bounded, freshness-labelled health observations. Protected diagnostics, internal resource usage and credentials must not be copied into public responses.

### Incidents

The API contains incident creation, update, assignment, investigation-note, resolution, report and summary operations under protected administrator routes. This is not a public incident feed. A public incident detail/history screen requires a separate sanitized read model or approved static publication path.

Internal notes, investigator identities, security details and protected diagnostics must not be exposed by reusing the administrator response.

### Analytics and telemetry

The frontend documents minimal optional analytics that default off, store only a local consent preference, allow only a small `page_view` payload and currently have no canonical network sink.

A separate telemetry document describes feature-flag-controlled, redacted error telemetry and an optional custom transport. A feature flag is not user consent. Before production use, maintainers must reconcile analytics and telemetry into one approved consent, purpose, processor, retention and revocation model.

### Evidence and IPFS

Evidence URLs and CIDs are subject to privacy-aware display and telemetry-redaction rules. The API IPFS provider defaults to local storage when configuration is absent. The UI must not promise permanence, public availability, a specific third-party provider or deletion of public/on-chain references.

### Retention

The API audit-retention service uses configurable retention periods with fallback values of 365 days for audit records and 30 days for PII scrubbing. These are implementation defaults, not approved legal policy. Privacy copy must not present them as binding retention commitments until formally approved and reconciled with every data store.

## Missing or unresolved authority

The current repositories do not establish:

- the verified legal operator identity displayed to users;
- governing law, jurisdiction or dispute-handling terms;
- minimum participant age or regional eligibility rules;
- an approved support submission endpoint or public support address;
- an approved privacy/legal contact address;
- a protected security-reporting channel;
- a security bounty amount, safe-harbor promise or response SLA;
- a public incident publication API;
- a status-subscription service;
- a complete third-party processor and international-transfer inventory;
- a legally approved data-retention schedule;
- a production terms/privacy consent recording mechanism;
- mainnet-specific legal, financial or regulatory disclosures.

## Required decisions before publication

1. Identify and verify the operating entity and public contact details.
2. Obtain legal review for privacy, terms, eligibility, liability, governing law and user-request handling.
3. Approve the support-data schema, endpoint, authentication boundary, retention and redaction rules.
4. Approve a protected security-reporting channel and disclosure policy before enabling submission.
5. Define a sanitized public incident read model separate from protected incident administration.
6. Reconcile optional analytics and telemetry with one consent and processor model.
7. Publish a complete data inventory and retention schedule across frontend storage, API databases, logs, caches, analytics, support data, IPFS and chain data.
8. Maintain distinct testnet and mainnet disclosures. Optimism Sepolia assets have no monetary value.

## Design interpretation

Every unresolved item is represented as review copy, pending configuration or unavailable functionality. The boards authorize hierarchy, states and safety boundaries only; they do not convert placeholders into policy or legal approval.
