/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Bulllet = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <circle cx="10" cy="10" r="3" fill="currentColor" />
  </svg>
);
Bulllet.displayName = 'Bulllet';
Bulllet.propTypes = {
  size: PropTypes.string
}
export default Bulllet;
/* tslint:enable */
/* eslint-enable */
