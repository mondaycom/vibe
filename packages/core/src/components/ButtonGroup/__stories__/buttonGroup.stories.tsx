import ButtonGroup from "../ButtonGroup";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate } from "vibe-storybook-components";
import "./buttonGroup.stories.scss";

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
};

export const Overview = {
  render: buttonGroupTemplate.bind({}),
  name: "Overview",

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
  }
};

export const Default = {
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
  ),

  name: "Default"
};

export const Tertiary = {
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
  ),

  name: "Tertiary"
};

export const Disabled = {
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
  ),

  name: "Disabled"
};

export const DisabledSingeButton = {
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

export const Size = {
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
  ),

  name: "Size"
};

export const ButtonGroupInSettings = {
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

export const ButtonGroupAsToggle = {
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
