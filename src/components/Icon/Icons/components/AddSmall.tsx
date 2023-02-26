/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface AddSmallProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const AddSmall: React.FC<AddSmallProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.75 6C10.75 5.58579 10.4142 5.25 10 5.25C9.58579 5.25 9.25 5.58579 9.25 6V9.25H6C5.58579 9.25 5.25 9.58579 5.25 10C5.25 10.4142 5.58579 10.75 6 10.75H9.25V14C9.25 14.4142 9.58579 14.75 10 14.75C10.4142 14.75 10.75 14.4142 10.75 14V10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H10.75V6Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
AddSmall.displayName = 'AddSmall';
export default AddSmall;
/* tslint:enable */
/* eslint-enable */
