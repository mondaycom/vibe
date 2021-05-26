/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const NavigationChevronUp = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M9.46967 5.46967L10 6L10.5303 5.46967C10.2374 5.17678 9.76256 5.17678 9.46967 5.46967ZM10 7.06066L16.4697 13.5303C16.7626 13.8232 17.2374 13.8232 17.5303 13.5303C17.8232 13.2374 17.8232 12.7626 17.5303 12.4697L10.5303 5.46967L10 6L9.46967 5.46967L2.46967 12.4697C2.17678 12.7626 2.17678 13.2374 2.46967 13.5303C2.76256 13.8232 3.23744 13.8232 3.53033 13.5303L10 7.06066Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
NavigationChevronUp.displayName = 'NavigationChevronUp';
NavigationChevronUp.propTypes = {
  size: PropTypes.string
}
export default NavigationChevronUp;
/* tslint:enable */
/* eslint-enable */
