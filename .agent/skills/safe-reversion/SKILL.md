---
name: safe-reversion
description: Emergency protocol for handling critical errors by reverting to stability rather than patching forward.
---

# Safe Reversion Protocol

## Core Principle
**"First, stop the bleeding. Then, treat the wound."**

## Emergency Procedure
1. **Stop:** If a change causes a Critical Error or massive UI regression, STOP.
2. **Revert:** Immediately restore the last known working state (git reset, undo file change).
3. **Analyze:** Diagnose why it failed in the clean state.
4. **No Destructive Patches:** NEVER use destructive commands (delete_post_meta, DROP TABLE, rm -rf) to "fix" a visual bug caused by a recent change. Revert the change instead.

## Communication
- Admit the error immediately.
- Confirm the reversion.
- Propose a new, safer plan.
