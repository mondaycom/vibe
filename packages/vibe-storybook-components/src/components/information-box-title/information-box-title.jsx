import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './information-box-title.module.scss';

const InformationBoxTitle = ({ children, href }) => {
  const title = <h4 className={cx(styles.informationBoxTitle, { [styles.titleLink]: href })}>{children}</h4>;

  return href ? (
    <a className={cx({ [styles.link]: href })} href={href}>
      {title}
    </a>
  ) : (
    title
  );
};

InformationBoxTitle.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

InformationBoxTitle.defaultProps = {
  component: '',
};

export default InformationBoxTitle;
