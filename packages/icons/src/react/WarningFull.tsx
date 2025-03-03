/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface WarningFullProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const WarningFull: React.FC<WarningFullProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M15.638 15.636A7.97 7.97 0 1 1 4.366 4.364a7.97 7.97 0 0 1 11.272 11.272ZM10 10.976a.796.796 0 0 1-.8-.792V6.369c0-.438.358-.792.8-.792.442 0 .8.354.8.792v3.815a.796.796 0 0 1-.8.793Zm0 3.101a1 1 0 1 0 0-2.002 1 1 0 0 0 0 2.002Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
WarningFull.displayName = 'WarningFull';
export default WarningFull;
/* tslint:enable */
/* eslint-enable */
