import PropTypes from "prop-types";
import "./anchor-list-item.scss";

export const AnchorListItem = ({ children }) => {
  return <li className="monday-storybook-anchor-list-item">{children}</li>;
};
AnchorListItem.propTypes = {
  children: PropTypes.element
};

AnchorListItem.defaultProps = {
  children: null
};
