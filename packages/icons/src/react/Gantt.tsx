/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface GanttProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Gantt: React.FC<GanttProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 21" fill="currentColor" width={ size || "20" } height={ size || "21" } {...props}>
    <path fill="currentColor" d="M2.25 5.41A.75.75 0 0 1 3 4.66h7.821a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm3 5.214a.75.75 0 0 1 .75-.75h7.821a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Zm2 5.214a.75.75 0 0 1 .75-.75h8.343a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z"
    />
  </svg>
);
Gantt.displayName = 'Gantt';
export default Gantt;
/* tslint:enable */
/* eslint-enable */
