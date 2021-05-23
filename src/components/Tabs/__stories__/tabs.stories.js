import React from "react";
import { action } from '@storybook/addon-actions';
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import Tabs from "../Tabs";
import { StoryStateRow, StoryStateColumn, ComponentStateDescription, FlexLayout, Divider } from "../../storybook-helpers";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";


export const Sandbox = () => (
    <div>
        <Tabs
            id="Knobs"
            tabs={{
              "first": { name: "First", tooltip: "first tab", content: <div>First tab content</div> },
              "second": { name: "Second", tooltip: "second tab", content: <div>Second tab content</div> },
              "third": { name: "Third", tooltip: "third tab", content: <div>Third tab content</div> }
            }}
            activeTab="first"
        />
    </div>
);

export default {
    title: "Components/Tabs",
    component: Tabs,
    decorators: [withPerformance]

};
