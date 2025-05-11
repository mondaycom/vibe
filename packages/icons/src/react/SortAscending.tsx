/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SortAscendingProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const SortAscending: React.FC<SortAscendingProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10 2.47494C10.2086 2.47494 10.3973 2.5603 10.5331 2.69802L12.933 5.10095C13.2255 5.39384 13.2255 5.86871 12.933 6.16161C12.6404 6.4545 12.1662 6.4545 11.8736 6.16161L10.7491 5.03562V16.7753C10.7491 17.1896 10.4137 17.5253 10 17.5253C9.58633 17.5253 9.25097 17.1896 9.25097 16.7753V5.03558L8.12637 6.16161C7.83384 6.4545 7.35957 6.4545 7.06705 6.16161C6.77453 5.86871 6.77453 5.39384 7.06705 5.10095L9.47034 2.69461C9.48492 2.68001 9.50004 2.66608 9.51565 2.65283C9.64625 2.54187 9.81533 2.47494 10 2.47494Z"
      fill="currentColor" />
  </svg>
);
SortAscending.displayName = 'SortAscending';
export default SortAscending;
/* tslint:enable */
/* eslint-enable */
