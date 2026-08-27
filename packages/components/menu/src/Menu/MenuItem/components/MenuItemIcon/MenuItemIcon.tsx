import React from "react";
import { Icon } from "@vibe/icon";
import { Flex } from "@vibe/layout";
import cx from "classnames";
import styles from "./MenuItemIcon.module.scss";
import { type MenuItemIconProps } from "./MenuItemIcon.types";

const MenuItemIcon = ({
  icon,
  isRightIcon = false,
  type,
  disabled,
  selected,
  backgroundColor,
  wrapperClassName
}: MenuItemIconProps) => (
  <Flex
    justify="center"
    className={cx(
      styles.iconWrapper,
      {
        [styles.rightIcon]: isRightIcon,
        [styles.disabled]: disabled,
        [styles.withBackgroundColor]: !!backgroundColor
      },
      wrapperClassName
    )}
    style={{ ...(backgroundColor && { backgroundColor }) }}
  >
    <Icon
      type={type || (typeof icon === "function" ? "svg" : "font")}
      icon={icon}
      className={cx(styles.icon, { [styles.selected]: !disabled && selected })}
      ignoreFocusStyle
      size={18}
    />
  </Flex>
);

export default MenuItemIcon;
