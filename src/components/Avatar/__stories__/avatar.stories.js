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
        <Avatar size={Avatar.sizes.LARGE} img={IMG_SRC} />
        <Avatar size={Avatar.sizes.MEDIUM} img={IMG_SRC} />
        <Avatar size={Avatar.sizes.SMALL} img={IMG_SRC} />
      </StoryStateRow>
      <StoryStateRow componentDescription="Avatar with text">
        <Avatar size={Avatar.sizes.LARGE} text="HF" />
        <Avatar size={Avatar.sizes.MEDIUM} text="HF" />
        <Avatar size={Avatar.sizes.SMALL} text="HF" />
      </StoryStateRow>
      <StoryStateRow componentDescription="Avatar with icon">
        <Avatar size={Avatar.sizes.LARGE} />
        <Avatar size={Avatar.sizes.MEDIUM} />
        <Avatar size={Avatar.sizes.SMALL} />
      </StoryStateRow>
      <StoryStateRow componentDescription="Avatar with empty state">
        <Avatar size={Avatar.sizes.LARGE} />
        <Avatar size={Avatar.sizes.MEDIUM} />
        <Avatar size={Avatar.sizes.SMALL} />
      </StoryStateRow>
    </StoryWrapper>
  );
};

export default {
  title: "Components/Avatar",
  component: Avatar,
  decorators: [withPerformance]
};
