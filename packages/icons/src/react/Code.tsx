/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CodeProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Code: React.FC<CodeProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M7.29956 5.46967C7.59245 5.76256 7.59245 6.23744 7.29956 6.53033L4.06066 9.76923 7.29956 13.0081C7.59245 13.301 7.59245 13.7759 7.29956 14.0688 7.00667 14.3617 6.53179 14.3617 6.2389 14.0688L2.46967 10.2996C2.17678 10.0067 2.17678 9.53179 2.46967 9.2389L6.2389 5.46967C6.53179 5.17678 7.00667 5.17678 7.29956 5.46967zM12.7004 5.46967C12.9933 5.17678 13.4682 5.17678 13.7611 5.46967L17.5303 9.2389C17.8232 9.53179 17.8232 10.0067 17.5303 10.2996L13.7611 14.0688C13.4682 14.3617 12.9933 14.3617 12.7004 14.0688 12.4076 13.7759 12.4076 13.301 12.7004 13.0081L15.9393 9.76923 12.7004 6.53033C12.4076 6.23744 12.4076 5.76256 12.7004 5.46967z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Code.displayName = 'Code';
export default Code;
/* tslint:enable */
/* eslint-enable */
