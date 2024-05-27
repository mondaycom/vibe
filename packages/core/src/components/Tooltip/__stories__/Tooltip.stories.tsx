import React from "react";
import Tooltip, { TooltipProps } from "../Tooltip";
import { Hide, Menu, Subitems } from "../../Icon/Icons";
import Button from "../../Button/Button";
import Flex from "../../Flex/Flex";
import IconButton from "../../IconButton/IconButton";
import { modifiers } from "./Tooltip.stories.helpers";
import "./Tooltip.stories.scss";
import image from "./assets/tooltip-image.png";
import { createStoryMetaSettingsDecorator } from "../../../storybook";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Tooltip,
  iconPropNamesArray: ["icon"]
});

export default {
  title: "Popover/Tooltip",
  component: Tooltip,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const tooltipTemplate = (args: TooltipProps) => {
  return (
    <div className="monday-storybook-tooltip_overview">
      <Tooltip
        // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
        // Therefore, there is no need to move this prop in your implementations.
        modifiers={modifiers}
        withMaxWidth
        {...args}
      >
        <div />
      </Tooltip>
    </div>
  );
};

export const Overview = {
  render: tooltipTemplate.bind({}),
  name: "Overview",
  args: {
    shouldShowOnMount: true,
    content: "I'm a tooltip"
  },
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const TooltipWithTitle = () => (
  <div className="monday-storybook-tooltip_title">
    <Tooltip
      content="Hidden columns"
      title="Tooltip title"
      withMaxWidth
      shouldShowOnMount
      position={Tooltip.positions.RIGHT}
      modifiers={modifiers}
    >
      <div />
    </Tooltip>
  </div>
);

export const TooltipWithImage = () => (
  <div className="monday-storybook-tooltip_image">
    <Tooltip
      content="Max width tooltip with a long text example"
      title="Tooltip title"
      withMaxWidth
      shouldShowOnMount
      image={image}
      position={Tooltip.positions.RIGHT}
      modifiers={modifiers}
      className="monday-storybook-tooltip_image__tooltip"
    >
      <div />
    </Tooltip>
  </div>
);

export const Positions = {
  render: () => {
    return (
      <div className="monday-storybook-tooltip_positions">
        <div>
          {/* The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
         Therefore, there is no need to move this prop in your implementations. */}
          <Tooltip
            modifiers={modifiers}
            content="Top"
            shouldShowOnMount
            position={Tooltip.positions.BOTTOM}
            withMaxWidth
          >
            <div />
          </Tooltip>
        </div>
        <div>
          <Tooltip modifiers={modifiers} content="Bottom" shouldShowOnMount withMaxWidth>
            <div />
          </Tooltip>
        </div>
        <div>
          <Tooltip
            modifiers={modifiers}
            content="Left"
            position={Tooltip.positions.RIGHT}
            shouldShowOnMount
            withMaxWidth
          >
            <div />
          </Tooltip>
        </div>
        <div>
          <Tooltip
            modifiers={modifiers}
            content="Right"
            position={Tooltip.positions.LEFT}
            shouldShowOnMount
            withMaxWidth
          >
            <div />
          </Tooltip>
        </div>
      </div>
    );
  },
  name: "Positions",
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const IconTooltip = () => (
  <Tooltip content="Hidden columns" withMaxWidth>
    <IconButton kind={IconButton.kinds.SECONDARY} size={IconButton.sizes.SMALL} icon={Hide} />
  </Tooltip>
);

export const DefinitionTooltip = () => (
  <Tooltip content="Item name: Bottom sheets" withMaxWidth>
    <Button kind={Button.kinds.SECONDARY} size={Button.sizes.SMALL} leftIcon={Subitems}>
      Subitem
    </Button>
  </Tooltip>
);

export const ImmediateTooltips = () => (
  <Flex gap={Flex.gaps.SMALL}>
    <Tooltip immediateShowDelay={0} content="I'm a tooltip" withMaxWidth>
      <IconButton icon={Menu} kind={IconButton.kinds.SECONDARY} size={IconButton.sizes.SMALL} />
    </Tooltip>
    <Tooltip immediateShowDelay={0} content="I'm a tooltip" withMaxWidth>
      <IconButton icon={Menu} kind={IconButton.kinds.SECONDARY} size={IconButton.sizes.SMALL} />
    </Tooltip>
    <Tooltip content="I'm a tooltip" withMaxWidth>
      <IconButton icon={Menu} kind={IconButton.kinds.SECONDARY} size={IconButton.sizes.SMALL} />
    </Tooltip>
  </Flex>
);
