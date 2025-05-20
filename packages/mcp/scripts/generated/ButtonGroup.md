# Storybook Code Examples

## Default

```tsx
<ButtonGroup groupAriaLabel="button group aria label" value={1} options={[{
  value: 1,
  text: "Alpha"
}, {
  value: 2,
  text: "Beta"
}, {
  value: 3,
  text: "Gamma"
}, {
  value: 4,
  text: "Delta"
}]} />
```

## Tertiary

```tsx
<ButtonGroup groupAriaLabel="button group aria label" value={1} kind={ButtonGroup.kinds.TERTIARY} options={[{
  value: 1,
  text: "Alpha"
}, {
  value: 2,
  text: "Beta"
}, {
  value: 3,
  text: "Gamma"
}, {
  value: 4,
  text: "Delta"
}]} />
```

## Disabled

```tsx
<ButtonGroup disabled groupAriaLabel="button group aria label" options={[{
  value: 1,
  text: "Alpha"
}, {
  value: 2,
  text: "Beta"
}, {
  value: 3,
  text: "Gamma"
}, {
  value: 4,
  text: "Delta"
}]} />
```

## Disabled - Singe Button

```tsx
<ButtonGroup groupAriaLabel="button group aria label" options={[{
  value: 1,
  text: "Alpha"
}, {
  value: 2,
  text: "Beta"
}, {
  value: 3,
  text: "Gamma"
}, {
  value: 4,
  text: "Delta",
  disabled: true,
  tooltipContent: "I'm the worst variant ever"
}]} />
```

## Size

```tsx
<>
      <div className="monday-storybook-button-group_column">
        <Text type={Text.types.TEXT1}>Medium</Text>
        <ButtonGroup groupAriaLabel="button group aria label" size={ButtonGroup.sizes.MEDIUM} value={1} options={[{
      value: 1,
      text: "Alpha"
    }, {
      value: 2,
      text: "Beta"
    }, {
      value: 3,
      text: "Gamma"
    }, {
      value: 4,
      text: "Delta"
    }]} />
      </div>
      <div className="monday-storybook-button-group_column">
        <Text type={Text.types.TEXT1}>Small</Text>
        <ButtonGroup groupAriaLabel="button group aria label" size={ButtonGroup.sizes.SMALL} value={1} options={[{
      value: 1,
      text: "Alpha"
    }, {
      value: 2,
      text: "Beta"
    }, {
      value: 3,
      text: "Gamma"
    }, {
      value: 4,
      text: "Delta"
    }]} />
      </div>
    </>
```

## Button group in settings

```tsx
<div className="monday-storybook-button-group_column">
      <Text type={Text.types.TEXT1}>Function</Text>
      <ButtonGroup groupAriaLabel="button group aria label" size={ButtonGroup.sizes.SMALL} value={1} options={[{
    value: 1,
    text: "Sum"
  }, {
    value: 2,
    text: "Average"
  }, {
    value: 3,
    text: "Median"
  }, {
    value: 4,
    text: "Min"
  }]} />
    </div>
```

## Button group as toggle

```tsx
<ButtonGroup groupAriaLabel="button group aria label" value={1} options={[{
  value: 1,
  text: "Grid"
}, {
  value: 2,
  text: "List"
}]} />
```

## Full width button group

```tsx
<div className="monday-storybook-button-group-full-width">
      <ButtonGroup groupAriaLabel="Full Width Button Group" fullWidth value={1} options={[{
    value: 1,
    text: "Grid"
  }, {
    value: 2,
    text: "List"
  }, {
    value: 3,
    text: "Table"
  }, {
    value: 4,
    text: "Masonry"
  }]} />
    </div>
```

