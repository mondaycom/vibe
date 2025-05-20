# Storybook Code Examples

## States

```tsx
<>
      <ListItem>Default state</ListItem>
      <ListItem disabled>Disabled state</ListItem>
      <ListItem selected>Selected state</ListItem>
    </>
```

## Sizes

```tsx
<>
      <ListItem size="small">Small item</ListItem>
      <ListItem size="medium">Medium item</ListItem>
      <ListItem size="large">Large item</ListItem>
    </>
```

## List item with an icon

```tsx
<>
      <ListItem>
        <ListItemIcon icon={Send} />
        Productivity
      </ListItem>
    </>
```

## List item with an avatar

```tsx
<ListItem>
      <ListItemAvatar src={person1} />
      Sophia Johnson
    </ListItem>
```

