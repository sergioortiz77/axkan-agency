---
name: efficient-data-processing
description: Handles large datasets (student logs, grades, course CSVs) using code execution instead of context ingestion. Use whenever data analysis or manipulation is requested.
---

# Efficient Data Processing (Code Mode)

This skill prohibits the "Anti-Pattern" of loading raw data into the context window.

## Protocol for Large Files

### 1. The Ban
**NEVER** read entire CSV, JSON, or text files larger than 50 lines directly into the conversation context to "analyze" them. This wastes tokens and money.

### 2. The Solution (Code Sandbox)
Instead of reading the data:
1.  Write a Python script to load the file using libraries like `pandas` or built-in file handlers.
2.  Execute the script to perform the calculation (e.g., "Calculate average grade", "Filter students by progress").
3.  Return **only** the final result or a summary to the conversation.

## Decision Tree
- **Task:** "Analyze this 10MB log file."
- **Wrong Approach:** Open file -> Read text -> Ask LLM to analyze. (Cost: High)
- **Correct Approach:** Write Python script -> Parse Log -> Print Stats. (Cost: ~98% lower).

## Tools
Use the available code execution environment or MCP servers to run these scripts.