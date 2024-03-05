import React from 'react';
import cx from 'classnames';
import styles from './title.module.scss';

interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
  className?: string;
}

const Title: React.FC<TitleProps> = ({ className, ...props }) => {
  return <h3 className={cx(styles.title, className)} {...props} />;
};

export default Title;
