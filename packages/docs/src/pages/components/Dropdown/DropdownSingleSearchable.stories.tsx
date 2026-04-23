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
    "onClear",
    "onInputChange",
    "onKeyDown"
  ]
});

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown Testing/Single Searchable",
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

const Wrapper = ({ children, width = "300px" }: { children: React.ReactNode; width?: string }) => (
  <div style={{ height: "250px", width }}>{children}</div>
);

export const Default: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Search..."
        aria-label="Default single searchable"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const WithLabel: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Search..."
        label="Label"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const WithLabelAndHelperText: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Search..."
        label="Label"
        helperText="Type to filter the options"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const Required: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Search..."
        label="Required field"
        required
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const RequiredWithHelperText: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Search..."
        label="Required field"
        required
        helperText="This field is mandatory"
        searchable
        clearAriaLabel="Clear selection"
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
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const DisabledWithValue: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        defaultValue={basicOptions[0]}
        label="Disabled with value"
        disabled
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const ReadOnly: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        defaultValue={basicOptions[1]}
        label="Read only"
        readOnly
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const ErrorState: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Search..."
        label="Error"
        error
        helperText="Something went wrong"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const ErrorWithValue: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        defaultValue={basicOptions[0]}
        label="Error with value"
        error
        helperText="Invalid selection"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const WithPreselectedValue: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        defaultValue={basicOptions[2]}
        label="Preselected"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
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
        searchable
        clearAriaLabel="Clear selection"
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
        searchable
        clearAriaLabel="Clear selection"
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
        searchable
        clearAriaLabel="Clear selection"
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
          searchable
          clearAriaLabel="Clear"
        />
      </Wrapper>
      <Wrapper>
        <Dropdown
          options={basicOptions}
          placeholder="Medium"
          label="Medium"
          size="medium"
          searchable
          clearAriaLabel="Clear"
        />
      </Wrapper>
      <Wrapper>
        <Dropdown
          options={basicOptions}
          placeholder="Large"
          label="Large"
          size="large"
          searchable
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
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const BorderlessWithValue: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        defaultValue={basicOptions[0]}
        label="Borderless with value"
        borderless
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const NotClearable: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        defaultValue={basicOptions[0]}
        label="Not clearable"
        clearable={false}
        searchable
        clearAriaLabel="Clear selection"
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
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const WithAriaLabel: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Search..."
        aria-label="Search for your preferred option"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const WithInputAriaLabel: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Search..."
        label="With input ARIA label"
        inputAriaLabel="Type to search options"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const WithMenuAriaLabel: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Search..."
        label="With menu ARIA label"
        menuAriaLabel="Filtered options list"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const AllAriaLabels: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Search..."
        aria-label="Fully accessible combobox"
        inputAriaLabel="Type to filter"
        menuAriaLabel="Filtered results"
        clearAriaLabel="Remove current selection"
        searchable
      />
    </Wrapper>
  )
};

export const WithIconOptions: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={optionsWithIcons}
        placeholder="Search actions..."
        label="With icons"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const WithIconOptionsPreselected: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={optionsWithIcons}
        defaultValue={optionsWithIcons[0]}
        label="Icon preselected"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const WithAvatarOptions: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={optionsWithAvatars}
        placeholder="Search people..."
        label="With avatars"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const WithAvatarOptionsPreselected: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={optionsWithAvatars}
        defaultValue={optionsWithAvatars[0]}
        label="Avatar preselected"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const WithEndElements: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={optionsWithEndElements}
        placeholder="Search actions..."
        label="End elements"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const WithDisabledOptions: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={optionsWithDisabled}
        placeholder="Search..."
        label="Disabled options"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const GroupedByCategory: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={groupedOptions}
        placeholder="Search groups..."
        label="Grouped"
        searchable
        maxMenuHeight={200}
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const GroupedWithDivider: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={groupedOptionsWithoutLabel}
        placeholder="Search..."
        label="Grouped with divider"
        withGroupDivider
        searchable
        maxMenuHeight={200}
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const GroupedWithStickyTitle: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={groupedOptions}
        placeholder="Search..."
        label="Sticky group titles"
        stickyGroupTitle
        searchable
        maxMenuHeight={150}
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const WithTooltips: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={optionsWithTooltips}
        placeholder="Search..."
        label="Options with tooltips"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const NoOptionsMessage: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={[]}
        placeholder="Search..."
        label="Empty"
        noOptionsMessage="No results found"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const DirectionRTL: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="חפש..."
        label="כיוון מימין לשמאל"
        dir="rtl"
        searchable
        clearAriaLabel="נקה בחירה"
      />
    </Wrapper>
  )
};

export const DirectionLTR: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Search..."
        label="Left to right"
        dir="ltr"
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const CloseMenuOnSelect: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Search..."
        label="Close menu on select"
        closeMenuOnSelect
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const CustomValueRenderer: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={optionsWithIcons}
        defaultValue={optionsWithIcons[0]}
        label="Custom value renderer"
        searchable
        valueRenderer={option => (
          <Text type="text2" weight="bold">
            Selected: {option.label}
          </Text>
        )}
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const MaxMenuHeight: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Search..."
        label="Max menu height (100px)"
        maxMenuHeight={100}
        searchable
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const CustomFilterOption: Story = {
  render: () => (
    <Wrapper>
      <Dropdown
        options={basicOptions}
        placeholder="Type exact label..."
        label="Custom filter (exact match)"
        searchable
        filterOption={(option, inputValue) => option.label.toLowerCase() === inputValue.toLowerCase()}
        clearAriaLabel="Clear selection"
      />
    </Wrapper>
  )
};

export const AllStates: Story = {
  render: () => (
    <Flex gap="medium" wrap>
      <Wrapper>
        <Dropdown
          options={basicOptions}
          placeholder="Default"
          label="Default"
          searchable
          clearAriaLabel="Clear"
        />
      </Wrapper>
      <Wrapper>
        <Dropdown
          options={basicOptions}
          placeholder="Disabled"
          label="Disabled"
          disabled
          searchable
          clearAriaLabel="Clear"
        />
      </Wrapper>
      <Wrapper>
        <Dropdown
          options={basicOptions}
          defaultValue={basicOptions[0]}
          label="Read only"
          readOnly
          searchable
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
          searchable
          clearAriaLabel="Clear"
        />
      </Wrapper>
      <Wrapper>
        <Dropdown
          options={basicOptions}
          placeholder="Loading"
          label="Loading"
          loading
          searchable
          clearAriaLabel="Clear"
        />
      </Wrapper>
    </Flex>
  )
};
