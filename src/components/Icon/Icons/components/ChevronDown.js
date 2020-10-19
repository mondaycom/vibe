/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ChevronDown = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M8.42465 10.4244L8.00039 10.0001L7.57613 10.4244C7.81044 10.6587 8.19034 10.6587 8.42465 10.4244ZM8.00039 9.15157L4.42465 5.57583C4.19034 5.34152 3.81044 5.34152 3.57613 5.57583C3.34181 5.81015 3.34181 6.19005 3.57613 6.42436L7.57613 10.4244L8.00039 10.0001L8.42465 10.4244L8.50781 10.3412C8.53704 10.312 8.4844 10.3646 8.51369 10.3353L12.4247 6.42436C12.659 6.19005 12.659 5.81015 12.4247 5.57583C12.1903 5.34152 11.8104 5.34152 11.5761 5.57583L8.00039 9.15157Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
ChevronDown.displayName = 'ChevronDown';
ChevronDown.propTypes = {
  size: PropTypes.string
}
export default ChevronDown;
/* tslint:enable */
/* eslint-enable */
