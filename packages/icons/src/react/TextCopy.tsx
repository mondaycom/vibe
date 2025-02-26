/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface TextCopyProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const TextCopy: React.FC<TextCopyProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M4.75 5C4.75 4.86193 4.86193 4.75 5 4.75H9.24961V15.2498H7.5C7.08579 15.2498 6.75 15.5856 6.75 15.9998C6.75 16.414 7.08579 16.7498 7.5 16.7498H9.98232L9.99961 16.75L10.0169 16.7498H12.5C12.9142 16.7498 13.25 16.414 13.25 15.9998C13.25 15.5856 12.9142 15.2498 12.5 15.2498H10.7496V4.75H15C15.1381 4.75 15.25 4.86193 15.25 5V6C15.25 6.41421 15.5858 6.75 16 6.75C16.4142 6.75 16.75 6.41421 16.75 6V5C16.75 4.0335 15.9665 3.25 15 3.25H5C4.0335 3.25 3.25 4.0335 3.25 5V6C3.25 6.41421 3.58579 6.75 4 6.75C4.41421 6.75 4.75 6.41421 4.75 6V5Z"
      fill="currentColor" />
  </svg>
);
TextCopy.displayName = 'TextCopy';
export default TextCopy;
/* tslint:enable */
/* eslint-enable */
