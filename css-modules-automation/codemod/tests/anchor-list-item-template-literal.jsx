import PropTypes from "prop-types";
import cx from "classnames";
import "./anchor-list-item-template-literal.scss";

export const AnchorListItem = ({ children }) => {
  const type = "template-literal";
  const test = "test";
  return (
    <li
      className={cx(`monday-style-anchor-list-item-${type} a`, {
        [`monday-style-anchor-list-item-${type}`]: true,
        [`monday-style-anchor-list-item-${test}`]: false
      })}
    >
      {children}
    </li>
  );
};
AnchorListItem.propTypes = {
  children: PropTypes.element
};

AnchorListItem.defaultProps = {
  children: null
};
