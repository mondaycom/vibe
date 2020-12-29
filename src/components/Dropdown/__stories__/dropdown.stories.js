import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Dropdown from "../Dropdown";
import Icon from "../../Icon/Icon";
import * as icons from "../../Icon/Icons";
import { StoryStateRow, StoryStateColumn } from "../../storybook-helpers";
import DescriptionLabel from "../../storybook-helpers/description-label/description-label";
import "./dropdown.stories.scss";

const mockColorOptions = [
  { value: "ocean", label: "Ocean", isFixed: true },
  { value: "blue", label: "Blue", isDisabled: true },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red", isFixed: true },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" }
];

const mockVirtualizedOptions = new Array(10000).fill(null).map((_, i) => ({ value: i + 1, label: (i + 1).toString() }));

export const Sandbox = () => {
  const mockDefaultOptions = mockColorOptions.slice(0, 2);

  const isAsync = boolean("Async options - Promise or Callback", false, "Async");

  const isVirtualized = boolean("isVirtualized", false);
  const isWithDefaultValue = boolean("defautValue", false);
  const noOptionsMessage = text("noOptionsMessage", "No options found");

  const mockPromiseOptions = inputValue => {
    const arr = isVirtualized ? mockVirtualizedOptions : mockColorOptions;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(arr.filter(({ label }) => label.toLowerCase().includes(inputValue.toLowerCase())));
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
        defaultOptions: isVirtualized ? [mockVirtualizedOptions[0]] : mockDefaultOptions
      })
    };
  }

  extraProps = {
    ...extraProps,
    ...(isWithDefaultValue && {
      defaultValue: isVirtualized ? mockVirtualizedOptions[0] : mockColorOptions[0]
    })
  };

  return (
    <section>
      <StoryStateRow>
        <StoryStateColumn title="Sandbox" centerize>
          <Dropdown
            id="Sandbox"
            className="dropdown-story"
            disabled={boolean("disabled", false)}
            clearable={boolean("clearable", true)}
            rtl={boolean("rtl", false)}
            searchable={boolean("searchable", true)}
            name="color"
            options={isVirtualized ? mockVirtualizedOptions : mockColorOptions}
            size={select("size", Object.values(Dropdown.size), Dropdown.size.SMALL)}
            placeholder={text("placeholder", "Dropdown placeholder")}
            onMenuOpen={action("Menu Open")}
            onMenuClose={action("Menu Close")}
            onFocus={action("Menu Focus")}
            onChange={action("Selected value has changed")}
            noOptionsMessage={() => noOptionsMessage}
            openMenuOnFocus={boolean("openMenuOnFocus", true)}
            openMenuOnClick={boolean("openMenuOnClick", true)}
            isVirtualized={isVirtualized}
            {...extraProps}
          />
        </StoryStateColumn>
      </StoryStateRow>
    </section>
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
  <section>
    <StoryStateRow>
      <StoryStateColumn title="Custom render" centerize>
        <Dropdown className="dropdown-story" OptionRenderer={Icon} searchable name="color" options={mockIcons} />
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export const sizes = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn title="Small">
        <Dropdown className="dropdown-story" size={Dropdown.size.SMALL} options={mockColorOptions} />
      </StoryStateColumn>
      <StoryStateColumn title="Medium">
        <Dropdown className="dropdown-story" size={Dropdown.size.MEDIUM} options={mockColorOptions} />
      </StoryStateColumn>
      <StoryStateColumn title="Large">
        <Dropdown className="dropdown-story" size={Dropdown.size.LARGE} options={mockColorOptions} />
      </StoryStateColumn>
    </StoryStateRow>
    <DescriptionLabel>Disabled</DescriptionLabel>
    <StoryStateRow>
      <StoryStateColumn title="Small">
        <Dropdown disabled className="dropdown-story" size={Dropdown.size.SMALL} options={mockColorOptions} />
      </StoryStateColumn>
      <StoryStateColumn title="Medium">
        <Dropdown disabled className="dropdown-story" size={Dropdown.size.MEDIUM} options={mockColorOptions} />
      </StoryStateColumn>
      <StoryStateColumn title="Large">
        <Dropdown disabled className="dropdown-story" size={Dropdown.size.LARGE} options={mockColorOptions} />
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export const rtl = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn title="Left to Right (default)">
        <Dropdown className="dropdown-story" options={mockColorOptions} />
      </StoryStateColumn>
      <StoryStateColumn title="Right to Left">
        <Dropdown className="dropdown-story" rtl options={mockColorOptions} />
      </StoryStateColumn>
    </StoryStateRow>
    <DescriptionLabel>Disabled</DescriptionLabel>
    <StoryStateRow>
      <StoryStateColumn title="Left to Right">
        <Dropdown disabled className="dropdown-story" options={mockColorOptions} />
      </StoryStateColumn>
      <StoryStateColumn title="Right to Left">
        <Dropdown disabled className="dropdown-story" rtl options={mockColorOptions} />
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export const virtualized = () => {
  const mockPromiseOptions = inputValue => {
    const arr = mockVirtualizedOptions;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(arr.filter(({ label }) => label.toLowerCase().includes(inputValue.toLowerCase())));
      }, 1000);
    });
  };

  return (
    <section>
      <StoryStateRow>
        <StoryStateColumn title="Virtualized">
          <Dropdown className="dropdown-story" options={mockVirtualizedOptions} isVirtualized />
        </StoryStateColumn>
        <StoryStateColumn title="Virtualized + Async">
          <Dropdown className="dropdown-story" asyncOptions={mockPromiseOptions} isVirtualized />
        </StoryStateColumn>
      </StoryStateRow>
    </section>
  );
};

export const async = () => {
  const mockPromiseOptions = inputValue => {
    const arr = mockColorOptions;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(arr.filter(({ label }) => label.toLowerCase().includes(inputValue.toLowerCase())));
      }, 1000);
    });
  };

  const mockDefaultOptions = mockColorOptions.slice(0, 2);

  return (
    <section>
      <StoryStateRow>
        <StoryStateColumn title="Async">
          <Dropdown className="dropdown-story" asyncOptions={mockPromiseOptions} />
        </StoryStateColumn>
        <StoryStateColumn title="Async + Cache">
          <Dropdown className="dropdown-story" asyncOptions={mockPromiseOptions} cacheOptions />
        </StoryStateColumn>
        <StoryStateColumn title="Async + Prefetch all">
          <Dropdown className="dropdown-story" asyncOptions={mockPromiseOptions} defaultOptions={true} />
        </StoryStateColumn>
        <StoryStateColumn title="Async + Cache + Prefetch some">
          <Dropdown className="dropdown-story" asyncOptions={mockPromiseOptions} defaultOptions={mockDefaultOptions} />
        </StoryStateColumn>
      </StoryStateRow>
    </section>
  );
};

export default {
  title: "Components/Dropdown",
  component: Dropdown
};
