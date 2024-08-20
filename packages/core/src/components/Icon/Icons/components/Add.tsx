/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface AddProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Add: React.FC<AddProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 21" fill="currentColor" width={ size || "20" } height={ size || "21" } {...props}>
    <path d="M10 2.65771C10.4142 2.65771 10.75 2.9935 10.75 3.40771V9.65772H17C17.4142 9.65772 17.75 9.9935 17.75 10.4077C17.75 10.8219 17.4142 11.1577 17 11.1577H10.75V17.4077C10.75 17.8219 10.4142 18.1577 10 18.1577C9.58579 18.1577 9.25 17.8219 9.25 17.4077V11.1577H3C2.58579 11.1577 2.25 10.8219 2.25 10.4077C2.25 9.9935 2.58579 9.65772 3 9.65772H9.25V3.40771C9.25 2.9935 9.58579 2.65771 10 2.65771Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Add.displayName = 'Add';
export default Add;
/* tslint:enable */
/* eslint-enable */
