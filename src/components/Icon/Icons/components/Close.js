/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Close = ({size, ...props}) => (
  <svg viewBox="0 0 512 512" fill="currentColor" width={ size || "512" } height={ size || "512" } {...props}>
    <path d="M440,78.1C341.6-22.2,177.9-24.5,77.6,73.9c-100.3,98.4-101.8,261.3-3.3,361.5c98.4,100.3,262.1,100.9,362.4,2.5	C537,339.5,538.4,178.4,440,78.1z M319.6,370.2l-63.4-64.5l-68.2,66.9c-13.2,13-26.4,16.8-45.8-0.6c-19.2-19.8-16.3-36.1-3.1-49.1	l68.2-67l-66.9-68.1c-13-13.2-15.8-29.8,2.1-47.4c16.6-16.3,34.6-14.7,47.6-1.5l66.9,68.1l64.4-63.3c13.2-13,33-20,51.2-1.4	c24.4,24.9,7.2,41.8-0.5,49.3L306,256.8l63.4,64.5c13,13.2,18,35.4,1.3,51.1C353.3,388.8,332.6,383.4,319.6,370.2z"
    />
  </svg>
);
Close.displayName = 'Close';
Close.propTypes = {
  size: PropTypes.string
}
export default Close;
/* tslint:enable */
/* eslint-enable */
