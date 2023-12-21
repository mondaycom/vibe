/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ItemHeightTripleProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ItemHeightTriple: React.FC<ItemHeightTripleProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M5.25 17V3M3 5L5.25 2.7998 7.5 5M3 15.5L5.25 17.2998 7.5 15.5M17.2002 5H12.2002M17.2 10H12.2M17.2002 15H12.2002" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
ItemHeightTriple.displayName = 'ItemHeightTriple';
export default ItemHeightTriple;
/* tslint:enable */
/* eslint-enable */
