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
        <li key={index} className={styles.usageGuideline}>
          {guideline}
        </li>
      )),
    [guidelines],
  );

  return <ul className={styles.usageGuidelines}>{guidelinesElements}</ul>;
};

export default UsageGuidelines;
