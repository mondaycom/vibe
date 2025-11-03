/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface AddNewDocProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const AddNewDoc: React.FC<AddNewDocProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M15.547 7.285a.936.936 0 0 1-.9.68H12.95v.002h-2.238A1.723 1.723 0 0 1 8.99 6.243V3.155L3.723 3.1a.223.223 0 0 0-.223.223v12.654a.223.223 0 0 0 .223.223H9.15a.75.75 0 0 1 0 1.5H3.723A1.723 1.723 0 0 1 2 15.977V3.323A1.723 1.723 0 0 1 3.723 1.6H9.82c.457 0 .895.182 1.218.504l3.81 3.81.454.446c.245.24.34.595.245.925Zm-2.268-.818-2.79-2.79v2.566a.223.223 0 0 0 .223.224h2.567Z"
      fillRule="evenodd" clipRule="evenodd" />
    <path d="M5.618 9.5a.75.75 0 0 0 0 1.5h4.831a.75.75 0 0 0 0-1.5H5.618Zm0 3.2a.75.75 0 0 0 0 1.5H7.45a.75.75 0 0 0 0-1.5H5.618Zm10.832.095a.75.75 0 0 0-1.5 0v1.45H13.5a.75.75 0 0 0 0 1.5h1.45v1.45a.75.75 0 0 0 1.5 0v-1.45h1.45a.75.75 0 0 0 0-1.5h-1.45v-1.45Z"
    />
  </svg>
);
AddNewDoc.displayName = 'AddNewDoc';
export default AddNewDoc;
/* tslint:enable */
/* eslint-enable */
