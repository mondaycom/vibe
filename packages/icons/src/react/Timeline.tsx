/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface TimelineProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Timeline: React.FC<TimelineProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="M3.93 5a.75.75 0 0 1 .75-.75H13a.75.75 0 0 1 0 1.5H4.68A.75.75 0 0 1 3.93 5Zm3.82 5.214a.75.75 0 0 1 .75-.75h7.822a.75.75 0 0 1 0 1.5H8.5a.75.75 0 0 1-.75-.75ZM4.251 15.43a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Timeline.displayName = 'Timeline';
export default Timeline;
/* tslint:enable */
/* eslint-enable */
