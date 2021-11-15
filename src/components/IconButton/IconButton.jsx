import React, { useRef, forwardRef, useMemo } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import useMergeRefs from "../../hooks/useMergeRefs";
import ToolTip from "../Tooltip/Tooltip";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import AddSmall from "../Icon/Icons/components/AddSmall";
import { getWidthHeight } from "./services/IconButton-helpers";
import { SIZES } from "../../constants/sizes";
import "./IconButton.scss";

const IconButton = forwardRef(
  ({ className, id, icon, size, tooltipContent, ariaLabel, kind, active, disabled, disabledReason }, ref) => {
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
  id: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element, PropTypes.func]),
  ariaLabel: PropTypes.string,
  size: PropTypes.oneOf([
    IconButton.sizes.XXS,
    IconButton.sizes.XS,
    IconButton.sizes.SMALL,
    IconButton.sizes.MEDIUM,
    IconButton.sizes.LARGE
  ]),
  tooltipContent: PropTypes.string,
  kind: PropTypes.oneOf([IconButton.kinds.PRIMARY, IconButton.kinds.SECONDARY, IconButton.kinds.TERTIARY]),
  disabled: PropTypes.bool,
  disabledReason: PropTypes.string
};

IconButton.defaultProps = {
  className: undefined,
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
