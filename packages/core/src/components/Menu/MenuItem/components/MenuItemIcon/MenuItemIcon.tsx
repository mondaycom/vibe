import React from "react";
import Icon from "../../../../Icon/Icon";
import Flex from "../../../../Flex/Flex";
import cx from "classnames";
import styles from "./MenuItemIcon.module.scss";
import { MenuItemIconProps } from "./MenuItemIcon.types";

const MenuItemIcon = ({
  icon,
  type,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  label,
  disabled,
  selected,
  backgroundColor,
  wrapperClassName
}: MenuItemIconProps) => (
  <Flex
    justify={Flex.justify.CENTER}
    className={cx(
      styles.iconWrapper,
      {
        [styles.disabled]: disabled,
        [styles.withBackgroundColor]: !!backgroundColor
      },
      wrapperClassName
    )}
    style={{ ...(backgroundColor && { backgroundColor }) }}
  >
    <Icon
      iconType={type || (typeof icon === "function" ? Icon.type.SVG : Icon.type.ICON_FONT)}
      clickable={false}
      icon={icon}
      className={cx(styles.icon, { [styles.selected]: !disabled && selected })}
      ignoreFocusStyle
      iconSize={18}
    />
  </Flex>
);

export default MenuItemIcon;
