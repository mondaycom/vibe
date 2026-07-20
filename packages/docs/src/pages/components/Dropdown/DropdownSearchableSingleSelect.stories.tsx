import React, { useMemo } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import person1 from "../Avatar/assets/person1.png";
import person2 from "../Avatar/assets/person2.png";
import person3 from "../Avatar/assets/person3.png";
import { Attach, Email } from "@vibe/icons";
import { Dropdown, type BaseDropdownProps, type DropdownOption, Flex, Text } from "@vibe/core";

type Story = StoryObj<typeof Dropdown>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Dropdown,
  actionPropsArray: [
    "onMenuOpen",
    "onMenuClose",
    "onFocus",
    "onBlur",
    "onChange",
    "openMenuOnFocus",
    "onOptionSelect",
    "onClear",
    "onInputChange",
    "onKeyDown"
  ]
});

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown/Searchable single select",
  component: Dropdown,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export default meta;

const basicOptions = [
  { value: "marketing", label: "Marketing" },
  { value: "design", label: "Design" },
  { value: "engineering", label: "Engineering" },
  { value: "product", label: "Product" },
  { value: "sales", label: "Sales" }
];

const dropdownTemplate = (props: BaseDropdownProps<any>) => {
  const options = useMemo(() => basicOptions, []);

  return (
    <div style={{ height: "260px", width: "300px" }}>
      <Dropdown options={options} searchable label="Team" helperText="Search and pick a team" {...props} />
    </div>
  );
};

export const Overview: Story = {
  render: dropdownTemplate.bind({}),
  args: {
    id: "searchable-single-overview",
    "aria-label": "Searchable single select",
    placeholder: "Search a team",
    clearAriaLabel: "Clear"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const WithDefaultValue: Story = {
  render: () => {
    const options = useMemo(() => basicOptions, []);
    return (
      <div style={{ height: "260px", width: "300px" }}>
        <Dropdown
          id="searchable-single-default-value"
          options={options}
          searchable
          label="Team"
          defaultValue={options[2]}
          placeholder="Search a team"
          clearAriaLabel="Clear"
        />
      </div>
    );
  }
};

export const WithIconsAndAvatars: Story = {
  render: () => {
    const iconOptions = useMemo(
      () => [
        { value: "email", label: "Email", startElement: { type: "icon", value: Email } },
        { value: "attach", label: "Attach", startElement: { type: "icon", value: Attach } }
      ],
      []
    );
    const avatarOptions = useMemo(
      () => [
        { value: "julia", label: "Julia Martinez", startElement: { type: "avatar", value: person1 } },
        { value: "sophia", label: "Sophia Johnson", startElement: { type: "avatar", value: person2 } },
        { value: "marco", label: "Marco DiAngelo", startElement: { type: "avatar", value: person3 } }
      ],
      []
    );

    return (
      <Flex gap="large" align="start">
        <div style={{ width: "300px" }}>
          <Dropdown
            id="searchable-single-icons"
            options={iconOptions as any}
            defaultValue={iconOptions[0] as any}
            searchable
            label="With icons"
            placeholder="Search an action"
            clearAriaLabel="Clear"
          />
        </div>
        <div style={{ width: "300px" }}>
          <Dropdown
            id="searchable-single-avatars"
            options={avatarOptions as any}
            defaultValue={avatarOptions[0] as any}
            searchable
            label="With avatars"
            placeholder="Search a person"
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { person1, person2, person3 }
      }
    }
  }
};

export const WithEndElements: Story = {
  render: () => {
    const endIconOptions = useMemo(
      () => [
        { value: "email", label: "Email", endElement: { type: "icon", value: Email } },
        { value: "attach", label: "Attach", endElement: { type: "icon", value: Attach } }
      ],
      []
    );
    const suffixOptions = useMemo(
      () => [
        { value: "copy", label: "Copy", endElement: { type: "suffix", value: "⌘C" } },
        { value: "paste", label: "Paste", endElement: { type: "suffix", value: "⌘V" } }
      ],
      []
    );

    return (
      <Flex gap="large" align="start">
        <div style={{ width: "300px" }}>
          <Dropdown
            id="searchable-single-end-icon"
            options={endIconOptions as any}
            defaultValue={endIconOptions[0] as any}
            searchable
            label="With end icon"
            placeholder="Search an action"
            clearAriaLabel="Clear"
          />
        </div>
        <div style={{ width: "300px" }}>
          <Dropdown
            id="searchable-single-suffix"
            options={suffixOptions as any}
            defaultValue={suffixOptions[0] as any}
            searchable
            label="With suffix / hint"
            placeholder="Search an action"
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
    );
  }
};

export const WithValueRenderer: Story = {
  render: () => {
    const options = useMemo(
      () => [
        { value: "julia", label: "Julia Martinez", startElement: { type: "avatar", value: person1 } },
        { value: "sophia", label: "Sophia Johnson", startElement: { type: "avatar", value: person2 } }
      ],
      []
    );

    const valueRenderer = (option: DropdownOption) => (
      <Flex gap="small" align="center">
        <Email />
        <Text type="text2">Custom: {option.label}</Text>
      </Flex>
    );

    return (
      <div style={{ width: "300px" }}>
        <Dropdown
          id="searchable-single-value-renderer"
          options={options as any}
          defaultValue={options[0] as any}
          valueRenderer={valueRenderer}
          searchable
          label="With valueRenderer"
          placeholder="Search a person"
          clearAriaLabel="Clear"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { person1, person2 }
      }
    }
  }
};
