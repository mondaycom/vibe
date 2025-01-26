/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CollapseHorizontallyProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const CollapseHorizontally: React.FC<CollapseHorizontallyProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M4.366 15.636A7.97 7.97 0 1 1 15.638 4.364 7.97 7.97 0 0 1 4.366 15.636ZM3.53 10a6.47 6.47 0 1 0 12.942 0A6.47 6.47 0 0 0 3.53 10Z" fillRule="evenodd" clipRule="evenodd"
    />
    <path d="M5.996 7.19a.75.75 0 0 1 1.06.048l1.951 2.14a.883.883 0 0 1 .001 1.216l-1.95 2.152a.75.75 0 0 1-1.112-1.008l1.587-1.75-1.585-1.74a.75.75 0 0 1 .048-1.059Zm8.01 5.608a.75.75 0 0 1-1.06-.052l-1.95-2.152a.884.884 0 0 1 0-1.217l1.952-2.139a.75.75 0 1 1 1.108 1.011L12.47 9.987l1.588 1.751a.75.75 0 0 1-.052 1.06Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
CollapseHorizontally.displayName = 'CollapseHorizontally';
export default CollapseHorizontally;
/* tslint:enable */
/* eslint-enable */
