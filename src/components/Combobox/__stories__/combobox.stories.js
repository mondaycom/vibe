import React, { useState, useCallback } from "react";
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

const getOptions = (selectedId, additionalOptions = []) => {
  const options = [
    { id: "1", label: "first", leftIcon: "fa fa-star-o" },
    { id: "2", label: "second", rightIcon: "fa fa-star-o" },
    { id: "3", label: "disabled", disabled: true, rightIcon: "fa fa-star-o" },
    { id: "4", label: "fourth" }
  ].concat(additionalOptions);

  options.forEach(option => {
    option.selected = option.id === selectedId;
  });
  return options;
};

const ComboboxWrapper = () => {
  const [selectedId, setSelectedId] = useState("2");
  const [addedItems, setAddedItems] = useState([]);

  const addNewItem = useCallback(
    filterValue => {
      const id = (5 + addedItems.length).toString();
      setAddedItems(addedItems.concat([{ id, label: filterValue }]));
      setSelectedId(id);
    },
    [addedItems, setAddedItems, setSelectedId]
  );

  return (
    <div className="combobox-wrapper">
      <Combobox
        placeholder="Search for content"
        onAddNew={addNewItem}
        addNewLabel={value => `+ Add new ${value}`}
        onClick={option => {
          console.log("Clicked on ", option.label);
          setSelectedId(option.id);
        }}
        options={getOptions(selectedId, addedItems)}
      />
    </div>
  );
};

export default {
  title: "Components/Combobox",
  component: Combobox,
  decorators: [withPerformance]
};
