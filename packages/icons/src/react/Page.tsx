/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface PageProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Page: React.FC<PageProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="m15.51 4.68-2.19-2.14A1.91 1.91 0 0 0 11.99 2h-6.1c-.5 0-.98.19-1.33.54-.36.35-.56.82-.56 1.33v12.27c0 .5.2.98.56 1.33.36.35.84.54 1.33.54h8.28c.5 0 .98-.19 1.33-.54.36-.35.56-.82.56-1.33V6c0-.5-.2-.98-.56-1.32h.01Zm-.94 11.46c0 .09-.04.18-.11.25s-.17.11-.28.11H5.89c-.11 0-.21-.04-.28-.11a.358.358 0 0 1-.11-.25V3.87c0-.09.04-.18.11-.25s.17-.11.28-.11h6.1c.11 0 .21.04.28.11l2.19 2.14c.07.07.11.16.11.25v10.13Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Page.displayName = 'Page';
export default Page;
/* tslint:enable */
/* eslint-enable */
