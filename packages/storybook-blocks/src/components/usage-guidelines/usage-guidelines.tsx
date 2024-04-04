import React, { useMemo } from 'react';
import styles from './usage-guidelines.module.scss';
import { ElementContent } from '../../types';

interface UsageGuidelinesProps {
  guidelines: Array<ElementContent>;
}

const UsageGuidelines: React.FC<UsageGuidelinesProps> = ({ guidelines = [] }) => {
  const guidelinesElements = useMemo(
    () =>
      guidelines.map((guideline, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span id={index.toString()} key={index} className={styles.usageGuideline}>
          <span className={styles.icon}>➡️</span>
          <span>{guideline}</span>
        </span>
      )),
    [guidelines],
  );

  return <article className={styles.usageGuidelines}>{guidelinesElements}</article>;
};

export default UsageGuidelines;
