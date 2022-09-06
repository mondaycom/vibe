/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DropdownChevronLeftProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const DropdownChevronLeft: React.FC<DropdownChevronLeftProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M7.46967 10.5303L8 10L7.46967 9.46967C7.17678 9.76256 7.17678 10.2374 7.46967 10.5303ZM9.06066 10L12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967C12.2374 5.17678 11.7626 5.17678 11.4697 5.46967L7.46967 9.46967L8 10L7.46967 10.5303L11.4697 14.5303C11.7626 14.8232 12.2374 14.8232 12.5303 14.5303C12.8232 14.2374 12.8232 13.7626 12.5303 13.4697L9.06066 10Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
DropdownChevronLeft.displayName = 'DropdownChevronLeft';
export default DropdownChevronLeft;
/* tslint:enable */
/* eslint-enable */
