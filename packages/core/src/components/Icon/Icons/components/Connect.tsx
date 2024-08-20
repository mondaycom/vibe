/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ConnectProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Connect: React.FC<ConnectProps> = ({size, ...props}) => (
  <svg viewBox="0 0 39 40" fill="currentColor" width={ size || "39" } height={ size || "40" } {...props}>
    <path d="M16.5758 6.5C15.7681 6.5 15.1133 7.17158 15.1133 8C15.1133 8.82842 15.7681 9.5 16.5758 9.5H27.6699L5.79163 31.9394C5.2205 32.5252 5.2205 33.4748 5.79163 34.0606C6.36277 34.6464 7.28878 34.6464 7.85992 34.0606L29.7383 11.6213V23C29.7383 23.8284 30.3931 24.5 31.2008 24.5C32.0085 24.5 32.6633 23.8284 32.6633 23V8C32.6633 7.17158 32.0085 6.5 31.2008 6.5H16.5758Z"
      fill="currentColor" />
  </svg>
);
Connect.displayName = 'Connect';
export default Connect;
/* tslint:enable */
/* eslint-enable */
