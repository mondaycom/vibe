import React, { useMemo, useState } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { Dropdown, type BaseDropdownProps, type DropdownOption, Flex, Text } from "@vibe/core";

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

const teamOptions = [
  { value: "design", label: "Design" },
  { value: "engineering", label: "Engineering" },
  { value: "marketing", label: "Marketing" },
  { value: "product", label: "Product" },
  { value: "sales", label: "Sales" }
];

const dropdownWrapper = (children: React.ReactNode) => (
  <div style={{ height: "300px", width: "300px" }}>{children}</div>
);

export const Overview: Story = {
  render: () => {
    const options = useMemo(() => teamOptions, []);
    return (
      <Flex gap="large" align="start">
        <Flex direction="column" gap="xs" style={{ width: "260px" }}>
          <Text type="text2" weight="bold">
            Default chips
          </Text>
          <Text type="text2" color="secondary">
            Selected items shown as chips. Input is always empty — screen readers announce the field as blank.
          </Text>
          <div style={{ height: "280px" }}>
            <Dropdown
              id="multi-a11y-overview-default"
              options={options}
              multi
              searchable
              label="Teams"
              placeholder="Select teams"
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
        <Flex direction="column" gap="xs" style={{ width: "260px" }}>
          <Text type="text2" weight="bold">
            textInput
          </Text>
          <Text type="text2" color="secondary">
            Selection shown as a comma-separated summary inside the input. Screen readers announce the full value.
          </Text>
          <div style={{ height: "280px" }}>
            <Dropdown
              id="multi-a11y-overview-text-input"
              options={options}
              multi
              searchable
              textInput
              label="Teams"
              placeholder="Select teams"
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
        <Flex direction="column" gap="xs" style={{ width: "260px" }}>
          <Text type="text2" weight="bold">
            interactiveChips
          </Text>
          <Text type="text2" color="secondary">
            Chips stay visible. Each chip is keyboard-navigable and removable via ArrowLeft / Backspace.
          </Text>
          <div style={{ height: "280px" }}>
            <Dropdown
              id="multi-a11y-overview-interactive-chips"
              options={options}
              multi
              searchable
              interactiveChips
              label="Teams"
              placeholder="Select teams"
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
      </Flex>
    );
  },
  parameters: {
    docs: { liveEdit: { isEnabled: false } }
  }
};

export const TextInputBasic: Story = {
  render: () => {
    const options = useMemo(() => teamOptions, []);
    return dropdownWrapper(
      <Dropdown
        id="multi-text-input-basic"
        options={options}
        multi
        searchable
        textInput
        label="Teams"
        placeholder="Select teams"
        clearAriaLabel="Clear"
      />
    );
  }
};

export const TextInputWithDefaultValue: Story = {
  render: () => {
    const options = useMemo(() => teamOptions, []);
    return (
      <Flex direction="column" gap="small" style={{ width: "300px" }}>
        <Text type="text2" color="secondary">
          Tab to the field — screen readers immediately announce "Design, Engineering" without any interaction needed.
        </Text>
        <div style={{ height: "280px" }}>
          <Dropdown
            id="multi-text-input-default-value"
            options={options}
            multi
            searchable
            textInput
            label="Teams"
            placeholder="Select teams"
            defaultValue={[options[0], options[1]]}
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
    );
  }
};

export const TextInputControlled: Story = {
  render: () => {
    const options = useMemo(() => teamOptions, []);
    const [value, setValue] = useState<DropdownOption[]>([]);

    return (
      <Flex direction="column" gap="medium" align="start">
        <Text type="text2">Selected: {value.length ? value.map(v => v.label).join(", ") : "none"}</Text>
        <div style={{ height: "280px", width: "300px" }}>
          <Dropdown
            id="multi-text-input-controlled"
            options={options}
            multi
            searchable
            textInput
            label="Teams"
            placeholder="Select teams"
            value={value}
            onChange={(items: DropdownOption[]) => setValue(items)}
            onClear={() => setValue([])}
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
    );
  }
};

export const InteractiveChipsBasic: Story = {
  render: () => {
    const options = useMemo(() => teamOptions, []);
    return dropdownWrapper(
      <Dropdown
        id="multi-interactive-chips-basic"
        options={options}
        multi
        searchable
        interactiveChips
        label="Teams"
        placeholder="Select teams"
        clearAriaLabel="Clear"
      />
    );
  }
};

export const InteractiveChipsKeyboardNav: Story = {
  render: () => {
    const options = useMemo(() => teamOptions, []);
    return (
      <Flex direction="column" gap="small" style={{ width: "300px" }}>
        <Text type="text2" color="secondary">
          Select two or more items, then use ArrowLeft from the input to move focus to a chip. Press Backspace or Delete
          to remove it.
        </Text>
        <div style={{ height: "280px" }}>
          <Dropdown
            id="multi-interactive-chips-keyboard"
            options={options}
            multi
            searchable
            interactiveChips
            label="Teams"
            placeholder="Select teams"
            defaultValue={[options[0], options[1]]}
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
    );
  }
};

export const InteractiveChipsWithOverflow: Story = {
  render: () => {
    const options = useMemo(() => teamOptions, []);
    return (
      <Flex direction="column" gap="small" style={{ width: "300px" }}>
        <Text type="text2" color="secondary">
          When chips overflow the available width, a +N badge groups the rest. Click it to see all selected items.
        </Text>
        <div style={{ height: "280px" }}>
          <Dropdown
            id="multi-interactive-chips-overflow"
            options={options}
            multi
            searchable
            interactiveChips
            label="Teams"
            placeholder="Select teams"
            defaultValue={[options[0], options[1], options[2], options[3]]}
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
    );
  }
};
