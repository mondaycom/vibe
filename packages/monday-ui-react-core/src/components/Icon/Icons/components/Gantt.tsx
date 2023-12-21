/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface GanttProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Gantt: React.FC<GanttProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.8214 5H3M13.8214 10.2144H6M16.3429 15.4287H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
Gantt.displayName = 'Gantt';
export default Gantt;
/* tslint:enable */
/* eslint-enable */
