/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface NavigationChevronDownProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const NavigationChevronDown: React.FC<NavigationChevronDownProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.5303 14.5303L10 14L9.46967 14.5303C9.76256 14.8232 10.2374 14.8232 10.5303 14.5303ZM10 12.9393L3.53033 6.46967C3.23744 6.17678 2.76256 6.17678 2.46967 6.46967C2.17678 6.76256 2.17678 7.23744 2.46967 7.53033L9.46967 14.5303L10 14L10.5303 14.5303L17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L10 12.9393Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
NavigationChevronDown.displayName = 'NavigationChevronDown';
export default NavigationChevronDown;
/* tslint:enable */
/* eslint-enable */
