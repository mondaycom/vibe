import PropTypes from "prop-types";
import Divider from "../../Divider/Divider";
import "./MenuDivider.scss";

const MenuDivider = ({ classname }) => {
  return <Divider classname={`menu-child-divider ${classname}`} />;
};

MenuDivider.defaultProps = {
  classname: ""
};

MenuDivider.propTypes = {
  classname: PropTypes.string
};

MenuDivider.isMenuChild = true;

export default MenuDivider;
