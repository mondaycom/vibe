import PropTypes from "prop-types";
import { descriptionComponentsMap } from "./component-description-map";
import { RelatedComponents } from "vibe-storybook-components";

export const RelatedComponentsDecorator = ({ componentsNames }) => {
  return <RelatedComponents componentsNames={componentsNames} descriptionComponentsMap={descriptionComponentsMap} />;
};

RelatedComponentsDecorator.propTypes = {
  componentsNames: PropTypes.arrayOf(PropTypes.string)
};

RelatedComponentsDecorator.defaultProps = {
  componentsNames: []
};

export default RelatedComponentsDecorator;
