import React, { useMemo } from "react";
import { withPerformance } from "storybook-addon-performance";
import { StoryStateRow } from "../../storybook-helpers";
import { Avatar } from "../Avatar";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import { AvatarBadge } from "../AvatarBadge";
import { Locked } from "../../Icon/Icons";
import StoryTitle from "../../storybook-helpers/story-title/story-title";
import { contentColors } from "../../../general-stories/colors/colors-vars-map";
import { stateSelectedColors } from "../../../general-stories/colors/colors-vars-map";
import "./avatar.stories.scss";
import { AVATAR_ALLOWED_SIZES } from "../AvatarConstants";

const IMG_SRC =
  "https://files.monday.com/use1/photos/16447897/small/16447897-Hadas_Farhi_photo_2020_10_04_10_14_06.png?1601806446";

export const States = () => {
  const bottomLeftBadgeProps = useMemo(() => ({ icon: Locked }));
  return (
    <StoryWrapper componentClassName="monday-style-story-avatar">
      <StoryTitle text="Avatar States" />
      <StoryStateRow componentDescription="Avatar with image" componentClassName="monday-style-story-avatar_states">
        <Avatar size={Avatar.sizes.LARGE} img={IMG_SRC} className="monday-style-story-avatar_state" />
        <Avatar size={Avatar.sizes.MEDIUM} img={IMG_SRC} className="monday-style-story-avatar_state" />
        <Avatar size={Avatar.sizes.SMALL} img={IMG_SRC} className="monday-style-story-avatar_state" />
      </StoryStateRow>
      <StoryStateRow componentDescription="Avatar with text" componentClassName="monday-style-story-avatar_states">
        <Avatar
          size={Avatar.sizes.LARGE}
          children="HF"
          className="monday-style-story-avatar_state"
          backgroundColor={Avatar.colors.GRASS_GREEN}
        />
        <Avatar
          size={Avatar.sizes.MEDIUM}
          children="HF"
          className="monday-style-story-avatar_state"
          backgroundColor={Avatar.colors.WORKING_ORANGE}
        />
        <Avatar
          size={Avatar.sizes.SMALL}
          children="HF"
          className="monday-style-story-avatar_state"
          backgroundColor={Avatar.colors.INDIGO}
        />
      </StoryStateRow>
      <StoryStateRow componentDescription="Avatar with icon" componentClassName="monday-style-story-avatar_states">
        <Avatar size={Avatar.sizes.LARGE} className="monday-style-story-avatar_state" />
        <Avatar size={Avatar.sizes.MEDIUM} className="monday-style-story-avatar_state" />
        <Avatar size={Avatar.sizes.SMALL} className="monday-style-story-avatar_state" />
      </StoryStateRow>
      <StoryStateRow componentDescription="Square avatar" componentClassName="monday-style-story-avatar_states">
        <Avatar
          size={Avatar.sizes.LARGE}
          children="W"
          isSquare
          className="monday-style-story-avatar_state"
          backgroundColor={Avatar.colors.DONE_GREEN}
        />
        <Avatar
          size={Avatar.sizes.MEDIUM}
          children="W"
          isSquare
          className="monday-style-story-avatar_state"
          backgroundColor={Avatar.colors.LIPSTICK}
        />
        <Avatar
          size={Avatar.sizes.SMALL}
          children="W"
          isSquare
          className="monday-style-story-avatar_state"
          backgroundColor={Avatar.colors.RIVER}
        />
      </StoryStateRow>
      <StoryStateRow
        componentDescription="Disabled avatar with image"
        componentClassName="monday-style-story-avatar_states"
      >
        <Avatar size={Avatar.sizes.LARGE} img={IMG_SRC} isDisabled className="monday-style-story-avatar_state" />
        <Avatar size={Avatar.sizes.MEDIUM} img={IMG_SRC} isDisabled className="monday-style-story-avatar_state" />
        <Avatar size={Avatar.sizes.SMALL} img={IMG_SRC} isDisabled className="monday-style-story-avatar_state" />
      </StoryStateRow>
      <StoryStateRow
        componentDescription="Disabled avatar with text"
        componentClassName="monday-style-story-avatar_states"
      >
        <Avatar
          size={Avatar.sizes.LARGE}
          children="HF"
          backgroundColor={Avatar.colors.GRASS_GREEN}
          isDisabled
          className="monday-style-story-avatar_state"
        />
        <Avatar
          size={Avatar.sizes.MEDIUM}
          children="HF"
          backgroundColor={Avatar.colors.WORKING_ORANGE}
          isDisabled
          className="monday-style-story-avatar_state"
        />
        <Avatar
          size={Avatar.sizes.SMALL}
          children="HF"
          backgroundColor={Avatar.colors.INDIGO}
          isDisabled
          className="monday-style-story-avatar_state"
        />
      </StoryStateRow>
      <StoryStateRow componentDescription="Avatar with badges" componentClassName="monday-style-story-avatar_states">
        <Avatar
          size={Avatar.sizes.LARGE}
          children="HF"
          className="monday-style-story-avatar_state"
          bottomLeftBadgeProps={bottomLeftBadgeProps}
          bottomRightBadgeProps={bottomLeftBadgeProps}
          topLeftBadgeProps={bottomLeftBadgeProps}
          topRightBadgeProps={bottomLeftBadgeProps}
        />
        <Avatar
          size={Avatar.sizes.MEDIUM}
          children="HF"
          className="monday-style-story-avatar_state"
          bottomLeftBadgeProps={bottomLeftBadgeProps}
          bottomRightBadgeProps={bottomLeftBadgeProps}
          topLeftBadgeProps={bottomLeftBadgeProps}
          topRightBadgeProps={bottomLeftBadgeProps}
        />
        <Avatar
          size={Avatar.sizes.SMALL}
          children="HF"
          className="monday-style-story-avatar_state"
          bottomLeftBadgeProps={bottomLeftBadgeProps}
          bottomRightBadgeProps={bottomLeftBadgeProps}
          topLeftBadgeProps={bottomLeftBadgeProps}
          topRightBadgeProps={bottomLeftBadgeProps}
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
        children={text("Text", "S")}
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
