/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import SVG from "react-inlinesvg";
import useIconScreenReaderAccessProps from "../../hooks/useIconScreenReaderAccessProps";

function modifySvgCode(svg, color = "currentColor") {
  return svg.replace(/fill=".*?"/g, `fill="${color}"`);
}

const CustomSvgIcon = ({
  className,
  src,
  onClick,
  clickable,
  ariaLabel,
  ariaHidden,
  replaceToCurrentColor,
  customColor,
  "data-testid": dataTestId,
  ...props
}) => {
  const screenReaderAccessProps = useIconScreenReaderAccessProps({
    isClickable: clickable,
    label: ariaLabel,
    isDecorationOnly: ariaHidden
  });

  const svgProcessor = useCallback(
    svg => {
      if (replaceToCurrentColor) return modifySvgCode(svg, "currentColor");
      if (customColor) return modifySvgCode(svg, customColor);
      return svg;
    },
    [replaceToCurrentColor, customColor]
  );

  if (typeof src !== "string") return null;

  return (
    <SVG
      {...screenReaderAccessProps}
      onClick={onClick}
      src={src}
      className={cx("monday-style-custom-svg-icon--wrapper", className)}
      preProcessor={svgProcessor}
      {...props}
      data-testid={dataTestId}
    />
  );
};

CustomSvgIcon.propTypes = {
  className: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ariaLabel: PropTypes.string,
  ariaHidden: PropTypes.bool,
  replaceToCurrentColor: PropTypes.bool,
  customColor: PropTypes.string
};
CustomSvgIcon.defaultProps = {
  className: "",
  src: "",
  ariaLabel: undefined,
  ariaHidden: undefined,
  replaceToCurrentColor: false,
  customColor: undefined
};

export default CustomSvgIcon;
