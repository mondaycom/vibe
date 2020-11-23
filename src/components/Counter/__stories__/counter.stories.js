import React from "react";
import Counter from "../Counter";
import { StoryStateRow, StoryStateColumn, ComponentStateDescription, FlexLayout, Divider } from "../../storybook-helpers";
import { action } from '@storybook/addon-actions';
import { text, boolean, number, select } from "@storybook/addon-knobs";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";


export const Sandbox = () => (
    <div>
        <Counter
            id="Knobs"
            text={text("Text", "Test knob value")}
        />
    </div>
);

export default {
    title: "Components/Counter",
    component: Counter
};
