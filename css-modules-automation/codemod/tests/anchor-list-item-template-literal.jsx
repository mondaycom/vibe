import PropTypes from "prop-types";
import cx from "classnames";
import "./anchor-list-item-template-literal.scss";

export const AnchorListItem = ({ children }) => {
  const type = "template-literal";
  return <li className={cx(`monday-style-anchor-list-item-${type} a`)}>{children}</li>;
};
AnchorListItem.propTypes = {
  children: PropTypes.element
};

AnchorListItem.defaultProps = {
  children: null
};
