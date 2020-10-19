/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ArrowRight = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M11.9239 7.57583L11.4996 8.0001L11.9239 8.42436C12.1582 8.19005 12.1582 7.81015 11.9239 7.57583ZM10.6511 8.0001L4.07534 1.42436C3.84103 1.19005 3.84103 0.810149 4.07534 0.575834C4.30966 0.341519 4.68956 0.341519 4.92387 0.575834L11.9239 7.57583L11.4996 8.0001L11.9239 8.42436L4.92387 15.4244C4.68956 15.6587 4.30966 15.6587 4.07535 15.4244C3.84103 15.19 3.84103 14.8101 4.07534 14.5758L10.6511 8.0001Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
ArrowRight.displayName = 'ArrowRight';
ArrowRight.propTypes = {
  size: PropTypes.string
}
export default ArrowRight;
/* tslint:enable */
/* eslint-enable */
