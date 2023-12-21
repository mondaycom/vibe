/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DropdownChevronDownProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const DropdownChevronDown: React.FC<DropdownChevronDownProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.5303 12.5303L10 12L9.46967 12.5303C9.76256 12.8232 10.2374 12.8232 10.5303 12.5303ZM10 10.9393L6.53033 7.46967C6.23744 7.17678 5.76256 7.17678 5.46967 7.46967C5.17678 7.76256 5.17678 8.23744 5.46967 8.53033L9.46967 12.5303L10 12L10.5303 12.5303L14.5303 8.53033C14.8232 8.23744 14.8232 7.76256 14.5303 7.46967C14.2374 7.17678 13.7626 7.17678 13.4697 7.46967L10 10.9393Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
DropdownChevronDown.displayName = 'DropdownChevronDown';
export default DropdownChevronDown;
/* tslint:enable */
/* eslint-enable */
