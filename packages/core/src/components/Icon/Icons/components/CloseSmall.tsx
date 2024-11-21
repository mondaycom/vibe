/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CloseSmallProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const CloseSmall: React.FC<CloseSmallProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M6.331 5.27a.75.75 0 0 0-1.06 1.06L8.94 10l-3.67 3.668a.75.75 0 1 0 1.06 1.06L10 11.06l3.668 3.669a.75.75 0 0 0 1.06-1.06l-3.668-3.67 3.67-3.669a.75.75 0 0 0-1.061-1.06L10 8.939l-3.669-3.67Z"
    />
  </svg>
);
CloseSmall.displayName = 'CloseSmall';
export default CloseSmall;
/* tslint:enable */
/* eslint-enable */
