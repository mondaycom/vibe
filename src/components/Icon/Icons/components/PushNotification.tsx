/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface PushNotificationProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const PushNotification: React.FC<PushNotificationProps> = ({size, ...props}) => (
  <svg viewBox="0 0 28 28" fill="currentColor" width={ size || "28" } height={ size || "28" } {...props}>
    <path d="M26 3.62H2C1.72386 3.62 1.5 3.84385 1.5 4.11999V6.9701H26.5V4.11999C26.5 3.84385 26.2761 3.62 26 3.62ZM1.5 23.64V8.4701H26.5V23.64C26.5 23.9161 26.2761 24.14 26 24.14H2C1.72386 24.14 1.5 23.9161 1.5 23.64ZM2 2.12C0.895431 2.12 0 3.01542 0 4.11999V23.64C0 24.7446 0.895431 25.64 2 25.64H26C27.1046 25.64 28 24.7446 28 23.64V4.11999C28 3.01543 27.1046 2.12 26 2.12H2ZM4 10C3.44772 10 3 10.4477 3 11V15C3 15.5523 3.44772 16 4 16H24C24.5523 16 25 15.5523 25 15V11C25 10.4477 24.5523 10 24 10H4Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
PushNotification.displayName = 'PushNotification';
export default PushNotification;
/* tslint:enable */
/* eslint-enable */
