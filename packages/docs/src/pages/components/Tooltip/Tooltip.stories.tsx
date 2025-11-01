import React from "react";
import { Tooltip, type TooltipProps, Button, Flex, IconButton } from "@vibe/core";
import { Hide, Menu, Subitems } from "@vibe/icons";
import { modifiers } from "./Tooltip.stories.helpers";
import image from "./assets/tooltip-image.png";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";

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
        id="overview-tooltip"
        {...args}
        open
        hideWhenReferenceHidden
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
        <div id="overview-tooltip-trigger" />
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
      id="tooltip-with-title"
      content="Hidden columns"
      title="Tooltip title"
      shouldShowOnMount
      position="right"
      hideWhenReferenceHidden
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
      <div id="tooltip-with-title-trigger" />
    </Tooltip>
  </div>
);

export const TooltipWithImage = () => (
  <div style={{ padding: "120px 0" }}>
    <Tooltip
      id="tooltip-with-image"
      content="Max width tooltip with a long text example"
      title="Tooltip title"
      shouldShowOnMount
      image={image}
      position="right"
      hideWhenReferenceHidden
      modifiers={modifiers}
      style={{ minHeight: "135px" }}
      open
    >
      <div id="tooltip-with-image-trigger" />
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
          <Tooltip
            id="position-top-tooltip"
            hideWhenReferenceHidden
            modifiers={modifiers}
            content="Top"
            shouldShowOnMount
            position="bottom"
            open
          >
            <div />
          </Tooltip>
        </div>
        <div style={{ padding: "50px 0 0 0", margin: "0 32px" }}>
          <Tooltip
            id="position-bottom-tooltip"
            hideWhenReferenceHidden
            modifiers={modifiers}
            content="Bottom"
            shouldShowOnMount
            open
          >
            <div />
          </Tooltip>
        </div>
        <div style={{ padding: "0 32px 8px 32px", margin: "0 32px" }}>
          <Tooltip
            id="position-left-tooltip"
            hideWhenReferenceHidden
            modifiers={modifiers}
            content="Left"
            position="right"
            shouldShowOnMount
            open
          >
            <div />
          </Tooltip>
        </div>
        <div style={{ padding: "0 64px 8px 64px", margin: "0 64px" }}>
          <Tooltip
            id="position-right-tooltip"
            hideWhenReferenceHidden
            modifiers={modifiers}
            content="Right"
            position="left"
            shouldShowOnMount
            open
          >
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
  <Tooltip id="icon-tooltip" hideWhenReferenceHidden content="Hidden columns">
    <IconButton id="icon-tooltip-trigger" ariaLabel="Hide columns" kind="secondary" size="small" icon={Hide} />
  </Tooltip>
);

export const DefinitionTooltip = () => (
  <Tooltip id="definition-tooltip" hideWhenReferenceHidden content="Item name: Bottom sheets">
    <Button id="definition-tooltip-trigger" ariaLabel="View subitems" kind="secondary" size="small" leftIcon={Subitems}>
      Subitem
    </Button>
  </Tooltip>
);

export const ImmediateTooltips = () => (
  <Flex gap="small">
    <Tooltip id="immediate-tooltip-1" hideWhenReferenceHidden immediateShowDelay={0} content="I'm a tooltip">
      <IconButton id="immediate-trigger-1" ariaLabel="Menu button 1" icon={Menu} kind="secondary" size="small" />
    </Tooltip>
    <Tooltip id="immediate-tooltip-2" hideWhenReferenceHidden immediateShowDelay={0} content="I'm a tooltip">
      <IconButton id="immediate-trigger-2" ariaLabel="Menu button 2" icon={Menu} kind="secondary" size="small" />
    </Tooltip>
    <Tooltip id="immediate-tooltip-3" hideWhenReferenceHidden content="I'm a tooltip">
      <IconButton id="immediate-trigger-3" ariaLabel="Menu button 3" icon={Menu} kind="secondary" size="small" />
    </Tooltip>
  </Flex>
);
