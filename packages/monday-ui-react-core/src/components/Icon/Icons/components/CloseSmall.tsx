/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CloseSmallProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const CloseSmall: React.FC<CloseSmallProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L8.62562 9.68628L5.47045 12.8415C5.17756 13.1343 5.17756 13.6092 5.47045 13.9021C5.76334 14.195 6.23822 14.195 6.53111 13.9021L9.68628 10.7469L12.8415 13.9021C13.1343 14.195 13.6092 14.195 13.9021 13.9021C14.195 13.6092 14.195 13.1343 13.9021 12.8415L10.7469 9.68628L13.9029 6.53033C14.1958 6.23744 14.1958 5.76256 13.9029 5.46967C13.61 5.17678 13.1351 5.17678 12.8422 5.46967L9.68628 8.62562L6.53033 5.46967Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
CloseSmall.displayName = 'CloseSmall';
export default CloseSmall;
/* tslint:enable */
/* eslint-enable */
