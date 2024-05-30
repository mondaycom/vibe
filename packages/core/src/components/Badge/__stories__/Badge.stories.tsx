import React from "react";
import Badge from "../Badge";
import person from "./assets/person.png";
import { ExternalPage, WhatsNew } from "../../Icon/Icons";
import Link from "../../Link/Link";
import Button from "../../Button/Button";
import Flex from "../../Flex/Flex";
import Avatar from "../../Avatar/Avatar";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate, StoryDescription } from "vibe-storybook-components";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Badge,
  enumPropNamesArray: ["anchor", "alignment", "type"],
  iconPropNamesArray: [],
  actionPropsArray: [],
  ignoreControlsPropNamesArray: ["children"]
});

const badgeTemplate = createComponentTemplate(Badge);

export default {
  title: "Feedback/Badge",
  component: Badge,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: badgeTemplate.bind({}),
  name: "Overview",

  args: {
    children: <Button leftIcon={WhatsNew}>{"What's new"}</Button>
  }
};

export const States = {
  render: () => (
    <Flex
      gap={Flex.gaps.LARGE}
      style={{
        flex: 1
      }}
      justify={Flex.justify.START}
      align={Flex.align.START}
    >
      <StoryDescription description="Indicator" vertical align={StoryDescription.align.START}>
        <Badge>
          <Button leftIcon={WhatsNew}>{"What's new"}</Button>
        </Badge>
      </StoryDescription>
      <StoryDescription description="Counter" vertical align={StoryDescription.align.START}>
        <Badge type={Badge.types.COUNTER} count={100} maxDigits={2}>
          <Button leftIcon={WhatsNew}>{"What's new"}</Button>
        </Badge>
      </StoryDescription>
    </Flex>
  ),

  name: "States"
};

export const ButtonStory = {
  render: () => (
    <Badge alignment={Badge.alignments.RECTANGULAR}>
      <Button leftIcon={ExternalPage}>Button</Button>
    </Badge>
  ),

  name: "Button"
};

export const AvatarStory = {
  render: () => (
    <Badge alignment={Badge.alignments.CIRCULAR}>
      <Avatar size={Avatar.sizes.LARGE} src={person} type={Avatar.types.IMG} />
    </Badge>
  ),

  name: "Avatar"
};

export const InlineElements = {
  render: () => (
    <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM} align={Flex.align.START}>
      <Badge alignment={Badge.alignments.OUTSIDE}>
        <Link text="Read more" />
      </Badge>
      <Badge alignment={Badge.alignments.OUTSIDE}>
        <Link text="What's new" iconPosition={Link.iconPositions.START} icon={WhatsNew} />
      </Badge>
      <Badge alignment={Badge.alignments.OUTSIDE}>
        <Link text="Learn more" iconPosition={Link.iconPositions.END} icon={ExternalPage} />
      </Badge>
    </Flex>
  ),

  name: "Inline elements"
};
