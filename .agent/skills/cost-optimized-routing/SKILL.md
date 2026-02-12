---
name: cost-optimized-routing
description: Determines the most cost-effective AI model for a given task based on complexity. Use before generating content or answering student queries to select the right engine.
---

# Semantic Model Routing Protocol

This skill enforces a "Waterfall" model selection strategy to optimize token costs without sacrificing quality.

## Complexity Assessment Tree

Analyze the user's request and classify it into one of three tiers:

### Tier 1: Trivial & Administrative (Use Small Language Models - SLM)
**Criteria:** 
- Greetings, simple factual queries, formatting text, or summarizing short interactions.
- Examples: "Welcome the student", "Format this list as JSON".
**Action:** Route to lightweight models (e.g., GPT-4o-mini, Haiku, or local SLMs). **Do not use Frontier models.**

### Tier 2: Moderate & Content Generation (Use Mid-Range Models)
**Criteria:** 
- Drafting course sections, summarizing long lectures, or standard Q&A based on provided context.
**Action:** Use standard efficient models. Ensure the prompt is concise.

### Tier 3: Complex Reasoning (Use Frontier Models)
**Criteria:** 
- Complex logic, coding assignments, legal/ethical analysis, or creating the pedagogical structure of a masterclass.
**Action:** Use Frontier models (e.g., GPT-4o, Claude 3.5 Sonnet, Gemini 3 Pro). 

## Implementation Rule
If the user does not specify a model, default to **Tier 1** or **Tier 2** unless the complexity explicitly demands Tier 3. Justify the upgrade to Tier 3 if necessary.
