import React, { useMemo, useState } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import person1 from "../Avatar/assets/person1.png";
import person2 from "../Avatar/assets/person2.png";
import person3 from "../Avatar/assets/person3.png";
import person4 from "../Avatar/assets/person4.png";
import { Attach, Email, Mobile, Send } from "@vibe/icons";
import { Dropdown, type DropdownOption, Flex } from "@vibe/core";

type Story = StoryObj<typeof Dropdown>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Dropdown,
  actionPropsArray: [
    "onMenuOpen",
    "onMenuClose",
    "onFocus",
    "onBlur",
    "onChange",
    "onOptionRemove",
    "onOptionSelect",
    "onClear",
    "onInputChange",
    "onKeyDown"
  ]
});

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown/Dropdown search in menu",
  component: Dropdown,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export default meta;

const fruitOptions = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "grape", label: "Grape" },
  { value: "mango", label: "Mango" },
  { value: "orange", label: "Orange" },
  { value: "peach", label: "Peach" },
  { value: "pear", label: "Pear" }
];

const labelOptions = [
  { value: 1, label: "Label 1" },
  { value: 2, label: "Label 2" },
  { value: 3, label: "Label 3" },
  { value: 4, label: "Label 4" },
  { value: 5, label: "Label 5" }
];

const dropdownTemplate = props => (
  <div style={{ width: "300px", height: "360px" }}>
    <Dropdown
      id="search-in-menu-overview"
      options={labelOptions}
      label="Label"
      placeholder="Placeholder text here"
      helperText="Helper text"
      clearAriaLabel="Clear"
      searchable
      searchPlacement="menu"
      {...props}
    />
  </div>
);

export const Overview: Story = {
  render: dropdownTemplate.bind({}),
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const SingleAndMulti: Story = {
  render: () => (
    <Flex gap="large" align="start" style={{ height: "380px" }}>
      <div style={{ width: "300px" }}>
        <Dropdown
          id="search-in-menu-single"
          label="Single select"
          placeholder="Select a fruit"
          options={fruitOptions}
          searchable
          searchPlacement="menu"
          clearAriaLabel="Clear"
        />
      </div>
      <div style={{ width: "300px" }}>
        <Dropdown
          id="search-in-menu-multi"
          label="Multi select"
          placeholder="Select fruits"
          options={fruitOptions}
          defaultValue={[fruitOptions[1], fruitOptions[3]]}
          searchable
          searchPlacement="menu"
          multi
          clearAriaLabel="Clear"
        />
      </div>
    </Flex>
  )
};

export const Sizes: Story = {
  render: () => (
    <Flex gap="large" align="start" style={{ height: "360px" }}>
      {(["small", "medium", "large"] as const).map(size => (
        <div key={size} style={{ width: "260px" }}>
          <Dropdown
            id={`search-in-menu-size-${size}`}
            label={`${size[0].toUpperCase()}${size.slice(1)}`}
            placeholder="Placeholder text here"
            options={labelOptions}
            size={size}
            searchable
            searchPlacement="menu"
            clearAriaLabel="Clear"
          />
        </div>
      ))}
    </Flex>
  )
};

export const States: Story = {
  render: () => (
    <Flex direction="column" gap="medium" align="start" style={{ height: "520px" }}>
      <Flex gap="large">
        <div style={{ width: "300px" }}>
          <Dropdown
            id="search-in-menu-state-default"
            label="Default"
            placeholder="Placeholder text here"
            options={labelOptions}
            searchable
            searchPlacement="menu"
            clearAriaLabel="Clear"
          />
        </div>
        <div style={{ width: "300px" }}>
          <Dropdown
            id="search-in-menu-state-selected"
            label="Selected"
            placeholder="Placeholder text here"
            options={labelOptions}
            defaultValue={labelOptions[1]}
            searchable
            searchPlacement="menu"
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
      <Flex gap="large">
        <div style={{ width: "300px" }}>
          <Dropdown
            id="search-in-menu-state-error"
            label="Error"
            placeholder="Placeholder text here"
            helperText="Helper text"
            options={labelOptions}
            error
            searchable
            searchPlacement="menu"
            clearAriaLabel="Clear"
          />
        </div>
        <div style={{ width: "300px" }}>
          <Dropdown
            id="search-in-menu-state-loading"
            label="Loading"
            placeholder="Placeholder text here"
            options={labelOptions}
            loading
            searchable
            searchPlacement="menu"
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
      <Flex gap="large">
        <div style={{ width: "300px" }}>
          <Dropdown
            id="search-in-menu-state-readonly"
            label="Read only"
            placeholder="Placeholder text here"
            options={labelOptions}
            defaultValue={labelOptions[0]}
            readOnly
            searchable
            searchPlacement="menu"
          />
        </div>
        <div style={{ width: "300px" }}>
          <Dropdown
            id="search-in-menu-state-disabled"
            label="Disabled"
            placeholder="Placeholder text here"
            options={labelOptions}
            disabled
            searchable
            searchPlacement="menu"
          />
        </div>
      </Flex>
    </Flex>
  )
};

export const MultiSelect: Story = {
  render: () => {
    const [selected, setSelected] = useState<DropdownOption[]>([fruitOptions[0], fruitOptions[2], fruitOptions[4]]);

    return (
      <Flex gap="large" align="start" style={{ height: "420px" }}>
        <div style={{ width: "300px" }}>
          <Dropdown
            id="search-in-menu-multi-single-line"
            label="Single line"
            placeholder="Select fruits"
            options={fruitOptions}
            value={selected}
            onChange={setSelected}
            multi
            searchable
            searchPlacement="menu"
            clearAriaLabel="Clear"
          />
        </div>
        <div style={{ width: "300px" }}>
          <Dropdown
            id="search-in-menu-multi-multiline"
            label="Multiline"
            placeholder="Select fruits"
            options={fruitOptions}
            defaultValue={[fruitOptions[0], fruitOptions[2], fruitOptions[4], fruitOptions[6]]}
            multi
            multiline
            searchable
            searchPlacement="menu"
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
    );
  }
};

export const WithStartElement: Story = {
  render: () => {
    const iconOptions = useMemo(
      () => [
        { value: "email", label: "Email", startElement: { type: "icon", value: Email } },
        { value: "attach", label: "Attach", startElement: { type: "icon", value: Attach } },
        { value: "send", label: "Send", startElement: { type: "icon", value: Send } },
        { value: "mobile", label: "Mobile", startElement: { type: "icon", value: Mobile } }
      ],
      []
    ) as DropdownOption[];
    const avatarOptions = useMemo(
      () => [
        { value: "julia", label: "Julia Martinez", startElement: { type: "avatar", value: person1 } },
        { value: "sophia", label: "Sophia Johnson", startElement: { type: "avatar", value: person2 } },
        { value: "marco", label: "Marco DiAngelo", startElement: { type: "avatar", value: person3 } },
        { value: "liam", label: "Liam Caldwell", startElement: { type: "avatar", value: person4 } }
      ],
      []
    ) as DropdownOption[];

    return (
      <Flex gap="large" align="start" style={{ height: "340px" }}>
        <div style={{ width: "300px" }}>
          <Dropdown
            id="search-in-menu-icons"
            label="With icons"
            placeholder="Select an action"
            options={iconOptions}
            defaultValue={iconOptions[0]}
            searchable
            searchPlacement="menu"
            clearAriaLabel="Clear"
          />
        </div>
        <div style={{ width: "300px" }}>
          <Dropdown
            id="search-in-menu-avatars"
            label="People"
            placeholder="Select people"
            options={avatarOptions}
            multi
            searchable
            searchPlacement="menu"
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
    );
  }
};

export const WithGroups: Story = {
  render: () => {
    const groupedOptions = useMemo(
      () => [
        {
          label: "Fruits",
          options: [
            { value: "apple", label: "Apple" },
            { value: "banana", label: "Banana" },
            { value: "cherry", label: "Cherry" }
          ]
        },
        {
          label: "Vegetables",
          options: [
            { value: "carrot", label: "Carrot" },
            { value: "celery", label: "Celery" },
            { value: "pepper", label: "Pepper" }
          ]
        }
      ],
      []
    );

    return (
      <div style={{ width: "300px", height: "420px" }}>
        <Dropdown
          id="search-in-menu-groups"
          label="Produce"
          placeholder="Select an item"
          options={groupedOptions}
          withGroupDivider
          stickyGroupTitle
          maxMenuHeight={260}
          searchable
          searchPlacement="menu"
          clearAriaLabel="Clear"
        />
      </div>
    );
  }
};

export const NoResults: Story = {
  render: () => (
    <div style={{ width: "300px", height: "220px" }}>
      <Dropdown
        id="search-in-menu-no-results"
        label="Fruit"
        placeholder="Select a fruit"
        helperText='Try searching for "kiwi"'
        options={fruitOptions}
        noOptionsMessage="No fruits found"
        searchable
        searchPlacement="menu"
        clearAriaLabel="Clear"
      />
    </div>
  )
};

export const LongList: Story = {
  render: () => {
    const countryOptions = useMemo(
      () =>
        [
          "Argentina",
          "Australia",
          "Austria",
          "Belgium",
          "Brazil",
          "Canada",
          "Chile",
          "Denmark",
          "Finland",
          "France",
          "Germany",
          "Greece",
          "India",
          "Ireland",
          "Israel",
          "Italy",
          "Japan",
          "Mexico",
          "Netherlands",
          "Norway",
          "Portugal",
          "Spain",
          "Sweden",
          "Switzerland",
          "United Kingdom",
          "United States"
        ].map(country => ({ value: country, label: country })),
      []
    );

    return (
      <div style={{ width: "300px", height: "320px" }}>
        <Dropdown
          id="search-in-menu-long-list"
          label="Country"
          placeholder="Select a country"
          options={countryOptions}
          maxMenuHeight={200}
          searchable
          searchPlacement="menu"
          clearAriaLabel="Clear"
        />
      </div>
    );
  }
};
