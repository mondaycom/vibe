import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import EditableInput from "../EditableInput";
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
    <EditableInput inputType="input" value={"Hello input"} />
    <br />
    <br />
    <EditableInput inputType="textarea" value={"Hello textarea"} />
    <br />
    <br />
    <EditableInput inputType="textarea" autoSize value={"Hello textarea autosize test long long text"} />
  </div>
);

export default {
  title: "Components/EditableInput",
  component: EditableInput,
  decorators: [withPerformance]
};
