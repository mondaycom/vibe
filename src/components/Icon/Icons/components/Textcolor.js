/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Textcolor = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2.25 17C2.25 16.5858 2.58579 16.25 3 16.25H17C17.4142 16.25 17.75 16.5858 17.75 17C17.75 17.4142 17.4142 17.75 17 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17Z"
      fill="currentColor" className="highlight-bar" fillRule="evenodd" clipRule="evenodd" />
    <path d="M9.82871 3.62543L9.82929 3.62668ZM10 3.99504L14.3195 13.3154C14.4937 13.6912 14.9396 13.8546 15.3154 13.6805C15.6912 13.5063 15.8546 13.0604 15.6805 12.6846L11.1913 2.99824C11.1911 2.99788 11.191 2.99752 11.1908 2.99716C11.0832 2.76392 10.9083 2.57439 10.6969 2.44514C10.4857 2.31597 10.2435 2.25 10 2.25C9.75654 2.25 9.51433 2.31597 9.30307 2.44514C9.09169 2.57439 8.91684 2.76392 8.80921 2.99716C8.80904 2.99752 8.80888 2.99788 8.80871 2.99824L4.31953 12.6846C4.14536 13.0604 4.30882 13.5063 4.68463 13.6805C5.06045 13.8546 5.5063 13.6912 5.68047 13.3154L10 3.99504Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M6.25 9C6.25 8.58579 6.58579 8.25 7 8.25H13C13.4142 8.25 13.75 8.58579 13.75 9C13.75 9.41421 13.4142 9.75 13 9.75H7C6.58579 9.75 6.25 9.41421 6.25 9Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Textcolor.displayName = 'Textcolor';
Textcolor.propTypes = {
  size: PropTypes.string
}
export default Textcolor;
/* tslint:enable */
/* eslint-enable */
