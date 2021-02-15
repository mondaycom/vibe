/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const PushNotification = ({size, ...props}) => (
  <svg viewBox="0 0 28 24" fill="currentColor" width={ size || "28" } height={ size || "24" } {...props}>
    <path d="M26 1.62H2C1.72386 1.62 1.5 1.84385 1.5 2.11999V4.9701H26.5V2.11999C26.5 1.84385 26.2761 1.62 26 1.62ZM1.5 21.64V6.4701H26.5V21.64C26.5 21.9161 26.2761 22.14 26 22.14H2C1.72386 22.14 1.5 21.9161 1.5 21.64ZM2 0.119995C0.895431 0.119995 0 1.01542 0 2.11999V21.64C0 22.7446 0.895431 23.64 2 23.64H26C27.1046 23.64 28 22.7446 28 21.64V2.11999C28 1.01543 27.1046 0.119995 26 0.119995H2ZM4 8C3.44772 8 3 8.44772 3 9V13C3 13.5523 3.44772 14 4 14H24C24.5523 14 25 13.5523 25 13V9C25 8.44772 24.5523 8 24 8H4Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
PushNotification.displayName = 'PushNotification';
PushNotification.propTypes = {
  size: PropTypes.string
}
export default PushNotification;
/* tslint:enable */
/* eslint-enable */
