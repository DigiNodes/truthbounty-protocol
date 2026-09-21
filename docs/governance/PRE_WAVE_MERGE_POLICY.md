# Pre-Wave Merge Policy

## Rule

Until maintainers formally announce the next Drips Stellar Wave:

- contributor implementation and recovery pull requests must not merge;
- reserved issues must not be assigned or labeled `Stellar Wave`;
- existing V2 issues remain open;
- maintainer-only governance, security policy, repository configuration, standardization, and product/design authority may merge after human review.

## Maintainer-only exception test

A pre-wave change is eligible only when all answers are yes:

1. Does it define or enforce authority rather than implement contributor product scope?
2. Would delegating it require a contributor to invent governance, permissions, product behavior, or security policy?
3. Does it avoid closing, replacing, or consuming an existing contributor issue?
4. Does it avoid production protocol mutation and dependency/application implementation?
5. Is the exact diff reviewed by a human maintainer?

If any answer is no, hold the PR until wave activation.

## Audit

Every permitted pre-wave merge must state `maintainer-governance-exception` in its PR description and link the relevant control-plane document. The merge-watch automation remains active until maintainers explicitly pause it.
