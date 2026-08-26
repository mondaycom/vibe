# Vibe Design System Guidelines for Figma Make

Use this file to provide the AI with rules and guidelines for using the Vibe Design System and its components. This document outlines design system foundations, component usage patterns, accessibility requirements, and best practices.

## Quick Reference

**Critical Rules:**

- Always import from `@vibe/core` or `@vibe/core/next` (for newer components)
- **Always use icons from `@mondaydotcomorg/icons`** - Never use other icon libraries
- Always wrap icons with `Icon` component from `@vibe/core`
- Use `Box` and `Flex` for layout instead of custom CSS
- **Always add padding to layouts** - Never create layouts without proper padding
- Use semantic colors for UI elements, content colors ONLY for data visualization
- **Content color naming** - Preserve exact names (some use underscores `_`, some use dashes `-`)
- Always provide accessibility attributes (`id`, `ariaLabel`, etc.)
- **Always use spacing tokens** - In CSS use `var(--space-4)`, `var(--space-8)`, `var(--space-16)`, etc. In React props use `xs`, `small`, `medium`, `large`, etc.
- Use shadow tokens (`xs`, `small`, `medium`, `large`) for elevation and interactions
- Default to white/transparent backgrounds - use colors sparingly
- Use spacing tokens and typography for hierarchy, not colors
- Prefer subtle borders over colored backgrounds
- Use generous white space with spacing tokens - let content breathe
- Create visual balance - distribute elements evenly, balance heavy and light elements
- Maintain visual consistency - use consistent spacing, sizing, and styling patterns
- Establish visual rhythm - use consistent spacing intervals throughout
- Guide visual flow - use hierarchy, spacing, and alignment to guide the eye naturally
- Never use raw HTML <button> elements — Always use Button, IconButton, or SplitButton from @vibe/core instead of native <button> tags, including in Figma-imported code
- **Toggle without labels** - When using `Toggle` in compact UI (cards, toolbars, table rows), always add `areLabelsHidden` and pair with `ariaLabel`

**Package Imports:**

- Components: `@vibe/core` or `@vibe/core/next`
- Icons: `@mondaydotcomorg/icons`
- New components: `@vibe/core/next` (Modal, Dropdown, AttentionBox)

---

# General Guidelines

## Code Quality and Structure

- Only use absolute positioning when necessary. Opt for responsive and well-structured layouts that use flexbox and grid by default.
- Refactor code as you go to keep code clean and maintainable.
- Keep file sizes small and put helper functions and components in their own files.
- Always import components from `@vibe/core` or `@vibe/core/next` (for newer components).
- Use TypeScript for type safety and better developer experience.
- Follow React best practices: use functional components, hooks, and proper state management.

## Layout and Spacing

- Use the `Box` and `Flex` components for layout instead of custom CSS.
- Use consistent spacing values from the design system spacing scale (4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px).
- Apply spacing tokens using CSS custom properties: `var(--space-8)`, `var(--space-16)`, etc.
- Group related items together using similar spacing.
- Use larger spacing around elements to emphasize their importance.
- **Always add padding to layouts** - Never create layouts without proper padding. Use `Box` with `padding` prop or `Flex` with appropriate spacing to ensure content doesn't touch container edges.
- **Page-level layouts** should have padding of at least `medium` (16px) or `large` (24px) on all sides.
- **Component containers** should have appropriate padding based on content density (typically `small` (8px) to `medium` (16px)).
- **Modal and Dialog content** must have proper padding - use `ModalContent` which includes default padding, or wrap content in `Box` with padding.
- **Card-like components** should have padding of at least `medium` (16px) to ensure content is readable and visually comfortable.

## Responsive Design

- Build responsive layouts that work across different screen sizes.
- Use the `Flex` component for one-dimensional layouts (horizontal or vertical).
- Use `Flex` with `wrap` prop for simple responsive multi-line layouts.
- Use CSS Grid for two-dimensional layouts requiring precise control over rows and columns.
- Use `Box` component for containers that need spacing, borders, or rounded corners.
- Avoid fixed widths when possible; prefer flexible layouts.
- Use `minmax()` with appropriate minimum widths for responsive grids and flex wrap items.
- Test layouts at different screen sizes to ensure proper wrapping and spacing.

## Accessibility

Web Accessibility ensures people with disabilities can equally perceive, understand, navigate, and interact with digital content. Follow WCAG (Web Content Accessibility Guidelines) principles.

### Core Accessibility Principles

- **Perceivable:** Information must be presentable to users in ways they can perceive
- **Operable:** Interface components must be operable by all users
- **Understandable:** Information and UI operation must be understandable
- **Robust:** Content must be robust enough for various assistive technologies

### Accessibility Requirements

- Always provide proper labels and ARIA attributes for interactive components.
- Ensure keyboard navigation works for all interactive elements.
- Use semantic HTML elements where appropriate.
- Provide meaningful text alternatives for icons and images.
- Ensure sufficient color contrast for text and interactive elements.

### Color Contrast

**Text Color Contrast:**

- Text and images must have a contrast ratio of at least **4.5:1** with the background
- Large text (18pt/24px or 14pt/18.66px and bold) must have at least **3:1** contrast ratio
- Exceptions: Incidental text, decorative elements, inactive UI, logotypes

**Non-Text Color Contrast:**

- UI components (borders, focus indicators, active states) must have at least **3:1** contrast ratio
- Graphical objects required to understand content must have sufficient contrast

### Imagery

**Information Images:**

- Alt-text must convey the same information as the image
- Keep alt-text short and appropriate to context
- If information is already present as text, mark image as decorative
- Don't use phrases like "graphic", "An image of", "A picture of", "an icon of"

**Decorative Images:**

- Should not convey information
- Should be ignored by screen readers
- Use `role="presentation"` or empty alt attribute
- Can be defined as background images in stylesheet

### Keyboard Navigation

- All active elements operable with mouse must be operable by keyboard
- Dynamic components (dialogs, menus) must receive keyboard focus
- Elements showing content on hover must be in tab order and keyboard operable
- Annotate tab-order in designs

### Focus Management

- Provide visible focus indicators for all interactive elements
- In rich applications, users tab to complex components then use arrow keys within them
- When dynamic components close, focus returns to the point where interaction started
- Receiving focus must not cause substantial page changes

### Semantic Markup

- Use proper heading hierarchy (H1-H6) - only one H1 per page
- Don't skip heading levels
- Use semantic elements: headings, regions/landmarks, lists, emphasized text, tables
- Ensure reading order matches visual presentation

### Screen Reader Support

- Ensure all content is accessible to screen readers
- Use ARIA attributes when semantic HTML isn't sufficient
- Provide clear, descriptive labels for all interactive elements
- Test with screen readers (JAWS, NVDA, VoiceOver)

---

# Design System Guidelines

## Typography

### Fonts

We use two fonts for our UI hierarchy:

- **Poppins** - Used for main titles (headings)
- **Figtree** - Used for text, labels, and paragraphs

Include fonts using this link tag:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
  rel="stylesheet"
/>
```

### Type Styles

**Headings:**

- H1 - 32px (use `Heading` component with `type="h1"`)
- H2 - 24px (use `Heading` component with `type="h2"`)
- H3 - 18px (use `Heading` component with `type="h3"`)

**Text:**

- Text1 - 16px (use `Text` component with `type="text1"`)
- Text2 - 14px (use `Text` component with `type="text2"`)
- Text3 - 12px (use `Text` component with `type="text3"`)

**Weights:** light, normal, medium, bold

### Typography Best Practices

- Avoid using text size smaller than 14px.
- Don't underline words. For typographic emphasis, use bold text.
- Don't use 2 different sizes of text in the same line.
- Use sentence-case capitalization for buttons and labels.
- Keep button labels to 1-2 words, no longer than 4 words, with fewer than 20 characters including spaces.

## Icons

**CRITICAL:** Always use icons from `@mondaydotcomorg/icons` package. Never use other icon libraries (Font Awesome, Material Icons, etc.) or custom icon fonts. The `@mondaydotcomorg/icons` package provides all icons needed for the Vibe Design System.

### Icon Package

The `@mondaydotcomorg/icons` package includes all icons from the Vibe Design System, available as React components, lazy-loaded components, and SVG path data.

### Installation

```bash
npm install @mondaydotcomorg/icons
```

### Import Methods

#### Standard React Components (Recommended)

Import icons directly as React components:

```js
import { Close, Search, Check, ArrowRight } from "@mondaydotcomorg/icons";
```

#### Lazy-Loaded Components (For Performance)

Use lazy-loaded icons for better performance when you have many icons or want to reduce initial bundle size:

```js
import { Close } from "@mondaydotcomorg/icons/lazy";
```

#### SVG path data

Import path data when you need direct SVG access (not React components):

```js
import { Close as ClosePath } from "@mondaydotcomorg/icons/svgPathData";
```

#### Icon Metadata

Access icon metadata for programmatic use (icon pickers, filtering, etc.):

```js
import iconsMetaData from "@mondaydotcomorg/icons/meta";
```

### Using Icons with Icon Component

Always wrap icons with the `Icon` component from `@vibe/core` for consistent styling and behavior:

```jsx
import { Icon } from "@vibe/core";
import { Close, Search } from "@mondaydotcomorg/icons";

// Basic usage
<Icon icon={Close} />

// With size
<Icon icon={Search} iconSize={24} />

// In buttons
<Button leftIcon={Close}>Close</Button>
```

### Icon Usage Guidelines

- **Always use `@mondaydotcomorg/icons`** - Never import icons from other libraries
- **Always wrap icons with Icon component** - Use the `Icon` component from `@vibe/core` to wrap all icons
- **Provide accessible labels** - When using icons alone (without text), always provide an `ariaLabel` or use them within components that have accessible labels
- **Use icons alongside text when possible** - Icons enhance text but shouldn't replace it for important information
- **Use appropriate icon sizes** - Icons inherit color from their parent container by default
- **Use lazy loading for performance** - Import from `@mondaydotcomorg/icons/lazy` when you have many icons or want to optimize bundle size

### Icon Best Practices

- Use icons to enhance visual communication and provide visual cues
- Icons should be semantically meaningful and match their context
- Maintain consistent icon usage throughout the application
- Use the same icon for the same action across the application
- Icons in buttons should be positioned appropriately (left or right)
- For icon-only buttons, always provide `ariaLabel` prop
- Icons inherit color from parent - use semantic colors for proper contrast

### Examples

```jsx
// Icon in a button
import { Button } from "@vibe/core";
import { Save } from "@mondaydotcomorg/icons";

<Button leftIcon={Save}>Save</Button>;

// Icon with Icon component
import { Icon } from "@vibe/core";
import { Check } from "@mondaydotcomorg/icons";

<Icon icon={Check} iconSize={20} />;

// Icon-only button with accessibility
import { IconButton } from "@vibe/core";
import { Close } from "@mondaydotcomorg/icons";

<IconButton icon={Close} ariaLabel="Close dialog" />;

// Icon in TextField
import { TextField } from "@vibe/core";
import { Search } from "@mondaydotcomorg/icons";

<TextField title="Search" iconsNames={{ primary: "Search icon" }} icons={{ primary: Search }} />;
```

### Finding Icons

- Browse available icons in Storybook: [Vibe Icons List](https://vibe.monday.com/?path=/story/media-icon--icons-list-story)
- Use icon metadata to programmatically search and filter icons
- Icons are exported by their PascalCase name (e.g., `DoubleCheck`, `ArrowRight`, `Close`)

## Colors

The color system helps users identify status, see actions, locate help, and indicate next steps. Colors are designed to be clear and accessible, available in three color themes (light, dark, black).

### Color Usage Rules

**CRITICAL DISTINCTION:**

- **Semantic Colors** - Use for UI elements (buttons, alerts, status indicators, feedback)
- **Content Colors** - Use ONLY for data visualization (groups, statuses, timeline bars, color coding)

**Important:** Content colors should appear on the board/data visualization and nowhere else in the UI. Never use content colors for UI elements like buttons, alerts, or status indicators.

### Semantic Colors (For UI Elements)

Semantic colors convey meaning and are used for UI components, status indicators, and user feedback.

#### Primary Colors

- `--primary-color` - Main brand color for primary actions
- `--primary-hover-color` - Hover state for primary elements
- `--primary-selected-color` - Selected state background
- `--primary-selected-hover-color` - Selected hover state
- `--primary-highlighted-color` - Highlighted background
- `--primary-surface-color` - Surface/container background

#### Status Colors

- `--positive-color` - Success states, positive feedback
- `--positive-color-hover` - Hover state for positive elements
- `--positive-color-selected` - Selected positive state
- `--positive-color-selected-hover` - Selected hover for positive

- `--negative-color` - Error states, destructive actions
- `--negative-color-hover` - Hover state for negative elements
- `--negative-color-selected` - Selected negative state
- `--negative-color-selected-hover` - Selected hover for negative

- `--warning-color` - Warning states, caution indicators
- `--warning-color-hover` - Hover state for warning elements
- `--warning-color-selected` - Selected warning state
- `--warning-color-selected-hover` - Selected hover for warning

#### Other Semantic Colors

- `--inverted-color-background` - Dark background for inverted content
- `--icon-color` - Default icon color
- `--fixed-light-color` - Fixed white color
- `--fixed-dark-color` - Fixed dark color

### Content Colors (For Data Visualization ONLY)

Content colors are used EXCLUSIVELY for color coding purposes like groups, statuses, timeline bars, etc. These colors give understanding and indication of orientation and belonging in data visualization contexts.

**IMPORTANT: Content Color Naming Convention**

Content color names use both **underscores** (`_`) and **dashes** (`-`). This is intentional and must be preserved exactly as specified:

- **Underscores** (`_`) are used in names like: `grass_green`, `egg_yolk`, `working_orange`, `dark_purple`, `dark_indigo`, `american_gray`, `sofia_pink`
- **Dashes** (`-`) are used in names like: `done-green`, `bright-green`, `dark-orange`, `dark-red`, `stuck-red`, `bright-blue`, `dark-blue`, `chili-blue`

**Always use the exact name as specified** - don't convert underscores to dashes or vice versa. The naming convention is inconsistent by design and must be preserved.

**Available Content Colors:**

- `grass_green` (underscore)
- `done-green` (dash)
- `bright-green` (dash)
- `saladish`
- `egg_yolk` (underscore)
- `working_orange` (underscore)
- `dark-orange` (dash)
- `peach`
- `sunset`
- `stuck-red` (dash)
- `dark-red` (dash)
- `sofia_pink` (underscore)
- `lipstick`
- `bubble`
- `purple`
- `dark_purple` (underscore)
- `berry`
- `dark_indigo` (underscore)
- `indigo`
- `navy`
- `bright-blue` (dash)
- `dark-blue` (dash)
- `aquamarine`
- `chili-blue` (dash)
- `river`
- `winter`
- `explosive`
- `american_gray` (underscore)
- `blackish`
- `brown`
- `orchid`
- `tan`
- `sky`
- `coffee`
- `royal`
- `teal`
- `lavender`
- `steel`
- `lilac`
- `pecan`

**Content Color States:**
Each content color has three states:

- **Default** - Base color
- **Hover** - Hover state
- **Selected** - Selected/active state

### Background Colors

Used for surfaces and containers:

- `--primary-background-color` - Main background
- `--primary-background-hover-color` - Hover background
- `--secondary-background-color` - Secondary background
- `--allgrey-background-color` - Grey background
- `--ui-background-color` - UI element background
- `--ui-background-hover-color` - UI hover background
- `--grey-background-color` - Grey background variant
- `--disabled-background-color` - Disabled state background

### Text Colors

Used for text content with proper contrast:

- `--primary-text-color` - Main text color
- `--secondary-text-color` - Secondary text color
- `--text-color-on-inverted` - Text on dark backgrounds
- `--text-color-on-primary` - Text on primary color
- `--text-color-on-brand` - Text on brand color
- `--placeholder-color` - Placeholder text color

### Border Colors

Used for borders and dividers:

- `--ui-border-color` - UI element borders
- `--layout-border-color` - Layout borders

### Color Usage Best Practices

- Use semantic colors consistently to indicate status, actions, and feedback in UI
- **NEVER use content colors for UI elements** - they are only for data visualization
- Ensure sufficient contrast between text and background colors (4.5:1 for normal text, 3:1 for large text)
- Use color in combination with other indicators (icons, text) - don't rely on color alone
- Test color combinations for accessibility across all themes
- Use appropriate hover and selected states for interactive elements

### Using Color Tokens in Code

**CSS Custom Properties:**

```css
/* Semantic colors */
background-color: var(--positive-color);
color: var(--primary-text-color);
border-color: var(--ui-border-color);

/* Content colors (for data visualization only) */
/* IMPORTANT: Preserve exact naming - some use underscores, some use dashes */
background-color: var(
  --color-grass-green
); /* underscore in name */
background-color: var(--color-done-green); /* dash in name */
background-color: var(
  --color-done-green-selected
); /* with state */
```

**In React Components:**

```jsx
// Using semantic colors via props
<Button kind="primary">Save</Button>
<AlertBanner backgroundColor="negative">Error message</AlertBanner>

// Using Box component with semantic colors
<Box backgroundColor="positive-selected">Success message</Box>

// Content colors should only be used in data visualization components
// IMPORTANT: Use exact color names as specified (preserve underscores and dashes)
<Chip color="grass_green">Status</Chip>      {/* underscore */}
<Chip color="done-green">Status</Chip>       {/* dash */}
<Chip color="dark-orange">Status</Chip>     {/* dash */}
<Chip color="egg_yolk">Status</Chip>        {/* underscore */}
```

## CSS Grid

CSS Grid is a powerful two-dimensional layout system that should be used when you need precise control over both rows and columns simultaneously.

### When to Use CSS Grid vs Flex

**Use CSS Grid when:**

- You need **two-dimensional layouts** (both rows AND columns)
- You need **precise control** over item placement in a grid
- You need **complex layouts** with overlapping items
- You need **responsive grids** with auto-fit/auto-fill
- You're building **dashboard layouts** or **card grids** with specific column requirements

**Use Flex (with or without wrap) when:**

- You need **one-dimensional layouts** (row OR column)
- Items should **flow naturally** and wrap based on available space
- You need **simple responsive layouts** that adapt to content
- You're building **toolbars, navigation, or lists**

### CSS Grid Best Practices

- **Use design system spacing tokens** - Always use spacing tokens (`var(--space-8)`, `var(--space-16)`, etc.) for grid gaps
- **Prefer auto-fit/auto-fill** - Use `repeat(auto-fit, minmax(...))` for responsive grids that adapt to container width
- **Set minimum item widths** - Use `minmax()` with appropriate minimum widths (typically 250px-300px for cards)
- **Use consistent gaps** - Apply consistent gap values using spacing tokens
- **Wrap in Box component** - Use `Box` component for grid containers to leverage padding and other utilities
- **Consider accessibility** - Ensure grid layouts maintain logical reading order

### CSS Grid Examples

**Responsive Card Grid:**

```jsx
import { Box } from "@vibe/core";

<Box padding="large">
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "var(--space-16)" // medium spacing
    }}
  >
    {cards.map(card => (
      <Card key={card.id} {...card} />
    ))}
  </div>
</Box>;
```

**Fixed Column Grid:**

```jsx
<Box padding="medium">
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)", // 3 equal columns
      gap: "var(--space-16)"
    }}
  >
    <Box>Column 1</Box>
    <Box>Column 2</Box>
    <Box>Column 3</Box>
  </div>
</Box>
```

**Responsive Grid with Breakpoints:**

```jsx
<Box padding="large">
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "var(--space-16)"
      // On mobile: 1 column, on tablet: 2 columns, on desktop: 3+ columns
    }}
  >
    {items.map(item => (
      <Item key={item.id} {...item} />
    ))}
  </div>
</Box>
```

**Grid with Different Row/Column Gaps:**

```jsx
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    columnGap: "var(--space-24)", // large spacing between columns
    rowGap: "var(--space-16)" // medium spacing between rows
  }}
>
  {items.map(item => (
    <Item key={item.id} {...item} />
  ))}
</div>
```

**Dashboard Layout Grid:**

```jsx
<Box padding="large">
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "2fr 1fr", // Main content + sidebar
      gridTemplateRows: "auto 1fr auto", // Header, content, footer
      gap: "var(--space-16)",
      minHeight: "100vh"
    }}
  >
    <Box gridColumn="1 / -1">Header</Box>
    <Box>Main Content</Box>
    <Box>Sidebar</Box>
    <Box gridColumn="1 / -1">Footer</Box>
  </div>
</Box>
```

### CSS Grid Auto-Fit Patterns

**Common auto-fit patterns using spacing tokens:**

```jsx
// Small cards (120px minimum)
gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))";

// Medium cards (180px minimum) - recommended for most card grids
gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))";

// Large cards (240px minimum)
gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))";

// Extra large cards (300px minimum)
gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))";
```

### Grid vs Flex Wrap Decision Guide

**Choose Flex Wrap when:**

- Items have **variable widths** and should flow naturally
- You want **simple responsive behavior** without precise control
- Items should **wrap based on available space** automatically
- You're building **tag lists, button groups, or flexible toolbars**

**Choose CSS Grid when:**

- You need **specific column counts** or **equal-width columns**
- You need **precise control** over item placement
- You're building **dashboard layouts** or **complex multi-column layouts**
- You need **different row and column gaps**
- You need **overlapping items** or **complex positioning**

### Grid Best Practices

- **Always use spacing tokens** - Never use arbitrary pixel values for gaps
- **Set appropriate minimum widths** - Use `minmax()` with sensible minimums (250px-300px for cards)
- **Test responsive behavior** - Ensure grids work well at all screen sizes
- **Use Box for containers** - Wrap grid containers in `Box` for padding and other utilities
- **Maintain accessibility** - Ensure grid items maintain logical tab order
- **Consider content density** - Don't make grids too dense; use appropriate gaps
- **Use auto-fit for responsive** - Prefer `auto-fit` or `auto-fill` over fixed column counts for responsive layouts

## Spacing

### Spacing Scale

The spacing scale includes: 4px (xs), 8px (small), 12px, 16px (medium), 20px, 24px (large), 32px, 40px, 48px, 64px

### Spacing Best Practices

- Stay consistent with paddings and sizes across similar UI patterns.
- Group similar items together using similar spacing.
- The distance between elements creates semantic meaning: elements placed close together are assumed to be related.
- Use larger spacing around elements to emphasize their importance.
- Use small-sized spacing to group related items together.
- Use the same spacing for similar items or patterns.

## Shadows

Shadows express the level of elevation between surfaces and must be used consistently. Virtual light in the platform always comes from the top and creates shadows from layout and UI elements like in the real world.

### Shadow Levels

Shadows are available in four levels:

- **XS** (`xs`) - Subtle shadow for slight elevation
- **Small** (`small`) - Light shadow for cards and hover states
- **Medium** (`medium`) - Moderate shadow for elevated elements
- **Large** (`large`) - Strong shadow for high elevation (modals, dialogs)

### Shadow Tokens

**CSS Custom Properties:**

```css
/* Shadow tokens */
box-shadow: var(--box-shadow-xs); /* XS shadow */
box-shadow: var(--box-shadow-small); /* Small shadow */
box-shadow: var(--box-shadow-medium); /* Medium shadow */
box-shadow: var(--box-shadow-large); /* Large shadow */
```

**In React Components:**

```jsx
// Using Box component with shadow prop
<Box shadow="small">Card content</Box>
<Box shadow="medium">Elevated card</Box>
<Box shadow="large">Modal-like elevation</Box>

// Shadow values: "xs", "small", "medium", "large"
```

### Shadow Usage Guidelines

- **Use shadows to explain interactions** - Shadows indicate hover states, drag states, and elevation levels.
- **Items with the same shadow cannot occupy the same space** - Different elevation levels require different shadow values.
- **Virtual light always comes from the top** - All shadows are cast downward.
- **Use consistent shadow levels** - Similar UI elements should use the same shadow level throughout your application.
- **Hover states** - Use `small` or `medium` shadow to indicate hover elevation.
- **Cards and containers** - Use `small` or `medium` shadow for card-like components.
- **Modals and dialogs** - Use `large` shadow for maximum elevation.
- **Drag interactions** - Use `medium` or `large` shadow to indicate elements being dragged.
- **Don't overuse shadows** - Too many shadows create visual noise. Use shadows purposefully to indicate hierarchy.

### Shadow Best Practices

- **Start with no shadow** - Only add shadows when elevation needs to be communicated.
- **Use progressive elevation** - Increase shadow level as elements get closer to the user (hover, active, dragged states).
- **Maintain consistency** - Use the same shadow level for similar UI patterns across your application.
- **Consider context** - Shadows should be subtle enough not to distract but visible enough to communicate elevation.
- **Test across themes** - Shadow appearance varies across light, dark, and black themes - ensure they work in all contexts.

---

# Visual Design & Aesthetic Guidelines

This section provides comprehensive aesthetic principles for creating clean, minimalist interfaces that align with the Vibe Design System's minimalist nature.

## Minimalist Design Principles

- Default to clean, uncluttered layouts
- Use white space as a design element
- Prefer subtle over bold visual treatments
- Let content breathe with adequate spacing tokens
- Avoid visual noise and unnecessary decorations

## Color Usage Philosophy

- Use colors sparingly and purposefully
- Default to transparent/white backgrounds unless there's a specific need
- Use semantic colors only when meaning needs to be conveyed (status, actions, feedback)
- Avoid colored backgrounds for containers - use borders or white space instead
- Never use content colors for UI elements
- Use subtle background colors only when grouping related content

## Spacing and White Space

- Use generous white space to create visual breathing room
- **Always use spacing tokens** - Never use pixel values directly
- **CSS Custom Properties**: Use `var(--space-4)`, `var(--space-8)`, `var(--space-16)`, `var(--space-24)`, etc.
- **React Component Props** (Box, Flex): Use `xs`, `small`, `medium`, `large` which map to tokens internally
- Available spacing tokens: `space-2` (2px), `space-4` (4px), `space-8` (8px), `space-12` (12px), `space-16` (16px), `space-20` (20px), `space-24` (24px), `space-32` (32px), `space-40` (40px), `space-48` (48px), `space-64` (64px), `space-80` (80px)
- Group related items with smaller spacing tokens (`space-8` or `space-16` / `small` or `medium` props)
- Separate distinct sections with larger spacing tokens (`space-24`, `space-32`, or `space-48` / `large`, `xl`, or `xxl` props)
- Never let content touch container edges - always add padding using spacing tokens (`padding="medium"` or `padding="large"` / `var(--space-16)` or `var(--space-24)`)
- Use spacing tokens to create hierarchy, not just colors
- **In CSS, always use**: `var(--space-8)`, `var(--space-16)`, `var(--space-24)` instead of `8px`, `16px`, `24px`
- **In React props, always use**: `gap="small"`, `padding="medium"`, `margin="large"` instead of `gap={8}`, `padding={16}`, `margin={24}`

## Visual Hierarchy Without Color

- Use typography (size, weight) to establish hierarchy
- Use spacing tokens to group and separate content (`gap="small"` for related items, `gap="large"` for sections)
- Use subtle borders (not colored backgrounds) to define sections
- Use shadows sparingly and only for elevation (modals, cards on hover)
- Let the content structure create visual flow

## Container and Background Guidelines

- Default containers should be transparent or use `primaryBackgroundColor` (white/light)
- Avoid colored backgrounds unless grouping related content
- Use subtle borders (`border` prop) instead of colored backgrounds for separation
- Use `secondaryBackgroundColor` sparingly, only for subtle grouping
- Never use multiple background colors on the same page unnecessarily

## Border Usage

- Use borders to define sections, not colored backgrounds
- Prefer subtle borders (`border` prop) over heavy visual treatments
- Use borders sparingly - white space often works better
- Borders should be subtle and functional, not decorative

## Shadow Usage

- Use shadows only for elevation (modals, dialogs, cards on hover)
- Avoid shadows for decorative purposes
- Use the smallest shadow level that achieves the effect (`xs` or `small` for most cases)
- Don't use shadows to create depth where spacing tokens would work better

## Typography-Based Hierarchy

- Use Heading sizes (H1, H2, H3) to establish clear hierarchy
- Use Text types (text1, text2, text3) consistently
- Use weight (normal, medium, bold) sparingly for emphasis
- Let typography create visual interest, not colors

## Layout Cleanliness

- Keep layouts simple and uncluttered
- Use consistent alignment (left-align text, consistent button placement)
- Avoid mixing too many visual styles on one page
- Group related functionality together with appropriate spacing tokens (`gap="small"` or `gap="medium"`)
- Use clear visual separation between sections with spacing tokens (`gap="large"` or `gap="xl"`)

## Visual Balance and Composition

- **Balance visual weight** - Distribute elements evenly across the layout to create visual harmony
- **Create focal points** - Use size, spacing, or subtle emphasis to guide attention to important elements
- **Avoid visual clutter** - Remove unnecessary elements that compete for attention
- **Use symmetry and asymmetry intentionally** - Symmetrical layouts feel stable; asymmetrical layouts create interest
- **Balance heavy and light elements** - Large headings, images, or buttons should be balanced with lighter text and white space
- **Group related elements** - Use proximity (spacing tokens) to create visual groups that feel cohesive
- **Create visual breathing room** - Don't fill every pixel; let the layout breathe with generous spacing

## Content Density Guidelines

- **Match density to context** - Dense layouts for data-heavy interfaces (tables, dashboards); spacious layouts for content-focused pages
- **Use consistent density** - Maintain similar content density throughout related sections
- **Balance information and space** - Too dense feels overwhelming; too sparse feels empty
- **Progressive disclosure** - Show essential information first, reveal details on demand
- **Consider user goals** - Quick scanning needs denser layouts; reading needs more space
- **Use spacing tokens to control density** - Smaller gaps (`gap="small"`) for dense layouts, larger gaps (`gap="large"`) for spacious layouts

## Visual Rhythm and Patterns

- **Create consistent patterns** - Repeat spacing, sizing, and styling patterns throughout the interface
- **Establish visual rhythm** - Use consistent spacing intervals (e.g., `space-16` between items, `space-32` between sections)
- **Maintain pattern consistency** - Once you establish a pattern (e.g., card padding), use it consistently
- **Use repetition for familiarity** - Similar components should look and behave similarly
- **Break patterns intentionally** - Use variation sparingly to draw attention to important elements
- **Create visual flow** - Guide the eye through the interface using consistent spacing and alignment

## Card Design Best Practices

- **Use consistent card padding** - Apply `padding="medium"` or `padding="large"` consistently across cards
- **Maintain card spacing** - Use `gap="medium"` or `gap="large"` between cards in grids
- **Keep card content scannable** - Use clear typography hierarchy and adequate spacing within cards
- **Use subtle borders or shadows** - Prefer `border` prop or `shadow="small"` for card definition, not colored backgrounds
- **Maintain card proportions** - Keep card sizes consistent within a grid or list
- **Group related card content** - Use `Flex` with `gap="small"` to group related information within cards
- **Avoid over-styling cards** - Let content be the focus, not decorative elements

## Visual Flow and Eye Movement

- **Guide the eye naturally** - Place important elements where users naturally look (top-left, center)
- **Use visual hierarchy to create flow** - Larger, bolder elements draw attention first
- **Create clear entry points** - Use headings, spacing, and alignment to guide users into content
- **Maintain reading flow** - Left-align text (in LTR languages) for natural reading patterns
- **Use spacing to create pauses** - Larger spacing (`gap="large"`) creates visual pauses between sections
- **Balance visual weight** - Distribute important elements evenly to avoid visual imbalance
- **Create clear paths** - Use alignment and spacing to create clear visual paths through the interface

## Alignment and Grid Systems

- **Maintain consistent alignment** - Align related elements to create visual order
- **Use grid systems for structure** - CSS Grid or Flex with consistent spacing creates visual harmony
- **Align to a baseline** - Keep text and elements aligned to create a clean, professional look
- **Use consistent margins** - Apply consistent spacing tokens for margins and padding
- **Create visual columns** - Use consistent widths and spacing to create implied columns
- **Respect the grid** - Don't break alignment unless intentionally creating emphasis
- **Use Flex and Grid for alignment** - Leverage `justify` and `align` props for precise alignment

## Visual Consistency

- **Maintain consistent spacing** - Use the same spacing tokens for similar elements throughout
- **Use consistent component sizes** - Keep button sizes, input heights, and spacing consistent
- **Apply consistent styling** - Similar elements should look and behave similarly
- **Create visual language** - Establish patterns (spacing, borders, shadows) and use them consistently
- **Avoid one-off styles** - If you style something one way, apply that style consistently
- **Use design tokens** - Always use spacing tokens, color tokens, and shadow tokens for consistency

## Common Anti-Patterns to Avoid

- ❌ Using colored backgrounds when white space would work
- ❌ Overusing borders and shadows
- ❌ Creating visual hierarchy with colors instead of typography/spacing tokens
- ❌ Using multiple background colors unnecessarily
- ❌ Tight spacing that makes content feel cramped (use appropriate spacing tokens)
- ❌ Inconsistent spacing throughout the interface (use spacing tokens consistently)
- ❌ **Using pixel values instead of spacing tokens** (`gap={8}` instead of `gap="small"`, `padding={16}` instead of `padding="medium"`, `margin: 16px` instead of `margin: var(--space-16)`)
- ❌ Using content colors for UI elements
- ❌ Adding decorative elements that don't serve a purpose
- ❌ Creating unbalanced layouts with uneven visual weight distribution
- ❌ Mixing dense and sparse layouts inconsistently
- ❌ Breaking visual patterns without clear purpose
- ❌ Inconsistent card designs within the same interface
- ❌ Poor alignment that creates visual chaos
- ❌ Ignoring visual flow and natural eye movement patterns

## Examples: Good vs Bad

**Good: Clean layout with white space and subtle borders using spacing tokens**

```jsx
<Box padding="large">
  <Flex direction="column" gap="medium">
    <Heading type="h2">Section Title</Heading>
    <Text>Content here</Text>
  </Flex>
</Box>
```

**Bad: Overuse of colored backgrounds**

```jsx
<Box backgroundColor="secondaryBackgroundColor" padding="large">
  <Box backgroundColor="primaryBackgroundColor" padding="medium">
    Content
  </Box>
</Box>
```

**Good: Typography-based hierarchy with proper spacing tokens**

```jsx
<Flex direction="column" gap="large">
  <Heading type="h1">Main Title</Heading>
  <Flex direction="column" gap="small">
    <Heading type="h3">Subsection</Heading>
    <Text>Content</Text>
  </Flex>
</Flex>
```

**Bad: Color-based hierarchy**

```jsx
<Box backgroundColor="primaryBackgroundColor">
  <Box backgroundColor="secondaryBackgroundColor">Content</Box>
</Box>
```

**Good: Consistent, generous spacing using tokens**

```jsx
<Flex gap="medium" wrap>
  {items.map(item => (
    <Box key={item.id} padding="medium">
      Item
    </Box>
  ))}
</Flex>
```

**Bad: Inconsistent spacing or using pixel values**

```jsx
<Flex gap={8} wrap>
  {items.map(item => (
    <Box key={item.id} padding={16}>
      Item
    </Box>
  ))}
</Flex>
```

**Good: Balanced card layout with consistent spacing and visual rhythm**

```jsx
<Box padding="large">
  <Flex gap="medium" wrap>
    {cards.map(card => (
      <Box key={card.id} border rounded="medium" padding="large" style={{ flex: "1 1 300px", minWidth: 280 }}>
        <Flex direction="column" gap="small">
          <Heading type="h3">{card.title}</Heading>
          <Text>{card.description}</Text>
        </Flex>
      </Box>
    ))}
  </Flex>
</Box>
```

**Bad: Unbalanced layout with inconsistent card styling**

```jsx
<Box padding="large">
  <Flex gap={12} wrap>
    {cards.map(card => (
      <Box key={card.id} backgroundColor="secondaryBackgroundColor" padding={20} style={{ width: 280 }}>
        <Heading type="h2">{card.title}</Heading>
        <Text>{card.description}</Text>
      </Box>
    ))}
  </Flex>
</Box>
```

**Good: Visual flow with clear hierarchy and spacing**

```jsx
<Box padding="large">
  <Flex direction="column" gap="large">
    <Heading type="h1">Page Title</Heading>
    <Flex direction="column" gap="medium">
      <Heading type="h2">Section Title</Heading>
      <Flex direction="column" gap="small">
        <Text>First paragraph with adequate spacing.</Text>
        <Text>Second paragraph maintains visual rhythm.</Text>
      </Flex>
    </Flex>
  </Flex>
</Box>
```

**Bad: Poor visual flow with inconsistent spacing**

```jsx
<Box padding={10}>
  <Heading type="h1">Page Title</Heading>
  <Heading type="h2">Section Title</Heading>
  <Text>Content without proper spacing hierarchy.</Text>
  <Text>Creates visual confusion.</Text>
</Box>
```

---

# Component Guidelines

## Button

Replacing Figma-Imported Buttons

Figma code imports often produce raw <button> elements with custom Tailwind classes. These must be converted to the appropriate @vibe/core component:

### Import

```js
import { Button } from "@vibe/core";
```

### Usage

- Buttons may contain icons on the left or right side.
- Use 8px spacing between buttons.
- Replace text with a loader if action is submitted but still processing.
- Button width is set by its content; avoid changing its width.
- Use only one primary button, and any remaining calls to action should be represented as lower emphasis buttons.

### Variants

**Kinds:**

- **Primary** - Used for the main action on a page or in a section
- **Secondary** - Used for alternative or supporting actions
- **Tertiary** - Used for the least important actions

**Sizes:** Small, Medium, Large

**States:** Regular, Hover, Active, Disabled, Loading, Success

### Accessibility

- Using an `id` is recommended for all instances to ensure proper label association.
- Always provide descriptive text content for buttons, or use `ariaLabel` prop when buttons contain only icons.
- Use `ariaLabel` prop when you need to provide a custom accessible name that differs from the visible button text.
- Use `ariaLabeledBy` prop when an external element provides the accessible name.
- Use `ariaHasPopup` prop when the button triggers a popup menu or dialog.
- Use `ariaExpanded` prop to indicate when a popup triggered by the button is open or closed.

### Best Practices

- Use 1 or 2 words, no longer than 4 words, with fewer than 20 characters including spaces.
- Don't use punctuation marks such as periods or exclamation points.
- Use sentence-case capitalization (not title case or all caps).
- Use primary button as the main action; put tertiary as the second option.
- Use active verbs or phrases that clearly indicate action (avoid vague labels like "Yes" or "No").

## TextField

An input field includes a label and a text field users can type text into. They typically appear in forms and dialogs.

### Import

```js
import { TextField } from "@vibe/core";
```

### Usage

- Always use placeholder in input field.
- Icons can be used to message alerts as well. Pair them with error messages to provide redundant alerts.
- Character or word counters should be used if there is a character or word limit.

### Variants

**Sizes:** Small (32px), Medium (40px), Large (48px)

**States:** Default, Focus, Disabled, Error, Success

### Accessibility

- Using an `id` is highly recommended for all instances to ensure the best accessibility.
- Always provide a visible `title` or an `inputAriaLabel` to ensure the input's purpose is clear.
- When using `title` or validation text, you must also provide an `id`.
- For required fields, use the `required` prop.
- Provide descriptive error messages using `validation` prop with status 'error'.
- When using icons, provide meaningful labels through `iconsNames.primary` and `iconsNames.secondary` props.
- For search inputs, use `type='search'` and provide `searchResultsContainerId`.

### Best Practices

- Make sure your text field has a short, descriptive label above it.
- Avoid phrasing your labels as questions. Keep labels concise; reserve instructions for helper text.
- Use the help text description to convey requirements or show formatting examples.
- Avoid repeating the field label in help text if the label provides sufficient context.

## Dropdown (New)

Dropdown presents a list of options from which a user can select one or several.

### Import

```js
import { Dropdown } from "@vibe/core/next";
```

**Note:** Use the new Dropdown from `@vibe/core/next`, not the deprecated one from `@vibe/core`.

### Usage

- Dropdown menus are typically used when you have 5-8 items to choose from.
- Use a consistent size of form components on the same page.
- Avoid having multiple lines of text in a dropdown. If text is too long, add an ellipsis (…).
- When the menu is open, each option should be the same height as the field.
- When organizing dropdown menu items, sort the list logically by putting the most selected option at the top.

### Variants

**Sizes:** Small, Medium, Large

**States:** Default, Disabled, Readonly, Multi-select

### Accessibility

- Using an `id` is highly recommended for all instances.
- Always provide a `label` prop to ensure the dropdown's purpose is clear.
- Use `ariaLabel` prop when you need to provide a custom accessible name.
- Use `clearAriaLabel` prop when dropdown is clearable.
- Use `inputAriaLabel` prop for searchable dropdowns.
- Use `menuAriaLabel` prop for the dropdown menu.
- Use `autoFocus` prop when the dropdown should receive initial focus.

### Best Practices

- Use the dropdown as a closed component. Users should normally be allowed only to click on the items.
- Don't keep the dropdown component in open mode as permanent state. If this is required, consider using Combobox instead.

## Modal

Modals help users focus on a single task or piece of information by popping up and blocking the rest of the page's content.

### Import

```ts
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalMedia,
  ModalFooter,
  ModalFooterWizard,
  ModalBasicLayout,
  ModalSideBySideLayout,
  ModalMediaLayout,
} from "@vibe/core/next";
```

**Note:** Import Modal components from `@vibe/core/next`, not from `@vibe/core`.

### Usage

- Use modals only when you need the user's full, immediate attention.
- Modals are centered on the page. The rest of the page is dimmed to put the modal in focus.
- All modals must have a title, a call to action, and a close button.
- By default, users can close modals by clicking the close button, clicking outside the modal, or pressing ESC.

### Modal Structure

Always use the proper modal layout components:

**Basic Modal Layout:**

```jsx
<Modal onClose={handleClose}>
  <ModalBasicLayout>
    <ModalHeader title="Modal Title" description="Modal description" />
    <ModalContent>{/* Your content here - ModalContent includes default padding */}</ModalContent>
    <ModalFooter>
      <ButtonGroup>
        <Button kind="tertiary" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleSave}>Save</Button>
      </ButtonGroup>
    </ModalFooter>
  </ModalBasicLayout>
</Modal>
```

**Side-by-Side Modal Layout:**

```jsx
<Modal onClose={handleClose}>
  <ModalSideBySideLayout>
    <ModalHeader title="Modal Title" />
    <ModalContent>{/* Left side content */}</ModalContent>
    <ModalMedia>{/* Right side media content */}</ModalMedia>
    <ModalFooter>{/* Footer content */}</ModalFooter>
  </ModalSideBySideLayout>
</Modal>
```

**Media Modal Layout:**

```jsx
<Modal onClose={handleClose}>
  <ModalMediaLayout>
    <ModalHeader title="Modal Title" />
    <ModalMedia>{/* Media content at top */}</ModalMedia>
    <ModalContent>{/* Text content below media */}</ModalContent>
    <ModalFooter>{/* Footer content */}</ModalFooter>
  </ModalMediaLayout>
</Modal>
```

### Modal Types

**Basic Modal:** Intended for straightforward tasks, like selecting items or gathering basic information. Does not support images or videos.

**Side-by-Side Modal:** Offers two distinct sections - left for text/inputs, right for supporting visuals. Ideal when users need to reference media alongside information.

**Media Modal:** Includes a highlighted media section followed by text, perfect for grabbing attention with visuals. Ideal for introducing new features or onboarding.

### Padding and Spacing

- **ModalContent automatically includes padding** - You don't need to add extra padding to content inside `ModalContent`.
- **If wrapping content in Box inside ModalContent**, use minimal padding (xs or small) as `ModalContent` already provides base padding.
- **ModalHeader and ModalFooter** have their own internal padding - don't add extra padding to these components.
- **Form fields inside modals** should use consistent spacing (typically 16px gap between fields).
- **ModalFooter buttons** should use `ButtonGroup` for proper spacing (8px between buttons).
- **For custom layouts**, wrap content in `Box` with appropriate padding (typically `medium` or `large`).

### Accessibility

- **Scroll lock:** Prevents background content from scrolling while modal is open.
- **Focus lock:** Keeps focus within the modal elements, preventing tabbing outside.
- **ARIA attributes:** Using `ModalHeader` with string values for `title` and `description` automatically sets necessary ARIA attributes.
- **Manual ARIA:** If passing ReactNode as title/description, assign unique `id` and pass to Modal using `aria-labelledby` or `aria-describedby`.
- **Always provide a close button** - Users must be able to dismiss the modal.
- **Focus management:** Focus automatically moves to the first focusable element when modal opens and returns to trigger element when closed.

### Best Practices

- **Modal must include backdrop element** - Always use the backdrop prop or ensure backdrop is enabled.
- **Use proper layout components** - Always use `ModalBasicLayout`, `ModalSideBySideLayout`, or `ModalMediaLayout` instead of manually structuring modal content.
- **Keep modals focused** - Each modal should handle one task or decision. Don't create complex multi-step flows in a single modal.
- **Use Skeleton component if loading is needed** - Try to have actions appear immediately.
- **Don't use Loader component for necessary loading** - Use Skeleton for better UX.
- **Use one primary button as your main call to action** - For extra buttons use the tertiary button.
- **Don't use more than one primary button** - Only one primary action per modal.
- **Button placement** - Primary action should be on the right (in left-to-right languages), secondary/tertiary on the left.
- **Modal width** - Use default modal width unless content specifically requires more space. Don't make modals too wide (max recommended: 600px for basic modals).
- **Modal height** - Let content determine height, but ensure modals don't exceed viewport height. Use scrollable content if needed.
- **Loading states** - Show loading states within the modal content, not as a blocking loader.
- **Error handling** - Display errors within the modal content, not as separate modals.
- **Form validation** - Validate forms before submission. Show validation errors inline within the form.
- **Confirmation modals** - Use clear, action-oriented language. Make destructive actions clearly distinguishable.

## Menu

A menu is a navigable contextual list of items that can be selected.

### Import

```js
import { Menu } from "@vibe/core";
```

### Usage

- A menu offers a list of actions or functions that a user can access.
- Menu height is dynamic according to the content it contains and its location on the screen.
- Closing menus can be done by selecting a value or clicking anywhere outside the menu.
- Menu items can include icons, radio buttons, and checkboxes.
- If a menu dropdown contains a mix of links and buttons, separate them with a content divider with links at the top and buttons at the bottom.
- Menu should contain at least two menu items.

### Variants

**Sizes:** Small, Medium, Large

### Accessibility

- Provide an `id` for the Menu to enable proper accessibility associations.
- Use the `ariaLabel` prop to provide a meaningful accessible name.
- Use the `ariaDescribedBy` prop to link the menu to additional descriptive text.
- It is recommended to use `focusItemIndexOnMount={0}` to focus the first menu item when the menu opens.
- Ensure menu items have clear, descriptive text or use appropriate `ariaLabel` props on individual menu items.

### Best Practices

- Use menus for simple actions.
- Don't place a search component near menu for filter capability. Use Combobox instead.
- Keep to the default menu width.
- Don't change the width of the menu, only change the height.

## Table

Tables are used to organize data, making it easier to understand.

### Import

```js
import { Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell } from "@vibe/core";
```

### Usage

- Tables organize data in rows and columns for easy scanning and comparison.
- Use tables when you need to display structured data with multiple attributes.

### Variants

**Sizes:** Small (32px), Medium (40px), Large (48px)

**Borders:** With or without outer border. When using a table inside another component (like a modal), remove the outer border for a cleaner look.

### Best Practices

- If there's a need to insert an icon, use for all columns.
- Don't use icons if not applied to all column titles.
- If there's a need, remove only the outer border.
- Don't remove border between the rows.

## Tabs

Tabs allow users to navigate between related views of content while remaining in the context of the page.

### Import

```js
import { Tabs, TabPanel, TabPanels, TabList, Tab, TabsContext } from "@vibe/core";
```

### Usage

- Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.
- Align navigation tabs and content tabs left (in left-to-right languages) and never center within a page or content area.
- The first tab is selected by default. The default tab is the most important use case of the page.
- Stick to only one row of tabs.

### Variants

**Types:** Default (compact), Stretched, Stretched Underline

### Accessibility

- Provide an `id` for the `TabList` and individual `Tab` components.
- Ensure each `Tab` has clear, descriptive text content or appropriate icon with accessible name.
- Use the `tabPanelIds` prop in `TabList` to establish proper relationships between tabs and their corresponding tab panels.
- Provide unique `id` props for each `TabPanel`.

### Best Practices

- Use either all text labels, all icon labels, or both, across all labels.
- Don't mix tabs that contain only text with tabs that contain only icons.
- When there are too many tabs to fit horizontally, use a "More" dropdown.
- Do not cut the tabs name just to make them fit horizontally.

## Checkbox

Checkboxes allow users to select one or more items from a set of options.

### Import

```js
import { Checkbox } from "@vibe/core";
```

### Usage

- Use checkboxes to select one or more options from a list.
- Use checkboxes to turn an item on or off in a desktop environment.
- Use checkboxes independently from each other: selecting one checkbox shouldn't change the selection status of another checkbox in the list (except for bulk selection).
- Ensure both label and input are clickable to select the checkbox field.
- Keep a positive tone of voice. For example: "Turn on notifications" instead of "Turn off notifications".
- Checkboxes should be listed according to a logical order.
- Place checkboxes vertically, using 16px spacing.
- Checkbox will always appear with a label.

### Variants

**States:** Regular, Hover, Selected, Disabled, Indeterminate

### Accessibility

- Using an `id` is highly recommended for all instances.
- Always provide a visible `label` prop.
- It is recommended to use `separateLabel` mode for better screen reader support.
- Use `ariaLabel` prop when you need to provide a custom accessible name.
- Use `ariaLabelledBy` prop when the checkbox is described by external elements.
- Use `indeterminate` prop for mixed selection states.

### Best Practices

- Use checkboxes when one or more items can be selected.
- Don't use checkboxes when only one item can be selected from a list. Use radio buttons instead.
- Use the checkbox label's prop to describe the option purpose.
- Don't use a separate div which is not related to the Checkbox component.
- Place the checkbox on the left side of the label.
- Always keep a positive tone of voice.

## Box

Box component is used as a wrapper component for scaffolding compositions while using Vibe's prop keys without writing new CSS.

### Import

```js
import { Box } from "@vibe/core";
```

### Usage

- Use as a styled container.
- Use to add spacing, borders, and rounded corners to areas of content.
- Use as an inner component for spacing or styles.
- Prefer Box over custom CSS for styling containers.

### Utility Props

**Background Colors:** Use `backgroundColor` prop with semantic color tokens (e.g., `"primaryBackgroundColor"`, `"positiveSelected"`, `"negativeSelected"`).

**Text Colors:** Use `color` prop with text color tokens (e.g., `"primaryTextColor"`, `"secondaryTextColor"`).

**Border:** Use `border` prop (boolean) or `borderWidth` with size values.

**Border Color:** Use `borderColor` prop with color tokens.

**Rounded Corners:** Use `rounded` prop with size values (xs, small, medium, large).

**Shadow:** Use `shadow` prop with shadow level values.

**Margin:** Use `margin`, `marginX`, `marginY`, `marginTop`, `marginEnd`, `marginBottom`, `marginStart` props with spacing values (xs, small, medium, large, or custom px).

**Padding:** Use `padding`, `paddingX`, `paddingY`, `paddingTop`, `paddingEnd`, `paddingBottom`, `paddingStart` props with spacing values.

**Scrollable:** Use `scrollable` prop for scrollable containers.

### Examples

```jsx
// Container with border and padding
<Box border rounded="medium" padding="medium">
  Content here
</Box>

// Scrollable container
<Box scrollable height={400}>
  <Flex direction="column" gap="small">
    {items.map(item => <Item key={item.id} {...item} />)}
  </Flex>
</Box>

// Box with semantic background color
<Box backgroundColor="positiveSelected" padding="small" rounded="small">
  <Text>Success message</Text>
</Box>
```

## Flex

Use Flex component to position group of sub-elements in one dimension, horizontal or vertical, without being dependent on a custom CSS file.

### Import

```js
import { Flex } from "@vibe/core";
```

### Usage

- Use flex component whenever you want to define a layout with one dimension.
- Flex layout can be either horizontal or vertical.
- You can define the spacing between the layout children by using fixed sizes: xs (4px), small (8px), medium (16px), or large (24px).
- You can also use custom pixel values for gap (e.g., `gap={32}`).

### Variants

**Directions:** Row (horizontal, default), Column (vertical)

**Spacing:** xs (4px), small (8px), medium (16px), large (24px), or custom number in px

**Justify (horizontal alignment):** start, center, end, space-between, space-around, stretch

**Align (vertical alignment):** start, center, end, stretch, baseline

**Wrap:** Use `wrap` prop for multi-line layouts

### Flex Wrap - Responsive Multi-Line Layouts

Flex wrap allows items to wrap to multiple lines when they don't fit in a single row or column. This is essential for responsive layouts.

**When to Use Flex Wrap:**

- **Card grids** - When displaying multiple cards that should wrap to new rows
- **Tag lists** - When tags should wrap to multiple lines
- **Button groups** - When buttons should wrap on smaller screens
- **Responsive toolbars** - When toolbar items should wrap on mobile
- **Any collection** - When items need to flow naturally and wrap based on container width

**Flex Wrap Best Practices:**

- **Always use consistent gap** - Use `gap` prop to maintain spacing between wrapped items (both horizontal and vertical)
- **Set minimum item widths** - Use `minWidth` on child items to control when wrapping occurs
- **Use appropriate gap sizes** - Typically `small` (8px) or `medium` (16px) for wrapped layouts
- **Consider item sizing** - Items should have consistent or flexible widths for predictable wrapping
- **Test responsive behavior** - Ensure wrapping works well at different screen sizes

**Flex Wrap Examples:**

```jsx
// Card grid with wrapping
<Box padding="large">
  <Flex gap="medium" wrap>
    {cards.map(card => (
      <Box key={card.id} minWidth={280} maxWidth={400} flex="1 1 300px">
        <Card {...card} />
      </Box>
    ))}
  </Flex>
</Box>

// Tags/chips that wrap
<Flex gap="small" wrap>
  {tags.map(tag => (
    <Chip key={tag.id}>{tag.label}</Chip>
  ))}
</Flex>

// Responsive button group
<Flex gap="small" wrap>
  <Button>Primary Action</Button>
  <Button kind="secondary">Secondary</Button>
  <Button kind="tertiary">Tertiary</Button>
</Flex>

// Responsive toolbar
<Flex gap="medium" wrap align="center">
  <Search placeholder="Search..." />
  <ButtonGroup>
    <Button>Filter</Button>
    <Button>Sort</Button>
  </ButtonGroup>
  <Button>Export</Button>
</Flex>

// Form fields that wrap on mobile
<Flex direction="column" gap="medium">
  <Flex gap="medium" wrap>
    <Box flex="1 1 300px" minWidth={280}>
      <TextField title="First Name" />
    </Box>
    <Box flex="1 1 300px" minWidth={280}>
      <TextField title="Last Name" />
    </Box>
  </Flex>
</Flex>
```

**Flex Wrap with Item Sizing:**

```jsx
// Items with flexible sizing - will wrap when container is too narrow
<Flex gap="medium" wrap>
  {/* Each item takes equal space, minimum 250px, wraps when needed */}
  {items.map(item => (
    <Box key={item.id} flex="1 1 250px" minWidth={250}>
      <Item {...item} />
    </Box>
  ))}
</Flex>

// Fixed width items that wrap
<Flex gap="small" wrap>
  {badges.map(badge => (
    <Badge key={badge.id} style={{ width: 120 }}>
      {badge.label}
    </Badge>
  ))}
</Flex>
```

**Common Flex Wrap Patterns:**

- **Equal-width cards:** Use `flex="1 1 300px"` with `minWidth={300}` on each card
- **Fixed-width items:** Set explicit width on items, they'll wrap naturally
- **Responsive columns:** Use `flex="1 1 250px"` for items that should be 2-3 per row on desktop, 1 per row on mobile
- **Flexible grid:** Use `flex="1 1 auto"` with `minWidth` for items that grow/shrink but wrap when too narrow

### Examples

```jsx
// Horizontal toolbar
<Flex gap="small" justify="space-between" align="center">
  <Button>Action 1</Button>
  <Button>Action 2</Button>
</Flex>

// Vertical stack
<Flex direction="column" gap="medium">
  <Item1 />
  <Item2 />
</Flex>

// Centered content
<Flex justify="center" align="center">
  <Content />
</Flex>

// With custom gap
<Flex gap={32} direction="column">
  <Item1 />
  <Item2 />
</Flex>

// Wrapped layout - cards grid
<Box padding="large">
  <Flex gap="medium" wrap>
    {items.map(item => (
      <Box key={item.id} flex="1 1 300px" minWidth={280}>
        <Card {...item} />
      </Box>
    ))}
  </Flex>
</Box>
```

## Text

Text component is used for displaying text content with consistent typography.

### Import

```js
import { Text } from "@vibe/core";
```

### Usage

- Use Text component instead of raw HTML text elements for consistent typography.
- Choose appropriate text type (text1, text2, text3) based on hierarchy.
- Use appropriate weight (light, normal, medium, bold) for emphasis.

## Heading

Heading component is used for displaying headings with consistent typography.

### Import

```js
import { Heading } from "@vibe/core";
```

### Usage

- Use Heading component for all headings (h1, h2, h3).
- Choose appropriate heading type based on hierarchy (h1 for main titles, h2 for section titles, h3 for subsection titles).
- Use appropriate weight for emphasis.

## AlertBanner

Alert banners show pressing and high-signal messages, such as system alerts. They are meant to be noticed and prompt users to take action.

### Import

```js
import { AlertBanner, AlertBannerText, AlertBannerLink, AlertBannerButton } from "@vibe/core";
```

### Usage

- Alert banners should have a call for action and an option to dismiss.
- Don't include more than one call to action in an alert banner.
- Place the banner on the top of the screen, and push all other content below it.
- Use banners for system messages, background processes, and general updates.
- Don't use banners for notifying a user of an action they have taken. Instead, provide visual feedback with a Toast.

### Variants

**Types:** Primary, Positive, Negative, Warning, Inverted (dark)

**Components:**

- `AlertBannerText` - For the main message text
- `AlertBannerLink` - For link actions
- `AlertBannerButton` - For button actions

### Accessibility

- Use the `ariaLabel` prop to provide a descriptive accessible name for the banner.
- For dismissible AlertBanners, use the `closeButtonAriaLabel` prop for the close button.

### Best Practices

- Use banners for system messages, background processes, and general updates.
- Don't use banners for user action confirmations (use Toast instead).
- If two actions are needed, use two different call to actions (link and button).
- Don't include more than one action of the same type in an alert banner.
- Use only the 4 color types: primary, negative, positive, and inverted. Keep it consistent.

## AttentionBox

Attention boxes draw attention to important information or actions.

### Import

```js
import { AttentionBox } from "@vibe/core";
```

### Usage

- Use attention boxes to highlight important information that users should notice.
- Can include links or actions within the attention box.
- Use appropriate component type based on the importance and nature of the information.

## Avatar

Avatar is a graphical representation of a person through a profile picture, image, icon, or set of initials.

### Import

```js
import { Avatar } from "@vibe/core";
```

### Usage

- Use an avatar to help a user in the platform efficiently identify another person or a team.
- When there is no personal photo to show, use initials.
- If an image fails to load, fall back to the default user avatar.
- An avatar may contain a status icon to indicate a user's status (working from home, busy, etc.).
- Use a tooltip or dialog when hovering over the avatar to offer more information (e.g., person's name).

### Variants

**Sizes:** XS, Small, Medium, Large

**Types:**

- Image (`type="img"`) - For profile pictures
- Text (`type="text"`) - For initials
- Icon (`type="icon"`) - For icon avatars

**Shapes:** Circular (default), Square (for non-person avatars like workspaces or teams)

**States:** Regular, Disabled (for inactive users)

### Accessibility

- Always provide an `ariaLabel` prop to describe the person or entity represented by the avatar (e.g., "John Smith", "Design Team", "Guest User").
- Use the `role` prop when the avatar represents something other than a person (e.g., `role="img"` for team avatars, `role="button"` for clickable workspace avatars).
- For clickable avatars, ensure the `ariaLabel` describes the action that will occur when clicked.
- For avatars with badges (status indicators), ensure the `ariaLabel` includes relevant status information.

### Best Practices

- Use consistent avatar sizes for common use cases to convey their purpose.
- Avoid using a mix of avatar sizes that display together and create design imbalance.
- Use branded generic avatars when a user has not set their avatar image.
- Don't make assumptions and use gendered placeholder avatars.
- Use square avatars for non-person entities (workspaces, teams).

## Badge

Badge component is responsible for layout an indicator/counter on a child component.

### Import

```js
import { Badge, Indicator } from "@vibe/core";
```

### Usage

- Badge can be of type Indicator or type Counter.
- Use badges to display status indicators, counts, or labels on other components.
- Badges are small and unobtrusive.

### Variants

**Types:**

- **Indicator** - Small dot indicator for status
- **Counter** - Numeric count badge

**Alignments:**

- **RECTANGULAR** - Use when using Badge on a Button element to attach it to the element
- **CIRCULAR** - Use when using Badge on an Avatar element to attach it to the element
- **OUTSIDE** - Use when using Badge on an inline element to attach it to the element

**Anchors:** For circular badges, anchor at the top-right edge.

### Best Practices

- When using the badge on an inline component, apply OUTSIDE alignment to it.
- Do not leave the indicator inside the element boundaries.
- Choose a color that does not blend with the one of the child component.
- Do not use a color that blends with the child component.
- When using Indicator badge, anchor it at the top-right edge.
- Do not place it on any other edge.

## BreadcrumbsBar

Breadcrumbs provide navigation context and show the user's location in the hierarchy.

### Import

```js
import { BreadcrumbsBar } from "@vibe/core";
```

### Usage

- Use breadcrumbs to show navigation hierarchy.
- Help users understand where they are and navigate back.
- Keep breadcrumb labels concise.

## ButtonGroup

ButtonGroup component groups related buttons together with consistent spacing and alignment.

### Import

```js
import { ButtonGroup } from "@vibe/core";
```

### Usage

- Use ButtonGroup to group related buttons.
- Provides consistent spacing and alignment.
- Supports different alignment options (center, end, justify, stack).

## Chips

Chips allow users to enter information, make selections, filter content, or trigger actions.

### Import

```js
import { Chips } from "@vibe/core";
```

### Usage

- Use chips for tags, filters, or selections.
- Chips can be removable or read-only.
- Use appropriate colors to convey meaning.

## Combobox

Combobox combines an input field with a dropdown menu, allowing users to type to filter options.

### Import

```js
import { Combobox } from "@vibe/core";
```

### Usage

- Use combobox when users need to search and select from a list of options.
- Ideal for long lists where typing helps users find options quickly.
- Supports single and multi-select modes.

## Dialog

Dialog component displays modal dialogs for user interactions.

### Import

```js
import { Dialog } from "@vibe/core";
```

### Usage

- Use dialogs for focused user interactions.
- Dialogs block interaction with the rest of the page.
- Always provide a way to close the dialog (close button, ESC key, or clicking outside).

## Divider

Divider component creates visual separation between content sections.

### Import

```js
import { Divider } from "@vibe/core";
```

### Usage

- Use dividers to separate content sections.
- Can be horizontal or vertical.
- Use appropriate spacing around dividers.

## Icon

Icon component displays icons from the Vibe icon library. Always use icons from `@mondaydotcomorg/icons` package.

### Import

```js
import { Icon } from "@vibe/core";
import { Close, Search, Check } from "@mondaydotcomorg/icons";
```

### Usage

- **Always use icons from `@mondaydotcomorg/icons`** - Never use other icon libraries
- Always wrap icons with the `Icon` component for consistent styling
- Use icons to enhance visual communication
- Icons should have accessible labels when used alone (use `ariaLabel` prop)
- Use appropriate icon sizes based on context
- Icons inherit color from their parent container by default

### Examples

```jsx
// Basic icon usage
<Icon icon={Close} />

// Icon with size
<Icon icon={Search} iconSize={24} />

// Icon in button
<Button leftIcon={Check}>Save</Button>
```

## IconButton

IconButton is a button that contains only an icon.

### Import

```js
import { IconButton } from "@vibe/core";
import { Close, Edit, Delete } from "@mondaydotcomorg/icons";
```

### Usage

- Use icon buttons for compact actions.
- **Always use icons from `@mondaydotcomorg/icons`** - Never use other icon libraries
- Always provide an `ariaLabel` for icon-only buttons.
- Use appropriate sizes and variants.

### Examples

```jsx
<IconButton icon={Close} ariaLabel="Close dialog" />
<IconButton icon={Edit} ariaLabel="Edit item" />
<IconButton icon={Delete} ariaLabel="Delete item" />
```

## Link

Link component creates navigable links.

### Import

```js
import { Link } from "@vibe/core";
```

### Usage

- Use links for navigation to other pages or sections.
- Links should be clearly distinguishable from regular text.
- Use appropriate link styles (underline, color) based on context.

## List

List component displays a list of items.

### Import

```js
import { List, ListItem, ListItemAvatar, ListItemIcon, ListTitle } from "@vibe/core";
```

### Usage

- Use lists to display collections of related items.
- Lists can include avatars, icons, and titles.
- Maintain consistent spacing between list items.

### Sub-Components

- `List` - Main container component
- `ListItem` - Individual list item wrapper
- `ListItemAvatar` - Avatar within a list item
- `ListItemIcon` - Icon within a list item
- `ListTitle` - Title/heading for list sections

### Example

```jsx
import { List, ListItem, ListItemIcon, ListTitle, Text } from "@vibe/core";
import { User } from "@mondaydotcomorg/icons";

<List>
  <ListTitle text="Users" />
  <ListItem>
    <ListItemIcon icon={User} />
    <Text>John Doe</Text>
  </ListItem>
</List>;
```

## Loader

Loader component displays loading indicators.

### Import

```js
import { Loader } from "@vibe/core";
```

### Usage

- Use loaders to indicate that content is loading.
- Show loaders for async operations.
- Use appropriate loader sizes based on context.

## RadioButton

RadioButton allows users to select a single option from a set of options.

### Import

```js
import { RadioButton } from "@vibe/core";
```

### Usage

- Use radio buttons when only one option can be selected from a group.
- Radio buttons should be grouped together.
- Always provide labels for radio buttons.

## Search

Search component provides a search input field.

### Import

```js
import { Search } from "@vibe/core";
```

### Usage

- Use search components for filtering or finding content.
- Provide clear placeholder text.
- Show search results or feedback when appropriate.

## Skeleton

Skeleton component displays placeholder content while data is loading.

### Import

```js
import { Skeleton } from "@vibe/core";
```

### Usage

- Use skeletons to show loading states instead of spinners.
- Skeletons should match the shape and size of the content being loaded.
- Prefer skeletons over loaders for better perceived performance.

## Slider

Slider component allows users to select a value from a range.

### Import

```js
import { Slider } from "@vibe/core";
```

### Usage

- Use sliders for selecting numeric values within a range.
- Provide clear labels and value indicators.
- Support keyboard navigation for accessibility.

## Switch

Switch component allows users to toggle between two states.

### Import

```js
import { Switch } from "@vibe/core";
```

### Usage

- Use switches for binary on/off states.
- Provide clear labels indicating what the switch controls.
- Use switches instead of checkboxes for settings or preferences.

## TextArea

TextArea component provides a multi-line text input field.

### Import

```js
import { TextArea } from "@vibe/core";
```

### Usage

- Use text areas for longer text input (multiple lines).
- Provide appropriate placeholder text.
- Consider character limits and validation.

## Toast

Toast component displays temporary notification messages.

### Import

```js
import { Toast } from "@vibe/core";
```

### Usage

- Use toasts for temporary, non-blocking notifications.
- Toasts should auto-dismiss after a few seconds.
- Use appropriate toast types (success, error, warning, info).

## Tooltip

Tooltip component displays additional information on hover or focus.

### Import

```js
import { Tooltip } from "@vibe/core";
```

### Usage

- Use tooltips to provide additional context or information.
- Tooltips should be concise and helpful.
- Ensure tooltips are accessible via keyboard navigation.

## Toggle

Toggle component allows users to switch between two states.

### Import

```js
import { Toggle } from "@vibe/core";
```

### Usage

- Use toggles for binary on/off states in forms or settings.
- Provide clear labels indicating what the toggle controls.
- Ensure toggles are accessible via keyboard.
- When using Toggle without visible labels (e.g., inside cards, toolbars, or compact UI), use the `areLabelsHidden` prop to hide the default "On"/"Off" text labels. Always pair with an `ariaLabel` prop so the toggle remains accessible.

```jsx
// Toggle with visible labels (default)
<Toggle isSelected={isOn} onChange={setIsOn} />

// Toggle without visible labels (compact contexts)
<Toggle areLabelsHidden isSelected={isOn} onChange={setIsOn} ariaLabel="Enable feature" />
```

## ThemeProvider

ThemeProvider component enables theme switching and provides theme context to all child components.

### Import

```js
import { ThemeProvider } from "@vibe/core";
```

### Usage

- Wrap your application root with ThemeProvider to enable theming.
- Supports light, dark, black, and hacker themes.
- All components automatically inherit theme colors.

### Example

```jsx
import { ThemeProvider } from "@vibe/core";

<ThemeProvider theme="light">
  <App />
</ThemeProvider>;
```

## Accordion

Accordion is a vertically stacked list of items. Each item can be "expanded" or "collapsed" to reveal the content within.

### Import

```js
import { Accordion, AccordionItem } from "@vibe/core";
```

### Usage

- Use accordion to reduce clutter and chunk information one by one.
- Accordion label must be short, clear, and understandable to indicate what's inside.
- Default state of accordion is closed unless used for navigation.
- Accordion content can include icons, radio buttons, and checkboxes.

### Variants

**Multi Active:** Each section can be expanded without closing the others.

**Single Active:** Only one section can be open at a time.

### Accessibility

- Provide an `id` for the Accordion to enable proper accessibility associations.
- Provide unique `id` props for each AccordionItem.
- Use descriptive `title` props for AccordionItem headers.
- Use `defaultIndex` prop to set initial expanded states appropriately.

## AvatarGroup

Use AvatarGroup component if you need to stack avatars as a group.

### Import

```js
import { AvatarGroup } from "@vibe/core";
```

### Usage

- Use to display multiple avatars together.
- Shows a counter for additional avatars beyond the max displayed.
- Can be clickable (opens Menu) or hoverable (shows Tooltip).

### Variants

**Sizes:** XS, Small, Medium, Large

**Color Variants:** Light or Dark counter color

**Clickable vs. Hover:** Clickable avatars display via Menu, hoverable display in Tooltip.

### Accessibility

- Use `counterAriaLabel` prop to describe the counter (e.g., "3 additional team members").
- Ensure each Avatar in the group has a meaningful `ariaLabel` prop.

## EmptyState

An empty state component communicates to users that a particular section contains no data or content at the moment.

### Import

```js
import { EmptyState } from "@vibe/core";
```

### Usage

- Provide a clear and concise message that informs the user about the expected outcome.
- Handle errors and edge cases that might occur during data loading or rendering.
- Use to provide an initial state that prevents confusion when no data is available.

### Variants

**Layouts:** Default, Compact

**Actions:** Can include main action button, supporting action button, or link.

### Best Practices

- Provide clear guidance and an action to help users resolve the empty state.
- Offer clear next steps with supporting information when needed.
- Use appropriate layout (default or compact) based on available space.

## Steps

Steps display progress through a sequence of logical and numbered steps. They may also be used for navigation.

### Import

```js
import { Steps } from "@vibe/core";
```

### Usage

- The stepper shows users where they are in the process, and can be used to navigate through the process by selecting steps.
- If a task needs more than six steps, consider simplifying the process or breaking it up into multiple tasks.

### Variants

**Types:** Number view, Gallery view

**On Primary:** Can be displayed on primary color background.

### Best Practices

- Use steps with numbers type for use cases with more than 5 steps.
- Don't use the gallery type steps component for more than 5 steps.

## MultiStepIndicator

Tabular navigation component that helps users visualize and interact with a multi-step process.

### Import

```js
import { MultiStepIndicator } from "@vibe/core";
```

### Usage

- Use wizard to break a larger goal into manageable steps.
- If a workflow needs more than 6 steps, consider simplifying it or breaking it up into multiple tasks.
- Always position the wizard at the top of the multi-step process.

### Variants

**Placements:** Horizontal, Vertical

**Types:** Primary, Success, Danger, Dark

**Sizes:** Compact, Regular

### Best Practices

- Be consistent with the information you include under each step.
- Keep the default spacing between the wizard steps, even if the wizard width is smaller than the page width.

## NumberField

The NumberField component provides an accessible, strictly numeric input with built-in vertical stepper controls for incrementing or decrementing values.

### Import

```js
import { NumberField } from "@vibe/core";
```

### Usage

- Always pass both `value` and `onChange` props to use the component in controlled mode.
- Use `min`, `max`, and `step` to enforce value boundaries and configure stepping behavior.
- Use `allowOutOfBounds` when you want to allow users to enter invalid values and handle validation externally.
- Leverage validation states (`error`, `success`) with `infoText` to provide clear feedback.

### Variants

**Sizes:** Small (32px), Medium (40px), Large (48px)

**States:** Default, Success, Error, Disabled, Read-only

### Accessibility

- Using an `id` is highly recommended for all instances.
- Always provide a visible `label` or `aria-label`.
- When using `label` or `infoText`, you must also provide an `id`.

## DatePicker

A simple and reusable DatePicker component for selecting dates.

### Import

```js
import { DatePicker } from "@vibe/core";
```

### Usage

- Use for date selection in forms.
- Supports single date or date range selection.
- Can display multiple months.

### Variants

**Single Day:** Allows users to select a single date.

**Date Range:** Allows users to select a date range.

**Number of Months:** Can display one or multiple months.

## SplitButton

A split button is a dual-function menu button that offers a default action as well as the possibility of choosing a secondary action.

### Import

```js
import { SplitButton, SplitButtonMenu } from "@vibe/core";
```

### Usage

- Try limiting the overall number of choices within the menu to less than four.
- Order the items within the menu by popularity for a small number of items, or alphabetically for a larger number.
- Avoid submenus within split button menu.
- Split button contains two actions: One primary action and a list of secondary actions.

### Variants

**Types:** Primary, Secondary, Tertiary

**Sizes:** Small, Medium, Large

### Best Practices

- Use only one primary action within a single view.
- Use split button if there are more than one action within the menu.
- Don't use split button if there's only one option within the menu (use Button instead).
- Use a split button to display an action with related actions.

## LinearProgressBar

Progress bars show continuous progress through a process, such as a percentage value.

### Import

```js
import { LinearProgressBar } from "@vibe/core";
```

### Usage

- Give users an indication of how much of the task has been completed and how much is left.
- Use only when process has start and finish point.

### Variants

**Regular:** Standard progress bar.

**With Secondary Value:** Shows additional information.

**Multi Progress Bar:** Multiple progress bars stacked.

### Best Practices

- Use a progress bar only when process has start and finish point.
- Don't use an infinite scalable indicator (use Loader instead).

## MenuButton

MenuButton is a component that opens a Dialog next to a button, the content of the dialog could be anything you want.

### Import

```js
import { MenuButton } from "@vibe/core";
```

### Usage

- When you want to place content next to an element.
- When the content needs to be on top of adjacent content.

### Variants

**Sizes:** Small, Medium, Large

**With Text:** Can include text alongside icon.

**Custom Trigger:** Can use any element as a trigger.

### Accessibility

- Provide an `id` for the MenuButton.
- Use descriptive `ariaLabel` values.
- Use `ariaControls` prop to link the MenuButton to its menu content.

## Label

A label indicates the status of an item.

### Import

```js
import { Label } from "@vibe/core";
```

### Usage

- Label will always appear in context next to the item it classifies.
- Displays a short message like new, beta, coming soon, etc.
- Use only UI colors, not content colors (like status colors).

### Variants

**Kinds:** Line, Fill

**Sizes:** Small, Medium

**Colors:** Primary, Positive, Negative, Warning

**Clickable:** Can be clickable.

### Best Practices

- Use label to indicate the status of an item, for example: "New".
- Don't use the label component to indicate numbers (use Counter instead).
- Use label only once per item (use Chips for multiple labels).

## Info

An info component is a contextual container that provides supplemental information to help users understand related content.

### Import

```js
import { Info } from "@vibe/core";
```

### Usage

- Use to provide supplemental or explanatory context that supports, but is not essential to, task completion.
- Keep content informational, not instructional - avoid critical actions or blocking messages.
- Prefer when tooltips are too limited or the explanation requires paragraph-like text.

### Variants

**Directions:** Top, Bottom, Left, Right

### Accessibility

- Provide an `id` for the Info component.
- Provide an accessible name using `aria-label` prop.
- Use `aria-labelledby` prop when an external element provides the accessible name.

## Tipseen

Tipseen is a virtual unboxing experience that helps users get started with the system and discover new features.

### Import

```js
import { Tipseen, TipseenMedia, TipseenImage, TipseenContent, TipseenWizard } from "@vibe/core";
```

### Usage

- Use for onboarding screens, new features discovery, or any guidance a user needs.
- Use when the user is not yet familiar with the system's UI or ready to learn about it.
- The tip will appear until closed by an X button or call to action button.

### Variants

**Colors:** Inverted (default), Primary

**With Wizard:** Use when you want to teach something in steps.

**With Image:** Can include images or custom media.

### Best Practices

- Use inverted color for feature discovery or general guidance.
- Use primary color to bring attention to updates about your product offering.

## Counter

Counter component displays numeric counts or badges.

### Import

```js
import { Counter } from "@vibe/core";
```

### Usage

- Use to display numeric counts or quantities.
- Can be used with Badge component for visual indicators.

## EditableHeading

EditableHeading allows users to edit heading text inline.

### Import

```js
import { EditableHeading } from "@vibe/core";
```

### Usage

- Use when users need to edit headings directly in place.
- Provides inline editing functionality with proper validation.

## EditableText

EditableText allows users to edit text content inline.

### Import

```js
import { EditableText } from "@vibe/core";
```

### Usage

- Use when users need to edit text directly in place.
- Provides inline editing functionality.

## ExpandCollapse

ExpandCollapse component allows expanding and collapsing content sections.

### Import

```js
import { ExpandCollapse } from "@vibe/core";
```

### Usage

- Use for simple expand/collapse functionality.
- Similar to Accordion but for single sections.

## TextWithHighlight

TextWithHighlight component displays text with highlighted search terms.

### Import

```js
import { TextWithHighlight } from "@vibe/core";
```

### Usage

- Use to highlight search terms within text content.
- Useful for search results and filtered content.

## VirtualizedGrid

VirtualizedGrid component displays large datasets efficiently using virtualization.

### Import

```js
import { VirtualizedGrid } from "@vibe/core";
```

### Usage

- Use for displaying large amounts of data efficiently.
- Only renders visible items for better performance.

## VirtualizedList

VirtualizedList component displays large lists efficiently using virtualization.

### Import

```js
import { VirtualizedList } from "@vibe/core";
```

### Usage

- Use for displaying large lists efficiently.
- Only renders visible items for better performance.

## ColorPicker

ColorPicker component allows users to select colors.

### Import

```js
import { ColorPicker } from "@vibe/core";
```

### Usage

- Use for color selection in forms or settings.
- Supports various color formats and presets.

---

# Component Import Reference

## Main Package (`@vibe/core`)

Most components are available from the main package:

```js
import {
  Accordion,
  AlertBanner,
  AttentionBox,
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  BreadcrumbsBar,
  Button,
  ButtonGroup,
  Checkbox,
  Chips,
  Combobox,
  Counter,
  DatePicker,
  Dialog,
  Divider,
  Dropdown, // Deprecated - use from @vibe/core/next
  EditableHeading,
  EditableText,
  EmptyState,
  ExpandCollapse,
  Flex,
  Heading,
  Icon,
  IconButton,
  Info,
  Label,
  LinearProgressBar,
  Link,
  List,
  Loader,
  Menu,
  MenuButton,
  MultiStepIndicator,
  NumberField,
  RadioButton,
  Search,
  Skeleton,
  Slider,
  SplitButton,
  Steps,
  Switch,
  Table,
  Tabs,
  Text,
  TextArea,
  TextField,
  TextWithHighlight,
  ThemeProvider,
  Tipseen,
  Toast,
  Toggle,
  Tooltip,
  VirtualizedGrid,
  VirtualizedList
  // ... and more
} from "@vibe/core";
```

## Next Package (`@vibe/core/next`)

Newer components and updated versions are available from the next package:

```js
import {
  Dropdown, // New version
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalBasicLayout,
  ModalSideBySideLayout,
  ModalMediaLayout,
  AttentionBox // New version
} from "@vibe/core/next";
```

**Important:** Always check which package a component comes from. Newer components should be imported from `@vibe/core/next` to ensure you're using the latest version.

---

# Form Components Best Practices

## Form Layout

- Use consistent sizing for all form components on the same page.
- Group related form fields together.
- Use appropriate spacing between form fields (typically 16px or 24px).
- Provide clear labels for all form inputs.
- Use helper text to provide additional context or instructions.

## Form Validation

- Provide real-time validation feedback when possible.
- Use error states to clearly indicate validation issues.
- Provide helpful error messages that explain how to fix the issue.
- Use success states to confirm valid input.

## Required Fields

- Clearly indicate required fields (using asterisk or "required" text).
- Use the `required` prop on form components for proper accessibility.
- Don't make too many fields required - only mark truly necessary fields.

---

# Layout Best Practices

## Using Box and Flex

- **Box:** Use for containers that need spacing, borders, rounded corners, or background colors.
- **Flex:** Use for one-dimensional layouts (horizontal or vertical) with consistent spacing between children.
- **Always add padding to containers** - Use `Box` with `padding` prop (typically `medium` or `large` for page-level containers, `small` to `medium` for component containers).
- **Never create layouts without padding** - Content should never touch container edges. Always ensure adequate breathing room.

## Spacing Between Components

- Use consistent spacing tokens throughout your layout.
- **Always use spacing tokens** - In CSS use `var(--space-8)`, `var(--space-16)`, `var(--space-24)`, etc. In React props use `gap="small"`, `padding="medium"`, `margin="large"`, etc.
- Group related components with smaller spacing tokens (`gap="small"` or `gap="medium"`).
- Separate distinct sections with larger spacing tokens (`gap="large"` or `gap="xl"`).
- Use Flex component's `gap` prop for automatic spacing between children.

## Visual Design Principles

- Emphasize white space as a design element using spacing tokens
- Default to transparent/white backgrounds - avoid colored backgrounds unless grouping related content
- Use borders sparingly and functionally - prefer white space over borders when possible
- Let spacing tokens create visual separation (`gap="small"` for groups, `gap="large"` for sections)
- Use typography and spacing for hierarchy, not colors

## Responsive Considerations

- Design layouts that work across different screen sizes.
- Use Flex component's wrap mode for responsive layouts.
- Consider using different component sizes on mobile vs desktop.

---

# Accessibility Checklist

When building interfaces with Vibe components, ensure:

- ✅ All interactive elements have proper labels or ARIA labels
- ✅ Form inputs are properly associated with their labels (use `id` and `title` or `inputAriaLabel`)
- ✅ Keyboard navigation works for all interactive elements
- ✅ Focus indicators are visible and meet contrast requirements (3:1)
- ✅ Color contrast meets WCAG standards (4.5:1 for text, 3:1 for large text)
- ✅ Screen reader announcements are clear and helpful
- ✅ Error messages are accessible and descriptive
- ✅ Loading states are communicated to assistive technologies
- ✅ Modal dialogs properly trap focus and return focus on close
- ✅ Icons have text alternatives when used alone (use `ariaLabel`)
- ✅ Images have appropriate alt text (informative or decorative)
- ✅ Semantic HTML is used (headings, lists, landmarks)
- ✅ Heading hierarchy is logical (H1 → H2 → H3, no skipping)
- ✅ Reading order matches visual presentation
- ✅ Dynamic content changes are announced to screen readers
- ✅ Form validation errors are clearly associated with inputs
- ✅ Color is not the only means of conveying information

---

# Common Patterns

## Form with Validation

```jsx
<Box padding="medium">
  <TextField
    id="email"
    title="Email"
    placeholder="email@example.com"
    validation={{ status: "error", text: "Please enter a valid email" }}
  />
</Box>
```

## Button Group

```jsx
<ButtonGroup>
  <Button kind="tertiary">Cancel</Button>
  <Button>Save</Button>
</ButtonGroup>
```

## Modal with Form

```jsx
import {
  Modal,
  ModalBasicLayout,
  ModalHeader,
  ModalContent,
  ModalFooter,
  TextField,
  ButtonGroup,
  Button,
  Flex
} from "@vibe/core/next";

<Modal onClose={handleClose}>
  <ModalBasicLayout>
    <ModalHeader title="Edit Profile" description="Update your profile information" />
    <ModalContent>
      {/* ModalContent includes default padding, so no need to wrap in Box */}
      <Flex direction="column" gap="medium">
        <TextField id="name" title="Full Name" placeholder="Enter your name" />
        <TextField id="email" title="Email" placeholder="email@example.com" type="email" />
      </Flex>
    </ModalContent>
    <ModalFooter>
      <ButtonGroup>
        <Button kind="tertiary" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleSave}>Save</Button>
      </ButtonGroup>
    </ModalFooter>
  </ModalBasicLayout>
</Modal>;
```

## List with Icons

```jsx
<List>
  <ListItem>
    <ListItemIcon icon={Icon} />
    <Text>List item text</Text>
  </ListItem>
</List>
```

## Complete Form Example

```jsx
import { Box, Flex, TextField, Button, ButtonGroup, Checkbox } from "@vibe/core";
import { Save, Cancel } from "@mondaydotcomorg/icons";

<Box padding="large">
  <Flex direction="column" gap="medium">
    <TextField id="name" title="Full Name" placeholder="Enter your name" required />
    <TextField
      id="email"
      title="Email"
      placeholder="email@example.com"
      type="email"
      validation={{ status: "error", text: "Please enter a valid email" }}
    />
    <Checkbox id="terms" label="I agree to the terms and conditions" required />
    <ButtonGroup>
      <Button kind="tertiary" leftIcon={Cancel}>
        Cancel
      </Button>
      <Button leftIcon={Save}>Save</Button>
    </ButtonGroup>
  </Flex>
</Box>;
```

## Card Layout Pattern

```jsx
import { Box, Flex, Heading, Text, Button, Avatar } from "@vibe/core";
import { Edit } from "@mondaydotcomorg/icons";

<Box border rounded="medium" padding="medium" backgroundColor="secondaryBackgroundColor">
  <Flex justify="space-between" align="center" gap="small">
    <Flex gap="small" align="center">
      <Avatar src={userImage} ariaLabel="User name" />
      <Flex direction="column" gap="xs">
        <Heading type="h3">Card Title</Heading>
        <Text type="text2">Card description text</Text>
      </Flex>
    </Flex>
    <Button kind="tertiary" leftIcon={Edit}>
      Edit
    </Button>
  </Flex>
</Box>;
```

## Page Layout Pattern

```jsx
import { Box, Flex, Heading, Button, BreadcrumbsBar } from "@vibe/core";
import { Add } from "@mondaydotcomorg/icons";

<Box padding="large">
  <Flex direction="column" gap="large">
    {/* Breadcrumbs */}
    <BreadcrumbsBar items={breadcrumbItems} />

    {/* Header */}
    <Flex justify="space-between" align="center">
      <Heading type="h1">Page Title</Heading>
      <Button leftIcon={Add}>Add Item</Button>
    </Flex>

    {/* Content */}
    <Box>{/* Page content here */}</Box>
  </Flex>
</Box>;
```

## Loading State Pattern

```jsx
import { Box, Skeleton, Flex } from "@vibe/core";

// Use Skeleton instead of Loader for better UX
<Box padding="medium">
  <Flex direction="column" gap="small">
    <Skeleton width="60%" height={24} />
    <Skeleton width="100%" height={40} />
    <Skeleton width="80%" height={40} />
  </Flex>
</Box>;
```

## Error State Pattern

```jsx
import { Box, AlertBanner, AlertBannerText, AlertBannerButton } from "@vibe/core";
import { Refresh } from "@mondaydotcomorg/icons";

<AlertBanner backgroundColor="negative">
  <AlertBannerText text="Failed to load data. Please try again." />
  <AlertBannerButton leftIcon={Refresh} onClick={handleRetry}>
    Retry
  </AlertBannerButton>
</AlertBanner>;
```

## Empty State Pattern

```jsx
import { EmptyState, Button, Text } from "@vibe/core";
import { Add } from "@mondaydotcomorg/icons";

<EmptyState title="No items yet" subtitle="Get started by creating your first item" image={<EmptyStateImage />}>
  <Button leftIcon={Add}>Create Item</Button>
</EmptyState>;
```

---

# Component Relationships and Combinations

## Common Component Combinations

**Form Layout:**

- `Box` (container) → `Flex` (form layout) → `TextField`/`TextArea`/`Dropdown` → `ButtonGroup` (actions)

**Card Pattern:**

- `Box` (card container) → `Flex` (card layout) → `Avatar` + `Heading`/`Text` + `Button`

**Modal Pattern:**

- `Modal` → `ModalHeader` → `ModalContent` → `ModalFooter` → `ButtonGroup`

**List Pattern:**

- `List` → `ListItem` → `ListItemIcon`/`ListItemAvatar` + `Text`/`Heading`

**Page Layout:**

- `Box` (page container) → `Flex` (column) → `BreadcrumbsBar` + `Flex` (header) + `Box` (content)

## Component Hierarchy Best Practices

- Always wrap content in `Box` or `Flex` for proper spacing
- Use `Flex` for one-dimensional layouts (toolbars, stacks)
- Use `Box` for containers that need borders, backgrounds, or padding
- Nest `Flex` inside `Box` for complex layouts
- Use `ButtonGroup` to group related buttons
- Use `List` for collections of similar items
- Use `Table` for structured data display

# Troubleshooting Common Issues

## Import Errors

**Problem:** Component not found

- **Solution:** Check if component is in `@vibe/core` or `@vibe/core/next`
- Newer components (Modal, Dropdown, AttentionBox) are in `@vibe/core/next`

**Problem:** Icon not found

- **Solution:** Ensure importing from `@mondaydotcomorg/icons`, not other libraries
- Icons are PascalCase (e.g., `Close`, `Search`, `ArrowRight`)

## Layout Issues

**Problem:** Components not aligning properly

- **Solution:** Use `Flex` with appropriate `justify` and `align` props
- Check spacing with `gap` prop

**Problem:** Spacing looks inconsistent

- **Solution:** Use spacing tokens (xs, small, medium, large) instead of arbitrary values
- Ensure consistent spacing throughout the page

## Styling Issues

**Problem:** Custom styles not working

- **Solution:** Use `Box` and `Flex` props instead of custom CSS
- Use design system tokens for colors, spacing, shadows

**Problem:** Colors not appearing correctly

- **Solution:** Check if using semantic colors (for UI) vs content colors (for data only)
- Ensure ThemeProvider is wrapping the app

## Accessibility Issues

**Problem:** Screen reader not announcing content

- **Solution:** Add `id`, `ariaLabel`, or `title` props
- Ensure proper label associations for form inputs

**Problem:** Keyboard navigation not working

- **Solution:** Ensure all interactive elements are keyboard accessible
- Check focus management for modals and dialogs

# Additional Resources

For more detailed information about components, refer to:

- Storybook documentation: Each component has comprehensive documentation with examples
- Component MDX files: Located in `packages/core/src/components/[ComponentName]/__stories__/[ComponentName].mdx`
- Design system foundations: Typography, Colors, Spacing, Shadows documentation
- Vibe Storybook: [vibe.monday.com](https://vibe.monday.com)

---

# Notes for AI

## Critical Rules

- Always use the correct import path (`@vibe/core` vs `@vibe/core/next`)
- **Always use icons from `@mondaydotcomorg/icons`** - Never use other icon libraries (Font Awesome, Material Icons, etc.)
- Always wrap icons with the `Icon` component from `@vibe/core`
- Use `Box` and `Flex` for all layout needs - avoid custom CSS
- Use semantic colors for UI elements, content colors ONLY for data visualization
- Always provide accessibility attributes (`id`, `ariaLabel`, `title`, etc.)

## Code Generation Guidelines

- Use TypeScript for type safety
- Import components at the top of the file
- Use functional components with hooks
- Provide proper prop types and default values
- Follow React best practices (keys for lists, proper event handlers)
- Use consistent spacing tokens throughout
- Group related components together
- Use appropriate component sizes consistently

## Common Mistakes to Avoid

- ❌ Using raw HTML <button> elements instead of Button / IconButton from @vibe/core
- ❌ Using other icon libraries instead of `@mondaydotcomorg/icons`
- ❌ Using custom CSS instead of Box/Flex components
- ❌ Creating layouts without padding
- ❌ Using content colors for UI elements (buttons, alerts, etc.)
- ❌ Changing content color names (converting underscores to dashes or vice versa)
- ❌ Missing accessibility attributes (id, ariaLabel, etc.)
- ❌ Inconsistent spacing (use spacing tokens, not arbitrary values)
- ❌ Mixing component sizes on the same page
- ❌ Using deprecated components (check if component is in `@vibe/core/next`)
- ❌ Forgetting to wrap icons with Icon component
- ❌ Using absolute positioning when flexbox/grid would work
- ❌ Not providing labels for form inputs
- ❌ Overusing shadows or using inconsistent shadow levels
- ❌ Overusing colored backgrounds and surfaces
- ❌ Creating visual hierarchy with colors instead of typography/spacing tokens
- ❌ Cramped spacing and layouts (use appropriate spacing tokens)
- ❌ Inconsistent spacing throughout the interface (use spacing tokens consistently)
- ❌ **Using pixel values for spacing instead of spacing tokens** (`gap={16}` instead of `gap="medium"`, `padding={24}` instead of `padding="large"`, `margin: 16px` instead of `margin: var(--space-16)`)
- ❌ Using shadows and borders decoratively instead of functionally
- ❌ Using `Toggle` without `areLabelsHidden` in compact contexts (cards, toolbars, table rows) — always hide labels and provide `ariaLabel` instead

## Component Selection Guide

**For Forms:**

- Text input: `TextField`
- Multi-line text: `TextArea`
- Number input: `NumberField`
- Date selection: `DatePicker`
- Single select: `Dropdown` (from `@vibe/core/next`)
- Multi-select: `Dropdown` with multi-select or `Combobox`
- Search: `Search` or `Combobox`
- Checkbox: `Checkbox`
- Radio: `RadioButton`
- Toggle: `Toggle` or `Switch`
- Color selection: `ColorPicker`

**For Actions:**

- Primary action: `Button` (kind="primary")
- Secondary action: `Button` (kind="secondary")
- Tertiary action: `Button` (kind="tertiary")
- Icon-only action: `IconButton`
- Multiple actions: `ButtonGroup`
- Split action: `SplitButton`
- Menu button: `MenuButton`

**For Feedback:**

- Success/Error messages: `AlertBanner` or `Toast`
- Important info: `AttentionBox`
- Loading: `Skeleton` (preferred) or `Loader`
- Progress: `LinearProgressBar`
- Tooltips: `Tooltip` or `Tipseen`
- Supplemental info: `Info`
- Empty states: `EmptyState`

**For Layout:**

- Container: `Box`
- One-dimensional layout: `Flex`
- Responsive multi-line layout: `Flex` with `wrap` prop
- Two-dimensional grid: CSS Grid (for precise control) or `Flex` with wrap (for flexible flow)
- Complex dashboard layouts: CSS Grid with `gridTemplateColumns` and `gridTemplateRows`
- Scrollable list: `VirtualizedList` or `List` with `Box scrollable`
- Large datasets: `VirtualizedGrid` or `VirtualizedList`

**For Navigation:**

- Breadcrumbs: `BreadcrumbsBar`
- Tabs: `Tabs`
- Menu: `Menu` or `MenuButton`
- Steps: `Steps` or `MultiStepIndicator`
- Accordion: `Accordion`
- Expand/Collapse: `ExpandCollapse`

## TypeScript Best Practices

- Import types when available: `import type { ButtonProps } from "@vibe/core"`
- Use proper event handler types: `onClick: (e: React.MouseEvent) => void`
- Provide proper types for form values and state
- Use const assertions for arrays when appropriate
- Leverage TypeScript's type inference for props