import PropTypes from "prop-types";
import { descriptionTypesMap } from "./component-description-map";
import { RelatedComponents } from "monday-ui-storybook-blocks";

export const RelatedComponentsDecorator = ({ componentsNames }) => {
  return <RelatedComponents componentsNames={componentsNames} descriptionTypesMap={descriptionTypesMap} />;
};

RelatedComponentsDecorator.propTypes = {
  componentsNames: PropTypes.arrayOf(PropTypes.string)
};

RelatedComponentsDecorator.defaultProps = {
  componentsNames: []
};

export default RelatedComponentsDecorator;
