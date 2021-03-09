import PropTypes from "prop-types";
import Divider from "../../Divider/Divider";
import "./MenuDevider.scss";

const MenuDevider = ({ classname }) => {
  return <Divider classname={`menu-child-devider ${classname}`} />;
};

MenuDevider.defaultProps = {
  classname: ""
};

MenuDevider.propTypes = {
  classname: PropTypes.string
};

MenuDevider.isMenuChild = true;

export default MenuDevider;
