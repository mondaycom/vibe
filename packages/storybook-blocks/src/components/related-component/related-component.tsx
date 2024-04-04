import React, { useContext } from 'react';
import InformationBox from '../information-box/information-box';
import { LinkTarget } from '../link/LinkConstants';
import { ElementContent, withStaticProps } from '../../types';
import { RelatedComponentsContext } from '../related-components/related-components-context';
import styles from './related-component.module.scss';

interface RelatedComponentProps {
  component?: ElementContent;
  title?: string;
  description?: string;
  href: string;
  linkTarget?: LinkTarget;
}

const RelatedComponent: React.FC<RelatedComponentProps> & { linkTargets?: typeof LinkTarget } = ({
  component,
  title = '',
  description = '',
  href,
  linkTarget,
}) => {
  const contextLinkTarget = useContext(RelatedComponentsContext)?.linkTarget;
  const overrideLinkTarget = linkTarget || contextLinkTarget;
  return (
    <InformationBox
      component={<div className={styles.relatedComponentComponent}>{component}</div>}
      title={title}
      description={description}
      href={href}
      linkTarget={overrideLinkTarget}
    />
  );
};

export default withStaticProps(RelatedComponent, { linkTargets: LinkTarget });
