/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const MoveArrowLeft = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M17.8921 10.071C17.8921 10.4853 17.5563 10.821 17.1421 10.821L4.81065 10.821L9.43897 15.4494C9.73186 15.7423 9.73186 16.2171 9.43897 16.51C9.14608 16.8029 8.6712 16.8029 8.37831 16.51L2.46966 10.6014C2.17677 10.3085 2.17677 9.83361 2.46966 9.54071L8.37831 3.63207C8.67121 3.33917 9.14608 3.33917 9.43897 3.63207C9.73187 3.92496 9.73187 4.39983 9.43897 4.69273L4.81065 9.32104L17.1421 9.32104C17.5563 9.32104 17.8921 9.65683 17.8921 10.071Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
MoveArrowLeft.displayName = 'MoveArrowLeft';
MoveArrowLeft.propTypes = {
  size: PropTypes.string
}
export default MoveArrowLeft;
/* tslint:enable */
/* eslint-enable */
