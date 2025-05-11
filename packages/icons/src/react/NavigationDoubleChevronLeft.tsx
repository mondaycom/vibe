/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface NavigationDoubleChevronLeftProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const NavigationDoubleChevronLeft: React.FC<NavigationDoubleChevronLeftProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2.52045 9.51996C2.22756 9.81286 2.22756 10.2877 2.52045 10.5806L9.52045 17.5806C9.81334 17.8735 10.2882 17.8735 10.5811 17.5806C10.874 17.2877 10.874 16.8129 10.5811 16.52L4.11144 10.0503L10.5811 3.58062C10.874 3.28773 10.874 2.81286 10.5811 2.51996C10.2882 2.22707 9.81334 2.22707 9.52045 2.51996L2.52045 9.51996Z"
      fill="currentColor" />
    <path d="M9.52045 9.51996C9.22756 9.81286 9.22756 10.2877 9.52045 10.5806L16.5205 17.5806C16.8133 17.8735 17.2882 17.8735 17.5811 17.5806C17.874 17.2877 17.874 16.8129 17.5811 16.52L11.1114 10.0503L17.5811 3.58062C17.874 3.28773 17.874 2.81286 17.5811 2.51996C17.2882 2.22707 16.8133 2.22707 16.5205 2.51996L9.52045 9.51996Z"
      fill="currentColor" />
  </svg>
);
NavigationDoubleChevronLeft.displayName = 'NavigationDoubleChevronLeft';
export default NavigationDoubleChevronLeft;
/* tslint:enable */
/* eslint-enable */
