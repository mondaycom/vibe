import React from "react";
import MenuButton from "../MenuButton";
import { StoryStateRow, StoryStateColumn, ComponentStateDescription, FlexLayout, Divider } from "../../storybook-helpers";
import { action } from '@storybook/addon-actions';
import { text, boolean, number, select } from "@storybook/addon-knobs";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";


export const Sandbox = () => (
    <div>
        <MenuButton
            id="Knobs"
            text={text("Text", "Test knob value")}
        />
    </div>
);

export default {
    title: "Components/MenuButton",
    component: MenuButton
};
