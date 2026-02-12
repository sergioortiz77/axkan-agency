---
name: preservation-protocol
description: Rules for modifying existing code to ensure preservation of functionality and respect for legacy logic.
---

# Preservation Protocol

## Core Principle
**"If it works, respect it. If you don't understand it, don't touch it."**

## Checklist before Modification
1. **Identify Existing Logic:** Before rewriting a class or function, list ALL its current responsibilities.
2. **Verify Dependencies:** Check if other parts of the system (templates, hooks, other classes) rely on the current implementation.
3. **Incremental Change:** Apply changes via injection (hooks, specific methods) rather than full file replacement whenever possible.
4. **Legacy Respect:** Assume the previous developer had a reason for their structure. Do not "clean up" unless explicitly asked.

## Forbidden Actions
- Overwriting a file without reading it first.
- Removing code blocks because they "look unused" without verification.
