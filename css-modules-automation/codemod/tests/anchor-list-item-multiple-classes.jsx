import PropTypes from "prop-types";
import "./anchor-list-item-multiple-classes.scss";
import cx from "classnames";

export const AnchorListItem = ({ children, className }) => {
  return <li className={cx("class-1 class-2", "class-3", className)}>{children}</li>;
};
AnchorListItem.propTypes = {
  children: PropTypes.element
};

AnchorListItem.defaultProps = {
  children: null
};
