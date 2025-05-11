/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface FilesProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Files: React.FC<FilesProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M8.871 6.767c0-.38.308-.688.688-.688h3.668a.688.688 0 0 1 0 1.376H9.559a.688.688 0 0 1-.688-.688Zm.688 2.063a.688.688 0 1 0 0 1.376h3.668a.688.688 0 0 0 0-1.376H9.559Z"
    />
    <path d="M6.688 2A.688.688 0 0 0 6 2.688v11.798c0 .38.308.688.688.688h9.842c.38 0 .688-.308.688-.688V2.688A.688.688 0 0 0 16.53 2H6.688Zm.687 11.799V3.375h8.467V13.8H7.375Z"
      fillRule="evenodd" clipRule="evenodd" />
    <path d="M4.286 5.575a.688.688 0 0 0-1.376 0v10.76A1.666 1.666 0 0 0 4.576 18h8.803a.688.688 0 1 0 0-1.375H4.576a.29.29 0 0 1-.29-.29V5.574Z" />
  </svg>
);
Files.displayName = 'Files';
export default Files;
/* tslint:enable */
/* eslint-enable */
