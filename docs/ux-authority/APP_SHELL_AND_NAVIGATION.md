# Application Shell and Navigation Authority

## Current implementation finding

The existing shell already provides `MainLayout`, `Sidebar`, `Topbar`, light/dark tokens, skip links, wallet controls, and pending-transaction visibility. The redesign should evolve these boundaries rather than introduce a second shell.

Current gaps include button-based navigation without canonical routes, duplicate claim modals in Sidebar and Topbar, placeholder settings/profile actions, and mixed hard-coded/token colors.

## Approved shell

### Desktop

- Persistent 256 px sidebar.
- 64 px topbar.
- Scrollable main content with a 1440 px maximum content width.
- Global pending-transaction center reachable from every authenticated route.
- Active role context shown near the account control when a wallet has multiple capabilities.

### Mobile

- Top app bar with menu, product identity, transaction indicator, and wallet/account control.
- Navigation opens as a focus-trapped drawer and restores focus to the menu button on close.
- Primary journey actions remain reachable without horizontal scrolling.
- Large tables switch to approved summary cards or controlled horizontal regions.

## Navigation model

| Group | Items |
|---|---|
| Public | Explore claims, How it works, Documentation |
| Personal | Overview, My claims, Rewards, Settings |
| Claimant action | Create claim |
| Verifier | Verification queue, My verifications |
| Admin | Admin overview, Operations queues, Audit log |
| External | GitHub, community, report issue |

Items appear only when useful, but authorization remains enforced by contract/API authority.

## Required behavior

1. Every navigation item is a real link except disclosure controls.
2. Topbar and Sidebar use the same route for claim creation.
3. Current route and active role are programmatically exposed.
4. Account/chain changes invalidate stale protected context.
5. The chain control lists only supported Optimism/EVM networks; `All Chains` is not valid for mutation flows.
6. Pending transactions survive refresh and link to their originating journey.
7. Admin navigation is absent for unauthorized users and direct access returns an explicit denied state.
