/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface BullletProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Bulllet: React.FC<BullletProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <circle cx="10" cy="10" r="3" fill="currentColor" />
  </svg>
);
Bulllet.displayName = 'Bulllet';
export default Bulllet;
/* tslint:enable */
/* eslint-enable */
