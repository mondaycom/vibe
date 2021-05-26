/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Divider = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2.96484 9.57129C2.96484 9.15708 3.30063 8.82129 3.71484 8.82129H16.2863C16.7005 8.82129 17.0363 9.15708 17.0363 9.57129C17.0363 9.9855 16.7005 10.3213 16.2863 10.3213H3.71484C3.30063 10.3213 2.96484 9.9855 2.96484 9.57129Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Divider.displayName = 'Divider';
Divider.propTypes = {
  size: PropTypes.string
}
export default Divider;
/* tslint:enable */
/* eslint-enable */
