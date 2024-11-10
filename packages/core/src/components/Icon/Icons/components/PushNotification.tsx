/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface PushNotificationProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const PushNotification: React.FC<PushNotificationProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 21" fill="currentColor" width={ size || "20" } height={ size || "21" } {...props}>
    <path d="M4.573 8.766a.643.643 0 0 0-.643.642v2.572c0 .355.288.643.643.643H15.43a.643.643 0 0 0 .643-.643V9.408a.643.643 0 0 0-.643-.642H4.573Z" />
    <path d="M.8 3.986c0-.82.666-1.486 1.487-1.486h15.428c.82 0 1.486.665 1.486 1.486v12.548c0 .82-.665 1.486-1.486 1.486H2.287A1.486 1.486 0 0 1 .8 16.534V3.986Zm16.915-.122H2.287a.121.121 0 0 0-.122.122v1.632h15.672V3.986a.121.121 0 0 0-.122-.122ZM2.165 6.982v9.552c0 .067.054.122.122.122h15.428a.121.121 0 0 0 .122-.122V6.982H2.165Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
PushNotification.displayName = 'PushNotification';
export default PushNotification;
/* tslint:enable */
/* eslint-enable */
