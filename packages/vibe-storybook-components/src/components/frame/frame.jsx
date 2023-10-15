import React from 'react';
import cx from 'classnames';
import styles from './frame.module.scss';

const Frame = ({ children, className, noGutter, noBorder }) => (
  <div
    className={cx(styles.frame, className, {
      [styles.noGutter]: noGutter,
      [styles.noBorder]: noBorder,
    })}
  >
    {children}
  </div>
);

export default Frame;
