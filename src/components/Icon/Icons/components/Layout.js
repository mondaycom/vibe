/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Layout = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="M9.078 1.89H10.832999999999998V17.979H9.078z" />
    <path transform="rotate(90 17.634 8.836)" fill="currentColor" d="M17.634 8.836H19.389V17.393H17.634z" />
    <rect x="2.632" y="2.611" width="14.647" height="14.647" rx="1.202" stroke="currentColor" strokeWidth="1.442" />
  </svg>
);
Layout.displayName = 'Layout';
Layout.propTypes = {
  size: PropTypes.string
}
export default Layout;
/* tslint:enable */
/* eslint-enable */
