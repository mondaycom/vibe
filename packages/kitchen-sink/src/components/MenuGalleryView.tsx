import {
  DialogContentContainer,
  Menu,
  MenuDivider,
  MenuItem,
  MenuTitle,
} from "@vibe/core";
import { Activity, Delete, Email, Info, Settings } from "@mondaydotcomorg/icons";
import { ComponentGallery, type GalleryVariation } from "./ComponentGallery";

const menuVariations: GalleryVariation[] = [
  {
    id: "overview",
    label: "Overview",
    render: () => (
      <DialogContentContainer>
        <Menu aria-label="Basic actions">
          <MenuItem title="Menu item 1" />
          <MenuItem title="Menu item 2" disabled />
          <MenuItem title="Menu item 3" />
        </Menu>
      </DialogContentContainer>
    ),
  },
  {
    id: "size-small",
    label: "Size — Small",
    render: () => (
      <DialogContentContainer>
        <Menu aria-label="Small menu" size="small">
          <MenuTitle caption="Small menu" />
          <MenuDivider />
          <MenuItem title="Menu item 1" />
          <MenuItem title="Menu item 2" disabled />
          <MenuItem title="Menu item 3" />
        </Menu>
      </DialogContentContainer>
    ),
  },
  {
    id: "size-medium",
    label: "Size — Medium",
    render: () => (
      <DialogContentContainer>
        <Menu aria-label="Medium menu" size="medium">
          <MenuTitle caption="Medium menu" />
          <MenuDivider />
          <MenuItem title="Menu item 1" />
          <MenuItem title="Menu item 2" disabled />
          <MenuItem title="Menu item 3" />
        </Menu>
      </DialogContentContainer>
    ),
  },
  {
    id: "size-large",
    label: "Size — Large",
    render: () => (
      <DialogContentContainer>
        <Menu aria-label="Large menu" size="large">
          <MenuTitle caption="Large menu" />
          <MenuDivider />
          <MenuItem title="Menu item 1" />
          <MenuItem title="Menu item 2" disabled />
          <MenuItem title="Menu item 3" />
        </Menu>
      </DialogContentContainer>
    ),
  },
  {
    id: "states",
    label: "Item states",
    render: () => (
      <DialogContentContainer>
        <Menu aria-label="Menu item states">
          <MenuItem title="Regular menu item" />
          <MenuItem title="Selected menu item" selected />
          <MenuItem title="Disabled menu item" disabled />
        </Menu>
      </DialogContentContainer>
    ),
  },
  {
    id: "icons",
    label: "With icons",
    render: () => (
      <DialogContentContainer>
        <Menu aria-label="Actions with icons">
          <MenuItem icon={Email} title="Send" />
          <MenuItem icon={Delete} title="Delete" disabled />
          <MenuItem icon={Info} title="More info" />
        </Menu>
      </DialogContentContainer>
    ),
  },
  {
    id: "title-and-divider",
    label: "Title and divider",
    render: () => (
      <DialogContentContainer>
        <Menu aria-label="Settings actions">
          <MenuTitle caption="Actions" />
          <MenuDivider />
          <MenuItem icon={Email} title="Send" />
          <MenuItem icon={Settings} title="Settings" />
        </Menu>
      </DialogContentContainer>
    ),
  },
  {
    id: "submenu",
    label: "With submenu",
    render: () => (
      <DialogContentContainer>
        <Menu aria-label="Actions with submenu">
          <MenuItem icon={Activity} title="Menu item without submenu" />
          <MenuItem icon={Activity} title="Hover for submenu">
            <Menu aria-label="Send actions">
              <MenuItem icon={Email} title="Send" />
              <MenuItem icon={Delete} title="Delete" disabled />
              <MenuItem icon={Info} title="More info" />
            </Menu>
          </MenuItem>
          <MenuItem icon={Settings} title="Another item" />
        </Menu>
      </DialogContentContainer>
    ),
  },
  {
    id: "tooltips",
    label: "With tooltips",
    render: () => (
      <DialogContentContainer>
        <Menu aria-label="Actions with tooltips">
          <MenuItem title="Menu item with tooltip" tooltipContent="More information" />
          <MenuItem
            title="Disabled item with reason"
            disabled
            disableReason="This action is unavailable"
          />
        </Menu>
      </DialogContentContainer>
    ),
  },
];

export function MenuGalleryView() {
  return (
    <ComponentGallery
      title="Menu"
      description="Menu examples adapted from the component's Storybook stories."
      variations={menuVariations}
    />
  );
}
