import React from 'react';
import InformationBox from '../information-box/information-box';
import { ElementContent } from '../../types';
import styles from './related-component.module.scss';

interface RelatedComponentProps {
  component?: ElementContent;
  title?: string;
  description?: string;
  href: string;
}

const RelatedComponent: React.FC<RelatedComponentProps> = ({ component, title = '', description = '', href }) => (
  <InformationBox
    component={<div className={styles.relatedComponentComponent}>{component}</div>}
    title={title}
    description={description}
    href={href}
  />
);

export default RelatedComponent;
