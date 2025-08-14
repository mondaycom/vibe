/* eslint-disable react/jsx-props-no-spreading */
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import cx from "classnames";
import React, { type FC } from "react";
import Link, { type LinkProps } from "../../Link/Link";
import styles from "./ToastLink.module.scss";

export type ToastLinkProps = LinkProps;

const ToastLink: FC<ToastLinkProps> = ({ className, id, "data-testid": dataTestId, ...linkProps }) => {
  const classNames = cx(styles.actionLink, className);
  return (
    <Link
      {...linkProps}
      className={classNames}
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.TOAST_LINK, id)}
    />
  );
};

export default ToastLink;
