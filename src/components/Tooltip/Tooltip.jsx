/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import classnames from "classnames";
import isFunction from "lodash/isFunction";
import Dialog from "../Dialog/Dialog";
import "./Tooltip.scss";
import { DialogPositions } from "../../constants/sizes";
import { DIALOG_ANIMATION_TYPES } from "../../constants/AnimationTypes";
import { TOOLTIP_JUSTIFY_TYPES, TOOLTIP_THEMES } from "./TooltipConstants";

// When last tooltip was shown in the last 1.5 second - the next tooltip will be shown immediately
const IMMEDIATE_SHOW_THRESHOLD_MS = 1500;

// Shared state accross multiple tooltip instances (i.e last tooltip shown time)
const globalState = {
  lastTooltipHideTS: null,
  openTooltipsCount: 0
};

export default class Tooltip extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderTooltipContent = this.renderTooltipContent.bind(this);
    this.getShowDelay = this.getShowDelay.bind(this);
    this.onTooltipShow = this.onTooltipShow.bind(this);
    this.onTooltipHide = this.onTooltipHide.bind(this);

    this.wasShown = false;
  }

  getContainer() {
    return document.getElementById("tooltips-container") || document.querySelector("body");
  }

  renderTooltipContent() {
    const { theme, content, paddingSize, className, style } = this.props;
    if (!content) {
      // don't render empty tooltip
      return null;
    }
    let contentValue;
    if (isFunction(content)) {
      contentValue = content();
    } else if (React.isValidElement(content)) {
      contentValue = content;
    } else if (typeof content === "string" && content) {
      contentValue = content;
    }

    if (!contentValue) {
      return null;
    }
    return (
      <div
        style={style}
        className={classnames(
          `monday-style-tooltip monday-style-tooltip-${theme} padding-size-${paddingSize}`,
          className
        )}
      >
        {contentValue}
      </div>
    );
  }

  onTooltipShow() {
    if (!this.wasShown) {
      globalState.openTooltipsCount++;
      this.wasShown = true;
    }
  }

  onTooltipHide() {
    if (this.wasShown) {
      globalState.lastTooltipHideTS = Date.now();
      globalState.openTooltipsCount--;
      this.wasShown = false;
    }
  }

  getTimeSinceLastTooltip() {
    if (globalState.openTooltipsCount > 0) {
      return 0;
    }
    return globalState.lastTooltipHideTS ? Date.now() - globalState.lastTooltipHideTS : Infinity;
  }

  getShowDelay() {
    const { showDelay, immediateShowDelay } = this.props;
    const timeSinceLastTooltip = this.getTimeSinceLastTooltip();
    if ((immediateShowDelay === 0 || immediateShowDelay) && timeSinceLastTooltip < IMMEDIATE_SHOW_THRESHOLD_MS) {
      // showing the tooltip immediately (without animation)
      return {
        showDelay: immediateShowDelay,
        preventAnimation: true
      };
    }
    return {
      showDelay,
      preventAnimation: false
    };
  }

  render() {
    const { withoutDialog, moveBy, justify, children, getContainer, theme, paddingSize, tip } = this.props;

    if (!children) {
      return null;
    }

    if (withoutDialog) {
      return this.renderTooltipContent();
    }
    const content = this.renderTooltipContent;
    const dialogProps = {
      ...this.props,
      startingEdge: justify,
      tooltip: tip,
      content,
      getContainer: getContainer || this.getContainer,
      moveBy,
      tooltipClassName: `monday-style-arrow monday-style-arrow-${theme} padding-size-${paddingSize}`,
      animationType: "expand",
      onDialogDidHide: this.onTooltipHide,
      onDialogDidShow: this.onTooltipShow,
      getDynamicShowDelay: this.getShowDelay
    };
    return <Dialog {...dialogProps}>{children}</Dialog>;
  }
}

Tooltip.positions = DialogPositions;
Tooltip.animationTypes = DIALOG_ANIMATION_TYPES;
Tooltip.themes = TOOLTIP_THEMES;
Tooltip.justifyTypes = TOOLTIP_JUSTIFY_TYPES;
Tooltip.defaultProps = {
  style: undefined,
  arrowPosition: "center", // begin, center, end
  moveBy: { main: 4, secondary: 0 },
  theme: Tooltip.themes.Dark,
  position: Tooltip.positions.TOP,
  justify: Tooltip.justifyTypes.CENTER,
  hideDelay: 0,
  showDelay: 300,
  disableDialogSlide: true,
  animationType: "expand",
  withoutDialog: false,
  containerSelector: "#tooltips-container",
  immediateShowDelay: null,
  tip: true,
  hideWhenReferenceHidden: false
};
