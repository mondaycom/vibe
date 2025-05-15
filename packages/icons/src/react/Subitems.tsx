/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface SubitemsProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Subitems: React.FC<SubitemsProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M6.75 13.2c0 .028.022.05.05.05H8v-1.61a.64.64 0 0 1 .51-.627L8.64 11h7.72l.13.013a.64.64 0 0 1 .51.627v4.72l-.013.13a.641.641 0 0 1-.498.497L16.36 17H8.64l-.13-.013a.641.641 0 0 1-.497-.498L8 16.36v-1.61H6.8a1.55 1.55 0 0 1-1.55-1.55V9H3.64l-.13-.013a.641.641 0 0 1-.497-.498L3 8.36V3.64a.64.64 0 0 1 .51-.627L3.64 3h7.72l.13.013a.64.64 0 0 1 .51.627v4.72l-.013.13a.641.641 0 0 1-.498.497L11.36 9H6.75v4.2Zm2.75 2.3h6v-3h-6v3Zm-5-8h6v-3h-6v3Z"
    />
  </svg>
);
Subitems.displayName = 'Subitems';
export default Subitems;
/* tslint:enable */
/* eslint-enable */
