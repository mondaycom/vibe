import React from 'react';
import cx from 'classnames';
import styles from './title.module.scss'

const Title = ({ className, ...props }) => <h3 className={cx(styles.title, className)} {...props} />;

export default Title;
