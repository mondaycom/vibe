/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DropdownChevronLeftProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const DropdownChevronLeft: React.FC<DropdownChevronLeftProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M7.24 9.444a.77.77 0 0 0 0 1.116l4.363 4.21a.84.84 0 0 0 1.157 0 .77.77 0 0 0 0-1.116l-3.785-3.652 3.785-3.653a.77.77 0 0 0 0-1.116.84.84 0 0 0-1.157 0L7.24 9.443Z"
    />
  </svg>
);
DropdownChevronLeft.displayName = 'DropdownChevronLeft';
export default DropdownChevronLeft;
/* tslint:enable */
/* eslint-enable */
