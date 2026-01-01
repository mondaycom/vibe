/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ZoomOutProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ZoomOut: React.FC<ZoomOutProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M8.652 2.373a6.34 6.34 0 0 1 4.982 10.26l3.836 3.837a.75.75 0 0 1-1.062 1.06l-3.835-3.836a6.34 6.34 0 1 1-3.92-11.32Zm0 1.5a4.841 4.841 0 0 0-3.423 8.262 4.841 4.841 0 0 0 6.828.016l.016-.017.018-.017a4.84 4.84 0 0 0-3.439-8.244ZM6.7 8.05a.65.65 0 0 1 0-1.3h4a.65.65 0 0 1 0 1.3h-4Z"
    />
  </svg>
);
ZoomOut.displayName = 'ZoomOut';
export default ZoomOut;
/* tslint:enable */
/* eslint-enable */
