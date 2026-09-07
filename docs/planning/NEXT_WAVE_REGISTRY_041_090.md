# V2 Next-Wave Registry (041–090)

**Generated and validated:** 2026-09-07  
**Scope:** 150 issues across contract, API and frontend.

## Validation summary

- Expected tasks: 150
- Present tasks: 150
- Missing identifiers: 0
- Dependency references not found in V2 issue inventory: 0
- Active initial batch: V2-SC-041, V2-BE-044, V2-FE-042
- Every other task is a candidate until its activation gate passes.

## Registry

| Task | Scope | State | Declared V2 dependencies | GitHub |
|---|---|---|---|---|
| V2-BE-041 | Complete Prisma-Only Persistence Convergence | Candidate | V2-BE-019 | [#392](https://github.com/DigiNodes/truthbounty-api/issues/392) |
| V2-BE-042 | Make Health and Readiness Signals Truthful and Fail-Closed | Candidate | V2-BE-019 | [#393](https://github.com/DigiNodes/truthbounty-api/issues/393) |
| V2-BE-043 | Enforce Reorg-Safe Canonical Projection Semantics | Candidate | V2-BE-019, V2-BE-023 | [#394](https://github.com/DigiNodes/truthbounty-api/issues/394) |
| V2-BE-044 | Make API Security, Build, and Artifact Checks Non-Skippable | Candidate | None | [#395](https://github.com/DigiNodes/truthbounty-api/issues/395) |
| V2-BE-045 | Enforce Database Schema Constraints for Protocol Projections | Candidate | V2-BE-041 | [#396](https://github.com/DigiNodes/truthbounty-api/issues/396) |
| V2-BE-046 | Serialize and Lock Production Database Migrations | Candidate | V2-BE-041, V2-BE-044 | [#397](https://github.com/DigiNodes/truthbounty-api/issues/397) |
| V2-BE-047 | Define Atomic Projection Transaction Boundaries | Candidate | V2-BE-043, V2-BE-045 | [#398](https://github.com/DigiNodes/truthbounty-api/issues/398) |
| V2-BE-048 | Implement a Transactional Outbox for Side Effects | Candidate | V2-BE-047 | [#399](https://github.com/DigiNodes/truthbounty-api/issues/399) |
| V2-BE-049 | Standardize Idempotency Keys for Public Commands | Candidate | V2-BE-045 | [#400](https://github.com/DigiNodes/truthbounty-api/issues/400) |
| V2-BE-050 | Deduplicate Chain Events by Canonical Log Identity | Candidate | V2-BE-043, V2-BE-047 | [#401](https://github.com/DigiNodes/truthbounty-api/issues/401) |
| V2-BE-051 | Persist a Reorg-Aware Block Cursor | Candidate | V2-BE-043 | [#402](https://github.com/DigiNodes/truthbounty-api/issues/402) |
| V2-BE-052 | Implement Atomic Common-Ancestor Reorg Rollback | Candidate | V2-BE-051, V2-BE-048 | [#403](https://github.com/DigiNodes/truthbounty-api/issues/403) |
| V2-BE-053 | Validate Finality Policy per Optimism Network | Candidate | V2-BE-043, V2-BE-051 | [#404](https://github.com/DigiNodes/truthbounty-api/issues/404) |
| V2-BE-054 | Version ABI Decoders and Reject Unknown Events | Candidate | V2-BE-043, V2-FE-043 | [#405](https://github.com/DigiNodes/truthbounty-api/issues/405) |
| V2-BE-055 | Add Resumable Projector Checkpoints | Candidate | V2-BE-047, V2-BE-051 | [#406](https://github.com/DigiNodes/truthbounty-api/issues/406) |
| V2-BE-056 | Generate Projection Rebuild Digests | Candidate | V2-BE-019, V2-BE-055 | [#407](https://github.com/DigiNodes/truthbounty-api/issues/407) |
| V2-BE-057 | Expose Projection Freshness and Finality Metadata | Candidate | V2-BE-042, V2-BE-053 | [#408](https://github.com/DigiNodes/truthbounty-api/issues/408) |
| V2-BE-058 | Implement Stable Cursor Pagination | Candidate | V2-BE-045 | [#409](https://github.com/DigiNodes/truthbounty-api/issues/409) |
| V2-BE-059 | Build Projection-Only Claim Search | Candidate | V2-BE-058 | [#410](https://github.com/DigiNodes/truthbounty-api/issues/410) |
| V2-BE-060 | Create a Canonical API Cache-Key Registry | Candidate | V2-BE-057, V2-BE-058 | [#411](https://github.com/DigiNodes/truthbounty-api/issues/411) |
| V2-BE-061 | Add Wallet-Scoped and Endpoint-Cost Rate Limits | Candidate | V2-BE-044 | [#412](https://github.com/DigiNodes/truthbounty-api/issues/412) |
| V2-BE-062 | Implement One-Time Wallet Authentication Nonces | Candidate | V2-BE-044 | [#413](https://github.com/DigiNodes/truthbounty-api/issues/413) |
| V2-BE-063 | Validate SIWE Domain, Origin, Chain, and Statement | Candidate | V2-BE-062 | [#414](https://github.com/DigiNodes/truthbounty-api/issues/414) |
| V2-BE-064 | Rotate and Revoke Authentication Sessions | Candidate | V2-BE-063 | [#415](https://github.com/DigiNodes/truthbounty-api/issues/415) |
| V2-BE-065 | Eliminate Authentication Timing Side Channels | Candidate | V2-BE-044 | [#416](https://github.com/DigiNodes/truthbounty-api/issues/416) |
| V2-BE-066 | Enforce Least-Privilege API Authorization Policies | Candidate | V2-BE-064 | [#417](https://github.com/DigiNodes/truthbounty-api/issues/417) |
| V2-BE-067 | Create a Tamper-Evident Administrative Audit Log | Candidate | V2-BE-066 | [#418](https://github.com/DigiNodes/truthbounty-api/issues/418) |
| V2-BE-068 | Validate Secrets and Environment Configuration at Startup | Candidate | V2-BE-044 | [#419](https://github.com/DigiNodes/truthbounty-api/issues/419) |
| V2-BE-069 | Harden CORS, Headers, and Proxy Trust Boundaries | Candidate | V2-BE-068 | [#420](https://github.com/DigiNodes/truthbounty-api/issues/420) |
| V2-BE-070 | Centralize Request Validation and Numeric Bounds | Candidate | V2-BE-044 | [#421](https://github.com/DigiNodes/truthbounty-api/issues/421) |
| V2-BE-071 | Redact Errors, Logs, and Traces | Candidate | V2-BE-067, V2-BE-068 | [#422](https://github.com/DigiNodes/truthbounty-api/issues/422) |
| V2-BE-072 | Add Query Plans and Indexes for Critical Read Models | Candidate | V2-BE-058, V2-BE-059 | [#423](https://github.com/DigiNodes/truthbounty-api/issues/423) |
| V2-BE-073 | Eliminate N+1 Queries from Claim Detail and Feeds | Candidate | V2-BE-059, V2-BE-072 | [#424](https://github.com/DigiNodes/truthbounty-api/issues/424) |
| V2-BE-074 | Harden Queue Retries and Dead-Letter Handling | Candidate | V2-BE-048 | [#425](https://github.com/DigiNodes/truthbounty-api/issues/425) |
| V2-BE-075 | Verify Outbound and Inbound Webhook Signatures | Candidate | V2-BE-048, V2-BE-065 | [#426](https://github.com/DigiNodes/truthbounty-api/issues/426) |
| V2-BE-076 | Build Idempotent Notification Delivery from the Outbox | Candidate | V2-BE-048, V2-BE-074 | [#427](https://github.com/DigiNodes/truthbounty-api/issues/427) |
| V2-BE-077 | Define Health SLOs and Dependency Degradation Semantics | Candidate | V2-BE-042 | [#428](https://github.com/DigiNodes/truthbounty-api/issues/428) |
| V2-BE-078 | Control Metrics Cardinality and Sensitive Labels | Candidate | V2-BE-077 | [#429](https://github.com/DigiNodes/truthbounty-api/issues/429) |
| V2-BE-079 | Add End-to-End Trace Correlation | Candidate | V2-BE-071, V2-BE-078 | [#430](https://github.com/DigiNodes/truthbounty-api/issues/430) |
| V2-BE-080 | Automate Backup Restore and Point-in-Time Recovery Drills | Candidate | V2-BE-041, V2-BE-056 | [#431](https://github.com/DigiNodes/truthbounty-api/issues/431) |
| V2-BE-081 | Harden the Production Container | Candidate | V2-BE-044, V2-BE-068 | [#432](https://github.com/DigiNodes/truthbounty-api/issues/432) |
| V2-BE-082 | Gate Dependency Vulnerabilities and License Policy | Candidate | V2-BE-044 | [#433](https://github.com/DigiNodes/truthbounty-api/issues/433) |
| V2-BE-083 | Publish an API SBOM and Build Provenance | Candidate | V2-BE-081, V2-BE-082 | [#434](https://github.com/DigiNodes/truthbounty-api/issues/434) |
| V2-BE-084 | Make OpenAPI the Tested Public Contract | Candidate | V2-BE-070 | [#435](https://github.com/DigiNodes/truthbounty-api/issues/435) |
| V2-BE-085 | Add Consumer Contract Tests for Frontend Integration | Candidate | V2-BE-084, V2-FE-044 | [#436](https://github.com/DigiNodes/truthbounty-api/issues/436) |
| V2-BE-086 | Establish Read-Path Load and Soak Budgets | Candidate | V2-BE-072, V2-BE-073 | [#437](https://github.com/DigiNodes/truthbounty-api/issues/437) |
| V2-BE-087 | Add Indexer and Dependency Chaos Tests | Candidate | V2-BE-052, V2-BE-074, V2-BE-080 | [#438](https://github.com/DigiNodes/truthbounty-api/issues/438) |
| V2-BE-088 | Parallelize CI Without Weakening Required Gates | Candidate | V2-BE-044 | [#439](https://github.com/DigiNodes/truthbounty-api/issues/439) |
| V2-BE-089 | Gate Releases on Forward and Backward Migration Safety | Candidate | V2-BE-046, V2-BE-080, V2-BE-083 | [#440](https://github.com/DigiNodes/truthbounty-api/issues/440) |
| V2-BE-090 | Execute the V2 API Release Readiness Review | Candidate | V2-BE-041, V2-BE-089 | [#441](https://github.com/DigiNodes/truthbounty-api/issues/441) |
| V2-FE-041 | Eliminate Simulated Appeal Transactions and Hashes | Candidate | V2-FE-002, V2-FE-008, V2-FE-010 | [#304](https://github.com/DigiNodes/truthbounty-frontend/issues/304) |
| V2-FE-042 | Enforce Frontend CI, Accessibility, and Production-Build Gates | Candidate | None | [#305](https://github.com/DigiNodes/truthbounty-frontend/issues/305) |
| V2-FE-043 | Bind Contract Artifacts, Addresses, and Chain Configuration to Provenance | Candidate | V2-FE-042, V2-SC-044 | [#306](https://github.com/DigiNodes/truthbounty-frontend/issues/306) |
| V2-FE-044 | Add End-to-End Canonical Claim Lifecycle Regression Suite | Candidate | V2-FE-041, V2-FE-043, V2-BE-043 | [#307](https://github.com/DigiNodes/truthbounty-frontend/issues/307) |
| V2-FE-045 | Make Wallet Reconnection Deterministic | Candidate | V2-FE-008 | [#308](https://github.com/DigiNodes/truthbounty-frontend/issues/308) |
| V2-FE-046 | Invalidate State on Account and Chain Changes | Candidate | V2-FE-008, V2-FE-045 | [#309](https://github.com/DigiNodes/truthbounty-frontend/issues/309) |
| V2-FE-047 | Implement Secure SIWE Session UX | Candidate | V2-FE-046, V2-BE-063 | [#310](https://github.com/DigiNodes/truthbounty-frontend/issues/310) |
| V2-FE-048 | Handle Session Rotation, Expiry, and Revocation | Candidate | V2-FE-047, V2-BE-064 | [#311](https://github.com/DigiNodes/truthbounty-frontend/issues/311) |
| V2-FE-049 | Implement Exact ERC-20 Approval State | Candidate | V2-FE-010, V2-FE-043 | [#312](https://github.com/DigiNodes/truthbounty-frontend/issues/312) |
| V2-FE-050 | Add Optional Permit Signing Flow | Candidate | V2-FE-049, V2-SC-081 | [#313](https://github.com/DigiNodes/truthbounty-frontend/issues/313) |
| V2-FE-051 | Create a Shared Transaction State Machine | Candidate | V2-FE-041 | [#314](https://github.com/DigiNodes/truthbounty-frontend/issues/314) |
| V2-FE-052 | Reconcile Replacement, Dropped, and Reorged Transactions | Candidate | V2-FE-051 | [#315](https://github.com/DigiNodes/truthbounty-frontend/issues/315) |
| V2-FE-053 | Harden Claim Submission Validation | Candidate | V2-FE-043, V2-FE-049 | [#316](https://github.com/DigiNodes/truthbounty-frontend/issues/316) |
| V2-FE-054 | Implement Content-Addressed Evidence Upload Integrity | Candidate | V2-FE-053 | [#317](https://github.com/DigiNodes/truthbounty-frontend/issues/317) |
| V2-FE-055 | Build Verification and Stake Submission Flow | Candidate | V2-FE-049, V2-FE-054 | [#318](https://github.com/DigiNodes/truthbounty-frontend/issues/318) |
| V2-FE-056 | Visualize Aggregation Without Inventing Finality | Candidate | V2-FE-055, V2-BE-057 | [#319](https://github.com/DigiNodes/truthbounty-frontend/issues/319) |
| V2-FE-057 | Implement Provisional and Final Settlement States | Candidate | V2-FE-056 | [#320](https://github.com/DigiNodes/truthbounty-frontend/issues/320) |
| V2-FE-058 | Build Dispute Opening and Challenge Bond Flow | Candidate | V2-FE-049, V2-FE-057 | [#321](https://github.com/DigiNodes/truthbounty-frontend/issues/321) |
| V2-FE-059 | Complete Appeal Participation and Round Progression | Candidate | V2-FE-041, V2-FE-058 | [#322](https://github.com/DigiNodes/truthbounty-frontend/issues/322) |
| V2-FE-060 | Implement Reward Entitlement and Claim Flow | Candidate | V2-FE-052, V2-BE-017 | [#323](https://github.com/DigiNodes/truthbounty-frontend/issues/323) |
| V2-FE-061 | Implement Stake and Treasury Withdrawal UX | Candidate | V2-FE-052, V2-FE-060 | [#324](https://github.com/DigiNodes/truthbounty-frontend/issues/324) |
| V2-FE-062 | Rollback Optimistic UI on Canonical Failure | Candidate | V2-FE-051, V2-FE-052 | [#325](https://github.com/DigiNodes/truthbounty-frontend/issues/325) |
| V2-FE-063 | Centralize Query Keys and Wallet Scope | Candidate | V2-FE-046 | [#326](https://github.com/DigiNodes/truthbounty-frontend/issues/326) |
| V2-FE-064 | Make Cache Invalidation Projection-Aware | Candidate | V2-FE-057, V2-FE-063 | [#327](https://github.com/DigiNodes/truthbounty-frontend/issues/327) |
| V2-FE-065 | Display API Freshness and Degraded-State Metadata | Candidate | V2-BE-057, V2-FE-064 | [#328](https://github.com/DigiNodes/truthbounty-frontend/issues/328) |
| V2-FE-066 | Implement Accessible Cursor Pagination | Candidate | V2-BE-058 | [#329](https://github.com/DigiNodes/truthbounty-frontend/issues/329) |
| V2-FE-067 | Persist Claim Filters in Validated URLs | Candidate | V2-FE-066 | [#330](https://github.com/DigiNodes/truthbounty-frontend/issues/330) |
| V2-FE-068 | Complete Keyboard Navigation Across Protocol Flows | Candidate | V2-FE-042 | [#331](https://github.com/DigiNodes/truthbounty-frontend/issues/331) |
| V2-FE-069 | Add Screen-Reader Transaction Announcements | Candidate | V2-FE-051, V2-FE-068 | [#332](https://github.com/DigiNodes/truthbounty-frontend/issues/332) |
| V2-FE-070 | Restore Focus After Async Errors and Route Changes | Candidate | V2-FE-068 | [#333](https://github.com/DigiNodes/truthbounty-frontend/issues/333) |
| V2-FE-071 | Respect Reduced Motion and Cognitive Accessibility | Candidate | V2-FE-042 | [#334](https://github.com/DigiNodes/truthbounty-frontend/issues/334) |
| V2-FE-072 | Harden Responsive Protocol Workflows | Candidate | V2-FE-042 | [#335](https://github.com/DigiNodes/truthbounty-frontend/issues/335) |
| V2-FE-073 | Add Route and Feature Error Boundaries | Candidate | V2-FE-065 | [#336](https://github.com/DigiNodes/truthbounty-frontend/issues/336) |
| V2-FE-074 | Implement Offline, RPC, and API Degradation UX | Candidate | V2-FE-065, V2-FE-073 | [#337](https://github.com/DigiNodes/truthbounty-frontend/issues/337) |
| V2-FE-075 | Prevent XSS and Unsafe External Evidence Links | Candidate | V2-FE-054 | [#338](https://github.com/DigiNodes/truthbounty-frontend/issues/338) |
| V2-FE-076 | Deploy a Strict Frontend Content Security Policy | Candidate | V2-FE-075 | [#339](https://github.com/DigiNodes/truthbounty-frontend/issues/339) |
| V2-FE-077 | Gate Frontend Dependency and Supply-Chain Risk | Candidate | V2-FE-042 | [#340](https://github.com/DigiNodes/truthbounty-frontend/issues/340) |
| V2-FE-078 | Enforce JavaScript and Route Bundle Budgets | Candidate | V2-FE-042 | [#341](https://github.com/DigiNodes/truthbounty-frontend/issues/341) |
| V2-FE-079 | Code-Split Wallet and Protocol-Heavy Features | Candidate | V2-FE-078 | [#342](https://github.com/DigiNodes/truthbounty-frontend/issues/342) |
| V2-FE-080 | Optimize Evidence Images and Media Safely | Candidate | V2-FE-075, V2-FE-078 | [#343](https://github.com/DigiNodes/truthbounty-frontend/issues/343) |
| V2-FE-081 | Make Artifact Drift a Required Frontend Failure | Candidate | V2-FE-043, V2-FE-042 | [#344](https://github.com/DigiNodes/truthbounty-frontend/issues/344) |
| V2-FE-082 | Validate Public and Server Environment Variables | Candidate | V2-FE-042, V2-FE-043 | [#345](https://github.com/DigiNodes/truthbounty-frontend/issues/345) |
| V2-FE-083 | Implement Typed, Fail-Closed Feature Flags | Candidate | V2-FE-082 | [#346](https://github.com/DigiNodes/truthbounty-frontend/issues/346) |
| V2-FE-084 | Add Privacy-Preserving Product Analytics | Candidate | V2-FE-083 | [#347](https://github.com/DigiNodes/truthbounty-frontend/issues/347) |
| V2-FE-085 | Internationalize Protocol and Error Copy | Candidate | V2-FE-069 | [#348](https://github.com/DigiNodes/truthbounty-frontend/issues/348) |
| V2-FE-086 | Normalize Block Time, Deadlines, and Timezones | Candidate | V2-FE-057 | [#349](https://github.com/DigiNodes/truthbounty-frontend/issues/349) |
| V2-FE-087 | Isolate Test Fixtures and Wallet Mocks from Production | Candidate | V2-FE-041, V2-FE-042 | [#350](https://github.com/DigiNodes/truthbounty-frontend/issues/350) |
| V2-FE-088 | Add Component Contract Tests for API and ABI Evolution | Candidate | V2-FE-043, V2-BE-085 | [#351](https://github.com/DigiNodes/truthbounty-frontend/issues/351) |
| V2-FE-089 | Run Adversarial End-to-End and Production Smoke Tests | Candidate | V2-FE-044, V2-FE-074, V2-FE-088 | [#352](https://github.com/DigiNodes/truthbounty-frontend/issues/352) |
| V2-FE-090 | Execute the V2 Frontend Release Readiness Review | Candidate | V2-FE-041, V2-FE-089 | [#353](https://github.com/DigiNodes/truthbounty-frontend/issues/353) |
| V2-SC-041 | Re-establish a Green Canonical V2 Main Baseline | Candidate | V2-SC-042, V2-SC-044 | [#423](https://github.com/DigiNodes/truthbounty-contract/issues/423) |
| V2-SC-042 | Wire Emergency Controls Fail-Closed Across V2 Modules | Candidate | V2-SC-041, V2-SC-005, V2-SC-028 | [#424](https://github.com/DigiNodes/truthbounty-contract/issues/424) |
| V2-SC-043 | Add Cross-Module Economic and Identifier Invariant Harness | Candidate | V2-SC-041, V2-SC-009, V2-SC-016, V2-SC-019, V2-SC-020, V2-SC-021, V2-SC-022 | [#425](https://github.com/DigiNodes/truthbounty-contract/issues/425) |
| V2-SC-044 | Enforce Reviewed-Head Contract Merge and Release Gates | Candidate | V2-SC-041 | [#426](https://github.com/DigiNodes/truthbounty-contract/issues/426) |
| V2-SC-045 | Validate Canonical V2 ABI and Interface Conformance | Candidate | V2-SC-041, V2-SC-005 | [#427](https://github.com/DigiNodes/truthbounty-contract/issues/427) |
| V2-SC-046 | Automate Upgradeable Storage Layout Compatibility | Candidate | V2-SC-041, V2-SC-029 | [#428](https://github.com/DigiNodes/truthbounty-contract/issues/428) |
| V2-SC-047 | Implement Governed Upgrade Rollback and Recovery Drill | Candidate | V2-SC-046, V2-SC-029 | [#429](https://github.com/DigiNodes/truthbounty-contract/issues/429) |
| V2-SC-048 | Prove Production Role Reachability and Separation of Duties | Candidate | V2-SC-041, V2-SC-026 | [#430](https://github.com/DigiNodes/truthbounty-contract/issues/430) |
| V2-SC-049 | Harden Timelock Queue, Cancellation, and Replay Semantics | Candidate | V2-SC-026, V2-SC-027 | [#431](https://github.com/DigiNodes/truthbounty-contract/issues/431) |
| V2-SC-050 | Add Treasury Solvency and Reserved-Balance Accounting | Candidate | V2-SC-021, V2-SC-022, V2-SC-043 | [#432](https://github.com/DigiNodes/truthbounty-contract/issues/432) |
| V2-SC-051 | Define and Test Supported ERC-20 Asset Behaviour | Candidate | V2-SC-009, V2-SC-043 | [#433](https://github.com/DigiNodes/truthbounty-contract/issues/433) |
| V2-SC-052 | Make Protocol Fee Accounting Deterministic | Candidate | V2-SC-019, V2-SC-021, V2-SC-050 | [#434](https://github.com/DigiNodes/truthbounty-contract/issues/434) |
| V2-SC-053 | Domain-Separate Claim and Cross-Module Identifiers | Candidate | V2-SC-006, V2-SC-043 | [#435](https://github.com/DigiNodes/truthbounty-contract/issues/435) |
| V2-SC-054 | Harden Evidence Commitment Integrity and Deduplication | Candidate | V2-SC-008, V2-SC-053 | [#436](https://github.com/DigiNodes/truthbounty-contract/issues/436) |
| V2-SC-055 | Prevent Verification Replay and Double Weight Consumption | Candidate | V2-SC-010, V2-SC-053 | [#437](https://github.com/DigiNodes/truthbounty-contract/issues/437) |
| V2-SC-056 | Specify Aggregation Tie, Quorum, and Rounding Semantics | Candidate | V2-SC-013, V2-SC-043 | [#438](https://github.com/DigiNodes/truthbounty-contract/issues/438) |
| V2-SC-057 | Make Provisional and Final Settlement Idempotent | Candidate | V2-SC-015, V2-SC-018, V2-SC-043 | [#439](https://github.com/DigiNodes/truthbounty-contract/issues/439) |
| V2-SC-058 | Validate Dispute Bond Economics and Custody Lifecycle | Candidate | V2-SC-016, V2-SC-043 | [#440](https://github.com/DigiNodes/truthbounty-contract/issues/440) |
| V2-SC-059 | Bound Appeal Rounds and Prevent Griefing | Candidate | V2-SC-018, V2-SC-058 | [#441](https://github.com/DigiNodes/truthbounty-contract/issues/441) |
| V2-SC-060 | Implement Deterministic Reward Remainder Allocation | Candidate | V2-SC-019, V2-SC-043 | [#442](https://github.com/DigiNodes/truthbounty-contract/issues/442) |
| V2-SC-061 | Cap Slashing and Protect Unrelated Stake Locks | Candidate | V2-SC-020, V2-SC-043 | [#443](https://github.com/DigiNodes/truthbounty-contract/issues/443) |
| V2-SC-062 | Harden Pull Withdrawal Replay and Failure Isolation | Candidate | V2-SC-022, V2-SC-043 | [#444](https://github.com/DigiNodes/truthbounty-contract/issues/444) |
| V2-SC-063 | Implement Reputation Root Lifecycle and Supersession Rules | Candidate | V2-SC-024, V2-SC-030 | [#445](https://github.com/DigiNodes/truthbounty-contract/issues/445) |
| V2-SC-064 | Domain-Separate Reputation Merkle Proofs | Candidate | V2-SC-024, V2-SC-025, V2-SC-063 | [#446](https://github.com/DigiNodes/truthbounty-contract/issues/446) |
| V2-SC-065 | Freeze Governance Voting Power at Canonical Snapshots | Candidate | V2-SC-027, V2-SC-063 | [#447](https://github.com/DigiNodes/truthbounty-contract/issues/447) |
| V2-SC-066 | Add Safe Governance Proposal Cancellation Semantics | Candidate | V2-SC-027, V2-SC-049 | [#448](https://github.com/DigiNodes/truthbounty-contract/issues/448) |
| V2-SC-067 | Create an Emergency Pause and Recovery Exercise Suite | Candidate | V2-SC-042, V2-SC-048 | [#449](https://github.com/DigiNodes/truthbounty-contract/issues/449) |
| V2-SC-068 | Validate Deployment Configuration Before Broadcasting | Candidate | V2-SC-031, V2-SC-044 | [#450](https://github.com/DigiNodes/truthbounty-contract/issues/450) |
| V2-SC-069 | Add Deterministic CREATE2 Address Planning | Candidate | V2-SC-031, V2-SC-068 | [#451](https://github.com/DigiNodes/truthbounty-contract/issues/451) |
| V2-SC-070 | Lock Implementations and Defend Proxy Initializers | Candidate | V2-SC-029, V2-SC-046 | [#452](https://github.com/DigiNodes/truthbounty-contract/issues/452) |
| V2-SC-071 | Version Protocol Events for Indexer Compatibility | Candidate | V2-SC-045, V2-BE-043 | [#453](https://github.com/DigiNodes/truthbounty-contract/issues/453) |
| V2-SC-072 | Establish Per-Operation Gas Budgets | Candidate | V2-SC-043 | [#454](https://github.com/DigiNodes/truthbounty-contract/issues/454) |
| V2-SC-073 | Standardize V2 Custom Errors and Revert Taxonomy | Candidate | V2-SC-045 | [#455](https://github.com/DigiNodes/truthbounty-contract/issues/455) |
| V2-SC-074 | Complete NatSpec and Security Assumptions | Candidate | V2-SC-045, V2-SC-073 | [#456](https://github.com/DigiNodes/truthbounty-contract/issues/456) |
| V2-SC-075 | Establish a Zero-New-Finding Static Analysis Baseline | Candidate | V2-SC-041, V2-SC-044 | [#457](https://github.com/DigiNodes/truthbounty-contract/issues/457) |
| V2-SC-076 | Build a Persistent Protocol Fuzz Corpus | Candidate | V2-SC-043, V2-SC-075 | [#458](https://github.com/DigiNodes/truthbounty-contract/issues/458) |
| V2-SC-077 | Publish Deterministic Invariant Seeds and Reproduction Commands | Candidate | V2-SC-043, V2-SC-076 | [#459](https://github.com/DigiNodes/truthbounty-contract/issues/459) |
| V2-SC-078 | Create a Differential Reference Model for Settlement Economics | Candidate | V2-SC-056, V2-SC-060, V2-SC-061 | [#460](https://github.com/DigiNodes/truthbounty-contract/issues/460) |
| V2-SC-079 | Run Optimism Fork Integration Tests | Candidate | V2-SC-068, V2-SC-071 | [#461](https://github.com/DigiNodes/truthbounty-contract/issues/461) |
| V2-SC-080 | Normalize Token Decimals and Amount Units | Candidate | V2-SC-051, V2-SC-078 | [#462](https://github.com/DigiNodes/truthbounty-contract/issues/462) |
| V2-SC-081 | Support Permit Safely Without Making It Mandatory | Candidate | V2-SC-051, V2-SC-087 | [#463](https://github.com/DigiNodes/truthbounty-contract/issues/463) |
| V2-SC-082 | Reject or Account for Fee-on-Transfer Assets Consistently | Candidate | V2-SC-051, V2-SC-043 | [#464](https://github.com/DigiNodes/truthbounty-contract/issues/464) |
| V2-SC-083 | Test Reentrancy Across Every External Asset Boundary | Candidate | V2-SC-043, V2-SC-051 | [#465](https://github.com/DigiNodes/truthbounty-contract/issues/465) |
| V2-SC-084 | Bound Loops and Storage Growth Against Denial of Service | Candidate | V2-SC-043, V2-SC-072 | [#466](https://github.com/DigiNodes/truthbounty-contract/issues/466) |
| V2-SC-085 | Document and Test Timestamp and Block Assumptions | Candidate | V2-SC-057, V2-SC-079 | [#467](https://github.com/DigiNodes/truthbounty-contract/issues/467) |
| V2-SC-086 | Add Cross-Chain Replay Domains to Signed Operations | Candidate | V2-SC-045, V2-SC-087 | [#468](https://github.com/DigiNodes/truthbounty-contract/issues/468) |
| V2-SC-087 | Implement Nonce Management for Protocol Signatures | Candidate | V2-SC-045 | [#469](https://github.com/DigiNodes/truthbounty-contract/issues/469) |
| V2-SC-088 | Generate Contract Release SBOM and Provenance Attestation | Candidate | V2-SC-044, V2-SC-075 | [#470](https://github.com/DigiNodes/truthbounty-contract/issues/470) |
| V2-SC-089 | Enforce Contract Coverage on Security-Critical Branches | Candidate | V2-SC-043, V2-SC-044 | [#471](https://github.com/DigiNodes/truthbounty-contract/issues/471) |
| V2-SC-090 | Execute the V2 Contract Release Candidate Security Audit | Candidate | V2-SC-042, V2-SC-089 | [#472](https://github.com/DigiNodes/truthbounty-contract/issues/472) |

## Dependency validation exceptions

None.

## Sequencing rule

A candidate may receive the external `Stellar Wave` label only after every declared dependency is closed as completed, the repository baseline is green, and a maintainer revalidates the issue against the current frozen protocol and code.
