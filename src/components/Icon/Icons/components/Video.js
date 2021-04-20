/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Video = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
      <path d="M1.82141 4.56839C1.82141 3.04961 3.05263 1.81839 4.57141 1.81839H15.4286C16.9473 1.81839 18.1786 3.04961 18.1786 4.56839V15.4255C18.1786 16.9443 16.9473 18.1755 15.4286 18.1755H4.57141C3.05263 18.1755 1.82141 16.9443 1.82141 15.4255V4.56839ZM4.57141 3.31839C3.88105 3.31839 3.32141 3.87803 3.32141 4.56839V15.4255C3.32141 16.1159 3.88105 16.6755 4.57141 16.6755H15.4286C16.1189 16.6755 16.6786 16.1159 16.6786 15.4255V4.56839C16.6786 3.87803 16.1189 3.31839 15.4286 3.31839H4.57141Z"
      />
      <path d="M13.0783 8.95959C13.8406 9.43013 13.8406 10.5699 13.0783 11.0404L9.13091 13.4769C8.28106 14.0015 7.35002 13.2991 7.35002 12.4365L7.35002 7.56353C7.35002 6.70086 8.28106 5.99855 9.13091 6.52311L13.0783 8.95959ZM12.2888 10L8.65002 7.75399L8.65002 12.246L12.2888 10Z"
      />
    </g>
  </svg>
);
Video.displayName = 'Video';
Video.propTypes = {
  size: PropTypes.string
}
export default Video;
/* tslint:enable */
/* eslint-enable */
