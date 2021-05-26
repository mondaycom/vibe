/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Email = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M3 4.25C2.58579 4.25 2.25 4.58579 2.25 5V15C2.25 15.4142 2.58579 15.75 3 15.75H17C17.4142 15.75 17.75 15.4142 17.75 15V5C17.75 4.58579 17.4142 4.25 17 4.25H3ZM3.75 6.71589V14.25H16.25V6.71591L11.802 10.1371C11.2854 10.5346 10.6518 10.75 10 10.75C9.3482 10.75 8.71468 10.5346 8.19805 10.1371L3.75 6.71589ZM15.0455 5.75H4.95456L9.1126 8.94818L9.11265 8.94821C9.36706 9.14393 9.67903 9.25004 10 9.25004C10.321 9.25004 10.633 9.14393 10.8874 8.94821L10.8874 8.94818L15.0455 5.75Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Email.displayName = 'Email';
Email.propTypes = {
  size: PropTypes.string
}
export default Email;
/* tslint:enable */
/* eslint-enable */
