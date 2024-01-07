import Tooltip from "../Tooltip";
import { capitalize } from "lodash-es";
import { Hide, Info, Bolt, Subitems } from "../../Icon/Icons";
import ListItem from "../../ListItem/ListItem";
import ListItemIcon from "../../ListItemIcon/ListItemIcon";
import IconButton from "../../IconButton/IconButton";
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
    content: "I'm a tooltip"
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
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const Themes = () =>
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
  ));

export const IconTooltip = () => (
  <div className="monday-storybook-tooltip_box">
    <Tooltip content="Hidden columns" maxWidth>
      <IconButton icon={Hide} kind={IconButton.kinds.SECONDARY} />
    </Tooltip>
  </div>
);

export const DefinitionTooltip = () => (
  <div className="monday-storybook-tooltip_box">
    <Tooltip content="Item name: Bottom sheets" maxWidth>
      <ListItem>
        <ListItemIcon icon={Subitems} />
        <span>Subitem</span>
      </ListItem>
    </Tooltip>
  </div>
);

export const ImmediateTooltips = () => (
  <div className="monday-storybook-tooltip_box">
    <Tooltip immediateShowDelay={0} content="I'm a tooltip" maxWidth>
      <IconButton icon={Bolt} kind={IconButton.kinds.SECONDARY} />
    </Tooltip>
    <Tooltip immediateShowDelay={0} content="I'm a tooltip" maxWidth>
      <IconButton icon={Bolt} kind={IconButton.kinds.SECONDARY} />
    </Tooltip>
    <Tooltip content="I'm a tooltip" maxWidth>
      <IconButton icon={Info} kind={IconButton.kinds.SECONDARY} />
    </Tooltip>
  </div>
);
