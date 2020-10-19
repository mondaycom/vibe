/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ArrowDown = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M8.42465 12.4244L8.00039 12.0001L7.57613 12.4244C7.81044 12.6587 8.19034 12.6587 8.42465 12.4244ZM8.00039 11.1516L14.5761 4.57583C14.8104 4.34152 15.1903 4.34152 15.4247 4.57583C15.659 4.81015 15.659 5.19005 15.4247 5.42436L8.42465 12.4244L8.00039 12.0001L7.57613 12.4244L0.576127 5.42436C0.341812 5.19005 0.341812 4.81015 0.576127 4.57583C0.810441 4.34152 1.19034 4.34152 1.42465 4.57583L8.00039 11.1516Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
ArrowDown.displayName = 'ArrowDown';
ArrowDown.propTypes = {
  size: PropTypes.string
}
export default ArrowDown;
/* tslint:enable */
/* eslint-enable */
