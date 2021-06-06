import React, { useState } from "react";
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
  <div className="container">
    <ComboboxWrapper />
  </div>
);

const getOptions = selectedId => {
  return [
    { id: "1", label: "first", leftIcon: "fa fa-star-o", selected: selectedId === "1" },
    { id: "2", label: "second", rightIcon: "fa fa-star-o", selected: selectedId === "2" },
    { id: "3", label: "disabled", disabled: true, rightIcon: "fa fa-star-o", selected: selectedId === "3" },
    { id: "4", label: "fourth", selected: selectedId === "4" }
  ];
};

const ComboboxWrapper = () => {
  const [selectedId, setSelectedId] = useState("2");

  return (
    <div className="combobox-wrapper">
      <Combobox
        placeholder="Search for content"
        onAddNew={value => console.log("Add new ", value)}
        addNewLabel={value => `+ Add new ${value}`}
        onClick={option => {
          console.log("Clicked on ", option.label);
          setSelectedId(option.id);
        }}
        options={getOptions(selectedId)}
      />
    </div>
  );
};

export default {
  title: "Components/Combobox",
  component: Combobox,
  decorators: [withPerformance]
};
