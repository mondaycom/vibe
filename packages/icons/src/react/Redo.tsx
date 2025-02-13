/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface RedoProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Redo: React.FC<RedoProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="M13.372 4.485a.73.73 0 0 1 1.03 0l3.334 3.333a.73.73 0 0 1 0 1.031l-3.333 3.333a.73.73 0 1 1-1.031-1.03l2.088-2.09H7.22a3.715 3.715 0 0 0-3.715 3.716V15a.73.73 0 0 1-1.458 0v-2.222A5.174 5.174 0 0 1 7.22 7.604h8.24l-2.088-2.088a.73.73 0 0 1 0-1.031Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Redo.displayName = 'Redo';
export default Redo;
/* tslint:enable */
/* eslint-enable */
