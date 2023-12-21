/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface MoveArrowUpProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const MoveArrowUp: React.FC<MoveArrowUpProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.0711 17.8922C9.65686 17.8922 9.32108 17.5564 9.32108 17.1422L9.32108 4.81068L4.69276 9.439C4.39986 9.7319 3.92499 9.7319 3.6321 9.439C3.3392 9.14611 3.3392 8.67124 3.6321 8.37834L9.54075 2.46969C9.83364 2.1768 10.3085 2.1768 10.6014 2.46969L16.5101 8.37834C16.8029 8.67124 16.8029 9.14611 16.5101 9.439C16.2172 9.7319 15.7423 9.7319 15.4494 9.439L10.8211 4.81068L10.8211 17.1422C10.8211 17.5564 10.4853 17.8922 10.0711 17.8922Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
MoveArrowUp.displayName = 'MoveArrowUp';
export default MoveArrowUp;
/* tslint:enable */
/* eslint-enable */
