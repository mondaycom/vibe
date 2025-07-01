import { FC } from 'react';
import cx from 'classnames';
import { ElementContent } from '../../types';
import styles from './paragraph.module.scss';

type ParagraphProps = {
  children: ElementContent;
  className?: string;
};

const Paragraph: FC<ParagraphProps> = ({ children, className }) => (
  <p className={cx(styles.paragraph, className)}>{children}</p>
);

export default Paragraph;
