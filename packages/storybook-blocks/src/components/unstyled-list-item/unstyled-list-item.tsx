import React from 'react';
import styles from './unstyled-list-item.module.scss';

interface UnstyledListItemProps {
  children?: React.ReactNode;
}

const UnstyledListItem: React.FC<UnstyledListItemProps> = ({ children }) => {
  return <li className={styles.unstyledListItem}>{children}</li>;
};

export default UnstyledListItem;
