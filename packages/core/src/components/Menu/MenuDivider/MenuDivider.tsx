import React from "react";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import cx from "classnames";
import Divider from "../../Divider/Divider";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import { VibeComponentProps } from "../../../types";
import { FC } from "react";
import styles from "./MenuDivider.module.scss";

export interface MenuDividerProps extends VibeComponentProps {
  /**
   * @deprecated - use className instead
   */
  classname?: string;
}

const MenuDivider: FC<MenuDividerProps> & { isMenuChild?: boolean } = ({
  // Backward compatibility for props naming
  classname,
  className,
  id,
  "data-testid": dataTestId
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, classname]);
  return (
    <Divider
      className={cx(styles.menuChildDivider, overrideClassName)}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.MENU_DIVIDER, id)}
    />
  );
};

Object.assign(MenuDivider, {
  isMenuChild: true
});

export default MenuDivider;
