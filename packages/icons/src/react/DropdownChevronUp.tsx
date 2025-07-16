/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DropdownChevronUpProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const DropdownChevronUp: React.FC<DropdownChevronUpProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.558 7.24a.77.77 0 0 0-1.116 0l-4.21 4.363a.84.84 0 0 0 0 1.157.77.77 0 0 0 1.116 0L10 8.975l3.652 3.785a.77.77 0 0 0 1.117 0 .84.84 0 0 0 0-1.157l-4.21-4.363Z"
    />
  </svg>
);
DropdownChevronUp.displayName = 'DropdownChevronUp';
export default DropdownChevronUp;
/* tslint:enable */
/* eslint-enable */
