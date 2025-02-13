/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SendProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Send: React.FC<SendProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="M16.238 2.302a1.96 1.96 0 0 0-1.07.049L3.588 6.21h-.002a1.96 1.96 0 0 0-.766 3.24l.002.002 2.724 2.727-.092 3.41a.75.75 0 0 0 1.096.685l2.034-1.057 1.96 1.958a1.962 1.962 0 0 0 3.246-.766l3.857-11.58a1.959 1.959 0 0 0-1.41-2.528ZM14.33 4.211 4.064 7.633a.463.463 0 0 0-.297.562.46.46 0 0 0 .117.199l2.467 2.47 7.98-6.653Zm-7.286 8.027-.057 2.119 1.39-.724a.75.75 0 0 1 .877.135l2.35 2.347a.463.463 0 0 0 .636.015.46.46 0 0 0 .126-.195l3.75-11.26-9.072 7.563Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Send.displayName = 'Send';
export default Send;
/* tslint:enable */
/* eslint-enable */
