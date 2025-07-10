import React from "react";
import cx from "classnames";
import { Icon } from "../../../Icon";
import { SubIcon } from "../../../../types";
import { IconType } from "../../../Icon/Icon.types";
import styles from "./AttentionBoxLeadingIcon.module.scss";

export interface AttentionBoxLeadingIconProps {
  icon?: SubIcon;
  iconType?: IconType;
  compact?: boolean;
  multiline?: boolean;
}

const AttentionBoxLeadingIcon = ({
  icon,
  iconType = "svg",
  compact = false,
  multiline = false
}: AttentionBoxLeadingIconProps) => {
  if (!icon) {
    return null;
  }

  return (
    <Icon
      icon={icon}
      iconType={iconType}
      iconSize={20}
      className={cx(styles.icon, { [styles.compactMultiline]: compact && multiline })}
    />
  );
};

export default AttentionBoxLeadingIcon;
