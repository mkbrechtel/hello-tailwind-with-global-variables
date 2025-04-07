# Color System Documentation

This document outlines the color system used in our application, following the "Tailwind CSS with Global Variables Pattern".

## Color Palette

Our color palette is defined using CSS custom properties (variables) with the `--global-` prefix to prevent naming conflicts.

### Primary Colors

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|-------|
| `--global-color-primary` | #3b82f6 | #60a5fa | Primary action colors, main branding |
| `--global-color-primary-light` | #60a5fa | #93c5fd | Lighter variations, hover states, backgrounds |
| `--global-color-primary-dark` | #2563eb | #2563eb | Darker variations, active states |

### Secondary Colors

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|-------|
| `--global-color-secondary` | #10b981 | #34d399 | Secondary actions, supporting elements |
| `--global-color-secondary-light` | #34d399 | #6ee7b7 | Lighter variations, hover states, backgrounds |
| `--global-color-secondary-dark` | #059669 | #059669 | Darker variations, active states |

### Accent Colors

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|-------|
| `--global-color-accent` | #f59e0b | #fbbf24 | Highlighting important elements, calls to action |
| `--global-color-accent-light` | #fbbf24 | #fcd34d | Lighter variations, hover states, backgrounds |
| `--global-color-accent-dark` | #d97706 | #d97706 | Darker variations, active states |

### Text Colors

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|-------|
| `--global-color-text` | #1f2937 | #f9fafb | Primary text color |
| `--global-color-text-light` | #4b5563 | #e5e7eb | Secondary text, less emphasized content |
| `--global-color-text-dark` | #111827 | #d1d5db | Headers, important text |

### Background Colors

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|-------|
| `--global-color-background` | #ffffff | #111827 | Main background color |
| `--global-color-background-light` | #f9fafb | #1f2937 | Card backgrounds, highlighted areas |
| `--global-color-background-dark` | #f3f4f6 | #374151 | Borders, separators |

## Usage in CSS

These colors are mapped to Tailwind utility classes through our CSS-based Tailwind configuration in `tailwind.css`:

```css
@theme {
  --color-primary: var(--global-color-primary);
  --color-primary-light: var(--global-color-primary-light);
  --color-primary-dark: var(--global-color-primary-dark);
  
  /* ...other color mappings... */
}
```

## Usage in HTML

In your HTML, use the Tailwind utility classes to apply these colors:

```html
<div class="bg-primary text-white">
  <!-- Content with primary background color -->
</div>

<p class="text-text-light">
  <!-- Text with secondary text color -->
</p>
```

## Dark Mode

Our application supports dark mode in two ways:

1. **System Preference**: Using the `@media (prefers-color-scheme: dark)` media query, our app automatically adapts to the user's system preference.

2. **Manual Toggle**: Users can manually toggle dark mode by clicking the theme toggle button, which adds/removes the `.dark` class to the html element. This setting is saved in localStorage.

Our `@custom-variant dark` in the CSS ensures that dark mode classes (like `dark:bg-primary`) will apply when the `.dark` class is present.

## Accessibility

All color combinations have been tested to ensure they meet WCAG 2.1 AA accessibility standards for contrast ratios:
- Large text (18pt+): minimum 3:1 contrast ratio
- Normal text: minimum 4.5:1 contrast ratio

## Adding New Colors

When adding new colors to the system:

1. Add the CSS variable to `global.css` with appropriate light/dark mode values
2. Add the mapping in the `@theme` section of `tailwind.css` 
3. Document the new color in this file

## Font Families

We also use the same pattern for font families:

| Variable | Value | Usage |
|----------|-------|-------|
| `--global-font-sans` | ui-sans-serif, system-ui, sans-serif | Primary text |
| `--global-font-serif` | ui-serif, Georgia, Cambria, serif | Stylized headings |
| `--global-font-mono` | ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace | Code snippets |