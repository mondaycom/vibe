import React from "react";
import { Icon } from "../../../Icon";
import { SubIcon } from "../../../../types";
import styles from "./AttentionBoxLeadingIcon.module.scss";

export interface AttentionBoxLeadingIconProps {
  icon?: SubIcon;
}

const AttentionBoxLeadingIcon = ({ icon }: AttentionBoxLeadingIconProps) => {
  if (!icon) {
    return null;
  }

  return <Icon icon={icon} iconSize={20} className={styles.icon} />;
};

export default AttentionBoxLeadingIcon;
