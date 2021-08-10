/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const LongText = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2.25 4C2.25 3.58579 2.58579 3.25 3 3.25H17C17.4142 3.25 17.75 3.58579 17.75 4C17.75 4.41421 17.4142 4.75 17 4.75H3C2.58579 4.75 2.25 4.41421 2.25 4ZM3 7.25C2.58579 7.25 2.25 7.58579 2.25 8C2.25 8.41421 2.58579 8.75 3 8.75H17C17.4142 8.75 17.75 8.41421 17.75 8C17.75 7.58579 17.4142 7.25 17 7.25H3ZM3 11.25C2.58579 11.25 2.25 11.5858 2.25 12C2.25 12.4142 2.58579 12.75 3 12.75H17C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25H3ZM3 15.25C2.58579 15.25 2.25 15.5858 2.25 16C2.25 16.4142 2.58579 16.75 3 16.75H8.38462C8.79883 16.75 9.13462 16.4142 9.13462 16C9.13462 15.5858 8.79883 15.25 8.38462 15.25H3Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
LongText.displayName = 'LongText';
LongText.propTypes = {
  size: PropTypes.string
}
export default LongText;
/* tslint:enable */
/* eslint-enable */
