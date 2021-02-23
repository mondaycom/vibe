/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const TextSmall = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M11.4262 12.1731H8.56909L7.9274 14H7L9.60422 7H10.3911L13 14H12.0773L11.4262 12.1731ZM8.84075 11.4135H11.1593L9.99766 8.13942L8.84075 11.4135Z" fill="currentColor"
    />
  </svg>
);
TextSmall.displayName = 'TextSmall';
TextSmall.propTypes = {
  size: PropTypes.string
}
export default TextSmall;
/* tslint:enable */
/* eslint-enable */
