import MenuButton from "../MenuButton";
import { noop as NOOP } from "lodash-es";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import { Button, Menu, MenuItem } from "../../index";
import { DropdownChevronDown, Favorite, Moon, Sun } from "../../Icon/Icons";
import MoveArrowDown from "../../Icon/Icons/components/MoveArrowDown";
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
  title: "Buttons/MenuButton",
  component: MenuButton,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof MenuButton>;

const menuButtonTemplate = createComponentTemplate(MenuButton);

export const Overview: Story = {
  render: menuButtonTemplate.bind({}),
  args: {
    children: (
      <Menu id="menu" size={Menu.sizes.MEDIUM}>
        <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
        <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />
        <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />
      </Menu>
    )
  },
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
      <MenuButton size={MenuButton.sizes.XXS}>
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />
        </Menu>
      </MenuButton>
      <MenuButton size={MenuButton.sizes.XS}>
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />
        </Menu>
      </MenuButton>
      <MenuButton size={MenuButton.sizes.SMALL}>
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />
        </Menu>
      </MenuButton>
      <MenuButton size={MenuButton.sizes.MEDIUM}>
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />
        </Menu>
      </MenuButton>
      <MenuButton size={MenuButton.sizes.LARGE}>
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />
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
      <Menu id="menu" size={Menu.sizes.MEDIUM}>
        <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
        <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />
        <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />
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
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />
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
      <MenuButton text="Open" component={DropdownChevronDown} componentPosition={MenuButton.componentPositions.END}>
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />
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
      <Menu id="menu" size={Menu.sizes.MEDIUM}>
        <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
        <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />
        <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />
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
          <Button kind={Button.kinds.SECONDARY} {...props} className={""} ref={ref}>
            Button
          </Button>
        )}
      >
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />
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
