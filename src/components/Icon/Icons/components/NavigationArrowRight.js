/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const NavigationArrowRight = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <g clipPath="url(#clip0)">
      <path d="M0.29345 8.10645C0.29345 7.77507 0.562079 7.50645 0.89345 7.50645L13.5871 7.50645L8.70267 2.62206C8.46836 2.38775 8.46836 2.00785 8.70267 1.77353C8.93699 1.53922 9.31689 1.53922 9.5512 1.77353L15.4599 7.68218C15.6942 7.9165 15.6942 8.29639 15.4599 8.53071L9.5512 14.4394C9.31689 14.6737 8.93699 14.6737 8.70267 14.4394C8.46836 14.205 8.46836 13.8251 8.70267 13.5908L13.5871 8.70645L0.89345 8.70645C0.562079 8.70645 0.29345 8.43782 0.29345 8.10645Z"
        fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);
NavigationArrowRight.displayName = 'NavigationArrowRight';
NavigationArrowRight.propTypes = {
  size: PropTypes.string
}
export default NavigationArrowRight;
/* tslint:enable */
/* eslint-enable */
