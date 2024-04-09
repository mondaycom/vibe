import { FC } from 'react';
import cx from 'classnames';
import CoreLink from '../../helpers/components/Link/Link';
import { LinkSize, LinkTarget } from './LinkConstants';
import { withStaticProps } from '../../types';
import styles from './link.module.scss';

export type LinkProps = {
  className?: string;
  children: string;
  href: string;
  size?: LinkSize;
  withoutSpacing?: boolean;
  target?: LinkTarget;
};

const Link: FC<LinkProps> & { sizes?: typeof LinkSize; targets?: typeof LinkTarget } = ({
  children,
  href,
  size = Link.sizes?.MEDIUM,
  withoutSpacing = false,
  target = Link.targets?.NEW_WINDOW,
  className,
}) => (
  <CoreLink
    text={children}
    href={href}
    target={target}
    className={cx(styles.compsLink, className, {
      [styles.small]: size === Link.sizes?.SMALL,
      [styles.medium]: size === Link.sizes?.MEDIUM,
      [styles.withSpacing]: !withoutSpacing,
    })}
  />
);

export default withStaticProps(Link, { sizes: LinkSize, targets: LinkTarget });
