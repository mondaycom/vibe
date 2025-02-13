/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ConnectProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Connect: React.FC<ConnectProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M15.25 5.81066L4.03033 17.0303C3.73744 17.3232 3.26256 17.3232 2.96967 17.0303C2.67678 16.7374 2.67678 16.2626 2.96967 15.9697L14.1893 4.75L15.25 5.81066Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M7.75 4C7.75 3.58579 8.08579 3.25 8.5 3.25H16C16.4142 3.25 16.75 3.58579 16.75 4V11.5C16.75 11.9142 16.4142 12.25 16 12.25C15.5858 12.25 15.25 11.9142 15.25 11.5V5.81066L14.1893 4.75H8.5C8.08579 4.75 7.75 4.41421 7.75 4Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Connect.displayName = 'Connect';
export default Connect;
/* tslint:enable */
/* eslint-enable */
