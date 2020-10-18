/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ArrowUP = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M7.57535 4.57564L7.99961 4.9999L8.42387 4.57564C8.18956 4.34132 7.80966 4.34132 7.57535 4.57564ZM7.99961 5.84843L1.42387 12.4242C1.18956 12.6585 0.809661 12.6585 0.575346 12.4242C0.341031 12.1899 0.341031 11.81 0.575346 11.5756L7.57535 4.57564L7.99961 4.9999L8.42387 4.57564L15.4239 11.5756C15.6582 11.81 15.6582 12.1899 15.4239 12.4242C15.1896 12.6585 14.8097 12.6585 14.5753 12.4242L7.99961 5.84843Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
ArrowUP.displayName = 'ArrowUP';
ArrowUP.propTypes = {
  size: PropTypes.string
}
export default ArrowUP;
/* tslint:enable */
/* eslint-enable */
