# TruthBounty V2 Frontend Foundation

This package is the visual and interaction foundation between Brand Approval and page-specific screen design.

## Boards

1. `01-design-tokens.svg` — colour, spacing, sizing, radius, elevation and motion.
2. `02-application-shells.svg` — marketing, public application and authenticated application shells.
3. `03-navigation.svg` — desktop sidebar, topbar, mobile drawer and capability context.
4. `04-component-primitives.svg` — actions, forms, uploads, cards, tables, filters, tabs, badges and dialogs.
5. `05-wallet-network-identity.svg` — wallet, network, session, identity and fail-closed authority.
6. `06-transaction-states.svg` — all canonical transaction and projection states.
7. `07-system-states.svg` — loading, empty, stale, offline, unavailable, error, denied and not-found states.
8. `08-responsive-accessibility.svg` — desktop, tablet, mobile, zoom, keyboard and assistive-technology rules.

## Machine-readable handoff

- `tokens.css` provides reference CSS custom properties.
- `tokens.json` provides tool-neutral design tokens.

These are design-authority sources, not production frontend code. Page compositions must consume this foundation without inventing protocol behavior, capabilities, chain support or success states.
