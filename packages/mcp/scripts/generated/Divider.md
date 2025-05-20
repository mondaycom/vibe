# Storybook Code Examples

## Overview

```tsx
dividerTemplate = (args: DividerProps) => <div style={{
  width: "400px",
  height: "40px"
}}>
    <Divider {...args} />
  </div>
```

## Directions

```tsx
<div style={{
  display: "flex",
  flexDirection: "column",
  width: "400px"
}}>
      <div style={{
    display: "flex",
    alignItems: "center",
    height: 40
  }}>
        <span style={{
      marginRight: "var(--sb-spacing-large)",
      alignSelf: "center"
    }}>
          Horizontal
        </span>
        <Divider direction="horizontal" />
      </div>
      <div style={{
    display: "flex",
    alignItems: "center",
    height: 200
  }}>
        <span style={{
      marginRight: "var(--sb-spacing-large)",
      alignSelf: "center"
    }}>
          Vertical
        </span>
        <Divider direction="vertical" />
      </div>
    </div>
```

