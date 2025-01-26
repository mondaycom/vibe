/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DropdownChevronRightProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const DropdownChevronRight: React.FC<DropdownChevronRightProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="M12.76 10.56a.77.77 0 0 0 0-1.116L8.397 5.233a.84.84 0 0 0-1.157 0 .77.77 0 0 0 0 1.116l3.785 3.653-3.785 3.652a.77.77 0 0 0 0 1.117.84.84 0 0 0 1.157 0l4.363-4.211Z"
    />
  </svg>
);
DropdownChevronRight.displayName = 'DropdownChevronRight';
export default DropdownChevronRight;
/* tslint:enable */
/* eslint-enable */
