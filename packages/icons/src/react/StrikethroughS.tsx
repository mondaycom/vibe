/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface StrikethroughSProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const StrikethroughS: React.FC<StrikethroughSProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path fill="currentColor" d="M9.12 1.973c1.646-.1 3.427.394 4.647 1.005a.75.75 0 1 1-.671 1.34C12.059 3.8 10.54 3.39 9.209 3.47c-.658.04-1.228.197-1.668.477-.426.272-.767.68-.957 1.31a2.08 2.08 0 0 0 .42 1.955A12.783 12.783 0 0 0 9.73 8.817h7.701a.75.75 0 0 1 0 1.5H2.574a.75.75 0 0 1 0-1.5h4.084a14.277 14.277 0 0 1-.63-.463.75.75 0 0 1-.092-.085 3.58 3.58 0 0 1-.789-3.444v-.001c.294-.97.857-1.676 1.588-2.142.716-.456 1.554-.66 2.384-.71Zm3.911 9.231a.75.75 0 0 1 1.058.08 3.869 3.869 0 0 1-.625 5.62 6.537 6.537 0 0 1-6.936.282l-.004-.002-1.021-.592a.75.75 0 1 1 .753-1.298l1.018.591a5.035 5.035 0 0 0 5.327-.207 2.369 2.369 0 0 0 .35-3.417.75.75 0 0 1 .08-1.057Z"
    />
  </svg>
);
StrikethroughS.displayName = 'StrikethroughS';
export default StrikethroughS;
/* tslint:enable */
/* eslint-enable */
