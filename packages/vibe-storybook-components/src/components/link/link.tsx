import { FC } from 'react';
import cx from 'classnames';
import CoreLink from '../../helpers/components/Link/Link';
import styles from './link.module.scss';
import { LinkSize } from './LinkConstants';
import { withStaticProps } from '../../types';

type LinkProps = {
  className?: string;
  children: string;
  href: string;
  size?: LinkSize;
  withoutSpacing?: boolean;
};

const Link: FC<LinkProps> & { sizes?: typeof LinkSize } = ({
  children,
  href,
  size = Link.sizes?.MEDIUM,
  withoutSpacing = false,
  className,
}) => (
  <CoreLink
    text={children}
    href={href}
    className={cx(styles.compsLink, className, {
      [styles.small]: size === Link.sizes?.SMALL,
      [styles.medium]: size === Link.sizes?.MEDIUM,
      [styles.withSpacing]: !withoutSpacing,
    })}
  />
);

export default withStaticProps(Link, { sizes: LinkSize });
