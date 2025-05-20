# Storybook Code Examples

## Overview

```tsx
clickableTemplate = (args: ClickableProps) => {
  return <Clickable className="monday-story-clickable_first-element" onClick={() => alert("clicked")} {...args}>
      <div>I act like a button</div>
    </Clickable>;
}
```

## States

```tsx
<Flex gap="medium">
      <Clickable className="monday-story-clickable_first-element" onClick={() => alert("clicked")} ariaLabel="clickable button">
        <div>Regular clickable element</div>
      </Clickable>
      <Clickable className="monday-story-clickable_disabled-element" onClick={() => alert("clicked")} disabled ariaLabel="disabled clickable button">
        <div>Disabled clickable element</div>
      </Clickable>
    </Flex>
```

