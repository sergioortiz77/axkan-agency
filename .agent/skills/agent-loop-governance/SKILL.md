---
name: agent-loop-governance
description: Controls the execution loops of autonomous agents to prevent cost runaways. Use for multi-step tasks like "Create a full course curriculum".
---

# Agent Loop Governance

Agents generate recursive costs. This protocol limits the "Think-Act-Observe" cycle.

## Max Step Policy
- **Hard Limit:** No autonomous task shall exceed **5 iterations** without requesting user confirmation.
- **Stop Condition:** If the agent detects it is repeating a search or getting the same error twice, it must **STOP** and ask for human guidance.

## Planning First (Measure Twice)
Before starting a multi-step generation (e.g., generating 10 course modules):
1.  Create a `plan.md` outlining the exact steps.
2.  Estimate the number of required prompts.
3.  Wait for user approval of the plan.

## Output Condensation
Between steps, **compress** the observation output. Do not feed the full HTML/Code of a generated module back into the context for the next module. Only feed the *summary* or *outline* of what was completed.