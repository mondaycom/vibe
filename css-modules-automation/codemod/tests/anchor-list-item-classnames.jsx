import PropTypes from "prop-types";
import classnames from "classnames";
import "./anchor-list-item-cx.scss";

export const AnchorListItem = ({ children }) => {
  return <li className={classnames("monday-storybook-anchor-list-item-classnames")}>{children}</li>;
};
AnchorListItem.propTypes = {
  children: PropTypes.element
};

AnchorListItem.defaultProps = {
  children: null
};
