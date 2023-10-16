import { FC } from 'react';
import cx from 'classnames';
import './paragraph.scss';

type ParagraphProps = {
  children: string;
  className: string;
};

const Paragraph: FC<ParagraphProps> = ({ children, className }) => (
  <p className={cx('vibe-sb-comps-paragraph', className)}>{children}</p>
);

export default Paragraph;
