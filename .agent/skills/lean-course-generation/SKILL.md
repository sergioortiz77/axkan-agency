---
name: lean-course-generation
description: Enforces a modular approach to course content generation. Prevents context saturation and ensures unit economic viability.
---

# Lean Course Generation Protocol

Generate content in isolated modules to maintain linear cost scaling rather than exponential context inflation.

## The Modular Workflow

### 1. Skeleton First
Generate the *Course Outline* (Syllabus) first and save it to a file (`syllabus.md`).

### 2. Isolated Contexts
When generating "Module 1":
- **Load:** Only the `syllabus.md` and the specific learning objectives for Module 1.
- **Do NOT Load:** Context from other modules.
- **Generate:** The content for Module 1.
- **Save:** Immediately save to `module_1.md` and **clear the context window** (or instruct the user to start a fresh chat/thread) before starting Module 2.

## Quality vs. Cost Trade-off
- For "Draft" versions, explicitly select a Tier 2 Model (from the Routing skill).
- Only use Tier 3 Models for the "Final Polish" or complex quizzes.