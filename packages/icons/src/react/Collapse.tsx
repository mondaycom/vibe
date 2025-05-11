/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CollapseProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Collapse: React.FC<CollapseProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M6.53033 2.46967C6.23744 2.17678 5.76256 2.17678 5.46967 2.46967C5.17678 2.76256 5.17678 3.23744 5.46967 3.53033L9.46967 7.53033C9.76256 7.82322 10.2374 7.82322 10.5303 7.53033L14.5303 3.53033C14.8232 3.23744 14.8232 2.76256 14.5303 2.46967C14.2374 2.17678 13.7626 2.17678 13.4697 2.46967L10 5.93934L6.53033 2.46967ZM5.46967 16.5696C5.17678 16.8625 5.17678 17.3374 5.46967 17.6303C5.76256 17.9232 6.23744 17.9232 6.53033 17.6303L10 14.1606L13.4697 17.6303C13.7626 17.9232 14.2374 17.9232 14.5303 17.6303C14.8232 17.3374 14.8232 16.8625 14.5303 16.5696L10.5303 12.5696C10.2374 12.2768 9.76256 12.2768 9.46967 12.5696L5.46967 16.5696Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Collapse.displayName = 'Collapse';
export default Collapse;
/* tslint:enable */
/* eslint-enable */
