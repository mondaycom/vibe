/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SwitcherProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Switcher: React.FC<SwitcherProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <g clipPath="url(#a)">
      <path d="M2.308 15.383a2.308 2.308 0 1 1 0 4.616 2.308 2.308 0 0 1 0-4.616Zm0-7.691a2.308 2.308 0 1 1 0 4.615 2.308 2.308 0 0 1 0-4.615Zm2.307-5.384a2.308 2.308 0 1 0-4.615 0 2.308 2.308 0 0 0 4.615 0ZM10 15.383A2.308 2.308 0 1 1 10 20a2.308 2.308 0 0 1 0-4.616Zm10 2.308a2.308 2.308 0 1 0-4.615 0 2.308 2.308 0 0 0 4.615 0Zm-2.308-9.999a2.308 2.308 0 1 1 0 4.615 2.308 2.308 0 0 1 0-4.615ZM20 2.308a2.308 2.308 0 1 0-4.615 0 2.308 2.308 0 0 0 4.615 0ZM10 7.692a2.308 2.308 0 1 1 0 4.615 2.308 2.308 0 0 1 0-4.615Zm2.308-5.384a2.308 2.308 0 1 0-4.616 0 2.308 2.308 0 0 0 4.616 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
Switcher.displayName = 'Switcher';
export default Switcher;
/* tslint:enable */
/* eslint-enable */
