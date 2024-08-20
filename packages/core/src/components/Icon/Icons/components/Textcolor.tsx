/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface TextcolorProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Textcolor: React.FC<TextcolorProps> = ({size, ...props}) => (
  <svg viewBox="0 0 39 39" fill="currentColor" width={ size || "39" } height={ size || "39" } {...props}>
    <path d="M13.759 20.2662L11.1648 25.8637C10.7848 26.6838 9.81186 27.0405 8.99178 26.6604C8.17171 26.2804 7.81502 25.3075 8.19507 24.4873L17.0123 5.46233C17.2378 4.97358 17.6039 4.57722 18.0453 4.3073C18.4865 4.03752 18.9919 3.90002 19.4994 3.90002C20.007 3.90002 20.5122 4.03752 20.9535 4.3073C21.395 4.57722 21.761 4.9736 21.9866 5.46234L21.9876 5.46472L30.8038 24.4873C31.1838 25.3075 30.8272 26.2804 30.007 26.6604C29.187 27.0405 28.2142 26.6838 27.8341 25.8637L25.2398 20.2662H13.759ZM19.4994 7.87995L23.7229 16.993L15.2759 16.993L19.4994 7.87995Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M35.1004 33.15C35.1004 34.2269 34.2274 35.1 33.1504 35.1H5.85039C4.77344 35.1 3.90039 34.2269 3.90039 33.15C3.90039 32.073 4.77344 31.2 5.85039 31.2H33.1504C34.2274 31.2 35.1004 32.073 35.1004 33.15Z"
      fill="currentColor" />
  </svg>
);
Textcolor.displayName = 'Textcolor';
export default Textcolor;
/* tslint:enable */
/* eslint-enable */
