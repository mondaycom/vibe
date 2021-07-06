import { select, number } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import { Skeleton } from "../Skeleton";
import Heading from "../../Heading/Heading";
import { TYPES } from "../../Heading/HeadingConstants";
import StoryTitle from "../../storybook-helpers/story-title/story-title";
import { SKELETON_ALLOWED_SIZES } from "../SkeletonConstants";
import { ComponentStateDescription, StoryStateRow } from "../../storybook-helpers";
import React from "react";
import "./skeleton.stories.scss";

export const States = () => {
  return (
    <StoryWrapper>
      <div className="monday-style-story-skeleton">
        <StoryTitle text="Circle skeleton" />
        <Skeleton type={Skeleton.types.CIRCLE} />
        <StoryTitle text="Rectangle skeleton" />
        <Skeleton type={Skeleton.types.RECTANGLE} />
        <div className="monday-style-story-skeleton_text-container">
          <Heading type={TYPES.h1} value="H1 text skeleton" />
          <Skeleton
            type={Skeleton.types.TEXT}
            size={Skeleton.sizes.TEXT.H1}
            className="monday-style-story-skeleton_element"
          />
        </div>
        <div className="monday-style-story-skeleton_text-container">
          <Heading type={TYPES.h2} value="H2 text skeleton" />
          <Skeleton
            type={Skeleton.types.TEXT}
            size={Skeleton.sizes.TEXT.H2}
            className="monday-style-story-skeleton_element"
          />
        </div>
        <div className="monday-style-story-skeleton_text-container">
          <Heading type={TYPES.h3} value="H3 text skeleton" />
          <Skeleton
            type={Skeleton.types.TEXT}
            size={Skeleton.sizes.TEXT.H3}
            className="monday-style-story-skeleton_element"
          />
        </div>
        <div className="monday-style-story-skeleton_text-container">
          <Heading type={TYPES.h4} value="H4 text skeleton" />
          <Skeleton
            type={Skeleton.types.TEXT}
            size={Skeleton.sizes.TEXT.H4}
            className="monday-style-story-skeleton_element"
          />
        </div>
        <div className="monday-style-story-skeleton_text-container">
          <Heading type={TYPES.h5} value="H5 text skeleton" />
          <Skeleton
            type={Skeleton.types.TEXT}
            size={Skeleton.sizes.TEXT.H5}
            className="monday-style-story-skeleton_element"
          />
        </div>
        <div className="monday-style-story-skeleton_text-container">
          <Heading type={TYPES.h5} value="Costume text skeleton" />
          <Skeleton
            type={Skeleton.types.TEXT}
            size={Skeleton.sizes.COSTUME}
            className="monday-style-story-skeleton_element"
          />
        </div>
      </div>
    </StoryWrapper>
  );
};

export const Basic = () => {
  return (
    <StoryWrapper componentClassName="basic-skeleton-wrapper">
      <div style={{ display: "flex" }}>
        <Skeleton type={Skeleton.types.CIRCLE} />
        <div className="basic-skeleton-text-wrapper">
          <Skeleton
            type={Skeleton.types.TEXT}
            size={Skeleton.sizes.TEXT.H5}
            className="basic-skeleton-text"
            width={70}
          />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Skeleton
          type={Skeleton.types.RECTANGLE}
          className="monday-style-story-skeleton_element"
          className="basic-skeleton-rect"
        />
        <div className="basic-skeleton-text-wrapper">
          <div className="basic-skeleton-text-wrapper">
            <Skeleton
              type={Skeleton.types.TEXT}
              size={Skeleton.sizes.TEXT.H3}
              className="basic-skeleton-text"
              width={90}
            />
          </div>
          <div className="basic-skeleton-text-wrapper">
            <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H5} className="basic-skeleton-text" />
          </div>
          <div className="basic-skeleton-text-wrapper">
            <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H5} className="basic-skeleton-text" />
          </div>
          <div className="basic-skeleton-text-wrapper">
            <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H5} className="basic-skeleton-text" />
          </div>
          <div className="basic-skeleton-text-wrapper">
            <Skeleton
              type={Skeleton.types.TEXT}
              width={70}
              size={Skeleton.sizes.TEXT.H5}
              className="basic-skeleton-text"
            />
          </div>
        </div>
      </div>
    </StoryWrapper>
  );
};
export const DynamicSkeletonSize = () => {
  return (
    <StoryWrapper componentClassName="monday-style-story-skeleton">
      <StoryTitle text="Dynamic skeleton size" />
      <ComponentStateDescription
        title={
          "When we transfer a child element to the skeleton, the skeleton knows how to adjust its size to the size of the child (the skeleton become dynamic whose size depends on what it hides)"
        }
        full
      />
      <StoryStateRow componentDescription="Example">
        <Skeleton>
          <div style={{ width: 200, height: 300, background: "red" }} />
        </Skeleton>
        <div style={{ width: 200, height: 300, background: "red" }} className="monday-style-story-skeleton_element" />
      </StoryStateRow>
    </StoryWrapper>
  );
};

export const RectangleSkeletonSandbox = () => {
  return (
    <StoryWrapper>
      <StoryTitle text="Rectangle Skeleton Sandbox" />
      <Skeleton
        type={Skeleton.types.RECTANGLE}
        height={number("Height", undefined)}
        width={number("Width", undefined)}
        size={select("Size", SKELETON_ALLOWED_SIZES.RECTANGLE, Skeleton.sizes.COSTUME)}
      />
    </StoryWrapper>
  );
};

export const CircleSkeletonSandbox = () => {
  return (
    <StoryWrapper>
      <StoryTitle text="Circle Skeleton Sandbox" />
      <Skeleton
        type={Skeleton.types.CIRCLE}
        height={number("Height", undefined)}
        width={number("Width", undefined)}
        size={select("Size", SKELETON_ALLOWED_SIZES.CIRCLE, Skeleton.sizes.COSTUME)}
      />
    </StoryWrapper>
  );
};

export const TextSkeletonSandbox = () => {
  return (
    <StoryWrapper>
      <StoryTitle text="Text Skeleton Sandbox" />
      <Skeleton
        type={Skeleton.types.TEXT}
        height={number("Height", undefined)}
        width={number("Width", undefined)}
        size={select("Size", SKELETON_ALLOWED_SIZES.TEXT, Skeleton.sizes.COSTUME)}
      />
    </StoryWrapper>
  );
};

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  decorators: [withPerformance]
};
