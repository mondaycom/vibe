/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Expand = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.5303 2.46967C10.2374 2.17678 9.76256 2.17678 9.46967 2.46967L5.46967 6.46967C5.17678 6.76256 5.17678 7.23744 5.46967 7.53033C5.76256 7.82322 6.23744 7.82322 6.53033 7.53033L9.25 4.81066V15.1893L6.53033 12.4697C6.23744 12.1768 5.76256 12.1768 5.46967 12.4697C5.17678 12.7626 5.17678 13.2374 5.46967 13.5303L9.46967 17.5303C9.76256 17.8232 10.2374 17.8232 10.5303 17.5303L14.5303 13.5303C14.8232 13.2374 14.8232 12.7626 14.5303 12.4697C14.2374 12.1768 13.7626 12.1768 13.4697 12.4697L10.75 15.1893V4.81066L13.4697 7.53033C13.7626 7.82322 14.2374 7.82322 14.5303 7.53033C14.8232 7.23744 14.8232 6.76256 14.5303 6.46967L10.5303 2.46967Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Expand.displayName = 'Expand';
Expand.propTypes = {
  size: PropTypes.string
}
export default Expand;
/* tslint:enable */
/* eslint-enable */
