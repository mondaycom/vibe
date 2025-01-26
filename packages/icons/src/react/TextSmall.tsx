/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface TextSmallProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const TextSmall: React.FC<TextSmallProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M11.426 12.173H8.57L7.927 14H7l2.604-7h.787L13 14h-.923l-.65-1.827Zm-2.585-.76h2.318L9.998 8.14 8.84 11.414Z" />
  </svg>
);
TextSmall.displayName = 'TextSmall';
export default TextSmall;
/* tslint:enable */
/* eslint-enable */
