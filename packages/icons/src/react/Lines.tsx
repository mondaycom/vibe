/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface LinesProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Lines: React.FC<LinesProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="M2.05 5a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5h-14A.75.75 0 0 1 2.05 5Zm0 5a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5h-14a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5h-14a.75.75 0 0 1-.75-.75Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Lines.displayName = 'Lines';
export default Lines;
/* tslint:enable */
/* eslint-enable */
