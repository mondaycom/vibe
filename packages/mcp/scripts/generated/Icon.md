# Storybook Code Examples

## VibeIcon

```tsx
<Icon iconType="svg" icon={Bolt} iconLabel="my bolt svg icon" iconSize={16} />
```

## FontIcon

```tsx
<Icon iconType="font" iconLabel="my font awesome start icon" icon="fa fa-star" />
```

## CustomSvg

```tsx
<Icon iconType="src" icon="https://cdn.monday.com/images/apps/custom-icons/Form.svg" iconLabel="my src awesome icon" className="icon-story-custom-icon" useCurrentColor />
```

## Color

```tsx
<div style={{
  color: "var(--sb-color-sofia_pink)"
}}>
      <Icon iconType="svg" icon={Bolt} iconLabel="my bolt svg icon" iconSize={16} />
    </div>
```

