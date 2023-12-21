/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface TextBigProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const TextBig: React.FC<TextBigProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M13.9499 16H13.95L12.7112 12.6374H12.7112L13.9499 16ZM5 16L9.5201 4H9.52007L4.99998 16H5ZM6.40768 16.5L7.63819 13.1374H12.3626L13.6013 16.5H15.7226L10.8258 3.5H9.17412L4.27734 16.5H6.40768ZM9.99589 5.2363L12.3913 11.772H12.3913L9.9959 5.23626L9.99589 5.2363ZM11.6755 11.272H8.31625L9.99587 6.68922L11.6755 11.272Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
TextBig.displayName = 'TextBig';
export default TextBig;
/* tslint:enable */
/* eslint-enable */
