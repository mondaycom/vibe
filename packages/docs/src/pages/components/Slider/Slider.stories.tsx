import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { Slider, Chips, Flex } from "@vibe/core";
import { Sound, Video } from "@vibe/icons";
// import { rangedSliderMouseEventsPlaySuite, nonRangedSliderMouseEventsPlaySuite } from "./Slider.interactions";

const argTypes = createStoryMetaSettingsDecorator({
  component: Slider
});

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: argTypes
};

const sliderTemplate = createComponentTemplate(Slider);

export const Overview = {
  render: sliderTemplate.bind({}),
  args: {
    id: "overview-slider",
    ariaLabel: "Overview slider"
  },
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
    <Flex gap="medium" flex="1">
      <Slider id="sizes-small" ariaLabel="Small slider" size="small" defaultValue={12} />
      <Slider id="sizes-medium" ariaLabel="Medium slider" size="medium" defaultValue={24} />
      <Slider id="sizes-large" ariaLabel="Large slider" size="large" defaultValue={35} />
    </Flex>
  )
};

export const Ranged = {
  render: () => (
    <Flex gap="medium" flex="1">
      <Slider
        id="ranged-small"
        ariaLabel="Small ranged slider"
        data-testid={"monday-ranged-slider-s"}
        size="small"
        ranged={true}
      />
      <Slider
        id="ranged-medium"
        ariaLabel="Medium ranged slider"
        data-testid={"monday-ranged-slider-m"}
        size="medium"
        ranged={true}
        defaultValue={[12, 55]}
      />
      <Slider id="ranged-large" ariaLabel="Large ranged slider" size="large" ranged={true} defaultValue={[25, 32]} />
    </Flex>
  )

  // TODO storybook 7 migration: interactive test isn't working correctly
  // play: rangedSliderMouseEventsPlaySuite
};

export const Colors = {
  render: () => (
    <Flex gap="medium" flex="1">
      <Slider id="color-positive" ariaLabel="Positive color slider" color="positive" defaultValue={34} size="medium" />
      <Slider
        id="color-negative"
        ariaLabel="Negative color ranged slider"
        color="negative"
        ranged={true}
        defaultValue={[12, 55]}
        size="medium"
      />
      <Slider id="color-primary" ariaLabel="Primary color slider" color="primary" defaultValue={12} size="medium" />
    </Flex>
  )
};

export const Disabled = {
  render: () => (
    <Flex gap="medium" flex="1">
      <Slider
        id="disabled-positive"
        ariaLabel="Disabled positive slider"
        disabled={true}
        defaultValue={24}
        color="positive"
        size="medium"
      />
      <Slider
        id="disabled-negative"
        ariaLabel="Disabled negative slider"
        disabled={true}
        color="negative"
        size="medium"
      />
      <Slider
        id="disabled-ranged"
        ariaLabel="Disabled ranged primary slider"
        disabled={true}
        ranged={true}
        defaultValue={[12, 55]}
        color="primary"
        size="medium"
      />
    </Flex>
  )
};

export const WithLabels = {
  render: () => (
    <Flex direction="column" gap="large" style={{ width: "500px" }}>
      <Slider
        id="labeled-simple"
        ariaLabel="Simple labeled slider"
        indicateSelection={true}
        defaultValue={12}
        size="small"
      />
      <Slider
        id="labeled-ranged"
        ariaLabel="Labeled ranged slider"
        indicateSelection={true}
        ranged={true}
        defaultValue={[12, 55]}
        size="small"
      />
      <Slider
        id="labeled-sound"
        ariaLabel="Sound slider with icon"
        // @ts-ignore
        prefix={{ icon: Sound }}
        indicateSelection={true}
        defaultValue={70}
        size="small"
      />
      <Slider
        id="labeled-video"
        ariaLabel="Video slider with icons"
        // @ts-ignore
        prefix={{ icon: Video }}
        // @ts-ignore
        postfix={{ icon: Sound }}
        defaultValue={45}
        size="medium"
      />
      <Slider
        id="labeled-volume"
        ariaLabel="Volume slider"
        prefix="Vol"
        indicateSelection={true}
        defaultValue={0}
        size="large"
      />
    </Flex>
  ),
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
    <Flex gap="medium" flex="1">
      <Slider
        id="show-value-small"
        ariaLabel="Small slider showing value"
        data-testid={"monday-slider-show-value-s"}
        showValue={true}
        defaultValue={12}
        size="small"
      />
      <Slider
        id="show-value-medium"
        ariaLabel="Medium slider showing value"
        data-testid={"monday-slider-show-value-m"}
        showValue={true}
        defaultValue={55}
        size="medium"
      />
      <Slider
        id="show-value-large"
        ariaLabel="Large slider showing value"
        data-testid={"monday-slider-show-value-l"}
        showValue={true}
        defaultValue={89}
        size="large"
      />
    </Flex>
  )

  // TODO storybook 7 migration: interactive test isn't working correctly
  // play: nonRangedSliderMouseEventsPlaySuite
};

export const LimitsSteps = {
  render: () => (
    <Flex direction="column" gap="large" style={{ width: "500px" }}>
      <Slider
        id="step-10"
        ariaLabel="Slider with step 10"
        prefix="Step 10"
        step={10}
        indicateSelection={true}
        defaultValue={10}
        size="small"
      />
      <Slider
        id="step-2-max-20"
        ariaLabel="Slider with step 2 max 20"
        prefix="Step 2, Max: 20"
        max={20}
        step={2}
        indicateSelection={true}
        defaultValue={4}
        size="medium"
      />
      <Slider
        id="percentage-range"
        ariaLabel="Percentage range slider from 20% to 80%"
        prefix="from 20%"
        postfix="till 80%"
        min={20}
        max={80}
        showValue={true}
        defaultValue={62}
        size="large"
      />
      <Slider
        id="ranged-100-200"
        ariaLabel="Ranged slider from 100 to 200"
        ranged={true}
        indicateSelection={true}
        min={100}
        max={200}
        step={10}
        size="large"
      />
    </Flex>
  ),

  name: "Limits, Steps"
};

export const Customisation = {
  render: () => (
    <Flex direction="column" gap="large" style={{ width: "500px" }}>
      <Slider
        id="my-app-slider"
        data-testid={"my-app-slider"}
        className="my-custom-class"
        defaultValue={19}
        prefix="Check Dev-Tools for Custom Classes"
        size="medium"
      />
      <Slider
        id="custom-value-formatter"
        className="my-custom-formatter"
        defaultValue={3}
        min={1}
        max={10}
        indicateSelection={true}
        valueFormatter={(value: number) => `${value}GB`}
        prefix="Custom value formatter"
        size="medium"
      />
      <Slider
        id="custom-value-formatter"
        className="my-long-formatter"
        defaultValue={3}
        min={1}
        max={10}
        indicateSelection={true}
        selectionIndicatorWidth="120px"
        valueFormatter={(value: number) => `${value} meter/hour`}
        prefix="Long value formatter"
        size="medium"
      />
      <Slider
        id="custom-prefix"
        className="my-slider-wide"
        defaultValue={50}
        prefix={<Chips label="Custom component" readOnly />}
        postfix={(value: number, valueText: string) => {
          // set css: .my-slider-wide { max-width: none }
          return <span style={{ whiteSpace: "nowrap" }}>{`RenderProps: ${valueText} (${value}) `}</span>;
        }}
        size="medium"
      />
    </Flex>
  )
};
