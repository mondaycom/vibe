import cx from 'classnames';
import React from 'react';
import Flex from '../../helpers/components/Flex/Flex';
import { ElementContent, withStaticProps } from '../../types';
import { TipTypes } from './tipConstants';
import styles from './tip.module.scss';

interface TipProps {
  children: ElementContent;
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
        <Flex gap={Flex.gaps.XS} align={Flex.align.CENTER}>
          <span>{emoji}</span>
          <span>{title}</span>
        </Flex>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default withStaticProps(Tip, {
  types: TipTypes,
});
