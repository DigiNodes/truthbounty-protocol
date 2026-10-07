# TruthBounty V2 high-fidelity authority prototype

This dependency-free prototype translates the approved UX authority into a responsive visual reference. It is not production application code. Every value shown is illustrative and must never be presented as protocol truth.

## Rendered implementation references

The approved screen-by-screen PNG authority is versioned under [`../screens/`](../screens/README.md). The interactive prototype and rendered pack must be reviewed together; the semantic authority documents take precedence if an inconsistency is discovered.

## Included views

- public product home and claim exploration;
- claimant dashboard, owned claims and canonical claim detail;
- complete claim-creation journey coverage from local draft through projection reconciliation;
- verifier queue and decision workspace;
- disputes and appeals;
- rewards and transaction-state history;
- bounded operations administration;
- separated governance-operator and emergency-guardian surfaces;
- privileged audit history;
- settings, identity, service status and documentation;
- desktop, tablet and mobile compositions;
- light and dark visual tokens.

Open `index.html` directly in a browser. Use the active-context selector to switch between claimant, verifier, operations administrator, governance operator and emergency guardian views. The prototype contains no API, wallet, contract, persistence or analytics integration.

## Authority

The prototype is governed by:

- `docs/ux-authority/SITEMAP_AND_ROUTE_CONTRACT.md`;
- `docs/ux-authority/ROLE_AND_CAPABILITY_MATRIX.md`;
- `docs/ux-authority/ADMIN_AUTHORITY_BOUNDARY.md`;
- `docs/ux-authority/GOLDEN_USER_JOURNEYS.md`;
- `docs/ux-authority/HIGH_FIDELITY_DESIGN_DIRECTION.md`;
- `docs/ux-authority/DESIGN_SYSTEM_AUTHORITY.md`;
- `docs/ux-authority/TRANSACTION_STATE_MODEL.md`;
- `docs/ux-authority/RESPONSIVE_ACCESSIBILITY_POLICY.md`.

## Safety boundaries

- Illustrative values never establish protocol truth.
- Privileged controls fail closed when the pinned release manifest or authority evidence is unavailable.
- Guardian scope is limited to approved pause capabilities; it never implies unpause, upgrade, treasury or settlement authority.
- Chain confirmation and API projection are presented as separate states.
- Contributor implementations may reproduce approved hierarchy and components, but may not infer runtime capability from the prototype.
