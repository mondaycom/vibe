import React, { useCallback, useState } from "react";
import { withPerformance } from "storybook-addon-performance";
import { StoryStateColumn, StoryStateRow } from "../../storybook-helpers";
import { Avatar } from "../Avatar";
import { boolean, text } from "@storybook/addon-knobs";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import "./avatar.stories.scss";

const IMG_SRC =
  "https://files.monday.com/use1/photos/16447897/small/16447897-Hadas_Farhi_photo_2020_10_04_10_14_06.png?1601806446";

export const States = () => {
  return (
    <StoryWrapper componentClassName="monday-style-story-avatar">
      <StoryStateRow componentDescription="Avatar with image" componentClassName="monday-style-story-avatar_states">
        <Avatar size={Avatar.sizes.LARGE} img={IMG_SRC} className="monday-style-story-avatar_state" />
        <Avatar size={Avatar.sizes.MEDIUM} img={IMG_SRC} className="monday-style-story-avatar_state" />
        <Avatar size={Avatar.sizes.SMALL} img={IMG_SRC} className="monday-style-story-avatar_state" />
      </StoryStateRow>
      <StoryStateRow componentDescription="Avatar with text" componentClassName="monday-style-story-avatar_states">
        <Avatar size={Avatar.sizes.LARGE} text="HF" className="monday-style-story-avatar_state" />
        <Avatar size={Avatar.sizes.MEDIUM} text="HF" className="monday-style-story-avatar_state" />
        <Avatar size={Avatar.sizes.SMALL} text="HF" className="monday-style-story-avatar_state" />
      </StoryStateRow>
      <StoryStateRow componentDescription="Avatar with icon" componentClassName="monday-style-story-avatar_states">
        <Avatar size={Avatar.sizes.LARGE} className="monday-style-story-avatar_state" />
        <Avatar size={Avatar.sizes.MEDIUM} className="monday-style-story-avatar_state" />
        <Avatar size={Avatar.sizes.SMALL} className="monday-style-story-avatar_state" />
      </StoryStateRow>
      <StoryStateRow componentDescription="Square avatar" componentClassName="monday-style-story-avatar_states">
        <Avatar size={Avatar.sizes.LARGE} text="W" isSquare className="monday-style-story-avatar_state" />
        <Avatar size={Avatar.sizes.MEDIUM} text="W" isSquare className="monday-style-story-avatar_state" />
        <Avatar size={Avatar.sizes.SMALL} text="W" isSquare className="monday-style-story-avatar_state" />
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
        <Avatar size={Avatar.sizes.LARGE} text="HF" isDisabled className="monday-style-story-avatar_state" />
        <Avatar size={Avatar.sizes.MEDIUM} text="HF" isDisabled className="monday-style-story-avatar_state" />
        <Avatar size={Avatar.sizes.SMALL} text="HF" isDisabled className="monday-style-story-avatar_state" />
      </StoryStateRow>
    </StoryWrapper>
  );
};

export default {
  title: "Components/Avatar",
  component: Avatar,
  decorators: [withPerformance]
};
