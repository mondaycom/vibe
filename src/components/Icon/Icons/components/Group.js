/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Group = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M3.75 2.5H14.5C15.0523 2.5 15.5 2.94772 15.5 3.5V8.5H3.75V2.5Z" fill="#0085FF" fillRule="evenodd" clipRule="evenodd" />
    <path d="M16 12.2857C16 13.232 15.2463 14 14.3158 14H1.68421C0.754526 14 0 13.232 0 12.2857V3.71429C0 2.768 0.754526 2 1.68421 2H14.3158C15.2463 2 16 2.768 16 3.71429V12.2857ZM15 12.0816V3.91837C15 3.40849 14.5933 3 14.098 3H4.375V13H14.098C14.5933 13 15 12.5915 15 12.0816ZM3.375 13V3H1.902C1.4072 3 1 3.40883 1 3.91837V12.0816C1 12.5912 1.4072 13 1.902 13H3.375Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Group.displayName = 'Group';
Group.propTypes = {
  size: PropTypes.string
}
export default Group;
/* tslint:enable */
/* eslint-enable */
