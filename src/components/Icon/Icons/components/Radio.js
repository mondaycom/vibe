/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Radio = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <rect x=".75" y=".75" width="14.5" height="14.5" rx="7.25" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="8" cy="8" r="3" fill="currentColor" />
  </svg>
);
Radio.displayName = 'Radio';
Radio.propTypes = {
  size: PropTypes.string
}
export default Radio;
/* tslint:enable */
/* eslint-enable */
