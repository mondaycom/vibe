/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ScheduledEmailProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ScheduledEmail: React.FC<ScheduledEmailProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2.25 3A.75.75 0 0 1 3 2.25h14a.75.75 0 0 1 .75.75v3.735c0 .504-.55.83-1.023.656a.706.706 0 0 1-.477-.65V4.716l-4.448 3.421a2.955 2.955 0 0 1-3.604 0L3.75 4.716v7.534h4.5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75V3Zm2.705.75h10.09l-4.158 3.198a1.455 1.455 0 0 1-1.774 0L4.955 3.75Z"
      fillRule="evenodd" clipRule="evenodd" />
    <path d="M15.65 11a.65.65 0 1 0-1.3 0v2.143c0 .438.355.793.793.793h1.57a.65.65 0 1 0 0-1.3H15.65V11Z" />
    <path d="M10.3 13a4.7 4.7 0 1 1 9.4 0 4.7 4.7 0 0 1-9.4 0ZM15 9.7a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Z" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
ScheduledEmail.displayName = 'ScheduledEmail';
export default ScheduledEmail;
/* tslint:enable */
/* eslint-enable */
