/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DoubleCheckProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const DoubleCheck: React.FC<DoubleCheckProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M17.7968 6.67468L10.8855 14.1903C10.6146 14.4802 10.1752 14.4802 9.90419 14.1903L8.39773 12.5791L6.88555 14.1903C6.61455 14.4802 6.17518 14.4802 5.90419 14.1903L2.20325 10.2321C1.93225 9.94224 1.93225 9.47233 2.20325 9.18249C2.47424 8.89265 2.91361 8.89265 3.18461 9.18249L6.39487 12.616L7.41603 11.5292L6.20325 10.2321C5.93225 9.94224 5.93225 9.47233 6.20325 9.18249C6.47424 8.89265 6.91361 8.89265 7.18461 9.18249L10.3949 12.616L16.8154 5.62509C17.0864 5.33526 17.5258 5.33526 17.7968 5.62509C18.0677 5.91493 18.0677 6.38485 17.7968 6.67468Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
DoubleCheck.displayName = 'DoubleCheck';
export default DoubleCheck;
/* tslint:enable */
/* eslint-enable */
