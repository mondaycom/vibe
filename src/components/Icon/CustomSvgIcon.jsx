/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import SVG from "react-inlinesvg";
import "./CustomSvgIcon.scss";
import useIconScreenReaderAccessProps from "../../hooks/useIconScreenReaderAccessProps";

const CustomSvgIcon = ({
  className,
  src,
  onClick,
  clickable,
  ariaLabel,
  ariaHidden,
  replaceToCurrentColor,
  ...props
}) => {
  const screenReaderAccessProps = useIconScreenReaderAccessProps({
    isClickable: clickable,
    label: ariaLabel,
    isDecorationOnly: ariaHidden
  });

  const svgProcessor = useCallback(
    svg => {
      if (!replaceToCurrentColor) return svg;
      return svg.replace(/fill=".*?"/g, 'fill="currentColor"');
    },
    [replaceToCurrentColor]
  );

  return (
    <SVG
      {...screenReaderAccessProps}
      onClick={onClick}
      src={src}
      className={cx("monday-style-custom-svg-icon--wrapper", className)}
      preProcessor={svgProcessor}
      {...props}
    />
  );
};

CustomSvgIcon.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaHidden: PropTypes.bool,
  replaceToCurrentColor: PropTypes.bool
};
CustomSvgIcon.defaultProps = {
  className: "",
  src: "",
  ariaLabel: undefined,
  ariaHidden: undefined,
  replaceToCurrentColor: false
};

export default CustomSvgIcon;
