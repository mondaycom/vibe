/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ClassicFolderProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ClassicFolder: React.FC<ClassicFolderProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M16.5 13.935V9.554c0-.754-.61-1.365-1.365-1.365H12.23a3.013 3.013 0 0 1-2.724-1.724l-.29-.613A.615.615 0 0 0 8.66 5.5H4.667c-.645 0-1.167.522-1.167 1.167v7.268c0 .754.61 1.365 1.365 1.365h10.27c.754 0 1.365-.61 1.365-1.365ZM4.667 4A2.667 2.667 0 0 0 2 6.667v7.268A2.865 2.865 0 0 0 4.865 16.8h10.27A2.865 2.865 0 0 0 18 13.935V9.554a2.865 2.865 0 0 0-2.865-2.865H12.23a1.512 1.512 0 0 1-1.368-.866l-.29-.612A2.115 2.115 0 0 0 8.66 4H4.667Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
ClassicFolder.displayName = 'ClassicFolder';
export default ClassicFolder;
/* tslint:enable */
/* eslint-enable */
