import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { BEMClass } from '../../helpers/utils/bem-helper';
import CoreLink from '../../helpers/components/Link/Link';
import './link.scss';

const BASE_CLASS = 'vibe-sb-comps-link';
const bemHelper = BEMClass(BASE_CLASS);

export const Link = ({ children, href, size, withoutSpacing, className }) => (
  <CoreLink
    text={children}
    href={href}
    className={cx(BASE_CLASS, className, {
      [bemHelper({ state: 'small' })]: size === Link.sizes.SMALL,
      [bemHelper({ state: 'medium' })]: size === Link.sizes.MEDIUM,
      [bemHelper({ state: 'with-spacing' })]: !withoutSpacing,
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
