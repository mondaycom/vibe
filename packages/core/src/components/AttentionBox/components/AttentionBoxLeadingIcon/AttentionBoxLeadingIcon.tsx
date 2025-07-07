import React from "react";
import { Icon } from "../../../Icon";
import { SubIcon } from "../../../../types";
import { IconType } from "../../../Icon/Icon.types";
import styles from "./AttentionBoxLeadingIcon.module.scss";

export interface AttentionBoxLeadingIconProps {
  icon?: SubIcon;
  iconType?: IconType;
}

const AttentionBoxLeadingIcon = ({ icon, iconType = "svg" }: AttentionBoxLeadingIconProps) => {
  if (!icon) {
    return null;
  }

  return <Icon icon={icon} iconType={iconType} iconSize={20} className={styles.icon} />;
};

export default AttentionBoxLeadingIcon;
