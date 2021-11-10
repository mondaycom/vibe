import React, { useRef, forwardRef, useMemo } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import useMergeRefs from "../../hooks/useMergeRefs";
import ToolTip from "../Tooltip/Tooltip";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import "./IconButton.scss";

const IconButton = forwardRef(({ className, id, icon, size, tooltipContent, ariaLabel, kind, active }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
  const buttonAriaLabel = useMemo(() => {
    if (ariaLabel) return ariaLabel;
    if (typeof tooltipContent === "string") return tooltipContent;
    return undefined;
  }, [ariaLabel, tooltipContent]);

  const iconSize = useMemo(() => {
    if (size === IconButton.sizes.SMALL) return 16;
    if (size === IconButton.sizes.MEDIUM) return 24;
    if (size === IconButton.sizes.LARGE) return 32;
    return 24;
  }, [size]);

  const overrideStyle = useMemo(() => {
    const style = {};
    if (active && kind !== IconButton.kinds.PRIMARY) {
      style.background = "var(--primary-selected-color)";
    }

    if (active && kind === IconButton.kinds.SECONDARY) {
      style.borderColor = "var(--primary-color";
    }

    if (!Object.keys(style).length) return;
    return style;
  }, [active, kind]);

  return (
    <ToolTip content={tooltipContent}>
      <Button
        size={size}
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
});

IconButton.sizes = Button.sizes;
IconButton.kinds = Button.kinds;
IconButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  tooltipContent: PropTypes.string,
  kind: PropTypes.oneOf([IconButton.kinds.PRIMARY, IconButton.kinds.SECONDARY, IconButton.kinds.TERTIARY])
};

IconButton.defaultProps = {
  className: "",
  id: "",
  icon: undefined,
  size: IconButton.sizes.MEDIUM,
  tooltipContent: undefined,
  kind: Button.kinds.TERTIARY
};

export default IconButton;
