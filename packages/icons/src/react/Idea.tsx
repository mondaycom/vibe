/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface IdeaProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Idea: React.FC<IdeaProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="M10.097 1.25a.75.75 0 0 1 .75.75v1.934a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM4.412 3.31a.75.75 0 0 1 1.06.005l1.367 1.38A.75.75 0 1 1 5.773 5.75L4.407 4.37a.75.75 0 0 1 .005-1.06Zm11.369 0a.75.75 0 0 1 .005 1.06L14.42 5.75a.75.75 0 1 1-1.066-1.055l1.367-1.38a.75.75 0 0 1 1.06-.005Z"
    />
    <path fill="currentColor" d="M9.986 5.99a5.264 5.264 0 0 1 5.373 5.283v.007a5.263 5.263 0 0 1-.945 2.944l-.141.201c-.357.51-.69.986-.953 1.484-.291.553-.462 1.096-.462 1.621a1.255 1.255 0 0 1-1.252 1.22H8.587a1.253 1.253 0 0 1-1.25-1.221c0-.514-.167-1.043-.453-1.584-.268-.506-.614-.992-.984-1.51l-.093-.132a5.264 5.264 0 0 1 4.18-8.313ZM8.827 17.25h2.54c.049-.753.307-1.434.626-2.04.31-.588.702-1.148 1.052-1.647l.138-.197a3.763 3.763 0 0 0 .676-2.102 3.763 3.763 0 1 0-6.83 2.17l.101.142c.36.503.763 1.069 1.08 1.668.315.595.568 1.265.617 2.006Z"
      fillRule="evenodd" clipRule="evenodd" />
    <path fill="currentColor" d="M1.25 7.84A.75.75 0 0 1 2 7.09h1.934a.75.75 0 1 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm14.259 0a.75.75 0 0 1 .75-.75h1.934a.75.75 0 0 1 0 1.5H16.26a.75.75 0 0 1-.75-.75Z"
    />
  </svg>
);
Idea.displayName = 'Idea';
export default Idea;
/* tslint:enable */
/* eslint-enable */
