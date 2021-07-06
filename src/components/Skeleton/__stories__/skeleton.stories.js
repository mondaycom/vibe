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
      <div className="skeleton-states">
        <StoryTitle text="Circle skeleton" />
        <Skeleton type={Skeleton.types.CIRCLE} />
        <StoryTitle text="Rectangle skeleton" />
        <Skeleton type={Skeleton.types.RECTANGLE} />
        <div className="skeleton-states_text-container">
          <Heading type={TYPES.h1} value="H1 text skeleton" />
          <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H1} className="skeleton-states_element" />
        </div>
        <div className="skeleton-states_text-container">
          <Heading type={TYPES.h2} value="H2 text skeleton" />
          <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H2} className="skeleton-states_element" />
        </div>
        <div className="skeleton-states_text-container">
          <Heading type={TYPES.h3} value="H3 text skeleton" />
          <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H3} className="skeleton-states_element" />
        </div>
        <div className="skeleton-states_text-container">
          <Heading type={TYPES.h4} value="H4 text skeleton" />
          <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H4} className="skeleton-states_element" />
        </div>
        <div className="skeleton-states_text-container">
          <Heading type={TYPES.h5} value="H5 text skeleton" />
          <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.H5} className="skeleton-states_element" />
        </div>
        <div className="skeleton-states_text-container">
          <Heading type={TYPES.h5} className="skeleton-states_text--small" value="Small 14px text" />
          <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.SMALL} className="skeleton-states_element" />
        </div>
        <div className="skeleton-states_text-container">
          <Heading type={TYPES.h5} className="skeleton-states_text--small" value="H6 text skeleton" />
          <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.SMALL} className="skeleton-states_element" />
        </div>
        <div className="skeleton-states_text-container">
          <Heading type={TYPES.h5} className="skeleton-states_text--small" value="Paragraph" />
          <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.TEXT.SMALL} className="skeleton-states_element" />
        </div>
        <div className="skeleton-states_text-container">
          <Heading type={TYPES.h5} value="Custom text" className="skeleton-states_text--small" />
          <Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.CUSTOM} className="skeleton-states_element" />
        </div>
      </div>
    </StoryWrapper>
  );
};

export const BasicExample = () => {
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

export const RectangleSkeletonSandbox = () => {
  return (
    <StoryWrapper>
      <StoryTitle text="Rectangle Skeleton Sandbox" />
      <Skeleton
        type={Skeleton.types.RECTANGLE}
        height={number("Height", undefined)}
        width={number("Width", undefined)}
        size={select("Size", SKELETON_ALLOWED_SIZES.RECTANGLE, Skeleton.sizes.CUSTOM)}
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
        size={select("Size", SKELETON_ALLOWED_SIZES.CIRCLE, Skeleton.sizes.CUSTOM)}
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
        size={select("Size", SKELETON_ALLOWED_SIZES.TEXT, Skeleton.sizes.CUSTOM)}
      />
    </StoryWrapper>
  );
};

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  decorators: [withPerformance]
};
