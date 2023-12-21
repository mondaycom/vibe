/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DropdownProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Dropdown: React.FC<DropdownProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M3.75 2C2.7835 2 2 2.7835 2 3.75V6.75C2 7.7165 2.7835 8.5 3.75 8.5H16.25C17.2165 8.5 18 7.7165 18 6.75V3.75C18 2.7835 17.2165 2 16.25 2H3.75ZM3.5 3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H16.25C16.3881 3.5 16.5 3.61193 16.5 3.75V6.75C16.5 6.88807 16.3881 7 16.25 7H3.75C3.61193 7 3.5 6.88807 3.5 6.75V3.75ZM10.2002 10.2002C10.6144 10.2002 10.9502 10.536 10.9502 10.9502V15.4393L12.1699 14.2197C12.4628 13.9268 12.9376 13.9268 13.2305 14.2197C13.5234 14.5126 13.5234 14.9874 13.2305 15.2803L10.7305 17.7803C10.4376 18.0732 9.96276 18.0732 9.66987 17.7803L7.16987 15.2803C6.87697 14.9874 6.87697 14.5126 7.16987 14.2197C7.46276 13.9268 7.93763 13.9268 8.23053 14.2197L9.4502 15.4393V10.9502C9.4502 10.536 9.78598 10.2002 10.2002 10.2002Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Dropdown.displayName = 'Dropdown';
export default Dropdown;
/* tslint:enable */
/* eslint-enable */
