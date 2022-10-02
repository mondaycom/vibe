/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import cx from "classnames";
import Link, {LinkProps} from "../../Link/Link";
import "./ToastLink.scss";


const ToastLink = ({ className, ...linkProps }: LinkProps) => {
  const classNames = cx("monday-style-toast-action_link", className);
  return <Link {...linkProps} componentClassName={classNames} />;
};

export default ToastLink;
