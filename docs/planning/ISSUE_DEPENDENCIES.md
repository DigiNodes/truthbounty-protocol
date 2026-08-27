# TruthBounty V2 Issue Dependencies

**Version:** 1.0.0-proposed  
**Date:** 2026-08-27  
**Scope:** `V2-EPIC-SC-001`

## Purpose

This document defines the dependency graph and safe execution waves for the first clean-slate contract epic. Dependencies are architectural blockers, not merely suggested ordering.

## Dependency Principles

- An issue cannot reach `wave-ready` while a listed dependency is unresolved.
- Interface changes require dependent candidates to be re-reviewed.
- Parallel work is allowed only when issues do not rely on provisional, conflicting interfaces.
- Dependency completion requires merged code, tests, artifacts, and acceptance evidence.
- Historical issues never satisfy a V2 dependency.
- Automation may report dependency state but may not publish or assign work.

## Per-Issue Dependencies

| Issue | Blocked by | Family |
|---|---|---|
| `V2-SC-001` | Governance baseline | architecture |
| `V2-SC-002` | `V2-SC-001` | architecture |
| `V2-SC-003` | `V2-SC-001`, `V2-SC-002` | architecture |
| `V2-SC-004` | `V2-SC-001`, `V2-SC-002` | configuration |
| `V2-SC-005` | `V2-SC-001`, `V2-SC-004` | architecture |
| `V2-SC-006` | `V2-SC-001`, `V2-SC-002`, `V2-SC-004`, `V2-SC-005` | claims |
| `V2-SC-007` | `V2-SC-006` | claims |
| `V2-SC-008` | `V2-SC-003`, `V2-SC-006`, `V2-SC-007` | evidence |
| `V2-SC-009` | `V2-SC-001`, `V2-SC-002`, `V2-SC-004`, `V2-SC-005` | staking |
| `V2-SC-010` | `V2-SC-006`, `V2-SC-007`, `V2-SC-009` | verification |
| `V2-SC-011` | `V2-SC-004`, `V2-SC-007`, `V2-SC-010` | verification |
| `V2-SC-012` | `V2-SC-009`, `V2-SC-010`, `V2-SC-011` | staking |
| `V2-SC-013` | `V2-SC-002`, `V2-SC-003`, `V2-SC-010`, `V2-SC-011` | aggregation |
| `V2-SC-014` | `V2-SC-004`, `V2-SC-013` | aggregation |
| `V2-SC-015` | `V2-SC-006`, `V2-SC-007`, `V2-SC-013`, `V2-SC-014` | settlement |
| `V2-SC-016` | `V2-SC-004`, `V2-SC-009`, `V2-SC-015` | disputes |
| `V2-SC-017` | `V2-SC-010`, `V2-SC-011`, `V2-SC-016` | disputes |
| `V2-SC-018` | `V2-SC-013`, `V2-SC-014`, `V2-SC-016`, `V2-SC-017` | disputes |
| `V2-SC-019` | `V2-SC-004`, `V2-SC-009`, `V2-SC-015`, `V2-SC-018` | rewards |
| `V2-SC-020` | `V2-SC-004`, `V2-SC-009`, `V2-SC-015`, `V2-SC-018` | slashing |
| `V2-SC-021` | `V2-SC-004`, `V2-SC-005`, `V2-SC-020` | treasury |
| `V2-SC-022` | `V2-SC-009`, `V2-SC-012`, `V2-SC-019`, `V2-SC-020`, `V2-SC-021` | rewards |
| `V2-SC-023` | `V2-SC-019`, `V2-SC-020`, `V2-SC-021`, `V2-SC-022` | accounting |
| `V2-SC-024` | `V2-SC-002`, `V2-SC-003`, `V2-SC-004`, `V2-SC-005` | reputation |
| `V2-SC-025` | `V2-SC-010`, `V2-SC-011`, `V2-SC-024` | reputation |
| `V2-SC-026` | `V2-SC-004`, `V2-SC-005` | governance |
| `V2-SC-027` | `V2-SC-026` | governance |
| `V2-SC-028` | `V2-SC-005`, `V2-SC-026` | security |
| `V2-SC-029` | `V2-SC-005`, `V2-SC-026`, `V2-SC-027` | governance |
| `V2-SC-030` | `V2-SC-004`, `V2-SC-026`, `V2-SC-027`, `V2-SC-029` | governance |
| `V2-SC-031` | `V2-SC-005`, `V2-SC-006`, `V2-SC-008`, `V2-SC-009`, `V2-SC-010`, `V2-SC-013`, `V2-SC-015`, `V2-SC-016`, `V2-SC-018`, `V2-SC-019`, `V2-SC-020`, `V2-SC-021`, `V2-SC-022`, `V2-SC-024`, `V2-SC-025`, `V2-SC-026`, `V2-SC-027`, `V2-SC-028`, `V2-SC-029`, `V2-SC-030` | deployment |
| `V2-SC-032` | `V2-SC-031` | deployment |
| `V2-SC-033` | `V2-SC-003`, `V2-SC-031`, `V2-SC-032` | deployment |
| `V2-SC-034` | `V2-SC-031`, `V2-SC-032`, `V2-SC-033` | deployment |
| `V2-SC-035` | `V2-SC-031`, `V2-SC-032`, `V2-SC-033` | testing |
| `V2-SC-036` | `V2-SC-035` | testing |
| `V2-SC-037` | `V2-SC-035`, `V2-SC-036` | testing |
| `V2-SC-038` | `V2-SC-035`, `V2-SC-036` | performance |
| `V2-SC-039` | `V2-SC-029`, `V2-SC-031`, `V2-SC-035` | security |
| `V2-SC-040` | `V2-SC-034`, `V2-SC-035`, `V2-SC-036`, `V2-SC-037`, `V2-SC-038`, `V2-SC-039` | security |

## Safe Execution Waves

| Wave | Candidate issues | Outcome |
|---|---|---|
| A | `V2-SC-001` | Canonical interfaces |
| B | `V2-SC-002`, `V2-SC-003`, `V2-SC-004` | Shared vocabulary, events, and parameters |
| C | `V2-SC-005`, `V2-SC-006`, `V2-SC-009`, `V2-SC-024`, `V2-SC-026` | Registry, claim foundation, custody, reputation root, roles |
| D | `V2-SC-007`, `V2-SC-008`, `V2-SC-010`, `V2-SC-021`, `V2-SC-027`, `V2-SC-028` | Lifecycle/evidence, verification, treasury, governance, pause |
| E | `V2-SC-011`, `V2-SC-012`, `V2-SC-025`, `V2-SC-029` | Rounds, stake hooks, proof adapter, upgrades |
| F | `V2-SC-013`, `V2-SC-030` | Aggregation and governed parameter activation |
| G | `V2-SC-014` | Thresholds and confidence |
| H | `V2-SC-015` | Provisional settlement |
| I | `V2-SC-016`, `V2-SC-019`, `V2-SC-020` | Challenge custody and accounting engines |
| J | `V2-SC-017`, `V2-SC-021` | Appeal round and treasury completion |
| K | `V2-SC-018`, `V2-SC-022` | Appeal finalization and withdrawals |
| L | `V2-SC-023` | Protocol-wide accounting reconciliation |
| M | `V2-SC-031` | Canonical deployment composition |
| N | `V2-SC-032`, `V2-SC-033` | Deployment verification and release artifacts |
| O | `V2-SC-034`, `V2-SC-035` | Test deployment workflow and local lifecycle fixture |
| P | `V2-SC-036` | Cross-module integration |
| Q | `V2-SC-037`, `V2-SC-038`, `V2-SC-039` | Invariant/fuzz, DoS/gas, storage/upgrade validation |
| R | `V2-SC-040` | Release-readiness audit |

A later wave may begin only when every dependency used by its candidates is accepted and merged. Issues within one wave may still require coordination when they touch shared files.

## Critical Path

```text
V2-SC-001
→ V2-SC-002 / 003 / 004
→ V2-SC-005 / 006 / 009 / 010 / 011
→ V2-SC-013
→ V2-SC-014
→ V2-SC-015
→ V2-SC-016 / 017 / 018
→ V2-SC-019 / 020 / 021 / 022 / 023
→ V2-SC-031
→ V2-SC-032 / 033
→ V2-SC-035 / 036
→ V2-SC-037 / 038 / 039
→ V2-SC-040
```

Governance, reputation, and emergency-control branches converge before canonical deployment:

```text
V2-SC-024 → V2-SC-025 ┐
V2-SC-026 → 027 → 029 → 030 ├→ V2-SC-031
V2-SC-026 → 028 ┘
```

## Cross-Repository Unlocks

| Contract output | Unlocks |
|---|---|
| V2-SC-003 event schema | API ingestion and projection epic drafting |
| V2-SC-033 release artifacts | API and frontend consumer epic drafting |
| V2-SC-034 test deployment | Shared integration environment |
| V2-SC-040 readiness audit | Controlled downstream integration and security review |

## Change Control

When a dependency changes:

1. mark affected candidates `wave-blocked`;
2. identify interface, event, storage, security, and test impact;
3. update issue source files and this graph;
4. obtain maintainer re-review;
5. return candidates to `wave-reviewed` or `wave-ready` only after evidence is current.

The `Stellar Wave` label is never added by dependency automation.
