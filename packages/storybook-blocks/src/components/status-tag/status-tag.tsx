import { FC } from 'react';
import styles from './status-tag.module.scss';
import cx from 'classnames';

export type StatusTagType = 'alpha' | 'beta' | 'deprecated';

interface StatusTagProps {
  type: StatusTagType;
}

const StatusTag: FC<StatusTagProps> = ({ type }) => {
  return <label className={cx(styles.statusTag, styles[type])}>{type}</label>;
};

export default StatusTag;
