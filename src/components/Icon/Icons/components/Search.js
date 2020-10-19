/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Search = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M1.60039 6.4999C1.60039 3.79371 3.7942 1.5999 6.50039 1.5999C9.20659 1.5999 11.4004 3.79371 11.4004 6.4999C11.4004 9.2061 9.20659 11.3999 6.50039 11.3999C3.7942 11.3999 1.60039 9.2061 1.60039 6.4999ZM6.50039 0.399902C3.13145 0.399902 0.400391 3.13097 0.400391 6.4999C0.400391 9.86884 3.13145 12.5999 6.50039 12.5999C7.96878 12.5999 9.31598 12.0811 10.3687 11.2167L14.5761 15.4242C14.8104 15.6585 15.1903 15.6585 15.4247 15.4242C15.659 15.1899 15.659 14.81 15.4247 14.5756L11.2172 10.3682C12.0816 9.3155 12.6004 7.96829 12.6004 6.4999C12.6004 3.13097 9.86933 0.399902 6.50039 0.399902Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Search.displayName = 'Search';
Search.propTypes = {
  size: PropTypes.string
}
export default Search;
/* tslint:enable */
/* eslint-enable */
