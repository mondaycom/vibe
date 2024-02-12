/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface TimelineProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Timeline: React.FC<TimelineProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M13 5H4.67871M16.3205 10.2148H8.49902M10.5 15.4287H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
Timeline.displayName = 'Timeline';
export default Timeline;
/* tslint:enable */
/* eslint-enable */
