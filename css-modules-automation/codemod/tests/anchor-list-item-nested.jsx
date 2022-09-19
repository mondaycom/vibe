import PropTypes from "prop-types";
import "./anchor-list-item-nested.scss";

export const AnchorListItem = ({ children }) => {
  return <li className="a">{children}</li>;
};
AnchorListItem.propTypes = {
  children: PropTypes.element
};

AnchorListItem.defaultProps = {
  children: null
};
