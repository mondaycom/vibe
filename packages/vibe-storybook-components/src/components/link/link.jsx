import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import CoreLink from '../../helpers/components/Link/Link';
import styles from './link.module.scss';

const Link = ({ children, href, size, withoutSpacing, className }) => (
  <CoreLink
    text={children}
    href={href}
    className={cx(styles.compsLink, className, {
      [styles.small]: size === Link.sizes.SMALL,
      [styles.medium]: size === Link.sizes.MEDIUM,
      [styles.withSpacing]: !withoutSpacing,
    })}
  />
);

Link.sizes = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

Link.defaultProps = {
  className: undefined,
  children: undefined,
  href: undefined,
  size: Link.sizes.MEDIUM,
  withoutSpacing: false,
};

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.oneOf([Link.sizes.SMALL, Link.sizes.MEDIUM]),
  withoutSpacing: PropTypes.bool,
};

export default Link;
