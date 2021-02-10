import React from "react";
import { action } from '@storybook/addon-actions';
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import ExpandCollapse from "../ExpandCollapse";
import { StoryStateRow, StoryStateColumn, ComponentStateDescription, FlexLayout, Divider } from "../../storybook-helpers";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import IconTitleHeaderComponent from "../components/IconTitleHeader/IconTitleHeaderComponent";
import Icon from "../../Icon/Icon";
import Robot from "../../Icon/Icons/components/Robot";
import "./expandCollapse.stories.scss"

export const Sandbox = () => (
    <div>
        <ExpandCollapse 
        className="expandCollapse"
        headerComponentRenderer={IconTitleHeaderComponent("Header Text", 
        "Some subtext to describe stuff...")}>
            <p>child 1</p>
            <h2>child 2</h2>
            <Icon iconType={Icon.type.SVG} icon={Robot} iconSize={"52px"} tabindex="-1" clickable={true} />
        </ExpandCollapse>
    </div>
);

export const OpenByDefault = () => (
    <div>
        <ExpandCollapse 
        className="expandCollapse"
        defaultOpenState={true}
        headerComponentRenderer={IconTitleHeaderComponent("Header Text", 
        "Some subtext to describe stuff...")}>
            <Icon iconType={Icon.type.SVG} icon={Robot} iconSize={"52px"} tabindex="-1" clickable={true} />
        </ExpandCollapse>
    </div>
);

export const CustomHeader = () => (
    <div>
        <ExpandCollapse 
        className="expandCollapse"
        headerComponentRenderer={() => <h1>Any component you want</h1>}>
            <Icon iconType={Icon.type.SVG} icon={Robot} iconSize={"52px"} tabindex="-1" clickable={true} />
        </ExpandCollapse>
    </div>
);


export default {
    title: "Components/ExpandCollapse",
    component: ExpandCollapse,
    decorators: [withPerformance]

};
