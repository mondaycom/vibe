import { FC } from 'react';
import cx from 'classnames';
import styles from './information-box-title.module.scss';
import { ElementContent } from '../../types';

type InformationBoxTitleProps = {
  children: ElementContent;
  href?: string;
};

const InformationBoxTitle: FC<InformationBoxTitleProps> = ({ children, href }) => {
  const title = <h4 className={cx(styles.informationBoxTitle, { [styles.titleLink]: href })}>{children}</h4>;

  return href ? (
    <a className={cx({ [styles.link]: href })} href={href}>
      {title}
    </a>
  ) : (
    title
  );
};

export default InformationBoxTitle;
