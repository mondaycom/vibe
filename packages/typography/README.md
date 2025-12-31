# @vibe/typography

Typography components for the Vibe Design System, including `Text` and `Typography` components.

## Installation

```bash
npm install @vibe/typography
# or
yarn add @vibe/typography
```

## Components

### Text

A text component with predefined typography styles.

```tsx
import { Text } from '@vibe/typography';

<Text type="text1" weight="bold" color="primary">
  Hello World
</Text>
```

**Props:**
- `type`: `"text1" | "text2" | "text3"` - Text style variant
- `weight`: `"bold" | "medium" | "normal"` - Font weight
- `color`: Typography color (inherited from Typography)
- `align`: Text alignment (inherited from Typography)
- `ellipsis`: Enable text truncation with ellipsis
- `maxLines`: Maximum number of lines before truncating

### Typography

A low-level typography component for custom text styling.

```tsx
import { Typography } from '@vibe/typography';

<Typography element="p" color="secondary" align="center">
  Custom text
</Typography>
```

**Props:**
- `element`: HTML element tag (default: `"span"`)
- `color`: `"primary" | "secondary" | "onPrimary" | "onInverted" | "fixedLight" | "fixedDark" | "inherit" | "negative"`
- `align`: `"start" | "center" | "end" | "inherit"`
- `ellipsis`: Enable text truncation
- `maxLines`: Maximum lines before truncation
- `tooltipProps`: Props for the overflow tooltip
- `withoutTooltip`: Disable the overflow tooltip

## Exports

```tsx
// Components
export { Text, Typography }

// Types
export type { TextProps, TextType, TextWeight }
export type { TypographyProps, TypographyColor, TypographyAlign }

// Enums (deprecated)
export { TextTypeEnum, TextWeightEnum }
export { TypographyColorEnum, TypographyAlignEnum }

// Context
export { TypographyContext }
```

## License

MIT

