/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ConvertToSubitem = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2.9165 2.25C2.50229 2.25 2.1665 2.58579 2.1665 3C2.1665 3.41421 2.50229 3.75 2.9165 3.75H8.33317C10.3122 3.75 11.9165 5.35431 11.9165 7.33333V15.1891L8.86383 12.1364C8.57093 11.8435 8.09606 11.8435 7.80317 12.1364C7.51027 12.4293 7.51027 12.9042 7.80317 13.1971L12.1365 17.5304C12.4294 17.8233 12.9043 17.8233 13.1972 17.5304L17.5305 13.1971C17.8234 12.9042 17.8234 12.4293 17.5305 12.1364C17.2376 11.8435 16.7627 11.8435 16.4698 12.1364L13.4165 15.1897V7.33333C13.4165 4.52589 11.1406 2.25 8.33317 2.25H2.9165Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
ConvertToSubitem.displayName = 'ConvertToSubitem';
ConvertToSubitem.propTypes = {
  size: PropTypes.string
}
export default ConvertToSubitem;
/* tslint:enable */
/* eslint-enable */
