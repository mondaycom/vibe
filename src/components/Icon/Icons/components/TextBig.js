/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const TextBig = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M12.7112 12.6374H7.28876L6.05824 16H5L9.5201 4H10.4799L15 16H13.95L12.7112 12.6374ZM7.60049 11.772H12.3913L9.9959 5.23626L7.60049 11.772Z" fill="currentColor"
    />
  </svg>
);
TextBig.displayName = 'TextBig';
TextBig.propTypes = {
  size: PropTypes.string
}
export default TextBig;
/* tslint:enable */
/* eslint-enable */
