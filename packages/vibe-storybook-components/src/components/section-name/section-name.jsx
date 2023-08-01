import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './section-name.scss';

export const SectionName = ({ className, children, ...props }) => {
  const id = useMemo(
    () => children.toLowerCase().replaceAll('’', '').replaceAll("'", '').split(' ').join('-'),
    [children],
  );

  return (
    <h2 id={id} className={cx('vibe-sb-comps-section-name', className)} {...props}>
      {children}
    </h2>
  );
};

SectionName.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionName;
