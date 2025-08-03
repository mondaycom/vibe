import React from "react";
import Tooltip, { type TooltipProps } from "../Tooltip";
import { Hide, Menu, Subitems } from "@vibe/icons";
import Button from "../../Button/Button";
import Flex from "../../Flex/Flex";
import IconButton from "../../IconButton/IconButton";
import { modifiers } from "./Tooltip.stories.helpers";
import image from "./assets/tooltip-image.png";
import { createStoryMetaSettingsDecorator } from "../../../storybook";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Tooltip,
  iconPropNamesArray: ["icon"]
});

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: (args: TooltipProps) => (
    <div style={{ padding: "40px 0 0 50px" }}>
      <Tooltip
        {...args}
        open
        // The modifier's purpose is to prevent the tooltip from being displayed when the user scrolls the story upwards / downwards.
        // Therefore, there is no need to move this prop in your implementations.
        modifiers={[
          {
            name: "preventOverflow",
            options: {
              mainAxis: false
            }
          },
          {
            name: "flip",
            options: {
              // @ts-ignore
              fallbackPlacements: []
            }
          }
        ]}
      >
        <div />
      </Tooltip>
    </div>
  ),
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
  <div style={{ padding: "30px 0" }}>
    <Tooltip
      content="Hidden columns"
      title="Tooltip title"
      shouldShowOnMount
      position="right"
      // The modifier's purpose is to prevent the tooltip from being displayed when the user scrolls the story upwards / downwards.
      // Therefore, there is no need to move this prop in your implementations.
      modifiers={[
        {
          name: "preventOverflow",
          options: {
            mainAxis: false
          }
        },
        {
          name: "flip",
          options: {
            // @ts-ignore
            fallbackPlacements: []
          }
        }
      ]}
      open
    >
      <div />
    </Tooltip>
  </div>
);

export const TooltipWithImage = () => (
  <div style={{ padding: "120px 0" }}>
    <Tooltip
      content="Max width tooltip with a long text example"
      title="Tooltip title"
      shouldShowOnMount
      image={image}
      position="right"
      modifiers={modifiers}
      style={{ minHeight: "135px" }}
      open
    >
      <div />
    </Tooltip>
  </div>
);

export const Positions = {
  render: () => {
    // The modifier's purpose is to prevent the tooltip from being displayed when the user scrolls the story upwards / downwards.
    // Therefore, there is no need to move this prop in your implementations.
    const modifiers = [
      {
        name: "preventOverflow",
        options: {
          mainAxis: false
        }
      },
      {
        name: "flip",
        options: {
          // @ts-ignore
          fallbackPlacements: []
        }
      }
    ];

    return (
      <Flex gap={16}>
        <div style={{ padding: "0 64px 68px 0", margin: "0 32px" }}>
          {/* The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
         Therefore, there is no need to move this prop in your implementations. */}
          <Tooltip modifiers={modifiers} content="Top" shouldShowOnMount position="bottom" open>
            <div />
          </Tooltip>
        </div>
        <div style={{ padding: "50px 0 0 0", margin: "0 32px" }}>
          <Tooltip modifiers={modifiers} content="Bottom" shouldShowOnMount open>
            <div />
          </Tooltip>
        </div>
        <div style={{ padding: "0 32px 8px 32px", margin: "0 32px" }}>
          <Tooltip modifiers={modifiers} content="Left" position="right" shouldShowOnMount open>
            <div />
          </Tooltip>
        </div>
        <div style={{ padding: "0 64px 8px 64px", margin: "0 64px" }}>
          <Tooltip modifiers={modifiers} content="Right" position="left" shouldShowOnMount open>
            <div />
          </Tooltip>
        </div>
      </Flex>
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
  <Tooltip content="Hidden columns">
    <IconButton kind="secondary" size="small" icon={Hide} />
  </Tooltip>
);

export const DefinitionTooltip = () => (
  <Tooltip content="Item name: Bottom sheets">
    <Button kind="secondary" size="small" leftIcon={Subitems}>
      Subitem
    </Button>
  </Tooltip>
);

export const ImmediateTooltips = () => (
  <Flex gap="small">
    <Tooltip immediateShowDelay={0} content="I'm a tooltip">
      <IconButton icon={Menu} kind="secondary" size="small" />
    </Tooltip>
    <Tooltip immediateShowDelay={0} content="I'm a tooltip">
      <IconButton icon={Menu} kind="secondary" size="small" />
    </Tooltip>
    <Tooltip content="I'm a tooltip">
      <IconButton icon={Menu} kind="secondary" size="small" />
    </Tooltip>
  </Flex>
);
