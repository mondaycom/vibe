/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface MirrorProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Mirror: React.FC<MirrorProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M4.08058 4.08058C2.90848 5.25269 2.25 6.8424 2.25 8.5C2.25 8.91421 2.58579 9.25 3 9.25C3.41421 9.25 3.75 8.91421 3.75 8.5C3.75 7.24022 4.25044 6.03204 5.14124 5.14124C6.03204 4.25045 7.24022 3.75 8.5 3.75C9.75978 3.75 10.968 4.25044 11.8588 5.14124C12.7496 6.03204 13.25 7.24022 13.25 8.5V15.1893H14.75V8.5C14.75 6.8424 14.0915 5.25268 12.9194 4.08058C11.7473 2.90848 10.1576 2.25 8.5 2.25C6.8424 2.25 5.25268 2.90848 4.08058 4.08058Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M10.4697 13.4697C10.1768 13.7626 10.1768 14.2374 10.4697 14.5303L13.4697 17.5303C13.6103 17.671 13.8011 17.75 14 17.75C14.1989 17.75 14.3897 17.671 14.5303 17.5303L17.5303 14.5303C17.8232 14.2374 17.8232 13.7626 17.5303 13.4697C17.2374 13.1768 16.7626 13.1768 16.4697 13.4697L14.75 15.1893H13.25L11.5303 13.4697C11.2374 13.1768 10.7626 13.1768 10.4697 13.4697Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Mirror.displayName = 'Mirror';
export default Mirror;
/* tslint:enable */
/* eslint-enable */
