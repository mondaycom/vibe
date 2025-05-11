/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface GalleryProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Gallery: React.FC<GalleryProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="M7.8 6.3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" />
    <path fill="currentColor" d="M7.67 1.95A2.75 2.75 0 0 0 4.92 4.7v7.6a2.75 2.75 0 0 0 2.75 2.75h7.6a2.75 2.75 0 0 0 2.75-2.75V4.7a2.75 2.75 0 0 0-2.75-2.75h-7.6ZM6.42 4.7c0-.69.56-1.25 1.25-1.25h7.6c.69 0 1.25.56 1.25 1.25v4.2l-2.238-1.72a1.15 1.15 0 0 0-1.525.057l-5.984 5.934a1.246 1.246 0 0 1-.353-.87V4.7Zm7.16 3.832 2.94 2.26V12.3c0 .69-.56 1.25-1.25 1.25H8.52l5.06-5.018Z"
      fillRule="evenodd" clipRule="evenodd" />
    <path fill="currentColor" d="M3.55 4.3a.75.75 0 0 0-1.5 0v12a1.75 1.75 0 0 0 1.75 1.75h12a.75.75 0 0 0 0-1.5h-12a.25.25 0 0 1-.25-.25v-12Z" />
  </svg>
);
Gallery.displayName = 'Gallery';
export default Gallery;
/* tslint:enable */
/* eslint-enable */
