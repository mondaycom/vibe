/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DropdownChevronDownProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const DropdownChevronDown: React.FC<DropdownChevronDownProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M9.442 12.762a.77.77 0 0 0 1.116 0l4.21-4.363a.84.84 0 0 0 0-1.158.77.77 0 0 0-1.116 0L10 11.027 6.348 7.24a.77.77 0 0 0-1.117 0 .84.84 0 0 0 0 1.158l4.21 4.363Z"
    />
  </svg>
);
DropdownChevronDown.displayName = 'DropdownChevronDown';
export default DropdownChevronDown;
/* tslint:enable */
/* eslint-enable */
