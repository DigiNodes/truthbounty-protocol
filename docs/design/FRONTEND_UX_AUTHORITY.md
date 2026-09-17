# Frontend UX Authority

The canonical frontend UX specification lives in `truthbounty-frontend/docs/ux`. Protocol terminology, lifecycle, authority and security requirements remain governed by this repository.

A frontend design or implementation is conformant only when it:

- uses the canonical lifecycle vocabulary;
- never presents projected or simulated data as on-chain finality;
- exposes transaction rejection, revert, replacement, drop and reorg states;
- meets WCAG 2.2 AA requirements;
- covers mobile, tablet, desktop, zoom and keyboard interaction;
- does not reintroduce Stellar/Freighter or production mocks.

Figma may be used for visual collaboration, but reviewed tokens, flows and behaviour must be versioned in GitHub before contributor implementation begins.
