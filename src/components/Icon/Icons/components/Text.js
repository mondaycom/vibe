/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Text = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M11.9016 12.6511H8.09212L7.23653 15H6L9.47229 6H10.5215L14 15H12.7697L11.9016 12.6511ZM8.45433 11.6745H11.5457L9.99688 7.46497L8.45433 11.6745Z" fill="currentColor"
    />
  </svg>
);
Text.displayName = 'Text';
Text.propTypes = {
  size: PropTypes.string
}
export default Text;
/* tslint:enable */
/* eslint-enable */
