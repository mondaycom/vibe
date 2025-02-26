/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ReplyAllProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ReplyAll: React.FC<ReplyAllProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="M8.175 3.428a.75.75 0 0 1 .053 1.06L3.747 9.444l4.506 5.508a.75.75 0 0 1-1.161.95L2.177 9.894a.75.75 0 0 1 .025-.978l4.914-5.434a.75.75 0 0 1 1.06-.054Z"
      fillRule="evenodd" clipRule="evenodd" />
    <path fill="currentColor" d="M11.25 3.215a.75.75 0 0 1 .48.7v2.694c1.75.254 3.178 1.386 4.207 2.88 1.172 1.702 1.889 3.95 2.06 6.216a.75.75 0 0 1-1.367.479c-.651-.957-1.817-1.782-3.012-2.376a11.42 11.42 0 0 0-1.64-.667 7.722 7.722 0 0 0-.249-.073v2.382a.75.75 0 0 1-1.322.484l-5.058-5.98a.75.75 0 0 1 .018-.99l5.058-5.554a.75.75 0 0 1 .825-.195ZM6.92 9.487l3.31 3.915v-1.225a.75.75 0 0 1 .75-.75c.385 0 .905.114 1.445.282.559.175 1.204.43 1.86.756.61.303 1.25.679 1.848 1.123-.316-1.216-.804-2.338-1.431-3.248-.996-1.446-2.277-2.285-3.723-2.285a.75.75 0 0 1-.75-.75V5.853L6.92 9.487Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
ReplyAll.displayName = 'ReplyAll';
export default ReplyAll;
/* tslint:enable */
/* eslint-enable */
