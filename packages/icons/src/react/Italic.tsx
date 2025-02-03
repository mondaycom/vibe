/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ItalicProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Italic: React.FC<ItalicProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
      <path d="M13.2523 2.2937C13.6423 2.43301 13.8456 2.86218 13.7063 3.25226L8.70631 17.2523C8.567 17.6423 8.13784 17.8456 7.74775 17.7063C7.35767 17.567 7.15438 17.1378 7.2937 16.7478L12.2937 2.74775C12.433 2.35767 12.8622 2.15438 13.2523 2.2937Z"
      />
      <path d="M7.25 3C7.25 2.58579 7.58579 2.25 8 2.25H17C17.4142 2.25 17.75 2.58579 17.75 3 17.75 3.41421 17.4142 3.75 17 3.75H8C7.58579 3.75 7.25 3.41421 7.25 3zM3.25 17C3.25 16.5858 3.58579 16.25 4 16.25H13C13.4142 16.25 13.75 16.5858 13.75 17 13.75 17.4142 13.4142 17.75 13 17.75H4C3.58579 17.75 3.25 17.4142 3.25 17z"
      />
    </g>
  </svg>
);
Italic.displayName = 'Italic';
export default Italic;
/* tslint:enable */
/* eslint-enable */
