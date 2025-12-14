# CAP Portfolio - Design System & Style Guide

This document explains the design system, color palette, typography, and component patterns used throughout this portfolio template.

---

## 🎨 Color Palette

### Primary Colors

```css
--primary-color: #0052cc;        /* Deep Blue - Leadership, trust, professionalism */
--primary-light: #0066ff;        /* Light Blue - Hover states, accents */
--primary-dark: #003d99;         /* Dark Blue - Active states, emphasis */
```

**Usage**:
- Navigation and buttons
- Timeline elements
- Links and CTAs
- Primary badges

### Secondary Colors

```css
--secondary-color: #ff6b35;      /* Vibrant Orange - Energy, action, highlights */
```

**Usage**:
- Accent elements
- Awards and highlights
- Interactive feedback
- Call-to-action buttons

### Accent Colors

```css
--accent-gold: #ffd700;          /* Gold - Recognition, achievement */
```

**Usage**:
- Award badges
- Achievement markers
- Special recognition
- Star icons

### Neutral Colors

```css
--neutral-dark: #1a1a1a;         /* Near black - Text, headings */
--neutral-gray: #4a4a4a;         /* Medium gray - Body text */
--neutral-light: #e8e8e8;        /* Light gray - Borders, dividers */
--neutral-white: #ffffff;        /* White - Backgrounds */
--bg-light: #f5f7fa;             /* Off-white - Alternate backgrounds */
```

**Usage**:
- Text and typography
- Backgrounds
- Borders and dividers

### Color Combinations

**For New Sections**:
- Blue on white (good contrast)
- Orange on white (high visibility)
- White text on blue backgrounds
- Gold on dark backgrounds

**Avoid**:
- Light text on light backgrounds
- Orange text on white (use orange as background accent instead)
- Too many colors (stick to primary + secondary)

---

## 🔤 Typography

### Font Families

```css
--font-display: 'Poppins', sans-serif;      /* Headings - Bold, modern */
--font-primary: 'Inter', sans-serif;        /* Body - Clean, readable */
```

### Font Sizes

```css
--fs-xs: 0.75rem;     /* 12px - Small labels */
--fs-sm: 0.875rem;    /* 14px - Small text */
--fs-base: 1rem;      /* 16px - Body text (default) */
--fs-lg: 1.125rem;    /* 18px - Larger body */
--fs-xl: 1.25rem;     /* 20px - Section headings */
--fs-2xl: 1.5rem;     /* 24px - Major headings */
--fs-3xl: 2rem;       /* 32px - Large headings */
--fs-4xl: 2.5rem;     /* 40px - Hero subsection */
--fs-5xl: 3rem;       /* 48px - Hero main title */
```

### Font Weights

```css
Poppins (Display):
- 600: Section headings
- 700: Primary headings
- 800: Hero title

Inter (Primary):
- 300: Light text (rarely used)
- 400: Regular body text
- 500: Emphasis, labels
- 600: Strong emphasis
- 700: Bold text
```

### Line Heights

```css
Headings: 1.2    /* Tight, commanding */
Body: 1.6        /* Readable, comfortable */
Small text: 1.5  /* Compact but readable */
```

### Hierarchy Example

```
H1: fs-5xl, font-display, weight-800  → Hero title
H2: fs-3xl, font-display, weight-700  → Section heading
H3: fs-2xl, font-display, weight-700  → Subsection
H4: fs-xl, font-display, weight-600   → Card title
Body: fs-base, font-primary, weight-400
Label: fs-sm, font-primary, weight-600
```

---

## 📐 Spacing System

```css
--spacing-xs: 0.25rem;   /* 4px - Tiny margins */
--spacing-sm: 0.5rem;    /* 8px - Small spacing */
--spacing-md: 1rem;      /* 16px - Default spacing */
--spacing-lg: 1.5rem;    /* 24px - Section spacing */
--spacing-xl: 2rem;      /* 32px - Large spacing */
--spacing-2xl: 3rem;     /* 48px - Extra large */
--spacing-3xl: 4rem;     /* 64px - Hero spacing */
```

### Spacing Guidelines

- **Padding**: Use spacing values
- **Gaps**: Use spacing values for flex/grid gaps
- **Margins**: Use spacing values
- **Never mix**: Don't use pixels, use variables

### Section Spacing Pattern

```css
.section {
    padding: var(--spacing-3xl) 0;  /* 64px top/bottom */
}

.section-header {
    margin-bottom: var(--spacing-3xl);  /* Space below title */
}

.container {
    padding: 0 var(--spacing-lg);   /* 24px sides */
}
```

---

## 🎭 Component Patterns

### Buttons

```html
<!-- Primary Button -->
<button class="ai-send">Send</button>

<!-- Secondary Button -->
<button class="suggestion-btn">Ask Me</button>
```

**Styling Pattern**:
```css
background-color: var(--primary-color);
color: var(--neutral-white);
padding: var(--spacing-md) var(--spacing-lg);
border-radius: 6px;
border: none;
font-weight: 600;
cursor: pointer;
transition: all var(--transition-base);

&:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

&:active {
    transform: translateY(0);
}
```

### Cards

```html
<div class="award-card">
    <div class="award-icon">🏆</div>
    <h3 class="award-title">Award Title</h3>
    <p class="award-description">Description</p>
</div>
```

**Styling Pattern**:
```css
background: linear-gradient(135deg, var(--bg-light), var(--neutral-white));
padding: var(--spacing-xl);
border-radius: 12px;
box-shadow: var(--shadow-md);
transition: all var(--transition-base);

&:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
}
```

### Timeline Items

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="timeline-date">2024</div>
        <h3 class="timeline-title">Position</h3>
        <p class="timeline-description">Description</p>
    </div>
</div>
```

**Styling Pattern**:
- Alternates left/right on desktop
- Stacks vertically on mobile
- Dot with gradient line
- Hover effect lifts content

### Tags/Badges

```html
<span class="skill-tag">Leadership</span>
<span class="skill-tag skill-tag-secondary">Technical</span>
<span class="activity-type">Encampment</span>
```

**Styling Pattern**:
```css
display: inline-block;
background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
color: var(--neutral-white);
padding: var(--spacing-sm) var(--spacing-lg);
border-radius: 20px;  /* Pill shape */
font-size: var(--fs-sm);
font-weight: 600;
```

### Form Elements

```html
<input type="text" class="ai-input" placeholder="Ask me...">
<textarea class="ai-input">Message</textarea>
```

**Styling Pattern**:
```css
padding: var(--spacing-md) var(--spacing-lg);
border: 1px solid var(--neutral-light);
border-radius: 6px;
font-family: var(--font-primary);
font-size: var(--fs-base);
transition: all var(--transition-base);

&:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(0, 82, 204, 0.1);
}
```

---

## ✨ Animation System

### Transitions

```css
--transition-fast: 150ms ease;   /* Hover effects */
--transition-base: 300ms ease;   /* Default */
--transition-slow: 500ms ease;   /* Complex animations */
```

### Keyframe Animations

```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Animation Usage

```css
/* Page load */
.hero-content {
    animation: fadeInUp 1s ease;
}

/* Scroll reveal */
.timeline-item {
    opacity: 0;
    animation: fadeInUp 0.6s ease forwards;
}

/* Chat messages */
.ai-message {
    animation: slideIn var(--transition-base);
}

/* Hover states */
&:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}
```

### Accessibility

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

---

## 🌑 Shadow System

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
```

### When to Use

```css
sm: Cards at rest, subtle elevation
md: Buttons, inputs, hover states
lg: Modals, hero overlays, strong elevation
xl: Gallery modal, maximum emphasis
```

---

## 📱 Responsive Design

### Breakpoints

```css
Mobile:  < 480px
Tablet:  480px - 768px
Desktop: > 768px
```

### Mobile-First Approach

```css
/* Default styles (mobile) */
.container {
    padding: 0 var(--spacing-md);
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        padding: 0 var(--spacing-lg);
    }
}

/* Desktop */
@media (min-width: 1200px) {
    .container {
        max-width: 1200px;
    }
}
```

### Responsive Grid Pattern

```css
/* Mobile: 1 column */
.awards-grid {
    grid-template-columns: 1fr;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}

/* Desktop: 3+ columns */
@media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

---

## ♿ Accessibility Features

### Color Contrast

All text meets WCAG AA standards:
- Normal text: 4.5:1 minimum ratio
- Large text: 3:1 minimum ratio

### Focus Indicators

```css
button:focus-visible,
a:focus-visible,
input:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}
```

### Semantic HTML

```html
<nav>          <!-- Navigation landmark -->
<section>      <!-- Content sections -->
<article>      <!-- Main content -->
<aside>        <!-- Related content -->
<footer>       <!-- Page footer -->
<h1>, <h2>    <!-- Proper heading hierarchy -->
<button>       <!-- Interactive elements -->
<form>         <!-- Form containers -->
<label>        <!-- Form labels -->
```

### ARIA Labels

```html
<button aria-label="Toggle navigation menu">☰</button>
<input aria-label="Ask a question" placeholder="...">
<div role="dialog" aria-hidden="true">Modal Content</div>
```

---

## 🎯 Design Principles

### 1. **Clarity**
- Clear hierarchy through size and weight
- Consistent spacing and alignment
- Intuitive navigation

### 2. **Professionalism**
- Military-appropriate color scheme
- Formal typography
- Polished animations

### 3. **Accessibility**
- High contrast ratios
- Keyboard navigation
- Semantic HTML

### 4. **Performance**
- Minimal CSS (CSS Grid/Flexbox)
- No heavy frameworks
- Optimized assets

### 5. **Consistency**
- Repeating patterns
- Unified spacing
- Consistent typography

---

## 🔧 Customization Guide

### Change Primary Color

1. Find `:root` in `css/styles.css`
2. Change `--primary-color` value
3. All blue elements update automatically

### Change Secondary Color

1. Find `--secondary-color` in `:root`
2. Update the hex value
3. Orange accents update automatically

### Change Typography

1. Update `--font-display` for headings
2. Update `--font-primary` for body
3. Remember to include Google Fonts import

### Add New Colors

```css
:root {
    --new-color: #123456;
}

.new-element {
    color: var(--new-color);
}
```

---

## 📋 Component Checklist

When adding new components:

- [ ] Uses spacing variables (no hardcoded px)
- [ ] Uses color variables
- [ ] Includes hover state
- [ ] Includes active state
- [ ] Is mobile responsive
- [ ] Has focus indicator
- [ ] Uses semantic HTML
- [ ] Includes proper ARIA labels
- [ ] Follows naming conventions
- [ ] Documented in comments

---

## 🎨 Example: Creating a Custom Component

```css
/* Timeline Entry Card */
.timeline-entry {
    padding: var(--spacing-lg);           /* Use spacing variable */
    background-color: var(--neutral-white);
    border-left: 4px solid var(--primary-color);  /* Use color variable */
    border-radius: 8px;
    box-shadow: var(--shadow-md);         /* Use shadow variable */
    transition: all var(--transition-base);
}

.timeline-entry:hover {
    box-shadow: var(--shadow-lg);
    transform: translateX(8px);
}

@media (max-width: 768px) {
    .timeline-entry {
        margin-bottom: var(--spacing-lg);
    }
}

.timeline-entry:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}
```

---

## 📚 Additional Resources

- [Color Psychology](https://www.canva.com/learn/color-psychology/)
- [Typography Guide](https://www.smashingmagazine.com/2020/07/typography-web-design/)
- [Accessibility Standards](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Best Practices](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

**This design system ensures consistency and professionalism throughout the portfolio.**

Use these guidelines when customizing or extending the template!
