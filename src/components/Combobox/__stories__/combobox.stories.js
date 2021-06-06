import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import Combobox from "../Combobox";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider
} from "../../storybook-helpers";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import "./combobox.stories.scss";

export const Sandbox = () => (
  <div className="combobox-wrapper">
    <Combobox
      placeholder="Search for content"
      onAddNew={value => console.log("Add new ", value)}
      addNewLabel={value => `+ Add new ${value}`}
      onClick={option => console.log("Clicked on ", option.label)}
      options={[
        { id: "1", label: "first", leftIcon: "fa fa-star-o" },
        { id: "2", label: "second", rightIcon: "fa fa-star-o", selected: true },
        { id: "3", label: "disabled", rightIcon: "fa fa-star-o" },
        { id: "4", label: "fourth", disabled: true }
      ]}
    />
  </div>
);

export default {
  title: "Components/Combobox",
  component: Combobox,
  decorators: [withPerformance]
};
