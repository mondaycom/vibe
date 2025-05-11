/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface MondayLogoOutlineProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const MondayLogoOutline: React.FC<MondayLogoOutlineProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M15.79 9.456c-.16 0-.32.01-.47.04l.05-.08c.59-.91.65-2.08.17-3.05a3.012 3.012 0 0 0-2.61-1.68c-1.12-.03-2.13.58-2.67 1.53l-.3.5a2.75 2.75 0 0 0-.15-.36c-.5-.98-1.48-1.64-2.6-1.67-1.11-.03-2.12.56-2.67 1.5l-2.7 4.47c-.56.93-.59 2.1-.08 3.06.51.97 1.52 1.6 2.64 1.6 1.06 0 2.02-.57 2.56-1.46l.34-.57c.05.15.11.29.19.43.51.97 1.51 1.6 2.63 1.6 1.06 0 2.02-.57 2.56-1.46l.33-.54c.39 1.16 1.49 2 2.78 2 1.62 0 2.93-1.31 2.93-2.93s-1.31-2.93-2.93-2.93Zm-7.41-.85-2.7 4.48a1.463 1.463 0 0 1-2.36.24c-.08-.09-.16-.2-.22-.31a1.596 1.596 0 0 1 .04-1.58l2.7-4.48c.28-.49.79-.78 1.33-.77.55.02 1.04.34 1.29.84.25.5.22 1.11-.08 1.58Zm5.71.01-2.7 4.47c-.27.45-.75.73-1.27.73-.54 0-1.05-.31-1.31-.8-.26-.49-.25-1.1.04-1.58l2.7-4.47c.27-.5.79-.8 1.34-.78.55.02 1.05.34 1.3.85s.21 1.12-.1 1.59v-.01Zm1.7 5.21a1.43 1.43 0 1 1 0-2.86 1.43 1.43 0 0 1 0 2.86Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
MondayLogoOutline.displayName = 'MondayLogoOutline';
export default MondayLogoOutline;
/* tslint:enable */
/* eslint-enable */
