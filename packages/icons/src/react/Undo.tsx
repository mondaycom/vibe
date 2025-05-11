/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface UndoProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Undo: React.FC<UndoProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="M16.44 9.119a5.186 5.186 0 0 0-3.66-1.52H4.54l2.09-2.09c.28-.28.28-.75 0-1.03a.736.736 0 0 0-1.03 0l-3.34 3.34c-.28.28-.28.75 0 1.03l3.33 3.33c.28.28.75.28 1.03 0s.28-.75 0-1.03l-2.09-2.09h8.24c.99 0 1.93.39 2.63 1.09.7.7 1.09 1.64 1.09 2.63v2.22c0 .4.33.73.73.73.4 0 .73-.33.73-.73v-2.22c0-1.37-.55-2.69-1.52-3.66h.01Z"
    />
  </svg>
);
Undo.displayName = 'Undo';
export default Undo;
/* tslint:enable */
/* eslint-enable */
