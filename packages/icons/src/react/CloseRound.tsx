/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CloseRoundProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const CloseRound: React.FC<CloseRoundProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M7.61 6.604 10 8.994l2.391-2.39A.713.713 0 1 1 13.4 7.612l-2.39 2.39 2.39 2.392a.713.713 0 1 1-1.007 1.008l-2.391-2.391L7.61 13.4a.713.713 0 0 1-1.008-1.007l2.39-2.391-2.39-2.391a.713.713 0 1 1 1.007-1.008Z"
      fillRule="evenodd" clipRule="evenodd" />
    <path d="M17.95 10.003a7.95 7.95 0 1 0-15.9 0 7.95 7.95 0 0 0 15.9 0Zm-14.474 0a6.525 6.525 0 1 1 13.05 0 6.525 6.525 0 0 1-13.05 0Z" fillRule="evenodd" clipRule="evenodd"
    />
  </svg>
);
CloseRound.displayName = 'CloseRound';
export default CloseRound;
/* tslint:enable */
/* eslint-enable */
