/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ConnectProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Connect: React.FC<ConnectProps> = ({size, ...props}) => (
  <svg viewBox="0 0 15 15" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M14.0303 0.96967C14.3232 1.26256 14.3232 1.73744 14.0303 2.03033L2.03033 14.0303C1.73744 14.3232 1.26256 14.3232 0.96967 14.0303C0.676777 13.7374 0.676777 13.2626 0.96967 12.9697L12.9697 0.96967C13.2626 0.676777 13.7374 0.676777 14.0303 0.96967Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M5.75 1C5.75 0.585786 6.08579 0.25 6.5 0.25H14C14.4142 0.25 14.75 0.585786 14.75 1V8.5C14.75 8.91421 14.4142 9.25 14 9.25C13.5858 9.25 13.25 8.91421 13.25 8.5V1.75H6.5C6.08579 1.75 5.75 1.41421 5.75 1Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Connect.displayName = 'Connect';
export default Connect;
/* tslint:enable */
/* eslint-enable */
