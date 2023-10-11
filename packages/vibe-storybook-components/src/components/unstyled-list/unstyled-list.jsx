import React from 'react';
import PropTypes from 'prop-types';

const UnstyledList = ({ children }) => <ul>{children}</ul>;

UnstyledList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

UnstyledList.defaultProps = {
  children: null,
};

export default UnstyledList;
