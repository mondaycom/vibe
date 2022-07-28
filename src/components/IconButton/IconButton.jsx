import { SIZES } from "../../constants/sizes";
import React, { forwardRef, Fragment, useMemo, useRef } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import NOOP from "lodash/noop";
import useMergeRefs from "../../hooks/useMergeRefs";
import ToolTip from "../../components/Tooltip/Tooltip";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import AddSmall from "../../components/Icon/Icons/components/AddSmall";
import { getWidthHeight } from "./services/IconButton-helpers";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import styles from "./IconButton.module.scss";

const IconButton = forwardRef(
  (
    {
      className,
      wrapperClassName,
      id,
      icon,
      size,
      tooltipContent,
      ariaLabel,
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
      if (size === IconButton.sizes.XXS) return 16;
      if (size === IconButton.sizes.XS) return 16;
      if (size === IconButton.sizes.SMALL) return 24;
      if (size === IconButton.sizes.MEDIUM) return 24;
      if (size === IconButton.sizes.LARGE) return 24;
      return 24;
    }, [size]);

    const overrideStyle = useMemo(() => {
      let style = {
        justifyContent: "center",
        alignItems: "center",
        padding: 0
      };
      if (active && kind !== IconButton.kinds.PRIMARY) {
        style.background = "var(--primary-selected-color)";
      }

      if (active && kind === IconButton.kinds.SECONDARY) {
        style.borderColor = "var(--primary-color)";
      }

      if (size) {
        style = { ...style, ...getWidthHeight(size) };
      }
      return style;
    }, [active, kind, size]);

    const content = useMemo(() => {
      if (disabled && disabledReason) return disabledReason;
      if (tooltipContent) return tooltipContent;
      return ariaLabel;
    }, [disabled, disabledReason, tooltipContent, ariaLabel]);

    const IconButtonWrapper = wrapperClassName ? "div" : Fragment;
    const iconButtonWrapperProps = useMemo(() => {
      return wrapperClassName ? { className: cx(wrapperClassName, styles.wrapper) } : {};
    }, [wrapperClassName]);

    return (
      <IconButtonWrapper {...iconButtonWrapperProps}>
        <ToolTip content={content} referenceWrapperClassName={styles.referenceWrapper}>
          <Button
            onClick={onClick}
            disabled={disabled}
            color={color}
            kind={kind}
            ariaLabel={buttonAriaLabel}
            ref={mergedRef}
            id={id}
            dataTestId={dataTestId || getTestId(ELEMENT_TYPES.ICON_BUTTON, id)}
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
        </ToolTip>
      </IconButtonWrapper>
    );
  }
);

IconButton.sizes = SIZES;
IconButton.kinds = Button.kinds;
IconButton.colors = Button.colors;

IconButton.propTypes = {
  /**
   * id to be added to the element
   */
  id: PropTypes.string,
  /**
   * callback function when clicking the icon button
   */
  onClick: PropTypes.func,
  /**
   * class to be added to the button
   */
  className: PropTypes.string,
  /**
   * class to be added to the button wrapper
   */
  wrapperClassName: PropTypes.string,
  /**
   * Icon to be rendered
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element, PropTypes.func]),
  /**
   * a11y property to be added, used for screen reader to know what kind of button it is
   */
  ariaLabel: PropTypes.string,
  /**
   * Size of the icon
   */
  size: PropTypes.oneOf([
    IconButton.sizes.XXS,
    IconButton.sizes.XS,
    IconButton.sizes.SMALL,
    IconButton.sizes.MEDIUM,
    IconButton.sizes.LARGE
  ]),
  /**
   * Tooltip wraps the button icon, it will display in the tooltip, if not present the aria label will be shown
   */
  tooltipContent: PropTypes.string,
  /**
   * Kind of button - like <Button />
   */
  kind: PropTypes.oneOf([IconButton.kinds.PRIMARY, IconButton.kinds.SECONDARY, IconButton.kinds.TERTIARY]),
  /** The button's color  */
  color: PropTypes.oneOf([
    Button.colors.PRIMARY,
    Button.colors.NEGATIVE,
    Button.colors.POSITIVE,
    Button.colors.ON_PRIMARY_COLOR,
    Button.colors.ON_INVERTED_BACKGROUND
  ]),
  /**
   * disabled state
   */
  disabled: PropTypes.bool,
  /**
   * if disabled - this will be shown in the tooltip
   */
  disabledReason: PropTypes.string,
  dataTestId: PropTypes.string,
  /** Change the focus indicator from around the button to within it */
  insetFocus: PropTypes.bool
};

IconButton.defaultProps = {
  className: undefined,
  wrapperClassName: undefined,
  onClick: NOOP,
  id: undefined,
  icon: AddSmall,
  ariaLabel: undefined,
  size: IconButton.sizes.MEDIUM,
  tooltipContent: undefined,
  kind: Button.kinds.TERTIARY,
  disabled: false,
  disabledReason: undefined,
  color: undefined,
  dataTestId: undefined,
  insetFocus: false
};

export default IconButton;
