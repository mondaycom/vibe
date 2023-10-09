import React from 'react';
import PropTypes from 'prop-types';

const ComponentDescription = ({ description, children }) => (
  <div>
    <span>{description}</span>
    {children}
  </div>
);

ComponentDescription.propTypes = {
  description: PropTypes.string,
  children: PropTypes.element,
};

ComponentDescription.defaultProps = {
  description: '',
  children: null,
};

export default ComponentDescription;
