import React from 'react';
import cx from 'classnames';
import styles from './paragraph.module.scss';

const Paragraph = ({ children, className }) => <p className={cx(styles.paragraph, className)}>{children}</p>;

export default Paragraph;
