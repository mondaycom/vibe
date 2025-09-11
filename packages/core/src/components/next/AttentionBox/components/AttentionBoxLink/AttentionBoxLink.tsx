import React, { forwardRef } from "react";
import cx from "classnames";
import { Link } from "../../../../Link";
import type { LinkProps } from "../../../../Link";
import styles from "./AttentionBoxLink.module.scss";

export type AttentionBoxLinkProps = LinkProps;

const AttentionBoxLink = forwardRef(
  ({ target, className, ...linkProps }: AttentionBoxLinkProps, ref: React.ForwardedRef<HTMLAnchorElement>) => {
    return <Link ref={ref} target={target} className={cx(styles.attentionBoxLink, className)} {...linkProps} />;
  }
);

export default AttentionBoxLink;
