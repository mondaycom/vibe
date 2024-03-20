import React, { useMemo } from 'react';
import { LinkTarget } from '../link/LinkConstants';
import { withStaticProps } from '../../types';
import { RelatedComponentsContext } from './related-components-context';
import styles from './related-components.module.scss';

interface RelatedComponentsProps {
  componentsNames: string[];
  descriptionComponentsMap: Map<string, JSX.Element>;
  linkTarget?: LinkTarget;
}

const RelatedComponents: React.FC<RelatedComponentsProps> & { linkTargets?: typeof LinkTarget } = ({
  componentsNames = [],
  descriptionComponentsMap,
  linkTarget,
}) => {
  const componentsDataElements = useMemo(
    () =>
      componentsNames.map((componentName, index) => {
        const key = `${componentName}_${index}`;

        return <section key={key}>{descriptionComponentsMap.get(componentName)}</section>;
      }),
    [componentsNames, descriptionComponentsMap],
  );

  return (
    <RelatedComponentsContext.Provider value={{ linkTarget }}>
      <article className={styles.relatedComponents}>{componentsDataElements}</article>
    </RelatedComponentsContext.Provider>
  );
};

export default withStaticProps(RelatedComponents, { linkTargets: LinkTarget });
