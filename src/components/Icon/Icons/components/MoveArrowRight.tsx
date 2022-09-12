/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface MoveArrowRightProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const MoveArrowRight: React.FC<MoveArrowRightProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2.24999 10.071C2.24999 9.65683 2.58578 9.32104 2.99999 9.32104L15.3315 9.32105L10.7031 4.69273C10.4103 4.39983 10.4103 3.92496 10.7031 3.63207C10.996 3.33917 11.4709 3.33917 11.7638 3.63207L17.6725 9.54071C17.9653 9.83361 17.9653 10.3085 17.6725 10.6014L11.7638 16.51C11.4709 16.8029 10.996 16.8029 10.7031 16.51C10.4103 16.2171 10.4103 15.7423 10.7031 15.4494L15.3315 10.821L2.99999 10.821C2.58578 10.821 2.24999 10.4853 2.24999 10.071Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
MoveArrowRight.displayName = 'MoveArrowRight';
export default MoveArrowRight;
/* tslint:enable */
/* eslint-enable */
