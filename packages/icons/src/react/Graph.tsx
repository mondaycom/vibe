/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface GraphProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Graph: React.FC<GraphProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M3.5 2.74512C3.5 2.3309 3.16421 1.99512 2.75 1.99512C2.33579 1.99512 2 2.3309 2 2.74512V17.2544C2 17.6686 2.33579 18.0044 2.75 18.0044H17.2593C17.6735 18.0044 18.0093 17.6686 18.0093 17.2544C18.0093 16.8402 17.6735 16.5044 17.2593 16.5044H3.5V2.74512ZM13.7888 4.925C13.6235 4.80694 13.4174 4.76097 13.2177 4.79758C13.0179 4.8342 12.8415 4.95028 12.7288 5.11927L8.7719 11.0547L6.62854 8.91132C6.33565 8.61843 5.86078 8.61843 5.56788 8.91132C5.27499 9.20421 5.27499 9.67909 5.56788 9.97198L8.35814 12.7622C8.51702 12.9211 8.73877 13.0004 8.96237 12.9783C9.18597 12.9561 9.38787 12.8349 9.51251 12.6479L13.5472 6.59581L16.8233 8.93585C17.1604 9.17661 17.6288 9.09854 17.8695 8.76148C18.1103 8.42442 18.0322 7.95601 17.6952 7.71525L13.7888 4.925Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Graph.displayName = 'Graph';
export default Graph;
/* tslint:enable */
/* eslint-enable */
