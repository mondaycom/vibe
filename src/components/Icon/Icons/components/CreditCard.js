/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const CreditCard = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2 4.7998C2 4.38559 2.33579 4.0498 2.75 4.0498H17.2553C17.6695 4.0498 18.0053 4.38559 18.0053 4.7998V8.70508V15.3998C18.0053 15.814 17.6695 16.1498 17.2553 16.1498H2.75C2.33579 16.1498 2 15.814 2 15.3998V8.70508V4.7998ZM16.5053 5.5498V7.95508H3.5V5.5498H16.5053ZM16.5053 9.45508H3.5V14.6498H16.5053V9.45508ZM5.53906 12.4185C5.12485 12.4185 4.78906 12.7542 4.78906 13.1685C4.78906 13.5827 5.12485 13.9185 5.53906 13.9185H6.09696C6.51117 13.9185 6.84696 13.5827 6.84696 13.1685C6.84696 12.7542 6.51117 12.4185 6.09696 12.4185H5.53906Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
CreditCard.displayName = 'CreditCard';
CreditCard.propTypes = {
  size: PropTypes.string
}
export default CreditCard;
/* tslint:enable */
/* eslint-enable */
