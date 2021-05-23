import React from "react";
import { action } from '@storybook/addon-actions';
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import Tab from "../Tab";
import { StoryStateRow, StoryStateColumn, ComponentStateDescription, FlexLayout, Divider } from "../../../storybook-helpers";
import DarkThemeContainer from "../../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../../StoryBookComponents/StoryWrapper/StoryWrapper";


export const Sandbox = () => (
    <div>
      normal:
      <Tab id="normal">Normal</Tab>
      active:
      <Tab id="active" active>Active</Tab>
      disabled:
      <Tab id="disabled" disabled>Disabled</Tab>
    </div>
);

export default {
    title: "Components/Tabs/Tab",
    component: Tab,
    decorators: [withPerformance]

};
