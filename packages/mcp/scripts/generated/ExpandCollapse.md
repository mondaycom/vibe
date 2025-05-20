# Storybook Code Examples

## OpenByDefault

```tsx
<ExpandCollapse title="Open by default" defaultOpenState className={styles.storybookExpandCollapse}>
      <Text type="text2" maxLines={2}>
        Insert here any component that you want
      </Text>
    </ExpandCollapse>
```

## ControlledOpenState

```tsx
const [open, setOpen] = useState(false);
return <Flex direction="row" gap="large" align="start">
        <ExpandCollapse title="Controlled open state" open={open} onClick={() => setOpen(prevState => !prevState)} className={styles.storybookExpandCollapse}>
          <Text type="text2" maxLines={2}>
            Insert here any component that you want
          </Text>
        </ExpandCollapse>
      </Flex>;
```

## CustomHeaderRenderer

```tsx
const ExpandCollapseCustomHeadingComponent = () => {
  return <Heading type="h3">Any component you want</Heading>;
};
return <ExpandCollapse headerComponentRenderer={ExpandCollapseCustomHeadingComponent} className={styles.storybookExpandCollapse}>
        <Text type="text2" maxLines={2}>
          Insert here any component that you want
        </Text>
      </ExpandCollapse>;
```

## WithoutBorders

```tsx
<ExpandCollapse hideBorder title="Without borders" className={styles.storybookExpandCollapse}>
      <Text type="text2" maxLines={2}>
        Insert here any component that you want
      </Text>
    </ExpandCollapse>
```

