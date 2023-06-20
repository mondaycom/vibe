import PropTypes from "prop-types";
import "./anchor-list-item-const-base-class.scss";

const ANCHOR_LIST_ITEM_CSS_BASE_CLASS = "monday-style-anchor-list-item-const-base-class";

export const AnchorListItem = ({ children }) => {
  return (
    <li className={`${ANCHOR_LIST_ITEM_CSS_BASE_CLASS}--disabled`}>
      <div className={`before--${ANCHOR_LIST_ITEM_CSS_BASE_CLASS}--after`}>{children}</div>
    </li>
  );
};
AnchorListItem.propTypes = {
  children: PropTypes.element
};

AnchorListItem.defaultProps = {
  children: null
};
