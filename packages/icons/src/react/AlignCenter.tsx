/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface AlignCenterProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const AlignCenter: React.FC<AlignCenterProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M4.896 4a1 1 0 0 1 1-1h8.211a1 1 0 1 1 0 2H5.896a1 1 0 0 1-1-1Zm0 8a1 1 0 0 1 1-1h8.211a1 1 0 1 1 0 2H5.896a1 1 0 0 1-1-1ZM2.277 8a1 1 0 0 1 1-1h13.449a1 1 0 1 1 0 2H3.277a1 1 0 0 1-1-1Zm0 8a1 1 0 0 1 1-1h13.449a1 1 0 1 1 0 2H3.277a1 1 0 0 1-1-1Z"
    />
  </svg>
);
AlignCenter.displayName = 'AlignCenter';
export default AlignCenter;
/* tslint:enable */
/* eslint-enable */
