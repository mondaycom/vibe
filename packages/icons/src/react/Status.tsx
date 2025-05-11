/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface StatusProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Status: React.FC<StatusProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M1.99609 2.77185C1.99609 2.34422 2.34275 1.99756 2.77038 1.99756H17.2238C17.6514 1.99756 17.998 2.34422 17.998 2.77185V17.2252C17.998 17.6529 17.6514 17.9995 17.2238 17.9995H2.77038C2.34275 17.9995 1.99609 17.6529 1.99609 17.2252V2.77185ZM3.54467 3.54613V6.81511V8.36369V11.6332V13.1817V16.4509H16.4495V13.1817V11.6332V8.36369V6.81511V3.54613H3.54467Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M3.54467 6.81511H16.4495V8.36369H3.54467V6.81511zM3.54467 11.6332H16.4495V13.1817H3.54467V11.6332z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"
    />
  </svg>
);
Status.displayName = 'Status';
export default Status;
/* tslint:enable */
/* eslint-enable */
