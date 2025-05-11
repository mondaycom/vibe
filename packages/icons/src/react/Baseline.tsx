/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface BaselineProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Baseline: React.FC<BaselineProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M2 13.0502C2 12.0837 2.7835 11.3002 3.75 11.3002H16.25C17.2165 11.3002 18 12.0837 18 13.0502V16.0502C18 17.0167 17.2165 17.8002 16.25 17.8002H3.75C2.7835 17.8002 2 17.0167 2 16.0502V13.0502zM3.75 12.8002C3.61193 12.8002 3.5 12.9122 3.5 13.0502V16.0502C3.5 16.1883 3.61193 16.3002 3.75 16.3002H16.25C16.3881 16.3002 16.5 16.1883 16.5 16.0502V13.0502C16.5 12.9122 16.3881 12.8002 16.25 12.8002H3.75zM2 3.95013C2 2.98363 2.7835 2.20013 3.75 2.20013H16.25C17.2165 2.20013 18 2.98363 18 3.95013V6.95013C18 7.91663 17.2165 8.70013 16.25 8.70013H3.75C2.7835 8.70013 2 7.91663 2 6.95013V3.95013zM3.75 3.70013C3.61193 3.70013 3.5 3.81206 3.5 3.95013V6.95013C3.5 7.0882 3.61193 7.20013 3.75 7.20013H16.25C16.3881 7.20013 16.5 7.0882 16.5 6.95013V3.95013C16.5 3.81206 16.3881 3.70013 16.25 3.70013H3.75z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Baseline.displayName = 'Baseline';
export default Baseline;
/* tslint:enable */
/* eslint-enable */
