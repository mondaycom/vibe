import { FC } from 'react';
import cx from 'classnames';
import styles from './multiple-story-elements-wrapper.module.scss';
import { ElementContent } from '../../types';

type MultipleStoryElementsWrapperProps = {
  className: string;
  children: ElementContent;
};

const MultipleStoryElementsWrapper: FC<MultipleStoryElementsWrapperProps> = ({ className, children }) => (
  <div className={cx(styles.multipleStoryElementsWrapper, className)}>
    <div data-testid="focusTrap" className={styles.focusTrap} />
    {children}
  </div>
);

export default MultipleStoryElementsWrapper;
