/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface MoveArrowLeftNarrowProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const MoveArrowLeftNarrow: React.FC<MoveArrowLeftNarrowProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M18 9.762a.75.75 0 0 0-.75-.75H4.394L6.5 6.28a.75.75 0 1 0-1.06-1.06L2.22 9.237a.75.75 0 0 0 0 1.06l3.22 3.922a.75.75 0 1 0 1.06-1.06l-2.1-2.648h12.85a.75.75 0 0 0 .75-.75Z"
    />
  </svg>
);
MoveArrowLeftNarrow.displayName = 'MoveArrowLeftNarrow';
export default MoveArrowLeftNarrow;
/* tslint:enable */
/* eslint-enable */
