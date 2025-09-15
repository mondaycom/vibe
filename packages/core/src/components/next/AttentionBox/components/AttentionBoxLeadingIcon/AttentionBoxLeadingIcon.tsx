import React from "react";
import cx from "classnames";
import { Icon, type SubIcon, type IconType } from "@vibe/icon";
import styles from "./AttentionBoxLeadingIcon.module.scss";

export interface AttentionBoxLeadingIconProps {
  icon?: SubIcon;
  iconType?: IconType;
  className?: string;
}

const AttentionBoxLeadingIcon = ({ icon, iconType = "svg", className }: AttentionBoxLeadingIconProps) => {
  return <Icon icon={icon} iconType={iconType} iconSize={20} className={cx(styles.icon, className)} />;
};

export default AttentionBoxLeadingIcon;
