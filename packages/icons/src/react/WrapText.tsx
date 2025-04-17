/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface WrapTextProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const WrapText: React.FC<WrapTextProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M3 14.209c0-.455.369-.824.824-.824h3.293a.824.824 0 1 1 0 1.648H3.824A.824.824 0 0 1 3 14.209Zm10.706-5.766H3.824a.824.824 0 0 0 0 1.647h10.088c.906 0 1.647.741 1.647 1.648 0 .906-.741 1.647-1.647 1.647h-1.853v-1.647l-2.47 2.47 2.47 2.472v-1.647h1.647A3.294 3.294 0 0 0 17 11.738a3.294 3.294 0 0 0-3.294-3.295ZM3 4.323c0-.454.369-.823.824-.823h11.529a.824.824 0 1 1 0 1.647H3.823A.824.824 0 0 1 3 4.325Z"
    />
  </svg>
);
WrapText.displayName = 'WrapText';
export default WrapText;
/* tslint:enable */
/* eslint-enable */
