import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import Search from "../LegacySearch";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import DialogContentContainer from "../../DialogContentContainer/DialogContentContainer";
import Combobox from "../../Combobox/Combobox";
import "./LegacySearch.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Search,
  enumPropNamesArray: ["type", "size"],
  iconPropNamesArray: ["secondaryIconName", "iconName"]
});

const searchTemplate = createComponentTemplate(Search);

export default {
  title: "Inputs/LegacySearch [deprecated]",
  component: Search,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: searchTemplate.bind({}),
  name: "Overview",

  args: {
    placeholder: "Placeholder text here",
    wrapperClassName: "monday-storybook-search_size"
  }
};

export const Sizes = {
  render: () => (
    <div className="monday-storybook-search_box">
      <Search placeholder="Small" size={Search.sizes.SMALL} />
      <Search placeholder="Medium" />
      <Search placeholder="Large" size={Search.sizes.LARGE} />
    </div>
  ),

  name: "Sizes"
};

export const FilterInCombobox = {
  render: () => {
    const option = [
      {
        id: "1",
        label: "Cheese Cake"
      },
      {
        id: "2",
        label: "Muffin"
      },
      {
        id: "3",
        label: "Cookie"
      },
      {
        id: "4",
        label: "Cup cake"
      },
      {
        id: "5",
        label: "Banana lottie"
      }
    ];

    return (
      <DialogContentContainer className="monday-storybook-search_wrapper">
        <Combobox
          placeholder="Placeholder text here"
          options={option}
          size={Combobox.sizes.SMALL}
          optionLineHeight={28}
        />
      </DialogContentContainer>
    );
  },

  name: "Filter in combobox"
};
