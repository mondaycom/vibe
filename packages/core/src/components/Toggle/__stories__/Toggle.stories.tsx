import React from "react";
import { createComponentTemplate, MultipleStoryElementsWrapper } from "vibe-storybook-components";
import Toggle from "../Toggle";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { type Meta, type StoryObj } from "@storybook/react";
import Flex from "../../Flex/Flex";
import Text from "../../Text/Text";

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
      <Toggle isDefaultSelected={false} />
      <Toggle />
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
      <Toggle size="medium" />
      <Toggle size="small" />
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
      <Toggle isDefaultSelected={false} disabled />
      <Toggle disabled />
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
      <Text>Board automations</Text>
      <Toggle />
    </Flex>
  ),
  name: "Turn on/ off an automation"
};
