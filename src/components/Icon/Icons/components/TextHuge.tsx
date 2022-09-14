/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface TextHugeProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const TextHuge: React.FC<TextHugeProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M11.1975 2.75H8.79337L3.646 17.25H6.55779L7.62406 13.9904H12.3584L13.4337 17.25H16.3543L11.1975 2.75ZM11.5524 11.5288H8.42957L9.99099 6.77265L11.5524 11.5288Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
TextHuge.displayName = 'TextHuge';
export default TextHuge;
/* tslint:enable */
/* eslint-enable */
