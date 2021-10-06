/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ConverToSubitem = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M8.3335 12.6667L12.6668 17.0001L17.0002 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.6665 16V7.33333C12.6665 4.9401 10.7264 3 8.33317 3H2.9165" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
ConverToSubitem.displayName = 'ConverToSubitem';
ConverToSubitem.propTypes = {
  size: PropTypes.string
}
export default ConverToSubitem;
/* tslint:enable */
/* eslint-enable */
