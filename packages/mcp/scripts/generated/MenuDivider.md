# Storybook Code Examples

## Menu with divider

```tsx
<div style={{
  width: 200
}}>
      <Menu>
        <MenuItem title="Menu item 1" />
        <MenuDivider />
        <MenuItem title="Menu item 2" />
      </Menu>
    </div>
```

## Sub menu with divider

```tsx
<div style={{
  width: 200,
  height: 90
}}>
      <Menu>
        <MenuItem title="Item with sub menu">
          <Menu>
            <MenuItem title="Item 1" />
            <MenuDivider />
            <MenuItem title="Item 2" />
          </Menu>
        </MenuItem>
      </Menu>
    </div>
```

