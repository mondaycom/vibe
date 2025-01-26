/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface BulletProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Bullet: React.FC<BulletProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <circle cx="10" cy="10" r="3" fill="currentColor" />
  </svg>
);
Bullet.displayName = 'Bullet';
export default Bullet;
/* tslint:enable */
/* eslint-enable */
