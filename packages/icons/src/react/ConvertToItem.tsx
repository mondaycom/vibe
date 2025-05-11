/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ConvertToItemProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ConvertToItem: React.FC<ConvertToItemProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M17.0835 17.75C17.4977 17.75 17.8335 17.4142 17.8335 17C17.8335 16.5858 17.4977 16.25 17.0835 16.25H11.6668C9.68781 16.25 8.0835 14.6457 8.0835 12.6667V4.8109L11.1362 7.86358C11.4291 8.15648 11.9039 8.15648 12.1968 7.86358C12.4897 7.57069 12.4897 7.09581 12.1968 6.80292L7.8635 2.46959C7.57061 2.17669 7.09573 2.17669 6.80284 2.46959L2.46951 6.80292C2.17661 7.09581 2.17661 7.57069 2.46951 7.86358C2.7624 8.15648 3.23727 8.15648 3.53017 7.86358L6.5835 4.81025V12.6667C6.5835 15.4741 8.85938 17.75 11.6668 17.75H17.0835Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
ConvertToItem.displayName = 'ConvertToItem';
export default ConvertToItem;
/* tslint:enable */
/* eslint-enable */
