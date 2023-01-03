import cx from "classnames";
import Divider from "../../Divider/Divider";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import { VibeComponentProps } from "../../../types";
import { FC } from "react";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import styles from "./MenuDivider.module.scss";

interface MenuDividerProps extends VibeComponentProps {
  /** Backward compatibility for props naming **/
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
      classname={cx(styles.divider, "menu-child-divider", overrideClassName)}
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.MENU_DIVIDER, id)}
    />
  );
};

Object.assign(MenuDivider, {
  isMenuChild: true
});

export default MenuDivider;
