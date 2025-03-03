/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface AlignRightProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const AlignRight: React.FC<AlignRightProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M7.534 4a1 1 0 0 1 1-1h8.211a1 1 0 1 1 0 2H8.534a1 1 0 0 1-1-1Zm0 8a1 1 0 0 1 1-1h8.211a1 1 0 1 1 0 2H8.534a1 1 0 0 1-1-1ZM2.297 8a1 1 0 0 1 1-1h13.448a1 1 0 1 1 0 2H3.297a1 1 0 0 1-1-1Zm0 8a1 1 0 0 1 1-1h13.448a1 1 0 1 1 0 2H3.297a1 1 0 0 1-1-1Z"
    />
  </svg>
);
AlignRight.displayName = 'AlignRight';
export default AlignRight;
/* tslint:enable */
/* eslint-enable */
