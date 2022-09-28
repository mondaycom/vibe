/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface BroadcastProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Broadcast: React.FC<BroadcastProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M12 3.75C14.3472 3.75 16.25 5.65279 16.25 8H17.75C17.75 4.82436 15.1756 2.25 12 2.25V3.75ZM3.75 5C3.75 4.86193 3.86193 4.75 4 4.75H6L6 15.25H4C3.86193 15.25 3.75 15.1381 3.75 15V5ZM7.5 15.25H15C15.1381 15.25 15.25 15.1381 15.25 15V10H16.75V15C16.75 15.9665 15.9665 16.75 15 16.75H4C3.0335 16.75 2.25 15.9665 2.25 15V5C2.25 4.0335 3.0335 3.25 4 3.25H10V4.75H7.5L7.5 15.25ZM13.25 8C13.25 7.30964 12.6904 6.75 12 6.75V5.25C13.5188 5.25 14.75 6.48122 14.75 8H13.25Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Broadcast.displayName = 'Broadcast';
export default Broadcast;
/* tslint:enable */
/* eslint-enable */
