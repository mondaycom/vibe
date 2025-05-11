/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface LabsProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Labs: React.FC<LabsProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="m8.672 9.859.16-.463a.75.75 0 0 1-.16.463Z" />
    <path fill="currentColor" d="M7.332 3.75h-.849a.75.75 0 0 1 0-1.5h7.462a.75.75 0 0 1 0 1.5h-.85v5.386l3.67 4.67a2.348 2.348 0 0 1-1.846 3.801h-9.41a2.348 2.348 0 0 1-1.847-3.8l3.67-4.67V3.75Zm1.5 0v5.646l-.16.463-3.83 4.874a.85.85 0 0 0 .667 1.374h9.41a.849.849 0 0 0 .667-1.373l-3.83-4.875a.75.75 0 0 1-.16-.463V3.75H8.832Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Labs.displayName = 'Labs';
export default Labs;
/* tslint:enable */
/* eslint-enable */
