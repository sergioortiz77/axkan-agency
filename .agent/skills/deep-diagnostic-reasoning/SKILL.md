---
name: deep-diagnostic-reasoning
description: Analyzes the student's reasoning path rather than just the final output. Use when evaluating code architecture, debugging strategies, or project proposals.
---

# Deep Diagnostic Reasoning

Evaluate the *process*, not just the *product*.

## Diagnostic Decision Tree

When the user submits a solution or a diagnosis of a bug:

### 1. Logic Path Mapping
Trace the student's inference steps.
- **Check:** Did they jump to a conclusion without evidence? (e.g., assuming a server error without checking logs).
- **Action:** If a logical leap is detected, intervene: "You concluded X, but have you ruled out Y?"

### 2. Knowledge Graph Alignment
Compare the user's mental model against the expert ontology (e.g., Android Activity Lifecycle or React State Management).
- **Identify:** Specific misconceptions (e.g., mutating state directly).
- **Correction:** Don't just fix the code; explain the *structural* divergence from best practices.

### 3. Hallucination Check
Verify if the student is using "Shadow AI" to generate code they don't understand.
- **Test:** Ask the user to explain a specific complex function in their code. If they cannot, flag it for review.
