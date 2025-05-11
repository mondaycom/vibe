/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface KeyboardProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Keyboard: React.FC<KeyboardProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M16.3214 3C16.3214 2.58579 15.9857 2.25 15.5714 2.25C15.1572 2.25 14.8214 2.58579 14.8214 3C14.8214 3.4073 14.6596 3.79791 14.3716 4.08591C14.0836 4.37392 13.693 4.53571 13.2857 4.53571H8.7143C7.90918 4.53571 7.13704 4.85555 6.56773 5.42485C5.99842 5.99416 5.67859 6.76631 5.67859 7.57143V8.25H3C2.58579 8.25 2.25 8.58579 2.25 9V17C2.25 17.4142 2.58579 17.75 3 17.75H17C17.4142 17.75 17.75 17.4142 17.75 17V9C17.75 8.58579 17.4142 8.25 17 8.25H7.17859V7.57143C7.17859 7.16413 7.34039 6.77352 7.62839 6.48551C7.91639 6.19751 8.30701 6.03571 8.7143 6.03571H13.2857C14.0909 6.03571 14.863 5.71588 15.4323 5.14657C16.0016 4.57727 16.3214 3.80512 16.3214 3ZM3.75 9.75V16.25H16.25V9.75H3.75ZM5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H14C14.4142 13.25 14.75 13.5858 14.75 14C14.75 14.4142 14.4142 14.75 14 14.75H6C5.58579 14.75 5.25 14.4142 5.25 14Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Keyboard.displayName = 'Keyboard';
export default Keyboard;
/* tslint:enable */
/* eslint-enable */
