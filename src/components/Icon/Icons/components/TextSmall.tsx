/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface TextSmallProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const TextSmall: React.FC<TextSmallProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M10.9508 11.6951H9.04606L8.61827 13H8L9.73614 8H10.2607L12 13H11.3849L10.9508 11.6951ZM9.22717 11.1525H10.7728L9.99844 8.81387L9.22717 11.1525Z" fill="currentColor"
    />
  </svg>
);
TextSmall.displayName = 'TextSmall';
export default TextSmall;
/* tslint:enable */
/* eslint-enable */
