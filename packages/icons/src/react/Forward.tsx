/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ForwardProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Forward: React.FC<ForwardProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M11.258 3.307a.75.75 0 0 0-.462.693v2.523h-.341c-3.049 0-4.902 1.556-6.094 3.493-.925 1.504-1.485 3.3-1.938 4.754-.11.354-.215.688-.316.993a.75.75 0 0 0 1.196.81c.477-.404.892-.765 1.264-1.087.914-.795 1.565-1.36 2.222-1.771.845-.53 1.676-.783 3.12-.783h.886v2.523a.75.75 0 0 0 1.305.504l5.455-6a.75.75 0 0 0-.025-1.035L12.076 3.47a.75.75 0 0 0-.818-.163Zm4.706 6.172-3.668 4.036v-1.333a.75.75 0 0 0-.75-.75H9.909c-1.674 0-2.793.307-3.917 1.012-.523.328-1.053.749-1.646 1.25.342-.998.742-1.997 1.293-2.892.99-1.608 2.41-2.78 4.815-2.78h1.091a.75.75 0 0 0 .75-.75v-1.46l3.669 3.668Z"
      fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Forward.displayName = 'Forward';
export default Forward;
/* tslint:enable */
/* eslint-enable */
