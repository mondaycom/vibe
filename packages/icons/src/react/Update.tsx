/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface UpdateProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Update: React.FC<UpdateProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="M10.437 1.95a7.512 7.512 0 0 1 6.006 2.982 7.517 7.517 0 0 1-9.604 11.13l-2.543 1.21c-1.062.507-2.172-.602-1.666-1.665l1.21-2.543A7.508 7.508 0 0 1 10.438 1.95Zm2.686 2.127a6.017 6.017 0 0 0-2.686-.627h-.003a6.007 6.007 0 0 0-5.109 9.182.75.75 0 0 1 .04.719l-1.078 2.264 2.264-1.078a.75.75 0 0 1 .719.04 6.018 6.018 0 1 0 5.853-10.5Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Update.displayName = 'Update';
export default Update;
/* tslint:enable */
/* eslint-enable */
