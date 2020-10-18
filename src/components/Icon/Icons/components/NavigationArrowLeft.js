/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const NavigationArrowLeft = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <g clipPath="url(#clip0)">
      <path d="M15.6362 8.10645C15.6362 8.43782 15.3676 8.70645 15.0362 8.70645L2.34263 8.70644L7.22701 13.5908C7.46133 13.8251 7.46133 14.205 7.22701 14.4394C6.9927 14.6737 6.6128 14.6737 6.37848 14.4394L0.469837 8.53071C0.235522 8.29639 0.235522 7.91649 0.469837 7.68218L6.37849 1.77353C6.6128 1.53922 6.9927 1.53922 7.22701 1.77353C7.46133 2.00785 7.46133 2.38775 7.22701 2.62206L2.34263 7.50644L15.0362 7.50645C15.3676 7.50645 15.6362 7.77507 15.6362 8.10645Z"
        fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);
NavigationArrowLeft.displayName = 'NavigationArrowLeft';
NavigationArrowLeft.propTypes = {
  size: PropTypes.string
}
export default NavigationArrowLeft;
/* tslint:enable */
/* eslint-enable */
