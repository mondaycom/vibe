import React, { useRef, forwardRef, useMemo } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import useMergeRefs from "../../hooks/useMergeRefs";
import ToolTip from "../Tooltip/Tooltip";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import "./IconButton.scss";

const IconButton = forwardRef(({ className, id, icon, size, tooltipContent, ariaLabel }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
  const buttonAriaLabel = useMemo(() => {
    if (ariaLabel) return ariaLabel;
    if (typeof tooltipContent === "string") return tooltipContent;
    return "";
  }, [ariaLabel, tooltipContent]);

  const iconSize = useMemo(() => {
    if (size === IconButton.sizes.SMALL) return 16;
    if (size === IconButton.sizes.MEDIUM) return 24;
    if (size === IconButton.sizes.LARGE) return 32;
    return 24;
  }, [size]);

  return (
    <ToolTip content={tooltipContent}>
      <Button
        size={size}
        kind={Button.kinds.TERTIARY}
        ariaLabel={buttonAriaLabel}
        ref={mergedRef}
        id={id}
        className={cx(className)}
        noSidePadding
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
IconButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  tooltipContent: PropTypes.string
};

IconButton.defaultProps = {
  className: "",
  id: ""
};

export default IconButton;
