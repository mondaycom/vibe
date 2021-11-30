/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Deactivate = ({size, ...props}) => (
  <svg viewBox="0 0 15 15" fill="currentColor" width={ size || "15" } height={ size || "15" } {...props}>
    <path d="M1 7.5C1 9.22391 1.68482 10.8772 2.90381 12.0962 4.12279 13.3152 5.77609 14 7.5 14 9.22391 14 10.8772 13.3152 12.0962 12.0962 13.3152 10.8772 14 9.22391 14 7.5 14 5.77609 13.3152 4.12279 12.0962 2.90381 10.8772 1.68482 9.22391 1 7.5 1 5.77609 1 4.12279 1.68482 2.90381 2.90381 1.68482 4.12279 1 5.77609 1 7.5zM2.90399 12.0963L12.096 2.9043"
      stroke="#676879" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
Deactivate.displayName = 'Deactivate';
Deactivate.propTypes = {
  size: PropTypes.string
}
export default Deactivate;
/* tslint:enable */
/* eslint-enable */
