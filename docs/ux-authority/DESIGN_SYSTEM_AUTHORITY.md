# Design System Authority

**Status:** Approved semantic authority  
**Approved:** 2026-10-05

## Purpose

Provide stable interaction and state semantics while visual design evolves.

## Foundations

- Use design tokens for color, typography, spacing, radius, elevation, motion and breakpoints.
- Meet accessible contrast and preserve meaning without color alone.
- Respect reduced motion and 200% zoom/reflow.
- Use responsive composition, not desktop-only shrinkage.
- Prefer a small set of composable primitives over feature-specific duplicates.
- Expose data source, freshness and finality where material.

## Required primitives

- app shell and active-context navigation;
- button, link, input, select, checkbox/radio and evidence input;
- dialog/drawer with focus management;
- table/list/card patterns with responsive alternatives;
- status badge and protocol timeline;
- alert, toast, inline error, empty state, skeleton and retry panel;
- wallet/account/chain/release control;
- transaction progress and receipt reference;
- confirmation pattern for sensitive operations;
- denied, stale, offline, projection-lag, unavailable and reorg boundaries.

## Semantic state vocabulary

Components use the canonical terms from [TRANSACTION_STATE_MODEL.md](./TRANSACTION_STATE_MODEL.md). Claim phase, verifier eligibility, dispute state, settlement finality and authority come from canonical domain models and the pinned release manifest, never presentation guesses.

## Contribution boundary

Contributors may inventory components, add approved stories/tests and implement explicitly scoped primitives. They may not introduce roles, permissions, protocol statuses, brand direction or administrative powers.
