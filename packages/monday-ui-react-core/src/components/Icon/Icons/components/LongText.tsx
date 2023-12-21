/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface LongTextProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const LongText: React.FC<LongTextProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2 3.25C2 2.83579 2.33579 2.5 2.75 2.5H17.25C17.6642 2.5 18 2.83579 18 3.25C18 3.66421 17.6642 4 17.25 4H2.75C2.33579 4 2 3.66421 2 3.25ZM2 7.25C2 6.83579 2.33579 6.5 2.75 6.5H17.25C17.6642 6.5 18 6.83579 18 7.25C18 7.66421 17.6642 8 17.25 8H2.75C2.33579 8 2 7.66421 2 7.25ZM2.75 10.5C2.33579 10.5 2 10.8358 2 11.25C2 11.6642 2.33579 12 2.75 12H9.5C9.91421 12 10.25 11.6642 10.25 11.25C10.25 10.8358 9.91421 10.5 9.5 10.5H2.75ZM13.9502 12H12.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V11.25C11.25 10.8358 11.5858 10.5 12 10.5H17.3C17.7142 10.5 18.05 10.8358 18.05 11.25V13.25C18.05 13.6642 17.7142 14 17.3 14C16.8858 14 16.55 13.6642 16.55 13.25V12H15.4502V16.25H16.2002C16.6144 16.25 16.9502 16.5858 16.9502 17C16.9502 17.4142 16.6144 17.75 16.2002 17.75H13.2002C12.786 17.75 12.4502 17.4142 12.4502 17C12.4502 16.5858 12.786 16.25 13.2002 16.25H13.9502V12Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
LongText.displayName = 'LongText';
export default LongText;
/* tslint:enable */
/* eslint-enable */
