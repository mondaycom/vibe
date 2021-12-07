/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const TextMedium = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M11.9681 12.2787L12.9635 15H14.3743L14.3743 15H12.9636L11.9681 12.2786H7.59965L7.59964 12.2787H11.9681ZM9.18232 4.57293L5.20056 15H6.61846L6.61845 15H5.20049L9.18226 4.57293H9.18232ZM6.69205 15.1048L7.67317 12.3834H11.8948L12.8903 15.1048H14.5266L10.4575 4.46817H9.11012L5.04834 15.1048H6.69205ZM11.5599 11.1471L9.78385 6.27029L9.78389 6.27017L11.5599 11.1471H11.5599ZM11.4102 11.0424H8.16438L9.78402 6.5769L11.4102 11.0424Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
TextMedium.displayName = 'TextMedium';
TextMedium.propTypes = {
  size: PropTypes.string
}
export default TextMedium;
/* tslint:enable */
/* eslint-enable */
