import React from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import person1 from "../Avatar/assets/person1.png";
import person2 from "../Avatar/assets/person2.png";
import person3 from "../Avatar/assets/person3.png";
import { Email, Attach, Send } from "@vibe/icons";
import { Dropdown, Flex, Text } from "@vibe/core";

type Story = StoryObj<typeof Dropdown>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Dropdown,
  actionPropsArray: [
    "onMenuOpen",
    "onMenuClose",
    "onFocus",
    "onBlur",
    "onChange",
    "onOptionSelect",
    "onOptionRemove",
    "onClear",
    "onKeyDown"
  ]
});

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown Testing/Multi Select",
  component: Dropdown,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export default meta;

const basicOptions = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 3, label: "Option 3" },
  { value: 4, label: "Option 4" },
  { value: 5, label: "Option 5" }
];

const optionsWithIcons = [
  { value: "email", label: "Email", startElement: { type: "icon" as const, value: Email } },
  { value: "attach", label: "Attach", startElement: { type: "icon" as const, value: Attach } },
  { value: "send", label: "Send", startElement: { type: "icon" as const, value: Send } }
];

const optionsWithAvatars = [
  { value: "julia", label: "Julia Martinez", startElement: { type: "avatar" as const, value: person1 } },
  { value: "sophia", label: "Sophia Johnson", startElement: { type: "avatar" as const, value: person2 } },
  { value: "marco", label: "Marco DiAngelo", startElement: { type: "avatar" as const, value: person3 } }
];

const optionsWithEndElements = [
  { value: "copy", label: "Copy", endElement: { type: "suffix" as const, value: "⌘C" } },
  { value: "paste", label: "Paste", endElement: { type: "suffix" as const, value: "⌘V" } },
  { value: "forward", label: "Forward", endElement: { type: "icon" as const, value: Send } }
];

const optionsWithDisabled = [
  { value: 1, label: "Enabled option 1" },
  { value: 2, label: "Disabled option", disabled: true },
  { value: 3, label: "Enabled option 2" }
];

const chipColorOptions = [
  { value: 1, label: "Positive", chipColor: "positive" as const },
  { value: 2, label: "Negative", chipColor: "negative" as const },
  { value: 3, label: "Primary", chipColor: "primary" as const }
];

const groupedOptions = [
  {
    label: "Category 1",
    options: [
      { value: "1a", label: "Item 1A" },
      { value: "1b", label: "Item 1B" },
      { value: "1c", label: "Item 1C" }
    ]
  },
  {
    label: "Category 2",
    options: [
      { value: "2a", label: "Item 2A" },
      { value: "2b", label: "Item 2B" }
    ]
  }
];

const groupedOptionsWithoutLabel = [
  {
    options: [
      { value: "1", label: "Item 1" },
      { value: "2", label: "Item 2" }
    ]
  },
  {
    options: [
      { value: "3", label: "Item 3" },
      { value: "4", label: "Item 4" }
    ]
  }
];

const optionsWithTooltips = [
  { value: 1, label: "Option with tooltip", tooltipProps: { content: "Additional information about this option" } },
  { value: 2, label: "Another option", tooltipProps: { content: "More details here" } },
  { value: 3, label: "No tooltip option" }
];

const Wrapper = ({ children, width = "350px" }: { children: React.ReactNode; width?: string }) => (
  <div style={{ height: "250px", width }}>{children}</div>
);

export const Default: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Select options"
        label="Default"
        aria-label="Default multi select"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const WithLabelAndHelperText: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Select options"
        label="Label"
        helperText="You can select multiple options"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const Required: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Select options"
        label="Required field"
        required
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const RequiredWithHelperText: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Select options"
        label="Required field"
        required
        helperText="At least one selection is required"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const Disabled: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Disabled"
        label="Disabled"
        disabled
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const DisabledWithValues: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        defaultValue={[basicOptions[0], basicOptions[1]]}
        label="Disabled with values"
        disabled
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const ReadOnly: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        defaultValue={[basicOptions[0], basicOptions[1]]}
        label="Read only"
        readOnly
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const ErrorState: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Select options"
        label="Error"
        error
        helperText="Something went wrong"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const ErrorWithValues: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        defaultValue={[basicOptions[0]]}
        label="Error with values"
        error
        helperText="Invalid selection"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const WithPreselectedValues: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        defaultValue={[basicOptions[0], basicOptions[2], basicOptions[4]]}
        label="Preselected"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const SingleLine: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        defaultValue={[basicOptions[0], basicOptions[1], basicOptions[2]]}
        label="Single line (default)"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const Multiline: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        defaultValue={[basicOptions[0], basicOptions[1], basicOptions[2]]}
        label="Multiline"
        inputAriaLabel="Select options"
        multi
        multiline
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const MinVisibleCount: Story = {
  render: () => (
    <Flex gap="medium">
      <Wrapper>
        <Dropdown
          options={basicOptions}
          defaultValue={[basicOptions[0], basicOptions[1], basicOptions[2], basicOptions[3]]}
          label="Min visible: 1"
          inputAriaLabel="Select options"
          multi
          minVisibleCount={1}
          clearAriaLabel="Clear all selections"
        />
      </Wrapper>
      <Wrapper>
        <Dropdown
          options={basicOptions}
          defaultValue={[basicOptions[0], basicOptions[1], basicOptions[2], basicOptions[3]]}
          label="Min visible: 3"
          inputAriaLabel="Select options"
          multi
          minVisibleCount={3}
          clearAriaLabel="Clear all selections"
        />
      </Wrapper>
    </Flex>
  )
};

export const SizeSmall: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Small"
        label="Small size"
        size="small"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const SizeMedium: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Medium"
        label="Medium size"
        size="medium"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const SizeLarge: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Large"
        label="Large size"
        size="large"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const AllSizes: Story = {
  render: () => (
    <Flex gap="medium">
      <Wrapper>
        <Dropdown
          options={basicOptions}
          placeholder="Small"
          label="Small"
          size="small"
          inputAriaLabel="Select options"
          multi
          clearAriaLabel="Clear"
        />
      </Wrapper>
      <Wrapper>
        <Dropdown
          options={basicOptions}
          placeholder="Medium"
          label="Medium"
          size="medium"
          inputAriaLabel="Select options"
          multi
          clearAriaLabel="Clear"
        />
      </Wrapper>
      <Wrapper>
        <Dropdown
          options={basicOptions}
          placeholder="Large"
          label="Large"
          size="large"
          inputAriaLabel="Select options"
          multi
          clearAriaLabel="Clear"
        />
      </Wrapper>
    </Flex>
  )
};

export const AllSizesWithValues: Story = {
  render: () => (
    <Flex gap="medium">
      <Wrapper>
        <Dropdown
          options={basicOptions}
          defaultValue={[basicOptions[0], basicOptions[1]]}
          label="Small"
          size="small"
          inputAriaLabel="Select options"
          multi
          clearAriaLabel="Clear"
        />
      </Wrapper>
      <Wrapper>
        <Dropdown
          options={basicOptions}
          defaultValue={[basicOptions[0], basicOptions[1]]}
          label="Medium"
          size="medium"
          inputAriaLabel="Select options"
          multi
          clearAriaLabel="Clear"
        />
      </Wrapper>
      <Wrapper>
        <Dropdown
          options={basicOptions}
          defaultValue={[basicOptions[0], basicOptions[1]]}
          label="Large"
          size="large"
          inputAriaLabel="Select options"
          multi
          clearAriaLabel="Clear"
        />
      </Wrapper>
    </Flex>
  )
};

export const Borderless: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Borderless"
        label="Borderless"
        borderless
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const BorderlessWithValues: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        defaultValue={[basicOptions[0], basicOptions[1]]}
        label="Borderless with values"
        borderless
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const NotClearable: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        defaultValue={[basicOptions[0], basicOptions[1]]}
        label="Not clearable"
        clearable={false}
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const Loading: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Loading..."
        label="Loading state"
        loading
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const WithAriaLabel: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Select options"
        label="With ARIA label"
        aria-label="Choose multiple options"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const WithInputAriaLabel: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Select options"
        label="With input ARIA label"
        inputAriaLabel="Multi select input"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const WithMenuAriaLabel: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Select options"
        label="With menu ARIA label"
        menuAriaLabel="Available options for multi select"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const AllAriaLabels: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Select options"
        label="All ARIA labels"
        aria-label="Fully accessible multi select"
        inputAriaLabel="Multi select input field"
        menuAriaLabel="Available options"
        clearAriaLabel="Remove all selections"
        multi
      />
    </Wrapper>
  )
};

export const WithIconOptions: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={optionsWithIcons}
        placeholder="Select actions"
        label="With icons"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const WithIconOptionsPreselected: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={optionsWithIcons}
        defaultValue={[optionsWithIcons[0], optionsWithIcons[1]]}
        label="Icons preselected"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const WithAvatarOptions: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={optionsWithAvatars}
        placeholder="Select people"
        label="With avatars"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const WithAvatarOptionsPreselected: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={optionsWithAvatars}
        defaultValue={[optionsWithAvatars[0], optionsWithAvatars[1]]}
        label="Avatars preselected"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const WithEndElements: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={optionsWithEndElements}
        placeholder="Select actions"
        label="End elements"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const WithDisabledOptions: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={optionsWithDisabled}
        placeholder="Some disabled"
        label="Disabled options"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const WithChipColors: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={chipColorOptions}
        defaultValue={chipColorOptions}
        label="Chip colors"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const HideSelectedOptions: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        defaultValue={[basicOptions[0], basicOptions[2]]}
        label="Hide selected options"
        showSelectedOptions={false}
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const GroupedByCategory: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={groupedOptions}
        placeholder="Grouped options"
        label="Grouped"
        inputAriaLabel="Select options"
        multi
        maxMenuHeight={200}
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const GroupedWithDivider: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={groupedOptionsWithoutLabel}
        placeholder="With dividers"
        label="Grouped with divider"
        withGroupDivider
        inputAriaLabel="Select options"
        multi
        maxMenuHeight={200}
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const GroupedWithStickyTitle: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={groupedOptions}
        placeholder="Sticky titles"
        label="Sticky group titles"
        stickyGroupTitle
        inputAriaLabel="Select options"
        multi
        maxMenuHeight={150}
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const WithTooltips: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={optionsWithTooltips}
        placeholder="Hover for tooltips"
        label="Options with tooltips"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const NoOptionsMessage: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={[]}
        placeholder="Select options"
        label="Empty"
        noOptionsMessage="No options available"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const DirectionRTL: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="בחר אפשרויות"
        label="כיוון מימין לשמאל"
        dir="rtl"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="נקה הכל"
      />
    </Wrapper>
  )
};

export const DirectionRTLWithValues: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        defaultValue={[basicOptions[0], basicOptions[1]]}
        label="RTL עם ערכים"
        dir="rtl"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="נקה הכל"
      />
    </Wrapper>
  )
};

export const DirectionLTR: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Select options"
        label="Left to right"
        dir="ltr"
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const MaxMenuHeight: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Limited height"
        label="Max menu height (100px)"
        maxMenuHeight={100}
        inputAriaLabel="Select options"
        multi
        clearAriaLabel="Clear all selections"
      />
    </Wrapper>
  )
};

export const AllStates: Story = {
  render: () => (
    <Flex gap="medium" wrap>
      <Wrapper>
        <Dropdown options={basicOptions} placeholder="Default" label="Default" inputAriaLabel="Select options" multi clearAriaLabel="Clear" />
      </Wrapper>
      <Wrapper>
        <Dropdown
          options={basicOptions}
          placeholder="Disabled"
          label="Disabled"
          disabled
          inputAriaLabel="Select options"
          multi
          clearAriaLabel="Clear"
        />
      </Wrapper>
      <Wrapper>
        <Dropdown
          options={basicOptions}
          defaultValue={[basicOptions[0]]}
          label="Read only"
          readOnly
          inputAriaLabel="Select options"
          multi
          clearAriaLabel="Clear"
        />
      </Wrapper>
      <Wrapper>
        <Dropdown
          options={basicOptions}
          placeholder="Error"
          label="Error"
          error
          helperText="Error message"
          inputAriaLabel="Select options"
          multi
          clearAriaLabel="Clear"
        />
      </Wrapper>
      <Wrapper>
        <Dropdown
          options={basicOptions}
          placeholder="Loading"
          label="Loading"
          loading
          inputAriaLabel="Select options"
          multi
          clearAriaLabel="Clear"
        />
      </Wrapper>
    </Flex>
  )
};

export const MultilineVsSingleLine: Story = {
  render: () => (
    <Flex gap="medium">
      <Wrapper>
        <Dropdown
          options={basicOptions}
          defaultValue={[basicOptions[0], basicOptions[1], basicOptions[2]]}
          label="Single line"
          inputAriaLabel="Select options"
          multi
          clearAriaLabel="Clear"
        />
      </Wrapper>
      <Wrapper>
        <Dropdown
          options={basicOptions}
          defaultValue={[basicOptions[0], basicOptions[1], basicOptions[2]]}
          label="Multiline"
          inputAriaLabel="Select options"
          multi
          multiline
          clearAriaLabel="Clear"
        />
      </Wrapper>
    </Flex>
  )
};
