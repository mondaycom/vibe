import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './related-components.module.scss';

const RelatedComponents = ({ componentsNames, descriptionComponentsMap }) => {
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

RelatedComponents.propTypes = {
  componentsNames: PropTypes.arrayOf(PropTypes.string),
};

RelatedComponents.defaultProps = {
  componentsNames: [],
};

export default RelatedComponents;
