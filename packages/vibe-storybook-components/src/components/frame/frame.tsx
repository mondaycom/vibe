import { FC } from 'react';
import cx from 'classnames';
import styles from './frame.module.scss';
import { ElementContent } from '../../types';

type FrameProps = {
  children: ElementContent;
  className: string;
  noGutter: boolean;
  noBorder: boolean;
};

const Frame: FC<FrameProps> = ({ children, className, noGutter, noBorder }) => (
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
