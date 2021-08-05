/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const MoreActions = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M6.53033 4.46967C6.23744 4.17678 5.76256 4.17678 5.46967 4.46967C5.17678 4.76256 5.17678 5.23744 5.46967 5.53033L9.46967 9.53033C9.76256 9.82322 10.2374 9.82322 10.5303 9.53033L14.5303 5.53033C14.8232 5.23744 14.8232 4.76256 14.5303 4.46967C14.2374 4.17678 13.7626 4.17678 13.4697 4.46967L10 7.93934L6.53033 4.46967ZM6.53033 10.4697C6.23744 10.1768 5.76256 10.1768 5.46967 10.4697C5.17678 10.7626 5.17678 11.2374 5.46967 11.5303L9.46967 15.5303C9.76256 15.8232 10.2374 15.8232 10.5303 15.5303L14.5303 11.5303C14.8232 11.2374 14.8232 10.7626 14.5303 10.4697C14.2374 10.1768 13.7626 10.1768 13.4697 10.4697L10 13.9393L6.53033 10.4697Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
MoreActions.displayName = 'MoreActions';
MoreActions.propTypes = {
  size: PropTypes.string
}
export default MoreActions;
/* tslint:enable */
/* eslint-enable */
