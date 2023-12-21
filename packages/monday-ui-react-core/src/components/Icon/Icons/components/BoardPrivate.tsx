/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface BoardPrivateProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const BoardPrivate: React.FC<BoardPrivateProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V8.07833C17.0321 8.16476 17.5579 8.32923 18 8.60307V5C18 3.89543 17.1046 3 16 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H10.499V15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM17.2933 12.4648V13.4775H14.3638V12.4648C14.3638 11.6558 15.0196 11 15.8285 11C16.6375 11 17.2933 11.6558 17.2933 12.4648ZM12.1693 13.4775H12.8638V12.4648C12.8638 10.8274 14.1911 9.5 15.8285 9.5C17.4659 9.5 18.7933 10.8274 18.7933 12.4648V13.4775H19.4924C19.7625 13.4775 19.9815 13.6965 19.9815 13.9667V19.5108C19.9815 19.781 19.7625 20 19.4924 20H12.1693C11.8992 20 11.6802 19.781 11.6802 19.5108V13.9667C11.6802 13.6965 11.8992 13.4775 12.1693 13.4775Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
BoardPrivate.displayName = 'BoardPrivate';
export default BoardPrivate;
/* tslint:enable */
/* eslint-enable */
