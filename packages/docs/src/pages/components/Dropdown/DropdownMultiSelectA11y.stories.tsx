import React, { useMemo } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { Dropdown } from "@vibe/core";

type Story = StoryObj<typeof Dropdown>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Dropdown,
  actionPropsArray: ["onChange", "onOptionSelect", "onOptionRemove", "onClear"]
});

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown/Multi-select accessibility",
  component: Dropdown,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export default meta;

export const TextInputBasic: Story = {
  render: () => {
    const options = useMemo(
      () => [
        { value: "1", label: "Chip one" },
        { value: "2", label: "Chip two" },
        { value: "3", label: "Chip three" },
        { value: "4", label: "Chip four" }
      ],
      []
    );

    return (
      <div style={{ width: "600px", marginBottom: "50px" }}>
        <Dropdown
          placeholder="Select items"
          options={options}
          multi
          searchable
          textInput
          clearAriaLabel="Clear"
        />
      </div>
    );
  }
};

export const InteractiveChipsBasic: Story = {
  render: () => {
    const options = useMemo(
      () => [
        { value: "1", label: "Chip one" },
        { value: "2", label: "Chip two" },
        { value: "3", label: "Chip three" },
        { value: "4", label: "Chip four" }
      ],
      []
    );

    return (
      <div style={{ width: "600px", marginBottom: "50px" }}>
        <Dropdown
          placeholder="Select items"
          options={options}
          multi
          searchable
          interactiveChips
          clearAriaLabel="Clear"
        />
      </div>
    );
  }
};


