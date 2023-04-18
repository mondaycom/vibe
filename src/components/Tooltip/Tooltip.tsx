/* eslint-disable react/jsx-props-no-spreading */
import cx from "classnames";
import React, { CSSProperties, isValidElement, PureComponent, ReactElement } from "react";
import classnames from "classnames";
import { Modifier } from "react-popper";
import { isFunction } from "lodash-es";
import Dialog from "../Dialog/Dialog";
import { AnimationType, BASE_SIZES_WITH_NONE, HideShowEvent, JustifyType } from "../../constants";
import { DialogPosition } from "../../constants/positions";
import VibeComponentProps from "../../types/VibeComponentProps";
import { TooltipArrowPosition, TooltipTheme } from "./TooltipConstants";
import { ElementContent } from "../../types/ElementContent";
import { MoveBy } from "../../types/MoveBy";
import "./Tooltip.scss";

// TODO TS-migration extend DialogProps, once Dialog is migrated to TS
export interface TooltipProps extends VibeComponentProps {
  children: ReactElement | Array<ReactElement>;
  content: ElementContent;
  style?: CSSProperties;
  arrowPosition?: TooltipArrowPosition;
  /** Class name for a tooltip's arrow */
  arrowClassName?: string;
  paddingSize?: keyof typeof BASE_SIZES_WITH_NONE;
  /**
   * How much to move the dialog in relative to children
   * main is the axis in which the position is aligned to
   * secondary is the vertical axes to the position
   */
  moveBy?: MoveBy;
  theme?: TooltipTheme;
  justify?: JustifyType;
  getContainer?: () => HTMLElement;
  /**
   * how much delay should the Dialog wait until it should trigger the hide in MS
   */
  hideDelay?: number;
  /**
   * how much delay should the Dialog wait until it should trigger the show in MS
   */
  showDelay?: number;
  disableDialogSlide?: boolean;
  animationType?: AnimationType;
  withoutDialog?: boolean;
  /**
   * the container selector in which to append the dialog
   * for examples: "body" , ".my-class", "#my-id"
   */
  containerSelector?: string;
  /**
   * With which delay tooltip is going to be shown
   */
  immediateShowDelay?: number;
  /**
   * when false, the arrow of the tooltip is hidden
   */
  tip?: boolean;
  /**
   * Show the Dialog when the children is mounting
   */
  shouldShowOnMount?: boolean;
  hideWhenReferenceHidden?: boolean;
  onTooltipHide?: () => void;
  onTooltipShow?: () => void;
  /**
   * PopperJS Modifiers type
   * https://popper.js.org/docs/v2/modifiers/
   */
  modifiers?: Array<Modifier<any>>;
  /**
   * Where the tooltip should be in reference to the children: Top, Left, Right, Bottom ...
   */
  position?: DialogPosition;
  /**
   * an array of hide/show trigger - Tooltip.hideShowTriggers
   */
  showTrigger?: HideShowEvent | Array<HideShowEvent>;
  /**
   * an array of hide/show trigger - Tooltip.hideShowTriggers
   */
  hideTrigger?: HideShowEvent | Array<HideShowEvent>;
  /**
   * If true, prevents open Tooltip from closing on mouseEnter and closes Tooltip, when mouse leaves it
   */
  showOnDialogEnter?: boolean;
  /**
   * A Classname to be added to <spam> element which wraps the children
   */
  referenceWrapperClassName?: string;
  /**
   * Treats keyboard focus/blur events as mouse-enter/mouse-leave events
   */
  addKeyboardHideShowTriggersByDefault?: boolean;
  /**
   * set the state of the tooltip - open/close - controlled component
   */
  open?: boolean;
}
// When last tooltip was shown in the last 1.5 second - the next tooltip will be shown immediately
const IMMEDIATE_SHOW_THRESHOLD_MS = 1500;

// Shared state across multiple tooltip instances (i.e last tooltip shown time)
const globalState: { lastTooltipHideTS: number; openTooltipsCount: number } = {
  lastTooltipHideTS: null,
  openTooltipsCount: 0
};

export default class Tooltip extends PureComponent<TooltipProps> {
  wasShown: boolean;
  static positions = DialogPosition;
  static hideShowTriggers = HideShowEvent;
  static themes = TooltipTheme;
  static animationTypes = AnimationType;
  static justifyTypes = JustifyType;
  static arrowPositions = TooltipArrowPosition;
  static defaultProps = {
    arrowPosition: TooltipArrowPosition.CENTER,
    moveBy: { main: 4, secondary: 0 },
    theme: TooltipTheme.Dark,
    position: Tooltip.positions.TOP,
    justify: Tooltip.justifyTypes.CENTER,
    hideDelay: 0,
    showDelay: 300,
    disableDialogSlide: true,
    animationType: AnimationType.EXPAND,
    withoutDialog: false,
    containerSelector: "#tooltips-container",
    tip: true,
    hideWhenReferenceHidden: false,
    modifiers: new Array<Modifier<any>>(),
    showTrigger: Tooltip.hideShowTriggers.MOUSE_ENTER,
    hideTrigger: Tooltip.hideShowTriggers.MOUSE_LEAVE,
    showOnDialogEnter: false,
    referenceWrapperClassName: "",
    addKeyboardHideShowTriggersByDefault: false,
    open: false
  };
  constructor(props: TooltipProps) {
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
    } else if (isValidElement(content)) {
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
      const { onTooltipShow } = this.props;
      globalState.openTooltipsCount++;
      this.wasShown = true;
      onTooltipShow && onTooltipShow();
    }
  }

  onTooltipHide() {
    if (this.wasShown) {
      const { onTooltipHide } = this.props;
      globalState.lastTooltipHideTS = Date.now();
      globalState.openTooltipsCount--;
      this.wasShown = false;
      onTooltipHide && onTooltipHide();
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
    const {
      withoutDialog,
      moveBy,
      justify,
      children,
      getContainer,
      theme,
      paddingSize,
      tip,
      showTrigger,
      hideTrigger,
      showOnDialogEnter,
      addKeyboardHideShowTriggersByDefault,
      open,
      arrowClassName
    } = this.props;

    if (!children) {
      return null;
    }

    if (withoutDialog) {
      return this.renderTooltipContent();
    }
    const content = this.renderTooltipContent;
    const dialogProps = {
      ...this.props,
      open,
      startingEdge: justify,
      tooltip: tip,
      content,
      getContainer: getContainer || this.getContainer,
      moveBy,
      tooltipClassName: cx(
        "monday-style-arrow",
        `monday-style-arrow-${theme}`,
        `padding-size-${paddingSize}`,
        arrowClassName
      ),
      animationType: AnimationType.EXPAND,
      onDialogDidHide: this.onTooltipHide,
      onDialogDidShow: this.onTooltipShow,
      getDynamicShowDelay: this.getShowDelay,
      showTrigger,
      hideTrigger,
      showOnDialogEnter,
      addKeyboardHideShowTriggersByDefault
    };
    return <Dialog {...dialogProps}>{children}</Dialog>;
  }
}
