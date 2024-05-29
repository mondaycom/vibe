import React from "react";
import Avatar from "../Avatar";
import AvatarGroup from "../../AvatarGroup/AvatarGroup";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate, StoryDescription } from "vibe-storybook-components";
import Tooltip from "../../Tooltip/Tooltip";
import { Counter, Flex } from "../..";
import { guest, home, minus, owner, person1, person2, person3 } from "./assets";
import { WhatsNew } from "../../Icon/Icons";
import { useCallback, useState } from "react";
import "./Avatar.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Avatar,
  enumPropNamesArray: ["type", "size"],
  iconPropNamesArray: ["icon"]
});

const avatarTemplate = createComponentTemplate(Avatar);

export default {
  title: "Media/Avatar/Avatar",
  component: Avatar,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: avatarTemplate.bind({}),
  name: "Overview",

  args: {
    size: Avatar.sizes.LARGE,
    src: window.location.origin + "/" + person1,
    type: Avatar.types.IMG,
    ariaLabel: "Julia Martinez"
  }
};

export const Size = {
  render: () => (
    <>
      <Avatar size={Avatar.sizes.SMALL} src={person1} type={Avatar.types.IMG} ariaLabel="Julia Martinez" />
      <Avatar size={Avatar.sizes.MEDIUM} src={person1} type={Avatar.types.IMG} ariaLabel="Julia Martinez" />
      <Avatar size={Avatar.sizes.LARGE} src={person1} type={Avatar.types.IMG} ariaLabel="Julia Martinez" />
    </>
  ),

  name: "Size"
};

export const Disable = {
  render: () => (
    <>
      <Avatar size={Avatar.sizes.SMALL} src={person1} type={Avatar.types.IMG} disabled />
      <Avatar size={Avatar.sizes.MEDIUM} src={person1} type={Avatar.types.IMG} disabled />
      <Avatar size={Avatar.sizes.LARGE} src={person1} type={Avatar.types.IMG} disabled />
    </>
  ),
  name: "Disable"
};

export const AvatarWithText = {
  render: () => (
    <>
      <Avatar
        size={Avatar.sizes.SMALL}
        type={Avatar.types.TEXT}
        text="RM"
        backgroundColor={Avatar.colors.LIPSTICK}
        ariaLabel="Ron Meir"
      />
      <Avatar
        size={Avatar.sizes.MEDIUM}
        type={Avatar.types.TEXT}
        text="RM"
        backgroundColor={Avatar.colors.LIPSTICK}
        ariaLabel="Ron Meir"
      />
      <Avatar
        size={Avatar.sizes.LARGE}
        type={Avatar.types.TEXT}
        text="RM"
        backgroundColor={Avatar.colors.DONE_GREEN}
        ariaLabel="Ron Meir"
      />
    </>
  ),

  name: "Avatar with text"
};

export const SquareAvatar = {
  render: () => (
    <>
      <Avatar
        size={Avatar.sizes.SMALL}
        type={Avatar.types.TEXT}
        text="R"
        backgroundColor={Avatar.colors.BRIGHT_BLUE}
        square
        ariaLabel="Ron"
      />
      <Avatar
        size={Avatar.sizes.MEDIUM}
        type={Avatar.types.ICON}
        icon={WhatsNew}
        backgroundColor={Avatar.colors.AQUAMARINE}
        square
        ariaLabel="Present"
      />
      <Avatar
        size={Avatar.sizes.LARGE}
        type={Avatar.types.TEXT}
        text="RM"
        backgroundColor={Avatar.colors.WORKING_ORANGE}
        square
        ariaLabel="Ron Meir"
      />
    </>
  ),

  name: "Square avatar"
};

export const AvatarWithRightBadge = {
  render: () => (
    <>
      <Avatar
        size={Avatar.sizes.LARGE}
        type={Avatar.types.IMG}
        src={person1}
        bottomRightBadgeProps={{ src: guest }}
        ariaLabel="Julia Martinez"
      />
      <Avatar
        size={Avatar.sizes.LARGE}
        type={Avatar.types.IMG}
        src={person1}
        bottomRightBadgeProps={{ src: owner }}
        ariaLabel="Julia Martinez"
      />
    </>
  ),

  name: "Avatar with right badge"
};

export const AvatarWithLeftBadge = {
  render: () => (
    <>
      {" "}
      <Avatar
        size={Avatar.sizes.LARGE}
        type={Avatar.types.IMG}
        src={person1}
        bottomLeftBadgeProps={{ src: home }}
        ariaLabel="Julia Martinez"
      />
      <Avatar
        size={Avatar.sizes.LARGE}
        type={Avatar.types.IMG}
        src={person1}
        bottomLeftBadgeProps={{ src: minus }}
        ariaLabel="Julia Martinez"
      />
    </>
  ),

  name: "Avatar with left badge"
};

export const AvatarWithTooltip = {
  render: () => (
    <Flex direction={Flex.directions.ROW} gap={Flex.gaps.LARGE} align={Flex.align.START}>
      <StoryDescription description="Aria label tooltip" vertical align={StoryDescription.align.START}>
        <Avatar size={Avatar.sizes.LARGE} type={Avatar.types.IMG} src={person1} ariaLabel={"Julia Martinez"} />
      </StoryDescription>
      <StoryDescription description="Text tooltip" vertical align={StoryDescription.align.START}>
        <Avatar
          size={Avatar.sizes.LARGE}
          type={Avatar.types.IMG}
          src={person1}
          tooltipProps={{
            content: "Julia Martinez"
          }}
          ariaLabel={"Julia Martinez"}
        />
      </StoryDescription>
      <StoryDescription description="JSX tooltip" vertical align={StoryDescription.align.START}>
        <Avatar
          size={Avatar.sizes.LARGE}
          type={Avatar.types.IMG}
          src={person1}
          tooltipProps={{
            content: <b>Julia Martinez</b>,
            position: Tooltip.positions.BOTTOM
          }}
          ariaLabel={"Julia Martinez"}
        />
      </StoryDescription>
    </Flex>
  ),

  name: "Avatar with tooltip"
};

export const ClickableAvatar = {
  render: () => {
    const [count, setCount] = useState(0);

    const incrementCount = useCallback(() => {
      setCount(prevState => prevState + 1);
    }, []);

    return (
      <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM}>
        <Avatar
          size={Avatar.sizes.LARGE}
          type={Avatar.types.IMG}
          src={person1}
          ariaLabel="Julia Martinez"
          onClick={incrementCount}
        />
        <Counter count={count} />
      </Flex>
    );
  },

  name: "Clickable avatar"
};

export const MultipleAvatars = {
  render: () => (
    <AvatarGroup max={2} size={Avatar.sizes.LARGE}>
      <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
      <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Marco DiAngelo" />
      <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Liam Caldwell" />
    </AvatarGroup>
  ),

  name: "Multiple avatars"
};
