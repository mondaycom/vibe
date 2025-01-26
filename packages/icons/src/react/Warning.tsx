/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface WarningProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Warning: React.FC<WarningProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10 10.977c-.414 0-.75-.355-.75-.793V6.369c0-.438.336-.792.75-.792s.75.354.75.792v3.815c0 .438-.336.793-.75.793Zm0 3.1a1 1 0 1 0 0-2.002 1 1 0 0 0 0 2.002Z"
    />
    <path d="M15.638 15.636A7.97 7.97 0 1 1 4.366 4.364a7.97 7.97 0 0 1 11.272 11.272Zm-5.636.835a6.471 6.471 0 1 0 0-12.942 6.471 6.471 0 0 0 0 12.942Z" fillRule="evenodd"
      clipRule="evenodd" />
  </svg>
);
Warning.displayName = 'Warning';
export default Warning;
/* tslint:enable */
/* eslint-enable */
