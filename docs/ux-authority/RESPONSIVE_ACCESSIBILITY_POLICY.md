# Responsive and Accessibility Policy

**Status:** Approved baseline authority  
**Approved:** 2026-10-05  
**Target:** WCAG 2.2 AA

## Baseline

All golden journeys must be completable with keyboard and assistive technology at supported viewport sizes. Accessibility is acceptance criteria, not post-wave polish.

## Requirements

- Preserve logical DOM, heading, landmark and focus order across layouts.
- Provide accessible names, descriptions, errors and status announcements.
- Never convey protocol, transaction or authority status by color alone.
- Support 200% zoom and reflow without loss of action or information.
- Respect reduced motion and at least 44 by 44 CSS-pixel touch targets.
- Keep tables understandable on narrow screens through approved list/card patterns.
- Place focus predictably after navigation, validation failure, dialogs and async completion.
- Announce transaction changes without repeatedly overwhelming users.
- Keep the active action and recovery path reachable without horizontal scrolling.
- Test mobile, tablet, desktop, keyboard-only and screen-reader journeys.

## Evidence boundary

Contributors may produce the per-screen acceptance matrix and automated/manual test mapping. Exceptions or changes to these requirements require maintainer approval. Issue #435 remains the implementation/evidence task and does not redefine this policy.
