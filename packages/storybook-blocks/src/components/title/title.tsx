import React, { useMemo } from 'react';
import cx from 'classnames';
import styles from './title.module.scss';
import Anchor from '../anchor/anchor';

interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
  children: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ className, children, ...props }) => {
  const id = useMemo(
    () => children.toLowerCase().replaceAll('’', '').replaceAll("'", '').split(' ').join('-'),
    [children],
  );

  return (
    <h3 className={cx(styles.title, className)} {...props}>
      {children}
      <Anchor id={id} className={styles.anchor} />
    </h3>
  );
};

export default Title;
