import PropTypes from "prop-types";
import { RelatedComponents } from "vibe-storybook-components";
import { descriptionComponentsMap } from "./component-description-map";

export const RelatedComponentsDecorator = ({ componentsNames, linkTarget }) => {
  return (
    <RelatedComponents
      componentsNames={componentsNames}
      descriptionComponentsMap={descriptionComponentsMap}
      linkTarget={linkTarget}
    />
  );
};

RelatedComponentsDecorator.propTypes = {
  componentsNames: PropTypes.arrayOf(PropTypes.string),
  linkTarget: PropTypes.string
};

RelatedComponentsDecorator.defaultProps = {
  componentsNames: [],
  linkTarget: undefined
};

export default RelatedComponentsDecorator;
