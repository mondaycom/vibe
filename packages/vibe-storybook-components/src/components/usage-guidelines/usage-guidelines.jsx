import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './usage-guidelines.module.scss';

const UsageGuidelines = ({ guidelines }) => {
  const guidelinesElements = useMemo(
    () =>
      guidelines.map((guideline, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span id={index} key={index} className={styles.usageGuidelinesGuideline}>
          <span className={styles.usageGuidelinesGuidelineIcon}>➡️</span>
          <span>{guideline}</span>
        </span>
      )),
    [guidelines],
  );

  return <article className={styles.usageGuidelines}>{guidelinesElements}</article>;
};

UsageGuidelines.propTypes = {
  guidelines: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element])),
};

UsageGuidelines.defaultProps = {
  guidelines: [],
};

export default UsageGuidelines;
