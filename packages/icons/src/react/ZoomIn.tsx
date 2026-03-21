/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ZoomInProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ZoomIn: React.FC<ZoomInProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M8.652 2.373a6.34 6.34 0 0 1 4.982 10.26l3.836 3.837a.75.75 0 0 1-1.062 1.06l-3.835-3.836a6.34 6.34 0 1 1-3.92-11.32Zm0 1.5a4.841 4.841 0 0 0-3.423 8.262 4.841 4.841 0 0 0 6.828.016l.016-.017.018-.017a4.84 4.84 0 0 0-3.439-8.244ZM8.7 6.05a.65.65 0 0 1 .65.65v1.35h1.35a.65.65 0 0 1 0 1.3H9.35v1.35a.651.651 0 0 1-1.3 0V9.35H6.7a.65.65 0 0 1 0-1.3h1.35V6.7a.65.65 0 0 1 .65-.65Z"
    />
  </svg>
);
ZoomIn.displayName = 'ZoomIn';
export default ZoomIn;
/* tslint:enable */
/* eslint-enable */
