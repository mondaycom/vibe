/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface MoveArrowDownProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const MoveArrowDown: React.FC<MoveArrowDownProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.0711 2.24999C10.4853 2.24999 10.8211 2.58578 10.8211 2.99999L10.8211 15.3315L15.4494 10.7031C15.7423 10.4103 16.2172 10.4103 16.5101 10.7031C16.8029 10.996 16.8029 11.4709 16.5101 11.7638L10.6014 17.6725C10.3085 17.9653 9.83364 17.9653 9.54075 17.6725L3.6321 11.7638C3.3392 11.4709 3.3392 10.996 3.6321 10.7031C3.92499 10.4103 4.39986 10.4103 4.69276 10.7031L9.32108 15.3315L9.32108 2.99999C9.32108 2.58578 9.65686 2.24999 10.0711 2.24999Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
MoveArrowDown.displayName = 'MoveArrowDown';
export default MoveArrowDown;
/* tslint:enable */
/* eslint-enable */
