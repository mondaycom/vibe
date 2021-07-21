/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import cx from "classnames";
import Link from "../../Link/Link";
import "./ToastLink.scss";

const ToastLink = ({ className, ...linkProps }) => {
  const classNames = cx("monday-style-toast-action_link", className);
  return <Link {...linkProps} componentClassName={classNames} />;
};

// eslint-disable-next-line no-unused-vars
const { componentClassName: _componentClassNamePropsType, ...linkPropsTypes } = Link.propTypes;
ToastLink.propTypes = {
  ...linkPropsTypes
};

// eslint-disable-next-line no-unused-vars
const { componentClassName: _componentClassNameDefaultProp, ...linkDefaultPropTypes } = Link.defaultProps;
ToastLink.defaultProps = {
  ...linkDefaultPropTypes
};

export default ToastLink;
