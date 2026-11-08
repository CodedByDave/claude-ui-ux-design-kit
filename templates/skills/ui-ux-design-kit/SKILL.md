---
name: ui-ux-design-kit
description: Use when designing, redesigning or building any screen, page, form, table or dashboard UI in any project. Enforces one design system per project, anti-generic-AI design rules, all states, and a render-and-check step.
---

# UI/UX Design Kit

Use this for any request like "redesign this", "make a dashboard", "create a table UI" or "design a form", in any project.

## 0. Context first (ask at most one question)
Confirm what is not already clear: which page or screen, what bothers the user about it (or what it must do), who uses it, and the target platform and stack. Detect the stack from the project files or the user's message instead of assuming one; if it is unknown and it matters, ask once. If the user mentions a screenshot or file that cannot be found, say so and ask for it instead of guessing which screen they mean.

## 1. One design system per project (never one per page)
- Look for an existing design system or DESIGN.md for this project (project files and earlier screens in the session).
- If none exists, create one before designing any screen and keep it as DESIGN.md in the project root:
  - Colors: 1 accent, a neutral ramp (5-7 steps), semantic success/warning/danger. Text contrast >= 4.5:1.
  - Type: 1 heading font + 1 body font, a scale (12/14/16/20/28/36), tabular numerals for money and counts.
  - Spacing: 4/8 px scale. Radius: 2 sizes. Shadows: at most 2, used sparingly.
  - App shell: navigation, header, page title and primary-button position are fixed and identical on every page.
  - Components: button (primary/secondary/ghost/danger), input, select, table, card, badge, modal, toast, empty state.
- Derive the visual direction from the product's domain and audience, and pick it deliberately; do not reuse another project's look.
- Every new screen reuses these tokens. Do not introduce a new palette, font or navigation for one page. If the user wants the system changed, change it once and say that all screens inherit it.

## 2. Screen rules
- One primary action per screen; secondary actions are outlined or ghost. Destructive actions are red and appear only when relevant (for example after selecting rows).
- Hierarchy comes from size, weight and spacing, not from extra boxes. No nested cards.
- Tables: sortable headers, search, status filter, row actions as icons, a bulk-action bar on selection, pagination, "Showing X of Y", column widths that do not cut off labels.
- Forms: labels above fields, required markers, inline validation, sensible grouping, a sticky save bar for long forms, a live preview when it helps.
- Always design these states: empty, loading, error, disabled, hover, focus-visible, success. Empty states say what to do next.
- Use realistic content for the project's real context (names, currency, units, dates, language of its users). Never lorem ipsum.
- Mobile screens: touch targets >= 44 px, thumb-reachable primary action, safe-area padding.
- Accessibility: visible focus, labels on inputs and icon buttons, do not rely on color alone.

## 3. Anti-generic-AI checklist (reject your own draft if it has these)
- Purple/indigo-to-blue gradients, glassmorphism, glow shadows everywhere.
- A grid of identical cards each with an icon tile, title and two lines of text.
- Emoji used as icons or in headings.
- Everything rounded 16px+ with soft shadows; boxes inside boxes inside boxes.
- Default Inter + indigo with no point of view.
- Decorative stats that carry no decision value.
Instead: choose a restrained, specific direction that fits the product, commit to one accent, and let typography and spacing do the work.

## 4. Build
- Match the project's existing stack and component library. If it has none, build clean semantic HTML/CSS.
- For a multi-screen project, keep every screen consistent with the shared shell and tokens.

## 5. Verify before reporting
Render or open the result and look at it (run the dev server and screenshot it if possible). Check: text not cut off, alignment, contrast, all states present, consistency with the project's other screens. If you could not render it, say so in one line. Fix what you find before replying.

## 6. Handoff
Give the user: (a) a 4-6 bullet summary of what changed and why, (b) the tokens in the project's own format (CSS variables, a Tailwind config, a theme file, etc.), (c) a mapping from the design's parts to the project's existing components, (d) what is not wired up yet. End with one concrete next step, not a menu.
