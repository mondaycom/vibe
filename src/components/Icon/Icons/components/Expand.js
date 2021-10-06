/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Expand = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10 16.4988V4M6 13L10 17 14 13M6 7L10 3 14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
Expand.displayName = 'Expand';
Expand.propTypes = {
  size: PropTypes.string
}
export default Expand;
/* tslint:enable */
/* eslint-enable */
