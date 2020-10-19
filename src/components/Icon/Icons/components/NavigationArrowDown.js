/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const NavigationArrowDown = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <g clipPath="url(#clip0)">
      <path d="M7.96484 0.43554C8.29621 0.43554 8.56484 0.704169 8.56484 1.03554L8.56484 13.7291L13.4492 8.84476C13.6835 8.61045 14.0634 8.61045 14.2978 8.84476C14.5321 9.07908 14.5321 9.45898 14.2978 9.69329L8.38911 15.6019C8.15479 15.8363 7.77489 15.8363 7.54058 15.6019L1.63193 9.69329C1.39762 9.45898 1.39762 9.07908 1.63193 8.84476C1.86625 8.61045 2.24615 8.61045 2.48046 8.84476L7.36484 13.7291L7.36484 1.03554C7.36484 0.704169 7.63347 0.43554 7.96484 0.43554Z"
        fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);
NavigationArrowDown.displayName = 'NavigationArrowDown';
NavigationArrowDown.propTypes = {
  size: PropTypes.string
}
export default NavigationArrowDown;
/* tslint:enable */
/* eslint-enable */
