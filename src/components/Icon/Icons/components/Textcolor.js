/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Textcolor = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <g stroke="currentColor" strokeLinejoin="round">
      <path d="M2 17L18 17" strokeWidth="5" />
      <path d="M5.5 12L9.541 3.28065C9.57932 3.1974 9.64326 3.12641 9.72488 3.07651 9.80649 3.02661 9.90216 3 10 3 10.0978 3 10.1935 3.02661 10.2751 3.07651 10.3567 3.12641 10.4207 3.1974 10.459 3.28065L14.5 12M7 9H13"
        strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);
Textcolor.displayName = 'Textcolor';
Textcolor.propTypes = {
  size: PropTypes.string
}
export default Textcolor;
/* tslint:enable */
/* eslint-enable */
