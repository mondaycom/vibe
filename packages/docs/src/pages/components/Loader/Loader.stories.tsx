import React, { useCallback, useState } from "react";
import { Loader, type LoaderProps, Button, DialogContentContainer, Flex, Search, Text } from "@vibe/core";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { type Meta, type StoryObj } from "@storybook/react";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Loader
});

export default {
  title: "Components/Loader",
  component: Loader,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof Loader>;

type Story = StoryObj<typeof Loader>;

export const Overview: Story = {
  render: (args: LoaderProps) => <Loader id="overview-loader" size="medium" {...args} />,
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const SizeVariants: Story = {
  render: () => (
    <Flex align="start" gap={60}>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Xs
        </Text>
        <Loader id="loader-xs" size="xs" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Small
        </Text>
        <Loader id="loader-small" size="small" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Medium
        </Text>
        <Loader id="loader-medium" size="medium" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Large
        </Text>
        <Loader id="loader-large" size="large" />
      </Flex>
    </Flex>
  ),
  name: "Size variants"
};

export const ColorVariants: Story = {
  render: () => (
    <Flex direction="row" gap={60}>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Primary
        </Text>
        <Loader id="loader-primary" size="medium" color="primary" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Secondary
        </Text>
        <Loader id="loader-secondary" size="medium" color="secondary" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Dark
        </Text>
        <Loader id="loader-dark" size="medium" color="dark" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          OnPrimary
        </Text>
        <Flex direction="row">
          <div style={{ background: "var(--sb-primary-text-color)", padding: "var(--space-4)" }}>
            <Loader id="loader-on-primary" size="medium" color="onPrimary" />
          </div>
          <div style={{ background: "var(--sb-negative-color)", padding: "var(--space-4)" }}>
            <Loader id="loader-on-negative" size="medium" color="onPrimary" />
          </div>
          <div style={{ background: "var(--sb-positive-color)", padding: "var(--space-4)" }}>
            <Loader id="loader-on-positive" size="medium" color="onPrimary" />
          </div>
          <div style={{ background: "var(--sb-primary-color)", padding: "var(--space-4)" }}>
            <Loader id="loader-on-primary-color" size="medium" color="onPrimary" />
          </div>
        </Flex>
      </Flex>
    </Flex>
  ),

  name: "Color variants"
};

export const CustomColors: Story = {
  render: () => (
    <div
      style={{
        color: "var(--color-dark-red)"
      }}
    >
      <Loader id="loader-custom-color" size="medium" />
    </div>
  ),

  name: "Custom colors"
};

export const VisualVariants: Story = {
  render: () => (
    <Flex direction="row" gap="large">
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Casual
        </Text>
        <div>
          <Loader id="loader-casual" size="medium" />
        </div>
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          With background
        </Text>
        <div>
          <Loader id="loader-with-background" size="medium" hasBackground />
        </div>
      </Flex>
    </Flex>
  ),

  name: "Visual variants"
};

export const LoaderInTextField: Story = {
  render: () => (
    <DialogContentContainer>
      <Search loading placeholder="Board name" />
    </DialogContentContainer>
  ),
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  },

  name: "Loader in text field"
};

export const LoaderInButton: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);

    const onClick = useCallback(() => {
      setLoading(true);
    }, [setLoading]);

    return (
      <Button loading={loading} onClick={onClick}>
        Click here for loading
      </Button>
    );
  },

  name: "Loader in button"
};
