import React from "react";
import SplitButton, { type SplitButtonProps } from "../SplitButton";
import Button from "../../Button/Button";
import { Add, Announcement, Check, Download, Favorite, Moon, Sun, Upload } from "@vibe/icons";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import SplitButtonMenu from "../SplitButtonMenu/SplitButtonMenu";
import MenuItem from "../../Menu/MenuItem/MenuItem";
import Menu from "../../Menu/Menu/Menu";
import MenuTitle from "../../Menu/MenuTitle/MenuTitle";

const metaSettings = createStoryMetaSettingsDecorator({
  component: SplitButton,

  iconPropNamesArray: ["leftIcon", "rightIcon"],
  actionPropsArray: ["secondaryDialogContent", "onSecondaryDialogDidShow", "onSecondaryDialogDidHide", "onClick"]
});

export default {
  title: "Components/SplitButton",
  component: SplitButton,

  subcomponents: {
    SplitButtonMenu
  },

  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  parameters: {
    docs: {
      liveEdit: {
        scope: { Add, Announcement, Check, Download, Favorite, Moon, Sun, Upload }
      }
    }
  }
};

export const Overview = {
  render: (args: SplitButtonProps) => (
    <SplitButton id="overview-split-button" ariaLabel="Overview split button" {...args}>
      Button
    </SplitButton>
  ),
  args: {
    secondaryDialogContent: () => (
      <SplitButtonMenu id="overview-split-menu">
        <MenuItem id="overview-menu-check" icon={Check} title="Hey" />
        <MenuItem id="overview-menu-announcement" icon={Announcement} title="There" />
      </SplitButtonMenu>
    )
  },
  parameters: {
    docs: {
      liveEdit: { isEnabled: false }
    }
  }
};

export const Types = {
  render: () => (
    <>
      <SplitButton
        id="types-primary"
        ariaLabel="Primary split button"
        secondaryDialogContent={
          <SplitButtonMenu id="types-primary-menu">
            <MenuItem id="types-primary-check" icon={Check} title="Hey" />
            <MenuItem id="types-primary-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>
        }
      >
        Primary
      </SplitButton>
      <SplitButton
        id="types-secondary"
        ariaLabel="Secondary split button"
        kind="secondary"
        secondaryDialogContent={
          <SplitButtonMenu id="types-secondary-menu">
            <MenuItem id="types-secondary-check" icon={Check} title="Hey" />
            <MenuItem id="types-secondary-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>
        }
      >
        Secondary
      </SplitButton>
      <SplitButton
        id="types-tertiary"
        ariaLabel="Tertiary split button"
        kind="tertiary"
        secondaryDialogContent={
          <SplitButtonMenu id="types-tertiary-menu">
            <MenuItem id="types-tertiary-check" icon={Check} title="Hey" />
            <MenuItem id="types-tertiary-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>
        }
      >
        Tertiary
      </SplitButton>
    </>
  )
};

export const Sizes = {
  render: () => (
    <>
      <SplitButton
        id="sizes-small"
        ariaLabel="Small split button"
        size="small"
        secondaryDialogContent={
          <SplitButtonMenu id="sizes-small-menu">
            <MenuItem id="sizes-small-check" icon={Check} title="Hey" />
            <MenuItem id="sizes-small-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>
        }
      >
        Small
      </SplitButton>
      <SplitButton
        id="sizes-medium"
        ariaLabel="Medium split button"
        size="medium"
        secondaryDialogContent={
          <SplitButtonMenu id="sizes-medium-menu">
            <MenuItem id="sizes-medium-check" icon={Check} title="Hey" />
            <MenuItem id="sizes-medium-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>
        }
      >
        Medium
      </SplitButton>
      <SplitButton
        id="sizes-large"
        ariaLabel="Large split button"
        size="large"
        secondaryDialogContent={
          <SplitButtonMenu id="sizes-large-menu">
            <MenuItem id="sizes-large-check" icon={Check} title="Hey" />
            <MenuItem id="sizes-large-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>
        }
      >
        Large
      </SplitButton>
    </>
  )
};

export const SplitButtonWithIcons = {
  render: () => (
    <>
      <SplitButton
        id="icons-left"
        ariaLabel="Split button with left icon"
        leftIcon={Add}
        secondaryDialogContent={
          <SplitButtonMenu id="icons-left-menu">
            <MenuItem id="icons-left-check" icon={Check} title="Hey" />
            <MenuItem id="icons-left-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>
        }
      >
        Left icon
      </SplitButton>
      <SplitButton
        id="icons-right"
        ariaLabel="Split button with right icon"
        rightIcon={Add}
        secondaryDialogContent={
          <SplitButtonMenu id="icons-right-menu">
            <MenuItem id="icons-right-check" icon={Check} title="Hey" />
            <MenuItem id="icons-right-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>
        }
      >
        Right icon
      </SplitButton>
    </>
  ),
  name: "Split button with icons"
};

export const SplitButtonAsThePrimaryAction = {
  render: () => (
    <SplitButton
      id="primary-action"
      ariaLabel="Use template split button"
      secondaryDialogPosition="bottom-start"
      secondaryDialogContent={
        <SplitButtonMenu id="primary-action-menu">
          <MenuItem id="primary-action-import" icon={Download} title="Import template" />
          <MenuItem id="primary-action-export" icon={Upload} title="Export template" />
        </SplitButtonMenu>
      }
    >
      Use template
    </SplitButton>
  ),
  name: "Split button as the primary action"
};

export const SecondarySplitButton = {
  render: () => (
    <>
      <SplitButton
        id="secondary-export"
        ariaLabel="Export options split button"
        kind="secondary"
        secondaryDialogPosition="bottom-start"
        secondaryDialogContent={
          <SplitButtonMenu id="secondary-export-menu">
            <MenuItem id="secondary-export-pdf" title="Export to PDF" />
            <MenuItem id="secondary-export-docx" title="Export to DOCX" />
            <MenuItem id="secondary-export-excel" title="Export to Excel" />
          </SplitButtonMenu>
        }
      >
        Export to CSV
      </SplitButton>
      <Button id="new-item-button" ariaLabel="Create new item">
        New item
      </Button>
    </>
  ),
  name: "Secondary split button"
};

export const CustomMenu = {
  render: () => (
    <SplitButton
      id="custom-menu"
      ariaLabel="Custom menu split button"
      secondaryDialogContent={
        <Menu focusItemIndexOnMount={2} id="custom-menu-content" size="medium">
          <MenuTitle caption="Look up, you might see" captionPosition="top" />
          <MenuItem id="custom-menu-sun" icon={Sun} iconType="svg" title="The sun" />
          <MenuItem id="custom-menu-moon" icon={Moon} iconType="svg" title="The moon" />
          <MenuItem id="custom-menu-stars" icon={Favorite} iconType="svg" title="And the stars" />
        </Menu>
      }
    >
      Custom menu
    </SplitButton>
  ),
  name: "Custom menu"
};
