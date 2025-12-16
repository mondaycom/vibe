/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface NavigationArrowProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const NavigationArrow: React.FC<NavigationArrowProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M3.26 2.005c.19-.016.383.01.566.072l13.227 4.578c1.27.436 1.209 2.223-.046 2.613l-5.919 1.825-1.821 5.913v.002c-.39 1.254-2.177 1.316-2.613.045v.001L2.076 3.827a1.376 1.376 0 0 1-.042-.756l.055-.186a1.37 1.37 0 0 1 .313-.482l.146-.126c.154-.116.332-.2.522-.243l.19-.029ZM7.946 16.2l1.731-5.62c.065-.216.184-.414.345-.572l.132-.113c.13-.098.277-.17.433-.216v-.001L16.2 7.947 3.577 3.577 7.946 16.2ZM3.376 3.373l-.003.002-.588.206.709-.245-.001-.003-.118.04Z"
    />
  </svg>
);
NavigationArrow.displayName = 'NavigationArrow';
export default NavigationArrow;
/* tslint:enable */
/* eslint-enable */
