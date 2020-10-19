/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ChevronUP = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M7.57535 5.57564L7.99961 5.9999L8.42387 5.57564C8.18956 5.34132 7.80966 5.34132 7.57535 5.57564ZM7.99961 6.84843L11.5753 10.4242C11.8097 10.6585 12.1896 10.6585 12.4239 10.4242C12.6582 10.1899 12.6582 9.80995 12.4239 9.57564L8.42387 5.57564L7.99961 5.9999L7.57535 5.57564L7.49219 5.6588C7.46296 5.68802 7.5156 5.63539 7.48631 5.66468L3.57534 9.57564C3.34103 9.80995 3.34103 10.1899 3.57534 10.4242C3.80966 10.6585 4.18956 10.6585 4.42387 10.4242L7.99961 6.84843Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
ChevronUP.displayName = 'ChevronUP';
ChevronUP.propTypes = {
  size: PropTypes.string
}
export default ChevronUP;
/* tslint:enable */
/* eslint-enable */
