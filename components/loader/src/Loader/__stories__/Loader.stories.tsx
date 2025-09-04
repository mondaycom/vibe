import React, { useCallback, useState } from "react";
import Loader, { type LoaderProps } from "../Loader";
import { createStoryMetaSettingsDecorator } from "@vibe/storybook-config";
import { Button } from "@vibe/button";
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

// TODO: replace with Flex component
export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-60)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-24)" }}>
        Xs
        <Loader id="loader-xs" size="xs" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-24)" }}>
        Small
        <Loader id="loader-small" size="small" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-24)" }}>
        Medium
        <Loader id="loader-medium" size="medium" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-24)" }}>
        Large
        <Loader id="loader-large" size="large" />
      </div>
    </div>
  ),
  name: "Size variants"
};

// TODO: replace with Flex component
export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-60)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-24)" }}>
        Primary
        <Loader id="loader-primary" size="medium" color="primary" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-24)" }}>
        Secondary
        <Loader id="loader-secondary" size="medium" color="secondary" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-24)" }}>
        Dark
        <Loader id="loader-dark" size="medium" color="dark" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-24)" }}>
        OnPrimary
        <div style={{ display: "flex", flexDirection: "row", gap: "var(--space-24)" }}>
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
        </div>
      </div>
    </div>
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

// TODO: replace with Flex component
export const VisualVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-60)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-24)" }}>
        Casual
        <div>
          <Loader id="loader-casual" size="medium" />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-24)" }}>
        With background
        <div>
          <Loader id="loader-with-background" size="medium" hasBackground />
        </div>
      </div>
    </div>
  ),

  name: "Visual variants"
};

// TODO: use story again

// ### Loader in text field

// Use loader in search field while filtering results.

// <Canvas of={LoaderStories.LoaderInTextField} /> */}

// export const LoaderInTextField: Story = {
//   render: () => {
//     return <Search loading placeholder="Board name" />;
//   },
//   parameters: {
//     chromatic: {
//       pauseAnimationAtEnd: true
//     }
//   },

//   name: "Loader in text field"
// };

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
