---
name: rag-context-optimization
description: Optimizes the retrieval of course materials for answering questions. Enforces strict context limits and semantic caching logic. Use for all Tutoring/Q&A tasks.
---

# RAG & Context Optimization

Maximize "Token Efficiency" by reducing noise in the retrieval process.

## Semantic Caching Step
Before generating a new answer:
1.  Check if this specific question has been asked before in the current session or knowledge base.
2.  If a semantically similar question exists (Similarity > 95%), reuse the previous answer.

## Context Injection Rules
When retrieving documents (e.g., course PDFs) to answer a student:

1.  **Re-Ranking:** Do not dump the top-10 chunks into the context. Select only the top-3 most relevant chunks after a re-ranking pass.
2.  **Quote Efficiency:** When referencing material, quote only the specific sentence or paragraph needed, not the whole page.
3.  **Inflation Control:** If the conversation history exceeds 10 turns, summarize the previous turns before appending new context.

## Forbidden Actions
- Do not paste full module transcripts into context unless explicitly asked for a "full rewrite".
