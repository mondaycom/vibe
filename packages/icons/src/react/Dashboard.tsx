/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DashboardProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Dashboard: React.FC<DashboardProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M4 3.5H16C16.2761 3.5 16.5 3.72386 16.5 4V16C16.5 16.2761 16.2761 16.5 16 16.5H4C3.72386 16.5 3.5 16.2761 3.5 16V4C3.5 3.72386 3.72386 3.5 4 3.5ZM2 4C2 2.89543 2.89543 2 4 2H16C17.1046 2 18 2.89543 18 4V16C18 17.1046 17.1046 18 16 18H4C2.89543 18 2 17.1046 2 16V4ZM5.5 14.25C5.5 14.6642 5.83579 15 6.25 15C6.66421 15 7 14.6642 7 14.25V10.75C7 10.3358 6.66421 10 6.25 10C5.83579 10 5.5 10.3358 5.5 10.75L5.5 14.25ZM10.25 15C9.83579 15 9.5 14.6642 9.5 14.25L9.5 7.75C9.5 7.33579 9.83579 7 10.25 7C10.6642 7 11 7.33579 11 7.75V14.25C11 14.6642 10.6642 15 10.25 15ZM13.5 14.25C13.5 14.6642 13.8358 15 14.25 15C14.6642 15 15 14.6642 15 14.25V5.75C15 5.33579 14.6642 5 14.25 5C13.8358 5 13.5 5.33579 13.5 5.75V14.25Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Dashboard.displayName = 'Dashboard';
export default Dashboard;
/* tslint:enable */
/* eslint-enable */
