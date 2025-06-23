import MenuButton, { MenuButtonProps } from "../MenuButton";
import { noop as NOOP } from "lodash-es";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Button, Menu, MenuItem } from "../../index";
import { DropdownChevronDown, Favorite, Moon, Sun, MoveArrowDown } from "@vibe/icons";
import React, { useRef } from "react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof MenuButton>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: MenuButton,
  iconPropNamesArray: ["component"],
  actionPropsArray: ["onMenuHide", "onMenuShow"],
  ignoreControlsPropNamesArray: ["children"]
});

export default {
  title: "Components/MenuButton",
  component: MenuButton,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof MenuButton>;

export const Overview: Story = {
  render: (args: MenuButtonProps) => (
    <MenuButton {...args}>
      <Menu id="menu" size="medium">
        <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
        <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
        <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
      </Menu>
    </MenuButton>
  ),
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Sizes: Story = {
  render: () => (
    <>
      <MenuButton size="xxs">
        <Menu id="menu" size="medium">
          <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>
      <MenuButton size="xs">
        <Menu id="menu" size="medium">
          <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>
      <MenuButton size="small">
        <Menu id="menu" size="medium">
          <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>
      <MenuButton size="medium">
        <Menu id="menu" size="medium">
          <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>
      <MenuButton size="large">
        <Menu id="menu" size="medium">
          <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>
    </>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { NOOP, Sun, Moon, Favorite }
      }
    }
  }
};

export const DifferentIcon: Story = {
  render: () => (
    <MenuButton component={MoveArrowDown}>
      <Menu id="menu" size="medium">
        <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
        <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
        <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
      </Menu>
    </MenuButton>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { NOOP, MoveArrowDown, Sun, Moon, Favorite }
      }
    }
  }
};

export const WithText: Story = {
  render: () => (
    <div
      style={{
        width: 200
      }}
    >
      <MenuButton text="Open">
        <Menu id="menu" size="medium">
          <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { NOOP, Sun, Moon, Favorite }
      }
    }
  }
};

export const WithTextAndIconAtTheEnd: Story = {
  render: () => (
    <div
      style={{
        width: 200
      }}
    >
      <MenuButton text="Open" component={DropdownChevronDown} componentPosition="end">
        <Menu id="menu" size="medium">
          <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { NOOP, DropdownChevronDown, Sun, Moon, Favorite }
      }
    }
  },
  name: "With Text and Icon at the end"
};

export const Disabled: Story = {
  render: () => (
    <MenuButton disabled tooltipContent="This action is not available now">
      <Menu id="menu" size="medium">
        <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
        <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
        <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
      </Menu>
    </MenuButton>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { NOOP, Sun, Moon, Favorite }
      }
    }
  }
};

export const CustomTriggerElement: Story = {
  render: () => {
    const ref = useRef(null);

    return (
      <MenuButton
        triggerElement={props => (
          <Button kind="secondary" {...props} className={""} ref={ref}>
            Button
          </Button>
        )}
      >
        <Menu id="menu" size="medium">
          <MenuItem icon={Sun} onClick={NOOP} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { NOOP, Sun, Moon, Favorite }
      }
    }
  }
};
