/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface AlignLeftProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const AlignLeft: React.FC<AlignLeftProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2.25 4a1 1 0 0 1 1-1h8.212a1 1 0 1 1 0 2H3.25a1 1 0 0 1-1-1Zm0 8a1 1 0 0 1 1-1h8.212a1 1 0 1 1 0 2H3.25a1 1 0 0 1-1-1Zm0-4a1 1 0 0 1 1-1h13.449a1 1 0 1 1 0 2H3.25a1 1 0 0 1-1-1Zm0 8a1 1 0 0 1 1-1h13.449a1 1 0 1 1 0 2H3.25a1 1 0 0 1-1-1Z"
    />
  </svg>
);
AlignLeft.displayName = 'AlignLeft';
export default AlignLeft;
/* tslint:enable */
/* eslint-enable */
