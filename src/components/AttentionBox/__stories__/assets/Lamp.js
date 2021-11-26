/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Lamp = ({size, ...props}) => (
    <svg viewBox="0 0 20 20" fill="none" width={ size || "20" } height={ size || "20" } {...props}>
        <path d="M8.85742 18.5H11.1431" stroke="#676879" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.5715 10.4999C14.5746 9.6442 14.3374 8.80482 13.887 8.07725C13.4366 7.34969 12.791 6.76315 12.0237 6.38437C11.2564 6.00559 10.3982 5.84978 9.54669 5.93466C8.6952 6.01954 7.88464 6.3417 7.20721 6.8645C6.52977 7.38729 6.01268 8.08973 5.71474 8.8919C5.41681 9.69406 5.35001 10.5637 5.52193 11.402C5.69385 12.2403 6.0976 13.0134 6.68723 13.6336C7.27687 14.2537 8.02872 14.6959 8.85725 14.9098V16.2142H11.143V14.9098C12.1224 14.6588 12.9907 14.0894 13.6114 13.2911C14.232 12.4929 14.5697 11.511 14.5715 10.4999V10.4999Z" stroke="#676879" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 3.64286V2.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.34277 4.27148L5.15115 5.07987" stroke="#323338" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.8486 5.07987L15.657 4.27148" stroke="#323338" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);
Lamp.displayName = 'Activity';
Lamp.propTypes = {
  size: PropTypes.string
}
export default Lamp;
/* tslint:enable */
/* eslint-enable */
