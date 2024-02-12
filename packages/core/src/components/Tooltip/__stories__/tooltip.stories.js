import Tooltip from "../Tooltip";
import { capitalize } from "lodash-es";
import TooltipReference from "./TooltipReference";
import { Hide, Subitems } from "../../Icon/Icons";
import Icon from "../../Icon/Icon";
import { modifiers } from "./tooltip.stories.helpers";
import { TooltipTheme } from "../TooltipConstants";
import "./tooltip.stories.scss";

export default {
  title: "Popover/Tooltip",
  component: Tooltip
};

const tooltipTemplate = args => {
  return (
    <div className="monday-storybook-tooltip_overview">
      <Tooltip
        // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
        // Therefore, there is no need to move this prop in your implementations.
        modifiers={modifiers}
        maxWidth
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
    content: "I’m a tooltip"
  },

  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const Positions = {
  // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
  render:
    // Therefore, there is no need to move this prop in your implementations.
    () => {
      return (
        <>
          <div className="monday-storybook-tooltip_top">
            <Tooltip
              modifiers={modifiers}
              content="Top"
              shouldShowOnMount
              position={Tooltip.positions.BOTTOM}
              animationType="expand"
              maxWidth
            >
              <div />
            </Tooltip>
          </div>
          <div className="monday-storybook-tooltip_bottom">
            <Tooltip modifiers={modifiers} content="Bottom" shouldShowOnMount animationType="expand" maxWidth>
              <div />
            </Tooltip>
          </div>
          <div className="monday-storybook-tooltip_right">
            <Tooltip
              modifiers={modifiers}
              content="Left"
              position={Tooltip.positions.RIGHT}
              shouldShowOnMount
              animationType="expand"
              maxWidth
            >
              <div />
            </Tooltip>
          </div>
          <div className="monday-storybook-tooltip_left">
            <Tooltip
              modifiers={modifiers}
              content="Right"
              position={Tooltip.positions.LEFT}
              shouldShowOnMount
              animationType="expand"
              maxWidth
            >
              <div />
            </Tooltip>
          </div>
        </>
      );
    },

  name: "Positions",

  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const Themes = {
  render: () =>
    Object.values(TooltipTheme).map(theme => (
      <div className="monday-storybook-tooltip_top" key={theme}>
        <Tooltip
          modifiers={modifiers}
          content={capitalize(theme)}
          shouldShowOnMount
          position={Tooltip.positions.BOTTOM}
          animationType="expand"
          theme={theme}
          maxWidth
        >
          <div />
        </Tooltip>
      </div>
    )),

  name: "Themes"
};

export const IconTooltip = {
  render: () => (
    <div className="monday-storybook-tooltip_box">
      <Tooltip content="Hidden columns" maxWidth>
        <div className="monday-storybook-tooltip_icon-wrapper">
          <Icon icon={Hide} />
        </div>
      </Tooltip>
    </div>
  ),

  name: "Icon tooltip"
};

export const DefinitionTooltip = {
  render: () => (
    <div className="monday-storybook-tooltip_box">
      <Tooltip content="Item name: Bottom sheets" maxWidth>
        <div className="monday-storybook-tooltip_icon-wrapper">
          <Icon icon={Subitems} />
          <span>Subitem</span>
        </div>
      </Tooltip>
    </div>
  ),

  name: "Definition tooltip"
};

export const ImmediateTooltips = {
  render: () => (
    <div className="monday-storybook-tooltip_box">
      <Tooltip immediateShowDelay={0} content="I'm a tooltip" maxWidth>
        <TooltipReference />
      </Tooltip>
      <Tooltip immediateShowDelay={0} content="I'm a tooltip" maxWidth>
        <TooltipReference />
      </Tooltip>
      <Tooltip content="I'm a tooltip" maxWidth>
        <TooltipReference />
      </Tooltip>
    </div>
  ),

  name: "Immediate tooltips"
};
