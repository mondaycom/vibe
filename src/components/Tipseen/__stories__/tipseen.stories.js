import React from "react";
import { action } from "@storybook/addon-actions";
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
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import cx from "classnames";

export const Sandbox = () => (
  <div>
    <Tipseen id="Knobs" title={text("Text", "Test knob value")}>
      <div className={cx("tooltip-empty-element")} />
    </Tipseen>
  </div>
);

export default {
  title: "Components/Tipseen",
  component: Tipseen,
  decorators: [withPerformance]
};
