import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Info } from "..";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { Box } from "../../Box";

type Story = StoryObj<typeof Info>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Info,
  enumPropNamesArray: ["position"],
  actionPropsArray: ["onDialogShow", "onDialogHide"]
});

export default {
  title: "Components/Info",
  component: Info,
  argTypes: {
    ...metaSettings.argTypes
  },
  decorators: metaSettings.decorators
} satisfies Meta<typeof Info>;

export const Overview: Story = {
  render: args => <Info {...args} />,
  args: {
    id: "overview-info",
    body: "Message will appear here, to give more context related information. This is meant for detailed supplemental information, where tooltips do not suffice. This is not the place for critical information for task-completion but rather paragraph-like text serving as supplemental info.",
    link: { text: "Learn more about content", href: "#" },
    title: "Placement: Bottom start",
    "aria-label": "Overview information"
  },
  parameters: {
    docs: {
      liveEdit: { isEnabled: false }
    }
  }
};

export const Directions: Story = {
  render: () => (
    <Flex justify="center" align="center" style={{ minHeight: "400px", width: "100%" }}>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "var(--space-48)",
          alignItems: "center",
          justifyItems: "center"
        }}
      >
        <Flex direction="column" gap="medium" align="center">
          <Text id="bottom-direction" align="center" type="text1" weight="medium" ellipsis={false}>
            Bottom
          </Text>
          <Info
            aria-labelledby="bottom-direction"
            title="Placement: Bottom"
            body="This dialog's direction is from the bottom"
            link={{ text: "Learn more about dialog direction", href: "#" }}
            position="bottom-start"
          />
        </Flex>
        <Flex direction="column" gap="medium" align="center">
          <Text id="left-direction" align="center" type="text1" weight="medium" ellipsis={false}>
            Left
          </Text>
          <Info
            aria-labelledby="left-direction"
            title="Placement: Left"
            body="This dialog's direction is from the left"
            link={{ text: "Learn more about dialog direction", href: "#" }}
            position="left-start"
          />
        </Flex>
        <Flex direction="column" gap="medium" align="center">
          <Text id="right-direction" align="center" type="text1" weight="medium" ellipsis={false}>
            Right
          </Text>
          <Info
            aria-labelledby="right-direction"
            title="Placement: Right"
            body="This dialog's direction is from the right"
            link={{ text: "Learn more about dialog direction", href: "#" }}
            position="right-start"
          />
        </Flex>
        <Flex direction="column" gap="medium" align="center">
          <Text id="top-direction" align="center" type="text1" weight="medium" ellipsis={false}>
            Top
          </Text>
          <Info
            aria-labelledby="top-direction"
            title="Placement: Top"
            body="This dialog's direction is from the top"
            link={{ text: "Learn more about dialog direction", href: "#" }}
            position="top-start"
          />
        </Flex>
      </Box>
    </Flex>
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
