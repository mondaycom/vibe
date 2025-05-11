/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface TurnIntoProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const TurnInto: React.FC<TurnIntoProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="M17.071 8.27c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.5 2.5c-.29.29-.77.29-1.06 0l-2.5-2.5a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.22 1.22V6.8c0-.33-.14-.65-.37-.88-.23-.24-.55-.37-.88-.37h-5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.5c.72 0 1.42.29 1.94.81.52.51.81 1.21.81 1.94v2.69l1.22-1.22Zm-9.97 6.78h5.5c.41 0 .75.34.75.75s-.34.75-.75.75h-5.5c-.72 0-1.42-.29-1.94-.81-.52-.51-.81-1.21-.81-1.94v-2.69l-1.22 1.22c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l2.5-2.5c.29-.29.77-.29 1.06 0l2.5 2.5c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0l-1.22-1.22v2.69c0 .33.14.64.37.88.23.24.55.37.88.37Z"
    />
  </svg>
);
TurnInto.displayName = 'TurnInto';
export default TurnInto;
/* tslint:enable */
/* eslint-enable */
