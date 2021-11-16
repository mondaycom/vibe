import React, { useRef, forwardRef, useMemo } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import NOOP from "lodash/noop";
import useMergeRefs from "../../hooks/useMergeRefs";
import ToolTip from "../Tooltip/Tooltip";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import AddSmall from "../Icon/Icons/components/AddSmall";
import { getWidthHeight } from "./services/IconButton-helpers";
import { SIZES } from "../../constants/sizes";
import "./IconButton.scss";

const IconButton = forwardRef(
  ({ className, id, icon, size, tooltipContent, ariaLabel, kind, active, disabled, disabledReason, onClick }, ref) => {
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
      if (size === IconButton.sizes.SMALL) return 16;
      if (size === IconButton.sizes.MEDIUM) return 24;
      if (size === IconButton.sizes.LARGE) return 24;
      return 24;
    }, [size]);

    const overrideStyle = useMemo(() => {
      let style = {
        display: "inline-fllex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0
      };
      if (active && kind !== IconButton.kinds.PRIMARY) {
        style.background = "var(--primary-selected-color)";
      }

      if (active && kind === IconButton.kinds.SECONDARY) {
        style.borderColor = "var(--primary-color";
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

    return (
      <ToolTip content={content}>
        <Button
          onClick={onClick}
          disabled={disabled}
          kind={kind}
          ariaLabel={buttonAriaLabel}
          ref={mergedRef}
          id={id}
          className={cx(className)}
          noSidePadding
          active={active}
          style={overrideStyle}
        >
          <Icon
            icon={icon}
            iconType={Icon.type.SVG}
            iconSize={iconSize}
            ignoreFocusStyle
            className="icon-button-padding"
          />
        </Button>
      </ToolTip>
    );
  }
);

IconButton.sizes = SIZES;
IconButton.kinds = Button.kinds;

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
   * class to be added to the element
   */
  className: PropTypes.string,
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
  /**
   * disabled state
   */
  disabled: PropTypes.bool,
  /**
   * if disabled - this will be shown in the tooltip
   */
  disabledReason: PropTypes.string
};

IconButton.defaultProps = {
  className: undefined,
  onClick: NOOP,
  id: undefined,
  icon: AddSmall,
  ariaLabel: undefined,
  size: IconButton.sizes.MEDIUM,
  tooltipContent: undefined,
  kind: Button.kinds.TERTIARY,
  disabled: false,
  disabledReason: undefined
};

export default IconButton;
