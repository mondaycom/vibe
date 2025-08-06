import React, { useCallback, useState } from "react";
import Loader, { type LoaderProps } from "../Loader";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Button, DialogContentContainer, Flex, Search, Text } from "../..";
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
  render: (args: LoaderProps) => <Loader size="medium" {...args} />,
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
        <Loader size="xs" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Small
        </Text>
        <Loader size="small" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Medium
        </Text>
        <Loader size="medium" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Large
        </Text>
        <Loader size="large" />
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
        <Loader size="medium" color="primary" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Secondary
        </Text>
        <Loader size="medium" color="secondary" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Dark
        </Text>
        <Loader size="medium" color="dark" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          OnPrimary
        </Text>
        <Flex direction="row">
          <div style={{ background: "var(--sb-primary-text-color)", padding: "var(--space-4)" }}>
            <Loader size="medium" color="onPrimary" />
          </div>
          <div style={{ background: "var(--sb-negative-color)", padding: "var(--space-4)" }}>
            <Loader size="medium" color="onPrimary" />
          </div>
          <div style={{ background: "var(--sb-positive-color)", padding: "var(--space-4)" }}>
            <Loader size="medium" color="onPrimary" />
          </div>
          <div style={{ background: "var(--sb-primary-color)", padding: "var(--space-4)" }}>
            <Loader size="medium" color="onPrimary" />
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
      <Loader size="medium" />
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
          <Loader size="medium" />
        </div>
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          With background
        </Text>
        <div>
          <Loader size="medium" hasBackground />
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
