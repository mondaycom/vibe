import { useMemo } from "react";
import PropTypes from "prop-types";
import { BEMClass } from "../../helpers/bem-helper";
import { RelatedComponent } from "../related-component/related-component";
import "./related-components.scss";

const CSS_BASE_CLASS = "monday-storybook-related-components";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const RelatedComponents = ({ componentsData }) => {
  const componentsDataElements = useMemo(
    () =>
      componentsData
        .map(componentData => (
          <section className={bemHelper({ element: "component-data" })}>
            <RelatedComponent
              component={componentData.component}
              title={componentData.title}
              description={componentData.description}
              isRecommended
            />
          </section>
        ))
        .flat(1),
    [componentsData]
  );
  return <article className="monday-storybook-related-components">{componentsDataElements}</article>;
};

RelatedComponents.propTypes = {
  componentsData: PropTypes.shape({
    component: PropTypes.element,
    title: PropTypes.string,
    description: PropTypes.string
  })
};

RelatedComponents.defaultProps = {
  componentsData: []
};
