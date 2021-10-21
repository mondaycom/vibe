/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Layout = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M16.0773 1.88965C17.1392 1.88965 18 2.75047 18 3.81234V16.0563C18 17.1182 17.1392 17.979 16.0773 17.979H3.83333C2.77146 17.979 1.91064 17.1182 1.91064 16.0563V3.81234C1.91064 2.75047 2.77146 1.88965 3.83334 1.88965H16.0773ZM10.8328 3.33167H16.0773C16.3428 3.33167 16.558 3.54687 16.558 3.81234V8.83594L10.8328 8.83594V3.33167ZM9.07764 16.537H3.83333C3.56787 16.537 3.35266 16.3218 3.35266 16.0563V3.81234C3.35266 3.54687 3.56787 3.33167 3.83334 3.33167H9.07764V16.537ZM10.8328 16.537H16.0773C16.3428 16.537 16.558 16.3218 16.558 16.0563V10.5911L10.8328 10.5911V16.537Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Layout.displayName = 'Layout';
Layout.propTypes = {
  size: PropTypes.string
}
export default Layout;
/* tslint:enable */
/* eslint-enable */
