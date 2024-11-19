/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CollapseRoundProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const CollapseRound: React.FC<CollapseRoundProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M4.343 4.343a8 8 0 1 1 11.314 11.314A8 8 0 0 1 4.343 4.343ZM10 3.506a6.494 6.494 0 1 0 0 12.988 6.494 6.494 0 0 0 0-12.988Z" fillRule="evenodd" clipRule="evenodd"
    />
    <path d="M12.821 5.98a.753.753 0 0 1-.049 1.063l-2.147 1.958a.885.885 0 0 1-1.221.002l-2.16-1.958a.753.753 0 0 1 1.011-1.116l1.757 1.593 1.745-1.591a.753.753 0 0 1 1.064.049Zm-5.629 8.038a.753.753 0 0 1 .052-1.063l2.16-1.958a.885.885 0 0 1 1.221.001l2.147 1.959a.753.753 0 1 1-1.015 1.112l-1.744-1.592-1.758 1.594a.753.753 0 0 1-1.063-.053Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
CollapseRound.displayName = 'CollapseRound';
export default CollapseRound;
/* tslint:enable */
/* eslint-enable */
