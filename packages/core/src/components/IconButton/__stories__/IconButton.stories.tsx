import React from "react";
import { createComponentTemplate, Link } from "vibe-storybook-components";
import IconButton from "../IconButton";
import Text from "../../Text/Text";
import Flex from "../../Flex/Flex";
import Button from "../../Button/Button";
import person1 from "./assets/person1.png";
import { Add, Bolt, CloseSmall, Doc, Drag, Filter, Item, Robot, Time } from "@vibe/icons";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Icon from "../../Icon/Icon";
import Avatar from "../../Avatar/Avatar";
import { Meta, StoryObj } from "@storybook/react";
import { Box } from "../../Box";
import { Divider } from "../../Divider";

type Story = StoryObj<typeof IconButton>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: IconButton,
  iconPropNamesArray: ["icon"],
  actionPropsArray: ["onClick"]
});

const iconButtonTemplate = createComponentTemplate(IconButton);

export default {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof IconButton>;

export const Overview: Story = {
  render: iconButtonTemplate.bind({}),
  args: {
    ariaLabel: "Add",
    icon: Add
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Kinds: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%"
      }}
    >
      <IconButton icon={Bolt} kind="primary" ariaLabel="My primary IconButton" />
      <IconButton icon={Bolt} kind="secondary" ariaLabel="My secondary IconButton" />
      <IconButton icon={Bolt} kind="tertiary" ariaLabel="My tertiary IconButton" />
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Bolt }
      }
    }
  }
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%"
      }}
    >
      <IconButton key="xxs" icon={Robot} kind="secondary" size="xxs" ariaLabel="My xxs IconButton" />
      <IconButton key="xs" icon={Robot} kind="secondary" size="xs" ariaLabel="My xs IconButton" />
      <IconButton key="small" icon={Robot} kind="secondary" size="small" ariaLabel="My small IconButton" />
      <IconButton key="medium" icon={Robot} kind="secondary" size="medium" ariaLabel="My medium IconButton" />
      <IconButton key="large" icon={Robot} kind="secondary" size="large" ariaLabel="My large IconButton" />
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Robot }
      }
    }
  }
};

export const Active: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%"
      }}
    >
      <IconButton icon={Doc} kind="primary" ariaLabel="My small active IconButton" active />
      <IconButton icon={Doc} kind="secondary" ariaLabel="My active medium IconButton" active />
      <IconButton icon={Doc} kind="tertiary" ariaLabel="My active large IconButton" active />
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Doc }
      }
    }
  }
};

export const Disabled: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%"
      }}
    >
      <IconButton
        icon={Doc}
        kind="primary"
        ariaLabel="My small disabled IconButton"
        disabled
        disabledReason="This function is not available"
      />
      <IconButton
        icon={Doc}
        kind="secondary"
        ariaLabel="My disabled medium IconButton"
        disabled
        disabledReason="This function is not available"
      />
      <IconButton
        icon={Doc}
        kind="tertiary"
        ariaLabel="My disabled large IconButton"
        disabled
        disabledReason="This function is not available"
      />
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Doc }
      }
    }
  }
};

export const IconButtonAsToolbarButton: Story = {
  render: () => (
    <Box
      border
      rounded="medium"
      style={{
        width: "50%"
      }}
    >
      <Flex direction="column" align="start">
        <Flex gap="small" style={{ padding: "var(--sb-spacing-small)" }}>
          <Icon icon={Drag} />
          <Text type="text1">Widget name</Text>
          <IconButton icon={Filter} ariaLabel="Filter the widget by everything" size="small" />
        </Flex>
        <Divider withoutMargin />
        <div style={{ height: "200px", width: "100%", backgroundColor: "var(--sb-primary-background-hover-color)" }} />
      </Flex>
    </Box>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { Drag, Filter }
      }
    }
  },
  name: "Icon button as toolbar button"
};

export const IconButtonAsCloseButton: Story = {
  render: () => (
    <Flex gap="medium" style={{ width: "100%" }}>
      <Box
        border
        rounded="small"
        paddingX="large"
        style={{
          width: "100%"
        }}
      >
        <Flex justify="start" gap="large" style={{ height: "94px" }}>
          <Flex direction="column" justify="center" style={{ color: "var(--sb-icon-color)" }}>
            <Icon icon={Item} iconSize={40} />
            <Text type="text1" id="monday-recycle-bin-title">
              Item
            </Text>
          </Flex>
          <Divider direction="vertical" />
          <Avatar size="large" src={person1} type="img" />
          <Flex direction="column" align="start" ariaLabelledby="monday-recycle-bin-title" style={{ flexGrow: 1 }}>
            <Flex gap="xs">
              <Link withoutSpacing href="">
                Hadas Farhi
              </Link>
              <span>deleted the item</span>
              <Text type="text1" element="span" weight="medium">
                Hello World
              </Text>
              <span>from the board</span>
            </Flex>
            <Text type="text1" element="span" weight="medium">
              Tasks
            </Text>
            <Flex gap="xs">
              <Icon icon={Time} />
              <Text weight="medium">13m</Text>
              <Text>(Available for restore in the next 1M)</Text>
            </Flex>
          </Flex>
          <Button>Restore</Button>
        </Flex>
      </Box>
      <IconButton icon={CloseSmall} size="small" ariaLabel="Remove from Recycle bin" />
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { person1, Item, Time, CloseSmall }
      }
    }
  },
  name: "Icon button as close button"
};
