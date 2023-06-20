import PropTypes from "prop-types";
import cx from "classnames";
import "./anchor-list-item-cx.scss";

export const AnchorListItem = ({ children }) => {
  return <li className={cx("monday-style-anchor-list-item-cx")}>{children}</li>;
};
AnchorListItem.propTypes = {
  children: PropTypes.element
};

AnchorListItem.defaultProps = {
  children: null
};
