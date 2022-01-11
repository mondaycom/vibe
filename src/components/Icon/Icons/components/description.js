/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const description = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M3 4H17M3 8H17M3 12H14M3 16H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
description.displayName = 'description';
description.propTypes = {
  size: PropTypes.string
}
export default description;
/* tslint:enable */
/* eslint-enable */
