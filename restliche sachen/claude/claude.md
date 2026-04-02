# CLAUDE.md

## Purpose
This project is for building a polished, premium, brand-consistent website.
The result must feel intentionally designed, not generic, not template-like, and not obviously AI-generated.

You are helping build production-quality front-end work with strong visual hierarchy, premium spacing, clear messaging, and a consistent branded experience.

---

## Core Behavior Rules

- Always prioritize brand consistency over generic creativity.
- Always prefer clarity, hierarchy, spacing, and conversion over visual clutter.
- Never make the site feel like a random SaaS template.
- Never invent brand details if assets or guidelines already exist in the project.
- Always inspect available project files before making design decisions.
- Always use existing brand assets and brand guidelines if present.
- Always keep the design modern, clean, premium, and conversion-focused.
- Prefer subtle, refined motion over flashy or distracting animation.
- Avoid bloated layouts, weak contrast, cramped spacing, and inconsistent typography.
- Keep sections intentional. Every section must have a clear purpose.

---

## Mandatory Asset Review

Before writing or changing front-end code, first check whether the project contains any of these:

- /brand-assets
- /assets
- /logo
- brand-guidelines.md
- style-guide.md
- color references
- typography references
- screenshot references
- inspiration screenshots

If present:
- Read and apply them before making any design or copy decisions.
- Treat those files as the source of truth for branding.
- If multiple references conflict, prefer explicit written brand-guidelines over screenshots.

If no brand assets exist:
- Ask for them only if truly necessary.
- Otherwise proceed with a minimal, premium, neutral design direction.

---

## Design Standards

All front-end output must follow these standards:

### Visual Quality
- premium and modern
- intentional spacing
- strong section rhythm
- clear alignment
- balanced whitespace
- elegant typography
- subtle depth and layering
- clean grid structure
- polished CTA treatment
- high readability

### Avoid
- generic AI-looking layouts
- overcrowded sections
- weak contrast
- random gradients
- overuse of blur/glow
- too many accent colors
- inconsistent border radius
- tiny text
- over-animated components
- visual noise

### Preferred Feel
- premium
- confident
- modern
- branded
- conversion-focused
- slightly editorial
- slightly productized
- not sterile
- not childish
- not overly corporate

---

## Brand Application Rules

When brand assets are available:

- Use the provided logo correctly and consistently.
- Use the provided color palette faithfully.
- Use the provided typography or nearest supported equivalent.
- Match tone, target audience, and offer positioning to the brand.
- Reuse visual motifs consistently across the site.
- Make sure buttons, cards, badges, and section accents feel part of one system.

If brand guidelines define specific rules for:
- button style
- headline style
- icon style
- image treatment
- spacing
- dark/light theme

Then follow them consistently across all sections.

Do not introduce a new visual language that conflicts with the brand.

---

## Workflow Order

Always work in this order unless the user explicitly requests otherwise:

1. Understand project files and available assets
2. Establish page structure
3. Apply brand system
4. Build sections
5. Refine visual hierarchy
6. Improve responsiveness
7. Polish interactions and micro-details
8. Run validation/review
9. Wait for approval before push/deploy

---

## Website Inspiration Rules

External website references are inspiration only.

When the user provides a reference website, screenshot, or link:
- use it for inspiration on layout, spacing, rhythm, composition, or section ideas
- do not copy branding, copywriting, or assets
- do not create a direct clone unless the user explicitly asks
- always adapt the inspiration to this project's brand

If using inspiration:
- extract what is useful
- combine it with the brand system already defined in this project
- preserve originality

When comparing against a reference, focus on:
- hero composition
- spacing
- section pacing
- visual hierarchy
- card treatment
- trust elements
- CTA prominence

---

## Component Inspiration Rules

If using external component inspiration such as 21st.dev:

- use it for individual components only
- integrate components so they feel native to the existing design system
- do not mix too many unrelated component styles
- prefer 1 or 2 strong upgrades over many flashy additions

Good use cases:
- hero backgrounds
- CTA buttons
- navbars
- feature cards
- FAQ accordions
- trust badges
- section dividers
- subtle interaction details

Bad use cases:
- replacing the entire page style with disconnected components
- stacking multiple animated effects in one viewport
- forcing a component that harms readability or brand consistency

---

## Screenshot Review Loop

Use screenshot-based review only when it is likely to improve layout quality.

### Use screenshots for:
- spacing refinement
- hierarchy refinement
- alignment problems
- section density issues
- responsiveness checks
- CTA visibility
- visual balance
- mobile polish

### Avoid or limit screenshots for:
- animated backgrounds
- shader effects
- particle effects
- moving gradients
- dynamic canvases
- highly interactive states

If animation-heavy elements are involved:
- do not rely on screenshot loops to judge them
- review code and structure directly
- keep animation subtle and readable

### Screenshot Loop Limits
- Default maximum: 2 review passes
- Do not enter an open-ended screenshot loop
- After 2 passes, stop and summarize remaining issues clearly

### Temporary Files
- Put screenshots into a temporary folder
- Use clear naming if possible
- Clean old screenshots before a new major review cycle

---

## Front-End Output Rules

When writing front-end code:

- keep code organized and production-ready
- use reusable components where appropriate
- keep spacing scale consistent
- keep typography scale consistent
- maintain good accessibility
- ensure strong contrast and readable text
- optimize for desktop and mobile
- do not overcomplicate implementation without clear benefit

If a choice exists between:
- flashy but messy
- subtle but polished

Always choose subtle but polished.

---

## Copy and Messaging Rules

- Write clearly and directly.
- Avoid vague buzzwords unless the brand specifically wants them.
- Prefer concrete customer outcomes over abstract claims.
- Headlines should be strong, short, and easy to scan.
- Supporting text should explain value without sounding robotic.
- CTA text should be clear and action-oriented.

Avoid:
- bloated copy
- generic AI wording
- repetitive marketing filler
- exaggerated claims

---

## Local Development and Deployment Rules

This project follows a strict local-first workflow.

### Always default to:
- build locally
- test locally
- refine locally

### Never:
- push to GitHub
- create commits
- deploy to Vercel
- modify production settings

unless the user explicitly asks for it.

If a change is finished:
- show the local result
- summarize what changed
- wait for explicit approval before any push or deployment action

---

## GitHub and Vercel Safety Rules

Before any git or deployment action:
- confirm the user explicitly asked for it in this session
- keep changes local until approval
- do not push experimental work automatically

If the user says:
- "looks good"
- "approve"
- "push it"
- "deploy it"

then proceed carefully.

Otherwise, stay local.

---

## Review Mindset

After building or editing, review the result critically.

Check:
- Does this feel branded?
- Does this feel premium?
- Is the hierarchy obvious?
- Is the CTA clear?
- Is there too much empty space or too much clutter?
- Are sections visually connected?
- Does anything feel generic?
- Is the hero strong enough?
- Is mobile still clean?
- Are animations helping or distracting?

If something feels weak, refine it before considering the task complete.

---

## If the User Gives a Vague Prompt

If the user says something broad like:
- "make it better"
- "make it more premium"
- "make it more modern"

Then improve in this priority order:
1. hierarchy
2. spacing
3. typography
4. CTA emphasis
5. card/background polish
6. subtle interaction refinement
7. mobile layout polish

Do not radically redesign everything unless asked.

---

## Final Standard

The final result should feel like:
- a custom-designed premium website
- consistent with the brand
- conversion-aware
- visually polished
- clear and trustworthy

It must not feel like:
- a default AI landing page
- a random template
- a patchwork of unrelated inspirations
- an over-animated demo site