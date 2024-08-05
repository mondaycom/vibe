import React from "react";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Flex from "../../Flex/Flex";
import { createComponentTemplate } from "vibe-storybook-components";
import Heading from "../Heading";
import { ONE_LINE_ELLIPSIS_TEST_ID, OVERFLOW_TITLE_CONTAINER_ID } from "../__tests__/headingTestsConstants";
import { headingOverflowSuite } from "../__tests__/Heading.interactions";
import Divider from "../../Divider/Divider";
import Text from "../../Text/Text";
import Search from "../../Search/Search";
import Checkbox from "../../Checkbox/Checkbox";
import Button from "../../Button/Button";
import { Custom } from "../../Icon/Icons";
import emptyStateExample from "../../../storybook/stories-common-assets/emptyStateExample.svg";
import styles from "./Heading.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Heading,
  iconPropNamesArray: [], // List props that are typed as icons here
  actionPropsArray: [] // List the component's actions here
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
  ),

  name: "Types and weights"
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
      <Heading element="div" type="h2" className={styles.primaryBackground} align="center" color="onPrimary">
        On primary title
      </Heading>
      <Heading element="div" type="h2" className={styles.invertedBackground} align="center" color="onInverted">
        On inverted title
      </Heading>
    </Flex>
  ),

  name: "Colors"
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

  name: "Overflow",
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
      <Divider className={styles.pageDivider} />
      <Flex align="center" gap="small" aria-labelledby="my-work-id">
        <Search className={styles.pageHeaderSearch} placeholder="Search" />
        <Checkbox label="Hide done items" checked />
        <Button leftIcon={Custom} kind="tertiary">
          Customize
        </Button>
      </Flex>
    </div>
  ),

  name: "Built-in page header (not editable)"
};

export const EmptyStateHeading = {
  render: () => (
    <div className={styles.emptyStateContainer} aria-labelledby="empty-state-id">
      <img
        style={{
          width: "290px"
        }}
        src={emptyStateExample}
        alt=""
      />
      <Heading type="h2" id="empty-state-id" className={styles.emptyStateHeading}>
        No updates yet for this item
      </Heading>
      <Text
        element="span"
        type="text1"
        style={{
          width: "50%",
          textAlign: "center"
        }}
        ellipsis={false}
      >
        Be the first one to update about progress, mention someone or upload files to share with your team members
      </Text>
    </div>
  ),

  name: "Empty state heading"
};
