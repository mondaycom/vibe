/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface MoveArrowRightNarrowProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const MoveArrowRightNarrow: React.FC<MoveArrowRightNarrowProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2 9.678c0 .414.336.75.75.75h12.856L13.5 13.159a.75.75 0 0 0 1.06 1.06l3.22-4.017a.75.75 0 0 0 0-1.061L14.56 5.22a.75.75 0 0 0-1.06 1.06l2.1 2.648H2.75a.75.75 0 0 0-.75.75Z"
    />
  </svg>
);
MoveArrowRightNarrow.displayName = 'MoveArrowRightNarrow';
export default MoveArrowRightNarrow;
/* tslint:enable */
/* eslint-enable */
