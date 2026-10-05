# Transaction and Projection State Model

**Status:** Approved canonical UI state authority  
**Approved:** 2026-10-05

## Canonical states

| State | Meaning | UI obligation |
|---|---|---|
| idle | No action started | Show prerequisites and primary action. |
| validating | Local/canonical prerequisites checked | Prevent duplicate submission; show what is checked. |
| awaiting-signature | Wallet request is open | Explain the request; allow safe cancellation. |
| rejected | User/provider rejected authorization | No success state; preserve recoverable input. |
| submitted | Transaction hash accepted by provider | Show hash and pending status; do not claim protocol success. |
| replaced | Original transaction was replaced or cancelled | Track canonical replacement or explain cancellation. |
| reverted | Execution failed | Show recoverable, redacted error without inventing outcome. |
| confirmed | Receipt observed at configured confirmation level | Distinguish from final settlement/finality. |
| finalized | Canonical finality threshold reached | Permit final-success language appropriate to the domain. |
| projection-lag | Chain evidence exists but API/indexer is behind | Preserve chain truth and explain delayed synchronization. |
| reorged | Previously observed chain state is no longer canonical | Withdraw prior certainty, reconcile and alert the user. |
| unavailable | Required provider/API/config/release is unavailable | Fail closed and provide retry/status guidance. |

## Rules

1. Button completion is never transaction completion.
2. A transaction hash is not confirmation.
3. Confirmation is not necessarily protocol finality or settlement.
4. API projection may enrich chain state but cannot override canonical mutation outcomes.
5. Refresh, reconnect, account change, chain change and release change reconcile persisted pending operations.
6. Errors are safe, actionable, redacted and observable.
7. Components and documentation use these terms consistently unless the canonical protocol defines a more specific state.
8. Every production mutation validates the pinned chain, address, ABI/artifact version, account, capability, allowance where applicable, simulation and receipt.
9. Synthetic hashes, timer-based success and mock finality are prohibited.
