import PropTypes from "prop-types";
import { descriptionTypesMap } from "./component-description-map";
import { useMemo } from "react";
import { BEMClass } from "../../../helpers/bem-helper";
import "./related-components.scss";

const CSS_BASE_CLASS = "monday-storybook-related-components";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const RelatedComponentsDecorator = ({ componentsNames }) => {
  // TODO not working - throwing React is not defined error
  // return <RelatedComponents componentsNames={componentsNames} descriptionTypesMap={descriptionTypesMap} />;
  const componentsDataElements = useMemo(
    () =>
      componentsNames.map((componentName, index) => {
        const key = `${componentName}_${index}`;
        return (
          <section key={key} className={bemHelper({ element: "component-data" })}>
            {descriptionTypesMap.get(componentName)}
          </section>
        );
      }),
    [componentsNames]
  );
  return <article className="monday-storybook-related-components">{componentsDataElements}</article>;
};

RelatedComponentsDecorator.propTypes = {
  componentsNames: PropTypes.arrayOf(PropTypes.string)
};

RelatedComponentsDecorator.defaultProps = {
  componentsNames: []
};

export default RelatedComponentsDecorator;
