import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { ICON_TYPES } from "./IconConstants";
import CustomSvgIcon from "./CustomSvgIcon";
import FontIcon from "./FontIcon/FontIcon";
import useIconProps from "./hooks/useIconProps";
import "./Icon.scss";

const NOOP = () => {};

const Icon = forwardRef(
  (
    {
      className,
      icon,
      iconLabel,
      iconType,
      iconSize,
      tabindex: externalTabIndex,
      ariaHidden,
      style,
      useCurrentColor,
      customColor,
      "data-testid": dataTestId,
      // deprecated - IconButton should be used ->
      onClick,
      clickable,
      ignoreFocusStyle
      // <- deprecated - IconButton should be used
    },
    ref
  ) => {
    // Setting default values for hidden deprecated clickable props
    onClick = onClick || NOOP;
    clickable = clickable || false;

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

    const isFunctionType = typeof icon === "function";
    if (iconType === ICON_TYPES.SVG || isFunctionType || typeof icon === "object") {
      const IconComponent = icon;
      return (
        <IconComponent
          {...screenReaderAccessProps}
          ref={isFunctionType ? undefined : mergedRef}
          size={iconSize.toString()}
          onClick={onClick}
          className={computedClassName}
          style={style}
          data-testid={dataTestId}
        />
      );
    }
    if (iconType === ICON_TYPES.SRC) {
      return (
        <CustomSvgIcon
          src={icon}
          {...screenReaderAccessProps}
          className={cx(computedClassName)}
          onClick={onClickCallback}
          style={style}
          replaceToCurrentColor={useCurrentColor}
          customColor={customColor}
          data-testid={dataTestId}
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
        style={style}
        data-testid={dataTestId}
      />
    );
  }
);

Icon.type = ICON_TYPES;

Icon.propTypes = {
  /**
   * class name to be added to icon
   */
  className: PropTypes.string,
  /**
   *  the type of the component - svg, font or custom svg (using react-inlinesvg)
   */
  iconType: PropTypes.oneOf([Icon.type.SVG, Icon.type.ICON_FONT, ICON_TYPES.SRC]),
  /**
   * we support three types of icons - SVG, FONT and SRC (classname) so this prop is either the name of the icon or the component
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * icon aria label support
   */
  iconLabel: PropTypes.string,
  /**
   * size for font icon
   */
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ariaHidden: PropTypes.bool,
  /**
   * when using svg from src (Icon.type.SRC) this boolean will transform the "fill" property to "currentColor"
   */
  useCurrentColor: PropTypes.bool,
  /**
   * If you want to override to coloring of currentColor
   */
  customColor: PropTypes.string
};

Icon.defaultProps = {
  className: "",
  icon: "",
  iconLabel: undefined,
  iconType: ICON_TYPES.SVG,
  iconSize: 16,
  ariaHidden: undefined,
  useCurrentColor: false,
  customColor: undefined
};

export default Icon;
