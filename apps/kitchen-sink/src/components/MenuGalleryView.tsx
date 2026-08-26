import {
  DialogContentContainer,
  Label,
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemButton,
  MenuTitle,
} from "@vibe/core";
import { Delete, Email, Info, Invite, Settings } from "@vibe/icons";
import type { ReactNode } from "react";
import { isCurrentVibeSource } from "../lib/vibeSource";
import { ComponentGallery, type GalleryVariation } from "./ComponentGallery";

function MenuRow({ children }: { children: ReactNode }) {
  return <div className="menu-gallery-row">{children}</div>;
}

function MenuPreview({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="menu-gallery-preview">
      {label ? <span className="menu-gallery-preview-label">{label}</span> : null}
      <DialogContentContainer
        className={isCurrentVibeSource ? "menu-gallery-shell" : undefined}
        style={isCurrentVibeSource ? { padding: 8, borderRadius: 12 } : undefined}
      >
        {children}
      </DialogContentContainer>
    </div>
  );
}

const menuVariations: GalleryVariation[] = [
  {
    id: "default",
    label: "Default",
    render: () => (
      <MenuPreview>
        <Menu>
          <MenuItem title="Menu item 1" />
          <MenuItem title="Menu item 2" />
          <MenuItem title="Menu item 3" />
        </Menu>
      </MenuPreview>
    ),
  },
  {
    id: "states",
    label: "States",
    render: () => (
      <MenuPreview>
        <Menu>
          <MenuItem title="Regular menu item" />
          <MenuItem title="Selected menu item" selected />
          <MenuItem title="Disabled menu item" disabled />
        </Menu>
      </MenuPreview>
    ),
  },
  {
    id: "disabled-reason",
    label: "State — Disabled with reason",
    render: () => (
      <MenuPreview>
        <Menu>
          <MenuItem title="Available" />
          <MenuItem title="Unavailable" disabled disableReason="You don't have permission" />
          <MenuItem title="Also available" />
        </Menu>
      </MenuPreview>
    ),
  },
  {
    id: "with-label",
    label: "With item label",
    render: () => (
      <MenuPreview>
        <Menu>
          <MenuItem title="Inbox" label={<Label text="New" size="small" />} />
          <MenuItem title="Updates" />
          <MenuItem title="Settings" icon={Settings} />
        </Menu>
      </MenuPreview>
    ),
  },
  {
    id: "title-placements",
    label: "Title — Caption placements",
    render: () => (
      <MenuRow>
        <MenuPreview label="Top">
          <Menu>
            <MenuTitle caption="Left menu title" captionPosition="top" />
            <MenuItem title="Item 1" />
            <MenuItem title="Item 2" />
            <MenuItem title="Item 3" />
          </Menu>
        </MenuPreview>
        <MenuPreview label="Center">
          <Menu>
            <MenuTitle caption="Center menu title" captionPosition="center" />
            <MenuItem title="Item 1" />
            <MenuItem title="Item 2" />
            <MenuItem title="Item 3" />
          </Menu>
        </MenuPreview>
        <MenuPreview label="Bottom">
          <Menu>
            <MenuTitle caption="Bottom menu title" captionPosition="bottom" />
            <MenuItem title="Item 1" />
            <MenuItem title="Item 2" />
            <MenuItem title="Item 3" />
          </Menu>
        </MenuPreview>
      </MenuRow>
    ),
  },
  {
    id: "title-divider",
    label: "Title + divider",
    render: () => (
      <MenuPreview>
        <Menu>
          <MenuTitle caption="Actions" />
          <MenuDivider />
          <MenuItem icon={Email} title="Send" />
          <MenuItem icon={Delete} title="Delete" />
          <MenuDivider />
          <MenuItem icon={Info} title="More info" />
        </Menu>
      </MenuPreview>
    ),
  },
  {
    id: "submenu",
    label: "Submenu",
    render: () => (
      <MenuPreview>
        <Menu>
          <MenuItem title="Menu item without submenu" icon={Email} />
          <MenuItem title="With submenu" icon={Settings}>
            <Menu>
              <MenuItem icon={Email} title="Send" />
              <MenuItem icon={Delete} title="Delete" disabled />
              <MenuItem icon={Info} title="More info" />
            </Menu>
          </MenuItem>
          <MenuItem title="Another item" icon={Info} />
        </Menu>
      </MenuPreview>
    ),
  },
  {
    id: "submenu-split",
    label: "Submenu — Split item",
    render: () => (
      <MenuPreview>
        <Menu>
          <MenuItem title="Opens on item hover">
            <Menu>
              <MenuItem title="Sub menu item 1" />
              <MenuItem title="Sub menu item 2" />
              <MenuItem title="Sub menu item 3" />
            </Menu>
          </MenuItem>
          <MenuItem title="Opens on icon hover" splitMenuItem>
            <Menu>
              <MenuItem title="Sub menu item 1" />
              <MenuItem title="Sub menu item 2" />
              <MenuItem title="Sub menu item 3" />
            </Menu>
          </MenuItem>
        </Menu>
      </MenuPreview>
    ),
  },
  {
    id: "overflow",
    label: "Overflow — Long text",
    render: () => (
      <MenuPreview>
        <Menu>
          <MenuItem title="Short text" />
          <MenuItem title="Long text — bla bla bla bla bla bla bla bla bla bla bla" />
          <MenuItem title="Long text with submenu — bla bla bla bla bla bla bla">
            <Menu>
              <MenuItem title="Sub menu item 1" />
              <MenuItem title="Sub menu item 2" />
              <MenuItem title="Sub menu item 3" />
            </Menu>
          </MenuItem>
        </Menu>
      </MenuPreview>
    ),
  },
  {
    id: "tooltip",
    label: "With tooltip",
    render: () => (
      <MenuPreview>
        <Menu>
          <MenuItem title="Menu item with tooltip" tooltipContent="I am a tooltip" />
          <MenuItem title="Disabled with reason" disabled disableReason="I am a disabled tooltip" />
          <MenuItem title="With icon and tooltip" icon={Info} tooltipContent="More information" />
        </Menu>
      </MenuPreview>
    ),
  },
  {
    id: "item-button-kinds",
    label: "Menu item button — Kinds",
    render: () => (
      <MenuRow>
        <MenuPreview label="Primary">
          <Menu>
            <MenuItemButton kind="primary">Primary</MenuItemButton>
          </Menu>
        </MenuPreview>
        <MenuPreview label="Secondary">
          <Menu>
            <MenuItemButton kind="secondary">Secondary</MenuItemButton>
          </Menu>
        </MenuPreview>
        <MenuPreview label="Tertiary">
          <Menu>
            <MenuItemButton kind="tertiary">Tertiary</MenuItemButton>
          </Menu>
        </MenuPreview>
      </MenuRow>
    ),
  },
  {
    id: "item-button-disabled",
    label: "Menu item button — Disabled",
    render: () => (
      <MenuRow>
        <MenuPreview label="Primary">
          <Menu>
            <MenuItemButton kind="primary" disabled disableReason="Disabled reason">
              Primary
            </MenuItemButton>
          </Menu>
        </MenuPreview>
        <MenuPreview label="Secondary">
          <Menu>
            <MenuItemButton kind="secondary" disabled disableReason="Disabled reason">
              Secondary
            </MenuItemButton>
          </Menu>
        </MenuPreview>
        <MenuPreview label="Tertiary">
          <Menu>
            <MenuItemButton kind="tertiary" disabled disableReason="Disabled reason">
              Tertiary
            </MenuItemButton>
          </Menu>
        </MenuPreview>
      </MenuRow>
    ),
  },
  {
    id: "item-button-icons",
    label: "Menu item button — Icons",
    render: () => (
      <MenuRow>
        <MenuPreview label="Left icon">
          <Menu>
            <MenuItemButton leftIcon={Invite}>Left icon</MenuItemButton>
          </Menu>
        </MenuPreview>
        <MenuPreview label="Right icon">
          <Menu>
            <MenuItemButton rightIcon={Invite}>Right icon</MenuItemButton>
          </Menu>
        </MenuPreview>
      </MenuRow>
    ),
  },
  {
    id: "composed",
    label: "Composed example",
    render: () => (
      <MenuPreview>
        <Menu>
          <MenuTitle caption="Workspace" />
          <MenuDivider />
          <MenuItem icon={Email} title="Invite members" label={<Label text="New" size="small" />} />
          <MenuItem icon={Settings} title="Settings">
            <Menu>
              <MenuItem title="General" />
              <MenuItem title="Permissions" />
              <MenuItem title="Integrations" />
            </Menu>
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={Delete} title="Delete board" disabled disableReason="Only admins can delete" />
          <MenuItemButton kind="primary" leftIcon={Invite}>
            Invite
          </MenuItemButton>
        </Menu>
      </MenuPreview>
    ),
  },
  {
    id: "sizes",
    label: "Sizes",
    render: () => (
      <MenuRow>
        <MenuPreview label="Small">
          <Menu size="small">
            <MenuTitle caption="Small menu" />
            <MenuDivider />
            <MenuItem title="Menu item 1" />
            <MenuItem title="Menu item 2" disabled />
            <MenuItem title="Menu item 3" />
          </Menu>
        </MenuPreview>
        <MenuPreview label="Medium">
          <Menu size="medium">
            <MenuTitle caption="Medium menu" />
            <MenuDivider />
            <MenuItem title="Menu item 1" />
            <MenuItem title="Menu item 2" disabled />
            <MenuItem title="Menu item 3" />
          </Menu>
        </MenuPreview>
        <MenuPreview label="Large">
          <Menu size="large">
            <MenuTitle caption="Large menu" />
            <MenuDivider />
            <MenuItem title="Menu item 1" />
            <MenuItem title="Menu item 2" disabled />
            <MenuItem title="Menu item 3" />
          </Menu>
        </MenuPreview>
      </MenuRow>
    ),
  },
  {
    id: "icons-left",
    label: "Icons — Left",
    render: () => (
      <MenuPreview>
        <Menu>
          <MenuItem icon={Email} title="Send" />
          <MenuItem icon={Delete} title="Delete" />
          <MenuItem icon={Info} title="More info" />
        </Menu>
      </MenuPreview>
    ),
  },
  {
    id: "icons-right",
    label: "Icons — Right",
    render: () => (
      <MenuPreview>
        <Menu>
          <MenuItem title="Send" rightIcon={Email} />
          <MenuItem title="Delete" rightIcon={Delete} />
          <MenuItem title="More info" rightIcon={Info} />
        </Menu>
      </MenuPreview>
    ),
  },
  {
    id: "icons-both",
    label: "Icons — Both sides",
    render: () => (
      <MenuPreview>
        <Menu>
          <MenuItem icon={Email} rightIcon={Settings} title="Send" />
          <MenuItem icon={Delete} rightIcon={Info} title="Delete" />
          <MenuItem icon={Info} rightIcon={Email} title="More info" />
        </Menu>
      </MenuPreview>
    ),
  },
];

export function MenuGalleryView() {
  return (
    <ComponentGallery
      className="menu-gallery"
      title="Menu"
      description="All menu variations currently supported by the component."
      variations={menuVariations}
    />
  );
}
