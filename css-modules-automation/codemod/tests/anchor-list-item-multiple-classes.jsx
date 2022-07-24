import PropTypes from "prop-types";
import "./anchor-list-item-multiple-classes.scss";

export const AnchorListItem = ({ children, className }) => {
  return (
    <li
      className={cx(
        "monday-storybook-anchor-list-item-multiple-classes-1",
        "monday-storybook-anchor-list-item-multiple-classes-2",
        className
      )}
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
