/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface MoveArrowLeftDoubleProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const MoveArrowLeftDouble: React.FC<MoveArrowLeftDoubleProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <g clipPath="url(#clip0_441_96309)">
      <path d="M7.18898 15.037L2.56066 10.4086L1.84213 9.65865L2.56066 8.90865L7.18898 4.28033C7.48187 3.98744 7.48187 3.51256 7.18898 3.21967C7.16183 3.19252 7.13312 3.1679 7.10314 3.14578C6.80963 2.92929 6.39407 2.95392 6.12832 3.21967L0.21967 9.12832C-0.0732232 9.42121 -0.0732233 9.89608 0.21967 10.189L6.12832 16.0976C6.42121 16.3905 6.89608 16.3905 7.18898 16.0976C7.48187 15.8047 7.48187 15.3299 7.18898 15.037ZM18.8315 10.5034C19.2457 10.5034 19.5815 10.1676 19.5815 9.75337C19.5815 9.33916 19.2457 9.00337 18.8315 9.00337L6.5 9.00337L11.1283 4.37506C11.4212 4.08216 11.4212 3.60729 11.1283 3.3144C10.8354 3.0215 10.3606 3.0215 10.0677 3.3144L4.15901 9.22304C3.86612 9.51594 3.86612 9.99081 4.15901 10.2837L10.0677 16.1924C10.3605 16.4852 10.8354 16.4852 11.1283 16.1924C11.4212 15.8995 11.4212 15.4246 11.1283 15.1317L6.5 10.5034L18.8315 10.5034Z"
        fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    </g>
    <defs>
      <clipPath id="clip0_441_96309">
        <path d="M0 0H20V20H0z" />
      </clipPath>
    </defs>
  </svg>
);
MoveArrowLeftDouble.displayName = 'MoveArrowLeftDouble';
export default MoveArrowLeftDouble;
/* tslint:enable */
/* eslint-enable */
