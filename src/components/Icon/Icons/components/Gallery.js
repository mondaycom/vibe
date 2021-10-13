/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Gallery = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M15.8 17.2998H3.80005C3.53483 17.2998 3.28048 17.1944 3.09294 17.0069C2.90541 16.8194 2.80005 16.565 2.80005 16.2998V4.2998" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.66992 4.19995C5.66992 3.37152 6.34149 2.69995 7.16992 2.69995H15.7699C16.5984 2.69995 17.2699 3.37152 17.2699 4.19995V12.8C17.2699 13.6284 16.5983 14.3 15.7699 14.3H7.16992C6.34149 14.3 5.66992 13.6284 5.66992 12.8V4.19995Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.91699 14.0832L13.2836 7.76999C13.3576 7.70405 13.4506 7.6675 13.5469 7.66652 13.6431 7.66555 13.7368 7.70019 13.8119 7.76461L17.0003 10.2168M8.76947 6.83038C8.62882 6.68973 8.5498 6.49896 8.5498 6.30005 8.5498 6.10114 8.62882 5.91037 8.76947 5.76972 8.91013 5.62907 9.10089 5.55005 9.2998 5.55005 9.49872 5.55005 9.68948 5.62907 9.83013 5.76972 9.97079 5.91037 10.0498 6.10114 10.0498 6.30005 10.0498 6.49896 9.97079 6.68973 9.83013 6.83038 9.68948 6.97103 9.49872 7.05005 9.2998 7.05005 9.10089 7.05005 8.91013 6.97103 8.76947 6.83038z"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  size: PropTypes.string
}
export default Gallery;
/* tslint:enable */
/* eslint-enable */
