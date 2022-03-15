import PropTypes from "prop-types";
import "./unstyled-list-item.scss";

export const UnstyledListItem = ({ children }) => {
  return <li className="monday-storybook-unstyled-list-item">{children}</li>;
};
UnstyledListItem.propTypes = {
  children: PropTypes.element
};

UnstyledListItem.defaultProps = {
  children: null
};
