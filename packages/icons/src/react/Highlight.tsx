/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface HighlightProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Highlight: React.FC<HighlightProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="m9.58 13.9-3.23.58a.717.717 0 0 1-.62-.2.68.68 0 0 1-.2-.62l.57-3.24c.03-.15.1-.28.2-.38l7.22-7.22c.33-.33.79-.52 1.26-.52s.93.19 1.26.52l1.14 1.14c.33.33.52.79.52 1.26s-.19.93-.52 1.26L9.96 13.7a.74.74 0 0 1-.38.2Zm4.94-10.09-7.07 7.07h-.01l-.35 2.02 2.02-.36 7.07-7.07a.363.363 0 0 0 0-.52l-1.14-1.14a.363.363 0 0 0-.52 0Z"
      fillRule="evenodd" clipRule="evenodd" />
    <path fill="currentColor" d="M3 16h14c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1Z" />
  </svg>
);
Highlight.displayName = 'Highlight';
export default Highlight;
/* tslint:enable */
/* eslint-enable */
