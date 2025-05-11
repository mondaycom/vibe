import React from "react";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Flex from "../../Flex/Flex";
import { createComponentTemplate } from "vibe-storybook-components";
import Heading from "../Heading";
import { ONE_LINE_ELLIPSIS_TEST_ID, OVERFLOW_TITLE_CONTAINER_ID } from "../__tests__/headingTestsConstants";
import { headingOverflowSuite } from "../__tests__/Heading.interactions";
import Divider from "../../Divider/Divider";
import Search from "../../Search/Search";
import Checkbox from "../../Checkbox/Checkbox";
import Button from "../../Button/Button";
import { Custom } from "@vibe/icons";
import Box from "../../Box/Box";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Heading
});

const textTemplate = createComponentTemplate(Heading);

export default {
  title: "Text/Heading",
  component: Heading,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: textTemplate.bind({}),
  name: "Overview",

  args: {
    children: "Title"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const TypesAndWeights = {
  render: () => (
    <Flex gap="large" direction="column" justify="start" align="start">
      <Flex gap="small" direction="column" justify="start" align="start">
        <Heading type="h1" weight="bold">
          Bold H1 title
        </Heading>
        <Heading type="h1" weight="medium">
          Medium H1 title
        </Heading>
        <Heading type="h1" weight="normal">
          Normal H1 title
        </Heading>
        <Heading type="h1" weight="light">
          Light H1 title
        </Heading>
      </Flex>
      <Flex gap="small" direction="column" justify="start" align="start">
        <Heading type="h2" weight="bold">
          Bold H2 title
        </Heading>
        <Heading type="h2" weight="medium">
          Medium H2 title
        </Heading>
        <Heading type="h2" weight="normal">
          Normal H2 title
        </Heading>
        <Heading type="h2" weight="light">
          Light H2 title
        </Heading>
      </Flex>
      <Flex gap="small" direction="column" justify="start" align="start">
        <Heading type="h3" weight="bold">
          Bold H3 title
        </Heading>
        <Heading type="h3" weight="medium">
          Medium H3 title
        </Heading>
        <Heading type="h3" weight="normal">
          Normal H3 title
        </Heading>
        <Heading type="h3" weight="light">
          Light H3 title
        </Heading>
      </Flex>
    </Flex>
  )
};

export const Colors = {
  render: () => (
    <Flex direction="column" align="start" gap="small">
      <Heading type="h2" color="primary">
        Primary title
      </Heading>
      <Heading type="h2" color="secondary">
        Secondary title
      </Heading>
      <Box style={{ backgroundColor: "var(--primary-color)" }} padding="small">
        <Heading element="div" type="h2" align="center" color="onPrimary">
          On primary title
        </Heading>
      </Box>
      <Box backgroundColor="invertedColorBackground" padding="small">
        <Heading element="div" type="h2" align="center" color="onInverted">
          On inverted title
        </Heading>
      </Box>
    </Flex>
  )
};

export const Overflow = {
  render: () => (
    <Flex id={OVERFLOW_TITLE_CONTAINER_ID} direction="column" gap="medium" align="stretch" style={{ width: "480px" }}>
      <Heading type="h2">Heading without overflow</Heading>
      <Heading
        type="h2"
        /**for testing purposes**/
        data-testid={ONE_LINE_ELLIPSIS_TEST_ID}
        tooltipProps={{
          containerSelector: `#${OVERFLOW_TITLE_CONTAINER_ID}`
        }}
      >
        Heading with ellipsis and tooltip when hovering
      </Heading>
      <div>
        <Heading type="h2" maxLines={2}>
          Heading with two lines overflow and a tooltip. Heading with two lines overflow and a tooltip. Heading with two
          lines overflow and a tooltip.
        </Heading>
      </div>
    </Flex>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { OVERFLOW_TITLE_CONTAINER_ID, ONE_LINE_ELLIPSIS_TEST_ID }
      }
    }
  },
  play: headingOverflowSuite
};

export const BuiltInPageHeaderNotEditable = {
  render: () => (
    <div
      style={{
        width: "100%"
      }}
    >
      <Heading type="h1" id="my-work-id">
        My work
      </Heading>
      <Divider />
      <Flex align="center" gap="small" aria-labelledby="my-work-id" style={{ marginTop: "var(--spacing-medium" }}>
        <Box style={{ width: "146px" }}>
          <Search placeholder="Search" />
        </Box>
        <Checkbox label="Hide done items" checked />
        <Button leftIcon={Custom} kind="tertiary">
          Customize
        </Button>
      </Flex>
    </div>
  ),
  name: "Built-in page header (not editable)"
};
