import React from 'react';
import PropTypes from 'prop-types';

export const UnstyledList = ({ children }) => <ul className="vibe-sb-comps-unstyled-list">{children}</ul>;
UnstyledList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

UnstyledList.defaultProps = {
  children: null,
};

export default UnstyledList;
