/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SortDescendingProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const SortDescending: React.FC<SortDescendingProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10 17.5251C10.2086 17.5251 10.3973 17.4397 10.5331 17.302L12.933 14.8991C13.2255 14.6062 13.2255 14.1313 12.933 13.8384C12.6404 13.5455 12.1662 13.5455 11.8736 13.8384L10.7491 14.9644L10.7491 3.22465C10.7491 2.81044 10.4137 2.47465 10 2.47465C9.58633 2.47465 9.25097 2.81044 9.25097 3.22465L9.25097 14.9644L8.12637 13.8384C7.83384 13.5455 7.35957 13.5455 7.06705 13.8384C6.77453 14.1313 6.77453 14.6062 7.06705 14.8991L9.47034 17.3054C9.48492 17.32 9.50004 17.3339 9.51565 17.3472C9.64625 17.4581 9.81533 17.5251 10 17.5251Z"
      fill="currentColor" />
  </svg>
);
SortDescending.displayName = 'SortDescending';
export default SortDescending;
/* tslint:enable */
/* eslint-enable */
