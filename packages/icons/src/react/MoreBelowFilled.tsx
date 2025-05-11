/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface MoreBelowFilledProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const MoreBelowFilled: React.FC<MoreBelowFilledProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M4 2C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V4C18 2.89543 17.1046 2 16 2H4ZM12.0822 13.5678C11.7893 13.2749 11.7893 12.8 12.0822 12.5071L12.8143 11.775L6.575 11.775C6.22359 11.775 5.88657 11.6354 5.63808 11.3869C5.3896 11.1385 5.25 10.8014 5.25 10.45L5.25 7.00002C5.25 6.58581 5.58579 6.25002 6 6.25002C6.41421 6.25002 6.75 6.58581 6.75 7.00002V10.275L12.8144 10.275L12.0822 9.54281C11.7893 9.24991 11.7893 8.77504 12.0822 8.48214C12.3751 8.18925 12.8499 8.18925 13.1428 8.48215L15.1553 10.4946C15.2328 10.5721 15.2898 10.6623 15.3263 10.7585C15.3579 10.842 15.3742 10.93 15.375 11.0181L15.375 11.025C15.375 11.1359 15.3509 11.2412 15.3078 11.3359C15.281 11.3947 15.2462 11.4508 15.2034 11.5025C15.1867 11.5227 15.1689 11.5421 15.1502 11.5604L13.1428 13.5678C12.8499 13.8607 12.3751 13.8607 12.0822 13.5678Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
MoreBelowFilled.displayName = 'MoreBelowFilled';
export default MoreBelowFilled;
/* tslint:enable */
/* eslint-enable */
