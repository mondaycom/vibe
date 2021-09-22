import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import Clickable from "../Clickable";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider
} from "../../storybook-helpers";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";

export const Sandbox = () => (
  <div>
    <Clickable id="Knobs" text={text("Text", "Test knob value")}>
      hghgh
    </Clickable>
  </div>
);

export default {
  title: "Components|Clickable",
  component: Clickable,
  decorators: [withPerformance]
};
