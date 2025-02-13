/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface CloseMediumProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const CloseMedium: React.FC<CloseMediumProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M5.28716 4.22653C4.99426 3.93364 4.51939 3.93365 4.2265 4.22654C3.93361 4.51944 3.93361 4.99431 4.22651 5.2872L8.9682 10.0288L4.22714 14.7698C3.93425 15.0626 3.93424 15.5375 4.22713 15.8304C4.52002 16.1233 4.9949 16.1233 5.28779 15.8304L10.0289 11.0894L14.7699 15.8304C15.0628 16.1233 15.5377 16.1233 15.8306 15.8304C16.1235 15.5375 16.1235 15.0626 15.8306 14.7698L11.0895 10.0288L15.8312 5.2872C16.1241 4.99431 16.1241 4.51944 15.8312 4.22654C15.5383 3.93365 15.0635 3.93364 14.7706 4.22653L10.0289 8.96815L5.28716 4.22653Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
CloseMedium.displayName = 'CloseMedium';
export default CloseMedium;
/* tslint:enable */
/* eslint-enable */
