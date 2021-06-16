/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ShortText = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M1 6H15M1 9.69238H6.38462" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
ShortText.displayName = 'ShortText';
ShortText.propTypes = {
  size: PropTypes.string
}
export default ShortText;
/* tslint:enable */
/* eslint-enable */
