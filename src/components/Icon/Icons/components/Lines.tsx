/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface LinesProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Lines: React.FC<LinesProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M16.8 5H2.79999M16.8 10H2.79999M16.8 15H2.79999" stroke="#323338" fill="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
Lines.displayName = 'Lines';
export default Lines;
/* tslint:enable */
/* eslint-enable */
