import { createComponentTemplate } from "vibe-storybook-components";
import LegacySearch from "../LegacySearch";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import DialogContentContainer from "../../DialogContentContainer/DialogContentContainer";
import Combobox from "../../Combobox/Combobox";
import "./LegacySearch.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: LegacySearch,
  enumPropNamesArray: ["type", "size"],
  iconPropNamesArray: ["secondaryIconName", "iconName"]
});

const searchTemplate = createComponentTemplate(LegacySearch);

export default {
  title: "Inputs/LegacySearch [deprecated]",
  component: LegacySearch,
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
      <LegacySearch placeholder="Small" size={LegacySearch.sizes.SMALL} />
      <LegacySearch placeholder="Medium" />
      <LegacySearch placeholder="Large" size={LegacySearch.sizes.LARGE} />
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
