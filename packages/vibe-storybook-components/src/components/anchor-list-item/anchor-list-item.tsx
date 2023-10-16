import { FC } from 'react';
import './anchor-list-item.scss';
import { ElementContent } from '../../types';

type AnchorListItemProps = {
  children?: ElementContent;
};

const AnchorListItem: FC<AnchorListItemProps> = ({ children = null }) => (
  <li className="vibe-sb-comps-anchor-list-item">{children}</li>
);

export default AnchorListItem;
