/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import SVG from "react-inlinesvg";
import "./CustomSvgIcon.scss";
import useIconScreenReaderAccessProps from "../../hooks/useIconScreenReaderAccessProps";

const CustomSvgIcon = ({ className, src, onClick, clickable, ariaLabel, ariaHidden, ...props }) => {
  const screenReaderAccessProps = useIconScreenReaderAccessProps({
    isClickable: clickable,
    label: ariaLabel,
    isDecorationOnly: ariaHidden
  });
  return (
    <SVG
      {...screenReaderAccessProps}
      onClick={onClick}
      src={src}
      className={cx("monday-style-custom-svg-icon--wrapper", className)}
      {...props}
    />
  );
};

CustomSvgIcon.defaultProps = {
  className: PropTypes.string,
  src: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaHidden: PropTypes.bool
};
CustomSvgIcon.propTypes = {
  className: "",
  src: "",
  ariaLabel: undefined,
  ariaHidden: false
};

export default CustomSvgIcon;
