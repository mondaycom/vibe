/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Remove = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H17C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Remove.displayName = 'Remove';
Remove.propTypes = {
  size: PropTypes.string
}
export default Remove;
/* tslint:enable */
/* eslint-enable */
