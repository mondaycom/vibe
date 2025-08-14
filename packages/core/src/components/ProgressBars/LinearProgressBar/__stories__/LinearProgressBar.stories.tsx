import React from "react";
import LinearProgressBar, { type LinearProgressBarProps } from "../LinearProgressBar";
import { useMemo } from "react";
import { createStoryMetaSettingsDecorator } from "../../../../storybook/functions/createStoryMetaSettingsDecorator";
import { Info } from "@vibe/icons";
import Icon from "../../../Icon/Icon";
import Logo from "./assets/Logo.png";
import { Flex } from "../../../Flex";
import { Text } from "../../../Text";
import { type Meta, type StoryObj } from "@storybook/react";
import { Box } from "../../../Box";

const metaSettings = createStoryMetaSettingsDecorator({
  component: LinearProgressBar
});

export default {
  title: "Components/LinearProgressBar",
  component: LinearProgressBar,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof LinearProgressBar>;

type Story = StoryObj<typeof LinearProgressBar>;

export const Overview: Story = {
  render: (args: LinearProgressBarProps) => (
    <div style={{ width: "400px" }}>
      <LinearProgressBar
        value={20}
        size="large"
        id="overview-linear-progress-bar"
        ariaLabel="Overview linear progress bar"
        {...args}
      />
    </div>
  ),

  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Regular: Story = {
  render: () => (
    <Flex direction="column" gap="large">
      <Flex direction="column" gap="small" align="start" style={{ width: "400px" }}>
        <LinearProgressBar
          id="regular-linear-progress-bar"
          ariaLabel="Regular linear progress bar"
          indicateProgress
          value={30}
          size="large"
        />
        With label
      </Flex>
      <Flex direction="column" gap="small" align="start" style={{ width: "400px" }}>
        <LinearProgressBar id="regular-linear-progress-bar-without-label" value={30} size="large" />
        Without label
      </Flex>
    </Flex>
  )
};

export const WithSecondaryValue: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <LinearProgressBar
        id="with-secondary-value-linear-progress-bar"
        ariaLabel="With secondary value linear progress bar"
        value={50}
        indicateProgress
        valueSecondary={65}
        size="large"
      />
    </div>
  )
};

export const MultiProgressBar: Story = {
  render: () => {
    const multiValues = useMemo(
      () => [
        {
          value: 25,
          color: "var(--primary-color)"
        },
        {
          value: 75,
          color: "var(--warning-color)"
        },
        {
          value: 100,
          color: "var(--positive-color)"
        }
      ],
      []
    );

    return (
      <div style={{ width: "600px" }}>
        <LinearProgressBar
          id="multi-progress-bar"
          ariaLabel="Multi progress bar"
          value={25}
          size="large"
          indicateProgress
          multi
          multiValues={multiValues}
        />
      </div>
    );
  },

  name: "Multi progress bar"
};

export const ProgressBarAsACounter: Story = {
  render: () => (
    <div style={{ width: 200 }}>
      <Text type="text1" weight="bold" style={{ marginBottom: "var(--space-48)" }}>
        Loading files
      </Text>
      <Flex justify="space-between" style={{ marginBottom: "var(--space-4)" }}>
        <Flex gap="xs">
          <Text>Items</Text>
          <Icon icon={Info} style={{ color: "var(--icon-color)" }} />
        </Flex>
        <Text>142/200</Text>
      </Flex>
      <LinearProgressBar
        id="progress-bar-as-a-counter"
        ariaLabel="Progress bar as a counter"
        value={71}
        size="large"
        barStyle="positive"
      />
    </div>
  ),

  name: "Progress bar as a counter"
};

export const ProgressBarAsLoadingIndicator: Story = {
  render: () => (
    <Box border padding="medium" style={{ width: 400 }}>
      <Flex gap="small" style={{ marginBottom: "var(--space-8)", height: 80 }}>
        <Box style={{ flexShrink: 0, height: "100%" }}>
          <img src={Logo} alt="Frame 697.jpg" style={{ height: "100%" }} />
        </Box>
        <Flex direction="column" align="stretch" justify="space-between" style={{ flex: 1, height: "100%" }}>
          <Text type="text1" weight="bold">
            Frame 697.jpg
          </Text>
          <Flex justify="space-between">
            <Text>2KB</Text>
            <Text>Saving...</Text>
          </Flex>
        </Flex>
      </Flex>
      <LinearProgressBar
        id="progress-bar-as-loading-indicator"
        ariaLabel="Progress bar as loading indicator"
        value={71}
      />
    </Box>
  ),

  name: "Progress bar as loading indicator"
};
