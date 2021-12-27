import { useMemo } from "react";
import PropTypes from "prop-types";
import { BEMClass } from "../../../helpers/bem-helper";
import "./related-components.scss";
import { descriptionTypesMap } from "./component-description-map";

const CSS_BASE_CLASS = "monday-storybook-related-components";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const RelatedComponents = ({ componentsNames }) => {
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

RelatedComponents.propTypes = {
  componentsNames: PropTypes.arrayOf(PropTypes.string)
};

RelatedComponents.defaultProps = {
  componentsNames: []
};
