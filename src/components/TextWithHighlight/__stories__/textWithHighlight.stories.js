import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import TextWithHighlight from "../TextWithHighlight";
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
  <div
    style={{
      width: 500,
      height: 200,
      border: "1px solid black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <TextWithHighlight
      id="Knobs"
      text={text("Text", "The quick brown fox jumps over the lazy dog")}
      highlightTerm={text("highlightTerm", "the")}
      limit={number("limit", null)}
    />
  </div>
);

export default {
  title: "Components|TextWithHighlight",
  component: TextWithHighlight,
  decorators: [withPerformance]
};
