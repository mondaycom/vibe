import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Info } from "..";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { Box } from "../../Box";

type Story = StoryObj<typeof Info>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Info
});

export default {
  title: "Components/Info",
  component: Info,
  argTypes: {
    ...metaSettings.argTypes,
    position: {
      control: {
        type: "select"
      },
      options: [
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end"
      ]
    }
  },
  decorators: [
    ...metaSettings.decorators,
    Story => (
      <Box padding="large">
        <Story />
      </Box>
    )
  ]
} satisfies Meta<typeof Info>;

export const Overview: Story = {
  render: args => (
    <Info
      id="overview-info"
      aria-label="Overview information"
      title="Placement: Bottom start"
      body="Message will appear here, to give more context related information. This is meant for detailed supplemental information, where tooltips do not suffice."
      link={{ text: "Learn more about content", href: "#" }}
      {...args}
    />
  )
};

export const WithTitleOnly: Story = {
  render: () => <Info id="title-only-info" aria-label="Information about title" title="This is a title" />
};

export const WithBodyOnly: Story = {
  render: () => (
    <Info
      id="body-only-info"
      aria-label="Additional information"
      body="This message provides additional context without a title. It's useful for simple explanations."
    />
  )
};

export const WithLinkOnly: Story = {
  render: () => (
    <Info
      id="link-only-info"
      aria-label="Learn more information"
      link={{ text: "Learn more", href: "https://example.com" }}
    />
  )
};

export const WithTitleAndBody: Story = {
  render: () => (
    <Info
      id="title-body-info"
      aria-label="Information about data processing"
      title="Data processing"
      body="Your data is being processed and will be available shortly. This may take a few minutes depending on the size of your dataset."
    />
  )
};

export const WithTitleAndLink: Story = {
  render: () => (
    <Info
      id="title-link-info"
      aria-label="Information about feature availability"
      title="Feature unavailable"
      link={{ text: "Contact support", href: "#" }}
    />
  )
};

export const WithBodyAndLink: Story = {
  render: () => (
    <Info
      id="body-link-info"
      aria-label="Information about permissions"
      body="This feature requires additional permissions to access your data."
      link={{ text: "Learn about permissions", href: "#" }}
    />
  )
};

export const Positions: Story = {
  render: () => (
    <Box padding="large" style={{ padding: "var(--space-48)" }}>
      <Flex gap={48} justify="center" align="center" style={{ minHeight: "400px" }}>
        <Flex direction="column" gap="large" align="center">
          <Text weight="bold">Top positions</Text>
          <Flex gap="medium">
            <Info
              id="top-start-info"
              aria-label="Top start info"
              title="Top start"
              body="Positioned at top-start"
              position="top-start"
            />
            <Info
              id="top-center-info"
              aria-label="Top center info"
              title="Top center"
              body="Positioned at top"
              position="top"
            />
            <Info
              id="top-end-info"
              aria-label="Top end info"
              title="Top end"
              body="Positioned at top-end"
              position="top-end"
            />
          </Flex>
        </Flex>

        <Flex direction="column" gap="large" align="center">
          <Text weight="bold">Side positions</Text>
          <Flex gap="medium">
            <Info id="left-info" aria-label="Left info" title="Left" body="Positioned to the left" position="left" />
            <Info
              id="right-info"
              aria-label="Right info"
              title="Right"
              body="Positioned to the right"
              position="right"
            />
          </Flex>
        </Flex>

        <Flex direction="column" gap="large" align="center">
          <Text weight="bold">Bottom positions</Text>
          <Flex gap="medium">
            <Info
              id="bottom-start-info"
              aria-label="Bottom start info"
              title="Bottom start"
              body="Positioned at bottom-start"
              position="bottom-start"
            />
            <Info
              id="bottom-center-info"
              aria-label="Bottom center info"
              title="Bottom center"
              body="Positioned at bottom"
              position="bottom"
            />
            <Info
              id="bottom-end-info"
              aria-label="Bottom end info"
              title="Bottom end"
              body="Positioned at bottom-end"
              position="bottom-end"
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
};

export const WithCustomLink: Story = {
  render: () => (
    <Info
      id="custom-link-info"
      aria-label="Information with external link"
      title="External link example"
      body="This info dialog contains a link that opens in a new tab."
      link={{
        text: "Visit external site",
        href: "https://www.example.com",
        target: "_blank",
        rel: "noopener noreferrer"
      }}
    />
  )
};

export const Disabled: Story = {
  render: () => (
    <Info
      id="disabled-info"
      aria-label="Disabled information"
      title="Disabled info"
      body="This info dialog is disabled and cannot be opened."
      disabled
    />
  )
};

export const InContext: Story = {
  render: () => (
    <Box border padding="medium" rounded="medium">
      <Flex gap="small" align="center">
        <Text>Data processing status</Text>
        <Info
          id="context-info"
          aria-label="Information about data processing"
          title="Processing details"
          body="Your data is currently being processed. This includes validation, transformation, and indexing steps. The process typically takes 5-10 minutes."
          link={{ text: "View processing logs", href: "#" }}
        />
      </Flex>
    </Box>
  )
};
