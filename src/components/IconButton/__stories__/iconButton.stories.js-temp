import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import IconButton from "../IconButton";
import Bolt from "../../Icon/Icons/components/Bolt";
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
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <IconButton icon={Bolt} size={IconButton.sizes.SMALL}/>
    <IconButton icon={Bolt} size={IconButton.sizes.MEDIUM}/>
    <IconButton icon={Bolt} size={IconButton.sizes.LARGE}/>
  </div>
);

export default {
  title: "Components/IconButton",
  component: IconButton,
  decorators: [withPerformance]
};
