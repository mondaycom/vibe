/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Folder = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V16.8571C2.25 17.2714 2.58579 17.6071 3 17.6071H16.8571C17.2714 17.6071 17.6071 17.2714 17.6071 16.8571V3C17.6071 2.58579 17.2714 2.25 16.8571 2.25H3ZM3.75 16.1071V3.75H16.1071V16.1071H3.75ZM10.5303 12.5303C10.2374 12.8232 9.76256 12.8232 9.46967 12.5303L9.46797 12.5286L6.46967 9.53033C6.17678 9.23744 6.17678 8.76256 6.46967 8.46967C6.76256 8.17678 7.23744 8.17678 7.53033 8.46967L10 10.9393L12.4697 8.46967C12.7626 8.17678 13.2374 8.17678 13.5303 8.46967C13.8232 8.76256 13.8232 9.23744 13.5303 9.53033L11.1947 11.8659L11.1903 11.8704L10.5303 12.5303Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Folder.displayName = 'Folder';
Folder.propTypes = {
  size: PropTypes.string
}
export default Folder;
/* tslint:enable */
/* eslint-enable */
