/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ChevronLeft = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M5.57613 8.42417L6.00039 7.9999L5.57613 7.57564C5.34181 7.80995 5.34181 8.18985 5.57613 8.42417ZM6.84892 7.9999L10.4247 4.42417C10.659 4.18985 10.659 3.80995 10.4247 3.57564C10.1903 3.34132 9.81044 3.34132 9.57613 3.57564L5.57613 7.57564L6.00039 7.9999L5.57613 8.42417L5.65928 8.50732C5.68851 8.53655 5.63588 8.48392 5.66516 8.5132L9.57613 12.4242C9.81044 12.6585 10.1903 12.6585 10.4247 12.4242C10.659 12.1899 10.659 11.81 10.4247 11.5756L6.84892 7.9999Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
ChevronLeft.displayName = 'ChevronLeft';
ChevronLeft.propTypes = {
  size: PropTypes.string
}
export default ChevronLeft;
/* tslint:enable */
/* eslint-enable */
