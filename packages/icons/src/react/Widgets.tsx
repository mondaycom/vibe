/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface WidgetsProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Widgets: React.FC<WidgetsProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M16 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V7H16.5V5C16.5 4.72386 16.2761 4.5 16 4.5ZM3.5 15V8.5H16.5V15C16.5 15.2761 16.2761 15.5 16 15.5H13.75V10.75C13.75 10.3358 13.4142 10 13 10C12.5858 10 12.25 10.3358 12.25 10.75V15.5H10.75V12.25C10.75 11.8358 10.4142 11.5 10 11.5C9.58579 11.5 9.25 11.8358 9.25 12.25V15.5H7.75V13.75C7.75 13.3358 7.41421 13 7 13C6.58579 13 6.25 13.3358 6.25 13.75V15.5H4C3.72386 15.5 3.5 15.2761 3.5 15ZM7 17H4C2.89543 17 2 16.1046 2 15V5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H13H10H7Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Widgets.displayName = 'Widgets';
export default Widgets;
/* tslint:enable */
/* eslint-enable */
