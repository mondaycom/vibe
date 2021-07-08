/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const MoreActions = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M15 5C13.0474 6.5621 10 9 10 9 10 9 6.95262 6.5621 5 5M15 11C13.0474 12.5621 10 15 10 15 10 15 6.95262 12.5621 5 11" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
MoreActions.displayName = 'MoreActions';
MoreActions.propTypes = {
  size: PropTypes.string
}
export default MoreActions;
/* tslint:enable */
/* eslint-enable */
