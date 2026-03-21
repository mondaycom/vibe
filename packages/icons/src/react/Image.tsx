/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ImageProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Image: React.FC<ImageProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M6.997 4.382a2.615 2.615 0 1 0 0 5.23 2.615 2.615 0 0 0 0-5.23ZM6.21 6.209a1.115 1.115 0 1 1 1.577 1.577A1.115 1.115 0 0 1 6.21 6.209Z" fillRule="evenodd"
      clipRule="evenodd" />
    <path d="M2.25 5A2.75 2.75 0 0 1 5 2.25h9.857A2.75 2.75 0 0 1 17.607 5v9.857a2.75 2.75 0 0 1-2.75 2.75H5a2.75 2.75 0 0 1-2.75-2.75V5Zm13.857 0v5.437L13.242 8.38a1.283 1.283 0 0 0-1.634.056l-7.663 7.093a1.245 1.245 0 0 1-.195-.672V5c0-.69.56-1.25 1.25-1.25h9.857c.69 0 1.25.56 1.25 1.25Zm-1.25 11.107H5.53l6.947-6.43 3.631 2.606v2.574c0 .69-.56 1.25-1.25 1.25Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Image.displayName = 'Image';
export default Image;
/* tslint:enable */
/* eslint-enable */
