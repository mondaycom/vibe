import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Dropdown from "../Dropdown";
import Icon from "../../Icon/Icon";
import * as icons from "../../Icon/Icons";

export const Sandbox = () => {
  const mockColourOptions = [
    { value: "ocean", label: "Ocean", isFixed: true },
    { value: "blue", label: "Blue", isDisabled: true },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red", isFixed: true },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" }
  ];

  const mockDefaultOptions = [
    { value: "ocean", label: "Ocean", isFixed: true },
    { value: "blue", label: "Blue", isDisabled: true }
  ];

  const mockVirtualizedOptions = new Array(10000)
    .fill(null)
    .map((_, i) => ({ value: i + 1, label: (i + 1).toString() }));

  const isAsync = boolean(
    "Async options - Promise or Callback",
    false,
    "Async"
  );

  const isVirtualized = boolean("isVirtualized", false);
  const isWithDefaultValue = boolean("defautValue", false);
  const noOptionsMessage = text("noOptionsMessage", "No options found");

  const mockPromiseOptions = inputValue => {
    const arr = isVirtualized ? mockVirtualizedOptions : mockColourOptions;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          arr.filter(({ label }) =>
            label.toLowerCase().includes(inputValue.toLowerCase())
          )
        );
      }, 1000);
    });
  };

  let extraProps = {};
  if (isAsync) {
    const isDefaultOptions = boolean("Prefetched options", false, "Async");
    const isCachedOptions = boolean("Cache async options", false, "Async");

    extraProps = {
      asyncOptions: mockPromiseOptions,
      cacheOptions: isCachedOptions,
      ...(isDefaultOptions && {
        defaultOptions: isVirtualized
          ? [mockVirtualizedOptions[0]]
          : mockDefaultOptions
      })
    };
  }

  extraProps = {
    ...extraProps,
    ...(isWithDefaultValue && {
      defaultValue: isVirtualized
        ? mockVirtualizedOptions[0]
        : mockColourOptions[0]
    })
  };

  return (
    <Dropdown
      id="Sandbox"
      disabled={boolean("disabled", false)}
      clearable={boolean("clearable", true)}
      rtl={boolean("rtl", false)}
      searchable={boolean("searchable", true)}
      name="color"
      options={isVirtualized ? mockVirtualizedOptions : mockColourOptions}
      size={select("size", Object.values(Dropdown.SIZE), Dropdown.SIZE.SMALL)}
      placeholder={text("placeholder", "Dropdown placeholder")}
      onMenuOpen={action("Menu Open")}
      onMenuClose={action("Menu Close")}
      onFocus={action("Menu Focus")}
      noOptionsMessage={() => noOptionsMessage}
      openMenuOnFocus={boolean("openMenuOnFocus", true)}
      openMenuOnClick={boolean("openMenuOnClick", true)}
      isVirtualized={isVirtualized}
      {...extraProps}
    />
  );
};

const mockIcons = [
  {
    value: "Item_1",
    label: "Item_1",
    icon: icons.DropdownChevronUp,
    iconType: Icon.type.SVG,
    iconSize: 20
  },
  {
    value: "Item_2",
    label: "Item_2",
    icon: icons.Board,
    iconType: Icon.type.SVG,
    iconSize: 40
  },
  {
    value: "Item_3",
    label: "Item_3",
    icon: icons.Bolt,
    iconType: Icon.type.SVG,
    iconSize: 60
  },
  {
    value: "Item_4",
    label: "Item_4",
    icon: icons.Calendar,
    iconType: Icon.type.SVG,
    iconSize: 80
  }
];

export const CustomRender = () => (
  <Dropdown
    id="Icons"
    defaultValue={mockIcons[0]}
    OptionRenderer={Icon}
    rtl={boolean("rtl", false)}
    searchable={boolean("searchable", true)}
    name="color"
    options={mockIcons}
    size={select("size", Object.values(Dropdown.SIZE), Dropdown.SIZE.BIG)}
    placeholder={text("placeholder", "Dropdown placeholder")}
  />
);

export default {
  title: "Components/Dropdown",
  component: Dropdown
};
