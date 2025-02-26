/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ItemHeightTripleProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ItemHeightTriple: React.FC<ItemHeightTripleProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="M4.726 2.264a.75.75 0 0 1 1.048 0l2.25 2.2a.75.75 0 1 1-1.048 1.072L6 4.582V15.74l1.032-.825a.75.75 0 1 1 .937 1.172l-2.25 1.8a.75.75 0 0 1-.937 0l-2.25-1.8a.75.75 0 0 1 .937-1.172l1.031.825V4.582l-.976.954a.75.75 0 1 1-1.048-1.072l2.25-2.2ZM11.45 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
    />
  </svg>
);
ItemHeightTriple.displayName = 'ItemHeightTriple';
export default ItemHeightTriple;
/* tslint:enable */
/* eslint-enable */
