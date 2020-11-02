/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const DropdownChevronUp = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M9.46967 7.46967L10 8L10.5303 7.46967C10.2374 7.17678 9.76256 7.17678 9.46967 7.46967ZM10 9.06066L13.4697 12.5303C13.7626 12.8232 14.2374 12.8232 14.5303 12.5303C14.8232 12.2374 14.8232 11.7626 14.5303 11.4697L10.5303 7.46967L10 8L9.46967 7.46967L5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10 9.06066Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
DropdownChevronUp.displayName = 'DropdownChevronUp';
DropdownChevronUp.propTypes = {
  size: PropTypes.string
}
export default DropdownChevronUp;
/* tslint:enable */
/* eslint-enable */
