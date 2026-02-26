import React from "react";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { Text, Link, Heading, Box, Flex } from "@vibe/core";
import { createComponentTemplate, StorybookLink } from "vibe-storybook-components";
import { ONE_LINE_ELLIPSIS_TEST_ID, OVERFLOW_TEXT_CONTAINER_ID, textOverflowSuite } from "./Text.interactions";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Text
});

export default {
  title: "Text/Text",
  component: Text,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const textTemplate = createComponentTemplate(Text);

export const Overview = {
  render: textTemplate.bind({}),
  name: "Overview",

  args: {
    children: "Hi, I'm a text!"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const SizesAndWeights = {
  render: () => (
    <Flex gap="large" direction="column" justify="start" align="start">
      <Flex gap="small" direction="column" justify="start" align="start">
        <Text type="text1" weight="bold">
          This is text1 bold
        </Text>
        <Text type="text1" weight="medium">
          This is text1 medium
        </Text>
        <Text type="text1" weight="normal">
          This is text1 normal
        </Text>
      </Flex>

      <Flex gap="small" direction="column" justify="start" align="start">
        <Text type="text2" weight="bold">
          This is text2 bold
        </Text>
        <Text type="text2" weight="medium">
          This is text2 medium
        </Text>
        <Text type="text2" weight="normal">
          This is text2 normal
        </Text>
      </Flex>
      <Flex gap="small" direction="column" justify="start" align="start">
        <Text type="text3" weight="medium">
          This is text3 medium
        </Text>
        <Text type="text3" weight="normal">
          This is text3 normal
        </Text>
      </Flex>
    </Flex>
  )
};

export const Colors = {
  render: () => (
    <Flex direction="column" align="start" gap="small">
      <Text color="primary">Primary text</Text>
      <Text color="secondary">Secondary text</Text>
      <Box style={{ backgroundColor: "var(--primary-color)", width: "150px" }} padding="small">
        <Text align="center" color="onPrimary">
          On primary text
        </Text>
      </Box>
      <Box style={{ width: "150px" }} backgroundColor="invertedColorBackground" padding="small">
        <Text align="center" color="onInverted">
          On inverted text
        </Text>
      </Box>
      <Box style={{ width: "150px", backgroundColor: "black" }} padding="small">
        <Text align="center" color="fixedLight">
          Fixed light
        </Text>
      </Box>
      <Box style={{ width: "150px", backgroundColor: "whitesmoke" }} padding="small">
        <Text align="center" color="fixedDark">
          Fixed dark
        </Text>
      </Box>
    </Flex>
  )
};

export const Overflow = {
  render: () => (
    <Flex
      direction="column"
      id={OVERFLOW_TEXT_CONTAINER_ID}
      justify="start"
      align="initial"
      gap="small"
      style={{ width: "480px" }}
    >
      <Heading type="h3">Text with 1 line</Heading>
      <Text
        data-testid={ONE_LINE_ELLIPSIS_TEST_ID}
        /**for testing purposes**/
        tooltipProps={{
          containerSelector: `#${OVERFLOW_TEXT_CONTAINER_ID}`
        }}
      >
        This is an example of text with overflow and a Tooltip to help or provide information about specific components
        when a user hovers over them.
      </Text>
      <Heading type="h3">Text with 2 lines</Heading>
      <Text maxLines={2}>
        This is an example of text with ellipsis which displayed after two full lines of content this is an example of
        text with ellipsis which displayed after two full lines of content
      </Text>
      <Heading type="h3">Text with array of elements</Heading>
      <Text maxLines={1}>
        {[
          "This is an example of array of texts and ",
          <Link text="Other elements" href="https://www.monday.com" inheritFontSize inlineText />,
          " that are overflowing and create a tooltip with the correct information"
        ]}
      </Text>
    </Flex>
  ),

  parameters: {
    docs: {
      liveEdit: {
        scope: { OVERFLOW_TEXT_CONTAINER_ID, ONE_LINE_ELLIPSIS_TEST_ID }
      }
    }
  },
  play: textOverflowSuite
};

export const Paragraph = {
  render: () => (
    <Flex direction="column">
      <Text element="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Text>
      <Text element="p" ellipsis maxLines={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Text>
    </Flex>
  )
};

export const LinksInsideRunningText = {
  render: () => (
    <Flex direction="column" align="start" gap="small">
      <Text align="center">
        This is the story of a{" "}
        <StorybookLink page="Foundations/Typography" size={"small"}>
          link
        </StorybookLink>{" "}
        inside running text.
      </Text>
      <Box style={{ backgroundColor: "var(--primary-color)", width: "420px" }} padding="small">
        <Text align="center" color="onPrimary">
          This is the story of a{" "}
          <StorybookLink page="Foundations/Typography" size={"small"}>
            link
          </StorybookLink>{" "}
          inside running text on a primary color
        </Text>
      </Box>
      <Box style={{ width: "420px" }} backgroundColor="invertedColorBackground" padding="small">
        <Text align="center" color="onInverted">
          This is the story of a{" "}
          <StorybookLink page="Foundations/Typography" size={"small"}>
            link
          </StorybookLink>{" "}
          inside running text on an inverted color
        </Text>
      </Box>
      <Box style={{ backgroundColor: "black", width: "420px" }} padding="small">
        <Text ellipsis={false} style={{}} align="center" color="fixedLight">
          This is the story of a{" "}
          <StorybookLink page="Foundations/Typography" size={"small"}>
            link
          </StorybookLink>{" "}
          inside running text with fixed light color
        </Text>
      </Box>
      <Box style={{ backgroundColor: "whitesmoke", width: "420px" }} padding="small">
        <Text ellipsis={false} align="center" color="fixedDark">
          This is the story of a{" "}
          <StorybookLink page="Foundations/Typography" size={"small"}>
            link
          </StorybookLink>{" "}
          inside running text with fixed dark color
        </Text>
      </Box>
    </Flex>
  ),

  parameters: {
    docs: {
      liveEdit: {
        scope: { StorybookLink }
      }
    }
  },
  name: "Links inside running text"
};
