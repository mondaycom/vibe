/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const TextHuge = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M12.9624 14.2747H7.01657L5.77259 18H3L8.79819 2H11.1913L17 18H14.2169L12.9624 14.2747ZM7.76506 12.033H12.2139L9.98946 5.3956L7.76506 12.033Z" fill="currentColor"
    />
  </svg>
);
TextHuge.displayName = 'TextHuge';
TextHuge.propTypes = {
  size: PropTypes.string
}
export default TextHuge;
/* tslint:enable */
/* eslint-enable */
