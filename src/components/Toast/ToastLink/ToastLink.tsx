/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from "react";
import cx from "classnames";
import Link, { LinkProps } from "../../Link/Link";
import "./ToastLink.scss";

export type ToastLinkProps = LinkProps;

const ToastLink: FC<ToastLinkProps> = ({ className, ...linkProps }) => {
  const classNames = cx("monday-style-toast-action_link", className);
  return <Link {...linkProps} componentClassName={classNames} />;
};

export default ToastLink;
