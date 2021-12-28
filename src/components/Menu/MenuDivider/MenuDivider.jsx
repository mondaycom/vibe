import PropTypes from "prop-types";
import Divider from "../../Divider/Divider";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import "./MenuDivider.scss";

const MenuDivider = ({
  // Backward compatibility for props naming
  classname,
  className
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, classname]);
  return <Divider classname={`menu-child-divider ${overrideClassName}`} />;
};

MenuDivider.defaultProps = {
  className: undefined
};

MenuDivider.propTypes = {
  className: PropTypes.string
};

MenuDivider.isMenuChild = true;

export default MenuDivider;
