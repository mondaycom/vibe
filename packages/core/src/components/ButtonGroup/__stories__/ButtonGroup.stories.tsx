import React from "react";
import ButtonGroup from "../ButtonGroup";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import "./ButtonGroup.stories.scss";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof ButtonGroup>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: ButtonGroup,
  enumPropNamesArray: ["kind", "size"],
  actionPropsArray: ["onSelect"]
});

const buttonGroupTemplate = createComponentTemplate(ButtonGroup);

export default {
  title: "Buttons/ButtonGroup",
  component: ButtonGroup,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
} satisfies Meta<typeof ButtonGroup>;

export const Overview: Story = {
  render: buttonGroupTemplate.bind({}),

  args: {
    options: [
      {
        value: 1,
        text: "Alpha"
      },
      {
        value: 2,
        text: "Beta"
      },
      {
        value: 3,
        text: "Gamma"
      },
      {
        value: 4,
        text: "Delta"
      }
    ],

    value: 1
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Default: Story = {
  render: () => (
    <ButtonGroup
      groupAriaLabel="button group aria label"
      value={1}
      options={[
        {
          value: 1,
          text: "Alpha"
        },
        {
          value: 2,
          text: "Beta"
        },
        {
          value: 3,
          text: "Gamma"
        },
        {
          value: 4,
          text: "Delta"
        }
      ]}
    />
  )
};

export const Tertiary: Story = {
  render: () => (
    <ButtonGroup
      groupAriaLabel="button group aria label"
      value={1}
      kind={ButtonGroup.kinds.TERTIARY}
      options={[
        {
          value: 1,
          text: "Alpha"
        },
        {
          value: 2,
          text: "Beta"
        },
        {
          value: 3,
          text: "Gamma"
        },
        {
          value: 4,
          text: "Delta"
        }
      ]}
    />
  )
};

export const Disabled: Story = {
  render: () => (
    <ButtonGroup
      disabled
      groupAriaLabel="button group aria label"
      options={[
        {
          value: 1,
          text: "Alpha"
        },
        {
          value: 2,
          text: "Beta"
        },
        {
          value: 3,
          text: "Gamma"
        },
        {
          value: 4,
          text: "Delta"
        }
      ]}
    />
  )
};

export const DisabledSingeButton: Story = {
  render: () => (
    <ButtonGroup
      groupAriaLabel="button group aria label"
      options={[
        {
          value: 1,
          text: "Alpha"
        },
        {
          value: 2,
          text: "Beta"
        },
        {
          value: 3,
          text: "Gamma"
        },
        {
          value: 4,
          text: "Delta",
          disabled: true,
          tooltipContent: "I'm the worst variant ever"
        }
      ]}
    />
  ),
  name: "Disabled - Singe Button"
};

export const Size: Story = {
  render: () => (
    <>
      <div className="monday-storybook-button-group_column">
        Medium
        <ButtonGroup
          groupAriaLabel="button group aria label"
          size={ButtonGroup.sizes.MEDIUM}
          value={1}
          options={[
            { value: 1, text: "Alpha" },
            { value: 2, text: "Beta" },
            { value: 3, text: "Gamma" },
            { value: 4, text: "Delta" }
          ]}
        />
      </div>
      <div className="monday-storybook-button-group_column">
        Small
        <ButtonGroup
          groupAriaLabel="button group aria label"
          size={ButtonGroup.sizes.SMALL}
          value={1}
          options={[
            { value: 1, text: "Alpha" },
            { value: 2, text: "Beta" },
            { value: 3, text: "Gamma" },
            { value: 4, text: "Delta" }
          ]}
        />
      </div>
    </>
  )
};

export const ButtonGroupInSettings: Story = {
  render: () => (
    <div className="monday-storybook-button-group_column">
      Function
      <ButtonGroup
        groupAriaLabel="button group aria label"
        size={ButtonGroup.sizes.SMALL}
        value={1}
        options={[
          {
            value: 1,
            text: "Sum"
          },
          {
            value: 2,
            text: "Average"
          },
          {
            value: 3,
            text: "Median"
          },
          {
            value: 4,
            text: "Min"
          }
        ]}
      />
    </div>
  ),
  name: "Button group in settings"
};

export const ButtonGroupAsToggle: Story = {
  render: () => (
    <ButtonGroup
      groupAriaLabel="button group aria label"
      value={1}
      options={[
        {
          value: 1,
          text: "Grid"
        },
        {
          value: 2,
          text: "List"
        }
      ]}
    />
  ),
  name: "Button group as toggle"
};

export const FullWidthButtonGroup: Story = {
  render: () => (
    <div className="monday-storybook-button-group-full-width">
      <ButtonGroup
        groupAriaLabel="Full Width Button Group"
        fullWidth
        value={1}
        options={[
          {
            value: 1,
            text: "Grid"
          },
          {
            value: 2,
            text: "List"
          },
          {
            value: 3,
            text: "Table"
          },
          {
            value: 4,
            text: "Masonry"
          }
        ]}
      />
    </div>
  ),
  name: "Full width button group"
};
