import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import ListTitle from "../ListTitle";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider
} from "../../storybook-helpers";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";

export const Sandbox = () => {
  const title = text("Text", "Essentials");
  return (
    <div>
      <ListTitle id="Knobs">{title}</ListTitle>
    </div>
  );
};

export default {
  title: "Components/List/ListTitle",
  component: ListTitle,
  decorators: [withPerformance]
};
