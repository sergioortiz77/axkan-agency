---
name: integral-diagnosis
description: Protocol for diagnosing issues by analyzing the full stack (Frontend + Backend) before implementing fixes.
---

# Integral Diagnosis Protocol

## Core Principle
**"The Map (Backend) is not the Territory (Frontend)."**

## diagnosis Steps
1. **Frontend First:** Before saving data to a new field, check the Frontend Template (e.g., `single.php`, `page.php`) to see what fields are ACTUALLY validated and displayed.
2. **Data Flow Tracing:** Trace the path of data from Input -> Database -> Output.
3. **Ghost Field Check:** Do not create new Meta Fields (ACF) to solve a display issue. Fix the display logic or use existing fields.

## Action Triggers
- **User says "Images not showing":** Check the template loop FIRST. Do not assume the save function is broken.
- **User says "Fields are duplicated":** Check if you are saving to multiple keys that the template iterates over.
