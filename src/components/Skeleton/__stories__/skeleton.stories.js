import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";
import { StoryStateRow } from "../../storybook-helpers";
import { withPerformance } from "storybook-addon-performance";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import { Skeleton } from "../Skeleton";
import Heading from "../../Heading/Heading";
import { TYPES } from "../../Heading/HeadingConstants";
import StoryTitle from "../../storybook-helpers/story-title/story-title";
import "./skeleton.stories.scss";

export const States = () => {
  return (
    <StoryWrapper>
      <div className="monday-style-story-skeleton">
        <StoryTitle text="Circle skeleton" />
        <Skeleton type={Skeleton.types.CIRCLE} />
        <StoryTitle text="Rectangle skeleton" />
        <Skeleton type={Skeleton.types.RECTANGLE} />
        <div className="monday-style-story-text-container">
          <Heading type={TYPES.h1} value="H1 text skeleton" />
          <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H1} />
        </div>
        <div className="monday-style-story-text-container">
          <Heading type={TYPES.h2} value="H2 text skeleton" />
          <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H2} />
        </div>
        <div className="monday-style-story-text-container">
          <Heading type={TYPES.h3} value="H3 text skeleton" />
          <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H3} />
        </div>
        <div className="monday-style-story-text-container">
          <Heading type={TYPES.h4} value="H4 text skeleton" />
          <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H4} />
        </div>
        <div className="monday-style-story-text-container">
          <Heading type={TYPES.h5} value="H5 text skeleton" />
          <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H5} />
        </div>
        <div className="monday-style-story-text-container">
          <Heading type={TYPES.h5} value="Costume text skeleton" />
          <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.COSTUME} />
        </div>
      </div>
    </StoryWrapper>
  );
};

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  decorators: [withPerformance]
};
