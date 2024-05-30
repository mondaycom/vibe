import React from "react";
import Heading from "../LegacyHeading";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Divider from "../../Divider/Divider";
import Search from "../../Search/Search";
import Checkbox from "../../Checkbox/Checkbox";
import Button from "../../Button/Button";
import Flex from "../../Flex/Flex";
import { Custom } from "../../Icon/Icons";
import emptyStateExample from "../../../storybook/stories-common-assets/emptyStateExample.svg";
import styles from "./LegacyHeading.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Heading,
  enumPropNamesArray: ["type", "size"]
});

export default {
  title: "Text/LegacyHeading [deprecated]",
  component: Heading,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: () => <Heading value="Hello world" />,
  name: "Overview",
  args: {}
};

export const Sizes = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Heading type={Heading.types.h1} value="Hello H1" />
      <Heading type={Heading.types.h1} value="Hello H1 medium" size={Heading.sizes.MEDIUM} />
      <Heading type={Heading.types.h2} value="Hello H2" />
      <Heading type={Heading.types.h2} value="Hello H2 small" size={Heading.sizes.SMALL} />
      <Heading type={Heading.types.h3} value="Hello H3" />
      <Heading type={Heading.types.h4} value="Suggest Edit H4" suggestEditOnHover />
      <Heading type={Heading.types.h5} value="H5 with tooltip" nonEllipsisTooltip="Click to edit" />
    </div>
  ),

  name: "Sizes"
};

export const Overflow = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "70%"
      }}
    >
      <Heading
        type={Heading.types.h2}
        value="Heading without overflow heading without overflow heading without overflow"
        ellipsis={false}
        nonEllipsisTooltip="Non ellipsis tooltip"
      />
      <Heading
        type={Heading.types.h2}
        value="Heading with overflow heading with overflow heading with overflow heading with overflow heading with overflow"
        ellipsis
        nonEllipsisTooltip="Non ellipsis tooltip (this tooltip is not shown since overflow)"
      />
      <div>
        <Heading
          type={Heading.types.h2}
          value="Heading with overflow when text is longer then 2 lines heading with overflow when text is longer then 2 lines heading with overflow when text is longer then 2 lines"
          ellipsisMaxLines={2}
          nonEllipsisTooltip="Non ellipsis tooltip (this tooltip is not shown since overflow)"
        />
      </div>
    </div>
  ),

  name: "Overflow"
};

export const TextHighlight = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "70%"
      }}
    >
      <Heading
        type={Heading.types.h2}
        highlightTerm="heading highlight"
        value="Heading with highlight text heading with highlight text without overflow"
        ellipsis={false}
        nonEllipsisTooltip="Tooltip when no overflow"
      />
      <Heading
        type={Heading.types.h2}
        highlightTerm="heading highlight"
        value="Heading with highlight text heading with highlight text heading with highlight text heading with highlight text"
        nonEllipsisTooltip="Non ellipsis tooltip (this tooltip is not shown since overflow)"
      />
      <Heading
        type={Heading.types.h2}
        highlightTerm="heading highlight"
        value="Heading with highlight text when text is longer then 2 lines heading with overflow when text is longer then 2 lines heading with overflow when text is longer then 2 lines"
        ellipsisMaxLines={2}
      />
    </div>
  ),

  name: "Text Highlight"
};

export const NotEditableHeaderOfAPage = {
  render: () => (
    <div
      style={{
        width: "100%"
      }}
    >
      <Heading type={Heading.types.h1} value="My Work" id="my-work-id" />
      <Divider />
      <Flex align={Flex.align.CENTER} gap={Flex.gaps.SMALL} aria-labelledby="my-work-id">
        <Search className={styles["page-header_search"]} placeholder="Search" />
        <Checkbox label="Hide done items" checked />
        <Button leftIcon={Custom} kind={Button.kinds.TERTIARY}>
          Customize
        </Button>
      </Flex>
    </div>
  ),

  name: "Not editable header of a page"
};

export const EmptyStateTitle = {
  render: () => (
    <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.SMALL} aria-labelledby="empty-state-id">
      <img
        style={{
          width: "290px"
        }}
        src={emptyStateExample}
        alt=""
      />
      <Heading type={Heading.types.h2} id="empty-state-id" value="No updates yet for this item" />
      <span
        style={{
          width: "50%",
          textAlign: "center"
        }}
      >
        Be the first one to update about progress, mention someone or upload files to share with your team members
      </span>
    </Flex>
  ),

  name: "Empty state title"
};
