import React, { forwardRef, Fragment, useMemo, useRef } from "react";
import cx from "classnames";
import NOOP from "lodash/noop";
import useMergeRefs from "../../hooks/useMergeRefs";
import Tooltip from "../Tooltip/Tooltip";
import Icon from "../Icon/Icon";
import AddSmall from "../Icon/Icons/components/AddSmall";
import { getWidthHeight, Size } from "./services/IconButton-helpers";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../types";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import Button from "../Button/Button";
import { BUTTON_ICON_SIZE, ButtonColor, ButtonType } from "../Button/ButtonConstants";
import { DialogPosition } from "../../constants";
import styles from "./IconButton.module.scss";

export interface IconButtonProps extends VibeComponentProps {
  /**
   * id to be added to the element
   */
  id?: string;
  /**
   * callback function when clicking the icon button
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * class to be added to the button
   */
  className?: string;
  /**
   * class to be added to the button wrapper
   */
  wrapperClassName?: string;
  /**
   * Icon to be rendered
   */
  icon?: SubIcon;
  /**
   * a11y property to be added, used for screen reader to know what kind of button it is
   */
  ariaLabel?: string;
  /**
   * Size of the icon
   */
  size?: Size;
  /**
   * Whether the tooltip should be displayed or not
   */
  hideTooltip?: boolean;
  /**
   * Tooltip wraps the button icon, it will display in the tooltip, if not present the aria label will be shown
   */
  tooltipContent?: string;
  /**
   * Where the tooltip should be in reference to the children: Top, Left, Right, Bottom ...
   */
  tooltipPosition?: DialogPosition;
  /**
   * With which delay tooltip is going to be shown
   */
  tooltipImmediateShowDelay?: number;
  /**
   * Kind of button - like <Button />
   */
  kind?: ButtonType;
  active?: boolean;
  /** The button's color  */
  color?: ButtonColor;
  /**
   * disabled state
   */
  disabled?: boolean;
  /**
   * if disabled - this will be shown in the tooltip
   */
  disabledReason?: string;
  dataTestId?: string;
  /** Change the focus indicator from around the button to within it */
  insetFocus?: boolean;
}

const IconButton: VibeComponent<IconButtonProps> & {
  sizes?: typeof Button.sizes;
  kinds?: typeof Button.kinds;
  colors?: typeof Button.colors;
} = forwardRef(
  (
    {
      className,
      wrapperClassName,
      id,
      icon,
      size,
      tooltipContent,
      tooltipPosition,
      tooltipImmediateShowDelay,
      ariaLabel,
      hideTooltip,
      kind,
      active,
      disabled,
      disabledReason,
      onClick,
      color,
      dataTestId,
      insetFocus
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const buttonAriaLabel = useMemo(() => {
      if (ariaLabel) return ariaLabel;
      if (typeof tooltipContent === "string") return tooltipContent;
      return undefined;
    }, [ariaLabel, tooltipContent]);

    const iconSize = useMemo(() => {
      switch (size) {
        case Button.sizes.XXS:
        case Button.sizes.XS:
          return 16;
        case Button.sizes.SMALL:
        case Button.sizes.MEDIUM:
        case Button.sizes.LARGE:
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
      if (tooltipContent) return tooltipContent;
      return ariaLabel;
    }, [hideTooltip, disabled, disabledReason, tooltipContent, ariaLabel]);

    const IconButtonWrapper = wrapperClassName ? "div" : Fragment;
    const iconButtonWrapperProps = useMemo(() => {
      return wrapperClassName ? { className: cx(wrapperClassName, styles.wrapper) } : {};
    }, [wrapperClassName]);

    return (
      <IconButtonWrapper {...iconButtonWrapperProps}>
        <Tooltip
          content={calculatedTooltipContent}
          position={tooltipPosition}
          immediateShowDelay={tooltipImmediateShowDelay}
          referenceWrapperClassName={styles.referenceWrapper}
        >
          <Button
            onClick={onClick}
            disabled={disabled}
            color={color}
            kind={kind}
            ariaLabel={buttonAriaLabel}
            ref={mergedRef}
            id={id}
            dataTestId={dataTestId || getTestId(ComponentDefaultTestId.ICON_BUTTON, id)}
            noSidePadding
            active={active}
            className={className}
            style={overrideStyle}
            insetFocus={insetFocus}
          >
            <Icon
              icon={icon}
              iconType={Icon.type.SVG}
              iconSize={iconSize}
              ignoreFocusStyle
              className="icon-button-padding"
              clickable={false}
            />
          </Button>
        </Tooltip>
      </IconButtonWrapper>
    );
  }
);

Object.assign(IconButton, {
  sizes: Button.sizes,
  kinds: Button.kinds,
  colors: Button.colors,
  defaultTestId: ComponentDefaultTestId.ICON_BUTTON
});

IconButton.defaultProps = {
  className: undefined,
  wrapperClassName: undefined,
  onClick: NOOP,
  id: undefined,
  icon: AddSmall,
  ariaLabel: undefined,
  size: IconButton?.sizes.MEDIUM,
  hideTooltip: false,
  tooltipContent: undefined,
  kind: IconButton.kinds.TERTIARY,
  disabled: false,
  disabledReason: undefined,
  color: undefined,
  dataTestId: undefined,
  insetFocus: false
};

export default IconButton;
