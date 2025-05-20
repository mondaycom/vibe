# Storybook Code Examples

## Types

```tsx
<>
      <SplitButton children="Primary" secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>} />
      <SplitButton children="Secondary" kind="secondary" secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>} />
      <SplitButton children="Tertiary" kind="tertiary" secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>} />
    </>
```

## Sizes

```tsx
<>
      <SplitButton children="Small" size="small" secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>} />
      <SplitButton children="Medium" size="medium" secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>} />
      <SplitButton children="Large" size="large" secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>} />
    </>
```

## Split button with icons

```tsx
<>
      <SplitButton leftIcon={Add} secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Left icon
      </SplitButton>
      <SplitButton rightIcon={Add} secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Right icon
      </SplitButton>
    </>
```

## Split button as the primary action

```tsx
<SplitButton children="Use template" secondaryDialogPosition="bottom-start" secondaryDialogContent={<SplitButtonMenu id="split-menu">
          <MenuItem icon={Download} title="Import template" />
          <MenuItem icon={Upload} title="Export template" />
        </SplitButtonMenu>} />
```

## Secondary split button

```tsx
<>
      <SplitButton children="Export to CSV" kind="secondary" secondaryDialogPosition="bottom-start" secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem title="Export to PDF" />
            <MenuItem title="Export to DOCX" />
            <MenuItem title="Export to Excel" />
          </SplitButtonMenu>} />
      <Button>New item</Button>
    </>
```

## Custom menu

```tsx
<SplitButton secondaryDialogContent={<Menu focusItemIndexOnMount={2} id="menu" size="medium">
          <MenuTitle caption="Look up, you might see" captionPosition={MenuTitle.positions.TOP} />
          <MenuItem icon={Sun} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} iconType="svg" title="And the stars" />
        </Menu>}>
      Custom menu
    </SplitButton>
```

