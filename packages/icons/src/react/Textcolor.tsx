/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface TextcolorProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Textcolor: React.FC<TextcolorProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M18 17C18 17.5523 17.5523 18 17 18H3C2.44772 18 2 17.5523 2 17 2 16.4477 2.44772 16 3 16H17C17.5523 16 18 16.4477 18 17zM10.0001 4.04099L12.166 8.71436 12.9439 10.3929 14.2743 13.2634C14.4692 13.684 14.9681 13.8669 15.3886 13.672 15.8092 13.4771 15.9921 12.9782 15.7972 12.5576L11.2761 2.80241 11.2756 2.80119C11.1599 2.55055 10.9722 2.34728 10.7458 2.20886 10.5195 2.07051 10.2604 2 10.0001 2 9.73982 2 9.48068 2.07051 9.25442 2.20886 9.02803 2.34728 8.84032 2.55054 8.72465 2.80118L8.72408 2.80241 4.203 12.5576C4.0081 12.9782 4.19102 13.4771 4.61157 13.672 5.03212 13.8669 5.53104 13.684 5.72594 13.2634L7.0563 10.3929 7.83422 8.71436 10.0001 4.04099z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M7.83422 8.71436C9.52588 8.71436 10.4743 8.71436 12.166 8.71436L12.9439 10.3929H7.0563L7.83422 8.71436Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"
    />
  </svg>
);
Textcolor.displayName = 'Textcolor';
export default Textcolor;
/* tslint:enable */
/* eslint-enable */
