import React from "react";
import { ButtonGroup, Flex, Text } from "@vibe/core";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { createComponentTemplate } from "vibe-storybook-components";
import { type Meta, type StoryObj } from "@storybook/react";

type Story = StoryObj<typeof ButtonGroup>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: ButtonGroup,
  actionPropsArray: ["onSelect"]
});

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof ButtonGroup>;

export const Overview: Story = {
  render: args => {
    const content = <ButtonGroup {...args} />;
    return args.fullWidth ? <div style={{ width: "100%" }}>{content}</div> : content;
  },
  args: {
    id: "overview-button-group",
    groupAriaLabel: "Overview button group",
    options: [
      {
        value: 1,
        text: "Alpha"
      },
      {
        value: 2,
        text: "Beta"
      },
      {
        value: 3,
        text: "Gamma"
      },
      {
        value: 4,
        text: "Delta"
      }
    ],

    value: 1
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Default: Story = {
  render: () => (
    <ButtonGroup
      id="default-button-group"
      groupAriaLabel="Default button group"
      value={1}
      options={[
        {
          value: 1,
          text: "Alpha"
        },
        {
          value: 2,
          text: "Beta"
        },
        {
          value: 3,
          text: "Gamma"
        },
        {
          value: 4,
          text: "Delta"
        }
      ]}
    />
  )
};

export const Tertiary: Story = {
  render: () => (
    <ButtonGroup
      id="tertiary-button-group"
      groupAriaLabel="Tertiary button group"
      value={1}
      kind={ButtonGroup.kinds.TERTIARY}
      options={[
        {
          value: 1,
          text: "Alpha"
        },
        {
          value: 2,
          text: "Beta"
        },
        {
          value: 3,
          text: "Gamma"
        },
        {
          value: 4,
          text: "Delta"
        }
      ]}
    />
  )
};

export const Disabled: Story = {
  render: () => (
    <ButtonGroup
      id="disabled-button-group"
      disabled
      groupAriaLabel="Disabled button group"
      options={[
        {
          value: 1,
          text: "Alpha"
        },
        {
          value: 2,
          text: "Beta"
        },
        {
          value: 3,
          text: "Gamma"
        },
        {
          value: 4,
          text: "Delta"
        }
      ]}
    />
  )
};

export const DisabledSingeButton: Story = {
  render: () => (
    <ButtonGroup
      id="disabled-single-button-group"
      groupAriaLabel="Button group with disabled option"
      options={[
        {
          value: 1,
          text: "Alpha"
        },
        {
          value: 2,
          text: "Beta"
        },
        {
          value: 3,
          text: "Gamma"
        },
        {
          value: 4,
          text: "Delta",
          disabled: true,
          tooltipContent: "I'm the worst variant ever"
        }
      ]}
    />
  ),
  name: "Disabled - Singe Button"
};

export const Size: Story = {
  render: () => (
    <Flex gap={60}>
      <Flex direction="column" gap={16} align="start">
        <Text type={Text.types.TEXT1}>Medium</Text>
        <ButtonGroup
          id="size-medium-button-group"
          groupAriaLabel="Medium size button group"
          size={ButtonGroup.sizes.MEDIUM}
          value={1}
          options={[
            { value: 1, text: "Alpha" },
            { value: 2, text: "Beta" },
            { value: 3, text: "Gamma" },
            { value: 4, text: "Delta" }
          ]}
        />
      </Flex>
      <Flex direction="column" gap={16} align="start">
        <Text type={Text.types.TEXT1}>Small</Text>
        <ButtonGroup
          id="size-small-button-group"
          groupAriaLabel="Small size button group"
          size={ButtonGroup.sizes.SMALL}
          value={1}
          options={[
            { value: 1, text: "Alpha" },
            { value: 2, text: "Beta" },
            { value: 3, text: "Gamma" },
            { value: 4, text: "Delta" }
          ]}
        />
      </Flex>
    </Flex>
  )
};

export const ButtonGroupInSettings: Story = {
  render: () => (
    <Flex direction="column" gap={16} align="start">
      <Text type={Text.types.TEXT1}>Function</Text>
      <ButtonGroup
        id="settings-button-group"
        groupAriaLabel="Function selection button group"
        size={ButtonGroup.sizes.SMALL}
        value={1}
        options={[
          {
            value: 1,
            text: "Sum"
          },
          {
            value: 2,
            text: "Average"
          },
          {
            value: 3,
            text: "Median"
          },
          {
            value: 4,
            text: "Min"
          }
        ]}
      />
    </Flex>
  ),
  name: "Button group in settings"
};

export const ButtonGroupAsToggle: Story = {
  render: () => (
    <ButtonGroup
      id="toggle-button-group"
      groupAriaLabel="View toggle button group"
      value={1}
      options={[
        {
          value: 1,
          text: "Grid"
        },
        {
          value: 2,
          text: "List"
        }
      ]}
    />
  ),
  name: "Button group as toggle"
};

export const FullWidthButtonGroup: Story = {
  render: () => (
    <div style={{ width: "100%" }}>
      <ButtonGroup
        id="full-width-button-group"
        groupAriaLabel="Full width button group"
        fullWidth
        value={1}
        options={[
          {
            value: 1,
            text: "Grid"
          },
          {
            value: 2,
            text: "List"
          },
          {
            value: 3,
            text: "Table"
          },
          {
            value: 4,
            text: "Masonry"
          }
        ]}
      />
    </div>
  ),
  name: "Full width button group"
};
