/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const LongText = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M1 6H15M1 10H15M1 2H15M1 14H6.38462" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
LongText.displayName = 'LongText';
LongText.propTypes = {
  size: PropTypes.string
}
export default LongText;
/* tslint:enable */
/* eslint-enable */
