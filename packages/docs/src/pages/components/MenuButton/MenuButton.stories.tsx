import { MenuButton, type MenuButtonProps, Button, Menu, MenuItem } from "@vibe/core";
import { noop as NOOP } from "es-toolkit";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { DropdownChevronDown, Favorite, Moon, Sun, MoveArrowDown } from "@vibe/icons";
import React, { useRef } from "react";
import { type Meta, type StoryObj } from "@storybook/react";

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
    <MenuButton id="overview-menu-button" ariaLabel="Overview menu button" {...args}>
      <Menu id="overview-menu" size="medium" focusItemIndexOnMount={0}>
        <MenuItem id="overview-menu-sun" icon={Sun} onClick={NOOP} type="svg" title="The sun" />
        <MenuItem id="overview-menu-moon" icon={Moon} onClick={NOOP} type="svg" title="The moon" />
        <MenuItem id="overview-menu-stars" icon={Favorite} onClick={NOOP} type="svg" title="And the stars" />
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
      <MenuButton id="sizes-xxs" ariaLabel="Extra extra small menu button" size="xxs">
        <Menu id="sizes-xxs-menu" size="medium" focusItemIndexOnMount={0}>
          <MenuItem id="sizes-xxs-sun" icon={Sun} onClick={NOOP} type="svg" title="The sun" />
          <MenuItem id="sizes-xxs-moon" icon={Moon} onClick={NOOP} type="svg" title="The moon" />
          <MenuItem id="sizes-xxs-stars" icon={Favorite} onClick={NOOP} type="svg" title="And the stars" />
        </Menu>
      </MenuButton>
      <MenuButton id="sizes-xs" ariaLabel="Extra small menu button" size="xs">
        <Menu id="sizes-xs-menu" size="medium" focusItemIndexOnMount={0}>
          <MenuItem id="sizes-xs-sun" icon={Sun} onClick={NOOP} type="svg" title="The sun" />
          <MenuItem id="sizes-xs-moon" icon={Moon} onClick={NOOP} type="svg" title="The moon" />
          <MenuItem id="sizes-xs-stars" icon={Favorite} onClick={NOOP} type="svg" title="And the stars" />
        </Menu>
      </MenuButton>
      <MenuButton id="sizes-small" ariaLabel="Small menu button" size="small">
        <Menu id="sizes-small-menu" size="medium" focusItemIndexOnMount={0}>
          <MenuItem id="sizes-small-sun" icon={Sun} onClick={NOOP} type="svg" title="The sun" />
          <MenuItem id="sizes-small-moon" icon={Moon} onClick={NOOP} type="svg" title="The moon" />
          <MenuItem id="sizes-small-stars" icon={Favorite} onClick={NOOP} type="svg" title="And the stars" />
        </Menu>
      </MenuButton>
      <MenuButton id="sizes-medium" ariaLabel="Medium menu button" size="medium">
        <Menu id="sizes-medium-menu" size="medium" focusItemIndexOnMount={0}>
          <MenuItem id="sizes-medium-sun" icon={Sun} onClick={NOOP} type="svg" title="The sun" />
          <MenuItem id="sizes-medium-moon" icon={Moon} onClick={NOOP} type="svg" title="The moon" />
          <MenuItem id="sizes-medium-stars" icon={Favorite} onClick={NOOP} type="svg" title="And the stars" />
        </Menu>
      </MenuButton>
      <MenuButton id="sizes-large" ariaLabel="Large menu button" size="large">
        <Menu id="sizes-large-menu" size="medium" focusItemIndexOnMount={0}>
          <MenuItem id="sizes-large-sun" icon={Sun} onClick={NOOP} type="svg" title="The sun" />
          <MenuItem id="sizes-large-moon" icon={Moon} onClick={NOOP} type="svg" title="The moon" />
          <MenuItem id="sizes-large-stars" icon={Favorite} onClick={NOOP} type="svg" title="And the stars" />
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
    <MenuButton id="different-icon" ariaLabel="Menu button with different icon" component={MoveArrowDown}>
      <Menu id="different-icon-menu" size="medium" focusItemIndexOnMount={0}>
        <MenuItem id="different-icon-sun" icon={Sun} onClick={NOOP} type="svg" title="The sun" />
        <MenuItem id="different-icon-moon" icon={Moon} onClick={NOOP} type="svg" title="The moon" />
        <MenuItem id="different-icon-stars" icon={Favorite} onClick={NOOP} type="svg" title="And the stars" />
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
        <Menu id="menu" size="medium" focusItemIndexOnMount={0}>
          <MenuItem icon={Sun} onClick={NOOP} type="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} type="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} type="svg" title="And the stars" />
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
        <Menu id="menu" size="medium" focusItemIndexOnMount={0}>
          <MenuItem icon={Sun} onClick={NOOP} type="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} type="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} type="svg" title="And the stars" />
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
      <Menu id="menu" size="medium" focusItemIndexOnMount={0}>
        <MenuItem icon={Sun} onClick={NOOP} type="svg" title="The sun" />
        <MenuItem icon={Moon} onClick={NOOP} type="svg" title="The moon" />
        <MenuItem icon={Favorite} onClick={NOOP} type="svg" title="And the stars" />
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
        <Menu id="menu" size="medium" focusItemIndexOnMount={0}>
          <MenuItem icon={Sun} onClick={NOOP} type="svg" title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} type="svg" title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} type="svg" title="And the stars" />
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
