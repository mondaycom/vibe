---
paths:
  - "packages/core/src/components/**/*.tsx"
  - "packages/components/**/*.tsx"
---

# React Component Structure

## Required Patterns

```typescript
import React, { forwardRef } from "react";
import cx from "classnames";
// ... other imports
import { MyComponentProps } from "./MyComponent.types";
import styles from "./MyComponent.module.scss"; // ALWAYS LAST

const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, id, "data-testid": dataTestId, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(styles.component, className)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentVibeId.MY_COMPONENT, id)}
        data-vibe={ComponentVibeId.MY_COMPONENT} // REQUIRED
        {...props}
      >
        {/* Content */}
      </div>
    );
  }
);

export default MyComponent;
```

## Import Order (Required)

1. React imports
2. Third-party libraries (`cx`, etc.)
3. Vibe libraries (`@vibe/icons`)
4. Internal utilities (`../../hooks/`)
5. Type imports
6. **Styles ALWAYS LAST**

## Required Elements

- **forwardRef pattern**
- **`[data-vibe]` attribute** with ComponentVibeId enum
- **Extend VibeComponentProps** in types file
- **Types in separate `.types.ts` file**
- **CSS Modules import as `styles`**

## Dismissible Pattern

For components that can be closed:

```typescript
// Use onClose as both handler and boolean indicator
{onClose && <IconButton icon={CloseIcon} onClick={onClose} />}
```

Don't add separate `dismissible` props.