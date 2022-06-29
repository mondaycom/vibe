import PropTypes from "prop-types";

export const UnstyledList = ({ children }) => {
  return <ul className="monday-storybook-unstyled-list">{children}</ul>;
};
UnstyledList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

UnstyledList.defaultProps = {
  children: null
};
