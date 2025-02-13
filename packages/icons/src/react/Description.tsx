/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DescriptionProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Description: React.FC<DescriptionProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2.05 5.002a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5h-14a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5h-14a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Description.displayName = 'Description';
export default Description;
/* tslint:enable */
/* eslint-enable */
