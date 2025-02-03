/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface GuestProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Guest: React.FC<GuestProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.75 3a.75.75 0 0 0-1.5 0v1.25H3.923A1.673 1.673 0 0 0 2.25 5.923v8.308a1.673 1.673 0 0 0 1.673 1.673h12a1.673 1.673 0 0 0 1.673-1.673V5.923a1.673 1.673 0 0 0-1.673-1.673H10.75V3Zm-1.5 2.75V6a.75.75 0 0 0 1.5 0v-.25h5.173a.173.173 0 0 1 .173.173v8.308a.173.173 0 0 1-.173.173h-4.868a3.52 3.52 0 0 0-1.818-2.374l.051-.05a2.366 2.366 0 1 0-3.293.05 3.52 3.52 0 0 0-1.816 2.374h-.256a.173.173 0 0 1-.173-.173V5.923a.173.173 0 0 1 .173-.173H9.25Zm-3.06 7.976a2.019 2.019 0 0 0-.448.678h3.75a2.019 2.019 0 0 0-3.303-.678Zm1.094-4.218a.865.865 0 1 1 .663 1.6.865.865 0 0 1-.663-1.6Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Guest.displayName = 'Guest';
export default Guest;
/* tslint:enable */
/* eslint-enable */
