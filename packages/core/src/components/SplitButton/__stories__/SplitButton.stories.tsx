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
  render: (args: SplitButtonProps) => <SplitButton {...args}>Button</SplitButton>,

  args: {
    secondaryDialogContent: () => (
      <SplitButtonMenu id="split-menu">
        <MenuItem icon={Check} title="Hey" />
        <MenuItem icon={Announcement} title="There" />
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
        secondaryDialogContent={
          <SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>
        }
      >
        Primary
      </SplitButton>
      <SplitButton
        kind="secondary"
        secondaryDialogContent={
          <SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>
        }
      >
        Secondary
      </SplitButton>
      <SplitButton
        kind="tertiary"
        secondaryDialogContent={
          <SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
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
        size="small"
        secondaryDialogContent={
          <SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>
        }
      >
        Small
      </SplitButton>
      <SplitButton
        size="medium"
        secondaryDialogContent={
          <SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>
        }
      >
        Medium
      </SplitButton>
      <SplitButton
        size="large"
        secondaryDialogContent={
          <SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
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
        leftIcon={Add}
        secondaryDialogContent={
          <SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>
        }
      >
        Left icon
      </SplitButton>
      <SplitButton
        rightIcon={Add}
        secondaryDialogContent={
          <SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
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
      secondaryDialogPosition="bottom-start"
      secondaryDialogContent={
        <SplitButtonMenu id="split-menu">
          <MenuItem icon={Download} title="Import template" />
          <MenuItem icon={Upload} title="Export template" />
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
        kind="secondary"
        secondaryDialogPosition="bottom-start"
        secondaryDialogContent={
          <SplitButtonMenu id="split-menu">
            <MenuItem title="Export to PDF" />
            <MenuItem title="Export to DOCX" />
            <MenuItem title="Export to Excel" />
          </SplitButtonMenu>
        }
      >
        Export to CSV
      </SplitButton>
      <Button>New item</Button>
    </>
  ),
  name: "Secondary split button"
};

export const CustomMenu = {
  render: () => (
    <SplitButton
      secondaryDialogContent={
        <Menu focusItemIndexOnMount={2} id="menu" size="medium">
          <MenuTitle caption="Look up, you might see" captionPosition="top" />
          <MenuItem icon={Sun} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} iconType="svg" title="And the stars" />
        </Menu>
      }
    >
      Custom menu
    </SplitButton>
  ),
  name: "Custom menu"
};
