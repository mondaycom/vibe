import React from 'react';

interface UnstyledListProps {
  children?: React.ReactNode;
}

const UnstyledList: React.FC<UnstyledListProps> = ({ children }) => {
  return <ul>{children}</ul>;
};

export default UnstyledList;
