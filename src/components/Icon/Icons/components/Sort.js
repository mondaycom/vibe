/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Sort = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M13.9697 7.53033C14.2626 7.82322 14.7374 7.82322 15.0303 7.53033C15.3232 7.23744 15.3232 6.76256 15.0303 6.46967L11.0303 2.46967C10.7374 2.17678 10.2626 2.17678 9.96967 2.46967L5.96967 6.46967C5.67678 6.76256 5.67678 7.23744 5.96967 7.53033C6.26256 7.82322 6.73744 7.82322 7.03033 7.53033L10.5 4.06066L13.9697 7.53033ZM15.0303 13.3875C15.3232 13.0946 15.3232 12.6197 15.0303 12.3268C14.7374 12.0339 14.2626 12.0339 13.9697 12.3268L10.5 15.7965L7.03033 12.3268C6.73744 12.0339 6.26256 12.0339 5.96967 12.3268C5.67678 12.6197 5.67678 13.0946 5.96967 13.3875L9.96967 17.3875C10.2626 17.6804 10.7374 17.6804 11.0303 17.3875L15.0303 13.3875Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Sort.displayName = 'Sort';
Sort.propTypes = {
  size: PropTypes.string
}
export default Sort;
/* tslint:enable */
/* eslint-enable */
