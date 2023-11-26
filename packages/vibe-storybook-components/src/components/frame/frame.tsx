import { FC } from 'react';
import cx from 'classnames';
import { ElementContent } from '../../types';
import styles from './frame.module.scss';

type FrameProps = {
  children: ElementContent;
  className?: string;
  noGutter?: boolean;
  noBorder?: boolean;
};

const Frame: FC<FrameProps> = ({ children, className, noGutter = false, noBorder = false }) => (
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
