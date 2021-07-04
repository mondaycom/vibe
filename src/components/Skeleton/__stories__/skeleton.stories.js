import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";
import { StoryStateRow } from "../../storybook-helpers";
import { withPerformance } from "storybook-addon-performance";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import { Skeleton } from "../SkeletonBase";

export const Sandbox = () => {
  return (
    <div className="monday-style-story-skeleton">
      <StoryStateRow>
        <Skeleton />
      </StoryStateRow>
    </div>
  );
};

export default {
  title: "Components/Checkbox",
  component: Skeleton,
  decorators: [withPerformance]
};
