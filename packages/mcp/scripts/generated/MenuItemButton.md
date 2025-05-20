# Storybook Code Examples

## States

```tsx
[<Menu key="Primary">
      <MenuItemButton kind="primary">Primary</MenuItemButton>
    </Menu>, <Menu key="Secondary">
      <MenuItemButton kind="secondary">Secondary</MenuItemButton>
    </Menu>, <Menu key="Tertiary">
      <MenuItemButton kind="tertiary">Tertiary</MenuItemButton>
    </Menu>]
```

## Disabled

```tsx
[<Menu key="disabled-Primary">
      <MenuItemButton kind="primary" disabled disableReason="Disabled reason">
        Primary
      </MenuItemButton>
    </Menu>, <Menu key="disabled-Secondary">
      <MenuItemButton kind="secondary" disabled disableReason="Disabled reason">
        Secondary
      </MenuItemButton>
    </Menu>, <Menu key="disabled-Tertiary">
      <MenuItemButton kind="tertiary" disabled disableReason="Disabled reason">
        Tertiary
      </MenuItemButton>
    </Menu>]
```

## Icons

```tsx
[<Menu key="left">
      <MenuItemButton leftIcon={Invite}>Left icon</MenuItemButton>
    </Menu>, <Menu key="right">
      <MenuItemButton rightIcon={Invite}>Right icon</MenuItemButton>
    </Menu>]
```

