import PropTypes from "prop-types";

export const ComponentDescription = ({ description, children }) => (
  <div>
    <span>{description}</span>
    {children}
  </div>
);

ComponentDescription.propTypes = {
  description: PropTypes.string,
  children: PropTypes.element
};

ComponentDescription.defaultProps = {
  description: "",
  children: null
};
