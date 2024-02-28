/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Desktop = ({size, ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={ size || "20" } height={ size || "20" } viewBox="0 0 20 20" fill="none"  {...props}>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 12.9626C17.5 13.6277 16.9163 14.1663 16.1957 14.1663H3.80435C3.08435 14.1663 2.5 13.6277 2.5 12.9626V4.53671C2.5 3.87227 3.08435 3.33301 3.80435 3.33301H16.1957C16.9163 3.33301 17.5 3.87227 17.5 4.53671V12.9626Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.66797 16.666H18.3346" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);
Desktop.displayName = 'Desktop';
Desktop.propTypes = {
  size: PropTypes.string
}
export default Desktop;
/* tslint:enable */
/* eslint-enable */
