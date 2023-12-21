/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface UndoProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Undo: React.FC<UndoProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M6.62673 4.4844C6.91149 4.76915 6.91149 5.23084 6.62673 5.51559L3.80899 8.33333L6.62673 11.1511C6.91149 11.4358 6.91149 11.8975 6.62673 12.1823C6.34197 12.467 5.88029 12.467 5.59553 12.1823L2.2622 8.84893C1.97744 8.56417 1.97744 8.10249 2.2622 7.81773L5.59553 4.4844C5.88029 4.19964 6.34197 4.19964 6.62673 4.4844Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M2.04863 8.33334C2.04863 7.93063 2.37509 7.60417 2.7778 7.60417H12.7778C14.1499 7.60417 15.4659 8.14925 16.4361 9.11949C17.4063 10.0897 17.9514 11.4057 17.9514 12.7778V15C17.9514 15.4027 17.6249 15.7292 17.2222 15.7292C16.8195 15.7292 16.4931 15.4027 16.4931 15V12.7778C16.4931 11.7924 16.1016 10.8474 15.4049 10.1507C14.7081 9.45393 13.7632 9.06251 12.7778 9.06251H2.7778C2.37509 9.06251 2.04863 8.73605 2.04863 8.33334Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Undo.displayName = 'Undo';
export default Undo;
/* tslint:enable */
/* eslint-enable */
