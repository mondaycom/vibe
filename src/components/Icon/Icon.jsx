import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./Icon.scss";
import { ICON_TYPES } from "./IconConstants";
import FontIcon from "./FontIcon/FontIcon";
import useIconProps from "./hooks/useIconProps";
import useMergeRefs from "../../hooks/useMergeRefs";

const NOOP = () => {};

const Icon = forwardRef(
  (
    {
      onClick,
      className,
      icon,
      clickable,
      iconLabel,
      iconType,
      iconSize,
      ignoreFocusStyle,
      tabindex: externalTabIndex
    },
    ref
  ) => {
    const { tabindex, onClickCallback, computedClassName, iconRef, role } = useIconProps({
      onClick,
      clickable,
      className,
      ignoreFocusStyle
    });

    const mergedRef = useMergeRefs({ refs: [ref, iconRef] });

    if (!icon) {
      return null;
    }

    if (iconType === ICON_TYPES.SVG) {
      const IconComponent = icon;
      return (
        <IconComponent
          size={iconSize.toString()}
          onClick={onClick}
          tabIndex={externalTabIndex ?? tabindex}
          className={computedClassName}
          role={role}
        />
      );
    }

    return (
      <FontIcon
        className={cx(computedClassName)}
        onClick={onClickCallback}
        ref={mergedRef}
        iconLabel={iconLabel}
        tabIndex={externalTabIndex ?? tabindex}
        icon={icon}
        role={role}
      />
    );
  }
);

Icon.type = ICON_TYPES;

Icon.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  /** the type of the component - svg, font or custom svg (using react-inlinesvg) */
  iconType: PropTypes.oneOf([Icon.type.SVG, Icon.type.ICON_FONT]),
  /** we support two types of icons - SVG and FONT (classname) so this prop is either the name of the icon or the component */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** is in used for tabIndex */
  clickable: PropTypes.bool,
  /** icon aria label support */
  iconLabel: PropTypes.string,
  /** size for font icon */
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** remove focus style */
  ignoreFocusStyle: PropTypes.bool
};

Icon.defaultProps = {
  onClick: NOOP,
  className: "",
  icon: "",
  clickable: true,
  iconLabel: "",
  iconType: ICON_TYPES.SVG,
  iconSize: 16,
  ignoreFocusStyle: false
};

export default Icon;
