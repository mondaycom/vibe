import { FC } from 'react';
import cx from 'classnames';
import { ElementContent } from '../../types';
import Link from '../link/link';
import styles from './information-box-title.module.scss';

type InformationBoxTitleProps = {
  children: ElementContent;
  href?: string;
};

const InformationBoxTitle: FC<InformationBoxTitleProps> = ({ children, href }) => {
  return href && typeof children === 'string' ? (
    <Link className={cx(styles.informationBoxTitle)} href={href}>
      {children}
    </Link>
  ) : (
    <h4 className={cx(styles.informationBoxTitle, { [styles.titleLink]: href })}>{children}</h4>
  );
};

export default InformationBoxTitle;
