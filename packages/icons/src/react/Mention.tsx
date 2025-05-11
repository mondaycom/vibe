/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface MentionProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Mention: React.FC<MentionProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="M10.025 2.25h-.007a7.77 7.77 0 1 0 2.99 14.94.75.75 0 0 0-.578-1.384A6.27 6.27 0 1 1 10.015 3.75a6.377 6.377 0 0 1 5.44 3.15l.005.01c1.374 2.27.706 4.052-.123 4.856-.452.44-.845.506-1 .47-.053-.012-.103-.039-.155-.124-.062-.1-.138-.308-.138-.689v-1.404a4.026 4.026 0 1 0-1.167 2.835l.026.042a1.73 1.73 0 0 0 1.096.801c.856.198 1.746-.236 2.383-.854 1.348-1.308 2.083-3.86.364-6.705a7.877 7.877 0 0 0-6.721-3.888Zm2.52 7.765v.012a2.527 2.527 0 1 1 0-.012Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Mention.displayName = 'Mention';
export default Mention;
/* tslint:enable */
/* eslint-enable */
