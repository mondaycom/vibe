# Storybook Code Examples

## Sizes

```tsx
<>
      <Search placeholder="Small" size="small" />
      <Search placeholder="Medium" size="medium" />
      <Search placeholder="Large" size="large" />
    </>
```

## WithAdditionalAction

```tsx
<Search placeholder="Search with icon" renderAction={<IconButton icon={FilterIcon} ariaLabel="Filter results" size="small" />} />
```

## FilterInCombobox

```tsx
<Combobox placeholder="Placeholder text here" options={options} size="small" optionLineHeight={28} />
```

