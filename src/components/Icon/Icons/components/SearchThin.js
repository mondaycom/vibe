/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const SearchThin = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M5.15625 0C7.9911 0 10.2891 2.29797 10.2891 5.13281C10.2891 6.44405 9.79742 7.64043 8.98841 8.54767L11.8635 11.3568C12.0116 11.5015 12.0143 11.7389 11.8696 11.8871C11.7249 12.0352 11.4874 12.038 11.3393 11.8932L8.44971 9.06989C7.55838 9.81629 6.40981 10.2656 5.15625 10.2656C2.3214 10.2656 0.0234375 7.96766 0.0234375 5.13281C0.0234375 2.29797 2.3214 0 5.15625 0ZM5.15625 0.75C2.73562 0.75 0.773438 2.71218 0.773438 5.13281C0.773438 7.55345 2.73562 9.51562 5.15625 9.51562C7.57688 9.51562 9.53906 7.55345 9.53906 5.13281C9.53906 2.71218 7.57688 0.75 5.15625 0.75Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
SearchThin.displayName = 'SearchThin';
SearchThin.propTypes = {
  size: PropTypes.string
}
export default SearchThin;
/* tslint:enable */
/* eslint-enable */
