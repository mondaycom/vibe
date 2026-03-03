import React from "react";
import cx from "classnames";
import { Icon, type SubIcon } from "@vibe/icon";
import styles from "./AttentionBoxLeadingIcon.module.scss";

export interface AttentionBoxLeadingIconProps {
  icon?: SubIcon;
  className?: string;
}

const AttentionBoxLeadingIcon = ({ icon, className }: AttentionBoxLeadingIconProps) => {
  return <Icon icon={icon} size={20} className={cx(styles.icon, className)} />;
};

export default AttentionBoxLeadingIcon;
