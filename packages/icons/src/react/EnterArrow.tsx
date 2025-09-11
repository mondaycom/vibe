/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface EnterArrowProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const EnterArrow: React.FC<EnterArrowProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M16.519 2.603c.415 0 .752.336.752.751v5.438a4.378 4.378 0 0 1-4.377 4.378H4.506l2.943 2.943a.752.752 0 0 1-1.062 1.064l-4.21-4.21a.752.752 0 0 1-.08-.09.745.745 0 0 1-.16-.459.76.76 0 0 1 .03-.203c.008-.03.015-.059.027-.087.005-.013.013-.025.019-.037a.748.748 0 0 1 .144-.207l4.23-4.23a.75.75 0 1 1 1.062 1.063L4.5 11.666h8.394a2.874 2.874 0 0 0 2.873-2.874V3.354a.75.75 0 0 1 .752-.751Z"
    />
  </svg>
);
EnterArrow.displayName = 'EnterArrow';
export default EnterArrow;
/* tslint:enable */
/* eslint-enable */
