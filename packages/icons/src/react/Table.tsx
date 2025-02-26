/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface TableProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Table: React.FC<TableProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M13 4.5H10.5V7H13V4.5ZM14.5 4.5V7H16.5V5C16.5 4.72386 16.2761 4.5 16 4.5H14.5ZM13 8.5H10.5L10.5 11H13L13 8.5ZM14.5 11L14.5 8.5H16.5V11H14.5ZM13 12.5H10.5V15.5H13V12.5ZM14.5 15.5V12.5H16.5V15C16.5 15.2761 16.2761 15.5 16 15.5H14.5ZM4 4.5H9V7H3.5V5C3.5 4.72386 3.72386 4.5 4 4.5ZM3.5 8.5H9L9 11H3.5V8.5ZM3.5 12.5H9V15.5H4C3.72386 15.5 3.5 15.2761 3.5 15V12.5ZM4 3C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V5C18 3.89543 17.1046 3 16 3H4Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Table.displayName = 'Table';
export default Table;
/* tslint:enable */
/* eslint-enable */
