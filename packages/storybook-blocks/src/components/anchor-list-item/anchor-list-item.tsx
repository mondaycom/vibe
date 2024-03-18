import { FC } from 'react';
import styles from './anchor-list-item.module.scss';
import { ElementContent } from '../../types';

type AnchorListItemProps = {
  children?: ElementContent;
};

const AnchorListItem: FC<AnchorListItemProps> = ({ children = null }) => (
  <li className={styles.anchorListItem}>{children}</li>
);

export default AnchorListItem;
