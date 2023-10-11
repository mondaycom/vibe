import React from 'react';
import PropTypes from 'prop-types';
import styles from './unstyled-list-item.module.scss';

const UnstyledListItem = ({ children }) => <li className={styles.unstyledListItem}>{children}</li>;

UnstyledListItem.propTypes = {
  children: PropTypes.element,
};

UnstyledListItem.defaultProps = {
  children: null,
};

export default UnstyledListItem;
