import React, { useCallback, useState } from "react";
import { withPerformance } from "storybook-addon-performance";
import { StoryStateColumn, StoryStateRow } from "../../storybook-helpers";
import { Avatar } from "../Avatar";
import { boolean, text } from "@storybook/addon-knobs";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import "./avatar.stories.scss";

export const States = () => {
  return (
    <StoryWrapper componentClassName="monday-style-story-avatar">
      <StoryStateRow componentDescription="Avatar with image" componentClassName="monday-style-story-avatar_states">
        <Avatar size={Avatar.sizes.LARGE} />
        <Avatar size={Avatar.sizes.MEDIUM} />
        <Avatar size={Avatar.sizes.SMALL} />
      </StoryStateRow>
      <StoryStateRow componentDescription="Avatar with text">
        <Avatar size={Avatar.sizes.LARGE} />
        <Avatar size={Avatar.sizes.MEDIUM} />
        <Avatar size={Avatar.sizes.SMALL} />
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
