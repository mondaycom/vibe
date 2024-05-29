import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import Search from "../Search";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import DialogContentContainer from "../../DialogContentContainer/DialogContentContainer";
import Combobox from "../../Combobox/Combobox";
import Flex from "../../Flex/Flex";
import { Decorator, Meta, StoryObj } from "@storybook/react";
import IconButton from "../../IconButton/IconButton";
import FilterIcon from "../../Icon/Icons/components/Filter";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Search,
  iconPropNamesArray: ["searchIconName", "clearIconName"]
});

const searchTemplate = createComponentTemplate(Search);

export default {
  title: "Inputs/Search",
  component: Search,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof Search>;

type Story = StoryObj<typeof Search>;

const withFixedWidth: Decorator = Story => (
  <div style={{ width: 320 }}>
    <Story />
  </div>
);

export const Overview: Story = {
  render: searchTemplate.bind({}),
  args: { placeholder: "Placeholder text here" },
  decorators: [withFixedWidth],
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Sizes: Story = {
  render: () => (
    <>
      <Search placeholder="Small" size="small" />
      <Search placeholder="Medium" size="medium" />
      <Search placeholder="Large" size="large" />
    </>
  ),
  decorators: [
    Story => (
      <Flex direction={Flex.directions.COLUMN} justify={Flex.justify.START} gap={Flex.gaps.MEDIUM}>
        <Story />
      </Flex>
    ),
    withFixedWidth
  ],
  parameters: {
    docs: {
      liveEdit: {
        scope: { Search }
      }
    }
  }
};

export const WithAdditionalAction: Story = {
  render: () => (
    <Search
      placeholder="Search with icon"
      renderAction={<IconButton icon={FilterIcon} ariaLabel="Filter results" size={IconButton.sizes.SMALL} />}
    />
  ),
  decorators: [withFixedWidth],
  parameters: {
    docs: {
      liveEdit: {
        scope: { Search, FilterIcon }
      }
    }
  }
};

const options = [
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

export const FilterInCombobox: Story = {
  render: () => (
    <Combobox placeholder="Placeholder text here" options={options} size={Combobox.sizes.SMALL} optionLineHeight={28} />
  ),
  decorators: [
    Story => (
      <DialogContentContainer>
        <Story />
      </DialogContentContainer>
    ),
    withFixedWidth
  ],
  parameters: {
    docs: {
      liveEdit: {
        scope: { options }
      }
    }
  }
};
