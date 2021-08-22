/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Battery = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M14.25 12.5V12V8V7.5H3.5L3.5 12.5H14.25ZM2 7.5C2 6.67157 2.67157 6 3.5 6H14.5C15.2432 6 15.8602 6.54057 15.9793 7.25H17.5C18.1904 7.25 18.75 7.80964 18.75 8.5V11.5C18.75 12.1904 18.1904 12.75 17.5 12.75H15.9793C15.8602 13.4594 15.2432 14 14.5 14H3.5C2.67157 14 2 13.3284 2 12.5V7.5ZM16 11.25H17.25V8.75H16V11.25Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Battery.displayName = 'Battery';
Battery.propTypes = {
  size: PropTypes.string
}
export default Battery;
/* tslint:enable */
/* eslint-enable */
