import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { BEMClass } from '../../helpers/utils/bem-helper';
import './related-components.scss';

const CSS_BASE_CLASS = 'vibe-sb-comps-related-components';
const bemHelper = BEMClass(CSS_BASE_CLASS);

const RelatedComponents = ({ componentsNames, descriptionComponentsMap }) => {
  const componentsDataElements = useMemo(
    () =>
      componentsNames.map((componentName, index) => {
        const key = `${componentName}_${index}`;

        return (
          <section key={key} className={bemHelper({ element: 'component-data' })}>
            {descriptionComponentsMap.get(componentName)}
          </section>
        );
      }),
    [componentsNames, descriptionComponentsMap],
  );

  return <article className="vibe-sb-comps-related-components">{componentsDataElements}</article>;
};

RelatedComponents.propTypes = {
  componentsNames: PropTypes.arrayOf(PropTypes.string),
};

RelatedComponents.defaultProps = {
  componentsNames: [],
};

export default RelatedComponents;
