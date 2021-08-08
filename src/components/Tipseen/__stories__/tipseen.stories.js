import React from "react";
import cx from "classnames";
import StoryTitle from "../../storybook-helpers/story-title/story-title";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import Tipseen from "../Tipseen";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider
} from "../../storybook-helpers";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import TipseenContent from "../TipseenContent";
import "./tipseen.stories.scss";
export const States = () => {
  return (
    <StoryWrapper>
      <StoryTitle text="Empty tipseen" />
      <StoryStateRow componentClassName="monday-style-story-tipseen_container">
        <Tipseen position={Tipseen.positions.RIGHT}>
          <div className={"tooltip-empty-element"} />
        </Tipseen>
      </StoryStateRow>
      <StoryTitle text="Basic tipseen" />
      <StoryStateRow componentClassName="monday-style-story-tipseen_container">
        <Tipseen
          position={Tipseen.positions.RIGHT}
          content={
            <TipseenContent
              isDismissHidden={false}
              title="title"
              content="Popover message will appear here loremipsum dolor samet… "
            />
          }
        >
          <div className={"tooltip-empty-element"} />
        </Tipseen>
      </StoryStateRow>
      <StoryTitle text="Tipseen with a wizard" />
      <StoryTitle text="Tipseen with graphic assets" />
    </StoryWrapper>
  );
};

export const Sandbox = () => (
  <div>
    <Tipseen
      id="Knobs"
      title={text("Text", "Test knob value")}
      content="Popover message will appear here loremipsum dolor samet… "
    >
      <div className={cx("tooltip-empty-element")} />
    </Tipseen>
    <Tipseen
      content={
        <TipseenContent
          isDismissHidden={false}
          title="title"
          content="Popover message will appear here loremipsum dolor samet… "
        />
      }
    >
      <div className={"tooltip-empty-element"} />
    </Tipseen>
  </div>
);

export default {
  title: "Components/Tipseen",
  component: Tipseen,
  decorators: [withPerformance]
};
