import React, { useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { TYPES } from "./HeadingConstants";
import "./Heading.scss";

const Heading = ({ className, text, type, ariaLabel, id, ellipsis, ellipsisMaxLines }) => {
  const componentRef = useRef(null);
  const classNames = cx("heading-component", className, `heading-element-type-${type}`, {
    "heading-element-ellipsis": ellipsis
  });
  const Element = React.createElement(
    type,
    { className: classNames, "aria-label": ariaLabel, id, ref: componentRef },
    text
  );

  useLayoutEffect(() => {
    componentRef.current.style.setProperty("--heading-clamp-lines", ellipsisMaxLines);
  }, [componentRef, ellipsisMaxLines]);

  return Element;
};

Heading.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(TYPES)),
  ariaLabel: PropTypes.string,
  id: PropTypes.string,
  ellipsis: PropTypes.bool,
  ellipsisMaxLines: PropTypes.number
};
Heading.defaultProps = {
  className: "",
  type: TYPES.H1,
  ariaLabel: "",
  id: "",
  ellipsis: true,
  ellipsisMaxLines: 1
};

export default Heading;
