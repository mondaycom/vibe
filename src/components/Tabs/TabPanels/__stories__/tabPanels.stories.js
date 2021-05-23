import React from "react";
import { action } from '@storybook/addon-actions';
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import TabPanels from "../TabPanels";
import { StoryStateRow, StoryStateColumn, ComponentStateDescription, FlexLayout, Divider } from "../../../storybook-helpers";
import DarkThemeContainer from "../../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../../StoryBookComponents/StoryWrapper/StoryWrapper";


export const Sandbox = () => (
    <div>
      <TabPanels>
        <TabPanels>First tab panel</TabPanels>
        <TabPanels>Second tab panel</TabPanels>
        <TabPanels>Third tab panel</TabPanels>
      </TabPanels>
    </div>
);

export default {
    title: "Components/Tabs/TabPanels",
    component: TabPanels,
    decorators: [withPerformance]

};
