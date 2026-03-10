# @ezds/icons

This package includes all of the icons of EZCORP's [EZDS Design System](https://design.ezcorp.com/?path=/story/media-icon--icons-list-story), available as React components and raw SVGs and with lazy loading support for optimized performance and flexible usage in your projects.


## Installation

To install, use the following command:

```bash
npm install @ezds/icons
```

## Usage

#### Using React Components

```javascript
import { Close } from "@ezds/icons";
```

#### Using Lazy React Components

```javascript
import { Close } from "@ezds/icons/lazy";
```

#### Using Raw SVG Files

```javascript
import { Close as CloseSvg } from "@ezds/icons/raw";
```

#### Using Meta Information

The meta export provides detailed metadata for each icon, including:

- `name`: The name of the icon.
- `file`: The SVG file name.
- `description`: A description of the icon's purpose or usage.
- `tags`: Associated tags as a comma-separated string.

This metadata can be used to programmatically work with icons, such as building custom icon pickers or managing icons in your project.

```javascript
import iconsMetaData from "@ezds/icons/meta";
```

### Using Type-Safe Icon Names

For TypeScript users, the types export provides type-safe icon names:

```typescript
import type { IconName } from "@ezds/icons/types";

// Type-safe props
interface IconButtonProps {
  icon: IconName; // Autocomplete works!
}
```

## Peer dependencies

We are reliant on React and React DOM, we are using them as externals, and we don't package them to the package, so you must have them in your project
