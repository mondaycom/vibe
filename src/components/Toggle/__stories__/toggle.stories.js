import { createComponentTemplate, MultipleStoryElementsWrapper } from "vibe-storybook-components";
import Toggle from "../Toggle";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import "./toggle.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Toggle,
  enumPropNamesArray: [],
  iconPropNamesArray: [],
  actionPropsArray: ["onChange"]
});

export default {
  title: "Inputs/Toggle",
  component: Toggle,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const toggleTemplate = createComponentTemplate(Toggle);

export const Overview = {
  render: toggleTemplate.bind({}),
  name: "Overview"
};

export const States = {
  render: () => (
    <MultipleStoryElementsWrapper className="monday-storybook-toggle_column">
      <Toggle isDefaultSelected={false} />
      <Toggle />
    </MultipleStoryElementsWrapper>
  ),

  name: "States"
};

export const Disabled = {
  render: () => (
    <MultipleStoryElementsWrapper className="monday-storybook-toggle_column">
      <Toggle isDefaultSelected={false} disabled />
      <Toggle disabled />
    </MultipleStoryElementsWrapper>
  ),

  name: "Disabled"
};

export const TurnOnOffAnAutomation = {
  render: () => (
    <>
      <h5>Board automations</h5>
      <Toggle />
    </>
  ),
  name: "Turn on/ off an automation"
};
