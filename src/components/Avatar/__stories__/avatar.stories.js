import React, { useMemo } from "react";
import { withPerformance } from "storybook-addon-performance";
import { StoryStateRow } from "../../storybook-helpers";
import Avatar from "../Avatar";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import { WhatsNew } from "../../Icon/Icons";
import StoryTitle from "../../storybook-helpers/story-title/story-title";
import { AVATAR_ALLOWED_SIZES, AVATAR_ALLOWED_TYPES } from "../AvatarConstants";
import "./avatar.stories.scss";

const IMG_SRC =
  "https://files.monday.com/use1/photos/16447897/small/16447897-Hadas_Farhi_photo_2020_10_04_10_14_06.png?1601806446";
const BADGE_SRC = "https://cdn7.monday.com/images/working-status/wfh.svg";

export const States = () => {
  const badgeProps = useMemo(() => ({ src: BADGE_SRC }), []);
  return (
    <StoryWrapper componentClassName="monday-style-story-avatar">
      <StoryTitle text="Avatar States" />
      <StoryStateRow componentDescription="Avatar with image" componentClassName="monday-style-story-avatar_states">
        <Avatar
          type={Avatar.types.IMG}
          size={Avatar.sizes.LARGE}
          img={IMG_SRC}
          className="monday-style-story-avatar_state"
        />
        <Avatar
          type={Avatar.types.IMG}
          size={Avatar.sizes.MEDIUM}
          img={IMG_SRC}
          className="monday-style-story-avatar_state"
        />
        <Avatar
          type={Avatar.types.IMG}
          size={Avatar.sizes.SMALL}
          img={IMG_SRC}
          className="monday-style-story-avatar_state"
        />
      </StoryStateRow>
      <StoryStateRow componentDescription="Avatar with text" componentClassName="monday-style-story-avatar_states">
        <Avatar
          size={Avatar.sizes.LARGE}
          text="HF"
          className="monday-style-story-avatar_state"
          backgroundColor={Avatar.colors.PURPLE}
        />
        <Avatar
          size={Avatar.sizes.MEDIUM}
          text="HF"
          className="monday-style-story-avatar_state"
          backgroundColor={Avatar.colors.WORKING_ORANGE}
        />
        <Avatar
          size={Avatar.sizes.SMALL}
          text="HF"
          className="monday-style-story-avatar_state"
          backgroundColor={Avatar.colors.INDIGO}
        />
      </StoryStateRow>
      <StoryStateRow componentDescription="Avatar with icon" componentClassName="monday-style-story-avatar_states">
        <Avatar
          type={Avatar.types.ICON}
          size={Avatar.sizes.LARGE}
          className="monday-style-story-avatar_state"
          isSquare
          icon={WhatsNew}
        />
        <Avatar
          size={Avatar.sizes.MEDIUM}
          type={Avatar.types.ICON}
          className="monday-style-story-avatar_state"
          isSquare
          icon={WhatsNew}
        />
        <Avatar
          size={Avatar.sizes.SMALL}
          type={Avatar.types.ICON}
          className="monday-style-story-avatar_state"
          isSquare
          icon={WhatsNew}
        />
      </StoryStateRow>
      <StoryStateRow componentDescription="Square avatar" componentClassName="monday-style-story-avatar_states">
        <Avatar
          size={Avatar.sizes.LARGE}
          text="W"
          isSquare
          className="monday-style-story-avatar_state"
          backgroundColor={Avatar.colors.DONE_GREEN}
        />
        <Avatar
          size={Avatar.sizes.MEDIUM}
          text="W"
          isSquare
          className="monday-style-story-avatar_state"
          backgroundColor={Avatar.colors.LIPSTICK}
        />
        <Avatar
          size={Avatar.sizes.SMALL}
          text="W"
          isSquare
          className="monday-style-story-avatar_state"
          backgroundColor={Avatar.colors.RIVER}
        />
      </StoryStateRow>
      <StoryStateRow
        componentDescription="Disabled avatar with image"
        componentClassName="monday-style-story-avatar_states"
      >
        <Avatar
          size={Avatar.sizes.LARGE}
          type={Avatar.types.IMG}
          img={IMG_SRC}
          isDisabled
          className="monday-style-story-avatar_state"
        />
        <Avatar
          size={Avatar.sizes.MEDIUM}
          img={IMG_SRC}
          type={Avatar.types.IMG}
          isDisabled
          className="monday-style-story-avatar_state"
        />
        <Avatar
          size={Avatar.sizes.SMALL}
          img={IMG_SRC}
          isDisabled
          type={Avatar.types.IMG}
          className="monday-style-story-avatar_state"
        />
      </StoryStateRow>
      <StoryStateRow
        componentDescription="Disabled avatar with text"
        componentClassName="monday-style-story-avatar_states"
      >
        <Avatar
          size={Avatar.sizes.LARGE}
          text="HF"
          backgroundColor={Avatar.colors.GRASS_GREEN}
          isDisabled
          className="monday-style-story-avatar_state"
        />
        <Avatar
          size={Avatar.sizes.MEDIUM}
          text="HF"
          backgroundColor={Avatar.colors.WORKING_ORANGE}
          isDisabled
          className="monday-style-story-avatar_state"
        />
        <Avatar
          size={Avatar.sizes.SMALL}
          text="HF"
          backgroundColor={Avatar.colors.INDIGO}
          isDisabled
          className="monday-style-story-avatar_state"
        />
      </StoryStateRow>
      <StoryStateRow
        componentDescription="Avatar with top badges"
        componentClassName="monday-style-story-avatar_states"
      >
        <Avatar
          size={Avatar.sizes.LARGE}
          text="RM"
          className="monday-style-story-avatar_state"
          topLeftBadgeProps={badgeProps}
          topRightBadgeProps={badgeProps}
        />
        <Avatar
          size={Avatar.sizes.MEDIUM}
          text="RM"
          className="monday-style-story-avatar_state"
          topLeftBadgeProps={badgeProps}
          topRightBadgeProps={badgeProps}
        />
        <Avatar
          size={Avatar.sizes.SMALL}
          text="RM"
          className="monday-style-story-avatar_state"
          topLeftBadgeProps={badgeProps}
          topRightBadgeProps={badgeProps}
        />
      </StoryStateRow>
      <StoryStateRow
        componentDescription="Avatar with bottom badges"
        componentClassName="monday-style-story-avatar_states"
      >
        <Avatar
          size={Avatar.sizes.LARGE}
          text="RM"
          className="monday-style-story-avatar_state"
          bottomLeftBadgeProps={badgeProps}
          bottomRightBadgeProps={badgeProps}
        />
        <Avatar
          size={Avatar.sizes.MEDIUM}
          text="RM"
          className="monday-style-story-avatar_state"
          bottomLeftBadgeProps={badgeProps}
          bottomRightBadgeProps={badgeProps}
        />
        <Avatar
          size={Avatar.sizes.SMALL}
          text="RM"
          className="monday-style-story-avatar_state"
          bottomLeftBadgeProps={badgeProps}
          bottomRightBadgeProps={badgeProps}
        />
      </StoryStateRow>
    </StoryWrapper>
  );
};

export const Sandbox = () => {
  return (
    <StoryWrapper>
      <StoryTitle text="Avatar Sandbox" />
      <Avatar
        type={select("Type", Avatar.types.TEXT, AVATAR_ALLOWED_TYPES)}
        text={text("Text", "S")}
        ariaLabel={text("Aria Label", "My avatar")}
        isDisabled={boolean("Is disabled", false)}
        size={select("Size", Avatar.sizes.LARGE, AVATAR_ALLOWED_SIZES)}
        role={text("Role", "img")}
        backgroundColor={select("Background color", Object.keys(Avatar.colors), Avatar.colors.DONE_GREEN)}
        tabIndex={number("Tab index", 0)}
        ariaHidden={boolean("Aria hidden", false)}
        isSquare={boolean("Is square", false)}
      />
    </StoryWrapper>
  );
};
export default {
  title: "Components/Avatar",
  component: Avatar,
  decorators: [withPerformance]
};
