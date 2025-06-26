import React, { AriaAttributes, forwardRef, Fragment, useMemo, useRef } from "react";
import cx from "classnames";
import { noop as NOOP } from "lodash-es";
import useMergeRef from "../../hooks/useMergeRef";
import Tooltip, { TooltipProps } from "../Tooltip/Tooltip";
import Icon from "../Icon/Icon";
import { AddSmall } from "@vibe/icons";
import { getWidthHeight, Size, ICON_BUTTON_SIZES, XXXS_BUTTON_ICON_SIZE } from "./services/IconButton-helpers";
import { SubIcon, VibeComponentProps, withStaticProps } from "../../types";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId, ComponentVibeId } from "../../tests/constants";
import Button from "../Button/Button";
import { BUTTON_ICON_SIZE, SMALL_BUTTON_ICON_SIZE } from "../Button/ButtonConstants";
import { ButtonColor, ButtonType } from "../Button";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./IconButton.module.scss";

export interface IconButtonProps extends VibeComponentProps {
  /**
   * Callback fired when the button is clicked.
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * Class name applied to the button wrapper.
   */
  wrapperClassName?: string;
  /**
   * Class name applied to the icon.
   */
  iconClassName?: string;
  /**
   * The icon displayed inside the button.
   */
  icon?: SubIcon;
  /**
   * The ID of the element that labels this button.
   */
  ariaLabeledBy?: string;
  /**
   * The ARIA label for accessibility.
   */
  ariaLabel?: string;
  /**
   * If true, indicates that the button controls a popup.
   */
  ariaHasPopup?: React.HTMLProps<HTMLButtonElement>["aria-haspopup"];
  /**
   * If true, indicates that the associated popup is open.
   */
  ariaExpanded?: boolean;
  /**
   * The ID of the region controlled by the button.
   */
  ariaControls?: string;
  /**
   * ID of the element describing the button.
   */
  "aria-describedby"?: AriaAttributes["aria-describedby"];
  /**
   * If true, hides the button from assistive technologies.
   */
  "aria-hidden"?: AriaAttributes["aria-hidden"];
  /**
   * Indicates the current "pressed" state of toggle buttons.
   */
  "aria-pressed"?: AriaAttributes["aria-pressed"];
  /**
   * The size of the button.
   */
  size?: Size;
  /**
   * If true, hides the tooltip.
   */
  hideTooltip?: boolean;
  /**
   * Props for the Tooltip component.
   */
  tooltipProps?: Partial<TooltipProps>;
  /**
   * Tooltip content displayed on hover.
   */
  tooltipContent?: string;
  /**
   * The button variant.
   */
  kind?: ButtonType;
  /**
   * If true, the button is in an active state.
   */
  active?: boolean;
  /**
   * The color of the button.
   */
  color?: ButtonColor;
  /**
   * If true, the button is disabled.
   */
  disabled?: boolean;
  /**
   * If disabled, this message will be displayed in the tooltip.
   */
  disabledReason?: string;
  /**
   * If true, the focus indicator is displayed inside the button instead of around it.
   */
  insetFocus?: boolean;
  /**
   * The tab order of the button.
   */
  tabIndex?: number;
  /**
   * If true, a loader replaces the icon.
   */
  loading?: boolean;
}

const IconButton = forwardRef(
  (
    {
      className,
      wrapperClassName,
      iconClassName,
      id,
      icon = AddSmall,
      size = "medium",
      tooltipProps = {} as TooltipProps,
      tooltipContent,
      ariaLabeledBy,
      ariaLabel,
      ariaHasPopup,
      ariaExpanded,
      ariaControls,
      "aria-describedby": ariaDescribedBy,
      "aria-hidden": ariaHidden,
      "aria-pressed": ariaPressed,
      hideTooltip = false,
      kind = "tertiary",
      active,
      disabled = false,
      disabledReason,
      onClick = NOOP,
      color,
      "data-testid": dataTestId,
      insetFocus = false,
      tabIndex,
      loading = false
    }: IconButtonProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const overrideTooltipContent = useMemo(
      () => tooltipProps?.content || tooltipContent,
      [tooltipProps?.content, tooltipContent]
    );

    const buttonAriaLabel = useMemo(() => {
      if (ariaLabel) return ariaLabel;
      if (typeof overrideTooltipContent === "string") return overrideTooltipContent;
      return undefined;
    }, [ariaLabel, overrideTooltipContent]);

    const iconSize = useMemo(() => {
      switch (size) {
        case "xxxs":
          return XXXS_BUTTON_ICON_SIZE;
        case "xxs":
        case "xs":
          return SMALL_BUTTON_ICON_SIZE;
        case "small":
        case "medium":
        case "large":
          return BUTTON_ICON_SIZE;
        default:
          return 24;
      }
    }, [size]);

    const overrideStyle = useMemo(() => {
      let style = {
        justifyContent: "center",
        alignItems: "center",
        padding: 0
      } as React.CSSProperties;

      if (size) {
        style = { ...style, ...getWidthHeight(size) };
      }
      return style;
    }, [size]);

    const calculatedTooltipContent = useMemo(() => {
      if (hideTooltip) return null;
      if (disabled && disabledReason) return disabledReason;
      if (overrideTooltipContent) return overrideTooltipContent as never;
      return ariaLabel;
    }, [hideTooltip, disabled, disabledReason, overrideTooltipContent, ariaLabel]);

    const IconButtonWrapper = wrapperClassName ? "div" : Fragment;
    const iconButtonWrapperProps = useMemo(() => {
      return wrapperClassName ? { className: cx(wrapperClassName, styles.wrapper) } : {};
    }, [wrapperClassName]);

    return (
      <IconButtonWrapper {...iconButtonWrapperProps}>
        <Tooltip
          {...tooltipProps}
          content={calculatedTooltipContent}
          referenceWrapperClassName={styles.referenceWrapper}
        >
          <Button
            onClick={onClick}
            disabled={disabled}
            color={color}
            kind={kind}
            ariaLabeledBy={ariaLabeledBy}
            ariaLabel={buttonAriaLabel}
            ariaHasPopup={ariaHasPopup}
            ariaExpanded={ariaExpanded}
            ariaControls={ariaControls}
            aria-describedby={ariaDescribedBy}
            aria-hidden={ariaHidden}
            aria-pressed={ariaPressed}
            ref={mergedRef}
            id={id}
            data-testid={dataTestId || getTestId(ComponentDefaultTestId.ICON_BUTTON, id)}
            data-vibe={ComponentVibeId.ICON_BUTTON}
            noSidePadding
            active={active}
            className={className}
            style={overrideStyle}
            insetFocus={insetFocus}
            tabIndex={tabIndex}
            loading={loading}
            loaderClassName={cx(styles.loader, getStyle(styles, size))}
          >
            <Icon icon={icon} iconType="svg" iconSize={iconSize} ignoreFocusStyle className={iconClassName} />
          </Button>
        </Tooltip>
      </IconButtonWrapper>
    );
  }
);

interface IconButtonStaticProps {
  sizes: typeof ICON_BUTTON_SIZES;
  kinds: typeof Button.kinds;
  colors: typeof Button.colors;
}

export default withStaticProps<IconButtonProps, IconButtonStaticProps>(IconButton, {
  sizes: ICON_BUTTON_SIZES,
  kinds: Button.kinds,
  colors: Button.colors
});
