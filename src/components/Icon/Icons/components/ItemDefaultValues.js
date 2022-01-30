/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ItemDefaultValues = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M9.97467 11.927L7.5 12.2803L7.85333 9.80295L14.2173 3.43895C14.3568 3.29966 14.5223 3.18921 14.7045 3.11389C14.8866 3.03858 15.0818 2.99988 15.2789 3C15.4761 3.00012 15.6712 3.03907 15.8533 3.11461C16.0353 3.19016 16.2007 3.30082 16.34 3.44029C16.4793 3.57975 16.5897 3.74528 16.6651 3.92743C16.7404 4.10959 16.7791 4.30479 16.779 4.50189C16.7788 4.699 16.7399 4.89416 16.6643 5.07621C16.5888 5.25827 16.4781 5.42366 16.3387 5.56295L9.97467 11.927Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.5 10.2998H3.71667C3.46029 10.2998 3.21442 10.4315 3.03313 10.6659C2.85184 10.9003 2.75 11.2183 2.75 11.5498V15.0498C2.75 15.3813 2.85184 15.6993 3.03313 15.9337C3.21442 16.1681 3.46029 16.2998 3.71667 16.2998H16.2833C16.5397 16.2998 16.7856 16.1681 16.9669 15.9337C17.1482 15.6993 17.25 15.3813 17.25 15.0498V11.5498C17.25 11.2183 17.1482 10.9003 16.9669 10.6659C16.7856 10.4315 16.5397 10.2998 16.2833 10.2998H15.6964"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
ItemDefaultValues.displayName = 'ItemDefaultValues';
ItemDefaultValues.propTypes = {
  size: PropTypes.string
}
export default ItemDefaultValues;
/* tslint:enable */
/* eslint-enable */
