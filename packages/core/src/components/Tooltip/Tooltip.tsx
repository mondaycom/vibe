/* eslint-disable react/jsx-props-no-spreading */
import { isFunction } from "es-toolkit";
import { camelCase } from "es-toolkit";
import cx from "classnames";
import React, { type CSSProperties, isValidElement, PureComponent, type ReactElement } from "react";
import { type Modifier } from "react-popper";
import { Dialog, type DialogAnimationType, type DialogTriggerEvent } from "@vibe/dialog";
import {
  DialogTriggerEventEnum as HideShowEventEnum,
  DialogAnimationTypeEnum as AnimationTypeEnum
} from "@vibe/dialog";
import type VibeComponentProps from "../../types/VibeComponentProps";
import { TooltipTheme as TooltipThemeEnum, TooltipPositions as TooltipPositionsEnum } from "./TooltipConstants";
import { type ElementContent } from "../../types/ElementContent";
import { type MoveBy } from "../../types/MoveBy";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./Tooltip.module.scss";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { Icon, type SubIcon } from "@vibe/icon";
import { Flex } from "@vibe/layout";
import { type TooltipPositions, type TooltipTheme } from "./Tooltip.types";

export type TooltipProps = TooltipBaseProps & (TooltipWithChildrenProps | TooltipWithoutChildrenProps);

interface TooltipWithoutChildrenProps {
  /**
   * If true, the tooltip will be rendered even if there are no children.
   */
  forceRenderWithoutChildren: boolean;
  /**
   * The children elements that the tooltip is attached to.
   */
  children?: ReactElement | Array<ReactElement>;
}

interface TooltipWithChildrenProps {
  /**
   * If true, the tooltip will be rendered even if there are no children.
   */
  forceRenderWithoutChildren?: boolean;
  /**
   * The children elements that the tooltip is attached to.
   */
  children: ReactElement | Array<ReactElement>;
}

// TODO TS-migration extend DialogProps, once Dialog is migrated to TS
interface TooltipBaseProps extends VibeComponentProps {
  /**
   * The content displayed inside the tooltip.
   */
  content: ElementContent;
  /**
   * Inline styles applied to the tooltip container.
   */
  style?: CSSProperties;
  /**
   * Class name applied to the tooltip arrow.
   */
  arrowClassName?: string;
  /**
   * Offset values for positioning adjustments.
   */
  moveBy?: MoveBy;
  /**
   * The theme of the tooltip.
   */
  theme?: TooltipTheme;
  /**
   * Function to get the container where the tooltip should be rendered.
   */
  getContainer?: () => HTMLElement;
  /**
   * Delay in milliseconds before hiding the tooltip.
   */
  hideDelay?: number;
  /**
   * Delay in milliseconds before showing the tooltip.
   */
  showDelay?: number;
  /**
   * If true, disables the slide animation of the tooltip.
   */
  disableDialogSlide?: boolean;
  /**
   * The animation type used for showing/hiding the tooltip.
   */
  animationType?: DialogAnimationType;
  /**
   * If true, renders the tooltip without a dialog.
   */
  withoutDialog?: boolean;
  /**
   * The CSS selector of the container where the tooltip should be rendered.
   */
  containerSelector?: string;
  /**
   * Delay in milliseconds before showing the tooltip immediately.
   */
  immediateShowDelay?: number;
  /**
   * If false, hides the arrow of the tooltip.
   */
  tip?: boolean;
  /**
   * If true, the tooltip is shown when the component mounts.
   */
  shouldShowOnMount?: boolean;
  /**
   * If true, hides the tooltip when the reference element is hidden.
   */
  hideWhenReferenceHidden?: boolean;
  /**
   * Callback fired when the tooltip is hidden.
   */
  onTooltipHide?: () => void;
  /**
   * Callback fired when the tooltip is shown.
   */
  onTooltipShow?: () => void;
  /**
   * Custom Popper.js modifiers.
   * https://popper.js.org/docs/v2/modifiers/
   */
  modifiers?: Array<Modifier<unknown>>;
  /**
   * The placement of the tooltip relative to the reference element.
   */
  position?: TooltipPositions;
  /**
   * Events that trigger showing the tooltip.
   */
  showTrigger?: DialogTriggerEvent | Array<DialogTriggerEvent>;
  /**
   * Events that trigger hiding the tooltip.
   */
  hideTrigger?: DialogTriggerEvent | Array<DialogTriggerEvent>;
  /**
   * If true, prevents closing the tooltip when the mouse enters it.
   */
  showOnDialogEnter?: boolean;
  /**
   * Class name applied to the reference wrapper element.
   */
  referenceWrapperClassName?: string;
  /**
   * If true, keyboard focus/blur events behave like mouse enter/leave.
   */
  addKeyboardHideShowTriggersByDefault?: boolean;
  /**
   * If true, controls the open state of the tooltip.
   */
  open?: boolean;
  /**
   * The z-index applied to the tooltip.
   */
  zIndex?: number;
  /**
   * The title of the tooltip.
   */
  title?: string;
  /**
   * The image displayed inside the tooltip.
   */
  image?: string;
  /**
   * The icon displayed next to the title.
   */
  icon?: SubIcon;
  /**
   * The maximum width of the tooltip.
   */
  maxWidth?: number;
  /**
   * The text direction of the tooltip: "ltr", "rtl", or "auto".
   */
  dir?: "ltr" | "rtl" | "auto";
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
  }

  renderTooltipContent() {
    const { theme, content, className, style, maxWidth, title, image, icon, dir } = this.props;
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
    } else if (Array.isArray(content) && content.length > 0) {
      // allow array of elements
      contentValue = content;
    }

    if (!contentValue) {
      return null;
    }

    return (
      <div
        style={maxWidth ? ({ ...style, "--tooltip-max-width": `${maxWidth}px` } as CSSProperties) : style}
        className={cx(styles.tooltip, getStyle(styles, camelCase(theme)), className)}
        dir={dir}
      >
        {image && <img className={styles.image} src={image} alt="" />}
        <div className={cx(styles.content)}>
          {title && (
            <Flex gap="xs">
              {icon && <Icon iconSize="20" icon={icon} />}
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
