/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ShortTextProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ShortText: React.FC<ShortTextProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2.75 5.5C2.33579 5.5 2 5.83579 2 6.25C2 6.66421 2.33579 7 2.75 7H17.25C17.6642 7 18 6.66421 18 6.25C18 5.83579 17.6642 5.5 17.25 5.5H2.75ZM2.75 9.5C2.33579 9.5 2 9.83579 2 10.25C2 10.6642 2.33579 11 2.75 11H9.5C9.91421 11 10.25 10.6642 10.25 10.25C10.25 9.83579 9.91421 9.5 9.5 9.5H2.75ZM13.9502 11H12.75V12.25C12.75 12.6642 12.4142 13 12 13C11.5858 13 11.25 12.6642 11.25 12.25V10.25C11.25 9.83579 11.5858 9.5 12 9.5H17.3C17.7142 9.5 18.05 9.83579 18.05 10.25V12.25C18.05 12.6642 17.7142 13 17.3 13C16.8858 13 16.55 12.6642 16.55 12.25V11H15.4502V15.25H16.2002C16.6144 15.25 16.9502 15.5858 16.9502 16C16.9502 16.4142 16.6144 16.75 16.2002 16.75H13.2002C12.786 16.75 12.4502 16.4142 12.4502 16C12.4502 15.5858 12.786 15.25 13.2002 15.25H13.9502V11Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
ShortText.displayName = 'ShortText';
export default ShortText;
/* tslint:enable */
/* eslint-enable */
