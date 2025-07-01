import { FC } from 'react';
import cx from 'classnames';
import styles from './component-name.module.scss';

type ComponentNameProps = {
  children: string;
  className: string;
};

const ComponentName: FC<ComponentNameProps> = ({ children, className }) => (
  <h1 className={cx(styles.componentName, className)}>{children}</h1>
);

export default ComponentName;
