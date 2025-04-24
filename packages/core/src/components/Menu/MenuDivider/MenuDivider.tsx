import React from "react";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import cx from "classnames";
import Divider from "../../Divider/Divider";
import { VibeComponentProps } from "../../../types";
import styles from "./MenuDivider.module.scss";

export type MenuDividerProps = VibeComponentProps;

const MenuDivider = ({ className, id, "data-testid": dataTestId }: MenuDividerProps) => {
  return (
    <Divider
      className={cx(styles.menuChildDivider, className)}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.MENU_DIVIDER, id)}
    />
  );
};

Object.assign(MenuDivider, {
  isMenuChild: true
});

export default MenuDivider;
