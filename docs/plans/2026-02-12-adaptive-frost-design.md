# Design Document: Adaptive Frost Strategy for Mobile Optimization

## 1. Overview
This document outlines the design and implementation strategy for "Adaptive Frost," a performance optimization technique for the Axkan Agency website. The goal is to reduce the computational load on mobile devices caused by heavy "Glassmorphism" effects (`backdrop-filter: blur()`) while maintaining the premium visual aesthetic on desktop.

## 2. Problem Statement
Glassmorphism relies on the CSS property `backdrop-filter: blur()`, which is computationally expensive. On mobile devices, this can lead to:
- Reduced frame rates (FPS) during scrolling.
- Increased battery consumption.
- Visual artifacts on some older mobile browsers.
- Legibility issues in high-ambient-light environments.

## 3. Solution: "Adaptive Frost"
We will implement a responsive design strategy where the visual "glass" effect adapts to the device capabilities:

### 3.1. Desktop (Unchanged)
- **Visual:** Full Glassmorphism.
- **CSS:** `bg-white/5`, `backdrop-blur-xl` (or `md`).
- **Effect:** Premium, deep, layered look.

### 3.2. Mobile (Optimized)
- **Visual:** "Deep Space" / Solid Frost.
- **CSS:** High-opacity solid colors (e.g., `bg-[#0f172a]/95`) with **no** or **minimal** blur.
- **Effect:** Clean, legible, high-performance, battery-friendly.

## 4. Implementation Details

### 4.1. Component Updates

#### `GlassLayout.tsx`
- **Sidebar (Mobile Drawer):**
  - Current: `backdrop-blur-xl bg-white/5`
  - New: `bg-[#0f0f1f] lg:bg-white/5 lg:backdrop-blur-xl`
  - Rationale: The drawer covers content; a solid background prevents distraction and renders instantly.

#### `GlassCard.tsx`
- **Card Background:**
  - Current: `backdrop-blur-md bg-white/5`
  - New: `bg-[#1a1a2e]/90 md:bg-white/5 md:backdrop-blur-md`
  - Rationale: Cards are the main content containers. Solid backgrounds on mobile improve text readability.

#### `GlassSearch.tsx`
- **Search Bar:**
  - Current: `bg-black/40 backdrop-blur-xl`
  - New: `bg-[#0a0a1a] md:bg-black/40 md:backdrop-blur-xl`
  - Rationale: The sticky search bar needs to be legible and not cause lag during scroll.

### 4.2. Token Reference
| Element | Mobile Color | Desktop Color | Mobile Blur | Desktop Blur |
| :--- | :--- | :--- | :--- | :--- |
| **Drawer/Sidebar** | `#0f0f1f` (100%) | `white/5` | None | `xl` |
| **Cards** | `#1a1a2e` (90%) | `white/5` | None | `md` |
| **Search Bar** | `#0a0a1a` (100%) | `black/40` | None | `xl` |

## 5. Verification Plan
1. **Mobile Review:** Check scrolling smoothness and text legibility on mobile viewport.
2. **Desktop Review:** Ensure the original premium look is **preserved** exactly as it was.
