/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface MoveProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Move: React.FC<MoveProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M9.442 2.24a.77.77 0 0 1 1.116 0l4.21 4.363a.84.84 0 0 1 0 1.157.77.77 0 0 1-1.116 0L10 3.975 6.348 7.76a.77.77 0 0 1-1.117 0 .84.84 0 0 1 0-1.157l4.21-4.363Zm-3.094 10L10 16.025l3.652-3.785a.77.77 0 0 1 1.117 0 .84.84 0 0 1 0 1.157l-4.21 4.363a.77.77 0 0 1-1.117 0l-4.21-4.363a.84.84 0 0 1 0-1.157.77.77 0 0 1 1.116 0Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Move.displayName = 'Move';
export default Move;
/* tslint:enable */
/* eslint-enable */
