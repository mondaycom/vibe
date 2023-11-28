import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Flex from "../../Flex/Flex";
import { createComponentTemplate } from "vibe-storybook-components";
import Heading from "../Heading";
import { ONE_LINE_ELLIPSIS_TEST_ID, OVERFLOW_TITLE_CONTAINER_ID } from "../__tests__/heading-tests-constants";
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
    <Flex
      gap={Flex.gaps.SMALL}
      direction={Flex.directions.COLUMN}
      justify={Flex.justify.START}
      align={Flex.align.START}
    >
      <Heading type={Heading.types.H1} weight={Heading.weights.BOLD}>
        Bold H1 title
      </Heading>
      <Heading type={Heading.types.H1} weight="normal">
        Normal H1 title
      </Heading>
      <Heading type={Heading.types.H1} weight={Heading.weights.LIGHT}>
        Light H1 title
      </Heading>
      <Heading type={Heading.types.H2} weight={Heading.weights.BOLD}>
        Bold H2 title
      </Heading>
      <Heading type={Heading.types.H2} weight={Heading.weights.NORMAL}>
        Normal H2 title
      </Heading>
      <Heading type={Heading.types.H2} weight={Heading.weights.LIGHT}>
        Light H2 title
      </Heading>
      <Heading type={Heading.types.H3} weight={Heading.weights.BOLD}>
        Bold H3 title
      </Heading>
      <Heading type={Heading.types.H3} weight={Heading.weights.NORMAL}>
        Normal H3 title
      </Heading>
      <Heading type={Heading.types.H3} weight={Heading.weights.LIGHT}>
        Light H3 title
      </Heading>
    </Flex>
  ),

  name: "Types and weights"
};

export const Colors = {
  render: () => (
    <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.SMALL}>
      <Heading type={Heading.types.H2} color={Heading.colors.PRIMARY}>
        Primary title
      </Heading>
      <Heading type={Heading.types.H2} color={Heading.colors.SECONDARY}>
        Secondary title
      </Heading>
      <Heading
        element="div"
        type={Heading.types.H2}
        className={styles.primaryBackground}
        align={Heading.align.CENTER}
        color={Heading.colors.ON_PRIMARY}
      >
        On primary title
      </Heading>
      <Heading
        element="div"
        type={Heading.types.H2}
        className={styles.invertedBackground}
        align={Heading.align.CENTER}
        color={Heading.colors.ON_INVERTED}
      >
        On inverted title
      </Heading>
    </Flex>
  ),

  name: "Colors"
};

export const Overflow = {
  render: () => (
    <Flex
      id={OVERFLOW_TITLE_CONTAINER_ID}
      direction={Flex.directions.COLUMN}
      gap={Flex.gaps.MEDIUM}
      align={Flex.align.STRETCH}
      style={{ width: "480px" }}
    >
      <Heading type={Heading.types.H2}>Heading without overflow</Heading>
      <Heading
        type={Heading.types.H2}
        /**for testing purposes**/
        data-testid={ONE_LINE_ELLIPSIS_TEST_ID}
        tooltipProps={{
          containerSelector: `#${OVERFLOW_TITLE_CONTAINER_ID}`
        }}
      >
        Heading with ellipsis and tooltip when hovering
      </Heading>
      <div>
        <Heading type={Heading.types.H2} maxLines={2}>
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
      <Heading type={Heading.types.H1} id="my-work-id">
        My work
      </Heading>
      <Divider className={styles.pageDivider} />
      <Flex align={Flex.align.CENTER} gap={Flex.gaps.SMALL} aria-labelledby="my-work-id">
        <Search wrapperClassName={styles.pageHeaderSearch} placeholder="Search" />
        <Checkbox label="Hide done items" checked />
        <Button leftIcon={Custom} kind={Button.kinds.TERTIARY}>
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
      <Heading type={Heading.types.H2} id="empty-state-id" className={styles.emptyStateHeading}>
        No updates yet for this item
      </Heading>
      <Text
        element="span"
        type={Text.types.TEXT1}
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
