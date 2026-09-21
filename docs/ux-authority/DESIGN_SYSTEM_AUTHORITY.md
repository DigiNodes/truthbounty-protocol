# Design System Authority

## Purpose

Provide stable interaction and state semantics while visual design evolves.

## Foundations

- Use design tokens for color, typography, spacing, radius, elevation, motion, and breakpoints.
- Meet accessible contrast and preserve meaning without color alone.
- Respect reduced motion and zoom.
- Use responsive composition, not desktop-only shrinkage.
- Prefer a small set of composable primitives over feature-specific duplicates.

## Required primitives

- app shell and role-aware navigation;
- button, link, input, select, checkbox/radio, file/evidence input;
- dialog/drawer with focus management;
- table/list/card patterns with responsive alternatives;
- status badge and timeline;
- alert, toast, inline error, empty state, skeleton, and retry panel;
- wallet/account/chain control;
- transaction progress and receipt reference;
- confirmation pattern for sensitive admin actions.

## Semantic state vocabulary

Components use the canonical terms from [TRANSACTION_STATE_MODEL.md](./TRANSACTION_STATE_MODEL.md). Product states such as claim phase, verifier eligibility, dispute state, and settlement finality must come from canonical domain models, not presentation guesses.

## Contribution boundary

Contributors may inventory components, add approved stories/tests, and implement explicitly scoped primitives. They may not introduce new roles, permissions, protocol statuses, brand direction, or admin powers.
