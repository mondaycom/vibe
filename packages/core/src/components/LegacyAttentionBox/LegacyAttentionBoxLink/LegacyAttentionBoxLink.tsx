import React from "react";
import styles from "./LegacyAttentionBoxLink.module.scss";
import Link, { LinkProps } from "../../Link/Link";
import cx from "classnames";

export type LegacyAttentionBoxLinkProps = LinkProps;

const LegacyAttentionBoxLink = ({
  href,
  text,
  // TODO: use Link's target default in next major
  // For backward compatibility - using _self as default
  target = "_self",
  className,
  ...linkProps
}: LegacyAttentionBoxLinkProps) => {
  return (
    <Link className={cx(styles.attentionBoxLink, className)} href={href} text={text} target={target} {...linkProps} />
  );
};

Object.assign(LegacyAttentionBoxLink, {
  displayName: "AttentionBoxLink"
});

export default LegacyAttentionBoxLink;
