import { FC } from 'react';
import cx from 'classnames';
import styles from './component-name.module.scss';

type ComponentNameProps = {
  children: string;
  className: string;
};

/**
 * ComponentName is a component that displays the name of the component.
 * Use className prop to give it some kind of background - image or color.
 */
const ComponentName: FC<ComponentNameProps> = ({ children, className }) => (
  <h1 className={cx(styles.componentName, className)}>{children}</h1>
);

export default ComponentName;
