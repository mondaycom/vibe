/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface UnlockedProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Unlocked: React.FC<UnlockedProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M11.9509 4.34017C11.4579 3.84116 10.7912 3.5625 10.0979 3.5625C9.40468 3.5625 8.73797 3.84116 8.24497 4.34017C7.75166 4.83949 7.47292 5.51863 7.47292 6.22865V8.29376H15.0937C15.508 8.29376 15.8437 8.62955 15.8437 9.04376V17.2188C15.8437 17.633 15.508 17.9688 15.0937 17.9688H5.10208C4.68787 17.9688 4.35208 17.633 4.35208 17.2188V9.04376C4.35208 8.62955 4.68787 8.29376 5.10208 8.29376H5.97292V6.22865C5.97292 5.12663 6.40534 4.06794 7.1779 3.28596C7.95077 2.50367 9.00095 2.0625 10.0979 2.0625C11.1949 2.0625 12.2451 2.50367 13.0179 3.28596C13.3091 3.58062 13.3062 4.05549 13.0115 4.3466C12.7169 4.63771 12.242 4.63484 11.9509 4.34017ZM5.85208 16.4688V9.79376H14.3437V16.4688H5.85208Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Unlocked.displayName = 'Unlocked';
export default Unlocked;
/* tslint:enable */
/* eslint-enable */
