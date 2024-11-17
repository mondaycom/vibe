/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface PinFullProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const PinFull: React.FC<PinFullProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M13.695 2.361a1.893 1.893 0 0 0-2.217.735l-.001.002-2.304 3.496-4.84 1.117a1.436 1.436 0 0 0-.697 2.426l2.983 2.984-4.15 4.15a.75.75 0 0 0 1.061 1.06l4.15-4.15 2.985 2.987a1.443 1.443 0 0 0 2.424-.696l1.115-4.837L17.728 9.4a1.895 1.895 0 0 0 .325-2.936l-3.656-3.656-.001-.001a1.893 1.893 0 0 0-.701-.446Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
PinFull.displayName = 'PinFull';
export default PinFull;
/* tslint:enable */
/* eslint-enable */
