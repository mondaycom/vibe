import React, { useMemo } from 'react';
import styles from './related-components.module.scss';

interface RelatedComponentsProps {
  componentsNames: string[];
  descriptionComponentsMap: Map<string, JSX.Element>;
}

const RelatedComponents: React.FC<RelatedComponentsProps> = ({ componentsNames = [], descriptionComponentsMap }) => {
  const componentsDataElements = useMemo(
    () =>
      componentsNames.map((componentName, index) => {
        const key = `${componentName}_${index}`;

        return <section key={key}>{descriptionComponentsMap.get(componentName)}</section>;
      }),
    [componentsNames, descriptionComponentsMap],
  );

  return <article className={styles.relatedComponents}>{componentsDataElements}</article>;
};

export default RelatedComponents;
