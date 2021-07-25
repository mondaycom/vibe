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
      tabindex: externalTabIndex,
      ariaHidden
    },
    ref
  ) => {
    const { screenReaderAccessProps, onClickCallback, computedClassName, iconRef } = useIconProps({
      onClick,
      iconLabel,
      clickable,
      className,
      isDecorationOnly: ariaHidden,
      ignoreFocusStyle,
      externalTabIndex
    });

    const mergedRef = useMergeRefs({ refs: [ref, iconRef] });

    if (!icon) {
      return null;
    }

    if (iconType === ICON_TYPES.SVG || typeof icon === "function" || typeof icon === "object") {
      const IconComponent = icon;
      return (
        <IconComponent
          {...screenReaderAccessProps}
          ref={mergedRef}
          size={iconSize.toString()}
          onClick={onClick}
          className={computedClassName}
        />
      );
    }

    return (
      <FontIcon
        {...screenReaderAccessProps}
        className={cx(computedClassName)}
        onClick={onClickCallback}
        ref={mergedRef}
        icon={icon}
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
  ignoreFocusStyle: PropTypes.bool,
  ariaHidden: PropTypes.bool
};

Icon.defaultProps = {
  onClick: NOOP,
  className: "",
  icon: "",
  clickable: true,
  iconLabel: undefined,
  iconType: ICON_TYPES.SVG,
  iconSize: 16,
  ignoreFocusStyle: false,
  ariaHidden: undefined
};

export default Icon;
