import React from "react";
import cx from "classnames";
import { Icon } from "../../../../Icon";
import { SubIcon } from "../../../../../types";
import { IconType } from "../../../../Icon/Icon.types";
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
