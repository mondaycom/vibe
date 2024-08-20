/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface StatusProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Status: React.FC<StatusProps> = ({size, ...props}) => (
  <svg viewBox="0 0 39 39" fill="currentColor" width={ size || "39" } height={ size || "39" } {...props}>
    <path d="M3.89258 5.40513C3.89258 4.57125 4.56856 3.89526 5.40244 3.89526H33.5866C34.4204 3.89526 35.0963 4.57125 35.0963 5.40513V33.5892C35.0963 34.4232 34.4204 35.099 33.5866 35.099H5.40244C4.56856 35.099 3.89258 34.4232 3.89258 33.5892V5.40513ZM6.91231 6.91498V13.2894H32.0767V6.91498H6.91231ZM6.91231 16.3092H32.0767V22.6847H6.91231V16.3092ZM6.91231 25.7043V32.0793H32.0767V25.7043L6.91231 25.7043Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Status.displayName = 'Status';
export default Status;
/* tslint:enable */
/* eslint-enable */
