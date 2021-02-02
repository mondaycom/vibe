import React from "react";
import { withPerformance } from "storybook-addon-performance";
import Loader from "../Loader";
import LoaderStoryLine from "./LoaderStoryLine";
import { FlexLayout } from "../../storybook-helpers";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";

export const Sizes = () => {
  return (
    <StoryWrapper>
      <div className="story-title">Sizes</div>
      <FlexLayout spaceBetween>
        <LoaderStoryLine title="Small - 32px">
          <Loader svgClassName="loader-size-sm" />
        </LoaderStoryLine>
      </FlexLayout>
      <FlexLayout spaceBetween>
        <LoaderStoryLine title="Medium - 40px">
          <Loader svgClassName="loader-size-md" />
        </LoaderStoryLine>
      </FlexLayout>
      <FlexLayout spaceBetween>
        <LoaderStoryLine title="Large - 48px">
          <Loader svgClassName="loader-size-lg" />
        </LoaderStoryLine>
      </FlexLayout>
    </StoryWrapper>
  );
};

export default {
  title: "Components|Loader",
  component: Loader,
  decorators: [withPerformance]
};
