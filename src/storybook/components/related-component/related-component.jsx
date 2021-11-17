import PropTypes from "prop-types";
import { InformationBox } from "../information-box/information-box";
import "./related-component.scss";

export const RelatedComponent = ({ component, title, description }) => {
  return (
    <InformationBox
      component={<div className="monday-storybook-related-component_component">{component}</div>}
      title={title}
      description={description}
    />
  );
};

RelatedComponent.propTypes = {
  component: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string
};

RelatedComponent.defaultProps = {
  component: null,
  title: "",
  description: ""
};
