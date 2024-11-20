/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SwitcherProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Switcher: React.FC<SwitcherProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <g clipPath="url(#a)">
      <path d="M4.5 2.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm7.75 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm7.75 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM4.5 10A2.25 2.25 0 1 1 0 10a2.25 2.25 0 0 1 4.5 0Zm7.75 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM20 10a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM4.5 17.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm7.75 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm7.75 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
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
