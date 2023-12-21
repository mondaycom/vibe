/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface MoreBelowProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const MoreBelow: React.FC<MoreBelowProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2.25 5C2.25 3.48122 3.48122 2.25 5 2.25H15C16.5188 2.25 17.75 3.48122 17.75 5V15C17.75 16.5188 16.5188 17.75 15 17.75H5C3.48122 17.75 2.25 16.5188 2.25 15V5ZM5 3.75C4.30964 3.75 3.75 4.30964 3.75 5V15C3.75 15.6904 4.30964 16.25 5 16.25H15C15.6904 16.25 16.25 15.6904 16.25 15V5C16.25 4.30964 15.6904 3.75 15 3.75H5Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M12.0822 13.5678C11.7893 13.2749 11.7893 12.8 12.0822 12.5071L13.5643 11.025L12.0822 9.54281C11.7893 9.24991 11.7893 8.77504 12.0822 8.48215C12.3751 8.18925 12.8499 8.18925 13.1428 8.48215L15.1553 10.4946C15.4482 10.7875 15.4482 11.2624 15.1553 11.5553L13.1428 13.5678C12.8499 13.8607 12.3751 13.8607 12.0822 13.5678Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M15.375 11.025C15.375 11.4392 15.0392 11.775 14.625 11.775L6.575 11.775C6.22359 11.775 5.88657 11.6354 5.63808 11.3869C5.3896 11.1384 5.25 10.8014 5.25 10.45L5.25 6.99996C5.25 6.58575 5.58579 6.24996 6 6.24996C6.41421 6.24996 6.75 6.58575 6.75 6.99996L6.75 10.275L14.625 10.275C15.0392 10.275 15.375 10.6107 15.375 11.025Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
MoreBelow.displayName = 'MoreBelow';
export default MoreBelow;
/* tslint:enable */
/* eslint-enable */
