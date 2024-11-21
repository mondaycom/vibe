/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface PushNotificationProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const PushNotification: React.FC<PushNotificationProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2.461 9.284c0-.378.307-.685.686-.685h13.714c.378 0 .685.307.685.685v2.743a.686.686 0 0 1-.685.686H3.147a.686.686 0 0 1-.686-.686V9.284Z" />
    <path d="M20 4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4Zm-1.5 12V7.5h-17V16a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5Zm0-12v2h-17V4a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
PushNotification.displayName = 'PushNotification';
export default PushNotification;
/* tslint:enable */
/* eslint-enable */
