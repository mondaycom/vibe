/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface MinusSmallProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const MinusSmall: React.FC<MinusSmallProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M5 9.955a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75Z" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
MinusSmall.displayName = 'MinusSmall';
export default MinusSmall;
/* tslint:enable */
/* eslint-enable */
