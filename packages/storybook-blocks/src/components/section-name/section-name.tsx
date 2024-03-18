import React, { useMemo } from 'react';
import cx from 'classnames';
import styles from './section-name.module.scss';

interface SectionNameProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: string;
}

const SectionName: React.FC<SectionNameProps> = ({ className, children, ...props }) => {
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

export default SectionName;
