/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface MuteProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Mute: React.FC<MuteProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M13.03 16.666h-.18a2.07 2.07 0 0 1-1-.37l-2.53-1.39a.75.75 0 1 1 .72-1.31l2.6 1.42a.83.83 0 0 0 .34.15.66.66 0 0 0 .28 0 .41.41 0 0 0 .19-.18.34.34 0 0 0 .07-.22v-4.62a.75.75 0 0 1 1.5 0v4.57a1.95 1.95 0 0 1-1.11 1.75c-.274.131-.575.2-.88.2Zm-6.6-3.7H3.95a2 2 0 0 1-1.4-.56 1.94 1.94 0 0 1-.59-1.39v-2.4a2 2 0 0 1 .59-1.39 2 2 0 0 1 1.4-.56h2.27l5.28-3.25a2 2 0 0 1 2.82.57c.202.358.309.76.31 1.17a.75.75 0 1 1-1.5 0 1.138 1.138 0 0 0-.08-.34.44.44 0 0 0-.19-.16.49.49 0 0 0-.27 0 .52.52 0 0 0-.26.1l-5.15 3.06v4.4a.75.75 0 0 1-.75.75Zm-2.48-4.8a.54.54 0 0 0-.36.14.44.44 0 0 0-.13.31v2.4a.41.41 0 0 0 .14.31.5.5 0 0 0 .35.14h1.76v-3.3H3.95Z"
    />
    <path d="M17.92 4.186a.76.76 0 0 1-.16 1L5.48 16.816a.76.76 0 0 1-1-.16.75.75 0 0 1 .16-1.05l12.23-11.58a.76.76 0 0 1 1.05.16Z" fillRule="evenodd" clipRule="evenodd"
    />
  </svg>
);
Mute.displayName = 'Mute';
export default Mute;
/* tslint:enable */
/* eslint-enable */
