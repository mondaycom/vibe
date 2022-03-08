/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Deactivate = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C8.47546 16.5 7.0735 15.9751 5.96497 15.0963L15.0964 5.96512C15.9752 7.07363 16.5 8.47552 16.5 10ZM4.90424 14.0357L14.0358 4.90436C12.9272 4.02511 11.5249 3.5 10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 11.5248 4.02506 12.927 4.90424 14.0357ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Deactivate.displayName = 'Deactivate';
Deactivate.propTypes = {
  size: PropTypes.string
}
export default Deactivate;
/* tslint:enable */
/* eslint-enable */
