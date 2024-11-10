/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SwitcherProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Switcher: React.FC<SwitcherProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 21" fill="currentColor" width={ size || "20" } height={ size || "21" } {...props}>
    <path d="M4.95 4.1a1.35 1.35 0 1 1-2.7 0 1.35 1.35 0 0 1 2.7 0ZM3.6 11.85a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7Zm0 6.4a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7Zm6.398 0a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7Zm7.752-1.35a1.35 1.35 0 1 1-2.7 0 1.35 1.35 0 0 1 2.7 0Zm-6.402-6.4a1.35 1.35 0 1 1-2.7 0 1.35 1.35 0 0 1 2.7 0Zm5.052 1.35a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7Zm-6.402-6.4a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7ZM17.75 4.1a1.35 1.35 0 1 1-2.7 0 1.35 1.35 0 0 1 2.7 0Z"
    />
  </svg>
);
Switcher.displayName = 'Switcher';
export default Switcher;
/* tslint:enable */
/* eslint-enable */
