import React from "react";
import Avatar from "../Avatar";
import AvatarGroup from "../../AvatarGroup/AvatarGroup";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate, StoryDescription } from "vibe-storybook-components";
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
    size: "large",
    src: window.location.origin + "/" + person1,
    type: "img",
    ariaLabel: "Julia Martinez"
  }
};

export const Size = {
  render: () => (
    <>
      <Avatar size="small" src={person1} type="img" ariaLabel="Julia Martinez" />
      <Avatar size="medium" src={person1} type="img" ariaLabel="Julia Martinez" />
      <Avatar size="large" src={person1} type="img" ariaLabel="Julia Martinez" />
    </>
  ),

  name: "Size"
};

export const Disable = {
  render: () => (
    <>
      <Avatar size="small" src={person1} type="img" disabled />
      <Avatar size="medium" src={person1} type="img" disabled />
      <Avatar size="large" src={person1} type="img" disabled />
    </>
  ),
  name: "Disable"
};

export const AvatarWithText = {
  render: () => (
    <>
      <Avatar size="small" type="text" text="RM" backgroundColor={Avatar.colors.LIPSTICK} ariaLabel="Ron Meir" />
      <Avatar size="medium" type="text" text="RM" backgroundColor={Avatar.colors.LIPSTICK} ariaLabel="Ron Meir" />
      <Avatar size="large" type="text" text="RM" backgroundColor={Avatar.colors.DONE_GREEN} ariaLabel="Ron Meir" />
    </>
  ),

  name: "Avatar with text"
};

export const SquareAvatar = {
  render: () => (
    <>
      <Avatar size="small" type="text" text="R" backgroundColor={Avatar.colors.BRIGHT_BLUE} square ariaLabel="Ron" />
      <Avatar
        size="medium"
        type="icon"
        icon={WhatsNew}
        backgroundColor={Avatar.colors.AQUAMARINE}
        square
        ariaLabel="Present"
      />
      <Avatar
        size="large"
        type="text"
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
      <Avatar size="large" type="img" src={person1} bottomRightBadgeProps={{ src: guest }} ariaLabel="Julia Martinez" />
      <Avatar size="large" type="img" src={person1} bottomRightBadgeProps={{ src: owner }} ariaLabel="Julia Martinez" />
    </>
  ),

  name: "Avatar with right badge"
};

export const AvatarWithLeftBadge = {
  render: () => (
    <>
      {" "}
      <Avatar size="large" type="img" src={person1} bottomLeftBadgeProps={{ src: home }} ariaLabel="Julia Martinez" />
      <Avatar size="large" type="img" src={person1} bottomLeftBadgeProps={{ src: minus }} ariaLabel="Julia Martinez" />
    </>
  ),

  name: "Avatar with left badge"
};

export const AvatarWithTooltip = {
  render: () => (
    <Flex direction={Flex.directions.ROW} gap={Flex.gaps.LARGE} align={Flex.align.START}>
      <StoryDescription description="Aria label tooltip" vertical align={StoryDescription.align.START}>
        <Avatar size="large" type="img" src={person1} ariaLabel={"Julia Martinez"} />
      </StoryDescription>
      <StoryDescription description="Text tooltip" vertical align={StoryDescription.align.START}>
        <Avatar
          size="large"
          type="img"
          src={person1}
          tooltipProps={{
            content: "Julia Martinez"
          }}
          ariaLabel={"Julia Martinez"}
        />
      </StoryDescription>
      <StoryDescription description="JSX tooltip" vertical align={StoryDescription.align.START}>
        <Avatar
          size="large"
          type="img"
          src={person1}
          tooltipProps={{
            content: <b>Julia Martinez</b>,
            position: "bottom"
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
        <Avatar size="large" type="img" src={person1} ariaLabel="Julia Martinez" onClick={incrementCount} />
        <Counter count={count} />
      </Flex>
    );
  },

  name: "Clickable avatar"
};

export const MultipleAvatars = {
  render: () => (
    <AvatarGroup max={2} size="large">
      <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
      <Avatar type="img" src={person2} ariaLabel="Marco DiAngelo" />
      <Avatar type="img" src={person3} ariaLabel="Liam Caldwell" />
    </AvatarGroup>
  ),

  name: "Multiple avatars"
};
