import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './section-name.module.scss';

const SectionName = ({ className, children, ...props }) => {
  const id = useMemo(
    () => children.toLowerCase().replaceAll('’', '').replaceAll("'", '').split(' ').join('-'),
    [children],
  );

  return (
    <h2 id={id} className={cx(styles.sectionName, className)} {...props}>
      {children}
    </h2>
  );
};

SectionName.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionName;
