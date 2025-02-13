/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DowngradeProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Downgrade: React.FC<DowngradeProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10 5.8a.78.78 0 0 1 .781.781v5.15l1.644-1.395a.781.781 0 1 1 1.01 1.192l-2.93 2.486a.781.781 0 0 1-1.01 0l-2.93-2.486a.781.781 0 0 1 1.01-1.192l1.644 1.395V6.58c0-.431.35-.781.781-.781Z"
      fillRule="evenodd" clipRule="evenodd" />
    <path d="M2.25 5A2.75 2.75 0 0 1 5 2.25h10A2.75 2.75 0 0 1 17.75 5v10A2.75 2.75 0 0 1 15 17.75H5A2.75 2.75 0 0 1 2.25 15V5ZM5 3.75c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25H5Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Downgrade.displayName = 'Downgrade';
export default Downgrade;
/* tslint:enable */
/* eslint-enable */
