import React from "react";
import { createComponentTemplate, VerticalStories } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Slider from "../Slider";
import Chips from "../../Chips/Chips";
import { Sound, Video } from "../../Icon/Icons";
import "./Slider.stories.scss";

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
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Sizes = {
  render: () => (
    <>
      <Slider size={Slider.sizes.SMALL} defaultValue={12} />
      <Slider size={Slider.sizes.MEDIUM} defaultValue={24} />
      <Slider size={Slider.sizes.LARGE} defaultValue={35} />
    </>
  )
};

export const Ranged = {
  render: () => (
    <>
      <Slider data-testid={"monday-ranged-slider-s"} size={Slider.sizes.SMALL} ranged={true} />
      <Slider data-testid={"monday-ranged-slider-m"} size={Slider.sizes.MEDIUM} ranged={true} defaultValue={[12, 55]} />
      <Slider size={Slider.sizes.LARGE} ranged={true} defaultValue={[25, 32]} />
    </>
  )

  // TODO storybook 7 migration: interactive test isn't working correctly
  // play: rangedSliderMouseEventsPlaySuite
};

export const Colors = {
  render: () => (
    <>
      <Slider color={Slider.colors.POSITIVE} defaultValue={34} size={Slider.sizes.MEDIUM} />
      <Slider color={Slider.colors.NEGATIVE} ranged={true} defaultValue={[12, 55]} size={Slider.sizes.MEDIUM} />
      <Slider color={Slider.colors.PRIMARY} defaultValue={12} size={Slider.sizes.MEDIUM} />
    </>
  )
};

export const Disabled = {
  render: () => (
    <>
      <Slider disabled={true} defaultValue={24} color={Slider.colors.POSITIVE} size={Slider.sizes.MEDIUM} />
      <Slider disabled={true} color={Slider.colors.NEGATIVE} size={Slider.sizes.MEDIUM} />
      <Slider
        disabled={true}
        ranged={true}
        defaultValue={[12, 55]}
        color={Slider.colors.PRIMARY}
        size={Slider.sizes.MEDIUM}
      />
    </>
  )
};

export const WithLabels = {
  render: () => (
    <>
      <Slider indicateSelection={true} defaultValue={12} size={Slider.sizes.SMALL} />
      <Slider indicateSelection={true} ranged={true} defaultValue={[12, 55]} size={Slider.sizes.SMALL} />
      <Slider
        // @ts-ignore
        prefix={{ icon: Sound }}
        indicateSelection={true}
        defaultValue={70}
        size={Slider.sizes.SMALL}
      />
      <Slider
        // @ts-ignore
        prefix={{ icon: Video }}
        // @ts-ignore
        postfix={{ icon: Sound }}
        defaultValue={45}
        size={Slider.sizes.MEDIUM}
      />
      <Slider prefix="Vol" indicateSelection={true} defaultValue={0} size={Slider.sizes.LARGE} />
    </>
  ),
  decorators: [VerticalStories],
  parameters: {
    docs: {
      liveEdit: {
        scope: { Sound, Video }
      }
    }
  }
};

export const ShowValue = {
  render: () => (
    <>
      <Slider data-testid={"monday-slider-show-value-s"} showValue={true} defaultValue={12} size={Slider.sizes.SMALL} />
      <Slider
        data-testid={"monday-slider-show-value-m"}
        showValue={true}
        defaultValue={55}
        size={Slider.sizes.MEDIUM}
      />
      <Slider data-testid={"monday-slider-show-value-l"} showValue={true} defaultValue={89} size={Slider.sizes.LARGE} />
    </>
  )

  // TODO storybook 7 migration: interactive test isn't working correctly
  // play: nonRangedSliderMouseEventsPlaySuite
};

export const LimitsSteps = {
  render: () => (
    <>
      <Slider prefix="Step 10" step={10} indicateSelection={true} defaultValue={10} size={Slider.sizes.SMALL} />
      <Slider
        prefix="Step 2, Max: 20"
        max={20}
        step={2}
        indicateSelection={true}
        defaultValue={4}
        size={Slider.sizes.MEDIUM}
      />
      <Slider
        prefix="from 20%"
        postfix="till 80%"
        min={20}
        max={80}
        showValue={true}
        defaultValue={62}
        size={Slider.sizes.LARGE}
      />
      <Slider ranged={true} indicateSelection={true} min={100} max={200} step={10} size={Slider.sizes.LARGE} />
    </>
  ),

  name: "Limits, Steps",
  decorators: [VerticalStories]
};

export const Customisation = {
  render: () => (
    <>
      <Slider
        id="my-app-slider"
        data-testid={"my-app-slider"}
        className="my-custom-class"
        defaultValue={19}
        prefix="Check Dev-Tools for Custom Classes"
        size={Slider.sizes.MEDIUM}
      />
      <Slider
        id="custom-value-formatter"
        className="my-custom-formatter"
        defaultValue={3}
        min={1}
        max={10}
        indicateSelection={true}
        valueFormatter={value => `${value}GB`}
        prefix="Custom value formatter"
        size={Slider.sizes.MEDIUM}
      />
      <Slider
        id="custom-value-formatter"
        className="my-long-formatter"
        defaultValue={3}
        min={1}
        max={10}
        indicateSelection={true}
        selectionIndicatorWidth="120px"
        valueFormatter={value => `${value} meter/hour`}
        prefix="Long value formatter"
        size={Slider.sizes.MEDIUM}
      />
      <Slider
        id="custom-prefix"
        className="my-slider-wide"
        defaultValue={50}
        prefix={<Chips label="Custom component" readOnly />}
        postfix={(value, valueText) => {
          // set css: .my-slider-wide { max-width: none }
          return <span style={{ whiteSpace: "nowrap" }}>{`RenderProps: ${valueText} (${value}) `}</span>;
        }}
        size={Slider.sizes.MEDIUM}
      />
    </>
  ),
  decorators: [VerticalStories]
};
