/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface RemoveRoundProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const RemoveRound: React.FC<RemoveRoundProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M13 9.251a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h6Z" />
    <path d="M10.005 2a8.006 8.006 0 1 1-.001 16.011 8.006 8.006 0 0 1 0-16.011Zm0 1.501a6.505 6.505 0 1 0-.002 13.01 6.505 6.505 0 0 0 .002-13.01Z" fillRule="evenodd"
      clipRule="evenodd" />
  </svg>
);
RemoveRound.displayName = 'RemoveRound';
export default RemoveRound;
/* tslint:enable */
/* eslint-enable */
