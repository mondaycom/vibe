# Storybook Code Examples

## Kinds

```tsx
<div style={{
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%"
}}>
      <IconButton icon={Bolt} kind="primary" ariaLabel="My primary IconButton" />
      <IconButton icon={Bolt} kind="secondary" ariaLabel="My secondary IconButton" />
      <IconButton icon={Bolt} kind="tertiary" ariaLabel="My tertiary IconButton" />
    </div>
```

## Sizes

```tsx
<div style={{
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%"
}}>
      <IconButton key="xxs" icon={Robot} kind="secondary" size="xxs" ariaLabel="My xxs IconButton" />
      <IconButton key="xs" icon={Robot} kind="secondary" size="xs" ariaLabel="My xs IconButton" />
      <IconButton key="small" icon={Robot} kind="secondary" size="small" ariaLabel="My small IconButton" />
      <IconButton key="medium" icon={Robot} kind="secondary" size="medium" ariaLabel="My medium IconButton" />
      <IconButton key="large" icon={Robot} kind="secondary" size="large" ariaLabel="My large IconButton" />
    </div>
```

## Active

```tsx
<div style={{
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%"
}}>
      <IconButton icon={Doc} kind="primary" ariaLabel="My small active IconButton" active />
      <IconButton icon={Doc} kind="secondary" ariaLabel="My active medium IconButton" active />
      <IconButton icon={Doc} kind="tertiary" ariaLabel="My active large IconButton" active />
    </div>
```

## Disabled

```tsx
<div style={{
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%"
}}>
      <IconButton icon={Doc} kind="primary" ariaLabel="My small disabled IconButton" disabled disabledReason="This function is not available" />
      <IconButton icon={Doc} kind="secondary" ariaLabel="My disabled medium IconButton" disabled disabledReason="This function is not available" />
      <IconButton icon={Doc} kind="tertiary" ariaLabel="My disabled large IconButton" disabled disabledReason="This function is not available" />
    </div>
```

## Icon button as toolbar button

```tsx
<Box border rounded="medium" style={{
  width: "50%"
}}>
      <Flex direction="column" align="start">
        <Flex gap="small" style={{
      padding: "var(--sb-spacing-small)"
    }}>
          <Icon icon={Drag} />
          <Text type="text1">Widget name</Text>
          <IconButton icon={Filter} ariaLabel="Filter the widget by everything" size="small" />
        </Flex>
        <Divider withoutMargin />
        <div style={{
      height: "200px",
      width: "100%",
      backgroundColor: "var(--sb-primary-background-hover-color)"
    }} />
      </Flex>
    </Box>
```

## Icon button as close button

```tsx
<Flex gap="medium" style={{
  width: "100%"
}}>
      <Box border rounded="small" paddingX="large" style={{
    width: "100%"
  }}>
        <Flex justify="start" gap="large" style={{
      height: "94px"
    }}>
          <Flex direction="column" justify="center" style={{
        color: "var(--sb-icon-color)"
      }}>
            <Icon icon={Item} iconSize={40} />
            <Text type="text1" id="monday-recycle-bin-title">
              Item
            </Text>
          </Flex>
          <Divider direction="vertical" />
          <Avatar size="large" src={person1} type="img" />
          <Flex direction="column" align="start" ariaLabelledby="monday-recycle-bin-title" style={{
        flexGrow: 1
      }}>
            <Flex gap="xs">
              <Link withoutSpacing href="">
                Hadas Farhi
              </Link>
              <span>deleted the item</span>
              <Text type="text1" element="span" weight="medium">
                Hello World
              </Text>
              <span>from the board</span>
            </Flex>
            <Text type="text1" element="span" weight="medium">
              Tasks
            </Text>
            <Flex gap="xs">
              <Icon icon={Time} />
              <Text weight="medium">13m</Text>
              <Text>(Available for restore in the next 1M)</Text>
            </Flex>
          </Flex>
          <Button>Restore</Button>
        </Flex>
      </Box>
      <IconButton icon={CloseSmall} size="small" ariaLabel="Remove from Recycle bin" />
    </Flex>
```

