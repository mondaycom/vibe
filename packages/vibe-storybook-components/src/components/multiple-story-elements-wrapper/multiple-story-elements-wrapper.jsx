import React from 'react';
import cx from 'classnames';
import styles from './multiple-story-elements-wrapper.module.scss';

const MultipleStoryElementsWrapper = ({ className, children }) => (
  <div className={cx(styles.multipleStoryElementsWrapper, className)}>
    <div data-testid="focusTrap" className={styles.focusTrap} />
    {children}
  </div>
);

export default MultipleStoryElementsWrapper;
