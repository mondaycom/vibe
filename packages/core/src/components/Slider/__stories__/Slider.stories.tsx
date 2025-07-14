import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Slider from "../Slider";
import Chips from "../../Chips/Chips";
import { Sound, Video } from "@vibe/icons";
import Flex from "../../Flex/Flex";

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
      <Slider size="small" defaultValue={12} />
      <Slider size="medium" defaultValue={24} />
      <Slider size="large" defaultValue={35} />
    </Flex>
  )
};

export const Ranged = {
  render: () => (
    <Flex gap="medium" flex="1">
      <Slider data-testid={"monday-ranged-slider-s"} size="small" ranged={true} />
      <Slider data-testid={"monday-ranged-slider-m"} size="medium" ranged={true} defaultValue={[12, 55]} />
      <Slider size="large" ranged={true} defaultValue={[25, 32]} />
    </Flex>
  )

  // TODO storybook 7 migration: interactive test isn't working correctly
  // play: rangedSliderMouseEventsPlaySuite
};

export const Colors = {
  render: () => (
    <Flex gap="medium" flex="1">
      <Slider color="positive" defaultValue={34} size="medium" />
      <Slider color="negative" ranged={true} defaultValue={[12, 55]} size="medium" />
      <Slider color="primary" defaultValue={12} size="medium" />
    </Flex>
  )
};

export const Disabled = {
  render: () => (
    <Flex gap="medium" flex="1">
      <Slider disabled={true} defaultValue={24} color="positive" size="medium" />
      <Slider disabled={true} color="negative" size="medium" />
      <Slider disabled={true} ranged={true} defaultValue={[12, 55]} color="primary" size="medium" />
    </Flex>
  )
};

export const WithLabels = {
  render: () => (
    <Flex direction="column" gap="large" style={{ width: "500px" }}>
      <Slider indicateSelection={true} defaultValue={12} size="small" />
      <Slider indicateSelection={true} ranged={true} defaultValue={[12, 55]} size="small" />
      <Slider
        // @ts-ignore
        prefix={{ icon: Sound }}
        indicateSelection={true}
        defaultValue={70}
        size="small"
      />
      <Slider
        // @ts-ignore
        prefix={{ icon: Video }}
        // @ts-ignore
        postfix={{ icon: Sound }}
        defaultValue={45}
        size="medium"
      />
      <Slider prefix="Vol" indicateSelection={true} defaultValue={0} size="large" />
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
      <Slider data-testid={"monday-slider-show-value-s"} showValue={true} defaultValue={12} size="small" />
      <Slider data-testid={"monday-slider-show-value-m"} showValue={true} defaultValue={55} size="medium" />
      <Slider data-testid={"monday-slider-show-value-l"} showValue={true} defaultValue={89} size="large" />
    </Flex>
  )

  // TODO storybook 7 migration: interactive test isn't working correctly
  // play: nonRangedSliderMouseEventsPlaySuite
};

export const LimitsSteps = {
  render: () => (
    <Flex direction="column" gap="large" style={{ width: "500px" }}>
      <Slider prefix="Step 10" step={10} indicateSelection={true} defaultValue={10} size="small" />
      <Slider prefix="Step 2, Max: 20" max={20} step={2} indicateSelection={true} defaultValue={4} size="medium" />
      <Slider prefix="from 20%" postfix="till 80%" min={20} max={80} showValue={true} defaultValue={62} size="large" />
      <Slider ranged={true} indicateSelection={true} min={100} max={200} step={10} size="large" />
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
        valueFormatter={value => `${value}GB`}
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
        valueFormatter={value => `${value} meter/hour`}
        prefix="Long value formatter"
        size="medium"
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
        size="medium"
      />
    </Flex>
  )
};
