/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Home = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M9.14944 2.76632C9.62904 2.32098 10.371 2.32098 10.8506 2.76632L17.1908 8.65367C17.5474 8.98479 17.75 9.44944 17.75 9.93606V16C17.75 16.9665 16.9665 17.75 16 17.75H4C3.0335 17.75 2.25 16.9665 2.25 16V9.93606C2.25 9.44944 2.45262 8.98479 2.80921 8.65367L9.14944 2.76632ZM10 4.02347L3.82989 9.75286C3.77895 9.80017 3.75 9.86654 3.75 9.93606V16C3.75 16.1381 3.86193 16.25 4 16.25H16C16.1381 16.25 16.25 16.1381 16.25 16V9.93606C16.25 9.86654 16.2211 9.80017 16.1701 9.75286L10 4.02347Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Home.displayName = 'Home';
Home.propTypes = {
  size: PropTypes.string
}
export default Home;
/* tslint:enable */
/* eslint-enable */
