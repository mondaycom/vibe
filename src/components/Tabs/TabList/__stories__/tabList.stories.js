import React from "react";
import { action } from '@storybook/addon-actions';
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import TabList from "../TabList";
import { StoryStateRow, StoryStateColumn, ComponentStateDescription, FlexLayout, Divider } from "../../../storybook-helpers";
import DarkThemeContainer from "../../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../../StoryBookComponents/StoryWrapper/StoryWrapper";


export const Sandbox = () => (
    <div>
        {/*<TabList*/}
        {/*    id="Knobs"*/}
        {/*    tabs={{*/}
        {/*      "first": { name: "First", tooltip: "first tab", content: <div>First tab content</div> },*/}
        {/*      "second": { name: "Second", tooltip: "second tab", content: <div>Second tab content</div> },*/}
        {/*      "third": { name: "Third", tooltip: "third tab", content: <div>Third tab content</div> }*/}
        {/*    }}*/}
        {/*    activeTab="first"*/}
        {/*/>*/}
      <TabList
        id="Knobs"
        tabs={{
          "first": { name: "First", content: <div>First tab content</div> },
          "second": { name: "Second", content: <div>Second tab content</div> },
          "third": { name: "Third", content: <div>Third tab content</div>, disabled: true }
        }}
        activeTab="first"
      />
    </div>
);

export default {
    title: "Components/Tabs/TabList",
    component: TabList,
    decorators: [withPerformance]
};
