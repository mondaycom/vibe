/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ChevronRight = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M10.4239 7.57583L9.99961 8.0001L10.4239 8.42436C10.6582 8.19005 10.6582 7.81015 10.4239 7.57583ZM9.15108 8.0001L5.57534 11.5758C5.34103 11.8101 5.34103 12.19 5.57535 12.4244C5.80966 12.6587 6.18956 12.6587 6.42387 12.4244L10.4239 8.42436L9.99961 8.0001L10.4239 7.57583L10.3407 7.49268C10.3115 7.46345 10.3641 7.51608 10.3348 7.4868L6.42387 3.57583C6.18956 3.34152 5.80966 3.34152 5.57534 3.57583C5.34103 3.81015 5.34103 4.19005 5.57534 4.42436L9.15108 8.0001Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
ChevronRight.displayName = 'ChevronRight';
ChevronRight.propTypes = {
  size: PropTypes.string
}
export default ChevronRight;
/* tslint:enable */
/* eslint-enable */
