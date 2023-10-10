import React from 'react';
import StatusTag from '../status-tag/status-tag';
import { type StatusTagType } from '../status-tag/status-tag';
import Flex from '../../../src/helpers/components/Flex/Flex';
import { ElementContent } from '../../types';

interface SidebarItemProps {
  children: ElementContent;
  status: StatusTagType;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ children, status }) => {
  return (
    <Flex justify={Flex.justify.SPACE_BETWEEN} gap={Flex.gaps.MEDIUM}>
      {children}
      <StatusTag type={status} />
    </Flex>
  );
};

export default SidebarItem;
