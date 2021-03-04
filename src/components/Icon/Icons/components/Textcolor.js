/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Textcolor = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M18 18L2 18 2 14 18 14V18zM9.7777 3.59425L9.77839 3.59573zM10 4.0739L13.8195 12.3154C13.9937 12.6912 14.4395 12.8546 14.8154 12.6805 15.1912 12.5063 15.3546 12.0604 15.1805 11.6846L11.1403 2.96706C11.1401 2.96669 11.14 2.96633 11.1398 2.96597 11.0364 2.74199 10.8687 2.56034 10.6664 2.43664 10.4642 2.31301 10.2326 2.25 10 2.25 9.76741 2.25 9.53583 2.31301 9.33363 2.43664 9.13132 2.56034 8.96358 2.74198 8.86021 2.96596 8.86004 2.96633 8.85987 2.96669 8.8597 2.96706L4.81952 11.6846C4.64535 12.0604 4.80882 12.5063 5.18463 12.6805 5.56045 12.8546 6.0063 12.6912 6.18047 12.3154L10 4.0739z"
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
