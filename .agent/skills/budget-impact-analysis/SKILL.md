---
name: budget-impact-analysis
description: Estimates the token cost of bulk operations before execution. Acts as a financial gatekeeper. Use whenever a user requests batch generation or heavy processing.
---

# Budget Impact Analysis (Shift-Left)

Apply proactive financial governance before executing heavy workloads.

## The Approval Threshold
If a user request implies a bulk operation (e.g., "Generate quizzes for all 50 students", "Translate the whole course to 3 languages"):

### 1. Estimation Protocol
Calculate a rough estimate:
- `(Estimated Input Tokens + Estimated Output Tokens) * Number of Items`
- Use a standard rate (e.g., $5.00 / 1M tokens for Frontier, $0.15 for SLM).

### 2. The Gatekeeper
- If the estimated cost > **$1.00 USD** (or your defined threshold), **PAUSE**.
- Present the estimate to the user: *"This operation is estimated to cost approximately $X.XX and consume Y tokens. Proceed?"*

### 3. Optimization Suggestion
If the cost is high, suggest an optimization (e.g., "Should we use a smaller model for the first draft?" or "Should we test with 1 item first?").
