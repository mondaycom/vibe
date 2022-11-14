/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from "react";
import cx from "classnames";
import Link, { LinkProps } from "../../Link/Link";
import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";
import styles from "./ToastLink.module.scss";

export type ToastLinkProps = LinkProps;

const ToastLink: FC<ToastLinkProps> = ({ className, id, "data-testid": dataTestId, ...linkProps }) => {
  const classNames = cx(styles.actionLink, "monday-style-toast-action_link", className);
  return (
    <Link
      {...linkProps}
      componentClassName={classNames}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.TOAST_LINK, id)}
    />
  );
};

export default ToastLink;
