import React from 'react';
import StatusTag from '../status-tag/status-tag';
import { type StatusTagType } from '../status-tag/status-tag';
import Flex from '../../../src/helpers/components/Flex/Flex';
import { ElementContent } from '../../types';
import styles from './sidebar-item.module.scss';

interface SidebarItemProps {
  children: ElementContent;
  status: StatusTagType;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ children, status }) => {
  return (
    <Flex className={styles.sidebarItem} justify={Flex.justify.SPACE_BETWEEN} gap={Flex.gaps.MEDIUM}>
      <span className={styles.name}>{children}</span>
      <StatusTag type={status} />
    </Flex>
  );
};

export default SidebarItem;
