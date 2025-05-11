/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface FullscreenProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Fullscreen: React.FC<FullscreenProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M3.482 12.779a.75.75 0 0 0-1.5 0v4.447c0 .414.336.75.75.75H7.18a.75.75 0 0 0 0-1.5H4.543l4.278-4.279a.75.75 0 1 0-1.06-1.06l-4.279 4.278v-2.636Zm7.696-3.916a.75.75 0 0 1 0-1.06l4.278-4.279H12.82a.75.75 0 1 1 0-1.5h4.447a.75.75 0 0 1 .75.75v4.447a.75.75 0 0 1-1.5 0V4.585l-4.278 4.278a.75.75 0 0 1-1.061 0Zm0 2.274a.75.75 0 0 1 1.06 0l4.279 4.278V12.78a.75.75 0 1 1 1.5 0v4.447a.75.75 0 0 1-.75.75H12.82a.75.75 0 0 1 0-1.5h2.636l-4.278-4.278a.75.75 0 0 1 0-1.06ZM8.822 8.863a.75.75 0 0 0 0-1.06l-4.278-4.28H7.18a.75.75 0 0 0 0-1.5H2.734a.75.75 0 0 0-.75.75V7.22a.75.75 0 0 0 1.5 0V4.585L7.76 8.863a.75.75 0 0 0 1.061 0Z"
    />
  </svg>
);
Fullscreen.displayName = 'Fullscreen';
export default Fullscreen;
/* tslint:enable */
/* eslint-enable */
