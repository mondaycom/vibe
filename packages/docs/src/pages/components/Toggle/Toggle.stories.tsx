import React from "react";
import { createComponentTemplate, MultipleStoryElementsWrapper } from "vibe-storybook-components";
import { Toggle, Flex, Text } from "@vibe/core";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { type Meta, type StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Toggle>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Toggle,
  actionPropsArray: ["onChange"]
});

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof Toggle>;

const toggleTemplate = createComponentTemplate(Toggle);

export const Overview: Story = {
  render: toggleTemplate.bind({}),
  args: {
    id: "overview-toggle",
    ariaLabel: "Toggle option"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const States: Story = {
  render: () => (
    <Flex direction="column" gap="medium">
      <Toggle id="states-off" ariaLabel="Toggle off state" isDefaultSelected={false} />
      <Toggle id="states-on" ariaLabel="Toggle on state" />
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { MultipleStoryElementsWrapper }
      }
    }
  }
};

export const Size: Story = {
  render: () => (
    <Flex gap="large">
      <Toggle id="size-medium" ariaLabel="Medium toggle" size="medium" />
      <Toggle id="size-small" ariaLabel="Small toggle" size="small" />
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { MultipleStoryElementsWrapper }
      }
    }
  }
};

export const Disabled: Story = {
  render: () => (
    <Flex direction="column" gap="large">
      <Toggle id="disabled-off" ariaLabel="Disabled toggle off" isDefaultSelected={false} disabled />
      <Toggle id="disabled-on" ariaLabel="Disabled toggle on" disabled />
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { MultipleStoryElementsWrapper }
      }
    }
  }
};

export const TurnOnOffAnAutomation: Story = {
  render: () => (
    <Flex gap="medium">
      <Text id="automation-label">Board automations</Text>
      <Toggle id="automation-toggle" ariaLabel="Toggle board automations" />
    </Flex>
  ),
  name: "Turn on/ off an automation"
};
