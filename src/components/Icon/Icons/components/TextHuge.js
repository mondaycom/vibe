/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const TextHuge =  React.forwardRef(({size, ...props}, ref) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props} ref={ref}>
    <path d="M12.5392 13.7404H7.44277L6.37651 17H4L8.96988 3H11.0211L16 17H13.6145L12.5392 13.7404ZM8.08434 11.7788H11.8976L9.99096 5.97115L8.08434 11.7788Z" fill="currentColor"
      stroke="currentColor" strokeWidth=".5" />
  </svg>
));
TextHuge.displayName = 'TextHuge';
TextHuge.propTypes = {
  size: PropTypes.string
}
export default TextHuge;
/* tslint:enable */
/* eslint-enable */
