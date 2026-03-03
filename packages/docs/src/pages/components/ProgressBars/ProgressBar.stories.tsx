import React from "react";
import { ProgressBar, type ProgressBarProps, Flex, Text, Box } from "@vibe/core";
import { useMemo } from "react";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { Info } from "@vibe/icons";
import { Icon } from "@vibe/icon";
import Logo from "./assets/Logo.png";
import { type Meta, type StoryObj } from "@storybook/react";

const metaSettings = createStoryMetaSettingsDecorator({
  component: ProgressBar
});

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof ProgressBar>;

type Story = StoryObj<typeof ProgressBar>;

export const Overview: Story = {
  render: (args: ProgressBarProps) => (
    <div style={{ width: "400px" }}>
      <ProgressBar
        value={20}
        size="large"
        id="overview-linear-progress-bar"
        aria-label="Overview linear progress bar"
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
        <ProgressBar
          id="regular-linear-progress-bar"
          aria-label="Regular linear progress bar"
          indicateProgress
          value={30}
          size="large"
        />
        With label
      </Flex>
      <Flex direction="column" gap="small" align="start" style={{ width: "400px" }}>
        <ProgressBar id="regular-linear-progress-bar-without-label" value={30} size="large" />
        Without label
      </Flex>
    </Flex>
  )
};

export const WithSecondaryValue: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <ProgressBar
        id="with-secondary-value-linear-progress-bar"
        aria-label="With secondary value linear progress bar"
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
        <ProgressBar
          id="multi-progress-bar"
          aria-label="Multi progress bar"
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
      <ProgressBar
        id="progress-bar-as-a-counter"
        aria-label="Progress bar as a counter"
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
      <ProgressBar
        id="progress-bar-as-loading-indicator"
        aria-label="Progress bar as loading indicator"
        value={71}
      />
    </Box>
  ),

  name: "Progress bar as loading indicator"
};

export const ExceedingMaxValue: Story = {
  render: () => (
    <Flex direction="column" gap="large" align="start">
      <Flex direction="column" gap="small" style={{ width: "400px" }}>
        <Text type="text1" weight="bold">
          Standard behavior (capped at 100%)
        </Text>
        <ProgressBar
          id="standard-progress-bar"
          ariaLabel="Standard progress bar"
          value={120}
          max={100}
          indicateProgress
          size="large"
        />
        <Text type="text2" color="secondary">
          Value: 120, Max: 100 → Shows 100%
        </Text>
      </Flex>

      <Flex direction="column" gap="small" style={{ width: "400px" }}>
        <Text type="text1" weight="bold">
          Allowing exceeding max
        </Text>
        <ProgressBar
          id="exceeding-progress-bar"
          ariaLabel="Exceeding progress bar"
          value={120}
          max={100}
          indicateProgress
          allowExceedingMax
          size="large"
          barStyle="positive"
        />
        <Text type="text2" color="secondary">
          Value: 120, Max: 100 → Shows 120%
        </Text>
      </Flex>
    </Flex>
  ),

  name: "Exceeding max value"
};
