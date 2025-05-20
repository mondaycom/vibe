# Storybook Code Examples

## Sizes

```tsx
<>
      <MenuButton size="xxs">
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>
      <MenuButton size="xs">
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>
      <MenuButton size="small">
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>
      <MenuButton size="medium">
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>
      <MenuButton size="large">
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>
    </>
```

## DifferentIcon

```tsx
<MenuButton component={MoveArrowDown}>
      <Menu id="menu" size={Menu.sizes.MEDIUM}>
        <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
        <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
        <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
      </Menu>
    </MenuButton>
```

## WithText

```tsx
<div style={{
  width: 200
}}>
      <MenuButton text="Open">
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>
    </div>
```

## With Text and Icon at the end

```tsx
<div style={{
  width: 200
}}>
      <MenuButton text="Open" component={DropdownChevronDown} componentPosition="end">
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>
    </div>
```

## Disabled

```tsx
<MenuButton disabled tooltipContent="This action is not available now">
      <Menu id="menu" size={Menu.sizes.MEDIUM}>
        <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
        <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
        <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
      </Menu>
    </MenuButton>
```

## CustomTriggerElement

```tsx
const ref = useRef(null);
return <MenuButton triggerElement={props => <Button kind="secondary" {...props} className={""} ref={ref}>
            Button
          </Button>}>
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>;
```

