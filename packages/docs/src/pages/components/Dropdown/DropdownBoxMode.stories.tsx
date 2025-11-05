import React, { useMemo } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import person1 from "../Avatar/assets/person1.png";
import person2 from "../Avatar/assets/person2.png";
import person3 from "../Avatar/assets/person3.png";
import person4 from "../Avatar/assets/person4.png";
import { Email, Send, Mobile } from "@vibe/icons";
import { Dropdown } from "@vibe/core/next";
import { Flex, Text, DialogContentContainer, Button } from "@vibe/core";

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
    "onOptionRemove",
    "onOptionSelect",
    "onClear",
    "onInputChange",
    "onKeyDown"
  ]
});

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown [New]/Dropdown box mode",
  component: Dropdown,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export default meta;

export const Overview: Story = {
  render: () => {
    const options = useMemo(
      () => [
        { value: 1, label: "Label" },
        { value: 2, label: "Label" },
        { value: 3, label: "Label" },
        { value: 4, label: "Label" },
        { value: 5, label: "Label" }
      ],
      []
    );

    return (
      <div style={{ width: "300px" }}>
        <Dropdown
          id="box-mode-overview"
          ariaLabel="Box mode overview"
          options={options}
          label="Label"
          placeholder="Placeholder text here"
          helperText="Helper text"
          searchable
          boxMode
          clearAriaLabel="Clear"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const DefaultState: Story = {
  render: () => {
    const options = useMemo(
      () => [
        { value: 1, label: "Label" },
        { value: 2, label: "Label" },
        { value: 3, label: "Label" },
        { value: 4, label: "Label" },
        { value: 5, label: "Label" },
        { value: 6, label: "Label" }
      ],
      []
    );

    return (
      <div style={{ width: "300px" }}>
        <Dropdown
          id="box-mode-default-state"
          ariaLabel="Box mode default state"
          options={options}
          label="Label"
          placeholder="Placeholder text"
          helperText="Helper text"
          searchable
          boxMode
          clearAriaLabel="Clear"
        />
      </div>
    );
  }
};

export const InsideADialog: Story = {
  render: () => {
    const options = useMemo(
      () => [
        { value: 1, label: "Label" },
        { value: 2, label: "Label" },
        { value: 3, label: "Label" },
        { value: 4, label: "Label" },
        { value: 5, label: "Label" },
        { value: 6, label: "Label" }
      ],
      []
    );

    return (
      <div style={{ width: "300px" }}>
        <DialogContentContainer>
          <Dropdown
            id="box-mode-dialog"
            ariaLabel="Box mode inside dialog"
            options={options}
            label="Label"
            placeholder="Placeholder text"
            helperText="Helper text"
            searchable
            boxMode
            clearAriaLabel="Clear"
          />
          <Button style={{ width: "100%" }} kind="secondary" size="small">
            Edit
          </Button>
        </DialogContentContainer>
      </div>
    );
  }
};

export const MultiSelect: Story = {
  render: () => {
    const options = useMemo(
      () => [
        { value: 1, label: "Label" },
        { value: 2, label: "Label" },
        { value: 3, label: "Label" },
        { value: 4, label: "Label" },
        { value: 5, label: "Label" }
      ],
      []
    );

    return (
      <Flex gap="large" align="start" wrap>
        <Flex direction="column" gap="medium">
          <Text type="text1" weight="bold">
            Single line with hidden options
          </Text>
          <div style={{ width: "300px" }}>
            <Dropdown
              id="box-mode-multi-single-line"
              ariaLabel="Box mode multi select single line"
              options={options}
              label="Label"
              placeholder="Placeholder text"
              helperText="Helper text"
              searchable
              multi
              boxMode
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>

        <Flex direction="column" gap="medium">
          <Text type="text1" weight="bold">
            Multiple lines
          </Text>
          <div style={{ width: "300px" }}>
            <Dropdown
              id="box-mode-multi-multiline"
              ariaLabel="Box mode multi select multiple lines"
              options={options}
              label="Label"
              placeholder="Placeholder text"
              helperText="Helper text"
              searchable
              multi
              multiline
              boxMode
              clearAriaLabel="Clear"
            />
          </div>
        </Flex>
      </Flex>
    );
  }
};

export const WithIcons: Story = {
  render: () => {
    const optionsWithIcons: any = useMemo(
      () => [
        {
          value: "email",
          label: "Email",
          startElement: {
            type: "icon",
            value: Email
          }
        },
        {
          value: "send",
          label: "Send",
          startElement: {
            type: "icon",
            value: Send
          }
        },
        {
          value: "mobile",
          label: "Mobile",
          startElement: {
            type: "icon",
            value: Mobile
          }
        },
        {
          value: "notification",
          label: "Send notification"
        }
      ],
      []
    );

    return (
      <div style={{ width: "300px" }}>
        <Dropdown
          id="box-mode-with-icons"
          ariaLabel="Box mode with icons"
          options={optionsWithIcons}
          label="Notify via"
          placeholder="You can choose multiple options"
          searchable
          multi
          boxMode
          clearAriaLabel="Clear"
        />
      </div>
    );
  }
};

export const PeoplePicker: Story = {
  render: () => {
    const peopleOptions: any = useMemo(
      () => [
        {
          label: "Suggested people",
          options: [
            {
              value: "Matt",
              label: "Matt Gaman",
              startElement: {
                type: "avatar",
                value: person1
              }
            },
            {
              value: "Jennifer",
              label: "Jennifer Lawrence",
              startElement: {
                type: "avatar",
                value: person2
              }
            },
            {
              value: "Emma",
              label: "Emma Stone",
              startElement: {
                type: "avatar",
                value: person3
              }
            },
            {
              value: "Johnny",
              label: "Johnny Depp",
              startElement: {
                type: "avatar",
                value: person4
              }
            }
          ]
        }
      ],
      []
    );

    return (
      <Flex gap="large" align="start" wrap>
        <div style={{ width: "350px" }}>
          <Dropdown
            id="box-mode-people-picker"
            ariaLabel="Box mode people picker"
            options={peopleOptions}
            label="Person"
            placeholder="Search for people"
            searchable
            boxMode
            multi
            clearAriaLabel="Clear"
          />
        </div>
      </Flex>
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { person1, person2, person3, person4 }
      }
    }
  }
};
