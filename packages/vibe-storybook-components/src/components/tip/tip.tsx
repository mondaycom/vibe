import cx from 'classnames';
import styles from './tip.module.scss';
import React from 'react';
import Flex from '../../helpers/components/Flex/Flex';

export enum TipTypes {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  DANGER = 'danger',
  DARK = 'dark',
  WARNING = 'warning',
}

export interface TipProps {
  children: React.ReactNode | string;
  title?: string;
  type?: TipTypes;
  emoji?: string;
}

const Tip: React.FC<TipProps> & {
  types?: typeof TipTypes;
} = ({ title = 'Tip', children, emoji = '🤓', type = TipTypes.DARK }) => {
  return (
    <div className={cx(styles.tip, styles[type])}>
      <div className={styles.title}>
        <Flex gap={Flex.gaps?.XS} align={Flex.align?.CENTER}>
          <span>{emoji}</span>
          <span>{title}</span>
        </Flex>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

Object.assign(Tip, {
  types: TipTypes,
});

export default Tip;
