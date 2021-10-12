/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Mute = ({size, ...props}) => (
  <svg viewBox="0 0 16.11 13.89" fill="currentColor" width={ size || "1em" } height={ size || "1em" } {...props}>
    <path d="M12.32,16.85h-.18a2.07,2.07,0,0,1-1-.37L8.61,15.09a.75.75,0,1,1,.72-1.31l2.6,1.42a.83.83,0,0,0,.34.15.66.66,0,0,0,.28,0,.41.41,0,0,0,.19-.18.34.34,0,0,0,.07-.22V10.33a.75.75,0,0,1,1.5,0V14.9a1.95,1.95,0,0,1-1.11,1.75A2.06,2.06,0,0,1,12.32,16.85Zm-6.6-3.7H3.24a2,2,0,0,1-1.4-.56,1.94,1.94,0,0,1-.59-1.39V8.8a2,2,0,0,1,.59-1.39,2,2,0,0,1,1.4-.56H5.51L10.79,3.6a2,2,0,0,1,2.82.57,2.41,2.41,0,0,1,.31,1.17.75.75,0,0,1-1.5,0A1.14,1.14,0,0,0,12.34,5a.44.44,0,0,0-.19-.16.49.49,0,0,0-.27,0,.52.52,0,0,0-.26.1L6.47,8V12.4A.75.75,0,0,1,5.72,13.15ZM3.24,8.35a.54.54,0,0,0-.36.14.44.44,0,0,0-.13.31v2.4a.41.41,0,0,0,.14.31.5.5,0,0,0,.35.14H5V8.35Z"
      transform="translate(-1.25 -3.25)" fill="currentColor" />
    <path d="M17.21,4.37a.76.76,0,0,1-.16,1L4.77,17a.76.76,0,0,1-1-.16.75.75,0,0,1,.16-1.05L16.16,4.21A.76.76,0,0,1,17.21,4.37Z" transform="translate(-1.25 -3.25)"
      fill="currentColor" className="cls-1" />
  </svg>
);
Mute.displayName = 'Mute';
Mute.propTypes = {
  size: PropTypes.string
}
export default Mute;
/* tslint:enable */
/* eslint-enable */
