/* eslint-disable react/jsx-props-no-spreading */
import { camelCase, isFunction } from "lodash-es";
import cx from "classnames";
import React, { CSSProperties, isValidElement, PureComponent, ReactElement } from "react";
import { Modifier } from "react-popper";
import Dialog from "../Dialog/Dialog";
import { DialogAnimationType, DialogTriggerEvent } from "../Dialog/Dialog.types";
import { HideShowEvent as HideShowEventEnum, AnimationType as AnimationTypeEnum } from "../Dialog/DialogConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import { TooltipTheme as TooltipThemeEnum, TooltipPositions as TooltipPositionsEnum } from "./TooltipConstants";
import { ElementContent } from "../../types/ElementContent";
import { MoveBy } from "../../types/MoveBy";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./Tooltip.module.scss";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { SubIcon } from "../../types";
import Icon from "../Icon/Icon";
import Flex from "../Flex/Flex";
import { TooltipPositions, TooltipTheme } from "./Tooltip.types";
import { warnDeprecated } from "../../utils/warn-deprecated";

export type TooltipProps = TooltipBaseProps & (TooltipWithChildrenProps | TooltipWithoutChildrenProps);

interface TooltipWithoutChildrenProps {
  /**
   * When true, the tooltip would be rendered on a Dialog without children
   * Use case is currently for rendering Tipseen with floating prop
   */
  forceRenderWithoutChildren: boolean;
  children?: ReactElement | Array<ReactElement>;
}

interface TooltipWithChildrenProps {
  forceRenderWithoutChildren?: boolean;
  children: ReactElement | Array<ReactElement>;
}

// TODO TS-migration extend DialogProps, once Dialog is migrated to TS
interface TooltipBaseProps extends VibeComponentProps {
  content: ElementContent;
  style?: CSSProperties;
  /** Class name for a tooltip's arrow */
  arrowClassName?: string;
  /**
   * How much to move the dialog in relative to children
   * main is the axis in which the position is aligned to
   * secondary is the vertical axes to the position
   */
  moveBy?: MoveBy;
  theme?: TooltipTheme;
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
  animationType?: DialogAnimationType;
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
  modifiers?: Array<Modifier<unknown>>;
  /**
   * Where the tooltip should be in reference to the children: Top, Left, Right, Bottom ...
   */
  position?: TooltipPositions;
  /**
   * an array of hide/show trigger - Tooltip.hideShowTriggers
   */
  showTrigger?: DialogTriggerEvent | Array<DialogTriggerEvent>;
  /**
   * an array of hide/show trigger - Tooltip.hideShowTriggers
   */
  hideTrigger?: DialogTriggerEvent | Array<DialogTriggerEvent>;
  /**
   * If true, prevents open Tooltip from closing on mouseEnter and closes Tooltip, when mouse leaves it
   */
  showOnDialogEnter?: boolean;
  /**
   * A Classname to be added to <span> element which wraps the children
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
  /**
   * Overwrites z-index of the tooltip
   */
  zIndex?: number;
  /**
   * The title of the tooltip
   */
  title?: string;
  /**
   * The image of the tooltip
   */
  image?: string;
  /**
   * The icon of the tooltip next to the title
   */
  icon?: SubIcon;
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
  static positions = TooltipPositionsEnum;
  static hideShowTriggers = HideShowEventEnum;
  static themes = TooltipThemeEnum;
  static animationTypes = AnimationTypeEnum;
  static defaultProps = {
    moveBy: { main: 4, secondary: 0 },
    theme: "dark",
    position: "top",
    hideDelay: 100,
    showDelay: 300,
    disableDialogSlide: true,
    animationType: AnimationTypeEnum.EXPAND,
    withoutDialog: false,
    containerSelector: "#tooltips-container",
    tip: true,
    hideWhenReferenceHidden: false,
    modifiers: new Array<Modifier<unknown>>(),
    showTrigger: Tooltip.hideShowTriggers.MOUSE_ENTER,
    hideTrigger: Tooltip.hideShowTriggers.MOUSE_LEAVE,
    showOnDialogEnter: true,
    referenceWrapperClassName: "",
    addKeyboardHideShowTriggersByDefault: true,
    open: false
  };
  constructor(props: TooltipProps) {
    super(props);
    this.renderTooltipContent = this.renderTooltipContent.bind(this);
    this.getShowDelay = this.getShowDelay.bind(this);
    this.onTooltipShow = this.onTooltipShow.bind(this);
    this.onTooltipHide = this.onTooltipHide.bind(this);

    this.wasShown = false;
    warnDeprecated({
      component: "Tooltip",
      condition: this.props.theme && !["primary", "dark"].includes(this.props.theme),
      message:
        "'theme' prop will be able to get only 'dark' and 'primary' in the upcoming major version. Please consider using these themes."
    });
    warnDeprecated({
      component: "Tooltip",
      condition: this.props.position && !["top", "left", "right", "bottom"].includes(this.props.position),
      message:
        "'position' prop will be able to get only 'top', 'bottom', 'left', and 'right' values in the upcoming major version. Please consider using these positions."
    });
  }

  getContainer() {
    return document.getElementById("tooltips-container") || document.querySelector("body");
  }

  renderTooltipContent() {
    const { theme, content, className, style, title, image, icon } = this.props;
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
      <div style={style} className={cx(styles.tooltip, getStyle(styles, camelCase(theme)), className)}>
        {image && <img className={styles.image} src={image} alt="" />}
        <div className={cx(styles.content)}>
          {title && (
            <Flex gap="xs">
              {icon && <Icon iconSize="20" icon={icon} clickable={false} />}
              <div className={styles.title}>{title}</div>
            </Flex>
          )}
          {contentValue}
        </div>
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
      children,
      forceRenderWithoutChildren,
      getContainer,
      theme,
      tip,
      arrowClassName,
      id,
      "data-testid": dataTestId,
      position
    } = this.props;

    if (!children && !forceRenderWithoutChildren) {
      return null;
    }

    if (withoutDialog) {
      return this.renderTooltipContent();
    }

    const content = this.renderTooltipContent;
    const dialogProps = {
      ...this.props,
      position: position,
      "data-testid": dataTestId || getTestId(ComponentDefaultTestId.TOOLTIP, id),
      tooltip: tip,
      content,
      getContainer: getContainer || this.getContainer,
      tooltipClassName: cx(styles.arrow, getStyle(styles, theme), arrowClassName),
      onDialogDidHide: this.onTooltipHide,
      onDialogDidShow: this.onTooltipShow,
      getDynamicShowDelay: this.getShowDelay
    };
    return (
      <Dialog {...dialogProps} animationType="expand">
        {children}
      </Dialog>
    );
  }
}
