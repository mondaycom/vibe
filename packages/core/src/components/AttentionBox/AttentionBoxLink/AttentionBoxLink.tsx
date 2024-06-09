import React from "react";
import styles from "./AttentionBoxLink.module.scss";
import Link, { LinkProps } from "../../Link/Link";
import cx from "classnames";

export type AttentionBoxLinkProps = LinkProps;

const AttentionBoxLink: React.FC<AttentionBoxLinkProps> = ({
  href,
  text,
  // TODO: use Link's target default in next major
  // For backward compatibility - using _self as default
  target = Link.target.SELF,
  className,
  ...linkProps
}) => {
  return (
    <Link className={cx(styles.attentionBoxLink, className)} href={href} text={text} target={target} {...linkProps} />
  );
};

export default AttentionBoxLink;
