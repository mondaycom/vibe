/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface AddProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Add: React.FC<AddProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <g id="Icon / Basic / Add">
      <path id="Union" d="M10 2.25C10.4142 2.25 10.75 2.58579 10.75 3V9.25H17C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75H10.75V17C10.75 17.4142 10.4142 17.75 10 17.75C9.58579 17.75 9.25 17.4142 9.25 17V10.75H3C2.58579 10.75 2.25 10.4142 2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H9.25V3C9.25 2.58579 9.58579 2.25 10 2.25Z"
        fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    </g>
  </svg>
);
Add.displayName = 'Add';
export default Add;
/* tslint:enable */
/* eslint-enable */
