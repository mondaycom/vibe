/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import cx from "classnames";
import Link, { LinkProps } from "../../Link/Link";
import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";
import styles from "./ToastLink.module.scss";

const ToastLink = ({ className, id, "data-testid": dataTestId, ...linkProps }: LinkProps) => {
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
