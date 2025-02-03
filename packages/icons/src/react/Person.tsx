/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface PersonProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Person: React.FC<PersonProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.25 2.05a3.865 3.865 0 1 0 0 7.73 3.865 3.865 0 0 0 0-7.73Zm-.905 1.68a2.365 2.365 0 1 1 1.81 4.37 2.365 2.365 0 0 1-1.81-4.37Zm.495 7.001h.824a7.258 7.258 0 0 1 3.188.873 6.263 6.263 0 0 1 2.307 2.14c.551.876.84 1.863.84 2.866v.688c0 .388-.354.702-.792.702H4.292c-.438 0-.792-.314-.792-.702v-.688c0-1.003.289-1.99.84-2.866a6.264 6.264 0 0 1 2.308-2.14 7.257 7.257 0 0 1 3.191-.873Zm.053 1.403h.713a5.525 5.525 0 0 1 2.414.664 4.768 4.768 0 0 1 1.757 1.63c.418.663.638 1.41.64 2.168H5.083a4.09 4.09 0 0 1 .64-2.169 4.77 4.77 0 0 1 1.757-1.63 5.525 5.525 0 0 1 2.413-.663Zm-4.81 4.473v-.01.01Zm10.334 0v-.01.01Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Person.displayName = 'Person';
export default Person;
/* tslint:enable */
/* eslint-enable */
