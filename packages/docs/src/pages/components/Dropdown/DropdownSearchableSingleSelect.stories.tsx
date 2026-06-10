import React, { useMemo, useState } from "react";
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

export const Sizes: Story = {
  render: () => {
    const options = useMemo(() => basicOptions, []);
    return (
      <Flex gap="medium" align="start">
        <div style={{ width: "300px" }}>
          <Dropdown
            id="searchable-single-large"
            options={options}
            searchable
            size="large"
            label="Large"
            placeholder="Search a team"
            clearAriaLabel="Clear"
          />
        </div>
        <div style={{ width: "300px" }}>
          <Dropdown
            id="searchable-single-medium"
            options={options}
            searchable
            size="medium"
            label="Medium"
            placeholder="Search a team"
            clearAriaLabel="Clear"
          />
        </div>
        <div style={{ width: "300px" }}>
          <Dropdown
            id="searchable-single-small"
            options={options}
            searchable
            size="small"
            label="Small"
            placeholder="Search a team"
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
    );
  }
};

export const States: Story = {
  render: () => {
    const options = useMemo(() => basicOptions, []);
    return (
      <Flex gap="large" align="start">
        <Flex direction="column" gap="medium">
          <div style={{ width: "300px" }}>
            <Dropdown
              id="searchable-single-default"
              options={options}
              searchable
              label="Default"
              placeholder="Search a team"
              clearAriaLabel="Clear"
            />
          </div>
          <div style={{ width: "300px" }}>
            <Dropdown
              id="searchable-single-disabled"
              options={options}
              searchable
              label="Disabled"
              placeholder="Search a team"
              disabled
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <div style={{ width: "300px" }}>
            <Dropdown
              id="searchable-single-error"
              options={options}
              searchable
              label="Error"
              placeholder="Search a team"
              error
              clearAriaLabel="Clear"
            />
          </div>
          <div style={{ width: "300px" }}>
            <Dropdown
              id="searchable-single-readonly"
              options={options}
              searchable
              label="Read only"
              placeholder="Search a team"
              defaultValue={options[0]}
              readOnly
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
      </Flex>
    );
  }
};

export const WithDefaultValue: Story = {
  render: () => {
    const options = useMemo(() => basicOptions, []);
    return (
      <div style={{ height: "260px", width: "300px" }}>
        <Text type="text2" color="secondary">
          The selected value lives inside the input, so it is exposed to screen readers on mount.
        </Text>
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

export const Controlled: Story = {
  render: () => {
    const options = useMemo(() => basicOptions, []);
    const [value, setValue] = useState<DropdownOption | null | undefined>(options[1]);

    return (
      <Flex direction="column" gap="medium" align="start" style={{ width: "300px" }}>
        <Text type="text2">Selected: {value?.label ?? "none"}</Text>
        <Dropdown
          id="searchable-single-controlled"
          options={options}
          searchable
          label="Team"
          placeholder="Search a team"
          value={value}
          onChange={(option: DropdownOption) => setValue(option)}
          onClear={() => setValue(null)}
          clearAriaLabel="Clear"
        />
      </Flex>
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

export const WithGroups: Story = {
  render: () => {
    const groupedOptions = useMemo(
      () => [
        {
          label: "Engineering",
          options: [
            { value: "frontend", label: "Frontend" },
            { value: "backend", label: "Backend" },
            { value: "infra", label: "Infrastructure" }
          ]
        },
        {
          label: "Business",
          options: [
            { value: "marketing", label: "Marketing" },
            { value: "sales", label: "Sales" }
          ]
        }
      ],
      []
    );

    return (
      <Flex gap="large" align="start">
        <Flex direction="column" gap="small">
          <Text type="text2">Grouped by category</Text>
          <div style={{ width: "300px" }}>
            <Dropdown
              id="searchable-single-groups"
              options={groupedOptions}
              searchable
              placeholder="Search a team"
              maxMenuHeight={200}
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
        <Flex direction="column" gap="small">
          <Text type="text2">Sticky group titles</Text>
          <div style={{ width: "300px" }}>
            <Dropdown
              id="searchable-single-groups-sticky"
              options={groupedOptions}
              searchable
              stickyGroupTitle
              placeholder="Search a team"
              maxMenuHeight={200}
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
        <Flex direction="column" gap="small">
          <Text type="text2">Group by divider</Text>
          <div style={{ width: "300px" }}>
            <Dropdown
              id="searchable-single-groups-divider"
              options={groupedOptions}
              searchable
              withGroupDivider
              placeholder="Search a team"
              maxMenuHeight={200}
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
      </Flex>
    );
  }
};

export const WithTooltips: Story = {
  render: () => {
    const options = useMemo(
      () => [
        {
          value: "marketing",
          label: "Marketing",
          tooltipProps: { content: "Campaigns, content and brand." }
        },
        {
          value: "design",
          label: "Design",
          tooltipProps: { content: "Product and brand design." }
        },
        { value: "engineering", label: "Engineering" }
      ],
      []
    );

    return (
      <div style={{ height: "220px", width: "300px" }}>
        <Dropdown
          id="searchable-single-tooltips"
          options={options as any}
          searchable
          label="Team"
          placeholder="Search a team"
          clearAriaLabel="Clear"
        />
      </div>
    );
  }
};

export const ClearableAndMaxHeight: Story = {
  render: () => {
    const options = useMemo(
      () =>
        Array.from({ length: 30 }, (_, index) => ({
          value: `option-${index + 1}`,
          label: `Option ${index + 1}`
        })),
      []
    );

    return (
      <Flex gap="large" align="start">
        <div style={{ width: "300px" }}>
          <Dropdown
            id="searchable-single-not-clearable"
            options={options}
            searchable
            clearable={false}
            label="Not clearable"
            defaultValue={options[0]}
            placeholder="Search an option"
            clearAriaLabel="Clear"
          />
        </div>
        <div style={{ width: "300px" }}>
          <Dropdown
            id="searchable-single-max-height"
            options={options}
            searchable
            maxMenuHeight={170}
            label="Limited menu height"
            placeholder="Search an option"
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
    );
  }
};

export const CustomFilterAndNoOptions: Story = {
  render: () => {
    const options = useMemo(() => basicOptions, []);

    // Match only from the start of the label instead of the default substring match.
    const startsWithFilter = (option: DropdownOption, inputValue: string) =>
      option.label.toLowerCase().startsWith(inputValue.toLowerCase());

    return (
      <Flex gap="large" align="start">
        <Flex direction="column" gap="small">
          <Text type="text2">Custom "starts with" filter</Text>
          <div style={{ width: "300px" }}>
            <Dropdown
              id="searchable-single-custom-filter"
              options={options}
              searchable
              filterOption={startsWithFilter}
              placeholder="Search a team"
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
        <Flex direction="column" gap="small">
          <Text type="text2">Custom empty message</Text>
          <div style={{ width: "300px" }}>
            <Dropdown
              id="searchable-single-no-options"
              options={[]}
              searchable
              noOptionsMessage="No teams found"
              placeholder="Search a team"
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
      </Flex>
    );
  }
};
