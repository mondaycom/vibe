/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface BoltProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Bolt: React.FC<BoltProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M11.3336 2.28375C11.6473 2.38119 11.8611 2.67147 11.8611 2.99999V7.80555H15C15.2785 7.80555 15.5341 7.95989 15.6638 8.20639C15.7934 8.45289 15.7758 8.75094 15.618 8.98045L9.50692 17.8693C9.32081 18.1401 8.98017 18.2581 8.66643 18.1607C8.35269 18.0632 8.13889 17.773 8.13889 17.4444V12.6389H5C4.72148 12.6389 4.4659 12.4845 4.33624 12.238C4.20657 11.9915 4.22418 11.6935 4.38197 11.464L10.4931 2.5751C10.6792 2.30438 11.0198 2.1863 11.3336 2.28375ZM6.42577 11.1389H8.88889C9.3031 11.1389 9.63889 11.4747 9.63889 11.8889V15.0297L13.5742 9.30555H11.1111C10.6969 9.30555 10.3611 8.96976 10.3611 8.55555V5.41475L6.42577 11.1389Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Bolt.displayName = 'Bolt';
export default Bolt;
/* tslint:enable */
/* eslint-enable */
