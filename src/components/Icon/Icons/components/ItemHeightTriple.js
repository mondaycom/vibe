/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ItemHeightTriple = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M5.25 17V3M3 5L5.25 2.7998 7.5 5M3 15.5L5.25 17.2998 7.5 15.5M17.2002 5H12.2002M17.2 10H12.2M17.2002 15H12.2002" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
ItemHeightTriple.displayName = 'ItemHeightTriple';
ItemHeightTriple.propTypes = {
  size: PropTypes.string
}
export default ItemHeightTriple;
/* tslint:enable */
/* eslint-enable */
