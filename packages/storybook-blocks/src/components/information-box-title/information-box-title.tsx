import { FC } from 'react';
import cx from 'classnames';
import { ElementContent, withStaticProps } from '../../types';
import Link from '../link/link';
import { LinkTarget } from '../link/LinkConstants';
import styles from './information-box-title.module.scss';

type InformationBoxTitleProps = {
  children: ElementContent;
  href?: string;
  linkTarget?: LinkTarget;
};

const InformationBoxTitle: FC<InformationBoxTitleProps> & { linkTargets?: typeof LinkTarget } = ({
  children,
  href,
  linkTarget,
}) => {
  return href && typeof children === 'string' ? (
    <Link className={cx(styles.informationBoxTitle)} href={href} withoutSpacing target={linkTarget}>
      {children}
    </Link>
  ) : (
    <h4 className={cx(styles.informationBoxTitle, { [styles.titleLink]: href })}>{children}</h4>
  );
};

export default withStaticProps(InformationBoxTitle, { linkTargets: LinkTarget });
