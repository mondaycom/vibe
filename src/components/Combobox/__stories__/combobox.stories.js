import React, { useState, useCallback } from "react";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import Combobox from "../Combobox";
import cx from "classnames";
import "./combobox.stories.scss";

export const Sandbox = () => (
  <div className="container" style={{ width: number("external wrapper width", 300) }}>
    <ComboboxWrapper />
  </div>
);

export const ComboboxWithCategories = () => {
  return (
    <div className="container categories-container">
      <ComboboxWithCategoriesWrapper />
    </div>
  );
};
const iconRenderer = className => {
  return (
    <div className={cx("custom-icon", className)} aria-hidden={true}>
      A
    </div>
  );
};

const getOptions = (selectedId, additionalOptions = []) => {
  const options = [
    { id: "1", label: "with left icon", leftIcon: "fa fa-star-o" },
    { id: "2", label: "with right icon", rightIcon: "fa fa-star-o" },
    { id: "3", label: "disabled", disabled: true, rightIcon: "fa fa-star-o" },
    {
      id: "4",
      label: "disabled with tooltip",
      disabled: true,
      tooltipContent: "this option is disable",
      rightIcon: "fa fa-star-o"
    },
    { id: "5", label: "custom left icon", leftIcon: iconRenderer, leftIconType: Combobox.iconTypes.RENDERER },
    { id: "6", label: "custom right icon", rightIcon: iconRenderer, rightIconType: Combobox.iconTypes.RENDERER },
    { id: "7", label: "no icon" },
    { id: "8", label: "with left icon and a very very long name", leftIcon: "fa fa-star-o" },
    { id: "9", label: "with right icon and a very very long name", rightIcon: "fa fa-star-o" }
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
        placeholder={text("placeholder", "Search for content")}
        noResultsMessage={text("noResultsMessage", "No results")}
        onAddNew={addNewItem}
        addNewLabel={value => `+ Add new ${value}`}
        onClick={option => {
          console.log("Clicked on ", option.label);
          setSelectedId(option.id);
        }}
        onOptionLeave={(...props) => console.log("props:", props)}
        onOptionHover={(...props) => console.log("props:", props)}
        options={getOptions(selectedId, addedItems)}
        size={select(
          "size",
          {
            SMALL: Combobox.sizes.SMALL,
            MEDIUM: Combobox.sizes.MEDIUM,
            LARGE: Combobox.sizes.LARGE
          },
          Combobox.sizes.MEDIUM
        )}
        optionLineHeight={number("optionLineHeight", 32)}
        optionsListHeight={number("optionsListHeight", 150)}
        disabled={boolean("disabled")}
      />
    </div>
  );
};

const ComboboxWithCategoriesWrapper = () => {
  const [selectedId, setSelectedId] = useState("2");

  const options = [
    {
      id: "1",
      label: "Favorites",
      leftIcon: iconRenderer,
      leftIconType: Combobox.iconTypes.RENDERER,
      categoryId: "favorites"
    },
    {
      id: "2",
      label: "second",
      rightIcon: iconRenderer,
      rightIconType: Combobox.iconTypes.RENDERER,
      categoryId: "important"
    },
    { id: "3", label: "disabled", disabled: true, rightIcon: "fa fa-star-o", categoryId: "important" },
    { id: "4", label: "fourth", leftIcon: "fa fa-star-o", categoryId: "important" },
    { id: "5", label: "fifth", leftIcon: "fa fa-star-o", categoryId: "important" },
    { id: "6", label: "sixth", leftIcon: "fa fa-star-o", categoryId: "important" },
    { id: "7", label: "seventh", leftIcon: "fa fa-star-o", categoryId: "must" },
    { id: "8", label: "eighth", leftIcon: "fa fa-star-o", categoryId: "must" },
    { id: "9", label: "9th", leftIcon: "fa fa-star-o", categoryId: "must" },
    { id: "10", label: "10th", leftIcon: "fa fa-star-o", categoryId: "must" },
    { id: "11", label: "11th", leftIcon: "fa fa-star-o", categoryId: "must" },
    { id: "12", label: "12th", leftIcon: "fa fa-star-o", categoryId: "must" },
    { id: "13", label: "13th", leftIcon: "fa fa-star-o", categoryId: "must" },
    { id: "14", label: "14th", leftIcon: "fa fa-star-o", categoryId: "must" },
    { id: "15", label: "15th", leftIcon: "fa fa-star-o", categoryId: "must" },
    { id: "16", label: "only visible on search 1", leftIcon: "fa fa-star-o", categoryId: "other" },
    { id: "17", label: "only visible on search 2", leftIcon: "fa fa-star-o", categoryId: "other" }
  ];

  const categories = {
    favorites: { id: "favorites" },
    important: { id: "important", label: "Important" },
    must: { id: "must", label: "Must" },
    other: { id: "other", label: "Other", onlyShowOnSearch: true }
  };

  options.forEach(option => {
    option.selected = option.id === selectedId;
  });

  return (
    <div className="combobox-wrapper">
      <Combobox
        placeholder="Search here!"
        onClick={option => {
          console.log("Clicked on ", option.label);
          setSelectedId(option.id);
        }}
        onOptionLeave={(...props) => console.log("props:", props)}
        onOptionHover={(...props) => console.log("props:", props)}
        options={options}
        categories={categories}
        optionsListHeight={number("optionsListHeight", 150)}
        stickyCategories={boolean("stickyCategories", true)}
      />
    </div>
  );
};

export default {
  title: "Components|Combobox",
  component: Combobox,
  decorators: [withPerformance]
};
