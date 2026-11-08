---
name: ui-ux-audit
description: Use when the user shares a screenshot or page from any project and wants a UI/UX review, critique or "what's wrong with this". Produces a prioritized fix list before any redesign.
---

# UI/UX Audit

Use this before a redesign, or when the user asks what is wrong with a screen, in any project.

## Steps
1. Look at the actual screenshot or page. If none can be found, say so and ask for it.
2. State in one line what the screen is for and who uses it.
3. Check it against these and note only real problems:
   - Hierarchy: is the one primary action obvious? Too many competing buttons or colors?
   - Consistency: do navigation, header, buttons, spacing and fonts match the project's other screens and its DESIGN.md, if there is one?
   - Clarity: truncated labels, unclear icons, jargon, empty areas that waste space.
   - Feedback: loading, empty, error, success and disabled states; confirmation for destructive actions.
   - Data screens: sorting, search, filters, bulk actions, pagination, discoverable row actions.
   - Forms: labels, validation, grouping, defaults, long forms without a save bar.
   - Accessibility: contrast, focus, tap targets, labels on icon buttons, color-only meaning.
   - Flow and logic: anything that lets users skip the product's intended path or leaves them at a dead end.
4. Rank findings High / Medium / Low, each with the evidence (what you see), why it matters, and the specific fix.
5. Limit to the top 5-8 findings. Do not pad.

## Output
- One-line verdict.
- A short ranked list: severity, problem, fix.
- Then offer to apply the fixes with the ui-ux-design-kit skill, reusing the project's design system.
