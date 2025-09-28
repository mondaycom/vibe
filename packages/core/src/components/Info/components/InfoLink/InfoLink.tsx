import React, { forwardRef } from "react";
import cx from "classnames";
import { Link, type LinkProps } from "../../../Link";
import styles from "./InfoLink.module.scss";

export type InfoLinkProps = LinkProps;

const InfoLink = forwardRef(
  ({ className, ...linkProps }: InfoLinkProps, ref: React.ForwardedRef<HTMLAnchorElement>) => {
    return <Link ref={ref} className={cx(styles.infoLink, className)} {...linkProps} />;
  }
);

export default InfoLink;
