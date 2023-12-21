/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface NavigationChevronRightProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const NavigationChevronRight: React.FC<NavigationChevronRightProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M13.5303 9.46967L13 10L13.5303 10.5303C13.8232 10.2374 13.8232 9.76256 13.5303 9.46967ZM11.9393 10L5.46967 16.4697C5.17678 16.7626 5.17678 17.2374 5.46967 17.5303C5.76256 17.8232 6.23744 17.8232 6.53033 17.5303L13.5303 10.5303L13 10L13.5303 9.46967L6.53033 2.46967C6.23744 2.17678 5.76256 2.17678 5.46967 2.46967C5.17678 2.76256 5.17678 3.23744 5.46967 3.53033L11.9393 10Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
NavigationChevronRight.displayName = 'NavigationChevronRight';
export default NavigationChevronRight;
/* tslint:enable */
/* eslint-enable */
