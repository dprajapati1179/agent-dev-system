# UI Guidelines — Gamma Studio Style

This project follows the **Gamma Studio** design language — a compact, premium, glassmorphic UI system built on TailwindCSS v4.

---

## Design Philosophy

- **Compact & Dense** — 50% spacing reduction from standard Tailwind
- **Glassmorphism** — Semi-transparent backgrounds with `backdrop-blur`
- **Gradient CTAs** — Primary actions use blue→indigo→purple gradients
- **Micro-animations** — Shimmer, scale, stagger, and fade-in effects
- **Dark mode first** — Every element must support `dark:` variants
- **Information density** — More content in less space, minimal white spacing

---

## Core Tokens

### Spacing (Minimal White Space)

Use `p-2` as default card padding. Use `gap-2` for grids. Minimize whitespace aggressively.

```
p-2          → Default card padding
p-1.5        → Tight/narrow cards only
mb-1 to mb-2 → Section margins
space-y-1    → Tight vertical gaps
gap-2        → Standard grid gap
```

### Typography Scale

```
text-2xl     → Hero titles
text-xl      → Page titles
text-lg      → Section titles
text-base    → Card titles
text-sm      → Body text primary
text-xs      → Body text secondary
text-[10px]  → Labels
text-[9px]   → Tiny labels, badge text
```

### Font Weights

- `font-bold` — Headings, titles
- `font-semibold` — Subheadings
- `font-medium` — Body text
- Labels use `uppercase tracking-[0.1em] text-[9px] font-bold`

---

## Color System

### Primary Gradient (CTA)

```
bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700
hover:from-blue-700 hover:to-purple-800
```

### Solid Primaries

```
bg-blue-600 hover:bg-blue-700       → Primary actions
bg-indigo-600 hover:bg-indigo-700   → Secondary
text-blue-600 dark:text-blue-400    → Links, accent text
```

### Status Colors

```
Success: bg-emerald-600, text-emerald-600 dark:text-emerald-400
Warning: bg-amber-600, text-amber-700 dark:text-amber-300
Error:   bg-red-600, text-red-600 dark:text-red-400
Info:    bg-cyan-600, text-cyan-700 dark:text-cyan-400
Neutral: bg-slate-600, text-slate-500 dark:text-slate-400
```

### Backgrounds (Glassmorphism)

```
bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm     → Standard card
bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm     → Light card
bg-gray-50/80 dark:bg-slate-800/80                    → Alternate card
bg-gray-50 dark:bg-slate-900                          → Page background
```

### Dark Mode Text

```
text-gray-900 dark:text-slate-100   → Primary text
text-gray-700 dark:text-slate-300   → Secondary text
text-gray-500 dark:text-slate-400   → Muted text
```

---

## Card Patterns

### Standard Card

```tsx
<Card className="
  rounded-xl
  border border-gray-200 dark:border-slate-700
  bg-white/80 dark:bg-slate-800/80
  backdrop-blur-sm
  shadow-sm
  p-2
  hover:shadow-md hover:shadow-blue-500/10
  hover:border-blue-300 dark:hover:border-blue-500
  transition-all duration-200
">
```

### Elevated Card (Hover Lift)

```tsx
<Card className="
  rounded-xl
  border-2 border-gray-200 dark:border-slate-700
  bg-white/80 dark:bg-slate-800/80
  backdrop-blur-xl
  shadow-lg
  hover:shadow-xl hover:shadow-blue-500/20
  hover:-translate-y-0.5
  hover:border-blue-300 dark:hover:border-blue-500
  transition-all duration-300
">
```

### Gradient Card

```tsx
<Card className="
  rounded-xl
  bg-gradient-to-br from-blue-50 to-indigo-50
  dark:from-blue-950/50 dark:to-indigo-950/50
  border border-blue-100/50 dark:border-blue-900/50
  shadow-lg shadow-blue-400/20
  p-2
">
```

### Card with Shimmer (on Hover)

```tsx
<Card className="relative overflow-hidden group">
  <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent animate-shimmer" />
  </div>
  <div className="relative z-10">{/* Content */}</div>
</Card>
```

---

## Button Patterns

### Primary CTA (Gradient)

```tsx
className =
  'h-9 px-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold uppercase tracking-[0.1em] text-[9px] rounded-lg shadow-sm hover:shadow-md transition-all duration-300';
```

### Outline Button

```tsx
className =
  'h-9 px-4 border border-gray-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-300 dark:hover:border-blue-500 text-xs font-bold rounded-lg transition-all duration-200';
```

### Ghost Button

```tsx
className =
  'h-8 w-8 p-0 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all';
```

### Danger Button

```tsx
className =
  'h-9 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-sm transition-all duration-200';
```

---

## Badge Patterns

### Standard Badge

```tsx
className =
  'px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200/50 dark:border-blue-700/50 text-xs font-medium rounded-full';
```

### Gradient Badge

```tsx
className =
  'px-2.5 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[9px] font-bold uppercase tracking-[0.15em] rounded-full shadow-sm';
```

### Status Badges

```
Success: bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400
Warning: bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400
Error:   bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400
```

---

## Input Patterns

### Text Input

```tsx
className =
  'h-9 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200 dark:border-slate-700 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-blue-400/20 shadow-sm rounded-lg text-xs font-bold placeholder:text-muted-foreground/30 transition-all duration-200';
```

### Select Input

```tsx
className =
  'w-full h-9 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200 dark:border-slate-700 focus:border-blue-400 shadow-sm rounded-lg text-xs font-bold transition-all duration-200';
```

---

## Tab Patterns

### Standard Tabs

```tsx
TabsList: 'inline-flex w-full items-center justify-start h-10 p-1 bg-gray-100/50 dark:bg-slate-800/60 rounded-xl border border-gray-200 dark:border-slate-700';
TabsTrigger: 'flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow-sm';
```

---

## Hover Effects

```
hover:scale-105                                    → Subtle scale
hover:-translate-y-0.5                             → Lift effect
hover:shadow-lg hover:shadow-blue-500/10           → Shadow glow
hover:border-blue-300 dark:hover:border-blue-500   → Border highlight
group-hover:opacity-100                            → Reveal on parent hover
group-hover:rotate-12                              → Icon rotation
```

---

## Animations

### Keyframes (Tailwind Config)

| Name               | Use                       | Timing         |
| ------------------ | ------------------------- | -------------- |
| `shimmer`          | Card/button loading shine | 2s infinite    |
| `float`            | Floating icons            | 3s ease-in-out |
| `blob`             | Background morphing       | 7s infinite    |
| `gradient-xy`      | Gradient animation        | 3s             |
| `gradient-shift`   | BG gradient movement      | 3s             |
| `progress-shimmer` | Loading bar               | 2s             |

### Framer Motion (Staggered Entry)

```tsx
initial={{ opacity: 0, scale: 0.99 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.3, delay: index * 0.04 }}
```

### CSS Fade-In

```tsx
className="animate-in fade-in slide-in-from-bottom-2 duration-300"
style={{ animationDelay: `${index * 50}ms` }}
```

### Timing Rules

- Fast transitions: `duration-200`
- Standard: `duration-300`
- Slow/dramatic: `duration-500`

---

## Gradient Patterns

### Gradient Text

```tsx
className =
  'bg-gradient-to-r from-gray-900 dark:from-slate-100 via-gray-800 dark:via-slate-200 to-gray-900 dark:to-slate-100 bg-clip-text text-transparent font-bold';
```

### Accent Line (Top of Card)

```tsx
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400/20 via-indigo-500/20 to-purple-500/20" />
```

### Gradient Overlay (Hover Tint)

```tsx
<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500 pointer-events-none" />
```

---

## Component Library

| Library                  | Use Case                                                                                  |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| Radix UI                 | Dialogs, Dropdowns, Tabs, Tooltips, Switches, Select, ScrollArea, Progress, Avatar, Toast |
| Framer Motion            | Page transitions, staggered entry, layout animations                                      |
| Tiptap v3                | Rich text editor                                                                          |
| Recharts                 | Dashboard charts                                                                          |
| Lucide React             | Icons                                                                                     |
| Sonner                   | Toast notifications                                                                       |
| SweetAlert2              | Confirmation dialogs                                                                      |
| Konva / react-konva      | Canvas-based image editor                                                                 |
| class-variance-authority | Component variant styling                                                                 |
| clsx + tailwind-merge    | Class composition                                                                         |

---

## Layout

### App Structure

- Collapsible sidebar → `components/navigation/`
- Main content area with responsive padding
- Document-view style for content (max-width 65ch, line-height 1.6-1.8)
- Floating selection toolbar on text selection
- Collapsible AI sidebar (persisted in localStorage)

### Responsive Breakpoints

| Breakpoint | Width          |
| ---------- | -------------- |
| `xs`       | 480px (custom) |
| `sm`       | 640px          |
| `md`       | 768px          |
| `lg`       | 1024px         |
| `xl`       | 1280px         |
| `2xl`      | 1536px         |

### Utilities

- `.scrollbar-hide` — Hide scrollbars (custom Tailwind plugin)
- Dark mode via `class` strategy (`darkMode: 'class'`)

---

## Rules

1. Use `p-2` padding for all cards by default — minimize white space
2. All cards use `rounded-xl` and glassmorphic backgrounds
3. Primary CTAs use the gradient: `from-blue-600 via-indigo-600 to-purple-700`
4. Every color must have a `dark:` variant
5. Use Radix UI for all interactive primitives
6. Use Framer Motion for animations — not raw CSS animations
7. Use `@/*` import alias for all frontend imports
8. Icons from Lucide React only
9. Labels use `uppercase tracking-[0.1em] text-[9px] font-bold`
10. Badge text: `text-[9px] font-bold uppercase tracking-[0.15em]`
11. Input height: `h-9` with `text-xs font-bold`
12. Transitions: `transition-all duration-200` (fast) or `duration-300` (standard)
