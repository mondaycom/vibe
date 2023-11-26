import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate, VerticalStories } from "vibe-storybook-components";
import "./Slider.stories.scss";
import Slider from "../Slider";

const argTypes = createStoryMetaSettingsDecorator({
  component: Slider,
  enumPropNamesArray: ["color", "size"]
});

export default {
  title: "Inputs/Slider",
  component: Slider,
  argTypes: argTypes
};

const sliderTemplate = createComponentTemplate(Slider);

export const Overview = {
  render: sliderTemplate.bind({}),
  name: "Overview",
  args: {}
};

export const Sizes = {
  render: () => <Slider size={Slider.sizes.SMALL} defaultValue={12} />,
  name: "Sizes"
};

export const Ranged = {
  render: () => <Slider data-testid={"monday-ranged-slider-s"} size={Slider.sizes.SMALL} ranged={true} />,

  name: "Ranged"
  // TODO storybook 7 migration - slider interaction tests are broken
  // play: rangedSliderMouseEventsPlaySuite
};

export const Colors = {
  render: () => <Slider color={Slider.colors.POSITIVE} defaultValue={34} size={Slider.sizes.MEDIUM} />,

  name: "Colors"
};

export const Disabled = {
  render: () => <Slider disabled={true} defaultValue={24} color={Slider.colors.POSITIVE} size={Slider.sizes.MEDIUM} />,

  name: "Disabled"
};

export const WithLabels = {
  render: () => <Slider indicateSelection={true} defaultValue={12} size={Slider.sizes.SMALL} />,
  name: "WithLabels",
  decorators: [VerticalStories]
};

export const ShowValue = {
  render: () => (
    <Slider data-testid={"monday-slider-show-value-s"} showValue={true} defaultValue={12} size={Slider.sizes.SMALL} />
  ),

  name: "ShowValue"
  // play: nonRangedSliderMouseEventsPlaySuite
};

export const LimitsSteps = {
  render: () => (
    <Slider prefix="Step 10" step={10} indicateSelection={true} defaultValue={10} size={Slider.sizes.SMALL} />
  ),

  name: "Limits, Steps",
  decorators: [VerticalStories]
};

export const Customisation = {
  render: () => (
    <Slider
      id="my-app-slider"
      data-testid={"my-app-slider"}
      className="my-custom-class"
      defaultValue={19}
      prefix="Check Dev-Tools for Custom Classes"
      size={Slider.sizes.MEDIUM}
    />
  ),

  name: "Customisation",
  decorators: [VerticalStories]
};
