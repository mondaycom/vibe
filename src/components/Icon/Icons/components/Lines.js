/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Lines = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M16.8 5H2.79999M16.8 10H2.79999M16.8 15H2.79999" stroke="#323338" fill="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
Lines.displayName = 'Lines';
Lines.propTypes = {
  size: PropTypes.string
}
export default Lines;
/* tslint:enable */
/* eslint-enable */
