import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";
import cx from "classnames";
import PropTypes from "prop-types";
import Divider from "../../Divider/Divider";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import styles from "./MenuDivider.module.scss";

const MenuDivider = ({
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
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.MENU_DIVIDER, id)}
    />
  );
};

MenuDivider.defaultProps = {
  className: undefined
};

MenuDivider.propTypes = {
  className: PropTypes.string
};

MenuDivider.isMenuChild = true;

export default MenuDivider;
